import { test, expect, Page, BrowserContext, chromium } from '@playwright/test'
import { HomePage } from '../../pages/HomePage.page';
import { TradeTradePage } from '../../pages/TradeTradePage.page';
import { ConnectWalletPage } from '../../pages/ConnectWalletPage';
import { EncryptedKeyPage } from '../../pages/EncryptedKeyPage';
import { LendBorrowMintPage } from '../../pages/LendBorrowMintPage';

let page: Page
let browserContext: BrowserContext
const encryptedKeplrKey = "ATkNagk48TArQzAvyB7FfqThoLq2NuXu1naRDqqJCN44hEEKULwJCGj2dHyepgMX1C3yUmknktxw3pJe1Z41zWpbE6SUfHhXvyeptoSgiRBPNpNqgKmmA824QFpP3XURoTDszYYL5MRWs1zoWZnHDjfvWJmTUtxdWBRqTfdiLYcipPKQYzRg1jdqXoAqpt51zydX6TfCTnfxBt61SFxsEgbgbb16w1puk9mGfFiysr9R3PystkTja6sX8AbNW9tMMALKQGHtuCjJCmjuBw9RZTfd4XnSmn1tHYEqTbKaBq6oRLJwyzVnyiqmAcmn2Pg7S2aUvWqwpyYe7KyqAQXVQY7vTjN8JtBBihA4TyWUYGhNimtWYw"
const passworld = 'Abc12345789'

test.beforeAll('Launch browser context with permission', async () => {
  test.setTimeout(120_000)
  const browser = await chromium.launch()
  browserContext = await browser.newContext()
  page = await browserContext.newPage()
  
  const homePage = new HomePage(page)
  await homePage.goToHomePage()
  expect(homePage.spotHistory).toBeTruthy()
  await page.waitForTimeout(10_000)

  const tradePage = new TradeTradePage(page);
  await tradePage.headerConnectWallet.click();

  const connectWalletPage = new ConnectWalletPage(page)
  await connectWalletPage.selectWallet.isVisible()

  await connectWalletPage.encryptedKeyBtn.click({ delay: 2000 })
  const encryptedKeyPage = new EncryptedKeyPage(page)

  await encryptedKeyPage.encryptedKeyTextbox.waitFor({ state: 'visible' })
  await encryptedKeyPage.encryptedKeyTextbox.click()
  await encryptedKeyPage.encryptedKeyTextbox.fill(encryptedKeplrKey)
  await encryptedKeyPage.encryptedKeyTextbox.press('Tab')
  await encryptedKeyPage.passwordTextbox.fill(passworld)
  await encryptedKeyPage.passwordTextbox.press('Tab')
  await encryptedKeyPage.connectBtn.waitFor({ state: 'visible' })
  await encryptedKeyPage.connectBtn.click({ delay: 2000 })
  await encryptedKeyPage.connectBtn.waitFor({ state: 'detached' })
  await homePage.addressDropBtn.waitFor({ state: 'visible' })

})

test.describe('Default Charts on Keplr wallet', () => {
  test('TEST_01: Make sure that the Candles chart is set default on the Perpetual chart', async () => {
    const tradePage = new TradeTradePage(page)
    await tradePage.opTokenOption.click()
    await tradePage.perpetualTab.click()
    await tradePage.opPerpOption.click()

    await tradePage.candlesToolbarChart.click()
    await tradePage.candlesChartOption.waitFor({state: 'visible'})
    await expect(tradePage.candlesChartOption).toHaveAttribute("class", /isActive-RhC5uhZw/)

  })

  test.only('TEST_02: Make sure that the Candles chart is set default on the Spot chart', async () => {
    const tradePage = new TradeTradePage(page)
    await tradePage.opTokenOption.click()
    await tradePage.spotTab.click()
    await tradePage.swthUSDOption.click()

    await tradePage.candlesToolbarChart.click()
    await tradePage.candlesChartOption.waitFor({state: 'visible'})
    await expect(tradePage.candlesChartOption).toHaveAttribute("class", /isActive-RhC5uhZw/)

  })

})
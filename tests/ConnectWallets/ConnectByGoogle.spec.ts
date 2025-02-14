import { test, expect, Page, BrowserContext, chromium } from '@playwright/test'
import { HomePage } from '../../pages/HomePage.page';
import { TradeTradePage } from '../../pages/TradeTradePage.page';
import { ConnectWalletPage } from '../../pages/ConnectWalletPage';
import { GoogleLoginPage } from '../../pages/GoogleLoginPage';

let page: Page
let browserContext: BrowserContext
const emailAddress = "demex.test2025@gmail.com"
const password = "Abc123456789@"

test.beforeAll('Launch browser context with permission', async () => {
  const browser = await chromium.launch({
    headless: false
  })
  browserContext = await browser.newContext({
    permissions: ['clipboard-read', 'clipboard-write']
  });
  page = await browserContext.newPage();

})

test('Connect with Google', async () => {
  test.setTimeout(90_000)
  const homePage = new HomePage(page)
  await homePage.goToHomePage()
  expect(homePage.spotHistory).toBeTruthy();
  await homePage.carbonTestnet.click();
  await homePage.mantle.click()
  await page.waitForTimeout(10_000)

  const tradePage = new TradeTradePage(page);
  await tradePage.headerConnectWallet.click();

  const connectWalletPage = new ConnectWalletPage(page)
  await connectWalletPage.selectWallet.isVisible()

  await connectWalletPage.connectWithGoogle.waitFor({ state: "visible" })
  await connectWalletPage.connectWithGoogle.click( { delay: 2000 })
  const googleLoginPage = new GoogleLoginPage(page)

  await googleLoginPage.emailTextbox.fill(emailAddress)
  await googleLoginPage.nextBtn.click()
  await googleLoginPage.passwordTextbox.fill(password)
  await googleLoginPage.nextBtn.click()
  await googleLoginPage.continueBtn.click()

  try {
    if(await googleLoginPage.skipForNowBtn.isVisible({timeout: 3000})){
      await googleLoginPage.skipForNowBtn.click()
    }
  } catch (error) {
    console.log("2FA screen not displayed")
  }

  await page.waitForTimeout(20_000)
  await homePage.addressDropBtn.waitFor({state: 'visible'})
  await homePage.addressDropBtn.click({ delay: 100 })
  await homePage.dropAddress2.waitFor({state: 'visible'})
  await homePage.dropAddress2.click({delay: 100})

  await homePage.copyEVMAddressBtn.click()
  const copiedEVMAddressText = await page.evaluate(() => navigator.clipboard.readText())
  console.log(copiedEVMAddressText)
  const evmPattern = /^0x[a-fA-F0-9]{40}$/
  expect(copiedEVMAddressText.trim()).toMatch(evmPattern)

})
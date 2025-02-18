import { test, expect, Page, BrowserContext, chromium } from '@playwright/test'
import { HomePage } from '../../pages/HomePage.page';
import { TradeTradePage } from '../../pages/TradeTradePage.page';
import { ConnectWalletPage } from '../../pages/ConnectWalletPage';
import { XLoginPage } from '../../pages/XLoginPage';

let page: Page
let browserContext: BrowserContext
const emailAddress = "demex.test2025@gmail.com"
const password = "Abc123456789@"
const xUsername = "DemexTest2025"

test.beforeAll('Launch browser context with permission', async () => {
  const browser = await chromium.launch()
  browserContext = await browser.newContext({
    permissions: ['clipboard-read', 'clipboard-write']
  });
  page = await browserContext.newPage();

})

test('Connect with X', async () => {
  test.setTimeout(150_000)
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

  await connectWalletPage.connectWithX.waitFor({ state: "visible" })
  await connectWalletPage.connectWithX.click( { delay: 2000 })
  const xLoginPage = new XLoginPage(page)

  await xLoginPage.signInBtn.click({delay: 1000})
  await xLoginPage.signInBtn.click({delay: 1000})
  await xLoginPage.emailTextbox.fill(emailAddress)
  await xLoginPage.nextBtn.click()

  try {
    await xLoginPage.userNameDisplayedText.waitFor({ state: 'visible', timeout: 10_000 })
    await xLoginPage.userNameTextbox.fill(xUsername)
    await xLoginPage.nextBtn.click()

  } catch (error){}

  await xLoginPage.passwordTextbox.fill(password)
  await xLoginPage.loginBtn.click()

  try {
    await xLoginPage.skipForNowBtn.waitFor({ state: 'visible', timeout: 15_000 })
    await xLoginPage.skipForNowBtn.click({ delay: 1000 })

  } catch (error){}

  await page.waitForTimeout(20_000)
  await homePage.addressDropBtn.waitFor({state: 'visible'})
  await homePage.addressDropBtn.click({ delay: 300 })
  await homePage.dropAddress2.waitFor({state: 'visible'})
  await homePage.dropAddress2.click({delay: 100})

  await homePage.copyEVMAddressBtn.click()
  const copiedEVMAddressText = await page.evaluate(() => navigator.clipboard.readText())
  console.log(copiedEVMAddressText)
  const evmPattern = /^0x[a-fA-F0-9]{40}$/
  expect(copiedEVMAddressText.trim()).toMatch(evmPattern)

})
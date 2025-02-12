import { test, expect, Page, BrowserContext, chromium } from '@playwright/test'
import { HomePage } from '../../pages/HomePage.page';
import { TradeTradePage } from '../../pages/TradeTradePage.page';
import { ConnectWalletPage } from '../../pages/ConnectWalletPage';
import { EncryptedKeyPage } from '../../pages/EncryptedKeyPage';

let page: Page
let browserContext: BrowserContext
const encryptedKey = "2SrrmLXhu2W3rX4jcELNY4GLoo6wGRVB2U7bG7uN58vokMEw8xugKW7ZdzMog2zmEGeqRx6EYfGfPEjeSGWPaebR6sECyX4Yfuo8rc1v773M3yowpKNRqJ3M5QoNbHQqCmqk59sYHVrJM8wqpZe5hvA2cak7M5oLMsLAs1rbBndsLw6fQ7FJUe3quawE8hts77aBv9RLSTRsHeLGuQcQxL15Ukgw2YxbvpGfYpheSGKDfdCJRjW9iZuw4AQwvLec9etS4a5WAZ6LkHC8kcovvaogUwyfHcKDf8w1Bz9pxZwniVvqDn6zaMF7bknJFjbPA69T7aJPQbeTqp9VEApN1r2nJYX3dCyqFJF6NcD2h2JJz"
const passworld = 'Abc123456789'

test.beforeAll('Launch browser context with permission', async () => {
  const browser = await chromium.launch()
  browserContext = await browser.newContext({
    permissions: ['clipboard-read', 'clipboard-write']
  });
  page = await browserContext.newPage();

})

test('Connect wallet by Encrypted Key', async ({}) => {
  test.setTimeout(90_000)
  const homePage = new HomePage(page)
  await homePage.goToHomePage()
  page.waitForLoadState()
  expect(homePage.spotHistory).toBeTruthy();
  await homePage.carbonTestnet.click({ timeout: 5000 });
  await homePage.mantle.click()
  await page.waitForLoadState()

  const tradePage = new TradeTradePage(page);
  await tradePage.headerConnectWallet.click();

  const connectWalletPage = new ConnectWalletPage(page)
  await connectWalletPage.selectWallet.isVisible()

  await connectWalletPage.encryptedKeyBtn.click()
  const encryptedKeyPage = new EncryptedKeyPage(page)

  await encryptedKeyPage.encryptedKeyTextbox.fill(encryptedKey)
  await encryptedKeyPage.passwordTextbox.fill(passworld)
  await encryptedKeyPage.connectBtn.click()

  await page.waitForLoadState('load')
  await page.waitForTimeout(15_000)

  await homePage.addressDropBtn.click()
  await homePage.dropAddress2.click()

  await homePage.copyEVMAddressBtn.click()
  const copiedEVMAddressText = await page.evaluate(() => navigator.clipboard.readText())
  console.log(copiedEVMAddressText)
  const evmPattern = /^0x[a-fA-F0-9]{40}$/
  expect(copiedEVMAddressText.trim()).toMatch(evmPattern)

})
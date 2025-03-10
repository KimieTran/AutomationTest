import { test, expect, Page, BrowserContext, chromium } from '@playwright/test'
import { HomePage } from '../../pages/HomePage.page';
import { TradeTradePage } from '../../pages/TradeTradePage.page';
import { ConnectWalletPage } from '../../pages/ConnectWalletPage';
import { EncryptedKeyPage } from '../../pages/EncryptedKeyPage';

let page: Page
let browserContext: BrowserContext
const encryptedLeapKey = "2SrrmLXhu2W3rX4jcELNY4GLoo6wGRVB2U7bG7uN58vokMEw8xugKW7ZdzMog2zmEGeqRx6EYfGfPEjeSGWPaebR6sECyX4Yfuo8rc1v773M3yowpKNRqJ3M5QoNbHQqCmqk59sYHVrJM8wqpZe5hvA2cak7M5oLMsLAs1rbBndsLw6fQ7FJUe3quawE8hts77aBv9RLSTRsHeLGuQcQxL15Ukgw2YxbvpGfYpheSGKDfdCJRjW9iZuw4AQwvLec9etS4a5WAZ6LkHC8kcovvaogUwyfHcKDf8w1Bz9pxZwniVvqDn6zaMF7bknJFjbPA69T7aJPQbeTqp9VEApN1r2nJYX3dCyqFJF6NcD2h2JJz"
const passworld = 'Abc123456789'

test.beforeAll('Launch browser context with permission', async () => {
  const browser = await chromium.launch()
  browserContext = await browser.newContext({
    permissions: ['clipboard-read', 'clipboard-write']
  });
  page = await browserContext.newPage()

  const homePage = new HomePage(page)
  await homePage.goToHomePage()
  expect(homePage.spotHistory).toBeTruthy();
  //await homePage.carbonTestnet.click();
  //await homePage.mantle.click()
  await page.waitForTimeout(10_000)

  const tradePage = new TradeTradePage(page);
  await tradePage.headerConnectWallet.click();

  const connectWalletPage = new ConnectWalletPage(page)
  await connectWalletPage.selectWallet.isVisible()

  await connectWalletPage.encryptedKeyBtn.click({ delay: 2000 })
  const encryptedKeyPage = new EncryptedKeyPage(page)

  await encryptedKeyPage.encryptedKeyTextbox.waitFor({ state: 'visible' })
  await encryptedKeyPage.encryptedKeyTextbox.click()
  await encryptedKeyPage.encryptedKeyTextbox.fill(encryptedLeapKey)
  await encryptedKeyPage.encryptedKeyTextbox.press('Tab')
  await encryptedKeyPage.passwordTextbox.fill(passworld)
  await encryptedKeyPage.passwordTextbox.press('Tab')
  await encryptedKeyPage.connectBtn.waitFor({ state: 'visible' })
  await encryptedKeyPage.connectBtn.click({ delay: 2000 })
  await encryptedKeyPage.connectBtn.waitFor({ state: 'detached' })
  
  await homePage.addressDropBtn.waitFor({ state: 'visible' })

})

test.describe('Trading Token by Encrypted Key', () => {
  test('TC_DEMEX_TO_1: Place a buy order, verify appearance in order book', async () => {
    const homePage = new HomePage(page)
    await homePage.goToHomePage()
    await page.waitForLoadState()

    const tradePage = new TradeTradePage(page)
    await tradePage.opTokenOption.click()
    await tradePage.spotTab.click()
    await tradePage.searchToken.fill('SWTH / USD')
    await tradePage.swthUSDOption.click()
    await tradePage.amountToken.fill('1000')
    await tradePage.buyBtn.click()
    await tradePage.confirmBtn.click()

    await expect(tradePage.orderPlacedPopup).toBeVisible({ timeout: 10_000 })

    const expectedTableData = [
      {
        'Market': 'SWTH / USD',
        'Type': 'Limit|Buy',
        'Filled': '0 SWTH$0.00',
      }
    ]
    await tradePage.verifyTableData(expectedTableData)

  })

  test('TC_DEMEX_TO_4: Cancel an active order and confirm removal', async () => {
    await page.reload()
    await page.waitForLoadState()
    const tradePage = new TradeTradePage(page)
    await tradePage.cancelBtn.click()

    await expect(tradePage.orderedCancelledPopup).toBeVisible({ timeout: 10_000 })
  })

  test('TC_DEMEX_TO_2: Place a sell order, verify appearance in order book', async () => {
    await page.reload()
    await page.waitForLoadState()
    const tradePage = new TradeTradePage(page)
    await tradePage.amountToken.fill('1000')
    await tradePage.switchingBtn.click()
    await tradePage.sellBtn.click()
    await tradePage.confirmBtn.click()

    await expect(tradePage.orderPlacedPopup).toBeVisible({ timeout: 10_000 })

    const expectedTableData = [
      {
        'Market': 'SWTH / USD',
        'Type': 'Limit|Sell',
        'Filled': '0 SWTH$0.00',
      }
    ]
    await tradePage.verifyTableData(expectedTableData)

    await tradePage.cancelBtn.click()
    await expect(tradePage.orderedCancelledPopup).toBeVisible({ timeout: 10_000 })

  })

  test('TC_DEMEX_TO_3: Test limit and market orders for a range of assets', async () => {
    await page.reload()
    await page.waitForLoadState()
    const tradePage = new TradeTradePage(page)
    await tradePage.marketBtn.click()
    await tradePage.buyBtn.waitFor({ state: 'visible' })
    await tradePage.amountOnMarket.fill('1000')
    await tradePage.buyBtn.click()
    await tradePage.confirmBtn.click()

    await expect(tradePage.tradeExecutedPopup).toBeVisible({ timeout: 10_000 })

  })
})

test.afterAll('Reset data', async () => {
  const homePage = new HomePage(page)
  await homePage.goToHomePage()
  await page.waitForLoadState()

  const tradePage = new TradeTradePage(page)
  try {
    await tradePage.cancelAllBtn.click({ timeout: 10_000 })
    await tradePage.confirmBtn.click()
    await expect(tradePage.orderedCancelledPopup).toBeVisible({ timeout: 10_000 })
  } catch (e) { }

})
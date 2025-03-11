import { test, expect, Page, BrowserContext } from '@playwright/test'
import { createBrowserContext } from "../../utils/create-browser-context";
import { HomePage } from '../../pages/HomePage.page';
import { TradeTradePage } from '../../pages/TradeTradePage.page';
import { ConnectWalletPage } from '../../pages/ConnectWalletPage';
import { PhantomPage } from '../../pages/PhantomPage';

let page: Page
let browserContext: BrowserContext
const srpArr = ["doll", "injury", "material", "wise", "matrix", "pet", "debate", "asset", "forest", "online", "toss", "holiday"]
const password = 'Abc123456789'
const extensionName = "phantom"

test.beforeAll('Add extension: Phantom', async () => {
  test.setTimeout(120_000)
  browserContext = await createBrowserContext(extensionName)
  page = await browserContext.newPage()

  const [newPage] = await Promise.all([
    browserContext.waitForEvent('page'),
  ]);
  await newPage.waitForLoadState()
  
  const phantomPage = new PhantomPage(newPage)
  await phantomPage.alreadyHaveWalletBtn.click()
  await phantomPage.importSecretRecoveryPhraseBtn.click()

  for (let i = 0; i < srpArr.length; i++) {
    await phantomPage.secretRecoveryPhrases(i).fill(srpArr[i])
  }
  await phantomPage.importWalletBtn.click()
  await phantomPage.continueBtn.click()
  await phantomPage.newPasswordTextBox.fill(password)
  await phantomPage.confirmPasswordTextBox.fill(password)
  await phantomPage.termServiceCheckbox.click()
  await phantomPage.continueBtn.click()
  //await phantomPage.submitBtn.click({ delay: 1000 })

  await page.bringToFront()
  const homePage = new HomePage(page)
  await homePage.goToHomePage()
  page.waitForLoadState()
  expect(homePage.spotHistory).toBeTruthy();
  //await homePage.carbonTestnet.click();
  //await homePage.mantle.click()
  await page.waitForLoadState()

  await page.waitForTimeout(10_000)
  const tradePage = new TradeTradePage(page);
  await tradePage.headerConnectWallet.click();

  const connectWalletPage = new ConnectWalletPage(page)
  await connectWalletPage.selectWallet.isVisible()
  await connectWalletPage.phantomBtn.waitFor({ state: 'visible' })

  const [newPage1] = await Promise.all([
    browserContext.waitForEvent('page'),
    await connectWalletPage.phantomBtn.click({ delay: 1000 })
  ]);
  await newPage1.waitForLoadState()

  const phantomPage1 = new PhantomPage(newPage1)
  const [newPage2] = await Promise.all([
    browserContext.waitForEvent('page'),
    await phantomPage1.connectBtn.click({ delay: 1000 })
  ]);
  await newPage2.waitForLoadState()

  const phantomPage2 = new PhantomPage(newPage2)
  await phantomPage2.connectBtn.waitFor({ state: 'visible' })
  await phantomPage2.connectBtn.click({ delay: 1000 })
  await homePage.addressPhantomDropBtn.waitFor({ state: 'visible' })

})
test.describe(' Trading Token with Phantom wallet ', () => {
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

    const [newPage2] = await Promise.all([
      browserContext.waitForEvent('page'),
      await tradePage.confirmBtn.click()
    ]);
    await newPage2.waitForLoadState()

    const phantomPage2 = new PhantomPage(newPage2)
    await phantomPage2.connectBtn.waitFor({ state: 'visible' })
    await phantomPage2.connectBtn.click({ delay: 1000 })

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

    const [newPage3] = await Promise.all([
      browserContext.waitForEvent('page'),
      await tradePage.cancelBtn.click()
    ]);
    await newPage3.waitForLoadState()

    const phantomPage3 = new PhantomPage(newPage3)
    await phantomPage3.connectBtn.waitFor({ state: 'visible' })
    await phantomPage3.connectBtn.click({ delay: 1000 })

    await expect(tradePage.orderedCancelledPopup).toBeVisible({ timeout: 10_000 })
  })

  test('TC_DEMEX_TO_2: Place a sell order, verify appearance in order book', async () => {
    await page.reload()
    await page.waitForLoadState()
    const tradePage = new TradeTradePage(page)
    await tradePage.amountToken.fill('1000')
    await tradePage.switchingBtn.click()
    await tradePage.sellBtn.click()

    const [newPage2] = await Promise.all([
      browserContext.waitForEvent('page'),
      await tradePage.confirmBtn.click()
    ]);
    await newPage2.waitForLoadState()

    const phantomPage2 = new PhantomPage(newPage2)
    await phantomPage2.connectBtn.waitFor({ state: 'visible' })
    await phantomPage2.connectBtn.click({ delay: 1000 })

    await expect(tradePage.orderPlacedPopup).toBeVisible({ timeout: 10_000 })

    const expectedTableData = [
      {
        'Market': 'SWTH / USD',
        'Type': 'Limit|Sell',
        'Filled': '0 SWTH$0.00',
      }
    ]
    await tradePage.verifyTableData(expectedTableData)

  })

  test('TC_DEMEX_TO_3: Test limit and market orders for a range of assets', async () => {
    await page.reload()
    await page.waitForLoadState()
    const tradePage = new TradeTradePage(page)
    await tradePage.marketBtn.click()
    await tradePage.buyBtn.waitFor({ state: 'visible' })
    await tradePage.amountOnMarket.fill('1000')
    await tradePage.buyBtn.click()

    const [newPage2] = await Promise.all([
      browserContext.waitForEvent('page'),
      await tradePage.confirmBtn.click()
    ]);
    await newPage2.waitForLoadState()

    const phantomPage2 = new PhantomPage(newPage2)
    await phantomPage2.connectBtn.waitFor({ state: 'visible' })
    await phantomPage2.connectBtn.click({ delay: 1000 })

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

    const [newPage2] = await Promise.all([
      browserContext.waitForEvent('page'),
      await tradePage.confirmBtn.click()
    ]);
    await newPage2.waitForLoadState()
  
    const phantomPage2 = new PhantomPage(newPage2)
    await phantomPage2.connectBtn.waitFor({ state: 'visible' })
    await phantomPage2.connectBtn.click({ delay: 1000 })
  
    await expect(tradePage.orderedCancelledPopup).toBeVisible({ timeout: 10_000 })
  } catch (e) { }

})
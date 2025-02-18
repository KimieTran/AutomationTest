import { test, expect, Page, BrowserContext, chromium } from '@playwright/test'
import { HomePage } from '../../pages/HomePage.page';
import { TradeTradePage } from '../../pages/TradeTradePage.page';
import { ConnectWalletPage } from '../../pages/ConnectWalletPage';
import { ViewOnlyModePage } from '../../pages/ViewOnlyModePage';

let page: Page
let browserContext: BrowserContext
const swth1Address = "swth1vdq8dk82v4r2dw7xyhswk8q7c9fxdh09mrprhw"

test.beforeAll('Launch browser context with permission', async () => {
  const browser = await chromium.launch()
  browserContext = await browser.newContext({
    permissions: ['clipboard-read', 'clipboard-write']
  });
  page = await browserContext.newPage();

})

test('Connect wallet by View Only Mode', async () => {
  test.setTimeout(90_000)
  const homePage = new HomePage(page)
  await homePage.goToHomePage()
  expect(homePage.spotHistory).toBeTruthy();
  await homePage.carbonTestnet.click();
  await homePage.mantle.click()
  await page.waitForTimeout(15_000)

  const tradePage = new TradeTradePage(page);
  await tradePage.headerConnectWallet.click();

  const connectWalletPage = new ConnectWalletPage(page)
  await connectWalletPage.selectWallet.isVisible()

  await connectWalletPage.viewOnlyMode.waitFor({ state: "visible" })
  await connectWalletPage.viewOnlyMode.scrollIntoViewIfNeeded()
  await connectWalletPage.viewOnlyMode.click( { delay: 2000 })
  const viewOnlyModePage = new ViewOnlyModePage(page)

  await viewOnlyModePage.walletAddressTextbox.click()
  await viewOnlyModePage.walletAddressTextbox.fill(swth1Address)
  await viewOnlyModePage.viewBtn.click({ delay: 2000 })
  await viewOnlyModePage.viewBtn.waitFor({state: 'detached'})

  await page.waitForTimeout(15_000)
  await homePage.addressDropBtn.waitFor({state: 'visible'})
  await homePage.addressDropBtn.click({ delay: 100 })
  await homePage.firstCopyClipBoardBtn.waitFor({state: 'visible'})
  await homePage.firstCopyClipBoardBtn.click({ delay: 100 })

  const copiedSWTH1ddressText = await page.evaluate(() => navigator.clipboard.readText())
  expect(copiedSWTH1ddressText.trim()).toMatch(swth1Address)

})
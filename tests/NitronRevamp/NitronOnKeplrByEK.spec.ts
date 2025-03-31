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
  expect(homePage.spotHistory).toBeTruthy();
  //await homePage.demexTestnet.click();
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
  await encryptedKeyPage.encryptedKeyTextbox.fill(encryptedKeplrKey)
  await encryptedKeyPage.encryptedKeyTextbox.press('Tab')
  await encryptedKeyPage.passwordTextbox.fill(passworld)
  await encryptedKeyPage.passwordTextbox.press('Tab')
  await encryptedKeyPage.connectBtn.waitFor({ state: 'visible' })
  await encryptedKeyPage.connectBtn.click({ delay: 2000 })
  await encryptedKeyPage.connectBtn.waitFor({ state: 'detached' })
  await homePage.addressDropBtn.waitFor({ state: 'visible' })

  await homePage.earnBtn.click()
  await homePage.lendBorrowMintItem.click()
})

test.describe('Nitron on Keplr by Encrypted Key', () => {
  test('TC_NITRON_02: Check the colums in the "All Markets" table', async () => {
    const lendBorrowMintPage = new LendBorrowMintPage(page)

    const expectedHeaders = [
      'Asset',
      'Total Lent',
      'Lend APY',
      'Available to Borrow',
      'Borrow APY',
      'In Wallet'
    ]

    await page.waitForTimeout(3000)
    const headers = await lendBorrowMintPage.headersText.allInnerTexts()

    const actualHeaders: string[] = []
    for (const header of headers) {
        if (header.trim() !== '') {
            actualHeaders.push(header.trim())
        }
    }
    expect(actualHeaders).toEqual(expectedHeaders)

  })

  test('TC_NITRON_05: Check the link "How it Works"', async () => {
    await page.reload()
    await page.waitForLoadState()

    const lendBorrowMintPage = new LendBorrowMintPage(page)
    await lendBorrowMintPage.howItWorkBtn.click()
    await lendBorrowMintPage.xBtn.waitFor({ state: 'visible' })
    await expect(lendBorrowMintPage.xBtn).toBeVisible()
    
    await lendBorrowMintPage.xBtn.click()
    await expect(lendBorrowMintPage.xBtn).not.toBeVisible()

  })

  test('TC_NITRON_06: Chek the components of the "Hown it Works" drop down', async () => {
    await page.reload()
    await page.waitForLoadState()

    const lendBorrowMintPage = new LendBorrowMintPage(page)
    await lendBorrowMintPage.howItWorkBtn.click()
  
    await expect(lendBorrowMintPage.step1Logo).toBeVisible()
    await expect(lendBorrowMintPage.step2Logo).toBeVisible()
    await expect(lendBorrowMintPage.step3Logo).toBeVisible()
    await expect(lendBorrowMintPage.step4Logo).toBeVisible()
    await expect(lendBorrowMintPage.learnMoreLink).toBeVisible()
    
  })

  test('TC_DEMEX_NITRON_1: Access Nitron; test borrowing and lending with assets', async () => {
    await page.reload()
    await page.waitForLoadState()

    const lendBorrowMintPage = new LendBorrowMintPage(page)
    await lendBorrowMintPage.searchTextbox.fill('USD')
    await lendBorrowMintPage.usdLendBtn.click({delay: 1000})
    await lendBorrowMintPage.amountTextbox.fill('1')
    await lendBorrowMintPage.lendBtn.click()
    await expect(lendBorrowMintPage.transactionText).toBeVisible()

    await page.reload()
    await lendBorrowMintPage.backBtn.click()
    await lendBorrowMintPage.searchTextbox.fill('USD')
    await lendBorrowMintPage.usdBorrowBtn.click({delay: 1000})
    await lendBorrowMintPage.amountTextbox.fill('1')
    await lendBorrowMintPage.borrowBtn.click()
    await expect(lendBorrowMintPage.transactionText).toBeVisible()
    await page.reload()
    await lendBorrowMintPage.backBtn.click()

  })

  test('TC_NITRON_12: Verify that the filter all E-Mode related assets to top of page sort by Lend APY', async () => {
    await page.reload()
    await page.waitForLoadState()
    const lendBorrowMintPage = new LendBorrowMintPage(page)
    await expect(lendBorrowMintPage.eMode).toBeVisible()

    await page.waitForSelector('table')
    await lendBorrowMintPage.usdLendBtn.waitFor({state: 'visible'})

    const lendApyValues = await lendBorrowMintPage.getLendApyColumnValues()
    const sortedLendAPYValues = [...lendApyValues].sort((a, b) => b - a)
    expect(lendApyValues).toEqual(sortedLendAPYValues)

  })

  test('TC_NITRON_13: Check the tooltip of the record collaterallizing the asset boosts on E-mode', async () => {
    await page.reload()
    await page.waitForLoadState()

    const lendBorrowMintPage = new LendBorrowMintPage(page)
    await lendBorrowMintPage.usdLendBtn.waitFor({state: 'visible'})
    await lendBorrowMintPage.enableModeBtn.click()
    await lendBorrowMintPage.selectCategoryDropdown.click()
    await lendBorrowMintPage.stablecoinsOption.click()
    await lendBorrowMintPage.enableBtn.click()

    await lendBorrowMintPage.backBtn.click()
    await lendBorrowMintPage.searchTextbox.fill('USD')
    await lendBorrowMintPage.thunderIcon.click()
    await expect(lendBorrowMintPage.thunderTooltips).toBeVisible()

    await page.reload()
    await lendBorrowMintPage.stableCoinsBtn.click()
    await lendBorrowMintPage.disableEModeBtn.check()
    await lendBorrowMintPage.disableBtn.click()
    await lendBorrowMintPage.backBtn.click()
  })

  test('TC_NITRON_15: Verify that the Lending and Borrowing pages are separated into different pages', async () => {
    await page.reload()
    await page.waitForLoadState()

    const lendBorrowMintPage = new LendBorrowMintPage(page)
    await lendBorrowMintPage.yourPositionsItem.click()
    await lendBorrowMintPage.lendingTab.click()

    const expectedLendingHeaders = [
      'Asset',
      'Amount',
      'Collateral',
      'Lend APY'
    ]

    await page.waitForTimeout(3000)
    const lendingHeaders = await lendBorrowMintPage.headersText.allInnerTexts()

    const actualLendingHeaders: string[] = []
    for (const header of lendingHeaders) {
        if (header.trim() !== '') {
            actualLendingHeaders.push(header.trim())
        }
    }
    expect(actualLendingHeaders).toEqual(expectedLendingHeaders)

    await lendBorrowMintPage.borrowingTab.click()
    const expectedBorrowingHeaders = [
      'Asset',
      'Debt',
      'Borrow APY',
      'Available to Borrow'
    ]

    await page.waitForTimeout(3000)
    const borrowingHeaders = await lendBorrowMintPage.headersText.allInnerTexts()

    const actualBorrowingHeaders: string[] = []
    for (const header of borrowingHeaders) {
        if (header.trim() !== '') {
          actualBorrowingHeaders.push(header.trim())
        }
    }
    expect(actualBorrowingHeaders).toEqual(expectedBorrowingHeaders)
  })

  test('TC_NITRON_21: Verify that the Liquidation Risk Parameters pop-up will be displayed when clicking on the "View Details" of the Health Factor', async () => {
    await page.reload()
    await page.waitForLoadState()

    const lendBorrowMintPage = new LendBorrowMintPage(page)
    await lendBorrowMintPage.yourPositionsItem.click()

    await lendBorrowMintPage.viewDetailsBtn.click()
    await expect(lendBorrowMintPage.popupLiquidRiskParamsText).toBeVisible()
    await expect(lendBorrowMintPage.contentUnderPopupTitle).toBeVisible()
    await expect(lendBorrowMintPage.healthFactorArea).toBeVisible()
    await expect(lendBorrowMintPage.currentLTVArea).toBeVisible()
    await lendBorrowMintPage.xPopupBtn.click()

  })

  test('TC_NITRON_24: Check that the E-Mode is on the Lending page', async () => {
    await page.reload()
    await page.waitForLoadState()

    const lendBorrowMintPage = new LendBorrowMintPage(page)
    await lendBorrowMintPage.usdLendBtn.waitFor({state: 'visible'})
    await lendBorrowMintPage.enableModeBtn.click()
    await lendBorrowMintPage.selectCategoryDropdown.click()
    await lendBorrowMintPage.stablecoinsOption.click()
    await lendBorrowMintPage.enableBtn.click()
    await lendBorrowMintPage.backBtn.click()

    await lendBorrowMintPage.yourPositionsItem.click()
    await lendBorrowMintPage.lendingTab.click()
    await expect(lendBorrowMintPage.eMode).toBeVisible()
    await expect(lendBorrowMintPage.eModeThunderIcon).toBeVisible()

    await page.reload()
    await lendBorrowMintPage.stableCoinsBtn.click()
    await lendBorrowMintPage.disableEModeBtn.check()
    await lendBorrowMintPage.disableBtn.click()
    await lendBorrowMintPage.backBtn.click()

  })

  test('TC_NITRON_26: Check the tooltip of the E-mode', async () => {
    await page.reload()
    await page.waitForLoadState()

    const lendBorrowMintPage = new LendBorrowMintPage(page)
    await lendBorrowMintPage.usdLendBtn.waitFor({state: 'visible'})
    await lendBorrowMintPage.enableModeBtn.click()
    await lendBorrowMintPage.selectCategoryDropdown.click()
    await lendBorrowMintPage.stablecoinsOption.click()
    await lendBorrowMintPage.enableBtn.click()
    await lendBorrowMintPage.backBtn.click()

    await lendBorrowMintPage.yourPositionsItem.click()
    await lendBorrowMintPage.borrowingTab.click()
    await page.pause()

    await lendBorrowMintPage.eMode.hover()
    await expect(lendBorrowMintPage.eModeTooltips).toBeVisible()
    await expect(lendBorrowMintPage.learnMoreLinkTooltips).toBeVisible()

    await page.reload()
    await lendBorrowMintPage.stableCoinsBtn.click()
    await lendBorrowMintPage.disableEModeBtn.check()
    await lendBorrowMintPage.disableBtn.click()
    await lendBorrowMintPage.backBtn.click()

  })

})
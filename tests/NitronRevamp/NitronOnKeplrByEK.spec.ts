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
  await page.pause()

})

test.describe('Nitron on Keplr by Encrypted Key', () => {
  test('TC_NITRON_02: Check the colums in the "All Markets" table', async () => {
    const homePage = new HomePage(page)
    await homePage.earnBtn.click()
    await homePage.lendBorrowMintItem.click()

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
      'Amount',
      'Collateral',
      'Lend APY'
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

})
import { test, expect, Page, BrowserContext } from '@playwright/test'
import { createBrowserContext } from "../../utils/create-browser-context";
import { HomePage } from '../../pages/HomePage.page';
import { TradeTradePage } from '../../pages/TradeTradePage.page';
import { ConnectWalletPage } from '../../pages/ConnectWalletPage';
import { MetaMaskPage } from '../../pages/MetaMaskPage';
import { DepositPage } from '../../pages/DepositPage';
import { WithdrawPage } from '../../pages/WithdrawPage';

let page: Page
let browserContext: BrowserContext
const srpArr = ['deal', 'payment', 'cigar', 'breeze', 'vast', 'curve', 'west', 'six', 'doll', 'convince', 'page', 'wing']
const passworld = 'Abc12345789'
const extensionName = "metamask"
const phantomSwthAddress = 'tswth1r5kh40kknhw7e02qyzyz50zsfj8xyvfsq9lvxp'

test.beforeAll('Add extension: MetaMask', async () => {
  test.setTimeout(90_000)
  browserContext = await createBrowserContext(extensionName)
  page = await browserContext.newPage()

  const [metaPage] = await Promise.all([
    browserContext.waitForEvent('page'),
  ]);
  await metaPage.waitForLoadState()
  await metaPage.bringToFront()

  const metaMaskPage = new MetaMaskPage(metaPage)
  await metaMaskPage.createNewWalletBtn.isVisible()
  await metaMaskPage.importExistingWalletBtn.isVisible()
  await metaMaskPage.agreeMetaMaskCheckbox.click()
  await metaMaskPage.importExistingWalletBtn.click()
  await metaMaskPage.noThankBtn.click()

  for (var i = 0; i < srpArr.length; i++) {
    await metaMaskPage.secretRecoveryPhrases(i).fill(srpArr[i])
  }

  await metaMaskPage.confirmSRPBtn.click()
  await metaMaskPage.newPasswordTextBox.fill(passworld)
  await metaMaskPage.confirmPasswordTextBox.fill(passworld)
  await metaMaskPage.metaMaskTermsCheckbox.click()
  await metaMaskPage.importMyWalletBtn.click()
  await metaMaskPage.doneBtn.click()
  await metaMaskPage.nextBtn.click()
  await metaMaskPage.done2Btn.click()
  
  await page.bringToFront()

})

test.describe.serial('Connect MetaMask wallet & Verify deposit', () => {
  test('Connect MetaMask wallet', async () => {
    test.setTimeout(200_000)
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
    await connectWalletPage.metaMaskBtn.waitFor({ state: 'visible' })
/*
    const [newPage1] = await Promise.all([
      browserContext.waitForEvent('page'),
      await connectWalletPage.metaMaskBtn.click({ delay: 1000 })
    ]);
    await newPage1.waitForLoadState()
*/
    const newPagePromise = browserContext.waitForEvent('page')
    await connectWalletPage.metaMaskBtn.click({ delay: 1000 })
    const newPage1 = await newPagePromise
    await newPage1.waitForLoadState()
    const metaMaskPage1 = new MetaMaskPage(newPage1)
    await metaMaskPage1.connectBtn.click({ delay: 1000 })

    const [newPage2] = await Promise.all([
      browserContext.waitForEvent('page'),
    ]);
    await newPage2.waitForLoadState()

    const metaMaskPage2 = new MetaMaskPage(newPage2)
    await metaMaskPage2.confirmFooterBtn.click({ delay: 1000 })

    await page.waitForTimeout(20_000)
    await homePage.addressMetaMaskDropBtn.waitFor({ state: 'visible' })
    await homePage.addressMetaMaskDropBtn.click({ delay: 100 })
    await homePage.dropAddress2.waitFor({ state: 'visible' })
    await homePage.dropAddress2.click({ delay: 100 })

    await homePage.copyEVMAddressBtn.click()
    const copiedEVMAddressText = await page.evaluate(() => navigator.clipboard.readText())
    console.log(copiedEVMAddressText)
    const evmPattern = /^0x[a-fA-F0-9]{40}$/
    expect(copiedEVMAddressText.trim()).toMatch(evmPattern)

  })

  test.skip('Verify that the validation form is presented when user performed deposit amount = 0', async () => {
    const depositPage = new DepositPage(page)
    await depositPage.depositBtn.click()
    await depositPage.myBrowerWallet.click()
    await depositPage.selectNetworkBtn.click()
    await depositPage.networkOption('Ethereum').click()
    await depositPage.amountTextbox.fill('0')
    await depositPage.metaMaskDepositBtn.click()
    await expect(depositPage.errorAmountMsg).toBeVisible()
  })

  test('Verify that the withdraw can be executed with other wallets address', async () => {
    const depositPage = new DepositPage(page)
    await depositPage.depositBtn.click()
    //await depositPage.myBrowerWallet.click()

    const homePage = new HomePage(page)
    await homePage.withdrawnTab.click()

    const withdrawPage = new WithdrawPage(page)
    await withdrawPage.selectToken.click()
    await withdrawPage.swthTokenOption.click()
    await withdrawPage.recipientAddrTextbox.fill(phantomSwthAddress)
    await withdrawPage.amountTextbox.fill('1')

    const [popup] = await Promise.all([
      browserContext.waitForEvent('page'),
      await withdrawPage.withdrawBtn.click()
    ]);
    await popup.waitForLoadState()

    const confirmPage = new MetaMaskPage(popup)
    await confirmPage.confirmFooterBtn.waitFor({ state: 'visible' })
    await confirmPage.confirmFooterBtn.click({ delay: 1000 })

    await expect(withdrawPage.transactionSuccess).toBeVisible()
  })
})
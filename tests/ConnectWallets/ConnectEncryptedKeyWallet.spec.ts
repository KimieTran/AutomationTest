import { test, expect, Page, BrowserContext, chromium } from '@playwright/test'
import { HomePage } from '../../pages/HomePage.page';
import { TradeTradePage } from '../../pages/TradeTradePage.page';
import { ConnectWalletPage } from '../../pages/ConnectWalletPage';
import { EncryptedKeyPage } from '../../pages/EncryptedKeyPage';
import { DepositPage } from '../../pages/DepositPage';
import { WithdrawPage } from '../../pages/WithdrawPage';

let page: Page
let browserContext: BrowserContext
const encryptedLeapKey = "2SrrmLXhu2W3rX4jcELNY4GLoo6wGRVB2U7bG7uN58vokMEw8xugKW7ZdzMog2zmEGeqRx6EYfGfPEjeSGWPaebR6sECyX4Yfuo8rc1v773M3yowpKNRqJ3M5QoNbHQqCmqk59sYHVrJM8wqpZe5hvA2cak7M5oLMsLAs1rbBndsLw6fQ7FJUe3quawE8hts77aBv9RLSTRsHeLGuQcQxL15Ukgw2YxbvpGfYpheSGKDfdCJRjW9iZuw4AQwvLec9etS4a5WAZ6LkHC8kcovvaogUwyfHcKDf8w1Bz9pxZwniVvqDn6zaMF7bknJFjbPA69T7aJPQbeTqp9VEApN1r2nJYX3dCyqFJF6NcD2h2JJz"
const passworld = 'Abc123456789'
const phantomSwthAddress = 'tswth1r5kh40kknhw7e02qyzyz50zsfj8xyvfsq9lvxp'

test.beforeAll('Launch browser context with permission', async () => {
  const browser = await chromium.launch()
  browserContext = await browser.newContext({
    permissions: ['clipboard-read', 'clipboard-write']
  });
  page = await browserContext.newPage();

})

test.describe.serial('Connect Leap wallet  by Encrypted Key & Verify deposit', () => {
  test('Connect Leap wallet by Encrypted Key', async () => {
    test.setTimeout(120_000)
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

    await page.waitForTimeout(20_000)
    await homePage.addressDropBtn.waitFor({ state: 'visible' })
    await homePage.addressDropBtn.click({ delay: 100 })
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
    await depositPage.networkOption('Carbon EVM').click()
    await depositPage.amountTextbox.fill('0')
    await depositPage.leapDepositBtn.click()
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
    await withdrawPage.withdrawBtn.click()

    await expect(withdrawPage.transactionSuccess).toBeVisible()
  })
})
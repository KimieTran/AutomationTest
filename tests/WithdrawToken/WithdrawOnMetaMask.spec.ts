import { test, expect, Page, BrowserContext, chromium } from '@playwright/test'
import { HomePage } from '../../pages/HomePage.page';
import { TradeTradePage } from '../../pages/TradeTradePage.page';
import { ConnectWalletPage } from '../../pages/ConnectWalletPage';
import { DepositPage } from '../../pages/DepositPage';
import { WithdrawPage } from '../../pages/WithdrawPage';
import { EncryptedKeyPage } from '../../pages/EncryptedKeyPage';

let page: Page
let browserContext: BrowserContext
const encryptedMetaMaskKey = "3uQMeX7XfUJGGxC5J3deTBPDemwZYsaziyEXPJMpTqLEwztgb5kQtf3ChJ5Lq6HGGs9oKNsTuWw2VdC3m8uLsy6WKSYx5eosXBa8Sxq17kUqSNrFiav5kyTmD9QCLNvxY1Nj9tZ9UBq3hJ5xZifZY4QUeQyWJxZeZw8BH8nLaw1zhEsEjBrBEpHGQHdHdX8mfCjrZKHs1Z4gJDjALQFRkCVRws7Dogaw3VZWXRSy6zDDEPpDDKorKztvc2mwnV5vvaXsEcxVpTbwxTPGnKdWxvYJ6gha95DMt96oLvSdsUjatiyDXtdmSmvW8k668Sa6pJcDjhiFZfFJzMxv1jmnHFQZk6RmZQD39G2ThS"
const passworld = 'Abc12345789'
const phantomSwthAddress = 'tswth1r5kh40kknhw7e02qyzyz50zsfj8xyvfsq9lvxp'

test.beforeAll('Connect Keplr wallet by Encrypted Key', async () => {
  test.setTimeout(120_000)
  const browser = await chromium.launch()
  browserContext = await browser.newContext()
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
  await encryptedKeyPage.encryptedKeyTextbox.fill(encryptedMetaMaskKey)
  await encryptedKeyPage.encryptedKeyTextbox.press('Tab')
  await encryptedKeyPage.passwordTextbox.fill(passworld)
  await encryptedKeyPage.passwordTextbox.press('Tab')
  await encryptedKeyPage.connectBtn.waitFor({ state: 'visible' })
  await encryptedKeyPage.connectBtn.click({ delay: 2000 })
  await encryptedKeyPage.connectBtn.waitFor({ state: 'detached' })
  await homePage.addressDropBtn.waitFor({ state: 'visible' })

})
test.describe(' Withdraw Token with Keplr wallet ', () => {
  test('DEPOSIT_UI_V2_08: Check the active Withdraw button on the Deposit page', async () => {
    await page.reload()
    await page.waitForLoadState()
    const depositPage = new DepositPage(page)
    await depositPage.depositBtn.click()

    const homePage = new HomePage(page)
    await homePage.withdrawnTab.click()

    const withdrawPage = new WithdrawPage(page)
    await withdrawPage.selectToken.click()
    await withdrawPage.swthTokenOption.click()
    await withdrawPage.withdrawBtn.click()
    await expect(withdrawPage.invalidAddressErrorMsg).toBeVisible()
    await expect(withdrawPage.invalidAmountErrorMsg).toBeVisible()

  })

  test('TC_WTD_MW_001: Verify that the withdraw can be executed with other wallets address', async () => {
    await page.reload()
    await page.waitForLoadState()
    const depositPage = new DepositPage(page)
    await depositPage.depositBtn.click()

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

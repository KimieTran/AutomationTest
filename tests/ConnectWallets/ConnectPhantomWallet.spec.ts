import { test, expect, Page, BrowserContext } from '@playwright/test'
import { createBrowserContext } from "../../utils/create-browser-context";
import { HomePage } from '../../pages/HomePage.page';
import { TradeTradePage } from '../../pages/TradeTradePage.page';
import { ConnectWalletPage } from '../../pages/ConnectWalletPage';
import { PhantomPage } from '../../pages/PhantomPage';
import { DepositPage } from '../../pages/DepositPage';

let page: Page
let browserContext: BrowserContext
const srpArr = ["doll", "injury", "material", "wise", "matrix", "pet", "debate", "asset", "forest", "online", "toss", "holiday"]
const password = 'Abc123456789'
const extensionName = "phantom"
const leapSwthAddress = 'tswth1mw6zu5y7dxdhcrej4jqct95xxf7j5lgh6dyhfn'

test.beforeAll('Add extension: Phantom', async () => {
  test.setTimeout(90_000)
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

})
test.describe.serial(' Phantom wallet ', () => {
  test('Connect Phantom wallet', async () => {
    test.setTimeout(180_000)
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
    await phantomPage1.connectBtn.click({ delay: 1000 })

    const [newPage2] = await Promise.all([
      browserContext.waitForEvent('page'),
    ]);
    await newPage2.waitForLoadState()

    const phantomPage2 = new PhantomPage(newPage2)
    await phantomPage2.connectBtn.waitFor({ state: 'visible' })
    await phantomPage2.connectBtn.click({ delay: 1000 })

    await page.waitForTimeout(10_000)
    await homePage.addressPhantomDropBtn.waitFor({ state: 'visible' })
    await homePage.addressPhantomDropBtn.click({ delay: 100 })
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
    await depositPage.phantomDepositBtn.click()
    await expect(depositPage.errorAmountMsg).toBeVisible()
  })
  
})

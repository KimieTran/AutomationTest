import { test, expect, Page, BrowserContext } from '@playwright/test'
import { createBrowserContext } from "../../utils/create-browser-context";
import { HomePage } from '../../pages/HomePage.page';
import { TradeTradePage } from '../../pages/TradeTradePage.page';
import { ConnectWalletPage } from '../../pages/ConnectWalletPage';
import { KeplrPage } from '../../pages/KeplrPage';

let page: Page
let browserContext: BrowserContext
const srpArr = ["trip", "harvest", "pride", "matrix", "alcohol", "brain", "response", "lunch", "bulb", "eight", "injury", "cattle"]
const passworld = 'Abc12345789'
const extensionName = "keplr"
const walletName = "Keplr Testing"
test.beforeAll('Add extension: Keplr', async () => {
  test.setTimeout(90_000)
  browserContext = await createBrowserContext(extensionName)
  page = await browserContext.newPage()

  const [newPage] = await Promise.all([
    browserContext.waitForEvent('page'),
  ]);
  await newPage.waitForLoadState()
  await newPage.bringToFront()
  
  const keplrPage = new KeplrPage(newPage)
  await keplrPage.importExistingWalletBtn.click()
  await keplrPage.useRecoveryPhrase.click()

  for (let i = 1; i <= srpArr.length; i++) {
    if(i==3 || i==7 || i==11){
      await keplrPage.secretRecoveryPhrase3711(i).fill(srpArr[i-1])
    }
    else
      await keplrPage.secretRecoveryPhrases(i).fill(srpArr[i-1])
  }

  await keplrPage.importBtn.click()
  await keplrPage.walletNameTextBox.fill(walletName)
  await keplrPage.passwordTextBox.fill(passworld)
  await keplrPage.confirmPasswordTextBox.fill(passworld)
  await keplrPage.nextBtn.click()
  await keplrPage.saveBtn.click()
  //await keplrPage.finishBtn.click()
  await page.bringToFront()

})
test('Connect Keplr wallet', async () => {
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

  await connectWalletPage.keplrBtn.click({ delay: 3000 })
  const keplrPage = new KeplrPage(page)

  const [newPage] = await Promise.all([
    browserContext.waitForEvent('page'),
    await keplrPage.connectBtn.click()
  ]);
  await newPage.waitForLoadState('load')
  
  const approveKeplrPage = new KeplrPage(newPage)
  const [newPage1] = await Promise.all([
    browserContext.waitForEvent('page'),
    await approveKeplrPage.approveBtn.click()
  ]);
  await newPage1.waitForLoadState()

  const approveKeplrPage1 = new KeplrPage(newPage1)
  await approveKeplrPage1.approveBtn.click()

  await page.waitForLoadState('load')
  await page.waitForTimeout(10_000)

  await homePage.addressDropBtn.click({ delay: 3000})
  await homePage.dropAddress2.click()

  await homePage.copyEVMAddressBtn.click()
  const copiedEVMAddressText = await page.evaluate(() => navigator.clipboard.readText())
  console.log(copiedEVMAddressText)
  const evmPattern = /^0x[a-fA-F0-9]{40}$/
  expect(copiedEVMAddressText.trim()).toMatch(evmPattern)

})
import { test, expect, Page, BrowserContext } from '@playwright/test'
import { createBrowserContext } from "../../utils/create-browser-context";
import { HomePage } from '../../pages/HomePage.page';
import { TradeTradePage } from '../../pages/TradeTradePage.page';
import { ConnectWalletPage } from '../../pages/ConnectWalletPage';
import { MetaMaskPage } from '../../pages/MetaMaskPage';
import { KeplrPage } from '../../pages/KeplrPage';
import { LeapPage } from '../../pages/LeapPage';
import { EncryptedKeyPage } from '../../pages/EncryptedKeyPage';
import { ViewOnlyModePage } from '../../pages/ViewOnlyModePage';


let page: Page
let browserContext: BrowserContext
const srpArr = ['deal', 'payment', 'cigar', 'breeze', 'vast', 'curve', 'west', 'six', 'doll', 'convince', 'page', 'wing']
const passworld = 'Abc12345789'
const extensionName = "metamask"
test.beforeAll('Add all necessary extensions: MetaMask, Keplr, Leap', async () => {
  browserContext = await createBrowserContext(extensionName)
  page = await browserContext.newPage()

  const [newPage] = await Promise.all([
    browserContext.waitForEvent('page'),
  ]);
  await newPage.waitForLoadState()
  newPage.close()
})
test('Connect MetaMask wallet', async () => {
  test.setTimeout(180_000)
  const homePage = new HomePage(page)
  await homePage.goToHomePage()
  page.waitForLoadState()
  expect(homePage.spotHistory).toBeTruthy();
  await homePage.carbonTestnet.click({ timeout: 10_000 });
  await homePage.mantle.click()
  await page.waitForLoadState()

  const tradePage = new TradeTradePage(page);
  await tradePage.headerConnectWallet.click();

  const connectWalletPage = new ConnectWalletPage(page)
  await connectWalletPage.selectWallet.isVisible()

  const [newPage] = await Promise.all([
    browserContext.waitForEvent('page'),
    await connectWalletPage.metaMaskBtn.click()
  ]);
  await newPage.waitForLoadState()

  const [metaPage] = await Promise.all([
    browserContext.waitForEvent('page'),
  ]);
  await metaPage.waitForLoadState()

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
  await page.reload()
  await page.waitForLoadState()
  await tradePage.headerConnectWallet.click()

  const [newPage1] = await Promise.all([
    browserContext.waitForEvent('page'),
    await connectWalletPage.metaMaskBtn.click()
  ]);
  await newPage1.waitForLoadState()

  const metaMaskPage1 = new MetaMaskPage(newPage1)
  await metaMaskPage1.connectBtn.click()
  await newPage1.waitForLoadState()

  //await page.waitForTimeout(15_000)
  const [newPage2] = await Promise.all([
    browserContext.waitForEvent('page'),
  ]);
  await newPage2.waitForLoadState()

  await page.waitForTimeout(10_000)
  const metaMaskPage2 = new MetaMaskPage(newPage2)
  await metaMaskPage2.confirmFooterBtn.click()

  await page.waitForLoadState('load')
  await page.waitForTimeout(15_000)

  await homePage.addressMetaMaskDropBtn.click()
  await homePage.dropAddress2.click()

  await homePage.copyEVMAddressBtn.click()
  const copiedEVMAddressText = await page.evaluate(() => navigator.clipboard.readText())
  console.log(copiedEVMAddressText)
  const evmPattern = /^0x[a-fA-F0-9]{40}$/
  expect(copiedEVMAddressText.trim()).toMatch(evmPattern)

})
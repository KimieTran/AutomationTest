import { test, expect, Page, BrowserContext } from '@playwright/test'
import { createBrowserContext } from "../../utils/create-browser-context";
import { HomePage } from '../../pages/HomePage.page';
import { TradeTradePage } from '../../pages/TradeTradePage.page';
import { ConnectWalletPage } from '../../pages/ConnectWalletPage';
import { MetaMaskPage } from '../../pages/MetaMaskPage';

let page: Page
let browserContext: BrowserContext
const srpArr = ['deal', 'payment', 'cigar', 'breeze', 'vast', 'curve', 'west', 'six', 'doll', 'convince', 'page', 'wing']
const passworld = 'Abc12345789'
const extensionName = "metamask"
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
test('Connect MetaMask wallet', async () => {
  test.setTimeout(120_000)
  const homePage = new HomePage(page)
  await homePage.goToHomePage()
  page.waitForLoadState()
  expect(homePage.spotHistory).toBeTruthy();
  await homePage.carbonTestnet.click();
  await homePage.mantle.click()
  await page.waitForLoadState()

  await page.waitForTimeout(5000)
  const tradePage = new TradeTradePage(page);
  await tradePage.headerConnectWallet.click();

  const connectWalletPage = new ConnectWalletPage(page)
  await connectWalletPage.selectWallet.isVisible()

  const [newPage1] = await Promise.all([
    browserContext.waitForEvent('page'),
    await connectWalletPage.metaMaskBtn.click({delay: 500})
  ]);
  await newPage1.waitForLoadState()

  const metaMaskPage1 = new MetaMaskPage(newPage1)
  await metaMaskPage1.connectBtn.click()

  const [newPage2] = await Promise.all([
    browserContext.waitForEvent('page'),
  ]);
  await newPage2.waitForLoadState()

  const metaMaskPage2 = new MetaMaskPage(newPage2)
  await metaMaskPage2.confirmFooterBtn.click()

  await page.waitForTimeout(15_000)

  await homePage.addressMetaMaskDropBtn.waitFor({state: 'visible'})
  await homePage.addressMetaMaskDropBtn.click( {delay: 500})
  await homePage.dropAddress2.waitFor({state: 'visible'})
  await homePage.dropAddress2.click({delay: 500})

  await homePage.copyEVMAddressBtn.click()
  const copiedEVMAddressText = await page.evaluate(() => navigator.clipboard.readText())
  console.log(copiedEVMAddressText)
  const evmPattern = /^0x[a-fA-F0-9]{40}$/
  expect(copiedEVMAddressText.trim()).toMatch(evmPattern)

})
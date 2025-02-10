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
  test.describe('Connect Wallet feature', async () => {
    test('Connect MetaMask wallet', async () => {
      test.setTimeout(180_000)	
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

      for (var i = 0; i < srpArr.length; i++){
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

      const [newPage2] = await Promise.all([
        browserContext.waitForEvent('page'),
      ]);
      await newPage2.waitForLoadState()

      const metaMaskPage2 = new MetaMaskPage(newPage2)
      await metaMaskPage2.confirmFooterBtn.click()

      await page.waitForLoadState('load')
      await page.waitForTimeout(20_000)

      await homePage.dropAddress1.click()
      await homePage.dropAddress2.click()

      await homePage.copyEVMAddressBtn.click()
      const copiedEVMAddressText = await page.evaluate(() => navigator.clipboard.readText())
      console.log(copiedEVMAddressText)
      const evmPattern = /^0x[a-fA-F0-9]{40}$/
      expect(copiedEVMAddressText.trim()).toMatch(evmPattern)

    })




    test.skip('Connect Keplr wallet', async () => {	
      const connectWalletPage = new ConnectWalletPage(page)
      await connectWalletPage.selectWallet.isVisible()
      
      await connectWalletPage.keplrBtn.click()
      const keplrPage = new KeplrPage(page)
      await keplrPage.connectKeplrText.isVisible()
      await keplrPage.connectBtn.isVisible()

      await keplrPage.backBtn.click()
      await connectWalletPage.selectWallet.isVisible()
    })

    test.skip('Connect Leap wallet', async () => {	
      const connectWalletPage = new ConnectWalletPage(page)
      await connectWalletPage.selectWallet.isVisible()
      
      await connectWalletPage.leapBtn.click()
      const leapPage = new LeapPage(page)
      await leapPage.connectLeapText.isVisible()
      await leapPage.connectBtn.isVisible()
      
      await leapPage.backBtn.click()
      await connectWalletPage.selectWallet.isVisible()
    })

    test.skip('Connect Encrypted Key', async () => {	
      const connectWalletPage = new ConnectWalletPage(page)
      await connectWalletPage.selectWallet.isVisible()
      
      await connectWalletPage.encryptedKeyBtn.click()
      const encryptedKeyPage = new EncryptedKeyPage(page)
      await encryptedKeyPage.encryptedKeyTextbox.isVisible()
      await encryptedKeyPage.passwordTextbox.isVisible()
      await encryptedKeyPage.connectBtn.isVisible()

      await encryptedKeyPage.backBtn.click()
      await connectWalletPage.selectWallet.isVisible()
    })

    test.skip('View Only Mode', async () => {	
      const connectWalletPage = new ConnectWalletPage(page)
      await connectWalletPage.selectWallet.isVisible()
      
      await connectWalletPage.viewOnlyMode.click()
      const viewOnlyModePage = new ViewOnlyModePage(page)
      await viewOnlyModePage.walletAddressTextbox.isVisible()
      await viewOnlyModePage.viewBtn.isVisible()
    })
  })
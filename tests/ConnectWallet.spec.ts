import { test, expect, Page, BrowserContext } from '@playwright/test'
import { createBrowserContext } from "../utils/create-browser-context";
import { HomePage } from '../pages/HomePage.page';
import { TradeTradePage } from '../pages/TradeTradePage.page';
import { ConnectWalletPage } from '../pages/ConnectWalletPage';
import { MetaMaskPage } from '../pages/MetaMaskPage';
import { KeplrPage } from '../pages/KeplrPage';
import { LeapPage } from '../pages/LeapPage';
import { EncryptedKeyPage } from '../pages/EncryptedKeyPage';
import { ViewOnlyModePage } from '../pages/ViewOnlyModePage';


let page: Page
let browserContext: BrowserContext
test.beforeAll('Connect Keplr wallet', async () => {
  browserContext = await createBrowserContext()
  page = await browserContext.newPage()

})
  test.describe('Connect Wallet feature', async () => {
    test('Connect MetaMask wallet', async () => {
      test.setTimeout(90_000)	
      const homePage = new HomePage(page);
      await homePage.goToHomePage();
      expect(homePage.spotHistory).toBeTruthy();
      await homePage.carbonDevnet.click()
      await homePage.mantle.dblclick()

      const tradePage = new TradeTradePage(page);
      await tradePage.rightSideConnectWallet.click();
      
      const connectWalletPage = new ConnectWalletPage(page)
      await connectWalletPage.selectWallet.isVisible()
      
      await connectWalletPage.metaMaskBtn.click()
      const page1 = await browserContext.newPage()
      await page1.goto('chrome-extension://gcehgojdnhoclncgbpkgpjmhapgoocgp/home.html');
      await page1.waitForLoadState()

      const metaMaskPage = new MetaMaskPage(page1)
      await metaMaskPage.createNewWalletBtn.isVisible()
      await metaMaskPage.importExistingWalletBtn.isVisible()
    })

    test('Connect Keplr wallet', async () => {	
      const connectWalletPage = new ConnectWalletPage(page)
      await connectWalletPage.selectWallet.isVisible()
      
      await connectWalletPage.keplrBtn.click()
      const keplrPage = new KeplrPage(page)
      await keplrPage.connectKeplrText.isVisible()
      await keplrPage.connectBtn.isVisible()

      await keplrPage.backBtn.click()
      await connectWalletPage.selectWallet.isVisible()
    })

    test('Connect Leap wallet', async () => {	
      const connectWalletPage = new ConnectWalletPage(page)
      await connectWalletPage.selectWallet.isVisible()
      
      await connectWalletPage.leapBtn.click()
      const leapPage = new LeapPage(page)
      await leapPage.connectLeapText.isVisible()
      await leapPage.connectBtn.isVisible()
      
      await leapPage.backBtn.click()
      await connectWalletPage.selectWallet.isVisible()
    })

    test('Connect Encrypted Key', async () => {	
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

    
    test('View Only Mode', async () => {	
      const connectWalletPage = new ConnectWalletPage(page)
      await connectWalletPage.selectWallet.isVisible()
      
      await connectWalletPage.viewOnlyMode.click()
      const viewOnlyModePage = new ViewOnlyModePage(page)
      await viewOnlyModePage.walletAddressTextbox.isVisible()
      await viewOnlyModePage.viewBtn.isVisible()
    })
  })
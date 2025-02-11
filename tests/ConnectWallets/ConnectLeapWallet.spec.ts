import { test, expect, Page, BrowserContext } from '@playwright/test'
import { createBrowserContext } from "../../utils/create-browser-context";
import { HomePage } from '../../pages/HomePage.page';
import { TradeTradePage } from '../../pages/TradeTradePage.page';
import { ConnectWalletPage } from '../../pages/ConnectWalletPage';
import { LeapPage } from '../../pages/LeapPage';

let page: Page
let browserContext: BrowserContext
const srpArr = ["teach", "round", "olympic", "good", "avoid", "shiver", "cup", "attack", "program", "ride", "exotic", "either"]
const passworld = 'Abc12345789'
const extensionName = "leap"

test.beforeAll('Add extension: Leap', async () => {
  browserContext = await createBrowserContext(extensionName)
  page = await browserContext.newPage()

  const [newPage] = await Promise.all([
    browserContext.waitForEvent('page'),
  ]);
  await newPage.waitForLoadState()
  await newPage.bringToFront()
  
  const leapPage = new LeapPage(newPage)
  await leapPage.usingRecoverPhrase.click()

  for (let i = 1; i <= srpArr.length; i++) {
    if(i==1)
      await leapPage.firstSecretRecoverPhrase.fill(srpArr[i-1])
    else if(i==12){
      await leapPage.secretRecoverPhrase12.click()
      await leapPage.inputSRPTextbox.fill(srpArr[i-1])
    }
    else {
      await leapPage.secretRecoveryPhrases(i).click()
      await leapPage.inputSRPTextbox.fill(srpArr[i-1])
    }
  }

  await leapPage.importViaRecoverPhraseBtn.click()
  await leapPage.importWalletBtn.click()
  await leapPage.addWalletCheckbox1.click()
  await leapPage.addWalletCheckbox2.click()
  await leapPage.proceedBtn.click()
  await leapPage.passwordTextbox.fill(passworld)
  await leapPage.confirmPasswordTextbox.fill(passworld)
  await leapPage.proceedBtn.click()
  
  await page.bringToFront()

})
test('Connect Leap wallet', async () => {
  test.setTimeout(120_000)
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

  await connectWalletPage.leapBtn.click()
  await page.waitForTimeout(5000)
  const leapPage = new LeapPage(page)

  const [newPage] = await Promise.all([
    browserContext.waitForEvent('page'),
    await leapPage.connectBtn.click()
  ]);
  await newPage.waitForLoadState()
  
  await page.waitForTimeout(5000)
  const approveLeapPage = new LeapPage(newPage)
  await approveLeapPage.connectBtn.click()

  const [newPage1] = await Promise.all([
    browserContext.waitForEvent('page'),
  ]);
  await newPage1.waitForLoadState()

  const approveLeapPage1 = new LeapPage(newPage1)
  await approveLeapPage1.approveBtn.click()

  await page.waitForLoadState('load')
  await page.waitForTimeout(10_000)

  await homePage.dropKeplrAddress1.click()
  await homePage.dropAddress2.click()

  await homePage.copyEVMAddressBtn.click()
  const copiedEVMAddressText = await page.evaluate(() => navigator.clipboard.readText())
  console.log(copiedEVMAddressText)
  const evmPattern = /^0x[a-fA-F0-9]{40}$/
  expect(copiedEVMAddressText.trim()).toMatch(evmPattern)

})
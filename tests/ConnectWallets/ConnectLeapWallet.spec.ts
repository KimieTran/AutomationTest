import { test, expect, Page, BrowserContext } from '@playwright/test'
import { createBrowserContext } from "../../utils/create-browser-context";
import { HomePage } from '../../pages/HomePage.page';
import { TradeTradePage } from '../../pages/TradeTradePage.page';
import { ConnectWalletPage } from '../../pages/ConnectWalletPage';
import { LeapPage } from '../../pages/LeapPage';
import { DepositPage } from '../../pages/DepositPage';
import { WithdrawPage } from '../../pages/WithdrawPage';

let page: Page
let browserContext: BrowserContext
const srpArr = ["teach", "round", "olympic", "good", "avoid", "shiver", "cup", "attack", "program", "ride", "exotic", "either"]
const passworld = 'Abc12345789'
const extensionName = "leap"
const phantomSwthAddress = 'tswth1r5kh40kknhw7e02qyzyz50zsfj8xyvfsq9lvxp'

test.beforeAll('Add extension: Leap', async () => {
  test.setTimeout(90_000)
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

test.describe.serial('Leap wallet ', () => {
  test('Connect Leap wallet', async () => {
    test.setTimeout(150_000)
    const homePage = new HomePage(page)
    await homePage.goToHomePage()
    expect(homePage.spotHistory).toBeTruthy();
    //await homePage.carbonTestnet.click();
    //await homePage.mantle.click()
    await page.waitForLoadState()
    await page.waitForTimeout(10_000)

    const tradePage = new TradeTradePage(page);
    await tradePage.headerConnectWallet.click();

    const connectWalletPage = new ConnectWalletPage(page)
    await connectWalletPage.selectWallet.isVisible()

    await connectWalletPage.leapBtn.waitFor({ state: 'visible' })
    await connectWalletPage.leapBtn.click({ delay: 2000 })
    const leapPage = new LeapPage(page)
    await leapPage.connectBtn.waitFor({ state: 'visible' })

    const [newPage] = await Promise.all([
      browserContext.waitForEvent('page'),
      await leapPage.connectBtn.click({ delay: 2000 })
    ]);
    await newPage.waitForLoadState()

    const approveLeapPage = new LeapPage(newPage)
    //await approveLeapPage.connectBtn.waitFor({ state: 'visible' })
    await approveLeapPage.approveBtn.waitFor({ state: 'visible' })
    const [newPage1] = await Promise.all([
      browserContext.waitForEvent('page'),
      //await approveLeapPage.connectBtn.click({ delay: 1000 })
      await approveLeapPage.approveBtn.click({ delay: 1000 })
    ]);
    await newPage1.waitForLoadState()

    const approveLeapPage1 = new LeapPage(newPage1)
    await approveLeapPage1.approveBtn.waitFor({ state: 'visible' })
    await approveLeapPage1.approveBtn.click({ delay: 1000 })
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

    const approvalPage = new LeapPage(popup)
    await approvalPage.approveBtn.waitFor({ state: 'visible' })
    await approvalPage.approveBtn.click({ delay: 1000 })

    await expect(withdrawPage.transactionSuccess).toBeVisible()
  })

})
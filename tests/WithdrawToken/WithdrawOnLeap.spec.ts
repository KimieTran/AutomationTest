import { test, expect, Page, BrowserContext } from '@playwright/test'
import { createBrowserContext } from "../../utils/create-browser-context";
import { HomePage } from '../../pages/HomePage.page';
import { TradeTradePage } from '../../pages/TradeTradePage.page';
import { ConnectWalletPage } from '../../pages/ConnectWalletPage';
import { PhantomPage } from '../../pages/PhantomPage';
import { DepositPage } from '../../pages/DepositPage';
import { WithdrawPage } from '../../pages/WithdrawPage';
import { LeapPage } from '../../pages/LeapPage';

let page: Page
let browserContext: BrowserContext
const srpArr = ["teach", "round", "olympic", "good", "avoid", "shiver", "cup", "attack", "program", "ride", "exotic", "either"]
const passworld = 'Abc12345789'
const extensionName = "leap"
const phantomSwthAddress = 'tswth1r5kh40kknhw7e02qyzyz50zsfj8xyvfsq9lvxp'

test.beforeAll('Add extension: Leap', async () => {
  test.setTimeout(120_000)
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
  await connectWalletPage.leapBtn.click({ delay: 1000 })
  const leapPage1 = new LeapPage(page)
  await leapPage1.connectBtn.waitFor({ state: 'visible' })

  const [newPage1] = await Promise.all([
    browserContext.waitForEvent('page'),
    await leapPage1.connectBtn.click({ delay: 1000 })
  ]);
  await newPage1.waitForLoadState()

  const approveLeapPage = new LeapPage(newPage1)
  await approveLeapPage.approveBtn.waitFor({ state: 'visible' })
  const [newPage2] = await Promise.all([
    browserContext.waitForEvent('page'),
    await approveLeapPage.approveBtn.click({ delay: 1000 })
  ]);
  await newPage2.waitForLoadState()

  const approveLeapPage1 = new LeapPage(newPage2)
  await approveLeapPage1.approveBtn.waitFor({ state: 'visible' })
  await approveLeapPage1.approveBtn.click({ delay: 1000 })
  await homePage.addressDropBtn.waitFor({ state: 'visible' })

})
test.describe(' Withdraw Token with Leap wallet ', () => {
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

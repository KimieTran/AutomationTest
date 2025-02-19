import { type Locator, type Page } from '@playwright/test';

export class PhantomPage{
    readonly page: Page;

    readonly alreadyHaveWalletBtn: Locator
    readonly importSecretRecoveryPhraseBtn: Locator
    readonly secretRecoveryPhrases: (i: number) => Locator
    readonly importWalletBtn: Locator
    readonly continueBtn: Locator
    readonly newPasswordTextBox: Locator
    readonly confirmPasswordTextBox: Locator
    readonly termServiceCheckbox: Locator
    readonly connectBtn: Locator
    readonly depositBtn: Locator
    readonly myBrowerWallet: Locator
    readonly selectNetworkBtn: Locator
    readonly ethNetworkOption: Locator
    readonly amountTextbox: Locator
    readonly depositBtnn: Locator
    readonly errorAmountMsg: Locator
    

    constructor (page:Page){
        this.page=page;
        this.alreadyHaveWalletBtn = this.page.getByRole('button', { name: 'I already have a wallet' })
        this.importSecretRecoveryPhraseBtn = this.page.getByRole('button', { name: 'Import Secret Recovery Phrase' })
        this.secretRecoveryPhrases = (i: number) => this.page.getByTestId(`secret-recovery-phrase-word-input-${i}`)
        this.importWalletBtn = this.page.getByRole('button', { name: 'Import Wallet' })
        this.continueBtn = this.page.getByRole('button', { name: 'Continue' })
        //this.continueBtn = this.page.getByTestId('onboarding-form-submit-button')
        this.newPasswordTextBox = this.page.getByTestId('onboarding-form-password-input')
        this.confirmPasswordTextBox = this.page.getByTestId('onboarding-form-confirm-password-input')
        this.termServiceCheckbox = this.page.getByTestId('onboarding-form-terms-of-service-checkbox')
        this.connectBtn = this.page.getByTestId('primary-button')
        this.depositBtn = this.page.getByText('Deposit', { exact: true }).first()
        this.myBrowerWallet = this.page.getByText('My Browser Wallet')
        this.selectNetworkBtn = this.page.getByRole('button', { name: 'Select Network' })
        this.ethNetworkOption = this.page.getByText('Ethereum')
        this.amountTextbox = this.page.getByRole('spinbutton').first()
        this.errorAmountMsg = this.page.getByText('Insufficient balance')
        this.depositBtnn = this.page.locator('div').filter({ hasText: /^Deposit Amount \(After Fees\)0\.00000 USDC\$0\.00000Deposit$/ }).getByRole('button')
    }


}
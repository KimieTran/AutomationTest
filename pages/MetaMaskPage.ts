import { type Locator, type Page } from '@playwright/test';

export class MetaMaskPage{
    readonly page: Page;
    readonly createNewWalletBtn: Locator
    readonly importExistingWalletBtn: Locator
    readonly agreeMetaMaskCheckbox: Locator
    readonly noThankBtn: Locator
    readonly secretRecoveryPhrases: (i: number) => Locator
    readonly confirmSRPBtn: Locator
    readonly newPasswordTextBox: Locator
    readonly confirmPasswordTextBox: Locator
    readonly metaMaskTermsCheckbox: Locator
    readonly importMyWalletBtn: Locator
    readonly doneBtn: Locator
    readonly nextBtn: Locator
    readonly done2Btn: Locator
    readonly gotItBtn: Locator

    readonly connectBtn: Locator
    readonly confirmFooterBtn: Locator

    constructor (page:Page){
        this.page=page;
        this.createNewWalletBtn = this.page.getByRole('button', { name: 'Create a new wallet' })
        this.importExistingWalletBtn = this.page.getByRole('button', { name: 'Import an existing wallet' })
        this.agreeMetaMaskCheckbox = this.page.getByTestId('onboarding-terms-checkbox')
        this.noThankBtn = this.page.getByTestId('metametrics-no-thanks')
        this.secretRecoveryPhrases = (i: number) => this.page.getByTestId(`import-srp__srp-word-${i}`)

        this.confirmSRPBtn = this.page.getByTestId('import-srp-confirm')
        this.newPasswordTextBox = this.page.getByTestId('create-password-new')
        this.confirmPasswordTextBox = this.page.getByTestId('create-password-confirm')
        this.metaMaskTermsCheckbox = this.page.getByTestId('create-password-terms')
        this.importMyWalletBtn = this.page.getByTestId('create-password-import')
        this.doneBtn = this.page.getByTestId('onboarding-complete-done')
        this.nextBtn = this.page.getByTestId('pin-extension-next')
        this.done2Btn = this.page.getByTestId('pin-extension-done')
        this.gotItBtn = this.page.getByRole('button', { name: 'Got it' })

        this.connectBtn = this.page.getByTestId('confirm-btn')
        this.confirmFooterBtn = this.page.getByTestId('confirm-footer-button')
    }


}
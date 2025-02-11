import { type Locator, type Page } from '@playwright/test';
export class LeapPage{
    readonly page: Page;
    readonly connectLeapText: Locator
    readonly connectBtn: Locator
    readonly backBtn: Locator
    readonly usingRecoverPhrase: Locator
    readonly firstSecretRecoverPhrase: Locator
    readonly secretRecoverPhrase12: Locator
    readonly secretRecoveryPhrases: (i: number) => Locator
    readonly inputSRPTextbox: Locator
    readonly importViaRecoverPhraseBtn: Locator
    readonly importWalletBtn: Locator
    readonly proceedBtn: Locator
    readonly passwordTextbox: Locator
    readonly confirmPasswordTextbox: Locator
    readonly addWalletCheckbox1: Locator
    readonly addWalletCheckbox2: Locator
    readonly approveBtn: Locator

    constructor (page:Page){
        this.page=page;
        this.connectLeapText = this.page.getByRole('paragraph').filter({ hasText: 'Connect with Leap Wallet' })
        this.connectBtn = this.page.getByRole('button', { name: 'Connect' })
        this.backBtn = this.page.locator('a').filter({ hasText: 'Back' }).nth(1)
        this.usingRecoverPhrase = this.page.locator('div').filter({ hasText: /^Using a recovery phrase$/ }).first()
        this.firstSecretRecoverPhrase = this.page.getByRole('textbox')
        this.secretRecoverPhrase12 = this.page.locator('div').filter({ hasText: /^12$/ }).nth(1)
        this.secretRecoveryPhrases = (i: number) => this.page.locator('div').filter({ hasText: new RegExp(`^${i}$`) })
        this.inputSRPTextbox = this.page.locator('input[type="text"]')
        this.importViaRecoverPhraseBtn = this.page.getByText('Import via Recovery PhraseTo')
        this.importWalletBtn = this.page.getByRole('button', { name: 'Import Wallet' })
        this.proceedBtn = this.page.getByRole('button', { name: 'Proceed' })
        this.passwordTextbox = this.page.getByRole('textbox', { name: 'Enter password', exact: true })
        this.confirmPasswordTextbox = this.page.getByRole('textbox', { name: 'Re-enter password' })
        this.addWalletCheckbox1 = this.page.locator('div').filter({ hasText: /^Wallet 1cosmo\.\.\.yl3r0Funds on 0 network$/ }).getByRole('img').nth(1)
        this.addWalletCheckbox2 = this.page.locator('div').filter({ hasText: /^Wallet 2cosmo\.\.\.9nla9Funds on 0 network$/ }).getByRole('img').nth(1)
        this.approveBtn = this.page.getByRole('button', { name: 'Approve' })

    }


}
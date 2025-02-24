import { type Locator, type Page } from '@playwright/test';
export class KeplrPage{
    readonly page: Page;
    readonly connectKeplrText: Locator
    readonly connectBtn: Locator
    readonly backBtn: Locator
    readonly importExistingWalletBtn: Locator
    readonly useRecoveryPhrase: Locator
    readonly secretRecoveryPhrases: (i: number) => Locator
    readonly secretRecoveryPhrase3711: (i: number) => Locator
    readonly importBtn: Locator
    readonly walletNameTextBox: Locator
    readonly passwordTextBox: Locator
    readonly confirmPasswordTextBox: Locator
    readonly nextBtn: Locator
    readonly saveBtn: Locator
    readonly finishBtn: Locator
    readonly approveBtn: Locator

    constructor (page:Page){
        this.page=page;
        this.connectKeplrText = this.page.getByRole('paragraph').filter({ hasText: 'Connect with Keplr Wallet' })
        this.connectBtn = this.page.getByRole('button', { name: 'Connect' })
        this.backBtn = this.page.locator('a').filter({ hasText: 'Back' }).nth(1)
        this.importExistingWalletBtn = this.page.getByRole('button', { name: 'Import an existing wallet' })
        this.useRecoveryPhrase = this.page.getByRole('button', { name: 'Use recovery phrase or' })
        this.secretRecoveryPhrases = (i: number) => this.page.locator(`div:nth-child(${i}) > .sc-bZnhIo > .sc-iTONeN > .sc-bBrHrO > .sc-fLlhyt > .sc-iAvgwm`)
        this.secretRecoveryPhrase3711 = (i: number) => this.page.locator(`div:nth-child(${i}) > .sc-bZnhIo > .sc-iTONeN > .sc-bBrHrO > .sc-fLlhyt > .sc-iAvgwm`).first()
        this.importBtn = this.page.getByRole('button', { name: 'Import', exact: true })
        this.walletNameTextBox = this.page.getByRole('textbox', { name: 'e.g. Trading, NFT Vault,' })
        this.passwordTextBox = this.page.locator('input[name="password"]')
        this.confirmPasswordTextBox = this.page.locator('input[name="confirmPassword"]')
        this.nextBtn = this.page.getByRole('button', { name: 'Next' })
        this.saveBtn = this.page.getByRole('button', { name: 'Save' })
        this.finishBtn = this.page.getByRole('button', { name: 'Finish' })
        this.approveBtn = this.page.getByRole('button', { name: 'Approve' })

    }


}
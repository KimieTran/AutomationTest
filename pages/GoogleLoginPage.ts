import { type Locator, type Page } from '@playwright/test';
export class GoogleLoginPage{
    readonly page: Page;
    readonly emailTextbox: Locator
    readonly passwordTextbox: Locator
    readonly nextBtn: Locator
    readonly continueBtn: Locator
    readonly setup2FABtn: Locator
    readonly skipForNowBtn: Locator
    readonly enable2FactorText: Locator

    constructor (page:Page){
        this.page=page;
        this.emailTextbox = this.page.getByRole('textbox', { name: 'Email or phone' })
        this.nextBtn = this.page.getByRole('button', { name: 'Next' })
        this.passwordTextbox = this.page.getByRole('textbox', { name: 'Enter your password' })
        this.continueBtn = this.page.getByRole('button', { name: 'Continue' })
        this.setup2FABtn = this.page.getByRole('button', { name: 'Set up 2FA' })
        this.skipForNowBtn = this.page.getByRole('button', { name: 'Skip for Now' })
        this.enable2FactorText = this.page.getByText('Enable 2 Factor')
    }


}
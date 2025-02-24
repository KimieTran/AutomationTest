import { type Locator, type Page } from '@playwright/test';
export class XLoginPage{
    readonly page: Page;
    readonly signInBtn: Locator
    readonly emailTextbox: Locator
    readonly nextBtn: Locator
    readonly passwordTextbox: Locator
    readonly loginBtn: Locator
    readonly skipForNowBtn: Locator
    readonly userNameDisplayedText: Locator
    readonly userNameTextbox: Locator

    constructor (page:Page){
        this.page=page;
        this.signInBtn = this.page.getByRole('button', { name: 'Sign In' })
        this.emailTextbox = this.page.getByRole('textbox', { name: 'Phone, email, or username' })
        this.nextBtn = this.page.getByRole('button', { name: 'Next' })
        this.passwordTextbox = this.page.getByRole('textbox', { name: 'Password Reveal password' })
        this.loginBtn = this.page.getByTestId('LoginForm_Login_Button')
        this.skipForNowBtn = this.page.getByRole('button', { name: 'Skip for Now' })
        this.userNameDisplayedText = this.page.getByText('Enter your phone number or username', { exact: true })
        this.userNameTextbox = this.page.getByTestId('ocfEnterTextTextInput')
    }
}
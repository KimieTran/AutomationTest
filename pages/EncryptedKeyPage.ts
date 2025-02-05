import { type Locator, type Page } from '@playwright/test';
export class EncryptedKeyPage{
    readonly page: Page;
    readonly encryptedKeyTextbox: Locator
    readonly passwordTextbox: Locator
    readonly connectBtn: Locator
    readonly backBtn: Locator

    constructor (page:Page){
        this.page=page;
        this.encryptedKeyTextbox = this.page.getByRole('textbox', { name: 'Enter or Upload Encrypted Key' })
        this.passwordTextbox = this.page.getByRole('textbox', { name: 'Enter Password' })
        this.connectBtn = this.page.getByRole('button', { name: 'Connect' })
        this.backBtn = this.page.locator('a').filter({ hasText: 'Back' }).nth(1)

    }


}
import { type Locator, type Page } from '@playwright/test';
export class KeplrPage{
    readonly page: Page;
    readonly connectKeplrText: Locator
    readonly connectBtn: Locator
    readonly backBtn: Locator

    constructor (page:Page){
        this.page=page;
        this.connectKeplrText = this.page.getByRole('paragraph').filter({ hasText: 'Connect with Keplr Wallet' })
        this.connectBtn = this.page.getByRole('button', { name: 'Connect' })
        this.backBtn = this.page.locator('a').filter({ hasText: 'Back' }).nth(1)
    }


}
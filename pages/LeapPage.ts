import { type Locator, type Page } from '@playwright/test';
export class LeapPage{
    readonly page: Page;
    readonly connectLeapText: Locator
    readonly connectBtn: Locator
    readonly backBtn: Locator

    constructor (page:Page){
        this.page=page;
        this.connectLeapText = this.page.getByRole('paragraph').filter({ hasText: 'Connect with Leap Wallet' })
        this.connectBtn = this.page.getByRole('button', { name: 'Connect' })
        this.backBtn = this.page.locator('a').filter({ hasText: 'Back' }).nth(1)

    }


}
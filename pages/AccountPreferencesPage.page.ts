import { expect, type Locator, type Page } from '@playwright/test';
export class AccountPreferencesPage{
    readonly page: Page;
    readonly connectWallets;

    constructor(page: Page){
        this.page=page;
        this.connectWallets = page.locator('xpath=//span/div[text()="Connect Wallet"]');
    }

    async goToAccountPreferencesPage(){
        await this.page.goto('https://beta-app.dem.exchange/account/profile');
    }
}
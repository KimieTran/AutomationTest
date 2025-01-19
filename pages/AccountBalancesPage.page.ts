import { expect, type Locator, type Page } from '@playwright/test';
export class AccountBalancesPage{
    readonly page: Page;
    readonly connectWallets;

    constructor(page: Page){
        this.page=page;
        this.connectWallets = page.locator('xpath=//button/span/div[text()="Connect Wallet"]');
    }

    async goToAccountBalancesPage(){
        await this.page.goto('https://beta-app.dem.exchange/account/balances');
    }
}
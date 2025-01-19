import { expect, type Locator, type Page } from '@playwright/test';
export class AccountOverviewPage{
    readonly page: Page;
    readonly possionConnectWallet;
    readonly headerConnectWallet;

    constructor(page: Page){
        this.page=page;
        this.possionConnectWallet=page.locator('xpath=//p[text()="Connect Wallet"]');
        this.headerConnectWallet = page.locator('xpath=//span/div[text()="Connect Wallet"]');
    }

    async goToAccountOverviewPage(){
        await this.page.goto('https://beta-app.dem.exchange/account/overview');
    }
}
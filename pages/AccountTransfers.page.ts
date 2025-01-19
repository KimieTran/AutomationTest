import { expect, type Locator, type Page } from '@playwright/test';
export class AccountTransfersPage{
    readonly page: Page;
   readonly headerConnectWallet;

    constructor(page: Page){
        this.page=page;
        this.headerConnectWallet=page.locator('xpath=//button/span/div[text()="Connect Wallet"]');
    }

    async goToAccountTransfersPage(){
        await this.page.goto('https://beta-app.dem.exchange/account/transfers/crosschain');
    }
}
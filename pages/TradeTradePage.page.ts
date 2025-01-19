import { expect, type Locator, type Page } from '@playwright/test';
export class TradeTradePage{
    readonly page: Page;
   readonly headerConnectWallet;
   readonly rightSideConnectWallet;

    constructor(page: Page){
        this.page=page;
        this.headerConnectWallet=page.locator('xpath=//button/span/div[text()="Connect Wallet"]');
        this.rightSideConnectWallet=page.locator('xpath=//div[text()="Connect Wallet"]');
    }

    async goToTradePage(){
        await this.page.goto('https://beta-app.dem.exchange/trade');
    }
}
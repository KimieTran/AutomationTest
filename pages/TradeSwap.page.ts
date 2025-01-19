import { expect, type Locator, type Page } from '@playwright/test';
export class TradeSwapPage{
    readonly page: Page;
   readonly headerConnectWallet;
   readonly centreConnectWallet;

    constructor(page: Page){
        this.page=page;
        this.headerConnectWallet=page.locator('xpath=//button/span/div[text()="Connect Wallet"]');
        this.centreConnectWallet=page.locator('xpath=//div[text()="Connect Wallet"]');
    }

    async goToTradeSwapPage(){
        await this.page.goto('https://beta-app.dem.exchange/swap');
    }
}
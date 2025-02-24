import { expect, type Locator, type Page } from '@playwright/test';
export class TradeTradePage{
    readonly page: Page;
   readonly headerConnectWallet;
   readonly rightSideConnectWallet;

    constructor(page: Page){
        this.page=page;
        this.headerConnectWallet=this.page.getByRole('button', { name: 'Connect Wallet' }).first();
        this.rightSideConnectWallet=this.page.getByRole('button', { name: 'Connect Wallet' }).nth(1);
    }

    async goToTradePage(){
        await this.page.goto('https://beta-app.dem.exchange/trade');
    }
}
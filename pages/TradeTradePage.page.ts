import { expect, type Locator, type Page } from '@playwright/test';
export class TradeTradePage{
    readonly page: Page;
   readonly headerConnectWallet;
   readonly rightSideConnectWallet;
   readonly opTokenOption: Locator
   readonly spotTab: Locator
   readonly searchToken: Locator
   readonly swthUSDOption: Locator
   readonly amountToken: Locator
   readonly buyBtn: Locator
   readonly confirmBtn: Locator
   readonly orderedPopup: Locator

    constructor(page: Page){
        this.page=page;
        this.headerConnectWallet=this.page.getByRole('button', { name: 'Connect Wallet' }).first();
        this.rightSideConnectWallet=this.page.getByRole('button', { name: 'Connect Wallet' }).nth(1);
        this.opTokenOption = this.page.getByRole('img', { name: 'OP' })
        this.spotTab = this.page.getByRole('button', { name: 'Spot', exact: true })
        this.searchToken = this.page.getByRole('textbox', { name: 'e.g. “SWTH” or “BTC”' })
        this.swthUSDOption = this.page.locator('#root').getByText('SWTH / USD')
        this.amountToken = this.page.getByRole('spinbutton').nth(1)
        this.buyBtn = this.page.getByRole('button', { name: 'Buy SWTH', exact: true })
        this.confirmBtn = this.page.getByRole('button', { name: 'Confirm' })
        this.orderedPopup = this.page.getByText('Order Placed')
    }

    async goToTradePage(){
        await this.page.goto('https://beta-app.dem.exchange/trade');
    }
}
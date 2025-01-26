import { test, expect } from '@playwright/test';
import { TradeSwapPage } from '../pages/TradeSwap.page';

test('verify Connect Wallet button shown in header and centre area',async ({page})=>{
    const tradeSwapPage = new TradeSwapPage(page);
    await tradeSwapPage.goToTradeSwapPage();
    await expect(tradeSwapPage.headerConnectWallet).toBeTruthy();
    await expect(tradeSwapPage.centreConnectWallet).toBeTruthy();

});
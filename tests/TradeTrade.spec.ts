import { test, expect } from '@playwright/test';
import { TradeTradePage } from '../pages/TradeTradePage.page';

test.only('verify Connect Wallet button shown in header and right side area',async ({page})=>{
    const tradePage = new TradeTradePage(page);
    await tradePage.goToTradePage();
    await expect(tradePage.headerConnectWallet).toBeTruthy();
    await expect(tradePage.rightSideConnectWallet).toBeTruthy();

});
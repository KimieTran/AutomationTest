import { test, expect } from '@playwright/test';
import { AccountHistoryPage } from '../pages/AccountHistoryPage.page';

test.only('verify Connect Wallet button shown in header and centre area',async ({page})=>{
    const accountHistoryPage = new AccountHistoryPage(page);
    await accountHistoryPage.goToAccountTransfersPage();
    await expect(accountHistoryPage.headerConnectWallet).toBeTruthy();

});

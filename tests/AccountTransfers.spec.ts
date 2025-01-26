import { test, expect } from '@playwright/test';
import { AccountTransfersPage } from '../pages/AccountTransfers.page';

test('verify Connect Wallet button shown in header and centre area',async ({page})=>{
    const accountTransfersPage = new AccountTransfersPage(page);
    await accountTransfersPage.goToAccountTransfersPage();
    await expect(accountTransfersPage.headerConnectWallet).toBeTruthy();

});

import { test, expect } from '@playwright/test';
import { AccountBalancesPage } from '../pages/AccountBalancesPage.page';
import { constants } from 'buffer';

test('verify Connect Wallet button shown in header and centre area', async ({page})=>{
    const accountBalancesPage = new AccountBalancesPage(page);
    await accountBalancesPage.goToAccountBalancesPage();
    test.setTimeout(50000);
    const items = await accountBalancesPage.connectWallets;
    await expect(accountBalancesPage.connectWallets).toHaveText(['Connect Wallet', 'Connect Wallet']);
});

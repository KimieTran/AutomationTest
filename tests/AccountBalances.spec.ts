import { test, expect } from '@playwright/test';
import { AccountBalancesPage } from '../pages/AccountBalancesPage.page';

test('verify Connect Wallet button shown in header and centre area', async ({page})=>{
    const accountBalancesPage = new AccountBalancesPage(page);
    await accountBalancesPage.goToAccountBalancesPage();
    const items = await accountBalancesPage.connectWallets;
    items.forEach(function (item: any) {
            expect(item).toBeTruthy();
        });
});

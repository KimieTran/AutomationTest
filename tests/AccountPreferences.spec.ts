import { test, expect } from '@playwright/test';
import { AccountPreferencesPage } from '../pages/AccountPreferencesPage.page';

test('verify Connect Wallet button shown in header and centre area', async ({page})=>{
    const accountPreferencesPage = new AccountPreferencesPage(page);
    await accountPreferencesPage.goToAccountPreferencesPage();
    const items = await accountPreferencesPage.connectWallets;
    items.forEach(function (item: any) {
            expect(item).toBeTruthy();
        });
});
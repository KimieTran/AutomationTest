import { test, expect } from '@playwright/test';
import { AccountPreferencesPage } from '../pages/AccountPreferencesPage.page';

test('verify Connect Wallet button shown in header and centre area', async ({page})=>{
    const accountPreferencesPage = new AccountPreferencesPage(page);
    await accountPreferencesPage.goToAccountPreferencesPage();
    test.setTimeout(40000);
    const items = await accountPreferencesPage.connectWallets;
    await expect(accountPreferencesPage.connectWallets).toHaveText(['Connect Wallet', 'Connect Wallet']);
});
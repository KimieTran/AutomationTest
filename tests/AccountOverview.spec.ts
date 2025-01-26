import { test, expect } from '@playwright/test';
import { AccountOverviewPage } from '../pages/AccountOverviewPage.page';


test('verify Connect Wallet button shown in Position area and header', async ({page})=>{
    const accountOverviewPage = new AccountOverviewPage(page);
    await accountOverviewPage.goToAccountOverviewPage();
    await expect(accountOverviewPage.possionConnectWallet).toBeTruthy();
    await expect(accountOverviewPage.headerConnectWallet).toBeTruthy();
});

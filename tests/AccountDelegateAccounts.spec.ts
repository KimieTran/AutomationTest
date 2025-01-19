import { test, expect } from '@playwright/test';
import { AccountDelegateAccountsPage } from '../pages/AccountDelegateAccountsPage.page';

test.only('verify Connect Wallet button shown in header and centre area',async ({page})=>{
    const accountDelegateAccountsPage = new AccountDelegateAccountsPage(page);
    await accountDelegateAccountsPage.goToAccountDelegateAccountsPage();
    await expect(accountDelegateAccountsPage.headerConnectWallet).toBeTruthy();
    await expect(accountDelegateAccountsPage.centreConnectWallet).toBeTruthy();
});
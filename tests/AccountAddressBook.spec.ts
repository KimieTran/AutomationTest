import { test, expect } from '@playwright/test';
import { AccountAddressBookPage } from '../pages/AccountAddressBookPage.page';

test.only('verify Connect Wallet button shown in header and centre area',async ({page})=>{
    const accountAddressBookPage = new AccountAddressBookPage(page);
    await accountAddressBookPage.goToAccountAddressBookPage();
    await expect(accountAddressBookPage.headerConnectWallet).toBeTruthy();
    await expect(accountAddressBookPage.centreConnectWallet).toBeTruthy();
});
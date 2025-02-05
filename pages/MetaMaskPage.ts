import { type Locator, type Page } from '@playwright/test';
export class MetaMaskPage{
    readonly page: Page;
    readonly createNewWalletBtn: Locator
    readonly importExistingWalletBtn: Locator

    constructor (page:Page){
        this.page=page;
        this.createNewWalletBtn = this.page.getByRole('button', { name: 'Create a new wallet' })
        this.importExistingWalletBtn = this.page.getByRole('button', { name: 'Import an existing wallet' })

    }


}
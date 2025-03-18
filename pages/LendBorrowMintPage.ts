import { type Locator, type Page } from '@playwright/test';

export class LendBorrowMintPage{
    readonly page: Page;
    readonly headersText: Locator

    constructor (page:Page){
        this.page=page;
        this.headersText = this.page.locator('thead th div')
    }


}
import { type Locator, type Page } from '@playwright/test';
export class ViewOnlyModePage{
    readonly page: Page;
    readonly walletAddressTextbox: Locator
    readonly viewBtn: Locator

    constructor (page:Page){
        this.page=page;
        this.walletAddressTextbox = this.page.getByRole('textbox', { name: 'swth1...' })
        this.viewBtn = this.page.getByRole('button', { name: 'View' })

    }


}
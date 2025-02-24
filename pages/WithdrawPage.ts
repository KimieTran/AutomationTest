import { type Locator, type Page } from '@playwright/test';

export class WithdrawPage{
    readonly page: Page;
    readonly carbonGroupUSD: Locator
    readonly swthTokenOption: Locator
    readonly recipientAddrTextbox: Locator
    readonly amountTextbox: Locator
    readonly memoTextbox: Locator
    readonly withdrawBtn: Locator
    readonly transactionSuccess: Locator

    constructor (page:Page){
        this.page=page;
        this.carbonGroupUSD = this.page.getByRole('button', { name: 'cUSD USD Carbon Grouped USD' })
        this.swthTokenOption = this.page.getByRole('cell', { name: 'SWTH SWTH Carbon Token' })
        this.recipientAddrTextbox = this.page.getByRole('textbox', { name: 'swth1q...' })
        this.amountTextbox = this.page.getByRole('spinbutton').first()
        this.memoTextbox = this.page.getByRole('textbox', { name: 'Enter message' })
        this.transactionSuccess = this.page.locator('div').filter({ hasText: /^Transaction Success$/ })
        this.withdrawBtn = this.page.getByRole('button', { name: 'Withdraw' }).nth(1)
    }


}
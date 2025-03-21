import { type Locator, type Page } from '@playwright/test';

export class LendBorrowMintPage{
    readonly page: Page;
    readonly headersText: Locator
    readonly howItWorkBtn: Locator
    readonly step1Logo: Locator
    readonly step2Logo: Locator
    readonly step3Logo: Locator
    readonly step4Logo: Locator
    readonly learnMoreLink: Locator
    readonly xBtn: Locator

    constructor (page:Page){
        this.page=page;
        this.headersText = this.page.locator('thead th div')
        this.howItWorkBtn = this.page.getByRole('button', { name: 'How it works' })
        this.step1Logo = this.page.getByRole('img', { name: 'step1' })
        this.step1Logo = this.page.getByRole('img', { name: 'step2' })
        this.step1Logo = this.page.getByRole('img', { name: 'step3' })
        this.step1Logo = this.page.getByRole('img', { name: 'step4' })
        this.learnMoreLink = this.page.locator('div').filter({ hasText: /^Learn More$/ }).getByRole('link')
        this.xBtn = this.page.locator("div:has-text('How Nitron Works') + button")
        
    }


}
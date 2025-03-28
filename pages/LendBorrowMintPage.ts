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
    readonly yourPositionsItem: Locator
    readonly lendingTab: Locator
    readonly borrowingTab: Locator
    readonly searchTextbox: Locator
    readonly usdLendBtn: Locator
    readonly usdBorrowBtn: Locator
    readonly amountTextbox: Locator
    readonly transactionText: Locator
    readonly lendBtn: Locator
    readonly borrowBtn: Locator
    readonly backBtn: Locator
    readonly enableModeBtn: Locator
    readonly enableBtn: Locator
    readonly selectCategoryDropdown: Locator
    readonly stablecoinsOption: Locator
    readonly thunderIcon: Locator
    readonly thunderTooltips: Locator
    readonly stableCoinsBtn: Locator
    readonly disableEModeBtn: Locator
    readonly disableBtn: Locator

    constructor (page:Page){
        this.page=page;
        this.headersText = this.page.locator('thead th div')
        this.howItWorkBtn = this.page.getByRole('button', { name: 'How it works' })
        this.step1Logo = this.page.getByRole('img', { name: 'step1' })
        this.step2Logo = this.page.getByRole('img', { name: 'step2' })
        this.step3Logo = this.page.getByRole('img', { name: 'step3' })
        this.step4Logo = this.page.getByRole('img', { name: 'step4' })
        this.learnMoreLink = this.page.locator('div').filter({ hasText: /^Learn More$/ }).getByRole('link')
        this.xBtn = this.page.locator("div:has-text('How Nitron Works') + button")
        this.yourPositionsItem = this.page.locator('div').filter({ hasText: /^Your Positions$/ }).nth(1)
        this.lendingTab = this.page.getByRole('button', { name: 'Lending' })
        this.borrowingTab = this.page.getByRole('button', { name: 'Borrowing' })
        this.searchTextbox = this.page.getByRole('textbox', { name: 'Search' })
        this.usdLendBtn = this.page.getByRole('button', { name: 'Lend' }).first()
        this.usdBorrowBtn = this.page.getByRole('button', { name: 'Borrow' }).first()
        this.amountTextbox = this.page.getByRole('spinbutton')
        this.transactionText = this.page.getByText('Transaction Broadcasted')
        this.lendBtn = this.page.getByRole('button', { name: 'Lend' })
        this.borrowBtn = this.page.getByRole('button', { name: 'Borrow' })
        this.backBtn = this.page.locator('a').filter({ hasText: 'Back' })
        this.enableModeBtn = this.page.getByRole('button', { name: 'Enable', exact: true })
        this.enableBtn = this.page.getByRole('button', { name: 'Enable', exact: true })
        this.selectCategoryDropdown = this.page.getByText('Select Category')
        this.stablecoinsOption = this.page.getByRole('cell', { name: 'Stablecoins' })
        this.thunderIcon = this.page.locator('td:nth-child(9)').first()
        this.thunderTooltips = this.page.getByText('Collateralizing this asset boosts borrowing power in your current E-Mode category.')
        this.stableCoinsBtn = this.page.getByRole('button', { name: 'Stablecoins' })
        this.disableEModeBtn = this.page.getByLabel('', { exact: true }).first()
        this.disableBtn = this.page.getByRole('button', { name: 'Disable' })

    }


}
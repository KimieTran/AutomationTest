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
    readonly viewDetailsBtn: Locator
    readonly popupLiquidRiskParamsText: Locator
    readonly contentUnderPopupTitle: Locator
    readonly healthFactorArea: Locator
    readonly currentLTVArea: Locator
    readonly xPopupBtn: Locator
    readonly eMode: Locator
    readonly eModeTooltips: Locator
    readonly learnMoreLinkTooltips: Locator
    readonly eModeThunderIcon: Locator

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
        this.viewDetailsBtn = this.page.locator('a').filter({ hasText: 'View Details' })
        this.popupLiquidRiskParamsText = this.page.getByText('Liquidation Risk Parameters')
        this.contentUnderPopupTitle = this.page.getByText('Your health factor and loan-to-value determines the assurance of your collateral. Add more collateral or return borrowed assets to avoid liquidation.')
        this.healthFactorArea = this.page.getByRole('paragraph').filter({ hasText: 'Health Factor' })
        this.currentLTVArea = this.page.getByText('Current LTV')
        this.xPopupBtn = this.page.getByRole('button')
        this.eMode = this.page.getByText('E-Mode', { exact: true })
        this.eModeTooltips = this.page.getByText('Efficiency Mode (E-Mode) increases your LTV for a selected category of assets.')
        this.learnMoreLinkTooltips = this.page.locator('a[href*="introduction/efficiency-mode"]')
        this.eModeThunderIcon = this.page.locator('div').filter({ hasText: /^E-Mode$/ }).locator('svg')
    }

    async getLendApyColumnValues() {
        const columnValues = await this.page.$$eval('tbody tr', rows => {
            return rows.map(row => {
                const lendApyCell = row.querySelectorAll('td')[3]
                const value = lendApyCell ? lendApyCell.innerText.trim() : null
                if (value) {
                    const number = parseFloat(value.replace('%', '').trim())
                    return !isNaN(number) ? number : null
                }
                return null
            }).filter(value => value !== null)
        })
        return columnValues
    }
}
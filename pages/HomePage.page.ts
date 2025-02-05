import { expect, type Locator, type Page } from '@playwright/test';
export class HomePage{
    readonly page: Page;
    readonly spotHistory;
    readonly financialChart;
    readonly priceChart;
    readonly noDataHereError;
    readonly marketDetails;
    readonly tradingFeeNotification;
    readonly fundingData;
    readonly fundingDataChart;
    readonly orderBook;
    readonly orderPrice;
    readonly carbonDevnet: Locator
    readonly mantle: Locator

    constructor (page:Page){
        this.page=page;
        this.spotHistory=page.locator('xpath=//div[text()="Spot History"]');
        this.financialChart=page.locator('//iframe[@title="Financial Chart"]');
        this.priceChart=page.locator('xpath=//div[text()="Price Chart"]');
        this.noDataHereError=page.locator('xpath=//div[text()="No data here"]');
        this.marketDetails=page.locator('xpath=//div[text()="Market Details"]'); 
        this.tradingFeeNotification=page.locator('xpath=//p[contains(text(),"Your Trading Fees have been effectively reduced by ")]');
        this.fundingData=page.locator('xpath=//div[text()="Funding Data"]');
        this.fundingDataChart=page.locator('xpath=//*[name()="svg" and @class="recharts-surface"]');
        this.orderBook=page.locator('xpath=//p[text()="Order Book"]');
        this.orderPrice=page.locator('xpath=//p[text()="Order Price"]');
        this.carbonDevnet=this.page.getByRole('paragraph').filter({ hasText: 'Carbon Devnet' })
        this.mantle=this.page.getByText('Mantle')

    }

    async goToHomePage(){
        await this.page.goto('https://beta-app.dem.exchange/');
    }


   

}
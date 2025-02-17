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
    readonly carbonTestnet: Locator
    readonly mantle: Locator
    readonly addressMetaMaskDropBtn: Locator
    readonly addressPhantomDropBtn: Locator
    readonly dropAddress2: Locator
    readonly evmAddress: Locator
    readonly copyEVMAddressBtn: Locator
    readonly carbonAddress: Locator
    readonly copyCarbonAddressBtn: Locator
    readonly addressDropBtn: Locator
    readonly firstCopyClipBoardBtn: Locator

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
        this.carbonTestnet=this.page.getByRole('paragraph').filter({ hasText: 'Carbon Testnet' })
        this.mantle=this.page.getByText('Mantle')
        this.addressMetaMaskDropBtn = this.page.getByRole('img', { name: 'MetaMask' })
        this.addressPhantomDropBtn = this.page.getByRole('img', { name: 'Phantom' })
        this.dropAddress2 = this.page.locator('div[title="Copy to Clipboard"]').locator('xpath=following-sibling::div')
        this.evmAddress=this.page.locator('//p[contains(text(), "EVM Address")]/following-sibling::div/div/div')
        this.carbonAddress=this.page.getByText('Carbon Address').locator('xpath=following-sibling::div')
        this.copyEVMAddressBtn=this.page.locator('div[title="Copy to Clipboard"]').nth(1)
        this.copyCarbonAddressBtn=this.page.locator('div[title="Copy to Clipboard"]').nth(2)
        this.addressDropBtn = this.page.locator('svg:nth-child(3)').first()
        this.firstCopyClipBoardBtn=this.page.locator('div[title="Copy to Clipboard"]').first()

    }

    async goToHomePage(){
        await this.page.goto('https://beta-app.dem.exchange/');
    }


   

}
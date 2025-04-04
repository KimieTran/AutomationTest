import { expect, type Locator, type Page } from '@playwright/test';
export class TradeTradePage{
    readonly page: Page;
   readonly headerConnectWallet;
   readonly rightSideConnectWallet;
   readonly opTokenOption: Locator
   readonly spotTab: Locator
   readonly searchToken: Locator
   readonly swthUSDOption: Locator
   readonly amountToken: Locator
   readonly buyBtn: Locator
   readonly confirmBtn: Locator
   readonly orderPlacedPopup: Locator
   readonly orderedCancelledPopup: Locator
   readonly cancelBtn: Locator
   readonly cancelAllBtn: Locator
   readonly switchingBtn: Locator
   readonly sellBtn: Locator
   readonly marketBtn: Locator
   readonly amountOnMarket: Locator
   readonly tradeExecutedPopup: Locator
   readonly priceOrderTextBox: Locator
   readonly priceForm: Locator

    constructor(page: Page){
        this.page=page;
        this.headerConnectWallet=this.page.getByRole('button', { name: 'Connect Wallet' }).first();
        this.rightSideConnectWallet=this.page.getByRole('button', { name: 'Connect Wallet' }).nth(1);
        this.opTokenOption = this.page.getByRole('img', { name: 'OP' })
        this.spotTab = this.page.getByRole('button', { name: 'Spot', exact: true })
        this.searchToken = this.page.getByRole('textbox', { name: 'e.g. “SWTH” or “BTC”' })
        this.swthUSDOption = this.page.locator('#root').getByText('SWTH / USD', { exact: true })
        this.amountToken = this.page.getByRole('spinbutton').nth(1)
        this.amountOnMarket = this.page.getByRole('spinbutton').first()
        this.buyBtn = this.page.getByRole('button', { name: 'Buy SWTH', exact: true })
        this.confirmBtn = this.page.getByRole('button', { name: 'Confirm' })
        this.orderPlacedPopup = this.page.getByText('Order Placed', { exact: true })
        this.orderedCancelledPopup = this.page.getByText('Order Cancelled')
        this.cancelBtn = this.page.getByRole('button', { name: 'Cancel', exact: true })
        this.cancelAllBtn = this.page.getByRole('columnheader', { name: 'Cancel All' })
        this.switchingBtn = this.page.locator("button:has(span:has-text('Buy SWTH'))").locator("xpath=following-sibling::button")
        this.sellBtn = this.page.getByRole('button', { name: 'Sell SWTH', exact: true })
        this.marketBtn = this.page.getByRole('button', { name: 'Market', exact: true })
        this.tradeExecutedPopup = this.page.getByText('Trade Executed', { exact: true })
        this.priceOrderTextBox = this.page.locator('form div').filter({ hasText: 'MidUSD' }).nth(2)
        //this.priceForm = this.page.locator('#priceFormField')
        this.priceForm = this.page.getByRole('spinbutton').first()
    }

    async goToTradePage(){
        await this.page.goto('https://beta-app.dem.exchange/trade');
    }

    async verifyTableData(expectedData: Array<{ [key: string]: string }>) {
        const table = this.page.locator('//table[thead//th[contains(text(), "Date")]]');
        await expect(table).toBeVisible();
      
        const headers = await table.locator('thead tr th').allInnerTexts();
        console.log('Column headers:', headers);
      
        const columnIndexes: { [key: string]: number } = {};
        headers.forEach((header, index) => {
          columnIndexes[header.trim()] = index + 1;
        });
        console.log('Column Index:', columnIndexes)
      
        for (let rowIndex = 0; rowIndex < expectedData.length; rowIndex++) {
          const row = table.locator(`tbody tr:nth-child(${rowIndex + 1})`);
      
          for (const [columnName, expectedValue] of Object.entries(expectedData[rowIndex])) {
            if (columnIndexes[columnName] !== undefined) {
              const columnIndex = columnIndexes[columnName];
              const cellLocator = row.locator(`td:nth-child(${columnIndex})`);
      
              await expect(cellLocator).toHaveText(expectedValue);
              console.log(`Row ${rowIndex + 1}, column "${columnName}" verified: "${expectedValue}"`);
            } else {
              console.warn(`Column "${columnName}" not found!`);
            }
          }
        }
      }
      
}
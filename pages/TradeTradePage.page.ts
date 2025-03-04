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
   readonly orderedPopup: Locator
   readonly orderedCancelledPopup: Locator
   readonly cancelBtn: Locator
   readonly cancelAllBtn: Locator

    constructor(page: Page){
        this.page=page;
        this.headerConnectWallet=this.page.getByRole('button', { name: 'Connect Wallet' }).first();
        this.rightSideConnectWallet=this.page.getByRole('button', { name: 'Connect Wallet' }).nth(1);
        this.opTokenOption = this.page.getByRole('img', { name: 'OP' })
        this.spotTab = this.page.getByRole('button', { name: 'Spot', exact: true })
        this.searchToken = this.page.getByRole('textbox', { name: 'e.g. “SWTH” or “BTC”' })
        this.swthUSDOption = this.page.locator('#root').getByText('SWTH / USD')
        this.amountToken = this.page.getByRole('spinbutton').nth(1)
        this.buyBtn = this.page.getByRole('button', { name: 'Buy SWTH', exact: true })
        this.confirmBtn = this.page.getByRole('button', { name: 'Confirm' })
        this.orderedPopup = this.page.getByText('Order Placed')
        this.orderedCancelledPopup = this.page.getByText('Order Cancelled')
        this.cancelBtn = this.page.getByRole('button', { name: 'Cancel', exact: true })
        this.cancelAllBtn = this.page.getByRole('columnheader', { name: 'Cancel All' })
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
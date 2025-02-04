import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage.page';

test('verify elements shown', async ({page})=>{
test.setTimeout(90000);
const homePage = new HomePage(page);
await homePage.goToHomePage();
await expect(homePage.spotHistory).toBeTruthy();
await expect(homePage.financialChart).toBeTruthy();
await page.getByText('Price Chart').dblclick();
await expect(homePage.noDataHereError).toBeTruthy();
await page.click(homePage.marketDetails);
await expect(homePage.tradingFeeNotification).toBeTruthy();
await page.click(homePage.fundingData);
await expect(homePage.fundingDataChart).toBeTruthy();
await expect(homePage.orderBook).toBeTruthy();
await expect(homePage.orderPrice).toBeTruthy();


});
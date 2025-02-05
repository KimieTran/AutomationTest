import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage.page';

test('verify elements shown', async ({page})=>{
test.setTimeout(90000);
const homePage = new HomePage(page);
await homePage.goToHomePage();
await expect(homePage.spotHistory).toBeTruthy();
await expect(homePage.financialChart).toBeTruthy();
await page.getByRole('button', { name: 'Price Chart' }).dblclick();
await expect(homePage.noDataHereError).toBeTruthy();
await page.getByText('Market Details').click();
await expect(homePage.tradingFeeNotification).toBeTruthy();
await page.getByText('Funding Data').click();
await expect(homePage.fundingDataChart).toBeTruthy();
await expect(homePage.orderBook).toBeTruthy();
await expect(homePage.orderPrice).toBeTruthy();


});
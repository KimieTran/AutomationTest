import { expect, type Locator, type Page } from '@playwright/test';
export class HomePage{
    readonly page: Page;
    readonly accountMenu;
    constructor (page:Page){
        this.page=page;
        this.accountMenu=page.locator('xpath=//button[@label="Account"]');
    }

   

}
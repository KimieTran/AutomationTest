import { type Locator, type Page } from '@playwright/test';

export class DepositPage{
    readonly page: Page;
    readonly depositBtn: Locator
    readonly myBrowerWallet: Locator
    readonly selectNetworkBtn: Locator
    readonly networkOption: (networkName: string) => Locator
    readonly amountTextbox: Locator
    readonly leapDepositBtn: Locator
    readonly errorAmountMsg: Locator
    readonly phantomDepositBtn: Locator
    readonly metaMaskDepositBtn: Locator

    constructor (page:Page){
        this.page=page;
        this.depositBtn = this.page.getByText('Deposit', { exact: true }).first()
        this.myBrowerWallet = this.page.getByText('My Browser Wallet')
        this.selectNetworkBtn = this.page.getByRole('button', { name: 'Select Network' })
        this.networkOption = (networkName: string) => this.page.getByText(networkName)
        this.amountTextbox = this.page.getByRole('spinbutton').first()
        this.errorAmountMsg = this.page.getByText('Insufficient balance')
        this.leapDepositBtn = this.page.locator('div').filter({ hasText: /^Deposit Amount \(After Fees\)0\.00000 USDDeposit$/ }).getByRole('button')
        this.phantomDepositBtn = this.page.locator('div').filter({ hasText: /^Deposit Amount \(After Fees\)0\.00000 USDC\$0\.00000Deposit$/ }).getByRole('button')
        this.metaMaskDepositBtn = this.page.locator('div').filter({ hasText: /^Deposit Amount \(After Fees\)0\.00000 USDC\$0\.00000Deposit$/ }).getByRole('button')

    }


}
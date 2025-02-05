import { type Locator, type Page } from '@playwright/test';
export class ConnectWalletPage{
    readonly page: Page;
    readonly selectWallet: Locator
    readonly metaMaskBtn: Locator
    readonly keplrBtn: Locator
    readonly leapBtn: Locator
    readonly encryptedKeyBtn: Locator
    readonly viewOnlyMode: Locator

    constructor (page:Page){
        this.page=page;
        this.selectWallet = this.page.getByRole('heading', { name: 'Select Wallet' })
        this.metaMaskBtn = this.page.getByRole('button', { name: 'Metamask' })
        this.keplrBtn = this.page.getByRole('button', { name: 'Keplr' })
        this.leapBtn = this.page.getByRole('button', { name: 'Leap' })
        this.encryptedKeyBtn = this.page.getByRole('button', { name: 'Encrypted Key' })
        this.viewOnlyMode = this.page.getByText('View-Only Mode').nth(1)

    }


}
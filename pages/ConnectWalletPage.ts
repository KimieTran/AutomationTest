import { type Locator, type Page } from '@playwright/test';
export class ConnectWalletPage{
    readonly page: Page;
    readonly selectWallet: Locator
    readonly metaMaskBtn: Locator
    readonly phantomBtn: Locator
    readonly keplrBtn: Locator
    readonly leapBtn: Locator
    readonly encryptedKeyBtn: Locator
    readonly viewOnlyMode: Locator
    readonly connectWithGoogle: Locator
    readonly connectWithX: Locator

    constructor (page:Page){
        this.page=page;
        this.selectWallet = this.page.getByRole('heading', { name: 'Select Wallet' })
        this.metaMaskBtn = this.page.getByRole('button', { name: 'Metamask' })
        this.phantomBtn = this.page.getByRole('button', { name: 'Phantom' })
        this.keplrBtn = this.page.getByRole('button', { name: 'Keplr' })
        this.leapBtn = this.page.getByRole('button', { name: 'Leap' })
        this.encryptedKeyBtn = this.page.getByRole('button', { name: 'Encrypted Key' })
        //this.viewOnlyMode = this.page.getByText('View-Only Mode').nth(1)
        this.viewOnlyMode = this.page.getByRole('list').filter({ hasText: 'View-Only Mode' }).locator('rect')
        this.connectWithGoogle = this.page.getByText('Connect with Google').nth(1)
        this.connectWithX = this.page.getByText('Connect with X').nth(1)
    }


}
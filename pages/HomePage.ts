import { Page, expect } from '@playwright/test';

export class HomePage {
    private page: Page;
    readonly url = 'https://www.demoblaze.com/';

    constructor(page: Page) {
        this.page = page;
    }

    // Actions
    async navigate() {
        await this.page.goto(this.url);
        await this.page.waitForLoadState('domcontentloaded');
    }

    async waitForPageLoad() {
        await expect(this.page.getByRole('link', { name: 'Sign up' })).toBeVisible();
    }
} 
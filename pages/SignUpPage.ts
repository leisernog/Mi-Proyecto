import { Page, expect } from '@playwright/test';

export class SignUpPage {
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    // Locators
    private signUpLink = () => this.page.getByRole('link', { name: 'Sign up' });
    private usernameInput = () => this.page.locator('#sign-username');
    private passwordInput = () => this.page.locator('#sign-password');
    private signUpButton = () => this.page.getByRole('button', { name: 'Sign up' });

    // Actions
    async navigateToSignUp() {
        await this.signUpLink().click();
        await this.page.waitForSelector('#signInModal', { state: 'visible' });
    }

    async registerUser(username: string, password: string) {
        const dialogPromise = this.page.waitForEvent('dialog');
        
        await this.usernameInput().fill(username);
        await this.passwordInput().fill(password);
        await this.signUpButton().click();

        const dialog = await dialogPromise;
        console.log('Sign up dialog message:', dialog.message());
        await dialog.accept();

        // Wait for modal to close
        await this.page.waitForSelector('#signInModal', { state: 'hidden' });
    }

    // Utility method to generate unique username
    static generateUniqueUsername(): string {
        return `test_user_${Date.now()}`;
    }
} 
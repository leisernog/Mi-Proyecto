import { Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class SauceLoginPage extends BasePage {
    // Selectores
    private readonly usernameInput = '[data-test="username"]';
    private readonly passwordInput = '[data-test="password"]';
    private readonly loginButton = '[data-test="login-button"]';

    constructor(page: Page) {
        super(page);
    }

    /**
     * Navega a la página de login de Sauce Demo
     * @param url URL base de Sauce Demo
     */
    async navigateToLogin(url: string) {
        await this.navigate(url);
        await this.waitForElement(this.usernameInput);
    }

    /**
     * Realiza el proceso de login
     * @param username Nombre de usuario
     * @param password Contraseña
     */
    async login(username: string, password: string) {
        await this.fill(this.usernameInput, username);
        await this.fill(this.passwordInput, password);
        await this.click(this.loginButton);
    }
} 
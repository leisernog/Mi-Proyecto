import { Page, expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class LoginPage extends BasePage {
    // Selectores
    private readonly usernameInput = '#loginusername';
    private readonly passwordInput = '#loginpassword';
    private readonly loginButton = 'button:has-text("Log in")';
    private readonly errorMessage = '.error-message';
    private readonly loginForm = '#login-form';
    private readonly loginLink = '#login2';
    private readonly logoutLink = '#logout2';
    private readonly welcomeText = '#nameofuser';

    constructor(page: Page) {
        super(page);
    }

    /**
     * Navega a la página de login
     * @param url URL de la página de login
     */
    async navigateToLogin(url: string) {
        await this.navigate(url);
        await this.waitForElement(this.loginForm);
    }

    /**
     * Click en el enlace de login para abrir el modal
     */
    async clickLogin() {
        await this.page.click(this.loginLink);
        await this.page.waitForSelector('#logInModal', { state: 'visible' });
    }

    /**
     * Realiza el proceso de login
     * @param username Nombre de usuario
     * @param password Contraseña
     */
    async login(username: string, password: string) {
        await this.page.waitForSelector(this.usernameInput);
        await this.page.fill(this.usernameInput, username);
        await this.page.fill(this.passwordInput, password);
        await this.page.click(this.loginButton);
        await this.page.waitForSelector('#logInModal', { state: 'hidden' });
    }

    /**
     * Verifica si el login fue exitoso
     * @param username Nombre de usuario esperado en el mensaje de bienvenida
     */
    async verifyLoginSuccess(username: string) {
        await this.page.waitForSelector(this.welcomeText);
        const welcomeMessage = await this.page.textContent(this.welcomeText);
        await expect(welcomeMessage).toContain('Welcome ' + username);
    }

    /**
     * Verifica si hay un mensaje de error
     * @param expectedError Mensaje de error esperado
     */
    async verifyErrorMessage(expectedError: string) {
        const errorText = await this.getText(this.errorMessage);
        await expect(errorText).toBe(expectedError);
    }

    /**
     * Verifica si los campos del formulario están vacíos
     */
    async verifyEmptyForm() {
        const usernameValue = await this.page.inputValue(this.usernameInput);
        const passwordValue = await this.page.inputValue(this.passwordInput);
        
        expect(usernameValue).toBe('');
        expect(passwordValue).toBe('');
    }

    /**
     * Realiza el proceso de logout
     */
    async logout() {
        await this.page.waitForSelector(this.logoutLink);
        await this.page.click(this.logoutLink);
        // Esperar a que el logout se complete
        await this.page.waitForSelector(this.loginLink, { state: 'visible' });
    }

    /**
     * Verifica si el logout fue exitoso
     */
    async verifyLoggedOut() {
        await expect(this.page.locator(this.loginLink)).toBeVisible();
        await expect(this.page.locator(this.logoutLink)).toBeHidden();
    }
} 
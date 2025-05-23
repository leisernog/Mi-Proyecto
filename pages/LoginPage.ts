import { Page, expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class LoginPage extends BasePage {
    // Selectores
    private readonly usernameInput = '#username';
    private readonly passwordInput = '#password';
    private readonly loginButton = '#login-button';
    private readonly errorMessage = '.error-message';
    private readonly loginForm = '#login-form';

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
     * Realiza el proceso de login
     * @param username Nombre de usuario
     * @param password Contraseña
     */
    async login(username: string, password: string) {
        await this.fill(this.usernameInput, username);
        await this.fill(this.passwordInput, password);
        await this.click(this.loginButton);
    }

    /**
     * Verifica si el login fue exitoso
     * @param expectedUrl URL esperada después del login
     */
    async verifySuccessfulLogin(expectedUrl: string) {
        await expect(this.page).toHaveURL(expectedUrl);
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
} 
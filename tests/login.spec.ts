import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { loginData, testUrls } from '../fixtures/testData';

test.describe('Suite de Pruebas de Login', () => {
    let loginPage: LoginPage;

    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page);
        await loginPage.navigateToLogin(testUrls.loginPage);
    });

    test('Login exitoso con credenciales válidas', async () => {
        const { username, password, expectedUrl } = loginData.validUser;
        
        await loginPage.login(username, password);
        await loginPage.verifySuccessfulLogin(expectedUrl);
    });

    test('Login fallido con credenciales inválidas', async () => {
        const { username, password, expectedError } = loginData.invalidUser;
        
        await loginPage.login(username, password);
        await loginPage.verifyErrorMessage(expectedError);
    });

    test('Verificar formulario vacío al cargar la página', async () => {
        await loginPage.verifyEmptyForm();
    });

    test('Verificar redirección a dashboard después de login exitoso', async () => {
        const { username, password, expectedUrl } = loginData.validUser;
        
        await loginPage.login(username, password);
        await loginPage.verifySuccessfulLogin(expectedUrl);
    });
}); 
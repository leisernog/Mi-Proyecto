import { test } from '@playwright/test';
import { SauceLoginPage } from '../pages/SauceLoginPage';
import { SauceInventoryPage } from '../pages/SauceInventoryPage';
import { sauceDemoData } from '../fixtures/sauceDemo.data';

test.describe('Suite de Pruebas Sauce Demo', () => {
    let loginPage: SauceLoginPage;
    let inventoryPage: SauceInventoryPage;

    test.beforeEach(async ({ page }) => {
        loginPage = new SauceLoginPage(page);
        inventoryPage = new SauceInventoryPage(page);
    });

    test('Navegar al detalle de un producto después del login', async () => {
        // Login
        await loginPage.navigateToLogin(sauceDemoData.baseUrl);
        await loginPage.login(
            sauceDemoData.credentials.standardUser.username,
            sauceDemoData.credentials.standardUser.password
        );

        // Verificar página de inventario y seleccionar producto
        await inventoryPage.verifyInventoryPage();
        await inventoryPage.clickProductTitle(sauceDemoData.products.backpack.id);
    });
});
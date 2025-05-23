import { Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class SauceInventoryPage extends BasePage {
    // Selectores
    private readonly title = '[data-test="title"]';
    private getProductTitleLink = (id: string) => `[data-test="item-${id}-title-link"]`;

    constructor(page: Page) {
        super(page);
    }

    /**
     * Verifica que estamos en la página de inventario
     */
    async verifyInventoryPage() {
        await this.waitForElement(this.title);
    }

    /**
     * Hace clic en el título de un producto específico
     * @param productId ID del producto
     */
    async clickProductTitle(productId: string) {
        await this.click(this.getProductTitleLink(productId));
    }
} 
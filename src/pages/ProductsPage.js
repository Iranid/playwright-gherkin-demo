export class ProductsPage {
  constructor(page) {
    this.page = page;
    this.title = 'text=ALL PRODUCTS';
    this.productCard = '.product-image-wrapper';
  }

  async isLoaded() {
    await this.page.waitForSelector(this.title);
    // Playwright no tiene toHaveCountGreaterThan aquí, así que hacemos:
    const count = await this.page.locator(this.productCard).count();
    return count > 0;
  }
}

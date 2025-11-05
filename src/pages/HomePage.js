export class HomePage {
  constructor(page) {
    this.page = page;
    this.url = 'https://automationexercise.com/';
    this.productsLink = 'a[href="/products"]';
    this.signupLoginLink = 'a[href="/login"]';
    this.categoryText = 'text=CATEGORY';
  }

  async goto() {
    await this.page.goto(this.url);
  }

  async isLoaded() {
    await this.page.waitForLoadState('networkidle');
    return this.page.locator(this.categoryText).isVisible();
  }

  async goToProducts() {
    await this.page.click(this.productsLink);
  }

  async goToAuth() {
    await this.page.click(this.signupLoginLink);
  }
}

export class AccountPage {
  constructor(page) {
    this.page = page;
    this.accountCreatedTitle = 'text=ACCOUNT CREATED!';
    this.accountInfoTitle = 'text=Enter Account Information';
  }

  async isAccountCreatedVisible() {
    return this.page.locator(this.accountCreatedTitle).isVisible();
  }

  async isEnterAccountInfoVisible() {
    return this.page.locator(this.accountInfoTitle).isVisible();
  }
}

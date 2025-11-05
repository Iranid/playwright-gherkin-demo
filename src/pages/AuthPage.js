export class AuthPage {
  constructor(page) {
    this.page = page;
    this.newUserTitle = 'text=New User Signup!';
    this.loginTitle = 'text=Login to your account';
    this.signupName = 'input[name="name"]';
    this.signupEmail = 'input[data-qa="signup-email"]';
    this.signupButton = 'button[data-qa="signup-button"]';
    this.loginEmail = 'input[data-qa="login-email"]';
    this.loginPassword = 'input[data-qa="login-password"]';
    this.loginButton = 'button[data-qa="login-button"]';
    this.duplicateEmailMsg = 'text=Email Address already exist!';
    this.invalidLoginMsg = 'text=Your email or password is incorrect!';
  }

  async isLoaded() {
    return this.page.locator(this.newUserTitle).isVisible();
  }

  async signupValidUser() {
    const random = Date.now();
    await this.page.fill(this.signupName, `TestUser_${random}`);
    await this.page.fill(this.signupEmail, `testuser_${random}@test.com`);
    await this.page.click(this.signupButton);
  }

  async signupWithEmail(email) {
    await this.page.fill(this.signupName, `User_${Date.now()}`);
    await this.page.fill(this.signupEmail, email);
    await this.page.click(this.signupButton);
  }

  async loginInvalid(email, password) {
    await this.page.fill(this.loginEmail, email);
    await this.page.fill(this.loginPassword, password);
    await this.page.click(this.loginButton);
  }
}

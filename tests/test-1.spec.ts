import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { SignUpPage } from '../pages/SignUpPage';
import { LoginPage } from '../pages/LoginPage';

test.describe('User Authentication Flow', () => {
  // Increase timeout for the entire test file
  test.setTimeout(60000);

  let homePage: HomePage;
  let signUpPage: SignUpPage;
  let loginPage: LoginPage;
  
  // Test data
  const USER = {
    username: '',  // Will be set in beforeEach
    password: 'Test123!'
  };

  test.beforeEach(async ({ page }) => {
    // Initialize page objects
    homePage = new HomePage(page);
    signUpPage = new SignUpPage(page);
    loginPage = new LoginPage(page);

    // Generate unique username for each test
    USER.username = SignUpPage.generateUniqueUsername();

    // Navigate to homepage
    await homePage.navigate();
    await homePage.waitForPageLoad();
  });

  test('should register and login successfully', async () => {
    // Register new user
    await test.step('Register new user', async () => {
      await signUpPage.navigateToSignUp();
      await signUpPage.registerUser(USER.username, USER.password);
    });

    // Login with new user
    await test.step('Login with new user', async () => {
      await loginPage.clickLogin();
      await loginPage.login(USER.username, USER.password);
      await loginPage.verifyLoginSuccess(USER.username);
    });

    // Logout
    await test.step('Logout', async () => {
      await loginPage.logout();
      await loginPage.verifyLoggedOut();
    });
  });
});
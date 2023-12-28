// @ts-check
const { test, expect } = require('@playwright/test');
const MainPage = require('../pages/main-page');
const CartPage = require('../pages/cart-page');

test('has title', async ({ page }) => {
  const mainPage = new MainPage(page);
  await mainPage.open();

  await expect(page).toHaveTitle(/1001 DRESS/);
});

test('has full title', async ({ page }) => {
  const mainPage = new MainPage(page);
  await mainPage.open();
  
  await expect(page).toHaveTitle("1001 DRESS - Платье от производителя недорого");
});

test('Переход по ссылке на страницу Как оформить заказ', async ({ page }) => {
  const mainPage = new MainPage(page);
  await mainPage.open();
  mainPage.clickOnHowDoOrder();

  await expect(page).toHaveURL(/.*how-order/);
});

test('Переход по ссылке в корзине на главную страницу', async ({ page }) => {
  const cartPage = new CartPage(page);
  await cartPage.open();
  cartPage.clickOnCartEmptyBtn();

 await expect(page).toHaveURL(/.\./);
  

});

test('Элемент корзина содержит текст Корзина', async ({ page }) => {
  const mainPage = new MainPage(page);
  await mainPage.open();

  const locator = page.locator("span[class='header__icon-num']");
  await expect(locator).toHaveText(/Корзина/);
});

test('Переход на страницу all-dresses с главной', async ({ page }) => {
  const mainPage = new MainPage(page);
  await mainPage.open();
  await mainPage.clickOnDressCatalog();

  await expect(page).toHaveURL(/.*lookbook/);
});
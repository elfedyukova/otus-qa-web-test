// @ts-check
const { test, expect } = require('@playwright/test');

test('has title', async ({ page }) => {
  await page.goto('https://1001dress.ru/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/1001 DRESS/);
});

test('has full title', async ({ page }) => {
  await page.goto('https://1001dress.ru/');
  
  // Expect a title "to contain" a string.
  await expect(page).toHaveTitle("1001 DRESS - Платье от производителя недорого");
});

test('Переход по ссылке на страницу Как оформить заказ', async ({ page }) => {
  await page.goto('https://1001dress.ru/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Как оформить заказ' }).click();

  // Expects the URL to contain intro.
  await expect(page).toHaveURL(/.*how-order/);
});

test('Переход по ссылке в корзине на главную страницу', async ({ page }) => {
  await page.goto('https://1001dress.ru/personal/cart/');

 // Click the get started link.
 await page.getByRole('link', { name: 'Нажмите здесь' }).click();

 // Expects the URL to contain intro.
 await expect(page).toHaveURL(/.\./);
  

});

test('Элемент корзина содержит текст Корзина', async ({ page }) => {
  await page.goto('https://1001dress.ru/');

const locator = page.locator("span[class='header__icon-num']");
await expect(locator).toHaveText(/Корзина/);
});
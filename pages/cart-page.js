const Header = require("./fragments/header");
const BasePage = require("./base-page");

class CartPage extends BasePage{

    constructor(page) {
        super(page);
        this.page = page;
        this.header = new Header(page);
        this._cartEmptyBtn = page.getByRole('link', { name: 'Нажмите здесь' });
    }

    async open() {
        await this.page.goto('/personal/cart/')
    }

    async clickOnCartEmptyBtn() {
        await this._cartEmptyBtn.click();
    }

}

module.exports = CartPage;
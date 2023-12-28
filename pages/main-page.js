const Header = require("./fragments/header");
const BasePage = require("./base-page");

class MainPage extends BasePage{

    constructor(page) {
        super(page);
        this.page = page;
        this.header = new Header(page);
        this._dressCatalog = page.locator("//div[@class='catalog-side-wrap']//div[2]//div[1]//a[1]");
        this._howOrder = page.getByRole('link', { name: 'Как оформить заказ' });
    }

    async open() {
        await this.page.goto('/')
    }

    async clickOnDressCatalog() {
        await this._dressCatalog.click();
    }

    async clickOnHowDoOrder() {
        await this._howOrder.click();
    }
}

module.exports = MainPage;
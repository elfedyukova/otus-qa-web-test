class Header {

    constructor(page) {
        this.page = page;
        this._searchBtn = page.locator("//input[@class='input-search-kwd']");
        this._loginBtninMenu = page.locator("//span[contains(@class,'btn-action-menu')]")
        this._pageCartBtn = page.locator("//span[contains(@class,'position-relative header__icon')]//span[1]");
    }

    async clickLoginBtn() {
        await this._loginBtninMenu.click();
        return new LoginPage(this.page);
    };
}

module.exports = Header;
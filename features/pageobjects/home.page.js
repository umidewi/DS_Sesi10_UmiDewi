const { $, expect } = require('@wdio/globals')
const Page = require('./page');

class HomePage extends Page {
    get iconCart () { return $('.shopping_cart_link'); }

    async validateHomePage() {
        await expect(browser).toHaveUrlContaining('/inventory.html')
        await expect(this.iconCart).toBeDisplayed()
    }

    //for select product
    async selectProduct(){
        const productName = "Sauce Labs Backpack"
        const productsElement = await $$('div.inventory_item_name')

        for (const ele of productsElement) {
            if (await ele.getText() === productName) {
                await ele.click()
                break
            }
        }
        await browser.pause(1000)
    }

    open () {
        return super.open('/inventory.html');
    }
}

module.exports = new HomePage();
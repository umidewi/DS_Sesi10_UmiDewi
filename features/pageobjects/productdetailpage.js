const { $, expect } = require('@wdio/globals')
const Page = require('./page');

class ProductDetailPage extends Page {
    get backtoProduct () { return $('#back-to-products'); }

    async validateProductDetailPage() {
        await expect(browser).toHaveUrlContaining('/inventory-item.html?id=4')
        await expect(this.backtoProduct).toBeDisplayed()
    }

    open () {
        return super.open('/inventory-item.html?id=4');
    }
}

module.exports = new ProductDetailPage();
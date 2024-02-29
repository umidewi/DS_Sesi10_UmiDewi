const { $, expect } = require('@wdio/globals')
const Page = require('./page');

class LoginPage extends Page {
    // NOTE: elements collection
    get fieldUsername () { return $('#user-name'); }
    get fieldPassword () { return $('#password'); }
    get buttonLogin () { return $('#login-button'); }
    errorLockedOutUser = (dynamicMessage) => $(`//h3[text()="${dynamicMessage}"]`)
    errorMessages = (message) => $(`//h3[text()="${message}"]`)

    async login (username) {
        await this.fieldUsername.waitForDisplayed({ timeout: 2500 });
        await this.fieldUsername.setValue(username);
        await this.fieldPassword.setValue(process.env.PASSWORD_SAUCEDEMO);
        await this.buttonLogin.click();
    }

    async login2 (username , password) {
        await this.fieldUsername.waitForDisplayed({ timeout: 2500 });
        await this.fieldUsername.setValue(username);
        await this.fieldPassword.setValue(process.env.USERNAME_INVALID);
        await this.buttonLogin.click();
    }

    async validateLockedOutUserError (dynamicMessage) {
        await this.errorLockedOutUser(dynamicMessage).waitForDisplayed({ timeout: 2500 });
        await expect(this.errorLockedOutUser(dynamicMessage)).toBeDisplayed()
    }

    async validateInvalidLogin (message) {
        await this.errorMessages(message).waitForDisplayed({ timeout: 2500 });
        await expect(this.errorMessages(message)).toBeDisplayed()
    }

    open () {
        return super.open('/'); // NOTE: will open https://www.saucedemo.com/
    }
}

module.exports = new LoginPage();
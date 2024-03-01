const { Given, When, Then } = require('@wdio/cucumber-framework');

const LoginPage = require('../pageobjects/login.page.js');
const HomePage = require('../pageobjects/home.page.js');

Given(/^Umi is on the login page$/, async () => {
    await LoginPage.open()
})

//For case valid credential
When(/^Umi login with "(.*)" credential$/, async (username) => {
    await LoginPage.login(username)
})

Then(/^Umi should see home page$/, async() => {
    await HomePage.validateHomePage()
})

//For case invalid credential
When (/^Umi login with (.*) and (.*)$/, async (username,password) => {
    await LoginPage.login2(username,password)
})

Then (/^Umi should see error (.*)$/, async (message) => {
    await LoginPage.validateInvalidLogin(message)
})


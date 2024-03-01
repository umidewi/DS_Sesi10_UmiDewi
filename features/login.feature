@digital-skola @login
Feature: Swag Labs - Login
  Background: User on the login page
    Given Umi is on the login page

  @positivelogin
  Scenario: As a standard_user, I want to log in successfully
    When Umi login with "standard_user" credential
    Then Umi should see home page

  @negativelogin
  Scenario: Login with invalid credential, should get error message
    When Umi login with <username> and <password>
    Then Umi should see error <message>
    
    Examples:
    | username        | password        | message                                                                    |
    | andi            | secret_sauce    | Epic sadface: Username and password do not match any user in this service  |
    |                 | secret_sauce    | Epic sadface: Username is required                                         |
    | andi            |                 | Epic sadface: Password is required                                         |
    | andi            | andi            | Epic sadface: Username and password do not match any user in this service  |
    | locked_out_user | secret_sauce    | Epic sadface: Sorry, this user has been locked out.                        |
     
@digital-skola @login
Feature: Swag Labs - Login
  Background: User on the login page
    Given Umi is on the login page

  @positive
  Scenario: As a standard_user, I want to log in successfully
    When Umi login with "standard_user" credential
    Then Umi should see home page

  @negative1
  Scenario: As a locked_out_user, I should get error message
    When Umi login with "locked_out_user" credential
    Then Umi should see error "Epic sadface: Sorry, this user has been locked out."

  @negative2
  Scenario: As a standart_user, I should get error message
    When Umi login with "standart_user" credential
    Then Umi should see error "Epic sadface: Username and password do not match any user in this service"


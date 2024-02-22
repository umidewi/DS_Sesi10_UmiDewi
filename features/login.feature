Feature: Swag Labs - login
  Background: User on the login page
    Given Umi is on the login page 

  Scenario: As a standart_user, I want to log in successfully
    When Umi login with "standart_user" credential
    Then Umi should see home page

  Scenario: As a locked_out, I want to log in successfully
    When Umi login with "locked_out_user" credential
    Then Umi should see error "Epic sadface: Sorry, this user has been locked out"

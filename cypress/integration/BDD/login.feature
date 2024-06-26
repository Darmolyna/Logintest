Feature: ogin validation

    Application regression

    @smoke
    
    Scenario: Verify successful login with valid username and password 
    Given I open Ecommerce page
    When I click the login button
    When I enter valid login details
    Then I verify successfull login

    Scenario: Verify unsuccessful login with invalid username and valid password
    Given I open Ecommerce page
    When I click the login button
    When I enter invalid username and invalid password
    Then I verify unsuccessfull login with message
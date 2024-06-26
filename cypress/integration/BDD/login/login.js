/// <reference types="Cypress" /> 
/// <reference types="cypress-iframe" />

import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
beforeEach( function(){ 
    cy.fixture('example').then(function(data)
    {
        this.data = data 
    })
})

Given ('I open Ecommerce page', function(){
    cy.visit(Cypress.env("url"))
})
When ('I click the login button', function(){
    cy.get('#login2').click()
    cy.wait(2000)
})
When ('I enter valid login details', function(){
     cy.get('#loginusername').type(Cypress.env('Username'))
     cy.get('#loginpassword').type(Cypress.env('Password'))
     cy.get("button[onclick='logIn()']").click()
})
Then ('I verify successfull login', function(){
    cy.wait(3000)
    cy.get('#nameofuser').should('contain.text', 'Welcome ' + this.data.Username)
})
When ('I enter invalid username and invalid password', function(){
    cy.get('#loginusername').type("dammy")
    cy.get('#loginpassword').type("heyyou")
    cy.get("button[onclick='logIn()']").click()
})

Then ('I verify unsuccessfull login with message', function(){
    cy.on('window:alert', (str) =>
    {
        expect(str).to.equal('User does not exist.')
    })
})
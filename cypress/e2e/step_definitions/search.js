/// <reference types = "cypress" />

import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";

Given('I visit the website', () => {
    cy.visit('http://zero.webappsecurity.com/')
})

When('I type "random text" and push Enter on keyboard', () => {
    cy.get('#searchTerm').type('random text {enter}')
})

Then('I should see alert messages : No results were found for the query: random text', () =>{
    cy.get('h2').should('contain.text', 'Search Results:')
})
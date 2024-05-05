// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

// Alternatively you can use CommonJS syntax:
// require('./commands')

Cypress.Commands.add("getByDataCy", (selector) => {

  return cy.get(`[data-cy=${selector}]`)
})

Cypress.Commands.add("getByDataClass", (selector) => {

  return cy.get(`.${selector}`)
})

Cypress.Commands.add("login", () => {
  
  return cy.fixture('aws_login').then((data) => {
  cy.session([data.username, data.password], () => {
    cy.visit(Cypress.env('url'));
    cy.get('#nav-link-accountList').click()
    cy.get('#ap_email').click().type(data.username)
    cy.get('.a-button-inner > #continue').click()
    cy.get('#ap_password').click().type(data.password)
    cy.get('#auth-signin-button').click()
    cy.wait(2000);
  
    cy.get('#nav-cart-count').invoke('text').then((text) => {
      cy.get('#nav-cart').click();

      const itemCount = parseInt(text, 10);
      if (itemCount > 0) {
        cy.get('input[data-action="delete"]').first().click({ force: true })

      } else {
          cy.log('The cart is empty, no items to delete.');
      }
    })
  }, {
    cacheAcrossSpecs: true
  })
})})

Cypress.Commands.add("cleanCart", () => {
  
  cy.visit(Cypress.env('url'));
  cy.get('#nav-cart-count').should('be.visible').invoke('text').then((text) => {
      cy.get('#nav-cart').click();

      const itemCount = parseInt(text, 10);
      if (itemCount > 0) {
        cy.get('input[data-action="delete"]').first().click({ force: true })

      } else {
          cy.log('The cart is empty, no items to delete.');
      }
    })
  
})
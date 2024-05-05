const { Given, Then } = require('cypress-cucumber-preprocessor/steps');
import HomePage from '../../pages/Home';

const homePage = new HomePage();


beforeEach(() => {
  cy.login()
})

afterEach(() => {
  cy.cleanCart()
})

Given('I open the Amazon home page', () => {
  homePage.visit()
});

Then('The Amazon logo is visible', () => {
  homePage.checkLogo()
});
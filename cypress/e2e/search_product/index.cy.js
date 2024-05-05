import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import HomePage from '../../pages/Home';
import SearchProductPage from '../../pages/SearchProduct';

const homePage = new HomePage();
const searchResultPage = new SearchProductPage();

beforeEach(() => {
  cy.login()
})


afterEach(() => {
  cy.cleanCart()
})

Given('I open the Amazon page', () => {
  homePage.visit();
});

When('I search for a product', () => {
  cy.fixture('search_product').then((data) => {
    cy.intercept('GET', `${Cypress.env('url')}/s?*`, {failOnStatusCode: false}).as('searchRequest');
    searchResultPage.searchForProduct(data.productName);
    
    cy.wait('@searchRequest', { timeout: 10000 }).then((interception) => {

      cy.log('searchRequest', JSON.stringify(interception))
      if (interception.response) {
        expect(interception.response.statusCode).to.equal(200);
      } else {
        throw new Error('Error al obtener el response.');
      }
    });
  });
});

Then('I should see results containing', () => {
  cy.fixture('search_product').then((data) => {
    searchResultPage.verifyProductResults(data.productName);
  });
});
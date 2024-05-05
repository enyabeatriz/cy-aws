import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import HomePage from '../../pages/Home';
import SearchProductPage from '../../pages/SearchProduct';
import CartProductPage from "../../pages/CartProduct";
import MakePaymentPage from "../../pages/MakePayment";

beforeEach(() => {
    cy.login()
})

Cypress.on('uncaught:exception', (err,) => {
    if (err.message.includes('3p-auiws-select2 already registered')) {
        return false;
    }
    throw err;
});

const homepage = new HomePage();
const cartProductPage = new CartProductPage();
const searchProductPage = new SearchProductPage();
const makePaymentPage = new MakePaymentPage();

Given('I am on the Amazon homepage', () => {
    homepage.visit()
});

When('I search for {string}', (searchTerm) => {
    searchProductPage.searchForProduct(searchTerm);
});

Then('I should capture the price from the search results', () => {
    cartProductPage.capturePriceFromSearchResults()
});

When('I click on the first search result', () => {
    cartProductPage.clickFirstSearchResult()
});

When('I add the product to the cart', () => {
    cartProductPage.addProductToCart()
});

Then('the product should be added to the cart successfully', () => {
    cartProductPage.checkCartNotEmpty()
    cartProductPage.checkCartItemExists()
});

Then('the price in the search results should match the price in the cart', () => {
    cartProductPage.capturePriceInCart()
});

When('I proceed to checkout', () => {
    makePaymentPage.goToCheckout()
});

When('I fill in the required information', () => {
    makePaymentPage.fillData()
});

Then('I should see the order summary without confirming the purchase', () => {
    makePaymentPage.verifyFinishOrderButton()
});
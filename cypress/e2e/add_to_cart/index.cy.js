import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import HomePage from '../../pages/Home';
import SearchProductPage from '../../pages/SearchProduct';
import CartProductPage from "../../pages/CartProduct";
import 'cypress-if'

beforeEach(() => {
  cy.login()
})

afterEach(() => {
  cy.cleanCart()
})
const homepage = new HomePage();
const cartProductPage = new CartProductPage();
const searchProductPage = new SearchProductPage();

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
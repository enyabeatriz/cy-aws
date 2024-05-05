import { selectors } from './selectors';

class CartProductPage {

    #productPriceFromSearch;

    capturePriceFromSearchResults() {
        cy.get('.s-result-item .a-price').first().find('.a-offscreen').invoke('text').then((text) => {
            this.#productPriceFromSearch = text.trim();
            cy.log('Captured Price from Search Results:',  this.#productPriceFromSearch); 
          });    }

    clickFirstSearchResult() {
        cy.get(selectors.firstSearchResult).first().click();
    }

    addProductToCart() {
        
        cy.get(selectors.addToCartButton,{ timeout: 10000 }).should('be.visible').click();
        
    }

    checkCartNotEmpty() {
        cy.get(selectors.cartCount).should('not.be.empty');
        cy.get(selectors.cartIcon).click();
    }

    checkCartItemExists() {
        cy.get(selectors.cartListItem).should('exist');
    }

    capturePriceInCart() {

        cy.get('.sc-price').first().invoke('text').then((cartPrice) => {
            expect(cartPrice.trim()).to.equal( this.#productPriceFromSearch);
          });
    }
}

export default CartProductPage;
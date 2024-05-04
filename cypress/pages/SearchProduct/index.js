import { selectors } from './selectors';

class SearchResultPage {


    visit() {
        cy.visit(Cypress.env('url'));
    }

    getSearchBox() {
        return cy.get('input[name="field-keywords"]').should('be.visible');
    }

    searchForProduct(productName) {
        this.getSearchBox().type(`${productName}{enter}`);
    }
    verifyProductResults(productName) {
        //Verify results container exists
        cy.get(selectors.resultContainer).should('be.visible');

        //Verify products box contain "Led and monitor"
        cy.getByDataClass(selectors.mainSlot).should('be.visible').then(() => {
            productName.split(' ').forEach(word => {
                cy.getByDataClass(selectors.mainSlot.toString()).should('contain.text', word.toString());
            });
        });

        //Verify product box properties
        cy.getByDataCy(selectors.priceRecipe).should('exist');
        cy.getByDataCy(selectors.titleRecipe).should('exist');
        cy.getByDataCy(selectors.deliveryRecipe).should('exist');
        cy.get(selectors.addToCartButton).should('exist').and('contain', 'Agregar al carrito');
    }

    verifyNoResultsMessage() {
        cy.get('.a-section.a-spacing-none .s-no-outline').should('be.visible')
        .and('contain.text', 'No results for');    }

}

export default SearchResultPage;
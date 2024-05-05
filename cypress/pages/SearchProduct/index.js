import { selectors } from './selectors';

class SearchProductPage {
    
    getSearchBox() {
        return cy.get().should('be.visible');
    }

    searchForProduct(productName) {
        cy.get(selectors.inputBox).should('be.visible').type(`${productName}{enter}`);
    }

    verifyProductResults(productName) {
        //Verify results container exists
        cy.get(selectors.resultContainer).should('be.visible');

        //Verify products box contain "Led and monitor"
        cy.getByDataClass(selectors.mainSlot).should('be.visible').then(() => {
            productName.split(' ').forEach(word => {
                cy.getByDataClass(selectors.mainSlot).should('contain.text', word);
            });
        });

        //Verify product box properties
        cy.getByDataCy(selectors.priceRecipe).should('exist');
        cy.getByDataCy(selectors.titleRecipe).should('exist');
        cy.getByDataCy(selectors.deliveryRecipe).should('exist');
    }

    verifyNoResultsMessage() {
        cy.get('.a-section.a-spacing-none .s-no-outline').should('be.visible')
        .and('contain.text', 'No results for');    }

    selectFirstProduct() {
        cy.get(`${selectors.mainSlot}` .a-link-normal).first().click();
    }
}

export default SearchProductPage;
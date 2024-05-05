import { selectors } from './selectors';

class MakePaymentPage {
    
    goToCheckout(){
         cy.get(selectors.checkoutInput).click();
    }

    fillData(){
        cy.get(selectors.selectAdress).should('be.visible').click();
        cy.get(selectors.selectSkipKyc).should('be.visible').click();
        cy.get(selectors.nextButtonStepKyc).should('be.visible').click();
        cy.get(selectors.nextButtonSelectPayment, { timeout: 10000 }).should('be.visible').click();
    }

    verifyFinishOrderButton(){
        cy.get(selectors.finishOrderButton, { timeout: 10000 }).should('be.visible');
    }
 

    
}

export default MakePaymentPage;
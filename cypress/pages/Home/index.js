class HomePage {
    visit() {
        cy.visit(Cypress.env('url'));
    }

    checkLogo(){
        cy.get('.nav-logo-link .nav-logo-base').should('be.visible'); 
    }
}

export default HomePage;
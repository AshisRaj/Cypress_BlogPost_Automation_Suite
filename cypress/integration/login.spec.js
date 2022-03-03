// login.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test

describe('Login Test', () => {
    it('contains the correct tittle', () => {
        cy.visit('/login');

        cy.get('.navbar-brand')
            .invoke('text')
            .should('equal', 'Blog Post');
    });

    it('contains the correct upper header box text', () => {
        cy.visit('/login');
        cy.get('.panel-heading')
            .invoke('text')
            .should('equal', 'Sign In');
    })

    it('contains the correct bottom header box text', () => {
        cy.visit('/login');
        cy.get('.panel-footer > a')
            .invoke('text')
            .should('equal', 'Or Sign Up');
    })

    it('clicks the Sign Up link', () => {
        cy.visit('/login');
        cy.get('.panel-footer > a')
        .click()
    })

    it('clicks the Sign In link and signs in', () => {
        cy.get('.panel-footer > a')
        .click();
        cy.get('#username').type('User-63934');
        cy.get('#password').type('Asra@1234');
        cy.get('#login').click();

        cy.get('#log_out')
            .invoke('text')
            .should('equal', 'Logout');
    })
});

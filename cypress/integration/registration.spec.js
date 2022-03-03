
/// <reference types="Cypress">

// login.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test

describe('Registration Test', () => {
    // const userName = Cypress.userName(); 
    // const userEmail = Cypress.userEmail(); 
    let regData;
    before(() => {
        cy.generateUserRegistrationFixture(9, '@');
        // Runs once before all tests in the block
        // Calling fixture file and resolving the promise
        cy.fixture('user_registration').then(function(data)
        {
            // To make data accessible all over the current JS file
            regData = data
        })
    }) 

    beforeEach('Navigate to the Registration screen', () => {
        cy.visit('/register');
    });

    it('registers the user successfully', () => {
        cy.get('#username').type(regData.username);
        cy.get('#email').type(regData.useremail);
        cy.get('#password').type(regData.password);
        cy.get('#confirm').type(regData.password);
        cy.get('#register').click();

        cy.get('#alert_success')
            .invoke('text')
            .should('contain', 'Congrats! Your registration has been successful.');
    })
});

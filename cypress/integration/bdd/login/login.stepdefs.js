// import { fromCallback } from "cypress/types/bluebird";
/// <reference types='Cypress'/>

//glue code for steps
Given('I open the Google Web Page', () => {
    cy.visit('https://www.google.com'); 
});

Then( 'I verify the title of the page as {string}', (title) => {
    cy.title().should('include', title); 
} );
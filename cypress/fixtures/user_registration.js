// Generate the fixture data and writes to the file.
Cypress.Commands.add(
    'generateUserRegistrationFixture', (passwordLength, specialChar) => {
        const { faker } = require('@faker-js/faker');
        
        let pwdLeftPart = Math.floor(passwordLength / 2);
        let pwdRightPart = Math.abs(passwordLength / 2);

        cy.writeFile('cypress/fixtures/user_registration.json', {      
            'username':`${faker.name.firstName()}.${faker.name.lastName()}.${faker.random.number(10000)}`,
            'useremail':`${faker.internet.email()}`,
            'password':`${faker.internet.password(pwdLeftPart)}${specialChar}${faker.internet.password(pwdRightPart)}`      
        })
})
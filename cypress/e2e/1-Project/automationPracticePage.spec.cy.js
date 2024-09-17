describe('Automation Practice Functionalities', () => {

    const generateRandomEmail = () =>{
        const timestamp = Date.now();
        const random = Math.floor(Math.random() * 1000);
        return `user${random}${timestamp}@gmail.com`;
    };

    //Open Automation Practice HomePage
    beforeEach(() => {
        cy.visit('http://www.automationpractice.pl/index.php');
    });

    //TC001: Verify landing succesfull\
    it('should load Automation HomePage', () => {
        cy.url().should('include', 'automationpractice');
        cy.get('.logo').should('be.visible');
    });

    //TC002: Sign up a new account
    it('should create an account', () => {
        cy.get('.login').click();
        cy.get('#create-account_form > .page-subheading').should('be.visible');
        cy.get('#email_create').type(generateRandomEmail());
        cy.get('#create-account_form > .page-subheading').should('have.text', 'Create an account');
        cy.get('#SubmitCreate > span').click();
        cy.get('#id_gender1').check();
        cy.get('#customer_firstname').type('Emanuel');
        cy.get('#customer_lastname').type('Bellon');
        cy.get('#passwd').type('Pass1234!');
        cy.get('#days').select('1').should('have.value', '1');
        cy.get('#months').select('6').should('have.value', '6');
        cy.get('#years').select('1997').should('have.value','1997');
        cy.get('#submitAccount > span').click();
        cy.get('.page-heading').should('be.visible');
    })





});



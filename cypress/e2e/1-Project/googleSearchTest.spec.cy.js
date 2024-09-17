describe('Google Search Functionality', () => {

    // Open Google
    beforeEach(() => {
      cy.visit('https://www.google.com');
    });
  
    // Test case 1: Verify that the Google homepage loads correctly
    it('should load Google homepage', () => {
      cy.url().should('include', 'google.com');
      cy.get('#ctaCanvas').should('be.visible');
      cy.title().should('eq', 'Google');
    });
  
    // Test case 2: Perform a search and verify the results
    it('should search for a keyword and display results', () => {
      cy.get('#APjFqb').type('https://automationpractice.pl/{enter}');
      cy.url().should('include', 'search');
      cy.get('#search').should('be.visible');
    });
  
    // Test case 3: Verify the "I'm Feeling Lucky" button
    it('should check the "I\'m Feeling Lucky" button', () => {
      cy.get('.FPdoLc > center > .RNmpXc').should('be.visible');
      cy.get('.FPdoLc > center > .RNmpXc').invoke('val').should('eq', "Voy a tener suerte");
    });
  
    // Test case 4: Verify the visibility of the Google Search
    it('should display the Google Search button', () => {
      cy.get('.FPdoLc > center > .gNO89b').should('be.visible');
    });
  });
  
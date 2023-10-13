/// <reference types="Cypress" />

describe('How to handle mouse hover', function(){

    it('Handling mouse hover pop-ups', function(){
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');

        //Cypress doesn't have a way to handle hovers like Selenium does, but we have this
        //show method that shows every hidden elements. This 'show' method has to be applied on the
        //inmediate parent of hidden element/s that we want to reveal.

        cy.get('div .mouse-hover-content').invoke('show');
        cy.contains('Top').click();

        //as assert, we verify that when we click "top" the url changes.
        cy.url().should('include', 'top');

        //This can also be handled by forcing the click method on invisble elements:
        /*
        
        //cy.get('div .mouse-hover-content').invoke('show');
        cy.contains('Top').click(force:true);
        cy.url().should('include', 'top');

        */
    })
})
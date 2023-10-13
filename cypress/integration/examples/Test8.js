/// <reference types="Cypress"/>
/// <reference types="cypress-iframe"/>
import 'cypress-iframe'

describe('iFrames testing', function(){

    it('Example with iFrame', function(){
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');

        //We load the frame by its locator
        cy.frameLoaded('#courses-iframe');

        //We denote cy.iframe() everytime we are referring to an element within the iFrame
        cy.iframe().find("a[href*='mentorship']").eq(0).click();
        cy.wait(3000);
        cy.iframe().find("div .row .pricing-container").should('have.length', 2);
    })
})
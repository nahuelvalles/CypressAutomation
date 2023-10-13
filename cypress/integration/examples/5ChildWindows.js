/// <reference types="Cypress" />

//Cypress cannot switch between tabs, we should make the content of the new tab shows up in the same
//tab we are currently on. We can remove the "target" attribute of the "anchor" tag during runtime with
//Cypress to do that

describe('Tabs and windows handling', () =>{
    it('Handling child tabs or windows',() =>{

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        cy.get('#opentab')
        .invoke('removeAttr', 'target')
        .click();

        //Cypress wont complain if you switch between pages as long as they are under the same domain
        //once you try to change domain completely, Cypress wont work.
        //We have to add 'origin' command in order to handle this.
        //lets try to interact with any element on the new domain page that we are getting moved to:

        //lets tell cypress what is the new domain first so it wont complain:
        //(without this line the test wont work):

        cy.origin("https://www.qaclickacademy.com",()=>{
            //and now we can continue or tests within the second parameter (function)

        cy.get('#navbarSupportedContent [href="about.html"]').click();
        cy.get('.page-banner-cont h2')
        .then(function(paramElement){
            expect(paramElement.text()).to.equal('About Us');
            })
        })
    })
})
/// <reference types="Cypress" />

describe('Alerts and Pop-ups handling', function(){

    //How to assert an alert was there, alerts gonna be accepted always on Cypress
    //no way to change that.

    it('How Cypress auto handles alerts', function(){
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        cy.get('#alertbtn').click();
        cy.get('[value="Confirm"]').click();

        //alert
        cy.on('window:alert', (str)=>{
            expect(str).to.equal('Hello , share this practice page and share your knowledge');
        })

        //confirms
        cy.on('window:confirm', (str)=>{
            expect(str).to.equal('Hello , Are you sure you want to confirm?');
        })
    })
})
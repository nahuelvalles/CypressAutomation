/// <reference types="Cypress"/>
/// <reference types="cypress-iframe"/>
import 'cypress-iframe'
import HomePage from '../pageObjects/HomePage'

describe('Frameworks, Test Hooks', function(){

    before(function(){
        //Runs ONCE before ALL tests in the 'describe' block.
        //Here we can set up the data we need for the TCs below, we can talk with Fixture folder where the data
        //is this way:
        cy.fixture("Data.json").then(function(data){
            this.data = data
        })
    })

    it('Input name field', function(){

        const homePage = new HomePage();
        cy.visit(Cypress.env('url') + "/angularpractice/");
        homePage.getEditBox().type(this.data.name);
        homePage.getGender().select(this.data.gender);
        homePage.getTwoWayDataBinding().should('have.value', this.data.name);
        homePage.getEditBox().should('have.attr','minlength','2');
        homePage.getEntreprenaur().should("be.disabled");
        homePage.getShopTab().click();
        this.data.productName.forEach(element => {
            cy.selectProduct(element);
        });
    })
})


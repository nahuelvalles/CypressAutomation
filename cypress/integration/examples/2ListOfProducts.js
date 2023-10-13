/// <reference types="Cypress" />

describe("My first Test Suite", function(){
    it('My second Test Case', function(){

        //Navigate to an URL: 'visit' method
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
        cy.get(".search-keyword").type("ca");
        cy.wait(2000);

        cy.get('.products').as('productList');
        cy.get('@productList').find('.product')
        .each(($el, index, $list) => {

            const elementText = $el.find('h4.product-name').text();

            if(elementText.includes('Cashews')){
                cy.wrap($el).find('button').click();
            }
        })

        cy.get('.cart-icon > img').click();
        cy.contains('PROCEED TO CHECKOUT').click();
        cy.contains('Place Order').click();
    })
})
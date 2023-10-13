/// <reference types="Cypress" />
//Cypress - Spec
/*
'Describe' and 'it' are part of "Mocha" framework that comes with Cypress
'Describe' for a name/description of Test Suite and 'it' for what it does (test steps)
*/
describe("My first Test Suite", function(){
    it('My first Test Case', function(){
        //Navigate to an URL: 'visit' method
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
        cy.get(".search-keyword").type("ca");
        cy.wait(2000);
        
        //I'm choosing an incorrect locator on porpuse in order to find 5 elements (1 not visible) 
        //so I can make use of :visible in order to the script to only retrieve visible elements

        cy.get(".product:visible").should('have.length',4);

        //The spec is passed since its only looking for visible elements, if I delete the :visible 
        //property it will fail since in the page there are really 5 elements that matches that .classname
        //and one of them is invisible

        //Another way to do it if with "find" which looks for an element under another one (child)

        cy.get(".products").find(".product").should('have.length',4);

        //Now lets do click on the second product to add it to the cart
        cy.get('.products').find('.product').eq(1).contains("ADD TO CART").click();
        // 'eq' expect the index of the element to be selected from the retrieved list
        
        //'each' iterates on every element of a list it expects 3 parameters ($el, index, $list)
        cy.get('.products').find('.product')
        .each(($el, index, $list) => {
            const vegText = $el.find('h4.product-name').text();
            if(vegText.includes('Cashews')){
                //$el is a promise, wrap method is in order to resolve that promise first before doing click
                cy.wrap($el).find('button').click();
            }
        })

        //Suppose that we want to print the logo text in the console, we can't just say cy.get(.brand).text() because of the
        //assyncronyzation, since .text() is not a Cypress method, it is a JQuery one, so it will try to get the text of an unexistent
        //element when hitting "run". We have to manually deal with this issue using "then" which forces the execution to wait
        //until the promise is solved.

        cy.get('.brand').then(function(paramElement){
            cy.log(paramElement.text());
        })

        //Lets assert if the text of the logo is 'GREENKART' making use of ".as" to put an alias to the locator
        //this is helpful when we are gonna use the same locator manytimes, it's similar to save the locator into a variable
        //which we can't do since the asynchronization.

        cy.get('.brand').as('logoText');
        cy.get('@logoText')
        .should('have.text','GREENKART');
        
        
    })
})
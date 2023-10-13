/// <reference types="Cypress"/>
/// <reference types="cypress-iframe"/>
import 'cypress-iframe'

describe('iFrames testing', function(){

    it('Example with iFrame', function(){
        cy.visit(Cypress.env('url') + '/angularAppdemo/');
        cy.intercept({
            method : 'GET',
            url : 'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty'
        },
        {
            statusCode : 200,
            body : [{ 
                "book_name": "RestAssured with Java",
                "isbn": "LSA",
                "aisle": "2303"
            }]
            //I need to reference this code into a 'variable' since I have to wait until this promise
            //is resolved (cy.wait(@alias))
        }).as('mockedResponse');

        cy.get('.btn.btn-primary').click();
        cy.wait('@mockedResponse');

        //Lets verify the text for when only one book is available, is there:

        cy.get('p').then(function(paramElement){
            var errorMsg = paramElement.text();
            expect(errorMsg).to.equal("Oops only 1 Book available");
        })

        //Another option would be:
        cy.get('p').should('have.text', 'Oops only 1 Book available');
    })
})
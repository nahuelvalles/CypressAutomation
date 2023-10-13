/// <reference types="Cypress" />

describe('Practicing with different web elements', function(){

    it('Working with checkboxes', function(){

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        cy.get('#checkbox-example > fieldset')
        .find('#checkBoxOption1')
        .check() //to uncheck the method will be 'uncheck'
        .should('be.checked') //the opposite method will be 'not.be.checked'
        .and('have.value', 'option1');

        //We can also interact with all the options once for all
        cy.get('input[type="checkbox"]').check(['option2','option3']);
    })

    //Working with static dropdown
    it('Working with static dropdown', function(){

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        cy.get('select')
        .select('option2')
        .should('have.value', 'option2')

    })

    //Working witch dynamic dropdown
    it('Working with dynamic dropdown', function(){

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');

        cy.get('#autocomplete').type('Ind')
        cy.get('.ui-menu-item div')
        .each(($el, index, $list)=>{
            if($el.text() === 'India'){
                cy.wrap($el).click();
            }
        })
        cy.get('#autocomplete').should('have.value','India');
    })
})
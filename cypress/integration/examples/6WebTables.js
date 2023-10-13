/// <reference types="Cypress" />

describe('Working on Web tables with Cypress', function(){

    it('Handling web tables', function(){
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        cy.get('tr td:nth-child(2)')
        .each(($el, index, $list) =>{
            var elementText = $el.text();
            if(elementText.includes('Python')){
                cy.get('tr td:nth-child(2')
                .eq(index)
                .next()
                .then(function(price){
                    var priceText = price.text();
                    expect(priceText).to.equal('25');
                })
            }
        })
    })
 })
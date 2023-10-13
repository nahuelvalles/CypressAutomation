/// <reference types = "cypress" />


//Injecting a token required to login directly into localStorage using a function declared within "commands"
//this way if we have for example 10 TCs in which you need to login before execute them, you can skip login
//process by simply injecting the token directly which will get you access.

describe('JTW Session', () =>{
    it('is logged in trough local storage token', () =>{
        cy.LoginAPI()
        .then(function(){
            cy.visit("https://rahulshettyacademy.com/client",{
                onBeforeLoad : function(window){
                    window.localStorage.setItem('token', Cypress.env('token'))
                }
            })
        })
    })
})
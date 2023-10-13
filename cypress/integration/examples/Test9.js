/// <reference types="Cypress"/>
/// <reference types="cypress-iframe"/>
import 'cypress-iframe'

describe('Testing hooks', function(){

    it('Cypress hooks', function(){
       /*
       Hooks are meant to execute functions before or after TCs has been executed we have:
       The following are helpfull to clear data saved after each TC, hit URL before execute TC, etc.
       */
    })
})

describe("Hooks", function(){

    before(function(){
        //runs once before all test in the block
    })

    after(function(){
        //runs once after each test in the block
    })

    beforeEach(function(){
        //runs everytime before each test in the block
    })

    this.afterEach(function(){
        //runs everytime after each test in the block
    })
})
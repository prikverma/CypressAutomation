//Cypress specs
///  <reference types="Cypress" />
/// <reference types="cypress-iframe" />

describe('My First Test Suite', function(){

    it('my first test case',function()
    {
    // first test
    cy.visit(Cypress.env('url')+"/seleniumPractise/#/");
    cy.get('.search-keyword').type('ca')
    cy.wait(2000)
    // Parent to child jump
    cy.get('.products').find('.product').should('have.length',4)
    // Add to cart for 2nd product
    cy.get('.products').find('.product').eq(2).contains('ADD TO CART').click()

    // just to click on a particular product name cashew and add to cart
    cy.get('.products').find('.product').each(($el ,index, $list )=>{

    const textveg = $el.find('h4.product-name').text();
     if(textveg.includes('Cashews')){
        
        cy.wrap($el.find('button')).click()
     }

     })
    

    })


    
})
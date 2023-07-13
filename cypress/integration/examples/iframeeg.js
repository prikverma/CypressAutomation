/// <reference types='Cypress'/>
/// <reference types="cypress-iframe" />
import 'cypress-iframe'

describe('Iframe example)',function(){
    
    it('iframe handling on web',function(){

    cy.visit(Cypress.env('url')+"/AutomationPractice/")
    cy.frameLoaded('#courses-iframe')
    cy.iframe().find('a[href="mentorship"]').eq(0).click()

    

    })

})

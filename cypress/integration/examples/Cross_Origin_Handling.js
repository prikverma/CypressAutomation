/// <reference types='Cypress'/>
///<reference types="cypress-iframe" />

describe('Automation practice)',function(){
    
    it('testing child window',function(){

    
        cy.visit(Cypress.env('url')+"/AutomationPractice/");

        //Handling child window and cross origi issue
        cy.get('#opentab').then(function(el)
        {
           const url= el.prop('href')
           cy.visit(url)// https://www.qaclickacademy.com/
           cy.origin(url,()=>{
            cy.get('div.sub-menu-bar a[href="about.html"]').click()
            cy.wait(5000)
            cy.go('back')
            cy.wait
            cy.go('back')
           }
        )
        })

    })

})

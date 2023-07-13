///  <reference types="Cypress" />
/// <reference types="cypress-iframe" />

describe('My First Test Suite', function(){

    it('my first test case',function()
    {
    // Test case for check box
    cy.visit(Cypress.env('url')+"/AutomationPractice/");
    // cy.get('#checkBoxOption1').check().should('be.checked').and('have.value','option1')
    // cy.get('#checkBoxOption1').uncheck()
    // cy.get('input[type="checkbox"]').check(['option2','option3']).should('be.checked')

    // // Test case for static dropdown
    // cy.get('#dropdown-class-example').select('Option2').should('have.value','option2')

    //handling dynamic dropdown
    cy.get('#autocomplete').type('Ind')

    cy.get('.ui-menu-item div').each(($el,index,$list)=>{
    if($el.text() === 'India'){
      cy.wrap($el).click()
   }
    })
    //visibility/invisibility of elements
    cy.get('#displayed-text').should('be.visible')
    cy.get('#hide-textbox').click()
    cy.get(cy.get('#displayed-text').should('not.be.visible'))
    cy.get('#show-textbox').click()
    cy.get('#displayed-text').should('be.visible')
    // How to handle window alert on web
    cy.get('#alertbtn').click()
    cy.get('#confirmbtn').click()
    cy.on('window:alert',(str)=>{
      expect(str).to.equal("Hello , share this practice page and share your knowledge")
    }
    )
    cy.on('window:confirm',(str)=>{
      expect(str).to.equal("Hello , Are you sure you want to confirm?")
    
    }
    )
//handling child tab on the same browser
    cy.get('#opentab').invoke('removeAttr','target').click()

    cy.origin('https://www.qaclickacademy.com/',() =>
    {
      cy.wait(5000)
     cy.go('back')
    })
   

    //** */ handling web table(Imp for interview)
    cy.get('tr td:nth-child(2)').each(($el ,index, $list )=>
    {
    const text = $el.text()
    if(text.includes('Python'))
    {
     cy.get('tr td:nth-child(2)').eq(index).next().then(function(price){
      const pricetext= price.text()
      expect(pricetext).to.equal('25')
     })
    }
    })
    // handling mouse hover using jquery 
    cy.get('.mouse-hover-content').invoke('show')
    cy.contains('Top').click()
    // or we can use force: true for clicking on hidden element also
    // cy.contains('top').click({force: true})
    cy.url().should('include','top')
     })
    
    })


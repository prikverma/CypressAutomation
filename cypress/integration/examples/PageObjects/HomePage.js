class HomePage
{
 
    getEditBox()
    {
        return cy.get(':nth-child(1) > .form-control') 
    }
    getGender()
    {
        return cy.get('#exampleFormControlSelect1')
    }
    getTwoWayBox()
    {
        return cy.get(':nth-child(4) > .ng-pristine') 
    }
    getEntreprenour()
    {
        return cy.get("#inlineRadio3")
    }
}

export default HomePage;
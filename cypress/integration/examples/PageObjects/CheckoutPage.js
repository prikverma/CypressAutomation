class CheckoutPage
{

    getcheckoutButton()
    {
        return cy.get('button.btn.btn-success')
    }
    getdeliveryBox()
    {
        return cy.get('#country')
        
    }
    getcheckBox()
    {
        return cy.get('.checkbox')
    }
    getcountryList()
    {
        return cy.get('.suggestions > ul > li > a')
    }
    getpurchaseButton()
    {
       return cy.get("input[value='Purchase']")
    }
    getalert()
    {
        return cy.get('.alert')
    }
}

export default CheckoutPage;
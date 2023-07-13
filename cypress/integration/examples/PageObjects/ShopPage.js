class ShopPage
{
 getshopTab()
 {
    return cy.get(':nth-child(2) > .nav-link')
 }
 getproductCard()
 {
    return cy.get('h4.card-title')
 }
getaddCart()
{
    return cy.get('button.btn.btn-info')
}
getcheckoutbox()
{
    return cy.get('a.nav-link.nav-link.btn.btn-primary')
}
gettotalprice()
{
    return cy.get('tr td:nth-child(4) strong')
}
gettotalamount()
{
    return cy.get('td h3 strong')
}
}

export default ShopPage;
///  <reference types="Cypress" />

import HomePage from "./PageObjects/Homepage";
import ShopPage from "./PageObjects/ShopPage";
import CheckoutPage from "./PageObjects/CheckoutPage";

describe("Frame example", function () {
  //before hook it will run for one it block

  before(function () {
    cy.fixture("example").then(function (data) {
      this.data = data;
    });
  });

  it("iframe handling on web", function () {
    const homePage = new HomePage();
    const shoppage = new ShopPage();
    const checkoutPage = new CheckoutPage();

    cy.visit(Cypress.env("url") + "/angularpractice/");
    var sum = 0;
    homePage.getEditBox().type(this.data.name);
    homePage.getGender().select(this.data.gender);
    // validating data on form
    homePage.getTwoWayBox().should("have.value", this.data.name);
    homePage.getEditBox().should("have.attr", "minlength", 2); // validating box can accept min value 2
    homePage.getEntreprenour().should("be.disabled");

    // shop click and going to item list
    shoppage.getshopTab().click();

    // custom command logic is in /support/command.js

    this.data.productName.forEach((element) => {
      // for array in js we use forEach

      cy.selectProduct(element);
    });

    shoppage.getcheckoutbox().click();
    // Calculating total price on checkout page
    shoppage
      .gettotalprice()
      .each((el, index, list) => {
        var textprice = el.text();
        var tprice = textprice.split(" "); /// it will create array splited
        tprice = tprice[1].trim();
        sum = Number(sum) + Number(tprice);
      })
      .then(function () {
        // it is used for resolving promises
        cy.log(sum);
      });
    shoppage.gettotalamount().then(function (ttp) {
      var ttprice = ttp.text();
      var tttprice = ttprice.split(" "); // it will create array splitted
      tttprice = Number(tttprice[1].trim());
      expect(tttprice).to.equal(sum);
    });
    checkoutPage.getcheckoutButton().click();
    checkoutPage.getdeliveryBox().type("India");
    checkoutPage.getcountryList().click();
    checkoutPage.getcheckBox().click({ force: true });
    checkoutPage.getpurchaseButton().click();
    checkoutPage.getalert().then((text) => {
      const gettext = text.text();
      expect(gettext.includes("Success")).to.be.true;
    });
  });
});

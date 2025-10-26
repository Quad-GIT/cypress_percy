/// <reference types="cypress" />

import "@percy/cypress";
const data = require("../fixtures/usbank_urls.json");

describe("Capture the screenshot for websites", () => {
  data.urls.forEach((url) => {
    it("Load the usbank website and take a screenshot", () => {
      cy.log(url);
      cy.visit(url);
      cy.scrollTo("bottom");
      cy.wait(2000);
      cy.percySnapshot(url);
    });

    // it.only("Load the IQuanti website and take a screenshot", () => {
    //   var i = 0;
    //   var name;

    //   cy.fixture("iquanti_urls").then((data) => {
    //     data.forEach((url) => {
    //       cy.log(url);
    //       i += 1;
    //       name = "iquanti_screenshot_" + i.toString();
    //       cy.visit(url);
    //       cy.scrollTo("bottom");
    //       cy.wait(2000);
    //       cy.percySnapshot(name);
    //     });
    //   });
    // });
  });
});

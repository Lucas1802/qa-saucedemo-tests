const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://www.saucedemo.com/",
    specPattern: "automacao-tests/cypress/e2e/**/*.cy.js",
    supportFile: "automacao-tests/cypress/support/e2e.js",
  },
});

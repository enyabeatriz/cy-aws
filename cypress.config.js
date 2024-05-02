const cucumber = require('cypress-cucumber-preprocessor').default
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'toc8ge',
  env:{
    url: "https://www.amazon.com"
  },
  e2e: {
    setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber())
    },
    specPattern: "cypress/e2e/*.feature",
    "chromeWebSecurity": false
 
  },
  defaultCommandTimeout: 8000,
 

});
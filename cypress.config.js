const { defineConfig } = require("cypress");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const browserify = require("@badeball/cypress-cucumber-preprocessor/browserify");


module.exports = defineConfig({
  projectId: 'y2impx',
  
  // to retry if some test cases failed due to environment issue. it will re ruk again failled test casee
  retries: {
    runMode: 1,
    },
  defaultCommandTimeout : 7000, // It will  be common for all testing file unless it is not define in specific js file.(integration )
  env: { // it is used to set by default environment so that we do not need to retype again
    url : "https://rahulshettyacademy.com"
  },
  reporter: 'cypress-mochawesome-reporter', 
  e2e: {
      // Make sure to return the config object as it might have been modified by the plugin.
    setupNodeEvents(on, config) {
      // implement node event listeners here
    
    
    },
    experimentalSessionAndOrigin: true,
    specPattern: 'cypress/integration/examples/*.js' ,
    },
   
    
});

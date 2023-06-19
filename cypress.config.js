const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '8j22c3',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  // viewportHeight: 1500,
  // viewportWidth: 900,
  chromeWebSecurity: false,
  defaultCommandTimeout: 15000,
  pageLoadTimeout: 90000,

  // testFiles: "**/*.feature",

  // "cypress-cucumber-preprocessor": {
  //   nonGlobalStepDefinitions: true,
  // },
});

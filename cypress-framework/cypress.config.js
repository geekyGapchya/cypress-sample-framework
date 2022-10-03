const { defineConfig } = require('cypress')

module.exports = defineConfig({
  viewportHeight: 1080,
  viewportWidth: 1920,
  chromeWebSecurity: false,
  video: false,
  screenshotOnRunFailure: true,
  screenshotsFolder: "cypress/reports/mochareports/assets",
  retries: {
    runMode: 0,
    openMode: 0,
  },
  reporter: 'cypress-multi-reporters',
  reporterOptions: {
    configFile: 'reporter-config.json'
  },
  e2e: {
    baseUrl: 'https://www.makemytrip.com/',
    // excludeSpecPattern: ['**/1-getting-started/*', '**/2-advanced-examples/*'],
  },
})

const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    "baseUrl": "http://localhost:3000",
    excludeSpecPattern: [
      '**/1-getting-started/*',
      '**/2-advanced-examples/*'
    ],
    "include": [
      "./node_modules/cypress",
      "cypress/**/*.js"
  ]
  },
});

const { defineConfig } = require("cypress");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const browserify = require("@badeball/cypress-cucumber-preprocessor/browserify");

async function setupNodeEvents(on, config) {
    await preprocessor.addCucumberPreprocessorPlugin(on, config);
    on("file:preprocessor", browserify.default(config));
    return config;
}

module.exports = defineConfig({
    projectId: "bp59bm",
    defaultCommandTimeout: 8000,
    env: {
      url: "https://www.demoblaze.com/index.html",
      Username: "darmolyn",
      Password: "schoolbag"
    },
    e2e: {
        setupNodeEvents,
        specPattern: 'cypress/integration/BDD/*.feature',
    },
});
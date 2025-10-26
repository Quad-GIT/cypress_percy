const { defineConfig } = require('cypress')
const fs = require('fs')
const { isFileExist, findFiles } = require('cy-verify-downloads')

module.exports = defineConfig({
    watchForFileChanges: false,
    numTestsKeptInMemory: 100,
    chromeWebSecurity: false,
    requestTimeout: 5000,
    pageLoadTimeout: 60000,
    responseTimeout: 60000,
    defaultCommandTimeout: 60000,
    downloadsFolder: 'cypress/downloads',
    trashAssetsBeforeRuns: true,
    retries: 1,
    video: true,
    viewportWidth: 1920,
    viewportHeight: 1080,
    e2e: {
        setupNodeEvents (on, config) {
            on('task', { isFileExist, findFiles })
        },
        testIsolation: false,
        experimentalRunAllSpecs: true
    }
})

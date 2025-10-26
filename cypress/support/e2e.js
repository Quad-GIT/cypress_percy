/* eslint-disable no-negated-condition */
// / <reference types="cypress-xpath" />\
// /<reference types="cypress-iframe" />\

import addContext from 'mochawesome/addContext'
import 'cypress-iframe'

const fs = require('fs')

require('cy-verify-downloads').addCustomCommand()
// const Client = require('@infosimples/node_two_captcha')

require('cypress-xpath')

Cypress.on('uncaught:exception', (err, runnable) => {
    return false
})

Cypress.Commands.add('visitUrl', (url, basicAuthLogin = null, basicAuthPassword = null) => {
    if (basicAuthLogin !== null) {
        cy.visit(url, {
            auth: {
                username: basicAuthLogin,
                password: basicAuthPassword
            }
        })
    }
    else {
        cy.visit(url)
    }
})

Cypress.on('test:after:run', (test, runnable) => {
    if (test.state === 'failed') {
        let item = runnable
        const nameParts = [runnable.title]

        // Iterate through all parents and grab the titles
        while (item.parent) {
            nameParts.unshift(item.parent.title)
            item = item.parent
        }

        const fullTestName = nameParts
            .filter(Boolean)
            .join(' -- ')           // this is how cypress joins the test title fragments
            .replace.replaceAll(/[:|.]/g, '')     // remove unaccepted characters from filename

        const imageUrl = `../report/screenshots/${fullTestName} (failed).png`

        addContext({ test }, imageUrl)
        // always add the video
        // addContext({ test }, `../cypress/videos/${Cypress.spec.name}.mp4`)
    }
})

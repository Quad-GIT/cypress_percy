# CYPRESS BASED AUTOMATION FRAMEWORK FOR D&D TEAM

Test automation project for UI end-to-end testing of D&d Projects. It uses [Cypress.io](https://cypress.io) library (that has Mocha test runner and Chai assertions built in)


## Installation

1. Install node.js:
https://nodejs.org/en/

2. Install dependencies:
Run the following command on terminal, in the root directory of the project-

```bash
npm install
```

## How to run tests

1. Run the following command on terminal, in the root directory of the project-
```bash
npx cypress open
```

2. It will open the cypress dashboard. (wait for few minutes)

3. Select E2E Testing option and wait for Cypress the initialize the config.

4. Select the browser which you want to use to run the tests (should use Chrome mostly) and click Start E2E testing.

5. Cypress runner window will open. Select a spec file from there to start executing the tests for that spec file.


## Cypress Best Practices
1. Should use Unique IDs for every element (better to use [data-cy] tag)

2. Each test step should have only one validation.
https://docs.cypress.io/guides/references/best-practices#Creating-Tiny-Tests-With-A-Single-Assertion

3. Never use explicit wait (‘cy.wait()’). If really required, the wait should not exceed 2 seconds.
https://docs.cypress.io/guides/references/best-practices#Unnecessary-Waiting

4. Branch management. For stories going directly to prod, and for stories going through all envs.
QA -> Feature branch
Regression test <runs on> QA branch
Health check  <runs on> QA branch

5. Test coverage – Always cover all verification points as per the acceptance criteria of the user story.

6. Use of cy.intercept() - it should only be used for scenarios where we cannot reach the verification point without stubbing the API response

7. Always execute tests on local before raising a PR - if possible, add a screenshot of execution in the PR

8. Do not execute tests on Prod until unless really required. Use QA env or dev env for execution.

9. Tests should be dependent and in continuation

Cypress Best Practices:
https://docs.cypress.io/guides/references/best-practices


## Guidelines
- ESLint plugin should be installed and activated on VS Code to follow best coding practices. 

- Please make sure to use the existing `.eslintrc.js` configuration file for ESLint plugin. 

- All test cases should be structured project wise and should be placed under the folder `/cypress/e2e`. Example - `/cypress/e2e/chip/calculator.spec.js` 

- All element locators (CSS Selectors preferred) should be structured project wise and should be placed under the folder `/cypress/pages/page-selectors`. Example - `/cypress/pages/page-selectors/chip/CalculatorPage.js` 

- All commands or actions should be defined project wise and should be placed under the folder `/cypress/pages/commands`. Example - `/cypress/pages/commands/chip/calculator.js` 

- All test data should be added to the file `*.json` placed under the folder `/cypress/fixtures`. 

- Any changes in basic authentication or the base URL of the application should be accommodated in `cypress.env.json`. 


## Contributing
Pull requests are welcome. Always test your changes locally before making a PR

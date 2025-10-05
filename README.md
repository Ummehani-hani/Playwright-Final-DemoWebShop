Playwright Final Demo Web Shop Project
Project Overview

This project contains an automated End-to-End (E2E) test suite for the Tricentis Demo Web Shop using Playwright.
It demonstrates user registration, login, product purchase, checkout, and order verification using data-driven tests with reusable Page Object Model (POM) design.

Repository Structure
/project-root
  README.md
  package.json
  playwright.config.ts
  /tests
    /e2e
    /specs
  /pages
  /fixtures
  /utils
  /test-data
  /manual-test-cases
  /regression-strategy


README.md → Project documentation

package.json → Node dependencies & test scripts

playwright.config.ts → Playwright configuration (browser targets, traces, retries)

/tests → Automated test scripts

/e2e → End-to-end test cases

/specs → Unit or feature-level tests

/pages → Page Object Model classes

/fixtures → Test data setup / mocks (optional)

/utils → Helper functions / reusable utilities

/test-data → JSON/CSV files containing test data (users, products, etc.)

/manual-test-cases → Manual test case documentation

/regression-strategy → Regression test plan, suite prioritization

Setup Instructions
1. Clone the repository
git clone https://github.com/Ummehani-hani/Playwright-Final-DemoWebShop.git
cd Playwright-Final-DemoWebShop

2. Install dependencies
npm install
npx playwright install

3. Run the test suite
npx playwright test

4. Run tests in a specific browser
npx playwright test --project=chromium

5. Generate HTML Report
npx playwright show-report

Environment

Node.js: v20.x or latest LTS

Playwright: latest version

OS: Windows 

Browsers Tested: Chromium

Test Scenarios
Automated Tests

User Registration with multiple data sets (data-driven)

Login / Logout

Browse Computers → Notebooks → Select Laptop

Add to Cart & Verify Cart Quantity

Checkout with billing & shipping details

Payment method selection (mock)

Order verification & order number validation

Manual Test Scenarios

Smoke testing for critical flows

Regression test cases for major workflows

Exploratory checks for UI elements & navigation

Artifacts

Default location: test-results/ (configured in playwright.config.ts)

HTML report available via npx playwright show-report

Notes

All E2E tests follow Page Object Model (POM) structure for maintainability.

Test data is stored in /test-data/users.json for easy data-driven execution.

This repository is intended for learning automation with Playwright and demo purposes.

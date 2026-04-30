
# apitest-playwright-ts-bdd-zippo
Cucmber bdd framework using playwrigth typescript for API testing

API Test Automation Framework

Playwright + TypeScript + Cucumber (BDD)

#Overview

This project is a Behaviour-Driven Development (BDD) API test automation framework built using:

Playwright (API testing)
TypeScript
Cucumber (BDD)

The framework tests the public API:
http://api.zippopotam.us

It validates postcode data for:

United States (US)
Great Britain (GB)

#Project Structure
apitest-playwright-ts-bdd-zippo/ 
│ 
├── features/ # Gherkin feature files
│ └── postcode.feature 
├── step-definitions/ # Step implementations 
│ └── postcode.steps.ts
├── support/ # Hooks, world, API client
│ ├── apiClient.ts 
│ ├── hooks.ts 
│ └── world.ts 
├── config/ # Config and test data 
│ ├── env.ts 
│ └── testData.ts
├── cucumber.js # Cucumber configuration 
├── tsconfig.json # TypeScript configuration 
├── package.json 
└── README.md

#Setup Instructions
1. Clone the repository
git clone https://github.com/kolkarcodes/apitest-playwright-ts-bdd-zippo.git cd apitest-playwright-ts-bdd-zippo

2. Initialize project (if needed)
npm init -y

3. Install dependencies
npm install -D @playwright/test @cucumber/cucumber typescript ts-node

4. Install Playwright browsers
npx playwright install

5. Setup TypeScript
npx tsc --init

#How to run tests
Run all tests:

npx cucumber-js

Or using npm script:

npm test

#Test Scenarios Covered
#Positive Scenarios
Valid US postcode returns correct data
Valid GB postcode returns correct data

#Negative Scenarios
Invalid postcode returns 404
Unsupported country returns 404
Empty postcode handling

#Framework Design
API Client Layer → Centralized request handling using Playwright
World Object → Shared test context across steps
Hooks → Setup and initialization before tests
Config Driven → Base URL and test data separated

#Configuration
Base URL
Stored in:
config/env.ts
Test Data

Stored in:
config/testData.ts

#Key Features
BDD-style readable test scenarios
Reusable API client
Clean separation of concerns
Easy to scale and maintain
TypeScript-based strong typing

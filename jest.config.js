/* eslint-disable @typescript-eslint/no-var-requires */
// jest.config.js
const nextJest = require("next/jest");

const createJestConfig = nextJest({ dir: "./" });

const customJestConfig = {
  // set up the testing framework before each test file in the suite is executed.
  setupFilesAfterEnv: ["./jest.setup.ts"],
  testEnvironment: "jest-environment-jsdom",
  testPathIgnorePatterns: ["/node_modules/", "/.next/"],
  collectCoverage: true,
  modulePaths: ["<rootDir>/app/"],
  collectCoverageFrom: [
    "app/**/*.ts(x)?"
  ]
};

module.exports = createJestConfig(customJestConfig);
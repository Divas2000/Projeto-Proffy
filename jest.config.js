// jest.config.js
const nextJest = require('next/jest')

const createJestConfig = nextJest({
  dir: './'
})

const customJestConfig = {
  //setupFilesAfterEnv: ['./jest.setup.js'], (set up the testing framework before each test file in the suite is executed.)
  testEnvironment: 'jest-environment-jsdom',
  testPathIgnorePatterns: ['/node_modules/', '/.next/'],
  collectCoverage: true,
  modulePaths: ['<rootDir>/src/'],
  collectCoverageFrom: [
    './components/**/*.ts(x)?'
  ]
}

module.exports = createJestConfig(customJestConfig)
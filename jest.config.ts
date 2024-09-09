/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

import type { Config } from 'jest'

const config: Config = {
  testEnvironment: 'jest-environment-jsdom',

  setupFilesAfterEnv: ['<rootDir>/.jest/setup-tests.ts'],

  moduleNameMapper: {
    '\\.(git|ttf|eot|svg|png)$': '<rootDir>/.jest/mocks/fileMock.ts',
    '\\.(css|less|sass|scss)$': 'identify-obj-proxy',
  },

  clearMocks: true,

  collectCoverage: true,

  coverageDirectory: 'coverage',

  coverageProvider: 'v8',
}

export default config

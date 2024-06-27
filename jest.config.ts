// jest.config.ts

import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  // Jest configuration options
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageProvider: 'v8',
  setupFilesAfterEnv: ['./jest.setup.ts'],
  testEnvironment: 'jsdom',
  testMatch: [
    '**/__tests__/**/*.[jt]s?(x)',
    '**/?(*.)+(spec|test).[tj]s?(x)'
  ],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  transformIgnorePatterns: [
    '\\\\node_modules\\\\',
    '\\\\.pnp\\\\.[^\\\\]+$',
  ],
  moduleFileExtensions: [
    'js',
    'jsx',
    'ts',
    'tsx',
    'json',
    'node',
  ],
  roots: [
    '<rootDir>/src'
  ],
  modulePathIgnorePatterns: [
    '\\\\node_modules\\\\'
  ],
  verbose: true,
};

export default config;

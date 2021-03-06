module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  modulePaths: [
      '<rootDir>',
      '<rootDir>/src',
      '<rootDir>/dist',
      '<rootDir>/types/foundry-pc-types',
  ],
  moduleNameMapper: {
      '^@actor/(.*)$': '<rootDir>/src/module/actor/$1',
      '^@module/(.*)$': '<rootDir>/src/module/$1',
      '^@scripts/(.*)$': '<rootDir>/src/scripts/$1',
  },
  setupFiles: [
    './tests/setup.ts',
  ],
  globals: {
    Application: class {}
  },
};

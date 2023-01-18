module.exports = {
    clearMocks: true,
    coverageDirectory: "coverage",
    testEnvironment: "node",
    transform: {
      '^.+\\.js$': 'babel-jest',
      '^.+\.jsx?$': 'babel-jest'
    },
    moduleNameMapper: {
        '\\.(css|less)$': '<rootDir>/test/jest/__mocks__/styleMock.js',
    }
  };
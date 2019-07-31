module.exports = {
  name: 'Events',
  preset: 'ts-jest',
  testEnvironment: 'node',
  collectCoverageFrom: [
    "src/**/*.ts",
    "!**/node_modules/**"
  ],
  reporters: ["default", "jest-junit"],
  coverageReporters: ['cobertura', 'text', 'text-summary'],
  verbose: true,
  roots: ['src/'],
  coverageThreshold: {
    global: {
      branches: 50,
      functions: 50,
      lines: 50,
      statements: 50
    }
  }
};

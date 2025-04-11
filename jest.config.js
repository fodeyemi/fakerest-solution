/** @type {import('ts-jest').JestConfigWithTsJest} **/
module.exports = {
  testEnvironment: "node",
  transform: {
    "^.+\.tsx?$": ["ts-jest",{}],
  },
  preset: "ts-jest",
  verbose: true,
  collectCoverage: true,
  coverageDirectory: "coverage",
  testMatch: [
    "**/__tests__/**/*.test.ts",
  ],
};

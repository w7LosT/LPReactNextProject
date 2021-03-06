module.exports = {
    coverageDirectory: 'coverage',
    collectCoverage: true,
    collectCoverageFrom: [
        "src/**/*.{js,jsx,ts,tsx}",
        "!<rootDir>/src/*.{js,jsx,ts,tsx}",
        "!<rootDir>/src/**/*mock*.{js,jsx,ts,tsx}",
        "!<rootDir>/src/styles/*.{js,jsx,ts,tsx}",
        "!<rootDir>/src/pages/**/*.{js,jsx,ts,tsx}",
        "!<rootDir>/src/config/**/*.{js,jsx,ts,tsx}",
        "!<rootDir>/src/**/stories.{js,jsx,ts,tsx}",
        "!<rootDir>/node_modules/"
    ],
    testEnvironment: "jsdom",
    testMatch: [
        "**/__tests__/**/*.{js,jsx,ts,tsx}",
        "**/?(*.)+(spec|test).{js,jsx,ts,tsx}"
    ],
    testPathIgnorePatterns: [
        "/node_modules/",
        "/.next/",
        "/.out",
        "/public/"
    ],
    "setupFilesAfterEnv": [
        "<rootDir>/.jest/setup-tests.js",
    ]
};

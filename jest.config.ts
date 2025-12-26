import type { Config } from 'jest';
import nextJest from 'next/jest';

const createJestConfig = nextJest({
    // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
    dir: './',
});

// Add any custom config to be passed to Jest
const config: Config = {
    coverageProvider: 'v8',
    testEnvironment: 'jsdom',

    // Setup files
    setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],

    // Module name mapper for absolute imports
    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/app/$1',
    },

    // Test match patterns
    testMatch: [
        '<rootDir>/tests/unit/**/*.test.{ts,tsx}',
    ],

    // Coverage configuration
    collectCoverageFrom: [
        'app/components/**/*.{ts,tsx}',
        'app/lib/**/*.{ts,tsx}',
        'app/api/**/*.{ts,tsx}',
        '!**/*.d.ts',
        '!**/node_modules/**',
    ],

    // Transform configuration
    transform: {
        '^.+\\.(ts|tsx)$': ['@swc/jest', {
            jsc: {
                transform: {
                    react: {
                        runtime: 'automatic',
                    },
                },
            },
        }],
    },
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
export default createJestConfig(config);

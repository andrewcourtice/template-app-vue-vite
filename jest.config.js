module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    setupFiles: [
        './.scripts/setup-jest.ts'
    ],
    reporters: [
        'default',
        'jest-junit'
    ]
};
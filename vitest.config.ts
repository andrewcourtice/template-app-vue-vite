import {
    defineConfig,
} from 'vitest/config';

export default defineConfig({
    test: {
        watch: false,
        environment: 'happy-dom',
        outputFile: './.reports/tests/results.xml',
        reporters: [
            'default',
            'junit',
        ],
        coverage: {
            enabled: true,
            clean: true,
            reportsDirectory: './.reports/coverage',
            reporter: [
                'text-summary',
            ],
        },
    },
});
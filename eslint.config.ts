import stylistic from '@stylistic/eslint-plugin'
import tsParser from '@typescript-eslint/parser'
import tsEslint from '@typescript-eslint/eslint-plugin'

export default [
    {
        plugins: {
            '@stylistic': stylistic,
            '@typescript-eslint': tsEslint,
        },
        rules: {
            // Common rules
            'quotes': ['error', 'single'],
            'comma-dangle': ['error', 'always-multiline'],

            // Stylistic rules
            '@stylistic/comma-spacing': ['error', { 'before': false, 'after': true }],
            '@stylistic/semi': ['error', 'never'],
            '@stylistic/type-annotation-spacing': 'error',
            '@stylistic/type-generic-spacing': 'error',
            '@stylistic/no-mixed-spaces-and-tabs': 'error',
            '@stylistic/max-len': ['error', { 'code': 130 }],
            '@stylistic/indent': ['error', 4],

            // TS rules
            '@typescript-eslint/no-unused-vars': 'error',
            '@typescript-eslint/no-explicit-any': 'warn',
        },
        files: ['**/*.ts'],
        languageOptions: {
            parser: tsParser,
            parserOptions: {
                project: './tsconfig.json',
            },
        },
    },
]
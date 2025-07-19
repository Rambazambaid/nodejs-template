import { defineConfig } from 'vitest/config'

export default defineConfig({
    test: {
        name: 'NodeJS app tests',
        include: ['./**/*.test.ts'],
        globals: true,
        reporters: ['default'],
    },
})
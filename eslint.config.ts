import stylistic from '@stylistic/eslint-plugin'

export default [
	{
		plugins: {
			'@stylistic': stylistic,
		},
		rules: {
			'quotes': ['error', 'single'],
			'comma-dangle': ['error', 'always-multiline'],
			'@stylistic/comma-spacing': ['error', { 'before': false, 'after': true }],
			'@stylistic/semi': ['error', 'never'],
			'@stylistic/type-annotation-spacing': 'error',
			'@stylistic/type-generic-spacing': 'error',
			'@stylistic/no-mixed-spaces-and-tabs': 'error',
			'@stylistic/max-len': ['error', { 'code': 130 }],
			'@stylistic/indent': ['error', 'tab'],
		},
		files: ['**/*.ts'],
	},
]
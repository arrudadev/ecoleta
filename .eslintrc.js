module.exports = {
	parser: '@typescript-eslint/parser',
	env: {
		browser: true,
		es6: true,
		node: true,
	},
	extends: [
		'plugin:@typescript-eslint/recommended',
		'prettier/@typescript-eslint',
		'airbnb',
	],
	globals: {
		Atomics: 'readonly',
		SharedArrayBuffer: 'readonly',
	},
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 2018,
		sourceType: 'module',
	},
	plugins: [
		'@typescript-eslint',
		'react',
		'import-helpers',
	],
	rules: {
		'indent': ['error', 'tab'],
		'no-tabs': 'off',
		'comma-spacing': 2,
		'linebreak-style': 'off',
		'no-multiple-empty-lines': [2, { max: 1 }],
		'no-trailing-spaces': 2,
		'import-helpers/order-imports': [
			'warn',
			{
				newlinesBetween: 'always',
				groups: [
					'/^express/',
					'/^react/',
					'module',
					['parent', 'sibling', 'index'],
				],
				alphabetize: { order: 'asc', ignoreCase: true },
			},
		],
		'import/extensions': 'off',
		'import/no-unresolved': 'off',
		'class-methods-use-this': 'off',
		'camelcase': 'off',
		'@typescript-eslint/camelcase': 'off',
		'object-curly-newline': 'off',
		'react/jsx-filename-extension': 'off',
		'react/jsx-indent': 'off',
		'max-len': 'off',
		'react/jsx-indent-props': 'off',
		'react/jsx-one-expression-per-line': 'off',
		'import/prefer-default-export': 'off',
		'react/react-in-jsx-scope': 'off',
		'lines-between-class-members': 'off',
		'import/no-extraneous-dependencies': 'off',
		'jsx-a11y/label-has-associated-control': 'off',
		'jsx-a11y/click-events-have-key-events': 'off',
		'jsx-a11y/no-noninteractive-element-interactions': 'off'
	},
};

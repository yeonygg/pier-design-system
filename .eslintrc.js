module.exports = {
	env: {
		browser: true,
		es2021: true,
		node: true,
	},
	parser: "babel-eslint",
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
			modules: true
		},
		ecmaVersion: 12,
		sourceType: "module",
	},
	plugins: [
		"react",
		"prettier"
	],
	extends: ["prettier", "eslint:recommended", "plugin:react/recommended"],
	rules: {
		"react/react-in-jsx-scope": "off",
		"react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
		"react/display-name": 1,
	},
	settings: {
		"import/resolver": {
			"import/resolver": {
				"node": {
					"paths": ["."]
				}
			}
		}
	}
};

module.exports = {
	"env": {
		"browser": true,
		"es2021": true
	},
	"overrides": [
	],
	"parserOptions": {
		"ecmaVersion": "latest",
		"sourceType": "module"
	},
	"plugins": [
		"react"
	],
	"rules": {
		"indent": [
			"error",
			2
		],
		"linebreak-style": [
			"error",
			"unix"
		],
		"quotes": [
			"error",
			"double",
			{ "avoidEscape": true }
		],
		"semi": [
			"error",
			"always"
		]
	}
};

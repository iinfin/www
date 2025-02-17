module.exports = {
	extends: ['stylelint-config-recommended', 'stylelint-config-tailwindcss'],
	rules: {
		'at-rule-no-unknown': [
			true,
			{
				ignoreAtRules: ['tailwind', 'apply', 'layer', 'theme'],
			},
		],
		'at-rule-no-deprecated': [
			true,
			{
				ignoreAtRules: ['apply'],
			},
		],
	},
};

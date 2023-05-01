// https://github.com/conventional-changelog/commitlint/tree/master/@commitlint/config-conventional
// https://conventionalcommits.org/

module.exports = {
	extends: ['@commitlint/config-conventional'],
	rules: {
		// https://github.com/conventional-changelog/commitlint/blob/master/docs/reference-rules.md

		'type-case': [2, 'always', 'lower-case'],
		'type-empty': [2, 'never'],
		'type-enum': [
			2,
			'always',
			[
				'build', // build system or external dependencies
				'chore', // maintenance tasks or other chores
				'ci', // continuous integration or deployment
				'docs', // documentation
				'feat', // new features
				'fix', // bug fixes
				'refactor', // refactoring code
				'revert', // reverting changes
				'style', // code style changes (e.g., formatting, missing semicolons, etc.)
				'test', // tests or test-related changes
				'tweaks', // small improvements or optimizations
			],
		],

		'scope-case': [2, 'always', 'lower-case'],
		'scope-empty': [2, 'never'],
		'scope-enum': [
			2,
			'always',
			[
				'api', // API calls or endpoints
				'app', // core application logic, components, pages, or layout
				'config', // configuration files or settings
				'deps', // dependencies, updating or adding new packages
				'hooks', // React hooks
				'github', // GitHub specific changes such as actions
				'styles', // styling, such as CSS, SASS, or Tailwind
				'tests', // tests or test configuration
				'utils', // utility functions or helpers
			],
		],

		'subject-case': [2, 'always', 'lower-case'],
		'subject-empty': [2, 'never'],
	},
};

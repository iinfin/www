const config = {
	build: { section: 'Build System', release: 'patch' },
	chore: { section: 'Chores' },
	ci: { section: 'Continuous Integration' },
	docs: { section: 'Documentation' },
	feat: { section: 'Features', release: 'minor' },
	fix: { section: 'Bug Fixes', release: 'patch' },
	perf: { section: 'Performance Improvements' },
	refactor: { section: 'Code Refactoring', release: 'patch' },
	revert: { section: 'Reverts' },
	style: { section: 'Styles', release: 'patch' },
	test: { section: 'Tests', release: 'patch' },
	tweaks: { section: 'Tweaks', release: 'patch' },
};

module.exports = {
	branches: ['main'],
	plugins: [
		[
			'@semantic-release/commit-analyzer',
			{
				preset: 'angular',
				releaseRules: Object.entries(config)
					.map(([type, { release }]) => ({ type, release }))
					.filter((rule) => rule.release),
			},
		],
		[
			'@semantic-release/release-notes-generator',
			{ writerOpts: { types: Object.entries(config).map(([type, { section }]) => ({ type, section, hidden: false })) } },
		],
		'@semantic-release/changelog',
		[
			'@semantic-release/npm',
			{
				npmPublish: false,
			},
		],
		[
			'@semantic-release/github',
			{
				assets: ['CHANGELOG.md'],
			},
		],
		[
			'@semantic-release/git',
			{
				assets: ['CHANGELOG.md', 'package.json'],
				message: 'chore(release): version ${nextRelease.version}\n\n${nextRelease.notes}',
			},
		],
	],
};

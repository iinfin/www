module.exports = {
	branches: ['main'],
	plugins: [
		[
			'@semantic-release/commit-analyzer',
			{
				preset: 'angular',
				releaseRules: [
					{ type: 'feat', release: 'minor' },
					{ type: 'fix', release: 'patch' },
					{ type: 'build', release: 'patch' },
					{ type: 'tweaks', release: 'patch' },
					{ type: 'refactor', release: 'patch' },
					{ type: 'style', release: 'patch' },
					{ type: 'test', release: 'patch' },
				],
			},
		],
		[
			'@semantic-release/release-notes-generator',
			{
				writerOpts: {
					types: [
						{ type: 'build', section: 'Build', hidden: false },
						{ type: 'tweaks', section: 'Tweaks', hidden: false },
						{ type: 'refactor', section: 'Refactor', hidden: false },
						{ type: 'style', section: 'Style', hidden: false },
						{ type: 'test', section: 'Tests', hidden: false },
					],
				},
			},
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

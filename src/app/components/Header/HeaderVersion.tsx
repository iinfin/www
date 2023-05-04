import fs from 'fs';
import path from 'path';
import type { ReactElement } from 'react';

async function fetchRepoInfo(repoUrl: string, branch = 'main') {
	try {
		const repoUrlApi = `https://api.github.com/repos/${repoUrl}`;
		const clientSecret = process.env.GITHUB_CLIENT_SECRET;
		const clientId = process.env.GITHUB_CLIENT_ID;

		const packageJsonUrl = `${repoUrlApi}/contents/package.json?ref=${branch}&client_id=${clientId}&client_secret=${clientSecret}`;
		const packageJsonResponse = await fetch(packageJsonUrl);
		const packageJsonData = await packageJsonResponse.json();

		const packageJsonContent = Buffer.from(packageJsonData.content, 'base64').toString('utf8');
		const packageJson = JSON.parse(packageJsonContent);
		const { version } = packageJson;

		const commitsUrl = `${repoUrlApi}/commits?sha=${branch}&client_id=${clientId}&client_secret=${clientSecret}`;
		const commitsResponse = await fetch(commitsUrl);
		const commitsData = await commitsResponse.json();

		if (!Array.isArray(commitsData) || commitsData.length === 0) {
			throw new Error('No commits found');
		}
		const lastCommit = commitsData[0].sha.substring(0, 7);

		return { version, lastCommit };
	} catch (error) {
		return { version: '', lastCommit: '' };
		// throw new Error(`Error fetching repo info: ${error}`);
	}
}

export default async function HeaderVersion(): Promise<ReactElement> {
	const packageJsonPath = path.join(process.cwd(), 'package.json');
	const packageJsonData = fs.readFileSync(packageJsonPath, 'utf8');
	const packageJson = JSON.parse(packageJsonData);
	const repoUrl = packageJson.repository.url.split('github.com/')[1].replace('.git', ''); // `username/reponame`

	const { version, lastCommit } = await fetchRepoInfo(repoUrl);

	return (
		<a href={`https://github.com/${repoUrl}`}>
			<span>{`v${version} @${lastCommit}`}</span>
		</a>
	);
}

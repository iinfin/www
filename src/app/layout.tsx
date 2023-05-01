import './styles/global.css';

import { MetadataTemplate } from '@/components/Metadata';

export const metadata = MetadataTemplate;

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body>
				<main>
					<div>{children}</div>
				</main>
			</body>
		</html>
	);
}

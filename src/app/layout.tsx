import './styles/global.css';

import { Analytics } from '@/components/Analytics';
import { MetadataTemplate } from '@/components/Metadata';

export const metadata = MetadataTemplate;

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body>
				<main>{children}</main>
				<Analytics />
			</body>
		</html>
	);
}

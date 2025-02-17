import './styles/global.css';

import MetadataTemplate from '@/components/Metadata';
import Preload from '@/components/Preload';

export const metadata = MetadataTemplate;

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<Preload />
			<body>
				<main className="flex-start relative flex h-full w-full flex-col overflow-auto">{children}</main>
				<div className="overlay"></div>
			</body>
		</html>
	);
}

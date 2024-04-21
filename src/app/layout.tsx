import './styles/global.css';

// import Analytics from '@/components/Analytics';
import MetadataTemplate from '@/components/Metadata';

export const metadata = MetadataTemplate;

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body>
				<main className="flex-start relative flex h-full w-full flex-col overflow-auto">{children}</main>
				<div className="overlay"></div>
				{/* <Analytics /> */}
			</body>
		</html>
	);
}

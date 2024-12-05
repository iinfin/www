import { headers } from 'next/headers';
import Script from 'next/script';

import Contact from '@/components/Contact/Contact';
import Info from '@/components/Info/Info';
import Title from '@/components/Title/Title';
import Works from '@/components/Works/Works';

export default async function Home() {
	const nonce = (await headers()).get('x-nonce') || '';

	return (
		<>
			<Script src="https://www.googletagmanager.com/gtag/js" strategy="afterInteractive" nonce={nonce} />

			<Contact showIndex={true} />
			<Info />
			<Title />
			<Works />
			<Contact showIndex={false} />
		</>
	);
}

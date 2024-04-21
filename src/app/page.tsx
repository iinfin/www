import { headers } from 'next/headers';
import Script from 'next/script';

import Contact from '@/components/Contact/Contact';
import Info from '@/components/Info/Info';
import Title from '@/components/Title/Title';
import Works from '@/components/Works/Works';

export default function Home() {
	const nonce = headers().get('x-nonce') || '';

	return (
		<>
			<Script src="https://googletagmanager.com/gtag/js" strategy="afterInteractive" nonce={nonce} />

			<Contact />
			<Info />
			<Title />
			<Works />
			<Contact />
		</>
	);
}

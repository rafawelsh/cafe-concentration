import type { Metadata } from 'next';
import './globals.css';
import { ThemeProivder } from '@/components/themeProvider';

export const metadata: Metadata = {
	title: 'Coffee Concentration',
	description: 'Replicate the flow of a coffee shop at home.',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body>
				<ThemeProivder attribute='class' defaultTheme='system'>
					{children}
				</ThemeProivder>
			</body>
		</html>
	);
}

import './globals.css';
import type { Metadata } from 'next';
import { ThemeProvider } from './themeProvider';

export const metadata: Metadata = {
    title: 'Where in the world',
    description: 'REST countries app',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                >
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}

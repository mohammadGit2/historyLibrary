import type { Metadata } from 'next';
import './globals.css';
import { Nav } from '@/components/Nav';

export const metadata: Metadata = {
  title: 'Bayt al-Tareekh: The Living History Library',
  description: 'A source-based historical digital library for books, PDFs, maps, manuscripts, timelines and Urdu learning.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <Nav />
        {children}
      </body>
    </html>
  );
}

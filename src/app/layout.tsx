import type { Metadata } from 'next';
import './globals.css';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';


export const metadata: Metadata = {
  metadataBase: new URL('https://lunyco.com'),
  title: {
    default: 'Lunyco - Alejandro Cortes | Portfolio',
    template: '%s | Lunyco'
  },
  description: 'AI-focused Full-Stack portfolio: Next.js, Django, automations, and public projects.',
  openGraph: {
    title: 'Lunyco - Alejandro Cortes',
    description: 'AI-focused Full-Stack portfolio: Next.js, Django, automations, and public projects.',
    url: 'https://lunyco.com',
    siteName: 'Lunyco',
    type: 'website'
  },
  robots: { index: true, follow: true }
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-gray-950 text-gray-100 antialiased">
        <Navbar />
        <main className="min-h-screen mx-auto max-w-5xl px-4 py-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
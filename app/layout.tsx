import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://pabsoncricketleague.com'),

  // ✅ Title template helps SEO
  title: {
    default: 'Pabson Cricket League | School Cricket Tournament in Nepal',
    template: '%s | Pabson Cricket League',
  },

  description:
    'Official Pabson Cricket League website. Follow live scores, fixtures, results, teams and highlights of Nepal’s top school cricket tournament.',

  keywords: [
    'Pabson Cricket League',
    'School Cricket Nepal',
    'Nepal Cricket Tournament',
    'Cricket Fixtures Nepal',
    'Pabson League 2026',
  ],

  // ✅ Canonical
  alternates: {
    canonical: '/',
  },

  // ✅ Robots (important)
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  icons: {
    icon: '/pablogo.ico',
    shortcut: '/pablogo.ico',
  },

  openGraph: {
    title: 'Pabson Cricket League',
    description:
      'Live scores, fixtures, results and highlights from Nepal’s leading school cricket tournament.',
    url: 'https://pabsoncricketleague.com',
    siteName: 'Pabson Cricket League',
    images: [
      {
        url: 'https://res.cloudinary.com/dmlntyta1/image/upload/v1769432426/pablogo_sreyip.png',
        width: 1200,
        height: 630,
        alt: 'Pabson Cricket League',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Pabson Cricket League',
    description:
      'Live scores, fixtures and highlights of Pabson Cricket League.',
    images: ['/pablogo.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

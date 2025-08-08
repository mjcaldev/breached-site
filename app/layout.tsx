import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Young Adults Ministry | Find Your Purpose & Community',
  description: 'Join our vibrant young adults community (ages 18-30) for meaningful relationships, spiritual growth, and purposeful living. Weekly gatherings, events, and small groups available.',
  keywords: 'young adults, ministry, church, community, faith, purpose, relationships, spiritual growth, ages 18-30',
  authors: [{ name: 'Young Adults Ministry' }],
  creator: 'Young Adults Ministry',
  publisher: 'Young Adults Ministry',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://ya-ministry.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Young Adults Ministry | Find Your Purpose & Community',
    description: 'Join our vibrant young adults community for meaningful relationships, spiritual growth, and purposeful living.',
    url: 'https://ya-ministry.com',
    siteName: 'Young Adults Ministry',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Young Adults Ministry Community',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Young Adults Ministry | Find Your Purpose & Community',
    description: 'Join our vibrant young adults community for meaningful relationships, spiritual growth, and purposeful living.',
    images: ['/og-image.jpg'],
    creator: '@ya_ministry',
  },
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
  verification: {
    google: 'your-google-site-verification',
    yandex: 'your-yandex-verification',
    yahoo: 'your-yahoo-verification',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#28afb0" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Breached YA Ministry" />
      </head>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
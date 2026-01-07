// app/layout.tsx

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { LanguageProvider } from '@/contexts/LanguageContext';
import { GoogleAnalytics } from '@/components';

const inter = Inter({ subsets: ['latin'] });

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.avif-heicconverter.info';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Free Online HEIC/AVIF Converter - Batch Convert to JPG/PNG',
  description: 'Free online tool to convert HEIC and AVIF images to JPG, PNG, or WebP. Batch conversion supported, no limits, preserve EXIF metadata. No registration required.',
  keywords: 'heic to jpg, avif to jpg, heic converter, avif converter, batch convert heic, free heic converter, convert heic to jpg online, heic to png',
  authors: [{ name: 'HEIC Converter' }],
  alternates: {
    canonical: '/',
    languages: {
      'en': '/',
      'zh': '/',
      'x-default': '/',
    },
  },
  openGraph: {
    title: 'Free Online HEIC/AVIF Converter',
    description: 'Convert HEIC and AVIF images to JPG/PNG/WebP for free. Batch conversion, no limits.',
    type: 'website',
    locale: 'en_US',
    alternateLocale: ['zh_CN'],
    siteName: 'HEIC Converter',
    url: siteUrl,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Online HEIC/AVIF Converter',
    description: 'Convert HEIC and AVIF images to JPG/PNG/WebP for free.',
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
    google: 'MTVFQzPMMpzXY9iM1OgSGWSFMd3zvkMRn_fGoFmElNQ',
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
        <meta name="theme-color" content="#2563eb" />
      </head>
      <body className={inter.className}>
        <GoogleAnalytics />
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}

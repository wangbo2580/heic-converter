// app/heic-to-png/layout.tsx

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'HEIC to PNG Converter - Free Online Tool | Lossless Conversion',
  description: 'Free online HEIC to PNG converter. Convert iPhone HEIC photos to PNG format with lossless quality and transparency support. Batch conversion, no registration required.',
  keywords: 'heic to png, heic to png converter, convert heic to png, heic to png online, iphone photo to png, heic png converter',
  openGraph: {
    title: 'HEIC to PNG Converter - Free Online Tool',
    description: 'Convert iPhone HEIC photos to PNG format with lossless quality. Supports transparency.',
    type: 'website',
    locale: 'en_US',
    alternateLocale: ['zh_CN'],
  },
  alternates: {
    canonical: '/heic-to-png',
    languages: {
      'en': '/heic-to-png',
      'zh': '/heic-to-png',
      'x-default': '/heic-to-png',
    },
  },
};

export default function HeicToPngLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

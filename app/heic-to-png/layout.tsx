// app/heic-to-png/layout.tsx

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'HEIC to PNG Converter Free Online - Lossless Quality Conversion',
  description: 'Free HEIC to PNG converter online. Convert iPhone HEIC photos to PNG with lossless quality. Supports transparency, batch conversion up to 100 files. No signup, works on any device.',
  keywords: 'heic to png, heic to png converter, convert heic to png, heic to png online free, iphone photo to png, heic png converter, heic to png lossless, heic to png transparent',
  openGraph: {
    title: 'HEIC to PNG Converter Free Online - Lossless Quality',
    description: 'Free HEIC to PNG converter. Lossless quality with transparency support. Batch convert up to 100 files.',
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

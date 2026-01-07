// app/avif-to-png/layout.tsx

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AVIF to PNG Converter Free Online - Lossless AVIF Conversion',
  description: 'Free AVIF to PNG converter online. Convert AVIF images to PNG with lossless quality. Preserves transparency, batch conversion up to 100 files. Fast, secure & no signup required.',
  keywords: 'avif to png, avif to png converter, convert avif to png, avif to png online free, avif converter, avif png, avif to png lossless, batch avif to png',
  openGraph: {
    title: 'AVIF to PNG Converter Free Online - Lossless Quality',
    description: 'Free AVIF to PNG converter. Lossless quality with transparency. Batch convert up to 100 files.',
    type: 'website',
    locale: 'en_US',
    alternateLocale: ['zh_CN'],
  },
  alternates: {
    canonical: '/avif-to-png',
    languages: {
      'en': '/avif-to-png',
      'zh': '/avif-to-png',
      'x-default': '/avif-to-png',
    },
  },
};

export default function AvifToPngLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

// app/heic-to-png/layout.tsx

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'HEIC to PNG Converter - 100% Free, Lossless Quality | No Signup',
  description: 'Convert HEIC to PNG with lossless quality - 100% FREE, no signup, no watermarks. Preserve transparency & EXIF data. Batch up to 100 iPhone photos. Privacy-first: files stay in your browser.',
  keywords: 'heic to png, heic to png converter free, convert heic to png lossless, heic to png online free, iphone photo to png, heic png transparent, batch heic to png, heic to png no signup',
  openGraph: {
    title: 'HEIC to PNG - Free Lossless Converter, No Signup',
    description: 'Convert iPhone HEIC to PNG with perfect quality. 100% free, batch 100 files, preserves transparency. Your files never leave your device.',
    type: 'website',
    locale: 'en_US',
    alternateLocale: ['zh_CN'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HEIC to PNG - Free, Lossless, No Signup',
    description: 'Convert iPhone photos to PNG. Lossless quality, batch 100 files, privacy-first.',
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

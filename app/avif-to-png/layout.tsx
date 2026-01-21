// app/avif-to-png/layout.tsx

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AVIF to PNG Converter - 100% Free, Lossless Quality | No Signup',
  description: 'Convert AVIF to PNG with lossless quality - 100% FREE, no signup, no watermarks. Preserve transparency & metadata. Batch up to 100 files. Privacy-first: all processing in your browser.',
  keywords: 'avif to png, avif to png converter free, convert avif to png lossless, avif to png online free, avif png transparent, batch avif to png, avif to png no signup, avif converter free',
  openGraph: {
    title: 'AVIF to PNG - Free Lossless Converter, No Signup',
    description: 'Convert AVIF to PNG with perfect quality. 100% free, batch 100 files, preserves transparency. Your files never leave your device.',
    type: 'website',
    locale: 'en_US',
    alternateLocale: ['zh_CN'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AVIF to PNG - Free, Lossless, No Signup',
    description: 'Convert AVIF to PNG losslessly. Batch 100 files, no watermarks, privacy-first.',
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

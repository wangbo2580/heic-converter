// app/avif-to-webp/layout.tsx

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AVIF to WebP Converter - 100% Free, Wide Compatibility | No Signup',
  description: 'Convert AVIF to WebP for broader browser support - 100% FREE, no signup, no watermarks. Better compatibility than AVIF. Batch up to 100 files. Privacy-first: all processing in your browser.',
  keywords: 'avif to webp, avif to webp converter free, convert avif to webp, avif to webp online free, avif webp compatibility, batch avif to webp, avif to webp no signup, avif converter free',
  openGraph: {
    title: 'AVIF to WebP - Free Converter, Wide Compatibility',
    description: 'Convert AVIF to WebP for better browser support. 100% free, batch 100 files, no registration. Your files never leave your device.',
    type: 'website',
    locale: 'en_US',
    alternateLocale: ['zh_CN'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AVIF to WebP - Free, Compatible, No Signup',
    description: 'Convert AVIF to WebP for wider support. Batch 100 files, no watermarks, privacy-first.',
  },
  alternates: {
    canonical: '/avif-to-webp',
    languages: {
      'en': '/avif-to-webp',
      'zh': '/avif-to-webp',
      'x-default': '/avif-to-webp',
    },
  },
};

export default function AvifToWebpLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

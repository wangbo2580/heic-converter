// app/heic-to-webp/layout.tsx

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'HEIC to WebP Converter - 100% Free, Smaller Files | No Signup',
  description: 'Convert HEIC to WebP for 50% smaller files - 100% FREE, no signup, no watermarks. Perfect for web optimization. Batch up to 100 iPhone photos. Privacy-first: all processing in your browser.',
  keywords: 'heic to webp, heic to webp converter free, convert heic to webp, heic to webp online free, iphone photo to webp, batch heic to webp, heic to webp no signup, heic webp smaller',
  openGraph: {
    title: 'HEIC to WebP - Free Converter, 50% Smaller Files',
    description: 'Convert iPhone HEIC to WebP for smaller files. 100% free, batch 100 files, no registration. Your files never leave your device.',
    type: 'website',
    locale: 'en_US',
    alternateLocale: ['zh_CN'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HEIC to WebP - Free, Smaller Files, No Signup',
    description: 'Convert iPhone photos to WebP. 50% smaller files, batch 100 files, privacy-first.',
  },
  alternates: {
    canonical: '/heic-to-webp',
    languages: {
      'en': '/heic-to-webp',
      'zh': '/heic-to-webp',
      'x-default': '/heic-to-webp',
    },
  },
};

export default function HeicToWebpLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

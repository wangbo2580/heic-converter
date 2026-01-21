// app/heic-to-jpg/layout.tsx

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'HEIC to JPG Converter - 100% Free, No Signup | Batch Convert iPhone Photos',
  description: 'Convert HEIC to JPG instantly - 100% FREE, no signup, no watermarks. Batch convert up to 100 iPhone photos at once. Works on Windows, Mac, iPhone & Android. Privacy-first: all processing in your browser.',
  keywords: 'heic to jpg, heic to jpg converter, convert heic to jpg free, heic to jpg online free, iphone photo to jpg, heic converter no signup, batch heic to jpg, heic to jpg windows, heic to jpg mac, free heic converter',
  openGraph: {
    title: 'HEIC to JPG - Free Converter, No Signup Required',
    description: 'Convert iPhone HEIC photos to JPG instantly. 100% free, batch up to 100 files, no registration. Your files never leave your device.',
    type: 'website',
    locale: 'en_US',
    alternateLocale: ['zh_CN'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HEIC to JPG - Free, No Signup, Instant Conversion',
    description: 'Convert iPhone photos to JPG. Batch 100 files, no watermarks, privacy-first.',
  },
  alternates: {
    canonical: '/heic-to-jpg',
    languages: {
      'en': '/heic-to-jpg',
      'zh': '/heic-to-jpg',
      'x-default': '/heic-to-jpg',
    },
  },
};

export default function HeicToJpgLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

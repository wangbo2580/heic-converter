// app/avif-to-jpg/layout.tsx

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AVIF to JPG Converter - 100% Free, Instant | No Signup Required',
  description: 'Convert AVIF to JPG instantly - 100% FREE, no signup, no watermarks. Universal compatibility for any device or website. Batch up to 100 files. Privacy-first: all processing in your browser.',
  keywords: 'avif to jpg, avif to jpg converter free, convert avif to jpg, avif to jpg online free, avif converter no signup, avif to jpeg, batch avif to jpg, open avif files, avif to jpg free',
  openGraph: {
    title: 'AVIF to JPG - Free Instant Converter, No Signup',
    description: 'Convert AVIF images to JPG instantly. 100% free, batch 100 files, no registration. Your files never leave your device.',
    type: 'website',
    locale: 'en_US',
    alternateLocale: ['zh_CN'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AVIF to JPG - Free, Instant, No Signup',
    description: 'Convert AVIF to JPG instantly. Batch 100 files, no watermarks, privacy-first.',
  },
  alternates: {
    canonical: '/avif-to-jpg',
    languages: {
      'en': '/avif-to-jpg',
      'zh': '/avif-to-jpg',
      'x-default': '/avif-to-jpg',
    },
  },
};

export default function AvifToJpgLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

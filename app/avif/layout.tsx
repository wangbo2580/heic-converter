// app/avif/layout.tsx

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Free AVIF Converter Online - Convert AVIF to JPG/PNG/WebP Instantly',
  description: 'Convert AVIF images to JPG, PNG, or WebP format 100% free. Batch convert up to 100 files at once, no signup required, no watermarks. Works on any device - Windows, Mac, iPhone, Android.',
  keywords: 'avif converter, avif to jpg, avif to png, avif to webp, convert avif, free avif converter, batch avif converter, avif image converter, open avif files, avif to jpeg online',
  openGraph: {
    title: 'Free AVIF Converter - Convert to JPG/PNG/WebP Online',
    description: 'Convert AVIF images instantly. 100% free, no signup, batch conversion up to 100 files. Privacy-first: all processing happens in your browser.',
    type: 'website',
    locale: 'en_US',
    alternateLocale: ['zh_CN'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free AVIF Converter - No Signup Required',
    description: 'Convert AVIF to JPG/PNG/WebP free. Batch up to 100 files, instant processing.',
  },
  alternates: {
    canonical: '/avif',
    languages: {
      'en': '/avif',
      'zh': '/avif',
      'x-default': '/avif',
    },
  },
};

export default function AvifLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

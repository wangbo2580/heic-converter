// app/heic-to-jpg/layout.tsx

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'HEIC to JPG Converter - Free Online Tool | Convert iPhone Photos',
  description: 'Free online HEIC to JPG converter. Convert iPhone photos from HEIC to JPG format instantly. Batch conversion supported, no registration required, preserve original quality.',
  keywords: 'heic to jpg, heic to jpg converter, convert heic to jpg, heic to jpg online, iphone photo to jpg, heic converter',
  openGraph: {
    title: 'HEIC to JPG Converter - Free Online Tool',
    description: 'Convert iPhone HEIC photos to JPG format instantly. Free, unlimited batch conversion.',
    type: 'website',
    locale: 'en_US',
    alternateLocale: ['zh_CN'],
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

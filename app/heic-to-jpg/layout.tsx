// app/heic-to-jpg/layout.tsx

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'HEIC to JPG Converter Free Online - Convert iPhone Photos Instantly',
  description: 'Free HEIC to JPG converter. Convert iPhone HEIC photos to JPG in seconds. Batch conversion up to 100 files, preserve quality & EXIF metadata. No installation, works on Windows & Mac.',
  keywords: 'heic to jpg, heic to jpg converter, convert heic to jpg, heic to jpg online free, iphone photo to jpg, heic converter, batch heic to jpg, heic to jpg windows',
  openGraph: {
    title: 'HEIC to JPG Converter Free Online - Convert iPhone Photos',
    description: 'Free HEIC to JPG converter. Batch convert up to 100 iPhone photos instantly. Preserve quality & EXIF data.',
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

// app/avif-to-jpg/layout.tsx

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AVIF to JPG Converter Free Online - Fast AVIF Image Conversion',
  description: 'Free AVIF to JPG converter. Convert AVIF images to JPG format instantly for universal compatibility. Batch conversion up to 100 files, preserve image quality. No registration required.',
  keywords: 'avif to jpg, avif to jpg converter, convert avif to jpg, avif to jpg online free, avif converter, avif to jpeg, batch avif converter, avif to jpg free',
  openGraph: {
    title: 'AVIF to JPG Converter Free Online - Fast Conversion',
    description: 'Free AVIF to JPG converter. Convert AVIF images instantly. Batch process up to 100 files.',
    type: 'website',
    locale: 'en_US',
    alternateLocale: ['zh_CN'],
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

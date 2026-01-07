// app/heic-to-webp/layout.tsx

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'HEIC to WebP Converter Free Online - Modern Format Conversion',
  description: 'Free HEIC to WebP converter online. Convert iPhone HEIC photos to WebP for smaller file sizes and better web performance. Batch conversion up to 100 files, preserve quality. No signup required.',
  keywords: 'heic to webp, heic to webp converter, convert heic to webp, heic to webp online free, iphone photo to webp, heic webp converter, batch heic to webp',
  openGraph: {
    title: 'HEIC to WebP Converter Free Online - Modern Format',
    description: 'Free HEIC to WebP converter. Convert iPhone photos to WebP for smaller files. Batch process up to 100 images.',
    type: 'website',
    locale: 'en_US',
    alternateLocale: ['zh_CN'],
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

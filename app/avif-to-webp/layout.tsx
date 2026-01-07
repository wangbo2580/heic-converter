// app/avif-to-webp/layout.tsx

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AVIF to WebP Converter Free Online - Modern Format Conversion',
  description: 'Free AVIF to WebP converter online. Convert AVIF images to WebP for better browser compatibility and smaller file sizes. Batch conversion up to 100 files, preserve quality. No signup required.',
  keywords: 'avif to webp, avif to webp converter, convert avif to webp, avif to webp online free, avif webp converter, batch avif to webp, avif converter',
  openGraph: {
    title: 'AVIF to WebP Converter Free Online - Modern Format',
    description: 'Free AVIF to WebP converter. Convert AVIF images to WebP for wider compatibility. Batch process up to 100 images.',
    type: 'website',
    locale: 'en_US',
    alternateLocale: ['zh_CN'],
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

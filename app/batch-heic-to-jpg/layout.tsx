// app/batch-heic-to-jpg/layout.tsx

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Batch HEIC to JPG Converter - Convert Multiple iPhone Photos at Once',
  description: 'Free batch HEIC to JPG converter. Convert 100+ iPhone HEIC photos to JPG simultaneously. Fast bulk conversion, preserve quality & EXIF. No signup, works on Windows, Mac & Linux.',
  keywords: 'batch heic to jpg, bulk heic converter, convert multiple heic to jpg, heic batch converter, mass heic to jpg, heic to jpg batch free, batch convert iphone photos, bulk iphone photo converter',
  openGraph: {
    title: 'Batch HEIC to JPG Converter - Bulk Convert iPhone Photos',
    description: 'Free batch HEIC to JPG converter. Convert 100+ photos simultaneously with quality preservation.',
    type: 'website',
    locale: 'en_US',
  },
  alternates: {
    canonical: '/batch-heic-to-jpg',
    languages: {
      'en': '/batch-heic-to-jpg',
      'x-default': '/batch-heic-to-jpg',
    },
  },
};

export default function BatchHeicToJpgLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

// app/iphone-photo-converter/layout.tsx

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'iPhone Photo Converter - Convert HEIC to JPG/PNG Online Free',
  description: 'Free iPhone photo converter online. Convert HEIC photos from iPhone to JPG or PNG instantly. Works on Windows & Mac, no software download needed. Batch convert up to 100 photos.',
  keywords: 'iphone photo converter, convert iphone photos, iphone heic to jpg, iphone photo to jpg, iphone pictures converter, convert iphone photos to jpg online, iphone image converter, ios photo converter',
  openGraph: {
    title: 'iPhone Photo Converter - HEIC to JPG/PNG Free Online',
    description: 'Free iPhone photo converter. Convert HEIC to JPG/PNG instantly. No software needed, works in browser.',
    type: 'website',
    locale: 'en_US',
  },
  alternates: {
    canonical: '/iphone-photo-converter',
    languages: {
      'en': '/iphone-photo-converter',
      'x-default': '/iphone-photo-converter',
    },
  },
};

export default function IphonePhotoConverterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

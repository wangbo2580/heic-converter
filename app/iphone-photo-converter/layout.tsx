// app/iphone-photo-converter/layout.tsx

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'iPhone Photo Converter - Open HEIC on Windows/Mac | 100% Free',
  description: 'Can\'t open iPhone photos on Windows? Convert HEIC to JPG/PNG instantly - 100% FREE, no signup, no software install. Works on any device. Batch up to 100 photos. Privacy-first: files stay in your browser.',
  keywords: 'iphone photo converter, convert iphone photos windows, iphone heic to jpg, open iphone photos on pc, iphone photo to jpg free, iphone pictures converter, convert iphone photos to jpg online free, iphone image converter no signup, ios photo converter',
  openGraph: {
    title: 'iPhone Photo Converter - Open HEIC on Any Device',
    description: 'Can\'t open iPhone photos? Convert HEIC to JPG/PNG free. No software needed, works on Windows, Mac, Android.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'iPhone Photo Converter - Free, No Software Needed',
    description: 'Convert iPhone HEIC photos to JPG/PNG. Works on Windows, Mac, Android. Free, instant.',
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

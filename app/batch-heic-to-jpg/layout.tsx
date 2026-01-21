// app/batch-heic-to-jpg/layout.tsx

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Batch HEIC to JPG - Convert 100+ iPhone Photos at Once | 100% Free',
  description: 'Batch convert HEIC to JPG - process 100+ iPhone photos simultaneously! 100% FREE, no signup, no watermarks, no file limits. Download as ZIP. Privacy-first: all processing happens in your browser.',
  keywords: 'batch heic to jpg, bulk heic converter, convert multiple heic to jpg free, heic batch converter no limit, mass heic to jpg, heic to jpg batch free, batch convert iphone photos, bulk iphone photo converter, heic to jpg 100 files',
  openGraph: {
    title: 'Batch HEIC to JPG - Convert 100+ Photos Free',
    description: 'Batch convert HEIC to JPG instantly. Process 100+ photos at once, download as ZIP. 100% free, no signup required.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Batch HEIC to JPG - 100+ Photos at Once, Free',
    description: 'Convert 100+ iPhone photos to JPG simultaneously. Free, no signup, download as ZIP.',
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

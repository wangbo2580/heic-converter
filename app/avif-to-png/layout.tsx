// app/avif-to-png/layout.tsx

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AVIF to PNG Converter - Free Online Tool | Lossless Quality',
  description: 'Free online AVIF to PNG converter. Convert AVIF images to PNG format with lossless quality and transparency preservation. Batch conversion, no registration required.',
  keywords: 'avif to png, avif to png converter, convert avif to png, avif to png online, avif converter, avif png',
  openGraph: {
    title: 'AVIF to PNG Converter - Free Online Tool',
    description: 'Convert AVIF images to PNG format with lossless quality. Preserves transparency.',
    type: 'website',
  },
  alternates: {
    canonical: '/avif-to-png',
  },
};

export default function AvifToPngLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

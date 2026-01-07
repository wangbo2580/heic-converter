// app/avif-to-jpg/layout.tsx

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AVIF to JPG Converter - Free Online Tool | Convert AVIF Images',
  description: 'Free online AVIF to JPG converter. Convert AVIF images to JPG format for universal compatibility. Batch conversion supported, no registration required.',
  keywords: 'avif to jpg, avif to jpg converter, convert avif to jpg, avif to jpg online, avif converter, avif to jpeg',
  openGraph: {
    title: 'AVIF to JPG Converter - Free Online Tool',
    description: 'Convert AVIF images to JPG format for universal compatibility. Fast and free.',
    type: 'website',
  },
  alternates: {
    canonical: '/avif-to-jpg',
  },
};

export default function AvifToJpgLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

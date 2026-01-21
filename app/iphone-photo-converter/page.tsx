// app/iphone-photo-converter/page.tsx

'use client';

import { ConverterPage } from '@/components';
import type { ConverterPageTranslations } from '@/lib/i18n/types';

// Custom translations for iPhone photo converter page
const iphonePhotoConverterTranslations: ConverterPageTranslations = {
  title: 'iPhone Photo Converter',
  subtitle: 'Convert iPhone HEIC photos to JPG or PNG format instantly. No software to download - works directly in your browser on any device.',
  metaTitle: 'iPhone Photo Converter - Convert HEIC to JPG/PNG Online',
  metaDescription: 'Free iPhone photo converter. Convert HEIC photos to JPG or PNG instantly in your browser.',
  metaKeywords: 'iphone photo converter, convert iphone photos, heic to jpg',
  faq: {
    title: 'iPhone Photo Conversion FAQ',
    items: [
      {
        question: 'Why are my iPhone photos in HEIC format?',
        answer: 'Apple introduced HEIC (High Efficiency Image Container) format with iOS 11 as the default photo format. HEIC files are 50% smaller than JPG while maintaining the same quality, saving storage space on your iPhone.',
      },
      {
        question: 'How do I transfer iPhone photos to Windows PC?',
        answer: 'Connect your iPhone via USB, import photos through Windows Photos app or File Explorer. The photos will be in HEIC format. Use our converter to change them to JPG for full Windows compatibility.',
      },
      {
        question: 'Will converting iPhone photos reduce quality?',
        answer: 'Our converter preserves the original image quality during conversion. We use high-quality encoding (92% quality by default) to ensure your photos look identical to the originals.',
      },
      {
        question: 'Can I convert Live Photos from iPhone?',
        answer: 'Yes, you can convert the still image portion of Live Photos. The HEIC file contains the main image which will be converted to your chosen format. The video portion of Live Photos is stored separately.',
      },
    ],
  },
};

export default function IphonePhotoConverterPage() {
  return (
    <ConverterPage
      pageTranslations={iphonePhotoConverterTranslations}
      defaultFormat="jpeg"
      theme="orange"
    />
  );
}

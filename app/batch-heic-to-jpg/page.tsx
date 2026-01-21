// app/batch-heic-to-jpg/page.tsx

'use client';

import { ConverterPage } from '@/components';
import type { ConverterPageTranslations } from '@/lib/i18n/types';

// Custom translations for batch HEIC to JPG page
const batchHeicToJpgTranslations: ConverterPageTranslations = {
  title: 'Batch HEIC to JPG Converter',
  subtitle: 'Convert multiple iPhone HEIC photos to JPG at once. Upload up to 100 files and convert them all simultaneously - fast, free, and no signup required.',
  metaTitle: 'Batch HEIC to JPG Converter - Convert Multiple iPhone Photos',
  metaDescription: 'Free batch HEIC to JPG converter. Convert 100+ iPhone photos simultaneously with quality preservation.',
  metaKeywords: 'batch heic to jpg, bulk heic converter, convert multiple heic',
  faq: {
    title: 'Batch HEIC to JPG Conversion FAQ',
    items: [
      {
        question: 'How many HEIC files can I convert at once?',
        answer: 'You can batch convert up to 100 HEIC files at once. Simply drag and drop multiple files or select them from your file browser. All files will be processed simultaneously for maximum efficiency.',
      },
      {
        question: 'Is batch conversion slower than single file conversion?',
        answer: 'Our batch converter processes multiple files in parallel, so converting 10 files takes almost the same time as converting 1 file. The conversion happens directly in your browser using WebAssembly technology.',
      },
      {
        question: 'Will EXIF data be preserved in batch conversion?',
        answer: 'Yes! All EXIF metadata including date taken, camera settings, GPS location, and orientation is preserved during batch conversion. This applies to every file in your batch.',
      },
      {
        question: 'Can I download all converted files at once?',
        answer: 'Absolutely! After batch conversion completes, you can download all JPG files as a single ZIP archive with one click. Individual downloads are also available for each file.',
      },
    ],
  },
};

export default function BatchHeicToJpgPage() {
  return (
    <ConverterPage
      pageTranslations={batchHeicToJpgTranslations}
      defaultFormat="jpeg"
      theme="green"
    />
  );
}

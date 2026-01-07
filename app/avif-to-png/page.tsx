// app/avif-to-png/page.tsx

'use client';

import { ConverterPage } from '@/components';
import { useTranslations } from '@/contexts/LanguageContext';

export default function AvifToPngPage() {
  const t = useTranslations();

  return (
    <ConverterPage
      pageTranslations={t.converterPages.avifToPng}
      defaultFormat="png"
      theme="orange"
    />
  );
}

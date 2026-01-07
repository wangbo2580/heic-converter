// app/avif-to-jpg/page.tsx

'use client';

import { ConverterPage } from '@/components';
import { useTranslations } from '@/contexts/LanguageContext';

export default function AvifToJpgPage() {
  const t = useTranslations();

  return (
    <ConverterPage
      pageTranslations={t.converterPages.avifToJpg}
      defaultFormat="jpeg"
      theme="purple"
    />
  );
}

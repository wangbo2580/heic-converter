// app/heic-to-jpg/page.tsx

'use client';

import { ConverterPage } from '@/components';
import { useTranslations } from '@/contexts/LanguageContext';

export default function HeicToJpgPage() {
  const t = useTranslations();

  return (
    <ConverterPage
      pageTranslations={t.converterPages.heicToJpg}
      defaultFormat="jpeg"
      theme="blue"
    />
  );
}

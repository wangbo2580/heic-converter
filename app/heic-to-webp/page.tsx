// app/heic-to-webp/page.tsx

'use client';

import { ConverterPage } from '@/components';
import { useTranslations } from '@/contexts/LanguageContext';

export default function HeicToWebpPage() {
  const t = useTranslations();

  return (
    <ConverterPage
      pageTranslations={t.converterPages.heicToWebp}
      defaultFormat="webp"
      theme="blue"
    />
  );
}

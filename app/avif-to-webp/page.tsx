// app/avif-to-webp/page.tsx

'use client';

import { ConverterPage } from '@/components';
import { useTranslations } from '@/contexts/LanguageContext';

export default function AvifToWebpPage() {
  const t = useTranslations();

  return (
    <ConverterPage
      pageTranslations={t.converterPages.avifToWebp}
      defaultFormat="webp"
      theme="purple"
    />
  );
}

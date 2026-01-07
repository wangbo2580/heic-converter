// app/heic-to-png/page.tsx

'use client';

import { ConverterPage } from '@/components';
import { useTranslations } from '@/contexts/LanguageContext';

export default function HeicToPngPage() {
  const t = useTranslations();

  return (
    <ConverterPage
      pageTranslations={t.converterPages.heicToPng}
      defaultFormat="png"
      theme="green"
    />
  );
}

// components/Footer.tsx

'use client';

import Link from 'next/link';
import { useTranslations } from '@/contexts/LanguageContext';

interface FooterProps {
  variant?: 'full' | 'simple';
}

export function Footer({ variant = 'full' }: FooterProps) {
  const t = useTranslations();
  const currentYear = new Date().getFullYear();
  const copyright = t.common.copyright.replace('{year}', currentYear.toString());

  return (
    <footer className="bg-white border-t border-gray-200 mt-16">
      <div className={`mx-auto px-4 py-8 ${variant === 'full' ? 'max-w-5xl' : 'max-w-4xl'}`}>
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">
            {copyright}
          </p>
          <div className="flex items-center gap-6 text-sm">
            {variant === 'full' && (
              <Link href="/" className="text-gray-500 hover:text-gray-700 transition-colors">
                {t.common.home}
              </Link>
            )}
            <Link href="/privacy" className="text-gray-500 hover:text-gray-700 transition-colors">
              {t.common.privacy}
            </Link>
            <Link href="/terms" className="text-gray-500 hover:text-gray-700 transition-colors">
              {t.common.terms}
            </Link>
            {variant === 'full' && (
              <a href="mailto:contact@example.com" className="text-gray-500 hover:text-gray-700 transition-colors">
                {t.common.contact}
              </a>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}

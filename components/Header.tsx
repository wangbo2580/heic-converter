// components/Header.tsx

'use client';

import Link from 'next/link';
import { useTranslations } from '@/contexts/LanguageContext';
import { LanguageSwitcher } from './LanguageSwitcher';

interface HeaderProps {
  variant?: 'full' | 'simple';
  theme?: 'blue' | 'purple';
}

export function Header({ variant = 'full', theme = 'blue' }: HeaderProps) {
  const t = useTranslations();

  const gradientClass = theme === 'purple'
    ? 'from-purple-500 to-purple-600'
    : 'from-blue-500 to-blue-600';

  const hoverClass = theme === 'purple'
    ? 'hover:text-purple-600'
    : 'hover:text-blue-600';

  const siteName = theme === 'purple' ? 'AVIF Converter' : t.common.siteName;

  return (
    <header className="bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-5xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className={`w-9 h-9 bg-gradient-to-br ${gradientClass} rounded-lg flex items-center justify-center`}>
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <span className="text-lg font-bold text-gray-900">{siteName}</span>
          </Link>

          <div className="flex items-center gap-4">
            {variant === 'full' && (
              <nav className="hidden sm:flex items-center gap-6">
                {theme === 'purple' ? (
                  <Link href="/" className={`text-sm text-gray-600 ${hoverClass} transition-colors font-medium`}>
                    {t.header.heicConvert}
                  </Link>
                ) : (
                  <Link href="/avif" className={`text-sm text-gray-600 ${hoverClass} transition-colors font-medium`}>
                    {t.header.avifConvert}
                  </Link>
                )}
                <a href="#faq" className={`text-sm text-gray-600 ${hoverClass} transition-colors font-medium`}>
                  {t.common.faq}
                </a>
              </nav>
            )}
            <LanguageSwitcher />
          </div>
        </div>
      </div>
    </header>
  );
}

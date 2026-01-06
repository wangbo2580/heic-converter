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
              <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none">
                {/* 左侧图片图标 */}
                <rect x="2" y="4" width="9" height="9" rx="1.5" stroke="currentColor" strokeWidth="1.8" fill="none" />
                <circle cx="5" cy="7" r="1" fill="currentColor" />
                <path d="M2 11l2.5-2.5a1 1 0 011.4 0L9 11.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                {/* 转换箭头 */}
                <path d="M12 8h4m0 0l-2-2m2 2l-2 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M12 16h4m0 0l-2-2m2 2l-2 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.6" />
                {/* 右侧图片图标 */}
                <rect x="13" y="11" width="9" height="9" rx="1.5" stroke="currentColor" strokeWidth="1.8" fill="none" />
                <circle cx="16" cy="14" r="1" fill="currentColor" />
                <path d="M13 18l2.5-2.5a1 1 0 011.4 0L20 18.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
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

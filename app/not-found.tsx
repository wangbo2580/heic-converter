// app/not-found.tsx

'use client';

import Link from 'next/link';
import { Header, Footer } from '@/components';
import { useTranslations } from '@/contexts/LanguageContext';

export default function NotFound() {
  const t = useTranslations();

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white flex flex-col">
      <Header variant="simple" />

      {/* 404 Content */}
      <div className="flex-1 flex items-center justify-center px-4">
        <div className="text-center">
          <div className="mb-8">
            <span className="text-9xl font-bold text-gray-200">404</span>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            {t.notFound.title}
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto">
            {t.notFound.message}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              {t.notFound.backHome}
            </Link>
            <Link
              href="/avif"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold rounded-xl transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              {t.header.avifConvert}
            </Link>
          </div>
        </div>
      </div>

      <Footer variant="simple" />
    </main>
  );
}

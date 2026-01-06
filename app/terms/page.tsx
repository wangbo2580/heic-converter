// app/terms/page.tsx

'use client';

import Link from 'next/link';
import { Header, Footer } from '@/components';
import { useTranslations, useLanguage } from '@/contexts/LanguageContext';

export default function TermsPage() {
  const t = useTranslations();
  const { locale } = useLanguage();

  const lastUpdated = new Date().toLocaleDateString(locale === 'zh' ? 'zh-CN' : 'en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <main className="min-h-screen bg-gray-50">
      <Header variant="simple" />

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">{t.terms.title}</h1>

        <div className="prose prose-gray max-w-none space-y-8">
          <p className="text-gray-600 text-lg">
            {t.terms.lastUpdated}: {lastUpdated}
          </p>

          <section className="bg-white p-6 rounded-xl border border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">{t.terms.acceptance.title}</h2>
            <p className="text-gray-600 leading-relaxed">
              {t.terms.acceptance.content}
            </p>
          </section>

          <section className="bg-white p-6 rounded-xl border border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">{t.terms.description.title}</h2>
            <p className="text-gray-600 leading-relaxed">
              {t.terms.description.content}
            </p>
          </section>

          <section className="bg-white p-6 rounded-xl border border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">{t.terms.acceptable.title}</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              {t.terms.acceptable.content}
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              {t.terms.acceptable.items.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </section>

          <section className="bg-white p-6 rounded-xl border border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">{t.terms.intellectual.title}</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>{t.terms.intellectual.yourContent.split(':')[0]}:</strong>
              {t.terms.intellectual.yourContent.split(':').slice(1).join(':')}
            </p>
            <p className="text-gray-600 leading-relaxed">
              <strong>{t.terms.intellectual.ourContent.split(':')[0]}:</strong>
              {t.terms.intellectual.ourContent.split(':').slice(1).join(':')}
            </p>
          </section>

          <section className="bg-white p-6 rounded-xl border border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">{t.terms.limitations.title}</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              {t.terms.limitations.content}
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              {t.terms.limitations.items.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            <p className="text-gray-600 leading-relaxed mt-4">
              {t.terms.limitations.note}
            </p>
          </section>

          <section className="bg-white p-6 rounded-xl border border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">{t.terms.privacyRef.title}</h2>
            <p className="text-gray-600 leading-relaxed">
              {t.terms.privacyRef.content.split('Privacy Policy')[0]}
              <Link href="/privacy" className="text-blue-600 hover:underline">{t.common.privacy}</Link>
              {t.terms.privacyRef.content.split('Privacy Policy')[1] || ''}
            </p>
          </section>

          <section className="bg-white p-6 rounded-xl border border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">{t.terms.disclaimer.title}</h2>
            <p className="text-gray-600 leading-relaxed">
              {t.terms.disclaimer.content}
            </p>
            <ul className="list-disc list-inside text-gray-600 mt-2 space-y-1">
              {t.terms.disclaimer.items.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </section>

          <section className="bg-white p-6 rounded-xl border border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">{t.terms.liability.title}</h2>
            <p className="text-gray-600 leading-relaxed">
              {t.terms.liability.content}
            </p>
            <ul className="list-disc list-inside text-gray-600 mt-2 space-y-1">
              {t.terms.liability.items.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </section>

          <section className="bg-white p-6 rounded-xl border border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">{t.terms.indemnification.title}</h2>
            <p className="text-gray-600 leading-relaxed">
              {t.terms.indemnification.content}
            </p>
          </section>

          <section className="bg-white p-6 rounded-xl border border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">{t.terms.modifications.title}</h2>
            <p className="text-gray-600 leading-relaxed">
              {t.terms.modifications.content}
            </p>
          </section>

          <section className="bg-white p-6 rounded-xl border border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">{t.terms.termsChanges.title}</h2>
            <p className="text-gray-600 leading-relaxed">
              {t.terms.termsChanges.content}
            </p>
          </section>

          <section className="bg-white p-6 rounded-xl border border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">{t.terms.governing.title}</h2>
            <p className="text-gray-600 leading-relaxed">
              {t.terms.governing.content}
            </p>
          </section>

          <section className="bg-white p-6 rounded-xl border border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">{t.terms.contactTitle}</h2>
            <p className="text-gray-600 leading-relaxed">
              {t.terms.contactContent}
            </p>
            <p className="text-gray-600 mt-2">
              Email: <a href="mailto:wbo861496@gmail.com" className="text-blue-600 hover:underline">wbo861496@gmail.com</a>
            </p>
          </section>
        </div>
      </div>

      <Footer variant="simple" />
    </main>
  );
}

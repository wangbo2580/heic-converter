// app/privacy/page.tsx

'use client';

import { Header, Footer } from '@/components';
import { useTranslations, useLanguage } from '@/contexts/LanguageContext';

export default function PrivacyPage() {
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
        <h1 className="text-3xl font-bold text-gray-900 mb-8">{t.privacy.title}</h1>

        <div className="prose prose-gray max-w-none space-y-8">
          <p className="text-gray-600 text-lg">
            {t.privacy.lastUpdated}: {lastUpdated}
          </p>

          <section className="bg-white p-6 rounded-xl border border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">{t.privacy.intro.title}</h2>
            <p className="text-gray-600 leading-relaxed">
              {t.privacy.intro.content}
            </p>
          </section>

          <section className="bg-white p-6 rounded-xl border border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">{t.privacy.collection.title}</h2>

            <h3 className="text-lg font-medium text-gray-800 mt-4 mb-2">{t.privacy.collection.imagesTitle}</h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              {t.privacy.collection.imagesContent}
            </p>

            <h3 className="text-lg font-medium text-gray-800 mt-4 mb-2">{t.privacy.collection.autoTitle}</h3>
            <p className="text-gray-600 leading-relaxed">
              {t.privacy.collection.autoContent}
            </p>
            <ul className="list-disc list-inside text-gray-600 mt-2 space-y-1">
              {t.privacy.collection.autoItems.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </section>

          <section className="bg-white p-6 rounded-xl border border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">{t.privacy.usage.title}</h2>
            <p className="text-gray-600 leading-relaxed">
              {t.privacy.usage.content}
            </p>
            <ul className="list-disc list-inside text-gray-600 mt-2 space-y-1">
              {t.privacy.usage.items.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </section>

          <section className="bg-white p-6 rounded-xl border border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">{t.privacy.security.title}</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              {t.privacy.security.content}
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              {t.privacy.security.items.map((item, index) => (
                <li key={index}><strong>{item.label}:</strong> {item.desc}</li>
              ))}
            </ul>
          </section>

          <section className="bg-white p-6 rounded-xl border border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">{t.privacy.cookies.title}</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              {t.privacy.cookies.content}
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              {t.privacy.cookies.items.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            <p className="text-gray-600 leading-relaxed mt-4">
              {t.privacy.cookies.note}
            </p>
          </section>

          <section className="bg-white p-6 rounded-xl border border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">{t.privacy.thirdParty.title}</h2>
            <p className="text-gray-600 leading-relaxed">
              {t.privacy.thirdParty.content}
            </p>
          </section>

          <section className="bg-white p-6 rounded-xl border border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">{t.privacy.rights.title}</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              {t.privacy.rights.content}
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              {t.privacy.rights.items.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </section>

          <section className="bg-white p-6 rounded-xl border border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">{t.privacy.children.title}</h2>
            <p className="text-gray-600 leading-relaxed">
              {t.privacy.children.content}
            </p>
          </section>

          <section className="bg-white p-6 rounded-xl border border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">{t.privacy.changes.title}</h2>
            <p className="text-gray-600 leading-relaxed">
              {t.privacy.changes.content}
            </p>
          </section>

          <section className="bg-white p-6 rounded-xl border border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">{t.privacy.contactTitle}</h2>
            <p className="text-gray-600 leading-relaxed">
              {t.privacy.contactContent}
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

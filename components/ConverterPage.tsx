// components/ConverterPage.tsx

'use client';

import React, { useState, useCallback, useEffect } from 'react';
import { FileUploader } from './FileUploader';
import { FilePreview } from './FilePreview';
import { DownloadSection } from './DownloadSection';
import { Header, Footer } from './';
import { WebApplicationJsonLd, FAQJsonLd, BreadcrumbJsonLd, HowToJsonLd } from './JsonLd';
import { useTranslations } from '@/contexts/LanguageContext';
import type { FileItem, ConversionSettings, ConversionResponse, OutputFormat } from '@/types';
import type { ConverterPageTranslations } from '@/lib/i18n/types';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.avif-heicconverter.info';

export interface ConverterPageConfig {
  // 页面翻译内容
  pageTranslations: ConverterPageTranslations;
  // 默认输出格式
  defaultFormat: OutputFormat;
  // 主题颜色
  theme: 'blue' | 'green' | 'purple' | 'orange';
  // 接受的输入格式（用于过滤）
  acceptedInputFormats?: string[];
}

const themeColors = {
  blue: {
    gradient: 'from-blue-50 to-white',
    buttonGradient: 'from-blue-600 to-blue-700',
    buttonHover: 'hover:from-blue-700 hover:to-blue-800',
    shadow: 'shadow-blue-200',
    progress: 'bg-blue-50 border-blue-200',
    progressBar: 'bg-blue-600',
    progressText: 'text-blue-700',
    progressSubText: 'text-blue-600',
    spinner: 'border-blue-600',
    faqBg: 'bg-blue-100',
    faqText: 'text-blue-600',
  },
  green: {
    gradient: 'from-green-50 to-white',
    buttonGradient: 'from-green-600 to-green-700',
    buttonHover: 'hover:from-green-700 hover:to-green-800',
    shadow: 'shadow-green-200',
    progress: 'bg-green-50 border-green-200',
    progressBar: 'bg-green-600',
    progressText: 'text-green-700',
    progressSubText: 'text-green-600',
    spinner: 'border-green-600',
    faqBg: 'bg-green-100',
    faqText: 'text-green-600',
  },
  purple: {
    gradient: 'from-purple-50 to-white',
    buttonGradient: 'from-purple-600 to-purple-700',
    buttonHover: 'hover:from-purple-700 hover:to-purple-800',
    shadow: 'shadow-purple-200',
    progress: 'bg-purple-50 border-purple-200',
    progressBar: 'bg-purple-600',
    progressText: 'text-purple-700',
    progressSubText: 'text-purple-600',
    spinner: 'border-purple-600',
    faqBg: 'bg-purple-100',
    faqText: 'text-purple-600',
  },
  orange: {
    gradient: 'from-orange-50 to-white',
    buttonGradient: 'from-orange-600 to-orange-700',
    buttonHover: 'hover:from-orange-700 hover:to-orange-800',
    shadow: 'shadow-orange-200',
    progress: 'bg-orange-50 border-orange-200',
    progressBar: 'bg-orange-600',
    progressText: 'text-orange-700',
    progressSubText: 'text-orange-600',
    spinner: 'border-orange-600',
    faqBg: 'bg-orange-100',
    faqText: 'text-orange-600',
  },
};

export function ConverterPage({ pageTranslations, defaultFormat, theme }: ConverterPageConfig) {
  const t = useTranslations();
  const colors = themeColors[theme];

  const [files, setFiles] = useState<FileItem[]>([]);
  const [settings, setSettings] = useState<ConversionSettings>({
    format: defaultFormat,
    quality: 92,
    keepMetadata: true,
  });
  const [isConverting, setIsConverting] = useState(false);
  const [progress, setProgress] = useState({ current: 0, total: 0 });

  // 当 defaultFormat 变化时更新设置
  useEffect(() => {
    setSettings(prev => ({ ...prev, format: defaultFormat }));
  }, [defaultFormat]);

  const handleFilesSelected = useCallback((newFiles: FileItem[]) => {
    setFiles((prev) => [...prev, ...newFiles]);
  }, []);

  const handleRemoveFile = useCallback((id: string) => {
    setFiles((prev) => {
      const file = prev.find(f => f.id === id);
      if (file?.preview) {
        URL.revokeObjectURL(file.preview);
      }
      return prev.filter((f) => f.id !== id);
    });
  }, []);

  const handleConvert = async () => {
    const pendingList = files.filter(f => f.status === 'pending');
    if (pendingList.length === 0) return;

    setIsConverting(true);
    setProgress({ current: 0, total: pendingList.length });

    for (let i = 0; i < pendingList.length; i++) {
      const currentFile = pendingList[i];

      setFiles((prev) =>
        prev.map((f) =>
          f.id === currentFile.id ? { ...f, status: 'converting' as const } : f
        )
      );

      try {
        const formData = new FormData();
        formData.append('files', currentFile.file);
        formData.append('format', settings.format);
        formData.append('quality', settings.quality.toString());
        formData.append('keepMetadata', settings.keepMetadata.toString());

        const response = await fetch('/api/convert', {
          method: 'POST',
          body: formData,
        });

        const result: ConversionResponse = await response.json();

        if (result.success && result.files && result.files[0]) {
          setFiles((prev) =>
            prev.map((f) =>
              f.id === currentFile.id
                ? { ...f, status: 'completed' as const, result: result.files![0] }
                : f
            )
          );
        } else {
          setFiles((prev) =>
            prev.map((f) =>
              f.id === currentFile.id
                ? { ...f, status: 'error' as const, error: result.message || t.status.errorMessage }
                : f
            )
          );
        }
      } catch (error) {
        console.error('Conversion error:', error);
        setFiles((prev) =>
          prev.map((f) =>
            f.id === currentFile.id
              ? { ...f, status: 'error' as const, error: t.status.errorMessage }
              : f
          )
        );
      }

      setProgress({ current: i + 1, total: pendingList.length });
    }

    setIsConverting(false);
  };

  const handleReset = () => {
    files.forEach((f) => {
      if (f.preview) {
        URL.revokeObjectURL(f.preview);
      }
    });
    setFiles([]);
  };

  const handleClearAll = useCallback(() => {
    files.forEach((f) => {
      if (f.preview) {
        URL.revokeObjectURL(f.preview);
      }
    });
    setFiles([]);
  }, [files]);

  const pendingFiles = files.filter((f) => f.status === 'pending');
  const completedFiles = files.filter((f) => f.status === 'completed');
  const canConvert = pendingFiles.length > 0 && !isConverting;

  // 获取输出格式显示名称
  const formatDisplayName = settings.format.toUpperCase();

  // Get current page path for structured data
  const pagePath = typeof window !== 'undefined' ? window.location.pathname : '';

  return (
    <main className={`min-h-screen bg-gradient-to-b ${colors.gradient}`}>
      {/* JSON-LD Structured Data */}
      <WebApplicationJsonLd
        name={pageTranslations.metaTitle}
        description={pageTranslations.metaDescription}
        url={`${SITE_URL}${pagePath}`}
        applicationCategory="UtilitiesApplication"
        operatingSystem="Any"
      />
      <FAQJsonLd questions={pageTranslations.faq.items} />
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: SITE_URL },
          { name: pageTranslations.title, url: `${SITE_URL}${pagePath}` },
        ]}
      />
      <HowToJsonLd
        name={`How to ${pageTranslations.title}`}
        description={pageTranslations.metaDescription}
        steps={[
          { name: 'Upload Your Images', text: 'Drag and drop your images or click to browse. You can upload up to 100 files at once for batch conversion.' },
          { name: 'Start Conversion', text: `Click the Convert button to start processing. All conversion happens in your browser for maximum privacy.` },
          { name: 'Download Results', text: 'Download converted images individually or as a ZIP file. Original quality and EXIF metadata are preserved.' },
        ]}
      />

      <Header variant="full" theme={theme === 'purple' ? 'purple' : 'blue'} />

      <div className="max-w-5xl mx-auto px-4 py-10 md:py-16">
        {/* Hero Section */}
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            {pageTranslations.title}
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {pageTranslations.subtitle}
          </p>
        </div>

        {/* Upload Area */}
        <FileUploader
          onFilesSelected={handleFilesSelected}
          disabled={isConverting}
        />

        {/* File Preview */}
        <FilePreview
          files={files}
          onRemove={handleRemoveFile}
          onClearAll={handleClearAll}
        />

        {/* Output Format Info */}
        {files.length > 0 && pendingFiles.length > 0 && (
          <div className="mt-6 p-4 bg-white border border-gray-200 rounded-xl">
            <div className="flex items-center justify-between">
              <span className="text-gray-700 font-medium">{t.settings.outputFormat}</span>
              <span className={`px-3 py-1 rounded-lg ${colors.faqBg} ${colors.faqText} font-semibold`}>
                {formatDisplayName}
              </span>
            </div>
          </div>
        )}

        {/* Convert Button */}
        {canConvert && (
          <div className="mt-8">
            <button
              onClick={handleConvert}
              disabled={!canConvert}
              className={`w-full py-4 px-6 bg-gradient-to-r ${colors.buttonGradient}
                         ${colors.buttonHover}
                         disabled:from-gray-400 disabled:to-gray-400 disabled:cursor-not-allowed
                         text-white text-lg font-semibold rounded-xl
                         transition-all duration-200 shadow-lg ${colors.shadow}
                         hover:shadow-xl
                         flex items-center justify-center gap-3`}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              {t.home.convertButton} ({pendingFiles.length} {t.home.images})
            </button>
          </div>
        )}

        {/* Progress */}
        {isConverting && (
          <div className={`mt-8 p-6 ${colors.progress} border rounded-2xl`}>
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-3">
                <div className={`w-8 h-8 border-2 ${colors.spinner} border-t-transparent rounded-full animate-spin`} />
                <span className={`text-base font-semibold ${colors.progressText}`}>
                  {t.home.converting}
                </span>
              </div>
              <span className={`text-sm ${colors.progressSubText} font-medium`}>
                {progress.current} / {progress.total}
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div
                className={`${colors.progressBar} h-2.5 rounded-full transition-all duration-300 ease-out`}
                style={{ width: `${progress.total > 0 ? (progress.current / progress.total) * 100 : 0}%` }}
              />
            </div>
            <p className={`text-sm ${colors.progressSubText} mt-3`}>
              {t.home.pleaseWait}
            </p>
          </div>
        )}

        {/* Download Section */}
        <DownloadSection
          files={files}
          onReset={handleReset}
        />

        {/* Ad Banner Placeholder */}
        <div className="mt-12 p-6 bg-gray-50 border border-gray-200 border-dashed rounded-xl text-center">
          <p className="text-sm text-gray-400">{t.home.adPlaceholder}</p>
        </div>

        {/* FAQ Section */}
        <section className="mt-16" id="faq">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            {pageTranslations.faq.title}
          </h2>

          <div className="grid gap-6 md:grid-cols-2">
            {pageTranslations.faq.items.map((item, index) => (
              <div key={index} className="p-6 bg-white border border-gray-200 rounded-xl">
                <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <span className={`w-8 h-8 ${colors.faqBg} rounded-lg flex items-center justify-center ${colors.faqText} text-sm font-bold`}>Q</span>
                  {item.question}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.answer}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Features Section */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">{t.features.title}</h2>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="text-center p-6">
              <div className="w-14 h-14 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{t.features.batchTitle}</h3>
              <p className="text-gray-600 text-sm">
                {t.features.batchDesc}
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{t.features.metadataTitle}</h3>
              <p className="text-gray-600 text-sm">
                {t.features.metadataDesc}
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-14 h-14 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{t.features.securityTitle}</h3>
              <p className="text-gray-600 text-sm">
                {t.features.securityDesc}
              </p>
            </div>
          </div>
        </section>
      </div>

      <Footer variant="full" />
    </main>
  );
}

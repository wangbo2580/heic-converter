// app/avif/page.tsx

'use client';

import React, { useState, useCallback } from 'react';
import { FileUploader } from '@/components/FileUploader';
import { FilePreview } from '@/components/FilePreview';
import { ConversionSettings } from '@/components/ConversionSettings';
import { DownloadSection } from '@/components/DownloadSection';
import { Header, Footer } from '@/components';
import { WebApplicationJsonLd, FAQJsonLd, BreadcrumbJsonLd, HowToJsonLd } from '@/components/JsonLd';
import { DEFAULT_SETTINGS } from '@/lib/constants';
import { useTranslations } from '@/contexts/LanguageContext';
import type { FileItem, ConversionSettings as Settings, ConversionResponse } from '@/types';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.avif-heicconverter.info';

export default function AvifPage() {
  const t = useTranslations();
  const [files, setFiles] = useState<FileItem[]>([]);
  const [settings, setSettings] = useState<Settings>(DEFAULT_SETTINGS);
  const [isConverting, setIsConverting] = useState(false);
  const [progress, setProgress] = useState({ current: 0, total: 0 });

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
    setSettings(DEFAULT_SETTINGS);
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
  const hasFiles = files.length > 0;
  const canConvert = pendingFiles.length > 0 && !isConverting;
  const isCompleted = completedFiles.length > 0 && completedFiles.length === files.length;

  return (
    <main className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      {/* JSON-LD Structured Data */}
      <WebApplicationJsonLd
        name="Free AVIF Converter - Convert to JPG/PNG/WebP"
        description="Convert AVIF images to JPG, PNG, or WebP format. 100% free, batch conversion up to 100 files, no signup required."
        url={`${SITE_URL}/avif`}
        applicationCategory="UtilitiesApplication"
        operatingSystem="Any"
      />
      <FAQJsonLd
        questions={[
          {
            question: 'What is AVIF format?',
            answer: 'AVIF (AV1 Image File Format) is a modern image format that offers superior compression and quality compared to JPEG and PNG. It is based on the AV1 video codec and provides up to 50% better compression than JPEG.',
          },
          {
            question: 'Why convert AVIF to JPG or PNG?',
            answer: 'While AVIF offers excellent compression, not all software and platforms support it yet. Converting to JPG or PNG ensures your images can be viewed on any device or uploaded to any website.',
          },
          {
            question: 'Is this AVIF converter really free?',
            answer: 'Yes, our AVIF converter is 100% free with no hidden costs. You can convert unlimited files without registration or watermarks.',
          },
          {
            question: 'Is my data safe when converting AVIF files?',
            answer: 'Absolutely. All image processing happens directly in your browser. Your files are never uploaded to our servers, ensuring complete privacy and security.',
          },
        ]}
      />
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: SITE_URL },
          { name: 'AVIF Converter', url: `${SITE_URL}/avif` },
        ]}
      />
      <HowToJsonLd
        name="How to Convert AVIF Images"
        description="Convert AVIF images to JPG, PNG, or WebP format in 3 easy steps"
        steps={[
          { name: 'Upload AVIF Files', text: 'Drag and drop your AVIF images or click to browse. You can upload up to 100 files at once.' },
          { name: 'Choose Output Format', text: 'Select your desired output format: JPG for universal compatibility, PNG for lossless quality, or WebP for modern browsers.' },
          { name: 'Download Converted Images', text: 'Click Convert and download your images individually or as a ZIP file.' },
        ]}
      />

      <Header variant="full" theme="purple" />

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-4 py-10 md:py-16">
        {/* Hero Section */}
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            {t.avif.title}
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t.avif.subtitle}
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

        {/* Conversion Settings */}
        {hasFiles && !isCompleted && (
          <ConversionSettings
            settings={settings}
            onChange={setSettings}
            disabled={isConverting}
          />
        )}

        {/* Convert Button */}
        {canConvert && (
          <div className="mt-8">
            <button
              onClick={handleConvert}
              disabled={!canConvert}
              className="w-full py-4 px-6 bg-gradient-to-r from-purple-600 to-purple-700
                         hover:from-purple-700 hover:to-purple-800
                         disabled:from-gray-400 disabled:to-gray-400 disabled:cursor-not-allowed
                         text-white text-lg font-semibold rounded-xl
                         transition-all duration-200 shadow-lg shadow-purple-200
                         hover:shadow-xl hover:shadow-purple-200
                         flex items-center justify-center gap-3"
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
          <div className="mt-8 p-6 bg-purple-50 border border-purple-200 rounded-2xl">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 border-2 border-purple-600 border-t-transparent rounded-full animate-spin" />
                <span className="text-base font-semibold text-purple-700">
                  {t.home.converting}
                </span>
              </div>
              <span className="text-sm text-purple-600 font-medium">
                {progress.current} / {progress.total}
              </span>
            </div>
            <div className="w-full bg-purple-200 rounded-full h-2.5">
              <div
                className="bg-purple-600 h-2.5 rounded-full transition-all duration-300 ease-out"
                style={{ width: `${progress.total > 0 ? (progress.current / progress.total) * 100 : 0}%` }}
              />
            </div>
            <p className="text-sm text-purple-600 mt-3">
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

        {/* SEO Content / FAQ */}
        <section className="mt-16" id="faq">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">{t.avif.faqTitle}</h2>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="p-6 bg-white border border-gray-200 rounded-xl">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">{t.avif.whatIsAvif}</h3>
              <p className="text-gray-600 leading-relaxed">
                {t.avif.whatIsAvifAnswer}
              </p>
            </div>

            <div className="p-6 bg-white border border-gray-200 rounded-xl">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">{t.avif.whyConvert}</h3>
              <p className="text-gray-600 leading-relaxed">
                {t.avif.whyConvertAnswer}
              </p>
            </div>

            <div className="p-6 bg-white border border-gray-200 rounded-xl">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">{t.avif.advantages}</h3>
              <p className="text-gray-600 leading-relaxed">
                {t.avif.advantagesAnswer}
              </p>
            </div>

            <div className="p-6 bg-white border border-gray-200 rounded-xl">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">{t.avif.qualityLoss}</h3>
              <p className="text-gray-600 leading-relaxed">
                {t.avif.qualityLossAnswer}
              </p>
            </div>
          </div>
        </section>
      </div>

      <Footer variant="full" />
    </main>
  );
}

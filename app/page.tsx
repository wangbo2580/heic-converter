// app/page.tsx

'use client';

import React, { useState, useCallback } from 'react';
import { FileUploader } from '@/components/FileUploader';
import { FilePreview } from '@/components/FilePreview';
import { ConversionSettings } from '@/components/ConversionSettings';
import { DownloadSection } from '@/components/DownloadSection';
import { Header, Footer } from '@/components';
import { DEFAULT_SETTINGS } from '@/lib/constants';
import { useTranslations } from '@/contexts/LanguageContext';
import type { FileItem, ConversionSettings as Settings, ConversionResponse } from '@/types';

export default function HomePage() {
  const t = useTranslations();
  const [files, setFiles] = useState<FileItem[]>([]);
  const [settings, setSettings] = useState<Settings>(DEFAULT_SETTINGS);
  const [isConverting, setIsConverting] = useState(false);
  const [progress, setProgress] = useState({ current: 0, total: 0 });

  // 添加文件
  const handleFilesSelected = useCallback((newFiles: FileItem[]) => {
    setFiles((prev) => [...prev, ...newFiles]);
  }, []);

  // 移除文件
  const handleRemoveFile = useCallback((id: string) => {
    setFiles((prev) => {
      const file = prev.find(f => f.id === id);
      if (file?.preview) {
        URL.revokeObjectURL(file.preview);
      }
      return prev.filter((f) => f.id !== id);
    });
  }, []);

  // 开始转换 - 逐个文件处理以显示真实进度
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

  // 重置
  const handleReset = () => {
    files.forEach((f) => {
      if (f.preview) {
        URL.revokeObjectURL(f.preview);
      }
    });
    setFiles([]);
    setSettings(DEFAULT_SETTINGS);
  };

  // 清空全部待转换文件
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
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Header variant="full" theme="blue" />

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-4 py-10 md:py-16">
        {/* Hero Section */}
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            {t.home.title}
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t.home.subtitle}
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
              className="w-full py-4 px-6 bg-gradient-to-r from-blue-600 to-blue-700
                         hover:from-blue-700 hover:to-blue-800
                         disabled:from-gray-400 disabled:to-gray-400 disabled:cursor-not-allowed
                         text-white text-lg font-semibold rounded-xl
                         transition-all duration-200 shadow-lg shadow-blue-200
                         hover:shadow-xl hover:shadow-blue-200
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
          <div className="mt-8 p-6 bg-blue-50 border border-blue-200 rounded-2xl">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 border-2 border-blue-600 border-t-transparent rounded-full animate-spin" />
                <span className="text-base font-semibold text-blue-700">
                  {t.home.converting}
                </span>
              </div>
              <span className="text-sm text-blue-600 font-medium">
                {progress.current} / {progress.total}
              </span>
            </div>
            <div className="w-full bg-blue-200 rounded-full h-2.5">
              <div
                className="bg-blue-600 h-2.5 rounded-full transition-all duration-300 ease-out"
                style={{ width: `${progress.total > 0 ? (progress.current / progress.total) * 100 : 0}%` }}
              />
            </div>
            <p className="text-sm text-blue-600 mt-3">
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
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">{t.faq.title}</h2>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="p-6 bg-white border border-gray-200 rounded-xl">
              <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <span className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 text-sm font-bold">Q</span>
                {t.faq.heicTitle}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {t.faq.heicAnswer}
              </p>
            </div>

            <div className="p-6 bg-white border border-gray-200 rounded-xl">
              <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <span className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 text-sm font-bold">Q</span>
                {t.faq.avifTitle}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {t.faq.avifAnswer}
              </p>
            </div>

            <div className="p-6 bg-white border border-gray-200 rounded-xl">
              <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <span className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 text-sm font-bold">Q</span>
                {t.faq.qualityTitle}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {t.faq.qualityAnswer}
              </p>
            </div>

            <div className="p-6 bg-white border border-gray-200 rounded-xl">
              <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <span className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 text-sm font-bold">Q</span>
                {t.faq.securityTitle}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {t.faq.securityAnswer}
              </p>
            </div>
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

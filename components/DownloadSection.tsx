// components/DownloadSection.tsx

'use client';

import React, { useState } from 'react';
import JSZip from 'jszip';
import { saveAs } from 'file-saver';
import { formatFileSize } from '@/lib/constants';
import type { FileItem } from '@/types';

interface DownloadSectionProps {
  files: FileItem[];
  onReset: () => void;
}

export function DownloadSection({ files, onReset }: DownloadSectionProps) {
  const [isDownloading, setIsDownloading] = useState(false);
  const completedFiles = files.filter(f => f.status === 'completed' && f.result);

  if (completedFiles.length === 0) return null;

  const totalSize = completedFiles.reduce(
    (acc, f) => acc + (f.result?.convertedSize || 0),
    0
  );

  const originalSize = completedFiles.reduce(
    (acc, f) => acc + (f.result?.originalSize || 0),
    0
  );

  const savedSize = originalSize - totalSize;
  const savedPercent = originalSize > 0 ? Math.round((savedSize / originalSize) * 100) : 0;

  // 下载单个文件
  const downloadSingle = (file: FileItem) => {
    if (!file.result) return;

    const byteCharacters = atob(file.result.data);
    const byteNumbers = new Array(byteCharacters.length);
    for (let i = 0; i < byteCharacters.length; i++) {
      byteNumbers[i] = byteCharacters.charCodeAt(i);
    }
    const byteArray = new Uint8Array(byteNumbers);

    // 根据格式确定MIME类型
    const ext = file.result.convertedName.split('.').pop()?.toLowerCase();
    let mimeType = 'image/jpeg';
    if (ext === 'png') mimeType = 'image/png';
    else if (ext === 'webp') mimeType = 'image/webp';
    else if (ext === 'avif') mimeType = 'image/avif';

    const blob = new Blob([byteArray], { type: mimeType });
    saveAs(blob, file.result.convertedName);
  };

  // 下载全部为ZIP
  const downloadAll = async () => {
    setIsDownloading(true);
    try {
      const zip = new JSZip();

      completedFiles.forEach((file) => {
        if (file.result) {
          // Base64转Uint8Array
          const byteCharacters = atob(file.result.data);
          const byteNumbers = new Array(byteCharacters.length);
          for (let i = 0; i < byteCharacters.length; i++) {
            byteNumbers[i] = byteCharacters.charCodeAt(i);
          }
          const byteArray = new Uint8Array(byteNumbers);

          zip.file(file.result.convertedName, byteArray);
        }
      });

      const content = await zip.generateAsync({ type: 'blob' });
      const timestamp = new Date().toISOString().slice(0, 10);
      saveAs(content, `converted_images_${timestamp}.zip`);
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <div className="mt-8 p-6 bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 rounded-2xl">
      {/* 成功标题 */}
      <div className="flex items-start justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
            <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </div>
          <div>
            <h3 className="text-xl font-bold text-green-800">
              转换完成！
            </h3>
            <p className="text-sm text-green-600 mt-0.5">
              已成功转换 {completedFiles.length} 张图片
            </p>
          </div>
        </div>

        <button
          onClick={onReset}
          className="text-sm text-gray-500 hover:text-gray-700 flex items-center gap-1.5 transition-colors"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
          重新开始
        </button>
      </div>

      {/* 统计信息 */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="bg-white/60 rounded-xl p-4 text-center">
          <p className="text-2xl font-bold text-gray-900">{completedFiles.length}</p>
          <p className="text-xs text-gray-500 mt-1">转换成功</p>
        </div>
        <div className="bg-white/60 rounded-xl p-4 text-center">
          <p className="text-2xl font-bold text-gray-900">{formatFileSize(totalSize)}</p>
          <p className="text-xs text-gray-500 mt-1">总大小</p>
        </div>
        <div className="bg-white/60 rounded-xl p-4 text-center">
          <p className="text-2xl font-bold text-green-600">
            {savedPercent > 0 ? `-${savedPercent}%` : '0%'}
          </p>
          <p className="text-xs text-gray-500 mt-1">体积变化</p>
        </div>
      </div>

      {/* 下载全部按钮 */}
      <button
        onClick={downloadAll}
        disabled={isDownloading}
        className="w-full py-4 px-6 bg-green-600 hover:bg-green-700 disabled:bg-green-400
                   text-white text-lg font-semibold rounded-xl transition-all duration-200
                   shadow-lg shadow-green-200 hover:shadow-xl hover:shadow-green-200
                   flex items-center justify-center gap-3
                   disabled:cursor-not-allowed"
      >
        {isDownloading ? (
          <>
            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
            正在打包...
          </>
        ) : (
          <>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            下载全部 (ZIP)
          </>
        )}
      </button>

      {/* 单独下载列表 */}
      {completedFiles.length > 1 && (
        <div className="mt-6 pt-6 border-t border-green-200">
          <p className="text-sm font-medium text-gray-700 mb-3">或单独下载：</p>
          <div className="flex flex-wrap gap-2">
            {completedFiles.slice(0, 10).map((file) => (
              <button
                key={file.id}
                onClick={() => downloadSingle(file)}
                className="inline-flex items-center gap-1.5 px-3 py-2 bg-white hover:bg-gray-50
                           text-sm text-gray-700 rounded-lg border border-gray-200
                           transition-colors max-w-[200px]"
              >
                <svg className="w-4 h-4 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                        d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                <span className="truncate">{file.result?.convertedName}</span>
              </button>
            ))}
            {completedFiles.length > 10 && (
              <span className="inline-flex items-center px-3 py-2 text-sm text-gray-500">
                +{completedFiles.length - 10} 更多...
              </span>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

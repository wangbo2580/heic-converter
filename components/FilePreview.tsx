// components/FilePreview.tsx

'use client';

import React, { useState, useCallback } from 'react';
import { formatFileSize } from '@/lib/constants';
import { useTranslations } from '@/contexts/LanguageContext';
import type { FileItem } from '@/types';

interface FilePreviewProps {
  files: FileItem[];
  onRemove: (id: string) => void;
  onClearAll?: () => void;
}

// 检查是否为HEIC/HEIF格式（浏览器通常无法预览）
function isHeicFile(file: File): boolean {
  const name = file.name.toLowerCase();
  return name.endsWith('.heic') || name.endsWith('.heif') ||
         file.type === 'image/heic' || file.type === 'image/heif';
}

export function FilePreview({ files, onRemove, onClearAll }: FilePreviewProps) {
  const t = useTranslations();
  const [failedPreviews, setFailedPreviews] = useState<Set<string>>(new Set());

  // 处理图片加载失败
  const handleImageError = useCallback((id: string) => {
    setFailedPreviews(prev => new Set(prev).add(id));
  }, []);

  if (files.length === 0) return null;

  const totalSize = files.reduce((acc, f) => acc + f.file.size, 0);
  const pendingCount = files.filter(f => f.status === 'pending').length;

  return (
    <div className="mt-8">
      {/* 标题栏 */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <h3 className="text-lg font-semibold text-gray-900">
            {t.home.selected}
          </h3>
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
            {files.length} {t.home.images}
          </span>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-sm text-gray-500">
            {t.home.totalSize}: {formatFileSize(totalSize)}
          </span>
          {pendingCount > 0 && onClearAll && (
            <button
              onClick={onClearAll}
              className="text-sm text-red-500 hover:text-red-700 font-medium transition-colors flex items-center gap-1"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
              {t.home.clearAll}
            </button>
          )}
        </div>
      </div>

      {/* 图片网格 */}
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3">
        {files.map((item) => (
          <div
            key={item.id}
            className="relative group aspect-square rounded-xl overflow-hidden bg-gray-100 shadow-sm hover:shadow-md transition-shadow"
          >
            {/* 预览图 - 带fallback处理 */}
            {(failedPreviews.has(item.id) || isHeicFile(item.file)) && !item.preview?.startsWith('data:') ? (
              // HEIC文件或加载失败时显示占位图
              <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex flex-col items-center justify-center">
                <svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span className="mt-1 text-xs text-gray-500 font-medium">
                  {item.file.name.split('.').pop()?.toUpperCase()}
                </span>
              </div>
            ) : (
              <img
                src={item.preview}
                alt={item.file.name}
                className="w-full h-full object-cover"
                onError={() => handleImageError(item.id)}
              />
            )}

            {/* 状态遮罩 - 转换中 */}
            {item.status === 'converting' && (
              <div className="absolute inset-0 bg-black/60 backdrop-blur-sm flex flex-col items-center justify-center">
                <div className="w-8 h-8 border-2 border-white border-t-transparent rounded-full animate-spin" />
                <span className="mt-2 text-xs text-white font-medium">{t.status.converting}</span>
              </div>
            )}

            {/* 状态遮罩 - 完成 */}
            {item.status === 'completed' && (
              <div className="absolute top-2 right-2 z-10">
                <div className="w-7 h-7 bg-green-500 rounded-full flex items-center justify-center shadow-lg">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            )}

            {/* 状态遮罩 - 错误 */}
            {item.status === 'error' && (
              <div className="absolute inset-0 bg-red-500/70 backdrop-blur-sm flex flex-col items-center justify-center p-2">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                <span className="mt-1 text-xs text-white text-center line-clamp-2">
                  {item.error || t.status.errorMessage}
                </span>
              </div>
            )}

            {/* 删除按钮 - 仅pending状态显示 */}
            {item.status === 'pending' && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onRemove(item.id);
                }}
                className="absolute top-2 right-2 w-7 h-7 bg-black/60 hover:bg-red-500
                           rounded-full flex items-center justify-center
                           opacity-0 group-hover:opacity-100 transition-all duration-200
                           transform scale-90 group-hover:scale-100"
                title="移除"
              >
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            )}

            {/* 文件信息 */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-2 pt-6">
              <p className="text-xs text-white font-medium truncate" title={item.file.name}>
                {item.file.name}
              </p>
              <p className="text-xs text-white/70">
                {formatFileSize(item.file.size)}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

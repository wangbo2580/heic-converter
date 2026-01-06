// components/FileUploader.tsx

'use client';

import React, { useCallback, useState } from 'react';
import { SUPPORTED_EXTENSIONS, MAX_FILE_SIZE, MAX_FILES_COUNT, generateId } from '@/lib/constants';
import { useTranslations } from '@/contexts/LanguageContext';
import type { FileItem } from '@/types';

interface FileUploaderProps {
  onFilesSelected: (files: FileItem[]) => void;
  disabled?: boolean;
}

export function FileUploader({ onFilesSelected, disabled }: FileUploaderProps) {
  const t = useTranslations();
  const [isDragging, setIsDragging] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const validateFiles = useCallback((fileList: FileList | File[]): FileItem[] => {
    const files = Array.from(fileList);
    const validFiles: FileItem[] = [];
    const errors: string[] = [];

    if (files.length > MAX_FILES_COUNT) {
      setError(`Maximum ${MAX_FILES_COUNT} files per batch`);
      return [];
    }

    files.forEach((file) => {
      const ext = '.' + file.name.split('.').pop()?.toLowerCase();

      if (!SUPPORTED_EXTENSIONS.includes(ext)) {
        errors.push(`${file.name}: Unsupported format`);
        return;
      }

      if (file.size > MAX_FILE_SIZE) {
        errors.push(`${file.name}: File exceeds 50MB`);
        return;
      }

      validFiles.push({
        id: generateId(),
        file,
        preview: URL.createObjectURL(file),
        status: 'pending',
        progress: 0,
      });
    });

    if (errors.length > 0) {
      setError(errors.join('\n'));
    } else {
      setError(null);
    }

    return validFiles;
  }, []);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const validFiles = validateFiles(e.target.files);
      if (validFiles.length > 0) {
        onFilesSelected(validFiles);
      }
    }
    e.target.value = '';
  };

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (!disabled) {
      setIsDragging(true);
    }
  }, [disabled]);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);

    if (disabled) return;

    const files = e.dataTransfer.files;
    if (files && files.length > 0) {
      const validFiles = validateFiles(files);
      if (validFiles.length > 0) {
        onFilesSelected(validFiles);
      }
    }
  }, [disabled, onFilesSelected, validateFiles]);

  const acceptFormats = SUPPORTED_EXTENSIONS.join(',');

  return (
    <div className="w-full">
      <div
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        className={`
          relative border-2 border-dashed rounded-2xl p-8 md:p-12 text-center
          transition-all duration-200 ease-in-out
          ${isDragging
            ? 'border-blue-500 bg-blue-50 scale-[1.02]'
            : 'border-gray-300 hover:border-blue-400 hover:bg-gray-50'
          }
          ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
        `}
      >
        <input
          type="file"
          multiple
          accept={acceptFormats}
          onChange={handleFileChange}
          disabled={disabled}
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer disabled:cursor-not-allowed"
        />

        <div className="space-y-4">
          <div className={`
            mx-auto w-20 h-20 rounded-full flex items-center justify-center
            transition-colors duration-200
            ${isDragging ? 'bg-blue-100' : 'bg-gray-100'}
          `}>
            <svg
              className={`w-10 h-10 transition-colors duration-200 ${isDragging ? 'text-blue-500' : 'text-gray-400'}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
              />
            </svg>
          </div>

          <div>
            <p className="text-lg md:text-xl font-semibold text-gray-700">
              {t.home.uploadTitle}
            </p>
            <p className="mt-1 text-gray-500">
              {t.home.uploadSubtitle}
            </p>
            <p className="mt-3 text-sm text-gray-400">
              {t.home.supportedFormats}
            </p>
            <p className="text-sm text-gray-400">
              {t.home.maxFileSize}
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 pt-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-green-50 text-green-700 rounded-full text-sm font-medium">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              {t.features.batchTitle}
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              {t.features.metadataTitle}
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-purple-50 text-purple-700 rounded-full text-sm font-medium">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Free
            </span>
          </div>
        </div>
      </div>

      {error && (
        <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-xl">
          <div className="flex items-start gap-3">
            <svg className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
            <div className="text-sm text-red-600 whitespace-pre-line">{error}</div>
          </div>
        </div>
      )}
    </div>
  );
}

// lib/constants.ts

import type { FormatOption, QualityPreset, ConversionSettings } from '@/types';

export const SUPPORTED_INPUT_FORMATS = [
  'image/heic',
  'image/heif',
  'image/avif',
  'image/jpeg',
  'image/png',
  'image/webp',
];

export const SUPPORTED_EXTENSIONS = [
  '.heic',
  '.heif',
  '.avif',
  '.jpg',
  '.jpeg',
  '.png',
  '.webp',
];

export const MAX_FILE_SIZE = 50 * 1024 * 1024; // 50MB
export const MAX_FILES_COUNT = 100;

export const DEFAULT_SETTINGS: ConversionSettings = {
  format: 'jpeg',
  quality: 92,
  keepMetadata: true,
};

export const QUALITY_PRESETS: QualityPreset[] = [
  { label: '高质量', value: 95, description: '最佳画质，文件较大' },
  { label: '标准', value: 90, description: '平衡画质和大小' },
  { label: '压缩', value: 80, description: '较小文件，画质略降' },
];

export const FORMAT_OPTIONS: FormatOption[] = [
  {
    value: 'jpeg',
    label: 'JPG',
    description: '通用格式，兼容性最好',
    supportsQuality: true,
  },
  {
    value: 'png',
    label: 'PNG',
    description: '无损格式，支持透明',
    supportsQuality: false,
  },
  {
    value: 'webp',
    label: 'WebP',
    description: '现代格式，文件更小',
    supportsQuality: true,
  },
  {
    value: 'avif',
    label: 'AVIF',
    description: '新一代格式，压缩率最高',
    supportsQuality: true,
  },
];

// 文件大小格式化
export function formatFileSize(bytes: number): string {
  if (bytes < 1024) return bytes + ' B';
  if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB';
  return (bytes / (1024 * 1024)).toFixed(1) + ' MB';
}

// 生成唯一ID
export function generateId(): string {
  return Math.random().toString(36).substring(2, 9);
}

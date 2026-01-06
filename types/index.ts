// types/index.ts

export type OutputFormat = 'jpeg' | 'png' | 'webp' | 'avif';

export interface FileItem {
  id: string;
  file: File;
  preview: string;
  status: 'pending' | 'converting' | 'completed' | 'error';
  progress: number;
  error?: string;
  result?: ConvertedFile;
}

export interface ConvertedFile {
  originalName: string;
  convertedName: string;
  originalSize: number;
  convertedSize: number;
  width: number;
  height: number;
  data: string; // base64
}

export interface ConversionSettings {
  format: OutputFormat;
  quality: number;
  keepMetadata: boolean;
}

export interface ConversionResponse {
  success: boolean;
  files?: ConvertedFile[];
  totalOriginalSize?: number;
  totalConvertedSize?: number;
  processingTime?: number;
  error?: string;
  message?: string;
}

export interface ConversionState {
  files: FileItem[];
  settings: ConversionSettings;
  isConverting: boolean;
  isCompleted: boolean;
}

export interface FormatOption {
  value: OutputFormat;
  label: string;
  description: string;
  supportsQuality: boolean;
}

export interface QualityPreset {
  label: string;
  value: number;
  description: string;
}

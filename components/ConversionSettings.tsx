// components/ConversionSettings.tsx

'use client';

import React from 'react';
import { FORMAT_OPTIONS, QUALITY_PRESETS } from '@/lib/constants';
import type { ConversionSettings as Settings, OutputFormat } from '@/types';

interface ConversionSettingsProps {
  settings: Settings;
  onChange: (settings: Settings) => void;
  disabled?: boolean;
}

export function ConversionSettings({ settings, onChange, disabled }: ConversionSettingsProps) {
  const selectedFormat = FORMAT_OPTIONS.find(f => f.value === settings.format);
  const showQualitySlider = selectedFormat?.supportsQuality ?? true;

  return (
    <div className="mt-8 p-6 bg-white border border-gray-200 rounded-2xl shadow-sm">
      <h3 className="text-lg font-semibold text-gray-900 mb-6 flex items-center gap-2">
        <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
        </svg>
        转换设置
      </h3>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* 输出格式 */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">
            输出格式
          </label>
          <div className="flex gap-2">
            {FORMAT_OPTIONS.map((format) => (
              <button
                key={format.value}
                onClick={() => onChange({ ...settings, format: format.value as OutputFormat })}
                disabled={disabled}
                className={`
                  flex-1 px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-200
                  ${settings.format === format.value
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-200'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }
                  disabled:opacity-50 disabled:cursor-not-allowed
                `}
              >
                {format.label}
              </button>
            ))}
          </div>
          <p className="mt-3 text-sm text-gray-500 flex items-center gap-1.5">
            <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
            {selectedFormat?.description}
          </p>
        </div>

        {/* 质量设置 */}
        <div className={showQualitySlider ? '' : 'opacity-50'}>
          <label className="block text-sm font-medium text-gray-700 mb-3">
            输出质量
            <span className="ml-2 text-blue-600 font-bold">{settings.quality}%</span>
          </label>

          <div className="relative">
            <input
              type="range"
              min="60"
              max="100"
              value={settings.quality}
              onChange={(e) => onChange({ ...settings, quality: parseInt(e.target.value) })}
              disabled={disabled || !showQualitySlider}
              className="w-full h-2 bg-gray-200 rounded-full appearance-none cursor-pointer
                         disabled:opacity-50 disabled:cursor-not-allowed
                         [&::-webkit-slider-thumb]:appearance-none
                         [&::-webkit-slider-thumb]:w-5
                         [&::-webkit-slider-thumb]:h-5
                         [&::-webkit-slider-thumb]:bg-blue-600
                         [&::-webkit-slider-thumb]:rounded-full
                         [&::-webkit-slider-thumb]:cursor-pointer
                         [&::-webkit-slider-thumb]:shadow-md
                         [&::-webkit-slider-thumb]:transition-transform
                         [&::-webkit-slider-thumb]:hover:scale-110"
            />
          </div>

          <div className="flex justify-between mt-3 gap-2">
            {QUALITY_PRESETS.map((preset) => (
              <button
                key={preset.value}
                onClick={() => onChange({ ...settings, quality: preset.value })}
                disabled={disabled || !showQualitySlider}
                className={`
                  flex-1 px-2 py-1.5 rounded-lg text-xs font-medium transition-colors
                  ${settings.quality === preset.value
                    ? 'bg-blue-100 text-blue-700'
                    : 'text-gray-500 hover:bg-gray-100 hover:text-gray-700'
                  }
                  disabled:opacity-50 disabled:cursor-not-allowed
                `}
                title={preset.description}
              >
                {preset.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* 元数据选项 */}
      <div className="mt-6 pt-6 border-t border-gray-100">
        <label className="flex items-center gap-3 cursor-pointer group">
          <div className="relative">
            <input
              type="checkbox"
              checked={settings.keepMetadata}
              onChange={(e) => onChange({ ...settings, keepMetadata: e.target.checked })}
              disabled={disabled}
              className="sr-only peer"
            />
            <div className="w-5 h-5 border-2 border-gray-300 rounded-md peer-checked:bg-blue-600 peer-checked:border-blue-600 transition-colors">
              <svg
                className={`w-full h-full text-white p-0.5 ${settings.keepMetadata ? 'block' : 'hidden'}`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
          <div>
            <span className="text-sm font-medium text-gray-900 group-hover:text-blue-600 transition-colors">
              保留照片元数据 (EXIF)
            </span>
            <p className="text-xs text-gray-500 mt-0.5">
              包含拍摄日期、相机型号、GPS位置等信息
            </p>
          </div>
        </label>
      </div>
    </div>
  );
}

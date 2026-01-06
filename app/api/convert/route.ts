// app/api/convert/route.ts

import { NextRequest, NextResponse } from 'next/server';
import sharp from 'sharp';
import {
  MAX_FILE_SIZE,
  MAX_FILES_COUNT,
  SUPPORTED_EXTENSIONS
} from '@/lib/constants';
import type { OutputFormat, ConvertedFile } from '@/types';

export const runtime = 'nodejs';
export const maxDuration = 60; // Vercel Pro: 60s, Free: 10s
export const dynamic = 'force-dynamic';

// Vercel Serverless 请求体大小限制 (Pro: 最大50MB)
export const fetchCache = 'force-no-store';

export async function POST(request: NextRequest) {
  const startTime = Date.now();

  try {
    const formData = await request.formData();
    const files = formData.getAll('files') as File[];
    const format = (formData.get('format') as OutputFormat) || 'jpeg';
    const quality = parseInt(formData.get('quality') as string) || 92;
    const keepMetadata = formData.get('keepMetadata') !== 'false';

    // 验证文件数量
    if (!files || files.length === 0) {
      return NextResponse.json(
        { success: false, error: 'NO_FILES', message: '请选择要转换的图片' },
        { status: 400 }
      );
    }

    if (files.length > MAX_FILES_COUNT) {
      return NextResponse.json(
        { success: false, error: 'TOO_MANY_FILES', message: `单次最多转换${MAX_FILES_COUNT}张图片` },
        { status: 400 }
      );
    }

    const convertedFiles: ConvertedFile[] = [];
    let totalOriginalSize = 0;
    let totalConvertedSize = 0;

    // 并行处理所有文件
    const conversionPromises = files.map(async (file) => {
      // 验证文件大小
      if (file.size > MAX_FILE_SIZE) {
        throw new Error(`文件 ${file.name} 超过50MB限制`);
      }

      // 验证文件格式
      const ext = '.' + file.name.split('.').pop()?.toLowerCase();
      if (!SUPPORTED_EXTENSIONS.includes(ext)) {
        throw new Error(`不支持的文件格式: ${ext}`);
      }

      const buffer = Buffer.from(await file.arrayBuffer());
      totalOriginalSize += buffer.length;

      // 获取原图信息
      const metadata = await sharp(buffer).metadata();

      // 创建Sharp实例
      let sharpInstance = sharp(buffer);

      // 根据格式转换
      let outputBuffer: Buffer;
      let outputExt: string;

      switch (format) {
        case 'jpeg':
          sharpInstance = sharpInstance.jpeg({
            quality,
            mozjpeg: true, // 使用mozjpeg优化
          });
          outputExt = '.jpg';
          break;
        case 'png':
          sharpInstance = sharpInstance.png({
            compressionLevel: 9,
          });
          outputExt = '.png';
          break;
        case 'webp':
          sharpInstance = sharpInstance.webp({
            quality,
          });
          outputExt = '.webp';
          break;
        case 'avif':
          sharpInstance = sharpInstance.avif({
            quality,
          });
          outputExt = '.avif';
          break;
        default:
          sharpInstance = sharpInstance.jpeg({ quality });
          outputExt = '.jpg';
      }

      // 是否保留元数据
      if (keepMetadata) {
        sharpInstance = sharpInstance.withMetadata();
      }

      outputBuffer = await sharpInstance.toBuffer();
      totalConvertedSize += outputBuffer.length;

      // 生成新文件名
      const baseName = file.name.replace(/\.[^.]+$/, '');
      const convertedName = baseName + outputExt;

      return {
        originalName: file.name,
        convertedName,
        originalSize: buffer.length,
        convertedSize: outputBuffer.length,
        width: metadata.width || 0,
        height: metadata.height || 0,
        data: outputBuffer.toString('base64'),
      };
    });

    // 等待所有转换完成
    const results = await Promise.all(conversionPromises);
    convertedFiles.push(...results);

    const processingTime = Date.now() - startTime;

    return NextResponse.json({
      success: true,
      files: convertedFiles,
      totalOriginalSize,
      totalConvertedSize,
      processingTime,
    });

  } catch (error) {
    console.error('Conversion error:', error);

    const message = error instanceof Error ? error.message : '转换失败，请重试';

    return NextResponse.json(
      { success: false, error: 'CONVERSION_FAILED', message },
      { status: 500 }
    );
  }
}

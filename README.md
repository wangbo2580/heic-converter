# HEIC/AVIF Converter

免费在线 HEIC/AVIF 批量转换器 - 将 iPhone 照片和新格式图片转换为 JPG/PNG/WebP
## 功能特点

- **批量转换**: 支持一次转换最多 100 张图片
- **多格式支持**: HEIC, AVIF, JPG, PNG, WebP 互转
- **保留元数据**: 完整保留 EXIF 信息（拍摄日期、GPS、相机型号等）
- **质量可调**: 60%-100% 质量自由选择
- **ZIP 下载**: 批量转换后一键打包下载
- **完全免费**: 无隐藏付费，无水印

## 技术栈

- **框架**: Next.js 14 (App Router)
- **语言**: TypeScript
- **样式**: Tailwind CSS
- **图片处理**: Sharp.js
- **ZIP 打包**: JSZip
- **部署**: Vercel

## 快速开始

### 安装依赖

```bash
cd heic-converter
npm install
```

### 开发模式

```bash
npm run dev
```

访问 http://localhost:3000

### 构建生产版本

```bash
npm run build
npm start
```

## 项目结构

```
heic-converter/
├── app/                        # Next.js App Router
│   ├── api/convert/route.ts   # 图片转换 API
│   ├── avif/page.tsx          # AVIF 转换页
│   ├── globals.css            # 全局样式
│   ├── layout.tsx             # 根布局
│   ├── page.tsx               # 首页
│   └── sitemap.ts             # 站点地图
├── components/                 # React 组件
│   ├── ConversionSettings.tsx # 转换设置
│   ├── DownloadSection.tsx    # 下载区域
│   ├── FilePreview.tsx        # 文件预览
│   └── FileUploader.tsx       # 文件上传
├── lib/                        # 工具库
│   └── constants.ts           # 常量定义
├── types/                      # TypeScript 类型
│   └── index.ts               # 类型定义
├── public/                     # 静态资源
│   └── robots.txt             # 爬虫配置
└── 配置文件...
```

## 环境变量

创建 `.env.local` 文件:

```bash
# 站点配置
NEXT_PUBLIC_SITE_URL=https://your-domain.com

# Google Analytics (可选)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Google AdSense (可选)
NEXT_PUBLIC_ADSENSE_CLIENT=ca-pub-XXXXXXXXXXXXXXXX
```

## 部署到 Vercel

1. 推送代码到 GitHub
2. 在 Vercel 导入项目
3. 配置环境变量
4. 部署

```bash
# 或使用 Vercel CLI
npm i -g vercel
vercel
```

## API 说明

### POST /api/convert

转换图片格式

**请求参数:**
- `files`: File[] - 图片文件数组
- `format`: string - 输出格式 (jpeg/png/webp/avif)
- `quality`: number - 输出质量 (60-100)
- `keepMetadata`: boolean - 是否保留元数据

**响应:**
```json
{
  "success": true,
  "files": [
    {
      "originalName": "photo.heic",
      "convertedName": "photo.jpg",
      "originalSize": 2048576,
      "convertedSize": 1536000,
      "width": 4032,
      "height": 3024,
      "data": "base64..."
    }
  ],
  "totalOriginalSize": 2048576,
  "totalConvertedSize": 1536000,
  "processingTime": 1234
}
```

## SEO 优化

项目针对以下关键词优化:
- heic to jpg (770K 月搜索)
- convert heic to jpg
- avif to jpg
- batch heic converter

## License

MIT

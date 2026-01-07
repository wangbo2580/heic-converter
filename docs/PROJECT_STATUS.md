# HEIC/AVIF Converter 项目状态文档

> 最后更新：2026-01-07
>
> 本文档用于记录项目当前状态，便于后续快速了解项目背景和进展。

---

## 项目概述

### 基本信息

| 项目 | 信息 |
|------|------|
| 项目名称 | HEIC/AVIF Converter |
| 线上地址 | https://www.avif-heicconverter.info |
| GitHub 仓库 | https://github.com/wangbo2580/heic-converter |
| 部署平台 | Vercel |
| 技术栈 | Next.js 14 + TypeScript + Tailwind CSS |
| 核心依赖 | Sharp (图片处理) |

### 项目目标

1. **核心功能**：提供免费的 HEIC/AVIF 图片格式转换服务
2. **商业目标**：通过 Google AdSense 广告变现
3. **流量来源**：SEO 自然搜索流量

---

## 已完成事项

### 一、核心功能 ✅

- [x] HEIC 转 JPG/PNG/WebP
- [x] AVIF 转 JPG/PNG/WebP
- [x] 批量转换（最多 100 个文件）
- [x] 保留 EXIF 元数据
- [x] 质量设置（高质量/标准/压缩）
- [x] ZIP 打包下载
- [x] 客户端预览
- [x] 拖拽上传

### 二、国际化 ✅

- [x] 英文 (en) - 默认语言
- [x] 中文 (zh)
- [x] 客户端语言切换
- [x] localStorage 语言偏好存储

### 三、SEO 优化 ✅

- [x] 4 个 SEO 落地页
  - `/heic-to-jpg`
  - `/heic-to-png`
  - `/avif-to-jpg`
  - `/avif-to-png`
- [x] JSON-LD 结构化数据（WebApplication、FAQ、Breadcrumb）
- [x] Open Graph 和 Twitter Card 元数据
- [x] hreflang 多语言标签
- [x] Canonical URL
- [x] sitemap.xml
- [x] robots.txt

### 四、安全加固 ✅

- [x] CORS 限制为自身域名
- [x] Content-Security-Policy (CSP)
- [x] X-Frame-Options (DENY)
- [x] X-XSS-Protection
- [x] X-Content-Type-Options (nosniff)
- [x] 文件签名验证 (magic number)
- [x] 全局错误边界 (error.tsx)
- [x] 文件大小限制 (50MB)
- [x] 文件数量限制 (100个)

### 五、分析与监控 ✅

- [x] Google Analytics 4 集成
  - GA ID: `G-F2NFECFDYV`
- [x] Google Search Console 提交
  - 验证方式: HTML meta 标签
  - sitemap 已提交

### 六、其他 ✅

- [x] 隐私政策页面 (`/privacy`)
- [x] 服务条款页面 (`/terms`)
- [x] 404 页面
- [x] 错误处理页面
- [x] 响应式设计（移动端适配）
- [x] Vercel 部署配置

---

## 关键配置信息

### 环境变量

```env
NEXT_PUBLIC_SITE_URL=https://www.avif-heicconverter.info
NEXT_PUBLIC_GA_ID=G-F2NFECFDYV
```

### Google 验证

- **Search Console 验证码**: `MTVFQzPMMpzXY9iM1OgSGWSFMd3zvkMRn_fGoFmElNQ`
- **验证方式**: metadata.verification.google (layout.tsx)

### 联系邮箱

- `wbo861496@gmail.com`

---

## 项目结构

```
heic-converter/
├── app/                    # Next.js App Router 页面
│   ├── api/convert/        # 转换 API
│   ├── heic-to-jpg/        # SEO 落地页
│   ├── heic-to-png/
│   ├── avif-to-jpg/
│   ├── avif-to-png/
│   ├── avif/               # AVIF 转换页
│   ├── privacy/            # 隐私政策
│   ├── terms/              # 服务条款
│   ├── error.tsx           # 错误边界
│   ├── global-error.tsx    # 全局错误
│   ├── layout.tsx          # 根布局
│   ├── page.tsx            # 首页
│   └── sitemap.ts          # 站点地图
├── components/             # React 组件
│   ├── FileUploader.tsx    # 文件上传
│   ├── FilePreview.tsx     # 文件预览
│   ├── ConversionSettings.tsx
│   ├── DownloadSection.tsx
│   ├── ConverterPage.tsx   # 通用转换页组件
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── LanguageSwitcher.tsx
│   ├── GoogleAnalytics.tsx
│   └── JsonLd.tsx          # 结构化数据
├── contexts/               # React Context
│   └── LanguageContext.tsx
├── lib/                    # 工具库
│   ├── constants.ts
│   ├── fileValidation.ts   # 文件签名验证
│   └── i18n/               # 国际化
│       ├── index.ts
│       ├── types.ts
│       ├── en.ts
│       └── zh.ts
├── types/                  # TypeScript 类型
├── docs/                   # 项目文档
└── 方法论/                  # 操作指南归档
```

---

## 技术债务 & 已知问题

### 低优先级技术债务

1. **代码重复**：`app/page.tsx`、`app/avif/page.tsx`、`components/ConverterPage.tsx` 存在部分重复逻辑，可提取为共享 hooks
2. **缺少测试**：无单元测试和 E2E 测试
3. **无请求限流**：API 无速率限制
4. **无缓存机制**：相同输入的转换未缓存

### 不影响功能

以上问题不影响当前功能，可在后续迭代中逐步解决。

---

## 后续开发方向

详见 [OPERATIONS_GUIDE.md](./OPERATIONS_GUIDE.md) 中的「拓展方向」章节。

---

## 版本历史

| 日期 | 版本 | 更新内容 |
|------|------|----------|
| 2026-01-07 | v1.0 | 初始版本上线 |
| 2026-01-07 | v1.1 | SEO 落地页、安全加固、JSON-LD |

---

## 当前运营阶段

**阶段**：索引期（第 1-4 周）

**当前重点**：
- [ ] 每周检查 GSC 索引状态
- [ ] 开始外链建设（产品目录站提交）
- [ ] 准备 Product Hunt 发布

**运营文档**：
- 详细运营指南：[OPERATIONS_GUIDE.md](./OPERATIONS_GUIDE.md)
- 通用方法论：[站点运营SOP_工具站版.md](../../方法论/站点运营SOP_工具站版.md)

---

## 快速恢复开发上下文

如果你是 Claude Code 并需要继续这个项目的开发，以下是关键信息：

1. **项目类型**：SEO 工具站，目标是通过自然搜索获取流量并通过广告变现
2. **当前阶段**：开发完成，进入运营阶段（索引期）
3. **下一步重点**：
   - 等待 Google 索引（检查 GSC）
   - 开始外链建设（参考 OPERATIONS_GUIDE.md 中的外链清单）
   - 准备 AdSense 申请（日均 50+ UV 后）
   - 根据流量数据添加更多落地页
4. **代码质量**：TypeScript 类型检查通过，构建正常
5. **部署方式**：推送到 main 分支自动触发 Vercel 部署

如需继续开发，建议先阅读本文档和 `OPERATIONS_GUIDE.md`。

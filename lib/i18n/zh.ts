// lib/i18n/zh.ts

import type { Translations } from './types';

export const zh: Translations = {
  common: {
    siteName: 'HEIC 转换器',
    home: '首页',
    privacy: '隐私政策',
    terms: '服务条款',
    contact: '联系我们',
    faq: '常见问题',
    copyright: '© {year} HEIC Converter. 保留所有权利。',
    language: '语言',
  },

  header: {
    heicConvert: 'HEIC 转换',
    avifConvert: 'AVIF 转换',
    tools: '转换工具',
    heicToJpg: 'HEIC 转 JPG',
    heicToPng: 'HEIC 转 PNG',
    heicToWebp: 'HEIC 转 WebP',
    avifToJpg: 'AVIF 转 JPG',
    avifToPng: 'AVIF 转 PNG',
    avifToWebp: 'AVIF 转 WebP',
  },

  home: {
    title: '免费在线 HEIC/AVIF 批量转换器',
    subtitle: '将 iPhone 照片 (HEIC) 和新格式图片 (AVIF) 快速转换为 JPG/PNG/WebP，支持无限批量、保留元数据',
    uploadTitle: '将图片拖放到这里',
    uploadSubtitle: '或点击选择文件',
    uploadButton: '选择文件',
    dragDrop: '拖放文件到这里',
    supportedFormats: '支持格式：HEIC, HEIF, AVIF, JPG, PNG, WebP',
    maxFileSize: '单文件最大 50MB，最多 100 个文件',
    selected: '已选择',
    images: '张',
    totalSize: '总大小',
    clearAll: '清空全部',
    converting: '正在转换...',
    convertButton: '开始转换',
    pleaseWait: '请稍候，大文件可能需要较长时间...',
    downloadAll: '下载全部',
    downloadZip: '打包下载 ZIP',
    convertMore: '继续转换',
    adPlaceholder: '广告位 - Google AdSense',
  },

  settings: {
    title: '转换设置',
    outputFormat: '输出格式',
    quality: '质量',
    keepMetadata: '保留元数据',
    keepMetadataDesc: '保留 EXIF 信息（日期、位置、相机信息）',
    highQuality: '高质量',
    highQualityDesc: '最佳画质，文件较大',
    standard: '标准',
    standardDesc: '平衡画质和大小',
    compressed: '压缩',
    compressedDesc: '较小文件，画质略降',
  },

  formats: {
    jpeg: '通用格式，兼容性最好',
    png: '无损格式，支持透明',
    webp: '现代格式，文件更小',
    avif: '新一代格式，压缩率最高',
  },

  status: {
    pending: '待转换',
    converting: '转换中...',
    completed: '已完成',
    error: '错误',
    errorMessage: '转换失败',
  },

  faq: {
    title: '常见问题',
    heicTitle: '什么是 HEIC 格式？',
    heicAnswer: 'HEIC (High Efficiency Image Container) 是苹果从 iOS 11 开始采用的默认照片格式。相比 JPG，HEIC 文件更小但质量相同。然而，HEIC 在 Windows 和一些应用中兼容性较差，因此需要转换为 JPG 等通用格式。',
    avifTitle: '什么是 AVIF 格式？',
    avifAnswer: 'AVIF (AV1 Image File Format) 是一种新型图片格式，基于 AV1 视频编码技术。AVIF 提供比 JPG 和 WebP 更好的压缩率，被各大浏览器逐步支持。但在旧设备和软件中可能无法直接打开，需要转换。',
    qualityTitle: '转换后图片质量会下降吗？',
    qualityAnswer: '我们默认使用 92% 的高质量设置，肉眼几乎无法察觉质量差异。您可以在转换设置中调整质量参数。如果您需要完全无损，可以选择 PNG 格式输出。',
    securityTitle: '我的照片安全吗？',
    securityAnswer: '您的照片仅在转换过程中临时处理，转换完成后立即删除，不会保存在我们的服务器上。我们采用安全的 HTTPS 加密传输，确保您的数据安全。',
  },

  features: {
    title: '为什么选择我们？',
    batchTitle: '真正的无限批量',
    batchDesc: '不像其他工具限制 5-10 张，我们支持一次转换最多 100 张图片',
    metadataTitle: '保留照片信息',
    metadataDesc: '完整保留 EXIF 元数据：拍摄日期、相机型号、GPS 位置等信息',
    securityTitle: '安全可靠',
    securityDesc: '采用 HTTPS 加密传输，文件处理完即删除，不保留任何数据',
  },

  avif: {
    title: '免费在线 AVIF 批量转换器',
    subtitle: '将 AVIF 格式图片快速转换为 JPG/PNG/WebP，支持无限批量、保留元数据',
    faqTitle: '关于 AVIF 格式',
    whatIsAvif: '什么是 AVIF？',
    whatIsAvifAnswer: 'AVIF (AV1 Image File Format) 是基于 AV1 视频编码技术的新一代图片格式。它提供比 JPEG、PNG 和 WebP 更好的压缩效率，同等画质下文件更小。目前主流浏览器 Chrome、Firefox、Safari 都已支持 AVIF。',
    whyConvert: '为什么需要转换 AVIF？',
    whyConvertAnswer: '虽然 AVIF 是优秀的图片格式，但某些旧版软件、操作系统或应用可能无法直接打开。转换为 JPG 或 PNG 可以确保图片在任何设备上都能正常显示和使用。',
    advantages: 'AVIF 的优势是什么？',
    advantagesAnswer: 'AVIF 相比 JPEG 可节省 50% 以上的文件大小，同时保持相同画质。它支持 HDR、宽色域、透明通道和动画。是网站图片优化的理想选择。',
    qualityLoss: '转换会损失质量吗？',
    qualityLossAnswer: '我们默认使用 92% 的高质量设置进行转换，视觉上几乎无法察觉差异。如果您需要完全无损的输出，可以选择 PNG 格式。',
  },

  notFound: {
    title: '页面未找到',
    message: '抱歉，您访问的页面不存在或已被移除。请返回首页继续使用我们的图片转换服务。',
    backHome: '返回首页',
  },

  errorPage: {
    title: '出错了',
    message: '发生了意外错误。请重试或返回首页。',
    retry: '重试',
    backHome: '返回首页',
  },

  // 转换落地页
  converterPages: {
    heicToJpg: {
      title: '免费在线 HEIC 转 JPG 转换器',
      subtitle: '将 iPhone HEIC 照片即时转换为 JPG 格式。免费、无限批量转换，保留原始质量。',
      metaTitle: 'HEIC 转 JPG 转换器 - 免费在线工具 | 转换 iPhone 照片',
      metaDescription: '免费在线 HEIC 转 JPG 转换器。即时将 iPhone 照片从 HEIC 转换为 JPG 格式。支持批量转换，无需注册，保留原始质量。',
      metaKeywords: 'heic转jpg, heic转jpg转换器, heic转换jpg, heic在线转jpg, iphone照片转jpg, heic转换器',
      faq: {
        title: 'HEIC 转 JPG 常见问题',
        items: [
          {
            question: '为什么要将 HEIC 转换为 JPG？',
            answer: 'HEIC 是苹果从 iOS 11 开始采用的默认照片格式。虽然它压缩效果更好，但 JPG 在所有设备、操作系统和应用程序中具有通用兼容性。转换为 JPG 可确保您的照片可以在任何地方查看和分享。',
          },
          {
            question: '将 HEIC 转换为 JPG 会损失质量吗？',
            answer: '我们默认使用 92% 的质量设置，在保持合理文件大小的同时保留出色的图像质量。质量损失对肉眼几乎不可察觉。',
          },
          {
            question: '一次可以转换多少个 HEIC 文件？',
            answer: '您可以一次转换多达 100 个 HEIC 文件，每个文件最大 50MB。我们的批量转换功能可以轻松快速地转换多张照片。',
          },
          {
            question: '转换过程中我的数据安全吗？',
            answer: '是的，您的文件会被安全处理，转换后立即删除。我们从不在服务器上存储您的照片。',
          },
        ],
      },
    },
    heicToPng: {
      title: '免费在线 HEIC 转 PNG 转换器',
      subtitle: '将 iPhone HEIC 照片转换为支持透明的 PNG 格式。无损质量，无限批量转换。',
      metaTitle: 'HEIC 转 PNG 转换器 - 免费在线工具 | 无损转换',
      metaDescription: '免费在线 HEIC 转 PNG 转换器。将 iPhone HEIC 照片转换为 PNG 格式，无损质量并支持透明。支持批量转换，无需注册。',
      metaKeywords: 'heic转png, heic转png转换器, heic转换png, heic在线转png, iphone照片转png, heic png转换器',
      faq: {
        title: 'HEIC 转 PNG 常见问题',
        items: [
          {
            question: '为什么选择将 HEIC 转换为 PNG 而不是 JPG？',
            answer: 'PNG 是一种无损格式，可以保留 100% 的原始图像质量。它还支持透明度，非常适合图形、标志或需要编辑的图像。当质量比文件大小更重要时，请选择 PNG。',
          },
          {
            question: 'PNG 转换真的是无损的吗？',
            answer: '是的，PNG 使用无损压缩，意味着转换过程中不会丢失图像数据。转换后的 PNG 将与原始 HEIC 文件具有相同的质量。',
          },
          {
            question: '为什么 PNG 文件比 JPG 大？',
            answer: 'PNG 使用无损压缩，保留所有图像数据，因此文件较大。JPG 使用有损压缩，牺牲一些质量换取较小的文件大小。请根据您的需求选择。',
          },
          {
            question: '带透明度的 HEIC 可以转换为 PNG 吗？',
            answer: '是的，如果您的 HEIC 文件包含透明度信息，转换为 PNG 格式时会保留透明度。',
          },
        ],
      },
    },
    heicToWebp: {
      title: '免费在线 HEIC 转 WebP 转换器',
      subtitle: '将 iPhone HEIC 照片转换为 WebP 格式，获得更小的文件体积和更好的网页性能。批量转换，保留质量。',
      metaTitle: 'HEIC 转 WebP 转换器 - 免费在线工具 | 现代格式',
      metaDescription: '免费在线 HEIC 转 WebP 转换器。将 iPhone HEIC 照片转换为 WebP，获得更小文件和更好网页性能。支持批量转换，无需注册。',
      metaKeywords: 'heic转webp, heic转webp转换器, heic转换webp, heic在线转webp, iphone照片转webp, heic webp转换器',
      faq: {
        title: 'HEIC 转 WebP 常见问题',
        items: [
          {
            question: '为什么要将 HEIC 转换为 WebP？',
            answer: 'WebP 是 Google 开发的现代图像格式，提供卓越的压缩效果。WebP 文件通常比同等质量的 JPG 小 25-35%，非常适合对加载速度有要求的网站和网络应用。',
          },
          {
            question: 'WebP 格式支持广泛吗？',
            answer: '是的，WebP 现在被所有主流浏览器支持，包括 Chrome、Firefox、Safari 和 Edge。由于其出色的压缩和质量平衡，它已成为网络图片的标准格式。',
          },
          {
            question: 'WebP 相比 JPG 有什么优势？',
            answer: 'WebP 提供更好的压缩（文件小 25-35%），支持有损和无损压缩，支持透明度（像 PNG），还支持动画（像 GIF）。是网页优化的最佳选择。',
          },
          {
            question: '将 HEIC 转换为 WebP 会降低质量吗？',
            answer: '我们默认使用 92% 的高质量设置，质量损失极小，几乎无法察觉。实际上，在相同文件大小下，WebP 比 JPG 保留的质量更好。',
          },
        ],
      },
    },
    avifToJpg: {
      title: '免费在线 AVIF 转 JPG 转换器',
      subtitle: '将 AVIF 图片转换为 JPG 格式以获得通用兼容性。快速、免费、无限批量转换。',
      metaTitle: 'AVIF 转 JPG 转换器 - 免费在线工具 | 转换 AVIF 图片',
      metaDescription: '免费在线 AVIF 转 JPG 转换器。将 AVIF 图片转换为 JPG 格式以获得通用兼容性。支持批量转换，无需注册。',
      metaKeywords: 'avif转jpg, avif转jpg转换器, avif转换jpg, avif在线转jpg, avif转换器, avif转jpeg',
      faq: {
        title: 'AVIF 转 JPG 常见问题',
        items: [
          {
            question: '什么是 AVIF 格式？',
            answer: 'AVIF（AV1 图像文件格式）是基于 AV1 视频编解码器的现代图像格式。它提供比 JPG 和 WebP 更好的压缩效果，但可能不被旧版浏览器和软件支持。',
          },
          {
            question: '为什么要将 AVIF 转换为 JPG？',
            answer: '虽然 AVIF 提供出色的压缩效果，但 JPG 在几乎所有设备和软件上都有通用支持。转换为 JPG 可确保您的图片可以在任何地方查看。',
          },
          {
            question: '将 AVIF 转换为 JPG 会损失质量吗？',
            answer: '由于 JPG 使用有损压缩，可能会有一些质量损失。我们使用高质量设置（92%）来最小化任何可见差异。',
          },
          {
            question: '转换速度有多快？',
            answer: '大多数转换在几秒钟内完成。处理时间取决于文件大小和图片数量，但我们优化的转换器处理速度很快。',
          },
        ],
      },
    },
    avifToPng: {
      title: '免费在线 AVIF 转 PNG 转换器',
      subtitle: '将 AVIF 图片转换为无损质量的 PNG 格式。保留透明度，无限批量转换。',
      metaTitle: 'AVIF 转 PNG 转换器 - 免费在线工具 | 无损质量',
      metaDescription: '免费在线 AVIF 转 PNG 转换器。将 AVIF 图片转换为 PNG 格式，无损质量并保留透明度。支持批量转换，无需注册。',
      metaKeywords: 'avif转png, avif转png转换器, avif转换png, avif在线转png, avif转换器, avif png',
      faq: {
        title: 'AVIF 转 PNG 常见问题',
        items: [
          {
            question: '为什么要将 AVIF 转换为 PNG？',
            answer: 'PNG 提供无损压缩和通用兼容性。将 AVIF 转换为 PNG 可保留最大图像质量和任何透明度，非常适合编辑或存档。',
          },
          {
            question: '透明度会被保留吗？',
            answer: '是的，AVIF 和 PNG 都支持透明度（Alpha 通道）。原始 AVIF 中的任何透明度都将在 PNG 输出中保留。',
          },
          {
            question: '为什么选择 PNG 而不是 JPG 进行 AVIF 转换？',
            answer: '当您需要无损质量、透明度支持或计划进一步编辑图像时，请选择 PNG。当您需要较小的文件大小和通用兼容性时，请选择 JPG。',
          },
          {
            question: '可以批量转换多个 AVIF 文件吗？',
            answer: '是的，您可以一次转换多达 100 个 AVIF 文件。只需选择或拖动多个文件即可开始批量转换。',
          },
        ],
      },
    },
    avifToWebp: {
      title: '免费在线 AVIF 转 WebP 转换器',
      subtitle: '将 AVIF 图片转换为 WebP 格式，获得更广泛的浏览器兼容性。快速转换，保留质量，无限批量处理。',
      metaTitle: 'AVIF 转 WebP 转换器 - 免费在线工具 | 现代格式',
      metaDescription: '免费在线 AVIF 转 WebP 转换器。将 AVIF 图片转换为 WebP 以获得更好的浏览器兼容性。支持批量转换，无需注册。',
      metaKeywords: 'avif转webp, avif转webp转换器, avif转换webp, avif在线转webp, avif转换器, avif webp',
      faq: {
        title: 'AVIF 转 WebP 常见问题',
        items: [
          {
            question: '为什么要将 AVIF 转换为 WebP？',
            answer: '虽然 AVIF 提供更好的压缩效果，但 WebP 拥有更广泛的浏览器支持和更好的通用兼容性。转换为 WebP 可确保您的图片在所有主流浏览器和平台上正常工作。',
          },
          {
            question: 'AVIF 和 WebP 哪个格式更好？',
            answer: 'AVIF 通常比 WebP 提供 20-30% 更好的压缩效果，但 WebP 拥有更广泛的浏览器支持。选择 AVIF 以获得最大压缩，选择 WebP 以获得最大兼容性。',
          },
          {
            question: '将 AVIF 转换为 WebP 会损失质量吗？',
            answer: '两者都是具有出色压缩效果的现代格式。我们使用 92% 的高质量设置来最小化任何可见差异。转换过程能很好地保留图像质量。',
          },
          {
            question: 'WebP 像 AVIF 一样支持透明度吗？',
            answer: '是的，AVIF 和 WebP 都支持透明度（Alpha 通道）。转换为 WebP 时，AVIF 图片中的任何透明度都将被保留。',
          },
        ],
      },
    },
  },

  privacy: {
    title: '隐私政策',
    lastUpdated: '最后更新',
    intro: {
      title: '1. 简介',
      content: '欢迎使用 HEIC Converter（以下简称"我们"）。我们致力于保护您的隐私并确保您的个人信息安全。本隐私政策说明了当您使用我们的图片转换服务时，我们如何收集、使用和保护您的数据。',
    },
    collection: {
      title: '2. 我们收集的信息',
      imagesTitle: '2.1 您上传的图片',
      imagesContent: '当您使用我们的服务转换图片时，您的文件会在我们的服务器上临时处理。我们不会存储、保留或归档您上传的任何图片。所有上传的文件在转换过程完成后会立即自动删除。',
      autoTitle: '2.2 自动收集的信息',
      autoContent: '当您访问我们的网站时，我们可能会自动收集某些信息，包括：',
      autoItems: [
        'IP 地址（已匿名化）',
        '浏览器类型和版本',
        '操作系统',
        '来源网站',
        '访问的页面和停留时间',
        '设备类型（桌面、移动、平板）',
      ],
    },
    usage: {
      title: '3. 我们如何使用您的信息',
      content: '我们将收集的信息用于以下目的：',
      items: [
        '提供和维护我们的图片转换服务',
        '改进和优化我们的网站性能',
        '分析使用模式和趋势',
        '检测和防止技术问题',
        '展示相关广告',
      ],
    },
    security: {
      title: '4. 图片处理与安全',
      content: '您的隐私和数据安全是我们的首要任务：',
      items: [
        { label: '不存储', desc: '上传的图片在内存中处理，永不永久保存到磁盘' },
        { label: '立即删除', desc: '所有文件在转换后立即删除' },
        { label: '安全传输', desc: '所有数据通过 HTTPS 加密传输' },
        { label: '不分享', desc: '我们绝不会向第三方分享、出售或分发您的图片' },
        { label: '不访问', desc: '我们的员工不会查看或访问您上传的图片' },
      ],
    },
    cookies: {
      title: '5. Cookie 和跟踪',
      content: '我们使用 Cookie 和类似跟踪技术来：',
      items: [
        '记住您的偏好设置',
        '分析网站流量（Google Analytics）',
        '展示个性化广告（Google AdSense）',
      ],
      note: '您可以通过浏览器偏好设置控制 Cookie 设置。请注意，禁用 Cookie 可能会影响我们服务的某些功能。',
    },
    thirdParty: {
      title: '6. 第三方服务',
      content: '我们使用的第三方服务包括用于网站流量分析的 Google Analytics、用于展示广告的 Google AdSense，以及用于网站托管的 Vercel。请参阅它们各自的隐私政策以了解更多信息。',
    },
    rights: {
      title: '7. 您的权利',
      content: '关于您的数据，您拥有以下权利：',
      items: [
        '访问您的个人数据的权利',
        '请求删除您的数据的权利',
        '退出跟踪和分析的权利',
        '禁用个性化广告的权利',
      ],
    },
    children: {
      title: '8. 儿童隐私',
      content: '我们的服务不面向 13 岁以下的儿童。我们不会故意收集儿童的个人信息。如果您是父母或监护人，并认为您的孩子向我们提供了个人信息，请与我们联系。',
    },
    changes: {
      title: '9. 政策变更',
      content: '我们可能会不时更新本隐私政策。我们将通过在此页面上发布新的隐私政策并更新"最后更新"日期来通知您任何变更。',
    },
    contactTitle: '10. 联系我们',
    contactContent: '如果您对本隐私政策有任何疑问，请通过以下方式联系我们：',
  },

  terms: {
    title: '服务条款',
    lastUpdated: '最后更新',
    acceptance: {
      title: '1. 条款接受',
      content: '通过访问和使用 HEIC Converter（以下简称"服务"），您接受并同意受这些服务条款的约束。如果您不同意这些条款，请不要使用我们的服务。',
    },
    description: {
      title: '2. 服务描述',
      content: 'HEIC Converter 提供免费的在线工具，用于在各种格式之间转换图片文件，包括 HEIC、AVIF、JPG、PNG 和 WebP。服务按"现状"和"可用"提供，不提供任何形式的保证。',
    },
    acceptable: {
      title: '3. 可接受的使用',
      content: '您同意仅将服务用于合法目的。您不得：',
      items: [
        '上传、转换或分发任何非法、有害、威胁、辱骂、骚扰、诽谤或其他令人反感的内容',
        '上传侵犯任何专利、商标、版权或其他知识产权的内容',
        '上传包含儿童剥削材料的内容',
        '试图干扰或破坏服务或服务器',
        '使用自动脚本或机器人过度访问服务',
        '试图绕过任何安全措施或访问限制',
        '使用服务分发恶意软件、病毒或其他有害代码',
      ],
    },
    intellectual: {
      title: '4. 知识产权',
      yourContent: '您的内容：您保留您上传的图片的所有所有权。通过使用我们的服务，您授予我们有限的临时许可，仅用于提供转换服务而处理您的图片。',
      ourContent: '我们的内容：服务，包括其设计、功能和内容，归我们所有，受知识产权法保护。未经许可，您不得复制、修改或分发我们服务的任何部分。',
    },
    limitations: {
      title: '5. 服务限制',
      content: '服务有以下限制：',
      items: [
        '最大文件大小：每张图片 50 MB',
        '每批最多文件数：100 张图片',
        '支持的输入格式：HEIC、HEIF、AVIF、JPG、PNG、WebP',
        '支持的输出格式：JPG、PNG、WebP、AVIF',
      ],
      note: '我们保留随时修改这些限制的权利，恕不另行通知。',
    },
    privacyRef: {
      title: '6. 隐私',
      content: '您对服务的使用还受我们的隐私政策约束，该政策描述了我们如何收集、使用和保护您的信息。使用服务即表示您同意我们在隐私政策中描述的数据做法。',
    },
    disclaimer: {
      title: '7. 免责声明',
      content: '服务按"现状"和"可用"提供，不提供任何形式的明示或暗示保证，包括但不限于对适销性、特定用途适用性和非侵权的暗示保证。我们不保证：',
      items: [
        '服务将不间断或无错误',
        '从服务获得的结果将准确或可靠',
        '任何转换图片的质量将满足您的期望',
        '服务中的任何错误将得到纠正',
      ],
    },
    liability: {
      title: '8. 责任限制',
      content: '在法律允许的最大范围内，我们不对任何间接、附带、特殊、后果性或惩罚性损害，或任何利润或收入损失（无论是直接还是间接产生的），或任何数据、使用、商誉或其他无形损失承担责任，这些损失源于：',
      items: [
        '您对服务的使用或无法使用',
        '对我们服务器的任何未经授权的访问或使用',
        '服务传输的任何中断或停止',
        '通过服务传输的任何错误、病毒或其他有害代码',
        '任何内容中的任何错误或遗漏',
      ],
    },
    indemnification: {
      title: '9. 赔偿',
      content: '您同意赔偿、辩护并使 HEIC Converter 及其官员、董事、员工和代理人免受因您使用服务或违反这些条款而产生的任何索赔、损害、损失、责任和费用（包括律师费）。',
    },
    modifications: {
      title: '10. 服务修改',
      content: '我们保留随时修改、暂停或终止服务（或其任何部分）的权利，无论是否通知。我们不对您或任何第三方因服务的任何修改、暂停或终止承担责任。',
    },
    termsChanges: {
      title: '11. 条款变更',
      content: '我们可能随时修订这些服务条款。最新版本将始终发布在此页面上，并附有更新日期。在变更生效后继续使用服务，即表示您同意受修订条款的约束。',
    },
    governing: {
      title: '12. 适用法律',
      content: '这些条款应受我们运营所在司法管辖区的法律管辖并按其解释，不考虑其法律冲突条款。',
    },
    contactTitle: '13. 联系信息',
    contactContent: '如果您对这些服务条款有任何疑问，请通过以下方式联系我们：',
  },
};

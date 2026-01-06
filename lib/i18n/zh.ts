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

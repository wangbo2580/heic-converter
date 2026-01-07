// lib/i18n/types.ts

export type Locale = 'en' | 'zh';

// Converter page translations structure
export interface ConverterPageTranslations {
  title: string;
  subtitle: string;
  metaTitle: string;
  metaDescription: string;
  metaKeywords: string;
  faq: {
    title: string;
    items: {
      question: string;
      answer: string;
    }[];
  };
}

export interface Translations {
  // Common
  common: {
    siteName: string;
    home: string;
    privacy: string;
    terms: string;
    contact: string;
    faq: string;
    copyright: string;
    language: string;
  };

  // Header
  header: {
    heicConvert: string;
    avifConvert: string;
    tools: string;
    heicToJpg: string;
    heicToPng: string;
    heicToWebp: string;
    avifToJpg: string;
    avifToPng: string;
    avifToWebp: string;
  };

  // Home page
  home: {
    title: string;
    subtitle: string;
    uploadTitle: string;
    uploadSubtitle: string;
    uploadButton: string;
    dragDrop: string;
    supportedFormats: string;
    maxFileSize: string;
    selected: string;
    images: string;
    totalSize: string;
    clearAll: string;
    converting: string;
    convertButton: string;
    pleaseWait: string;
    downloadAll: string;
    downloadZip: string;
    convertMore: string;
    adPlaceholder: string;
  };

  // Settings
  settings: {
    title: string;
    outputFormat: string;
    quality: string;
    keepMetadata: string;
    keepMetadataDesc: string;
    highQuality: string;
    highQualityDesc: string;
    standard: string;
    standardDesc: string;
    compressed: string;
    compressedDesc: string;
  };

  // Format descriptions
  formats: {
    jpeg: string;
    png: string;
    webp: string;
    avif: string;
  };

  // File status
  status: {
    pending: string;
    converting: string;
    completed: string;
    error: string;
    errorMessage: string;
  };

  // FAQ - Home
  faq: {
    title: string;
    heicTitle: string;
    heicAnswer: string;
    avifTitle: string;
    avifAnswer: string;
    qualityTitle: string;
    qualityAnswer: string;
    securityTitle: string;
    securityAnswer: string;
  };

  // Features
  features: {
    title: string;
    batchTitle: string;
    batchDesc: string;
    metadataTitle: string;
    metadataDesc: string;
    securityTitle: string;
    securityDesc: string;
  };

  // AVIF page specific
  avif: {
    title: string;
    subtitle: string;
    faqTitle: string;
    whatIsAvif: string;
    whatIsAvifAnswer: string;
    whyConvert: string;
    whyConvertAnswer: string;
    advantages: string;
    advantagesAnswer: string;
    qualityLoss: string;
    qualityLossAnswer: string;
  };

  // 404 page
  notFound: {
    title: string;
    message: string;
    backHome: string;
  };

  // Error page
  errorPage: {
    title: string;
    message: string;
    retry: string;
    backHome: string;
  };

  // Privacy Policy
  privacy: {
    title: string;
    lastUpdated: string;
    intro: {
      title: string;
      content: string;
    };
    collection: {
      title: string;
      imagesTitle: string;
      imagesContent: string;
      autoTitle: string;
      autoContent: string;
      autoItems: string[];
    };
    usage: {
      title: string;
      content: string;
      items: string[];
    };
    security: {
      title: string;
      content: string;
      items: {
        label: string;
        desc: string;
      }[];
    };
    cookies: {
      title: string;
      content: string;
      items: string[];
      note: string;
    };
    thirdParty: {
      title: string;
      content: string;
    };
    rights: {
      title: string;
      content: string;
      items: string[];
    };
    children: {
      title: string;
      content: string;
    };
    changes: {
      title: string;
      content: string;
    };
    contactTitle: string;
    contactContent: string;
  };

  // Converter landing pages
  converterPages: {
    heicToJpg: ConverterPageTranslations;
    heicToPng: ConverterPageTranslations;
    heicToWebp: ConverterPageTranslations;
    avifToJpg: ConverterPageTranslations;
    avifToPng: ConverterPageTranslations;
    avifToWebp: ConverterPageTranslations;
  };

  // Terms of Service
  terms: {
    title: string;
    lastUpdated: string;
    acceptance: {
      title: string;
      content: string;
    };
    description: {
      title: string;
      content: string;
    };
    acceptable: {
      title: string;
      content: string;
      items: string[];
    };
    intellectual: {
      title: string;
      yourContent: string;
      ourContent: string;
    };
    limitations: {
      title: string;
      content: string;
      items: string[];
      note: string;
    };
    privacyRef: {
      title: string;
      content: string;
    };
    disclaimer: {
      title: string;
      content: string;
      items: string[];
    };
    liability: {
      title: string;
      content: string;
      items: string[];
    };
    indemnification: {
      title: string;
      content: string;
    };
    modifications: {
      title: string;
      content: string;
    };
    termsChanges: {
      title: string;
      content: string;
    };
    governing: {
      title: string;
      content: string;
    };
    contactTitle: string;
    contactContent: string;
  };
}

// lib/i18n/en.ts

import type { Translations } from './types';

export const en: Translations = {
  common: {
    siteName: 'HEIC Converter',
    home: 'Home',
    privacy: 'Privacy Policy',
    terms: 'Terms of Service',
    contact: 'Contact Us',
    faq: 'FAQ',
    copyright: '© {year} HEIC Converter. All rights reserved.',
    language: 'Language',
  },

  header: {
    heicConvert: 'HEIC Convert',
    avifConvert: 'AVIF Convert',
    tools: 'Tools',
    heicToJpg: 'HEIC to JPG',
    heicToPng: 'HEIC to PNG',
    avifToJpg: 'AVIF to JPG',
    avifToPng: 'AVIF to PNG',
  },

  home: {
    title: 'Free Online HEIC/AVIF Batch Converter',
    subtitle: 'Convert iPhone photos (HEIC) and modern format images (AVIF) to JPG/PNG/WebP quickly. Unlimited batch processing, preserve metadata.',
    uploadTitle: 'Drop images here',
    uploadSubtitle: 'or click to select files',
    uploadButton: 'Select Files',
    dragDrop: 'Drag and drop files here',
    supportedFormats: 'Supports: HEIC, HEIF, AVIF, JPG, PNG, WebP',
    maxFileSize: 'Max 50MB per file, up to 100 files',
    selected: 'Selected',
    images: 'images',
    totalSize: 'Total size',
    clearAll: 'Clear All',
    converting: 'Converting...',
    convertButton: 'Start Conversion',
    pleaseWait: 'Please wait, large files may take longer...',
    downloadAll: 'Download All',
    downloadZip: 'Download as ZIP',
    convertMore: 'Convert More',
    adPlaceholder: 'Advertisement - Google AdSense',
  },

  settings: {
    title: 'Conversion Settings',
    outputFormat: 'Output Format',
    quality: 'Quality',
    keepMetadata: 'Keep Metadata',
    keepMetadataDesc: 'Preserve EXIF data (date, location, camera info)',
    highQuality: 'High Quality',
    highQualityDesc: 'Best quality, larger file',
    standard: 'Standard',
    standardDesc: 'Balanced quality and size',
    compressed: 'Compressed',
    compressedDesc: 'Smaller file, slightly lower quality',
  },

  formats: {
    jpeg: 'Universal format, best compatibility',
    png: 'Lossless format, supports transparency',
    webp: 'Modern format, smaller files',
    avif: 'Next-gen format, best compression',
  },

  status: {
    pending: 'Pending',
    converting: 'Converting...',
    completed: 'Completed',
    error: 'Error',
    errorMessage: 'Conversion failed',
  },

  faq: {
    title: 'Frequently Asked Questions',
    heicTitle: 'What is HEIC format?',
    heicAnswer: 'HEIC (High Efficiency Image Container) is the default photo format adopted by Apple since iOS 11. Compared to JPG, HEIC files are smaller with the same quality. However, HEIC has poor compatibility on Windows and some applications, so it needs to be converted to universal formats like JPG.',
    avifTitle: 'What is AVIF format?',
    avifAnswer: 'AVIF (AV1 Image File Format) is a new image format based on AV1 video encoding technology. AVIF offers better compression than JPG and WebP, and is gradually being supported by major browsers. But it may not open directly on older devices and software, requiring conversion.',
    qualityTitle: 'Will conversion reduce image quality?',
    qualityAnswer: 'We use 92% high quality settings by default, making quality differences almost imperceptible to the eye. You can adjust quality parameters in conversion settings. If you need completely lossless output, choose PNG format.',
    securityTitle: 'Are my photos safe?',
    securityAnswer: 'Your photos are only temporarily processed during conversion and deleted immediately after completion. They are not saved on our servers. We use secure HTTPS encrypted transmission to ensure your data security.',
  },

  features: {
    title: 'Why Choose Us?',
    batchTitle: 'True Unlimited Batch',
    batchDesc: 'Unlike other tools that limit to 5-10 images, we support converting up to 100 images at once',
    metadataTitle: 'Preserve Photo Info',
    metadataDesc: 'Fully preserve EXIF metadata: capture date, camera model, GPS location, and more',
    securityTitle: 'Safe & Reliable',
    securityDesc: 'HTTPS encrypted transmission, files deleted after processing, no data retained',
  },

  avif: {
    title: 'Free Online AVIF Batch Converter',
    subtitle: 'Convert AVIF images to JPG/PNG/WebP quickly. Unlimited batch processing, preserve metadata.',
    faqTitle: 'About AVIF Format',
    whatIsAvif: 'What is AVIF?',
    whatIsAvifAnswer: 'AVIF (AV1 Image File Format) is a next-generation image format based on AV1 video encoding technology. It offers better compression efficiency than JPEG, PNG, and WebP, resulting in smaller files at the same quality. Major browsers Chrome, Firefox, and Safari now support AVIF.',
    whyConvert: 'Why convert AVIF?',
    whyConvertAnswer: 'Although AVIF is an excellent image format, some older software, operating systems, or applications may not open it directly. Converting to JPG or PNG ensures images display correctly on any device.',
    advantages: 'What are the advantages of AVIF?',
    advantagesAnswer: 'AVIF can save over 50% file size compared to JPEG while maintaining the same quality. It supports HDR, wide color gamut, transparency, and animation. It is ideal for website image optimization.',
    qualityLoss: 'Will conversion cause quality loss?',
    qualityLossAnswer: 'We use 92% high quality settings by default, making differences visually imperceptible. If you need completely lossless output, choose PNG format.',
  },

  notFound: {
    title: 'Page Not Found',
    message: 'Sorry, the page you are looking for does not exist or has been removed. Please return to the homepage to continue using our image conversion service.',
    backHome: 'Back to Home',
  },

  // Converter landing pages
  converterPages: {
    heicToJpg: {
      title: 'Free HEIC to JPG Converter Online',
      subtitle: 'Convert iPhone HEIC photos to JPG format instantly. Free, unlimited batch conversion with original quality preserved.',
      metaTitle: 'HEIC to JPG Converter - Free Online Tool | Convert iPhone Photos',
      metaDescription: 'Free online HEIC to JPG converter. Convert iPhone photos from HEIC to JPG format instantly. Batch conversion supported, no registration required, preserve original quality.',
      metaKeywords: 'heic to jpg, heic to jpg converter, convert heic to jpg, heic to jpg online, iphone photo to jpg, heic converter',
      faq: {
        title: 'HEIC to JPG Conversion FAQ',
        items: [
          {
            question: 'Why convert HEIC to JPG?',
            answer: 'HEIC is Apple\'s default photo format since iOS 11. While it offers better compression, JPG has universal compatibility across all devices, operating systems, and applications. Converting to JPG ensures your photos can be viewed and shared anywhere.',
          },
          {
            question: 'Will I lose quality when converting HEIC to JPG?',
            answer: 'We use 92% quality setting by default, which preserves excellent image quality while keeping file sizes reasonable. The quality loss is virtually imperceptible to the human eye.',
          },
          {
            question: 'How many HEIC files can I convert at once?',
            answer: 'You can convert up to 100 HEIC files at once, with each file up to 50MB. Our batch conversion feature makes it easy to convert multiple photos quickly.',
          },
          {
            question: 'Is my data safe during conversion?',
            answer: 'Yes, your files are processed securely and deleted immediately after conversion. We never store your photos on our servers.',
          },
        ],
      },
    },
    heicToPng: {
      title: 'Free HEIC to PNG Converter Online',
      subtitle: 'Convert iPhone HEIC photos to PNG format with transparency support. Lossless quality, unlimited batch conversion.',
      metaTitle: 'HEIC to PNG Converter - Free Online Tool | Lossless Conversion',
      metaDescription: 'Free online HEIC to PNG converter. Convert iPhone HEIC photos to PNG format with lossless quality and transparency support. Batch conversion, no registration required.',
      metaKeywords: 'heic to png, heic to png converter, convert heic to png, heic to png online, iphone photo to png, heic png converter',
      faq: {
        title: 'HEIC to PNG Conversion FAQ',
        items: [
          {
            question: 'Why convert HEIC to PNG instead of JPG?',
            answer: 'PNG is a lossless format that preserves 100% of the original image quality. It also supports transparency, making it ideal for graphics, logos, or images that need editing. Choose PNG when quality is more important than file size.',
          },
          {
            question: 'Is PNG conversion truly lossless?',
            answer: 'Yes, PNG uses lossless compression, meaning no image data is lost during conversion. The converted PNG will have the same quality as the original HEIC file.',
          },
          {
            question: 'Why are PNG files larger than JPG?',
            answer: 'PNG uses lossless compression which preserves all image data, resulting in larger files. JPG uses lossy compression, sacrificing some quality for smaller file sizes. Choose based on your needs.',
          },
          {
            question: 'Can I convert HEIC with transparency to PNG?',
            answer: 'Yes, if your HEIC file contains transparency information, it will be preserved when converting to PNG format.',
          },
        ],
      },
    },
    avifToJpg: {
      title: 'Free AVIF to JPG Converter Online',
      subtitle: 'Convert AVIF images to JPG format for universal compatibility. Fast, free, and unlimited batch conversion.',
      metaTitle: 'AVIF to JPG Converter - Free Online Tool | Convert AVIF Images',
      metaDescription: 'Free online AVIF to JPG converter. Convert AVIF images to JPG format for universal compatibility. Batch conversion supported, no registration required.',
      metaKeywords: 'avif to jpg, avif to jpg converter, convert avif to jpg, avif to jpg online, avif converter, avif to jpeg',
      faq: {
        title: 'AVIF to JPG Conversion FAQ',
        items: [
          {
            question: 'What is AVIF format?',
            answer: 'AVIF (AV1 Image File Format) is a modern image format based on AV1 video codec. It offers superior compression compared to JPG and WebP, but may not be supported by older browsers and software.',
          },
          {
            question: 'Why convert AVIF to JPG?',
            answer: 'While AVIF offers excellent compression, JPG has near-universal support across all devices and software. Converting to JPG ensures your images can be viewed anywhere.',
          },
          {
            question: 'Will quality be lost when converting AVIF to JPG?',
            answer: 'Some quality loss may occur since JPG uses lossy compression. We use high quality settings (92%) to minimize any visible difference.',
          },
          {
            question: 'How fast is the conversion?',
            answer: 'Most conversions complete within seconds. Processing time depends on file size and number of images, but our optimized converter handles files quickly.',
          },
        ],
      },
    },
    avifToPng: {
      title: 'Free AVIF to PNG Converter Online',
      subtitle: 'Convert AVIF images to PNG format with lossless quality. Preserve transparency, unlimited batch conversion.',
      metaTitle: 'AVIF to PNG Converter - Free Online Tool | Lossless Quality',
      metaDescription: 'Free online AVIF to PNG converter. Convert AVIF images to PNG format with lossless quality and transparency preservation. Batch conversion, no registration required.',
      metaKeywords: 'avif to png, avif to png converter, convert avif to png, avif to png online, avif converter, avif png',
      faq: {
        title: 'AVIF to PNG Conversion FAQ',
        items: [
          {
            question: 'Why convert AVIF to PNG?',
            answer: 'PNG offers lossless compression and universal compatibility. Converting AVIF to PNG preserves maximum image quality and any transparency, making it ideal for editing or archiving.',
          },
          {
            question: 'Will transparency be preserved?',
            answer: 'Yes, both AVIF and PNG support transparency (alpha channel). Any transparency in the original AVIF will be preserved in the PNG output.',
          },
          {
            question: 'Why choose PNG over JPG for AVIF conversion?',
            answer: 'Choose PNG when you need lossless quality, transparency support, or plan to edit the image further. Choose JPG when you need smaller file sizes and universal compatibility.',
          },
          {
            question: 'Can I batch convert multiple AVIF files?',
            answer: 'Yes, you can convert up to 100 AVIF files at once. Simply select or drag multiple files to start batch conversion.',
          },
        ],
      },
    },
  },

  privacy: {
    title: 'Privacy Policy',
    lastUpdated: 'Last updated',
    intro: {
      title: '1. Introduction',
      content: 'Welcome to HEIC Converter ("we," "our," or "us"). We are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, and protect your data when you use our image conversion service.',
    },
    collection: {
      title: '2. Information We Collect',
      imagesTitle: '2.1 Images You Upload',
      imagesContent: 'When you use our service to convert images, your files are temporarily processed on our servers. We do not store, retain, or archive any images you upload. All uploaded files are automatically deleted immediately after the conversion process is complete.',
      autoTitle: '2.2 Automatically Collected Information',
      autoContent: 'We may collect certain information automatically when you visit our website, including:',
      autoItems: [
        'IP address (anonymized)',
        'Browser type and version',
        'Operating system',
        'Referring website',
        'Pages visited and time spent',
        'Device type (desktop, mobile, tablet)',
      ],
    },
    usage: {
      title: '3. How We Use Your Information',
      content: 'We use the collected information for the following purposes:',
      items: [
        'To provide and maintain our image conversion service',
        'To improve and optimize our website performance',
        'To analyze usage patterns and trends',
        'To detect and prevent technical issues',
        'To display relevant advertisements',
      ],
    },
    security: {
      title: '4. Image Processing & Security',
      content: 'Your privacy and data security are our top priorities:',
      items: [
        { label: 'No Storage', desc: 'Uploaded images are processed in memory and never saved to disk permanently' },
        { label: 'Immediate Deletion', desc: 'All files are deleted immediately after conversion' },
        { label: 'Secure Transfer', desc: 'All data is transmitted over HTTPS encryption' },
        { label: 'No Sharing', desc: 'We never share, sell, or distribute your images to third parties' },
        { label: 'No Access', desc: 'Our staff does not view or access your uploaded images' },
      ],
    },
    cookies: {
      title: '5. Cookies and Tracking',
      content: 'We use cookies and similar tracking technologies to:',
      items: [
        'Remember your preferences',
        'Analyze website traffic (Google Analytics)',
        'Display personalized advertisements (Google AdSense)',
      ],
      note: 'You can control cookie settings through your browser preferences. Note that disabling cookies may affect some features of our service.',
    },
    thirdParty: {
      title: '6. Third-Party Services',
      content: 'We use third-party services including Google Analytics for website traffic analysis, Google AdSense for displaying advertisements, and Vercel for website hosting. Please refer to their respective privacy policies for more information.',
    },
    rights: {
      title: '7. Your Rights',
      content: 'You have the following rights regarding your data:',
      items: [
        'Right to access your personal data',
        'Right to request deletion of your data',
        'Right to opt-out of tracking and analytics',
        'Right to disable personalized advertising',
      ],
    },
    children: {
      title: '8. Children\'s Privacy',
      content: 'Our service is not directed to children under 13 years of age. We do not knowingly collect personal information from children. If you are a parent or guardian and believe your child has provided us with personal information, please contact us.',
    },
    changes: {
      title: '9. Changes to This Policy',
      content: 'We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.',
    },
    contactTitle: '10. Contact Us',
    contactContent: 'If you have any questions about this Privacy Policy, please contact us at:',
  },

  terms: {
    title: 'Terms of Service',
    lastUpdated: 'Last updated',
    acceptance: {
      title: '1. Acceptance of Terms',
      content: 'By accessing and using HEIC Converter ("the Service"), you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our Service.',
    },
    description: {
      title: '2. Description of Service',
      content: 'HEIC Converter provides a free online tool for converting image files between various formats, including HEIC, AVIF, JPG, PNG, and WebP. The Service is provided "as is" and "as available" without any warranties of any kind.',
    },
    acceptable: {
      title: '3. Acceptable Use',
      content: 'You agree to use the Service only for lawful purposes. You must not:',
      items: [
        'Upload, convert, or distribute any content that is illegal, harmful, threatening, abusive, harassing, defamatory, or otherwise objectionable',
        'Upload content that infringes on any patent, trademark, copyright, or other intellectual property rights',
        'Upload content containing child exploitation material',
        'Attempt to interfere with or disrupt the Service or servers',
        'Use automated scripts or bots to access the Service excessively',
        'Attempt to bypass any security measures or access restrictions',
        'Use the Service to distribute malware, viruses, or other harmful code',
      ],
    },
    intellectual: {
      title: '4. Intellectual Property',
      yourContent: 'Your Content: You retain all ownership rights to the images you upload. By using our Service, you grant us a limited, temporary license to process your images solely for the purpose of providing the conversion service.',
      ourContent: 'Our Content: The Service, including its design, features, and content, is owned by us and protected by intellectual property laws. You may not copy, modify, or distribute any part of our Service without permission.',
    },
    limitations: {
      title: '5. Service Limitations',
      content: 'The Service has the following limitations:',
      items: [
        'Maximum file size: 50 MB per image',
        'Maximum files per batch: 100 images',
        'Supported input formats: HEIC, HEIF, AVIF, JPG, PNG, WebP',
        'Supported output formats: JPG, PNG, WebP, AVIF',
      ],
      note: 'We reserve the right to modify these limitations at any time without prior notice.',
    },
    privacyRef: {
      title: '6. Privacy',
      content: 'Your use of the Service is also governed by our Privacy Policy, which describes how we collect, use, and protect your information. By using the Service, you consent to our data practices as described in the Privacy Policy.',
    },
    disclaimer: {
      title: '7. Disclaimer of Warranties',
      content: 'THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. We do not warrant that:',
      items: [
        'The Service will be uninterrupted or error-free',
        'The results obtained from the Service will be accurate or reliable',
        'The quality of any converted images will meet your expectations',
        'Any errors in the Service will be corrected',
      ],
    },
    liability: {
      title: '8. Limitation of Liability',
      content: 'TO THE MAXIMUM EXTENT PERMITTED BY LAW, WE SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES, WHETHER INCURRED DIRECTLY OR INDIRECTLY, OR ANY LOSS OF DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES, RESULTING FROM:',
      items: [
        'Your use or inability to use the Service',
        'Any unauthorized access to or use of our servers',
        'Any interruption or cessation of transmission to or from the Service',
        'Any bugs, viruses, or other harmful code transmitted through the Service',
        'Any errors or omissions in any content',
      ],
    },
    indemnification: {
      title: '9. Indemnification',
      content: 'You agree to indemnify, defend, and hold harmless HEIC Converter and its officers, directors, employees, and agents from any claims, damages, losses, liabilities, and expenses (including attorneys\' fees) arising from your use of the Service or violation of these Terms.',
    },
    modifications: {
      title: '10. Modifications to Service',
      content: 'We reserve the right to modify, suspend, or discontinue the Service (or any part thereof) at any time, with or without notice. We shall not be liable to you or any third party for any modification, suspension, or discontinuance of the Service.',
    },
    termsChanges: {
      title: '11. Changes to Terms',
      content: 'We may revise these Terms of Service at any time. The most current version will always be posted on this page with the updated date. By continuing to use the Service after changes become effective, you agree to be bound by the revised terms.',
    },
    governing: {
      title: '12. Governing Law',
      content: 'These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in which we operate, without regard to its conflict of law provisions.',
    },
    contactTitle: '13. Contact Information',
    contactContent: 'If you have any questions about these Terms of Service, please contact us at:',
  },
};

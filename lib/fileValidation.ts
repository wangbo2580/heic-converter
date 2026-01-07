// lib/fileValidation.ts

/**
 * File signature (magic number) validation for image files
 * This provides an additional layer of security beyond extension-based validation
 */

// Magic number signatures for supported image formats
const FILE_SIGNATURES: Record<string, { signature: number[]; offset?: number }[]> = {
  // JPEG: starts with FF D8 FF
  jpeg: [{ signature: [0xFF, 0xD8, 0xFF] }],
  jpg: [{ signature: [0xFF, 0xD8, 0xFF] }],

  // PNG: starts with 89 50 4E 47 0D 0A 1A 0A
  png: [{ signature: [0x89, 0x50, 0x4E, 0x47, 0x0D, 0x0A, 0x1A, 0x0A] }],

  // WebP: starts with RIFF....WEBP
  webp: [
    { signature: [0x52, 0x49, 0x46, 0x46] }, // RIFF
    { signature: [0x57, 0x45, 0x42, 0x50], offset: 8 }, // WEBP at offset 8
  ],

  // HEIC/HEIF: ftyp box with heic, heix, hevc, hevx, mif1, msf1
  heic: [
    { signature: [0x66, 0x74, 0x79, 0x70, 0x68, 0x65, 0x69, 0x63], offset: 4 }, // ftypheic
    { signature: [0x66, 0x74, 0x79, 0x70, 0x68, 0x65, 0x69, 0x78], offset: 4 }, // ftypheix
    { signature: [0x66, 0x74, 0x79, 0x70, 0x6D, 0x69, 0x66, 0x31], offset: 4 }, // ftypmif1
    { signature: [0x66, 0x74, 0x79, 0x70, 0x6D, 0x73, 0x66, 0x31], offset: 4 }, // ftypmsf1
  ],
  heif: [
    { signature: [0x66, 0x74, 0x79, 0x70, 0x68, 0x65, 0x69, 0x63], offset: 4 },
    { signature: [0x66, 0x74, 0x79, 0x70, 0x68, 0x65, 0x69, 0x78], offset: 4 },
    { signature: [0x66, 0x74, 0x79, 0x70, 0x6D, 0x69, 0x66, 0x31], offset: 4 },
    { signature: [0x66, 0x74, 0x79, 0x70, 0x6D, 0x73, 0x66, 0x31], offset: 4 },
  ],

  // AVIF: ftyp box with avif
  avif: [
    { signature: [0x66, 0x74, 0x79, 0x70, 0x61, 0x76, 0x69, 0x66], offset: 4 }, // ftypavif
    { signature: [0x66, 0x74, 0x79, 0x70, 0x61, 0x76, 0x69, 0x73], offset: 4 }, // ftypavis
    { signature: [0x66, 0x74, 0x79, 0x70, 0x6D, 0x69, 0x66, 0x31], offset: 4 }, // ftypmif1 (also used for AVIF)
  ],
};

/**
 * Check if the file bytes match a specific signature
 */
function matchesSignature(bytes: Uint8Array, signature: number[], offset: number = 0): boolean {
  if (bytes.length < offset + signature.length) return false;

  for (let i = 0; i < signature.length; i++) {
    if (bytes[offset + i] !== signature[i]) return false;
  }
  return true;
}

/**
 * Validate file signature (magic number) for a given file
 * @param file - The file to validate
 * @returns Promise<boolean> - true if the file signature is valid for its extension
 */
export async function validateFileSignature(file: File): Promise<{ valid: boolean; detectedType?: string }> {
  try {
    // Read the first 32 bytes of the file (enough for most signatures)
    const buffer = await file.slice(0, 32).arrayBuffer();
    const bytes = new Uint8Array(buffer);

    // Get file extension
    const extension = file.name.split('.').pop()?.toLowerCase() || '';

    // Get expected signatures for this extension
    const expectedSignatures = FILE_SIGNATURES[extension];

    if (!expectedSignatures) {
      // Unknown extension, skip validation
      return { valid: true };
    }

    // Check if the file matches any of the expected signatures
    for (const { signature, offset = 0 } of expectedSignatures) {
      if (matchesSignature(bytes, signature, offset)) {
        return { valid: true, detectedType: extension };
      }
    }

    // If extension is heic/heif/avif, these formats might have variations
    // Check if it's a valid ISO base media file format (starts with ftyp)
    if (['heic', 'heif', 'avif'].includes(extension)) {
      // Check for ftyp box (at offset 4, bytes spell "ftyp")
      if (matchesSignature(bytes, [0x66, 0x74, 0x79, 0x70], 4)) {
        return { valid: true, detectedType: extension };
      }
    }

    // Try to detect actual file type
    for (const [type, signatures] of Object.entries(FILE_SIGNATURES)) {
      for (const { signature, offset = 0 } of signatures) {
        if (matchesSignature(bytes, signature, offset)) {
          return { valid: false, detectedType: type };
        }
      }
    }

    return { valid: false };
  } catch {
    // If we can't read the file, assume it's valid (let the server handle it)
    return { valid: true };
  }
}

/**
 * Validate multiple files
 * @param files - Array of files to validate
 * @returns Array of validation results with file references
 */
export async function validateFiles(files: File[]): Promise<{ file: File; valid: boolean; detectedType?: string }[]> {
  const results = await Promise.all(
    files.map(async (file) => {
      const result = await validateFileSignature(file);
      return { file, ...result };
    })
  );
  return results;
}

/**
 * Get a human-readable error message for invalid file types
 */
export function getFileValidationError(fileName: string, expectedType: string, detectedType?: string): string {
  if (detectedType) {
    return `File "${fileName}" appears to be a ${detectedType.toUpperCase()} file, not a ${expectedType.toUpperCase()} file.`;
  }
  return `File "${fileName}" does not appear to be a valid ${expectedType.toUpperCase()} file.`;
}

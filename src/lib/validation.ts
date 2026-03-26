import { z } from "zod";

// Helper to sanitize HTML - robust for both server and client without heavy dependencies
export const sanitizeHtml = (input: string): string => {
  if (!input) return "";
  
  // Basic but effective sanitization for simple text fields
  // 1. Remove anything that looks like an HTML tag: <tag>, <tag />, </tag>
  // 2. Remove standalone < and > characters to prevent them being interpreted as tags by some parsers
  return input
    .replace(/<[^>]*>?/gm, "")
    .replace(/[<>]/g, "")
    .trim();
};

// Helper to validate whitespace-only strings
const notWhitespaceOnly = (value: string) => value.trim().length > 0;

// Quote validation
export const quoteSchema = z.object({
  text: z
    .string()
    .min(5, "Text must be at least 5 characters")
    .max(500, "Text must be less than 500 characters")
    .refine(notWhitespaceOnly, "Text cannot be whitespace only")
    .transform((val: string) => sanitizeHtml(val.trim())),
  author: z
    .string()
    .min(2, "Author must be at least 2 characters")
    .max(100, "Author must be less than 100 characters")
    .refine(notWhitespaceOnly, "Author cannot be whitespace only")
    .transform((val: string) => sanitizeHtml(val.trim())),
  context: z
    .string()
    .min(5, "Context must be at least 5 characters")
    .max(500, "Context must be less than 500 characters")
    .refine(notWhitespaceOnly, "Context cannot be whitespace only")
    .transform((val: string) => sanitizeHtml(val.trim())),
  color: z
    .enum(["white", "red", "blue", "yellow", "green", "purple", "pink", "slate"])
    .default("white"),
  secret: z.string().min(1, "Secret code required"),
});

// Evidence validation
export const evidenceSchema = z.object({
  image: z
    .instanceof(File)
    .refine((file: File) => file.size > 0, "Image file required")
    .refine((file: File) => file.size <= 5 * 1024 * 1024, "File must be less than 5MB")
    .refine(
      (file: File) => ["image/jpeg", "image/png", "image/webp", "image/gif", "image/jpg"].includes(file.type),
      "Only JPEG, PNG, WebP, JPG and GIF images allowed"
    ),
  caption: z
    .string()
    .min(2, "Caption must be at least 2 characters")
    .max(200, "Caption must be less than 200 characters")
    .refine(notWhitespaceOnly, "Caption cannot be whitespace only")
    .transform((val: string) => sanitizeHtml(val.trim())),
  secret: z.string().min(1, "Secret code required"),
});

// Roast validation
export const roastSchema = z.object({
  image: z
    .instanceof(File)
    .optional()
    .nullable()
    .refine((file: File | null | undefined) => !file || file.size <= 5 * 1024 * 1024, "File must be less than 5MB")
    .refine(
      (file: File | null | undefined) =>
        !file || ["image/jpeg", "image/png", "image/webp", "image/gif", "image/svg+xml"].includes(file.type),
      "Only JPEG, PNG, WebP, GIF, or SVG images allowed"
    ),
  target: z
    .string()
    .min(2, "Target must be at least 2 characters")
    .max(100, "Target must be less than 100 characters")
    .refine(notWhitespaceOnly, "Target cannot be whitespace only")
    .transform((val: string) => sanitizeHtml(val.trim())),
  author: z
    .string()
    .min(2, "Author must be at least 2 characters")
    .max(100, "Author must be less than 100 characters")
    .refine(notWhitespaceOnly, "Author cannot be whitespace only")
    .transform((val: string) => sanitizeHtml(val.trim())),
  message: z
    .string()
    .min(5, "Message must be at least 5 characters")
    .max(1000, "Message must be less than 1000 characters")
    .refine(notWhitespaceOnly, "Message cannot be whitespace only")
    .transform((val) => sanitizeHtml(val.trim())),
  secret: z.string().min(1, "Secret code required"),
});

// Valid member targets for roasts
export const VALID_ROAST_TARGETS = [
  "harshali",
  "sudnya",
  "preeti",
  "payal-labhade",
  "payal-chitte",
  "mandar",
  "rahul",
  "aditya",
  "om-s",
  "shubham",
  "om-b",
  "shreedarshan",
  "group",
] as const;

export const roastTargetSchema = z.enum(VALID_ROAST_TARGETS);

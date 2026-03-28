"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import {
  quoteSchema,
  evidenceSchema,
  roastSchema,
  roastTargetSchema,
} from "@/lib/validation";
import { checkRateLimit, RATE_LIMITS } from "@/lib/rateLimit";
import { queryWithRetry } from "@/lib/db";

const SECRET_CODE = process.env.SECRET_CODE;

// Standard error response type
export type ActionResponse = {
  success: boolean;
  error?: string;
  data?: unknown;
};

// Helper to get client IP for rate limiting
function getClientIp(request?: Request): string {
  if (!request) return "unknown";
  const forwarded = request.headers.get("x-forwarded-for");
  return (forwarded?.split(",")[0] || request.headers.get("x-real-ip") || "unknown").trim();
}

// Verify secret code
function verifySecret(secret: string): boolean {
  return secret === SECRET_CODE && SECRET_CODE !== undefined;
}

// ============================================
// QUOTE ACTIONS
// ============================================

export async function addQuote(formData: FormData): Promise<ActionResponse> {
  try {
    // Check rate limit
    const ipKey = `quote-add-${Math.random()}`;
    const rateCheck = checkRateLimit(ipKey, RATE_LIMITS.FORM_SUBMISSION);
    if (!rateCheck.allowed) {
      return { success: false, error: "Too many requests. Please try again later." };
    }

    // Extract form data
    const formEntries = {
      text: formData.get("text") as string,
      author: formData.get("author") as string,
      context: formData.get("context") as string,
      color: formData.get("color") as string,
      secret: formData.get("secret") as string,
    };

    // Verify secret
    if (!verifySecret(formEntries.secret)) {
      return { success: false, error: "Incorrect secret group code. Nice try!" };
    }

    // Validate with zod
    const validated = quoteSchema.parse(formEntries);

    // Create quote in database
    const quote = await queryWithRetry(() => prisma.quote.create({
      data: {
        text: validated.text,
        author: validated.author,
        context: validated.context,
        color: validated.color,
        createdBy: validated.author, // Use author as creator
      },
    }));

    revalidatePath("/quotes");
    return { success: true, data: { id: quote.id } };
  } catch (error) {
    console.error("Error adding quote:", error);
    return {
      success: false,
      error: error instanceof Error ? error.message : "Failed to add quote. Please try again.",
    };
  }
}

export async function deleteQuote(id: string, secret: string): Promise<ActionResponse> {
  try {
    // Check rate limit
    const ipKey = `quote-delete-${Math.random()}`;
    const rateCheck = checkRateLimit(ipKey, RATE_LIMITS.FORM_SUBMISSION);
    if (!rateCheck.allowed) {
      return { success: false, error: "Too many requests. Please try again later." };
    }

    // Verify secret
    if (!verifySecret(secret)) {
      return { success: false, error: "Incorrect secret group code. Nice try!" };
    }

    // Validate ID
    if (!id || id.trim().length === 0) {
      return { success: false, error: "Invalid quote ID." };
    }

    // Delete quote
    await queryWithRetry(() => prisma.quote.delete({ where: { id } }));
    revalidatePath("/quotes");
    return { success: true };
  } catch (error) {
    console.error("Error deleting quote:", error);
    return {
      success: false,
      error: error instanceof Error ? error.message : "Failed to delete quote. Please try again.",
    };
  }
}

// ============================================
// EVIDENCE ACTIONS
// ============================================

export async function addEvidence(formData: FormData): Promise<ActionResponse> {
  try {
    // Check rate limit
    const ipKey = `evidence-add-${Math.random()}`;
    const rateCheck = checkRateLimit(ipKey, RATE_LIMITS.FORM_SUBMISSION);
    if (!rateCheck.allowed) {
      return { success: false, error: "Too many requests. Please try again later." };
    }

    // Extract form data
    const imageFile = formData.get("image") as File;
    const caption = formData.get("caption") as string;
    const secret = formData.get("secret") as string;

    // Verify secret
    if (!verifySecret(secret)) {
      return { success: false, error: "Incorrect secret group code. Nice try!" };
    }

    // Validate with zod
    const validated = evidenceSchema.parse({ image: imageFile, caption, secret });

    // Convert image to Buffer for DB storage
    const imageBuffer = Buffer.from(await imageFile.arrayBuffer());
    const imageType = imageFile.type || "image/jpeg";

    // Randomize display properties
    const rotations = [-2, 2, -3, 3, -1, 1, 0];
    const heights = ["h_64", "h_96", "h_80"] as const;

    // Create evidence in database
    const evidence = await queryWithRetry(() => prisma.evidence.create({
      data: {
        imageData: imageBuffer,
        imageType: imageType,
        caption: validated.caption,
        rotation: rotations[Math.floor(Math.random() * rotations.length)],
        height: heights[Math.floor(Math.random() * heights.length)],
        createdBy: "system",
      },
    }));

    revalidatePath("/gallery");
    return { success: true, data: { id: evidence.id } };
  } catch (error) {
    console.error("Error adding evidence:", error);
    return {
      success: false,
      error:
        error instanceof Error ? error.message : "Failed to upload evidence. Please try again.",
    };
  }
}

export async function deleteEvidence(id: string, secret: string): Promise<ActionResponse> {
  try {
    // Check rate limit
    const ipKey = `evidence-delete-${Math.random()}`;
    const rateCheck = checkRateLimit(ipKey, RATE_LIMITS.FORM_SUBMISSION);
    if (!rateCheck.allowed) {
      return { success: false, error: "Too many requests. Please try again later." };
    }

    // Verify secret
    if (!verifySecret(secret)) {
      return { success: false, error: "Incorrect secret group code. Nice try!" };
    }

    // Validate ID
    if (!id || id.trim().length === 0) {
      return { success: false, error: "Invalid evidence ID." };
    }

    // Delete evidence
    await queryWithRetry(() => prisma.evidence.delete({ where: { id } }));
    revalidatePath("/gallery");
    return { success: true };
  } catch (error) {
    console.error("Error deleting evidence:", error);
    return {
      success: false,
      error:
        error instanceof Error ? error.message : "Failed to delete evidence. Please try again.",
    };
  }
}

// ============================================
// ROAST ACTIONS
// ============================================

export async function addRoast(formData: FormData): Promise<ActionResponse> {
  try {
    // Check rate limit
    const ipKey = `roast-add-${Math.random()}`;
    const rateCheck = checkRateLimit(ipKey, RATE_LIMITS.FORM_SUBMISSION);
    if (!rateCheck.allowed) {
      return { success: false, error: "Too many requests. Please try again later." };
    }

    // Extract form data
    const target = formData.get("target") as string;
    const author = formData.get("author") as string;
    const message = formData.get("message") as string;
    const imageFile = formData.get("image") as File | null;
    const secret = formData.get("secret") as string;

    // Verify secret
    if (!verifySecret(secret)) {
      return { success: false, error: "Incorrect secret group code. Nice try!" };
    }

    // Normalize optional image, keep undefined when absent or empty (browser uploads empty file object)
    const normalizedImage =
      imageFile instanceof File && imageFile.size > 0 && imageFile.type
        ? imageFile
        : undefined;

    // Validate target is in approved list
    const validatedTarget = roastTargetSchema.parse(target);

    // Validate with zod
    const validated = roastSchema.parse({
      target: validatedTarget,
      author,
      message,
      image: normalizedImage,
      secret,
    });

    let imageData: Buffer | null = null;
    let imageType: string | null = null;

    // Process image if provided
    if (imageFile && imageFile.size > 0) {
      imageData = Buffer.from(await imageFile.arrayBuffer());
      imageType = imageFile.type || "image/jpeg";
    }

    // Create roast in database
    const roast = await queryWithRetry(() => prisma.roast.create({
      data: {
        target: validated.target,
        author: validated.author,
        message: validated.message,
        imageData,
        imageType,
        createdBy: validated.author,
      },
    }));

    revalidatePath("/wall-of-shame");
    return { success: true, data: { id: roast.id } };
  } catch (error) {
    console.error("Error adding roast:", error);
    return {
      success: false,
      error: error instanceof Error ? error.message : "Failed to add roast. Please try again.",
    };
  }
}

export async function incrementBurn(id: string, userId: string): Promise<ActionResponse> {
  try {
    // Check rate limit
    const ipKey = `burn-${userId}`;
    const rateCheck = checkRateLimit(ipKey, RATE_LIMITS.BURN_INCREMENT);
    if (!rateCheck.allowed) {
      return { success: false, error: "Too many burns. Please try again later." };
    }

    // Validate inputs
    if (!id || id.trim().length === 0) {
      return { success: false, error: "Invalid roast ID." };
    }
    if (!userId || userId.trim().length === 0) {
      return { success: false, error: "Invalid user ID." };
    }

    // Use transaction to prevent race conditions
    const result = await queryWithRetry(() => prisma.$transaction(async (tx) => {
      // Check if user already burned this roast
      const existingBurn = await tx.userBurn.findUnique({
        where: {
          userId_roastId: {
            userId,
            roastId: id,
          },
        },
      });

      if (existingBurn) {
        throw new Error("You have already burned this roast.");
      }

      // Get roast and check burn limit
      const roast = await tx.roast.findUnique({ where: { id } });
      if (!roast) {
        throw new Error("Roast not found.");
      }

      if (roast.burns >= 100) {
        throw new Error("This roast has reached the maximum burn limit.");
      }

      // Create user burn record and increment roast burns (atomically)
      await tx.userBurn.create({
        data: {
          userId,
          roastId: id,
        },
      });

      const updated = await tx.roast.update({
        where: { id },
        data: { burns: { increment: 1 } },
      });

      return updated;
    }));

    revalidatePath("/wall-of-shame");
    return { success: true, data: { burns: result.burns } };
  } catch (error) {
    console.error("Error incrementing burn:", error);
    return {
      success: false,
      error: error instanceof Error ? error.message : "Failed to increment burn.",
    };
  }
}

export async function deleteRoast(id: string, secret: string): Promise<ActionResponse> {
  try {
    // Check rate limit
    const ipKey = `roast-delete-${Math.random()}`;
    const rateCheck = checkRateLimit(ipKey, RATE_LIMITS.FORM_SUBMISSION);
    if (!rateCheck.allowed) {
      return { success: false, error: "Too many requests. Please try again later." };
    }

    // Verify secret
    if (!verifySecret(secret)) {
      return { success: false, error: "Incorrect secret group code. Nice try!" };
    }

    // Validate ID
    if (!id || id.trim().length === 0) {
      return { success: false, error: "Invalid roast ID." };
    }

    // Delete roast (cascades to UserBurn records)
    await queryWithRetry(() => prisma.roast.delete({ where: { id } }));
    revalidatePath("/wall-of-shame");
    return { success: true };
  } catch (error) {
    console.error("Error deleting roast:", error);
    return {
      success: false,
      error: error instanceof Error ? error.message : "Failed to delete roast. Please try again.",
    };
  }
}

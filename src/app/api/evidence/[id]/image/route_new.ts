import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { checkRateLimit, RATE_LIMITS } from "@/lib/rateLimit";

export const revalidate = 3600;

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    if (!id || id.trim().length === 0) {
      return NextResponse.json(
        { success: false, error: "Invalid evidence ID" },
        { status: 400 }
      );
    }

    const clientIp = request.headers.get("x-forwarded-for") || "unknown";
    const rateKey = `image-evidence-${clientIp}`;
    const rateCheck = checkRateLimit(rateKey, RATE_LIMITS.IMAGE_FETCH);
    if (!rateCheck.allowed) {
      return NextResponse.json(
        { success: false, error: "Rate limit exceeded" },
        { status: 429, headers: { "Retry-After": "60" } }
      );
    }

    const evidence = await prisma.evidence.findUnique({
      where: { id },
      select: { imageUrl: true },
    });

    if (!evidence || !evidence.imageUrl) {
      return NextResponse.json(
        { success: false, error: "Image not found" },
        { status: 404 }
      );
    }

    const response = NextResponse.redirect(evidence.imageUrl);
    response.headers.set("Cache-Control", "public, max-age=3600, immutable");
    return response;
  } catch (error) {
    console.error("Error fetching evidence image:", error);
    return NextResponse.json(
      { success: false, error: "Internal server error" },
      { status: 500 }
    );
  }
}

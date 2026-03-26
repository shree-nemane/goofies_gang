import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { checkRateLimit, RATE_LIMITS } from "@/lib/rateLimit";

export const dynamic = "force-dynamic";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    if (!id || id.trim().length === 0) {
      return NextResponse.json(
        { success: false, error: "Invalid roast ID" },
        { status: 400 }
      );
    }

    const clientIp = request.headers.get("x-forwarded-for") || "unknown";
    const rateKey = `image-roast-${clientIp}`;
    const rateCheck = checkRateLimit(rateKey, RATE_LIMITS.IMAGE_FETCH);
    if (!rateCheck.allowed) {
      return NextResponse.json(
        { success: false, error: "Rate limit exceeded" },
        { status: 429, headers: { "Retry-After": "60" } }
      );
    }

    const roast = await prisma.roast.findUnique({
      where: { id },
      select: { imageUrl: true },
    });

    if (!roast || !roast.imageUrl) {
      return NextResponse.json(
        { success: false, error: "Image not found" },
        { status: 404 }
      );
    }

    const response = NextResponse.redirect(roast.imageUrl);
    response.headers.set("Cache-Control", "public, max-age=3600, immutable");
    return response;
  } catch (error) {
    console.error("Error fetching roast image:", error);
    return NextResponse.json(
      { success: false, error: "Internal server error" },
      { status: 500 }
    );
  }
}
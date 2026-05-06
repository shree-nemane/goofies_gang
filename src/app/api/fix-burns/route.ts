import { prisma } from "@/lib/prisma";
import { queryWithRetry } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    // Get all roasts with their current burn counts
    const roasts = await queryWithRetry(() => prisma.roast.findMany({
      select: {
        id: true,
        burns: true,
        _count: {
          select: {
            userBurns: true,
          },
        },
      },
    }));

    let fixedCount = 0;
    const updates = [];

    for (const roast of roasts) {
      const actualBurns = roast._count.userBurns;

      if (roast.burns !== actualBurns) {
        updates.push({
          id: roast.id,
          oldBurns: roast.burns,
          newBurns: actualBurns,
        });

        // Update the roast with correct burn count
        await queryWithRetry(() => prisma.roast.update({
          where: { id: roast.id },
          data: { burns: actualBurns },
        }));

        fixedCount++;
      }
    }

    return NextResponse.json({
      success: true,
      message: `Fixed ${fixedCount} roasts with incorrect burn counts`,
      updates,
    });
  } catch (error) {
    console.error("Error fixing burn counts:", error);
    return NextResponse.json(
      { success: false, error: "Failed to fix burn counts" },
      { status: 500 }
    );
  }
}
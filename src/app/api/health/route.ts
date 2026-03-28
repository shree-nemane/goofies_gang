import { prisma } from '@/lib/prisma';
import { queryWithRetry } from '@/lib/db';

export async function GET() {
  try {
    const count = await queryWithRetry(() => prisma.roast.count());
    return Response.json({ status: 'ok', roastCount: count });
  } catch (error: any) {
    return Response.json(
      {
        status: 'error',
        message: error.message,
        code: error.code,
      },
      { status: 500 }
    );
  }
}
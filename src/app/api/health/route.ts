import { prisma } from '@/lib/prisma';

export async function GET() {
  try {
    const count = await prisma.roast.count();
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
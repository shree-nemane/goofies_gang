import { prisma } from '@/lib/prisma';
import { queryWithRetry } from '@/lib/db';

export const dynamic = 'force-dynamic';

export async function GET() {
  const startTime = Date.now();
  
  try {
    // Check multiple tables to ensure DB is fully responsive
    const [roastCount, quoteCount, evidenceCount] = await Promise.all([
      queryWithRetry(() => prisma.roast.count()),
      queryWithRetry(() => prisma.quote.count()),
      queryWithRetry(() => prisma.evidence.count()),
    ]);

    const duration = Date.now() - startTime;

    return Response.json({ 
      status: 'healthy',
      database: 'connected',
      latency: `${duration}ms`,
      timestamp: new Date().toISOString(),
      uptime: `${process.uptime().toFixed(2)}s`,
      stats: {
        roasts: roastCount,
        quotes: quoteCount,
        evidence: evidenceCount,
      },
      environment: process.env.NODE_ENV
    });
  } catch (error: any) {
    console.error('Health check failed:', error);
    
    return Response.json(
      {
        status: 'unhealthy',
        database: 'error',
        message: error.message,
        code: error.code,
        timestamp: new Date().toISOString(),
      },
      { status: 500 }
    );
  }
}
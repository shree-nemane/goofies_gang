interface RateLimitRecord {
  count: number;
  resetTime: number;
}

// In-memory rate limit store (in production, use Redis)
const rateLimitStore = new Map<string, RateLimitRecord>();

// Configuration
export const RATE_LIMITS = {
  FORM_SUBMISSION: { maxRequests: 10, windowMs: 60000 }, // 10 per minute
  IMAGE_FETCH: { maxRequests: 30, windowMs: 60000 }, // 30 per minute
  BURN_INCREMENT: { maxRequests: 20, windowMs: 60000 }, // 20 per minute
};

export function checkRateLimit(
  key: string,
  config: { maxRequests: number; windowMs: number }
): { allowed: boolean; remaining: number } {
  const now = Date.now();
  const record = rateLimitStore.get(key);

  if (!record || now > record.resetTime) {
    // Create new record
    rateLimitStore.set(key, {
      count: 1,
      resetTime: now + config.windowMs,
    });
    return { allowed: true, remaining: config.maxRequests - 1 };
  }

  if (record.count >= config.maxRequests) {
    return { allowed: false, remaining: 0 };
  }

  record.count++;
  return { allowed: true, remaining: config.maxRequests - record.count };
}

// Clean up old records periodically
setInterval(() => {
  const now = Date.now();
  for (const [key, record] of rateLimitStore.entries()) {
    if (now > record.resetTime) {
      rateLimitStore.delete(key);
    }
  }
}, 60000); // Cleanup every minute

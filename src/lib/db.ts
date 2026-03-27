export async function queryWithRetry<T>(
  fn: () => Promise<T>,
  maxRetries = 4
): Promise<T> {
  let lastError: Error | null = null;

  for (let i = 0; i < maxRetries; i++) {
    try {
      console.log(`[DB Query] Attempt ${i + 1}/${maxRetries}`);
      const result = await fn();
      console.log('[DB Query] Success');
      return result;
    } catch (error) {
      lastError = error as Error;
      console.error(`[DB Query] Attempt ${i + 1} failed:`, lastError.message);
      
      if (i < maxRetries - 1) {
        const delay = 100 * Math.pow(2, i);
        console.log(`[DB Query] Retrying in ${delay}ms...`);
        await new Promise(resolve => setTimeout(resolve, delay));
      }
    }
  }

  console.error('[DB Query] All retries exhausted');
  throw lastError;
}
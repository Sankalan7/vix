// A simple in-memory mock database for MVP phase 2 testing
// In production, replace with Supabase anon_usage table

const usageStore = new Map<string, number>();

export function getUsage(fingerprint: string): number {
  return usageStore.get(fingerprint) || 0;
}

export function incrementUsage(fingerprint: string): number {
  const current = getUsage(fingerprint);
  usageStore.set(fingerprint, current + 1);
  return current + 1;
}

import { NextResponse } from 'next/server';
import { getUsage } from '@/lib/mockDb';

const LIMIT = parseInt(process.env.FREE_QUOTA_LIMIT || '10', 10);

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const fingerprint = searchParams.get('fingerprint') || 'anonymous';

    const used = getUsage(fingerprint);

    return NextResponse.json({
      used,
      limit: LIMIT
    });
  } catch (err: any) {
    return NextResponse.json({ message: err.message }, { status: 500 });
  }
}


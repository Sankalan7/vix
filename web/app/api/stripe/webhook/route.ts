import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    // In production, we would use stripe.webhooks.constructEvent to verify the Stripe signature
    // const event = stripe.webhooks.constructEvent(body, sig, endpointSecret);

    console.log('Received Stripe webhook event (Mock)');
    
    // TODO: Phase 3 - Update Supabase profiles table setting `is_paid = true` for the user
    // const { userId } = event.data.object.metadata;
    // await supabase.from('profiles').update({ is_paid: true }).eq('id', userId);

    return NextResponse.json({ received: true });
  } catch (err: any) {
    console.error('Webhook error:', err.message);
    return NextResponse.json({ message: err.message }, { status: 400 });
  }
}

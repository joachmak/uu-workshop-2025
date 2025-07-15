import { NextRequest, NextResponse } from 'next/server';
import { addMarketplacePosting } from '@/app/db/db-crud';

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    const { imageUrl, title, description, price } = data;
    if (!imageUrl || !title || !description || !price) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }
    addMarketplacePosting({ imageUrl, title, description, price });
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to add posting' }, { status: 500 });
  }
} 
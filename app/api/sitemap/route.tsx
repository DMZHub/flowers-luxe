import { NextResponse } from 'next/server';

// This is required for static export
export const dynamic = 'force-static';

export async function GET() {
  // Your sitemap generation logic here
  // For static export, we need to return a static response
  
  return NextResponse.json({ message: 'Sitemap static version' });
}

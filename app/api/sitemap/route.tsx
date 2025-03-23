// File: app/api/sitemap/route.tsx

import { NextResponse } from 'next/server';
import { generateSitemap } from '@/utils/generateSitemap';

/**
 * API route handler to regenerate the sitemap
 * This can be called manually or through a webhook
 */
export async function GET() {
  try {
    const result = await generateSitemap();
    return NextResponse.json({ success: true, message: 'Sitemap generated successfully' });
  } catch (error) {
    console.error('Error generating sitemap:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to generate sitemap', error: String(error) },
      { status: 500 }
    );
  }
}
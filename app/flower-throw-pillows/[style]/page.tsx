// app/flower-throw-pillows/[style]/page.tsx
import { StylePageParams } from '../../../components/ParamsWrapper';
import StylePageContent from './StylePageContent';

// This is the page component that Next.js 15 expects
export default async function StylePage({ 
  params,
  searchParams 
}: { 
  params: Promise<StylePageParams>;
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  // Resolve the async params
  const resolvedParams = await params;

  // Render your existing component with resolved params only
  return (
    <StylePageContent 
      params={resolvedParams}
    />
  );
}

// Generate metadata function (handles async params)
export async function generateMetadata({ 
  params 
}: { 
  params: Promise<StylePageParams> 
}) {
  const { style } = await params;
  
  const { generateStylePageMetadata } = await import('../../../utils/seo');
  const { getProductsByFilters } = await import('../../../data/products');
  
  const styleProducts = getProductsByFilters({ style: style as any });
  return generateStylePageMetadata(style, styleProducts.length);
}

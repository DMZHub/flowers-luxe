// app/flower-throw-pillows/[style]/page.tsx
import { createWrappedPage, StylePageParams } from '../../../components/ParamsWrapper';
import StylePageComponent from './StylePageComponent';

// Export the wrapped page component that handles Next.js 15 async params
export default createWrappedPage<StylePageParams>(StylePageComponent);

// Generate metadata function (still needs to handle async params)
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

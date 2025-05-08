// app/custom/[slug]/layout.tsx
export function generateStaticParams() {
  return [
 
    // New custom products from your document
    { slug: 'custom-cat-pillow-unique-cat-gift' },
    { slug: 'custom-cat-mug-personalized-mug-for-cat-lovers' },
    { slug: 'custom-cat-stickers-personalized-gifts' },
    { slug: 'custom-cat-tote-bag-unique-tote-bag' },

    
  ]
}

export default function CustomLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}

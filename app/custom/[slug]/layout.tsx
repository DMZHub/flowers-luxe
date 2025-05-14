// app/custom/[slug]/layout.tsx
export function generateStaticParams() {
  return [
    // Existing products
     { slug: 'custom-cat-pillow-unique-cat-gift' },
    { slug: 'custom-cat-mug-personalized-mug-for-cat-lovers' },
    { slug: 'custom-cat-tote-bag-unique-tote-bag' },
    { slug: 'custom-cat-stickers-personalized-gifts' },
 
  ]
}

export default function CustomLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}

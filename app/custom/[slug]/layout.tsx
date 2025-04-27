// app/custom/[slug]/layout.tsx
export function generateStaticParams() {
  return [
    { slug: 'custom-flower-mug-best-gift-for-new-moms' },
    { slug: 'personalized-name-floral-mug' },
    
  ]
}
  export default function CustomLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>
  }


export function generateStaticParams() {
  return [
    { slug: 'throw-pillows' },
    { slug: 'stickers' },
    { slug: 'mugs' },
    { slug: 'art' },
    { slug: 'tote-bags' },
    { slug: 'tapestries' },
    { slug: 'pins' }
  ]
}

export default function CategoryLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}

import React from "react"
import Link from "next/link"
import Image from "next/image"
import type { Metadata } from 'next'
import { FiCalendar, FiClock, FiTag, FiArrowRight, FiArrowLeft, FiChevronRight, FiStar } from "react-icons/fi"
import Breadcrumbs from "../../../components/Breadcrumbs"
import SchemaMarkup from "../../../components/SchemaMarkup"

// Article Config
const ARTICLE = {
  title: "What Kind of Pillows Go With a Leather Couch?",
  slug: "what-kind-of-pillows-go-with-a-leather-couch",
  description:
    "Discover the perfect pillows for leather couches with expert styling tips, 5+ stunning examples, fabric guides, and seasonal decorating ideas. Transform your leather sofa into a cozy, stylish centerpiece.",
  category: "Home Decor",
  categorySlug: "home-decor",
  author: "FlowersLuxe Editorial Team",
  publishDateISO: "2025-08-11",
  modifiedDateISO: "2025-08-11",
  publishDateHuman: "August 11, 2025",
  readTime: "16 min read",
  hero: {
    src: "/images/blog/leather-couch/cognac-pillow-leather-sectional.webp",
    alt: "cognac leather sectional with cream, terracotta, and tribal throw pillows in cozy room with vintage rug",
    width: 1200,
    height: 800,
  },
}

// Server-side metadata export
export const metadata: Metadata = {
  title: `${ARTICLE.title} | FlowersLuxe Blog`,
  description: ARTICLE.description,
  keywords: "what kind of pillows go with leather couch, leather sofa pillow ideas, throw pillows for leather couch, decorating leather furniture, leather sectional styling, brown leather couch pillows, cognac leather sofa decor",
  openGraph: {
    title: `${ARTICLE.title} | FlowersLuxe Blog`,
    description: ARTICLE.description,
    type: "article",
    url: `https://flowersluxe.com/blog/${ARTICLE.slug}`,
    images: [
      {
        url: `https://flowersluxe.com${ARTICLE.hero.src}`,
        width: ARTICLE.hero.width,
        height: ARTICLE.hero.height,
        alt: ARTICLE.hero.alt,
      },
    ],
    siteName: 'FlowersLuxe',
  },
  twitter: {
    card: "summary_large_image",
    title: `${ARTICLE.title} | FlowersLuxe Blog`,
    description: ARTICLE.description,
    images: [`https://flowersluxe.com${ARTICLE.hero.src}`],
  },
  alternates: {
    canonical: `https://flowersluxe.com/blog/${ARTICLE.slug}`,
  },
  other: {
    'article:published_time': ARTICLE.publishDateISO,
    'article:modified_time': ARTICLE.modifiedDateISO,
    'article:section': ARTICLE.category,
    'article:author': ARTICLE.author,
  },
}

// Product Images from CSV data
const PRODUCT_IMAGES: Array<{
  src: string
  alt: string
  caption: string
  link: string
  width: number
  height: number
}> = [
  {
    src: "/images/blog/leather-couch/pink-peony-pillow-leather-sofa.webp",
    alt: "Floral throw pillows with pink peony prints on a caramel leather sectional sofa in a warmly lit living room",
    caption: "Shop Romantic Pink Peony Pillow",
    link: "https://flowersluxe.com/flower-throw-pillows/watercolor/romantic-pink-peony-pillow",
    width: 1200,
    height: 800,
  },
  {
    src: "/images/blog/leather-couch/golden-rose-pillows-brown-leather-sofa.webp",
    alt: "Brown leather sofa with two throw pillows featuring golden rose floral print",
    caption: "Shop Vintage Toffee Rose Pillow",
    link: "https://flowersluxe.com/flower-throw-pillows/vintage/vintage-toffee-rose-pillow/",
    width: 1200,
    height: 800,
  },
  {
    src: "/images/blog/leather-couch/dahlia-pillows-cognac-leather-sofas.webp",
    alt: "Cognac leather sofas styled with four colorful dahlia print throw pillows in a modern living room",
    caption: "Shop Autumn Dahlia Luxe Pillow",
    link: "https://flowersluxe.com/flower-throw-pillows/floral/autumn-dahlia-luxe-pillow/",
    width: 1200,
    height: 800,
  },
  {
    src: "/images/blog/leather-couch/floral-american-pillow-brown-leather-sofa.webp",
    alt: "American flag-themed floral throw pillows with sunflowers, roses, and daisies on a brown leather sectional sofa in a patriotic living room",
    caption: "Shop Patriotic Floral Flag Pillow",
    link: "https://flowersluxe.com/flower-throw-pillows/vintage/patriotic-floral-flag-pillow/",
    width: 1200,
    height: 800,
  },
  {
    src: "/images/blog/leather-couch/pink-peony-pillow-brown-leather-sofa.webp",
    alt: "Pink peony flower print throw pillows on a brown leather sectional sofa with a vintage American flag wall hanging",
    caption: "Shop Blush Peony Bloom Pillow",
    link: "https://flowersluxe.com/flower-throw-pillows/watercolor/blush-peony-bloom-pillow/",
    width: 1200,
    height: 800,
  },
]

// JSON-LD Schema Objects
function getArticleSchema(currentUrl: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: ARTICLE.title,
    description: ARTICLE.description,
    author: { "@type": "Organization", name: ARTICLE.author },
    publisher: {
      "@type": "Organization",
      name: "FlowersLuxe",
      logo: {
        "@type": "ImageObject",
        url: "https://flowersluxe.com/images/logo.png",
      },
    },
    datePublished: ARTICLE.publishDateISO,
    dateModified: ARTICLE.modifiedDateISO,
    mainEntityOfPage: currentUrl,
    articleSection: ARTICLE.category,
    image: PRODUCT_IMAGES.map((img) => ({
      "@type": "ImageObject",
      url: `https://flowersluxe.com${img.src}`,
      caption: img.caption,
      description: img.alt,
      width: img.width,
      height: img.height,
    })),
    url: currentUrl,
    wordCount: "5200",
  }
}

function getFAQSchema(currentUrl: string) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What kind of pillows go with leather couches?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The best pillows for leather couches are textured fabrics like linen, velvet, and cotton. Avoid matching leather-on-leather. Choose warm neutrals, rich jewel tones, or soft patterns. Floral prints, geometric designs, and vintage-inspired patterns work particularly well."
        }
      },
      {
        "@type": "Question",
        name: "What colors look best on brown leather sofas?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Brown leather sofas look stunning with cream, ivory, sage green, dusty rose, burnt orange, and golden yellow pillows. These colors complement the warm undertones in brown leather while creating beautiful contrast."
        }
      },
      {
        "@type": "Question",
        name: "How many pillows should I put on a leather sectional?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "For leather sectionals, use 5-7 pillows total. Place 2-3 on each end section and 1-2 in the corner. Use odd numbers for visual balance and vary sizes - mix 20x20 inch and 16x16 inch pillows for best results."
        }
      },
      {
        "@type": "Question",
        name: "What fabrics work best with leather furniture?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Natural fabrics like linen, cotton, wool, and velvet work beautifully with leather. These create textural contrast and soften the sleek leather surface. Avoid synthetic materials that might look cheap against quality leather."
        }
      },
      {
        "@type": "Question",
        name: "Should pillows match leather couch color?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No, avoid matching pillow colors exactly to your leather couch. Instead, choose complementary or contrasting colors that enhance the leather's natural tones. This creates depth and visual interest rather than a flat, monotone look."
        }
      }
    ],
    url: currentUrl
  };
}

// Performance optimized styles
const OptimizedStyles = () => (
  <style
    dangerouslySetInnerHTML={{
      __html: `
        .toc-sticky{position:sticky;top:96px;will-change:transform}
        @media (max-width:1023px){.toc-sticky{position:static;top:auto}}
        .toc-card{background:#fafaf9;border:1px solid #eee;border-radius:12px;padding:20px;box-shadow:0 2px 8px rgba(0,0,0,0.08)}
        .toc-link{display:flex;align-items:center;gap:8px;padding:8px 4px;border-radius:8px;color:#374151;text-decoration:none;transition:all 0.2s ease;font-size:14px;line-height:1.4}
        .toc-link:hover{background:#f3f4f6;color:#111827;transform:translateX(2px)}
        .toc-bullet{display:inline-block;width:6px;height:6px;border-radius:9999px;background:#9ca3af}
        .section-anchor{scroll-margin-top:120px}
        table{width:100%;border-collapse:separate;border-spacing:0;border:1px solid #e5e7eb;border-radius:12px;overflow:hidden;background:#fff;margin:1.5rem 0}
        th,td{padding:14px 16px;border-bottom:1px solid #e5e7eb;text-align:left}
        thead th{background:#f9fafb;font-weight:600;color:#374151;font-size:14px}
        tbody td{font-size:14px;line-height:1.5}
        tr:last-child td{border-bottom:none}
        tr:hover{background:#f8fafc}
        .product-card{background:#fff;border:1px solid #e5e7eb;border-radius:16px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.06);transition:all 0.3s ease;margin:2rem 0}
        .product-card:hover{box-shadow:0 4px 16px rgba(0,0,0,0.12);transform:translateY(-2px)}
        .product-card img{transition:transform 0.3s ease}
        .product-card:hover img{transform:scale(1.02)}
        .product-caption{background:linear-gradient(135deg,#8b5a2b 0%,#a0522d 100%);color:#fff;padding:14px 18px;font-weight:500;display:flex;align-items:center;justify-content:space-between}
        .fade-in{animation:fadeIn 0.6s ease-out}
        @keyframes fadeIn{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}
        .content-spacing > *{margin-bottom:1.5rem}
        .content-spacing > *:last-child{margin-bottom:0}
        .highlight-box{background:linear-gradient(135deg,#fef7ed 0%,#fed7aa 100%);border:1px solid #fdba74;border-radius:12px;padding:20px;margin:1.5rem 0}
        .tip-box{background:#f0f9ff;border-left:4px solid #0ea5e9;padding:16px 20px;border-radius:0 8px 8px 0;margin:1.5rem 0}
        .comparison-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:16px;margin:1.5rem 0}
        .comparison-card{background:#fff;border:1px solid #e5e7eb;border-radius:12px;padding:20px;box-shadow:0 1px 3px rgba(0,0,0,0.1)}
        .star-rating{display:flex;gap:2px;margin:8px 0}
        .star-rating .star{color:#fbbf24}
        @media (max-width: 768px){
          .product-card{margin:1.5rem 0}
          .toc-card{display:none}
          .comparison-grid{grid-template-columns:1fr}
        }
      `,
    }}
  />
)

// Table of Contents Component
const TableOfContents = () => (
  <aside className="lg:col-span-4">
    <div className="toc-sticky">
      <div className="toc-card">
        <h3 className="font-semibold text-gray-900 mb-4">Table of Contents</h3>
        <nav>
          <a href="#quick-guide" className="toc-link">
            <span className="toc-bullet"></span>
            <span>Quick Style Guide</span>
          </a>
          <a href="#fabric-guide" className="toc-link">
            <span className="toc-bullet"></span>
            <span>Best Fabrics for Leather</span>
          </a>
          <a href="#color-combinations" className="toc-link">
            <span className="toc-bullet"></span>
            <span>Perfect Color Combinations</span>
          </a>
          <a href="#pillow-examples" className="toc-link">
            <span className="toc-bullet"></span>
            <span>5 Stunning Examples</span>
          </a>
          <a href="#styling-formulas" className="toc-link">
            <span className="toc-bullet"></span>
            <span>Arrangement Formulas</span>
          </a>
          <a href="#seasonal-styling" className="toc-link">
            <span className="toc-bullet"></span>
            <span>Seasonal Updates</span>
          </a>
          <a href="#pattern-mixing" className="toc-link">
            <span className="toc-bullet"></span>
            <span>Pattern Mixing Rules</span>
          </a>
          <a href="#common-mistakes" className="toc-link">
            <span className="toc-bullet"></span>
            <span>Avoid These Mistakes</span>
          </a>
          <a href="#faqs" className="toc-link">
            <span className="toc-bullet"></span>
            <span>Frequently Asked Questions</span>
          </a>
        </nav>
      </div>
    </div>
  </aside>
)

// Main Component
export default function LeatherCouchPillowsArticlePage() {
  const currentUrl = `https://flowersluxe.com/blog/${ARTICLE.slug}`
  
  const articleSchema = getArticleSchema(currentUrl)
  const faqSchema = getFAQSchema(currentUrl)

  const breadcrumbItems = [
    { name: "Home", url: "/" },
    { name: "Blog", url: "/blog" },
    { name: "Home Decor", url: "/blog/home-decor" },
    { name: ARTICLE.title, url: `/blog/${ARTICLE.slug}` },
  ]

  return (
    <>
      <OptimizedStyles />
      <SchemaMarkup schema={articleSchema} />
      <SchemaMarkup schema={faqSchema} />

      {/* Breadcrumbs */}
      <div className="container-custom">
        <Breadcrumbs items={breadcrumbItems} />
      </div>

      {/* Header / Hero */}
      <header className="py-8 md:py-12">
        <div className="container-custom max-w-4xl mx-auto">
          <div className="mb-4">
            <Link href="/blog" className="inline-flex items-center gap-2 text-primary hover:text-primary-dark font-medium transition-colors">
              <FiArrowLeft size={18} />
              <span>Back to Blog</span>
            </Link>
          </div>

          <div className="flex flex-wrap items-center gap-3 text-sm text-gray-600 mb-6">
            <span className="inline-flex items-center gap-2">
              <FiTag size={14} />
              <span className="bg-primary/10 text-primary px-3 py-1 rounded-full font-medium">{ARTICLE.category}</span>
            </span>
            <span className="inline-flex items-center gap-1">
              <FiCalendar size={14} />
              <time dateTime={ARTICLE.publishDateISO}>{ARTICLE.publishDateHuman}</time>
            </span>
            <span className="inline-flex items-center gap-1">
              <FiClock size={14} />
              <span>{ARTICLE.readTime}</span>
            </span>
          </div>

          <h1 className="font-cormorant text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900 mb-6">{ARTICLE.title}</h1>

          {/* Hero Image */}
          <figure className="product-card mb-8">
            <Link href="/flower-throw-pillows" className="block">
              <Image
                src={ARTICLE.hero.src}
                alt={ARTICLE.hero.alt}
                width={ARTICLE.hero.width}
                height={ARTICLE.hero.height}
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                className="w-full h-auto object-cover"
                style={{ aspectRatio: '3/2' }}
              />
            </Link>
            <div className="product-caption">
              <Link href="/flower-throw-pillows" className="text-white hover:text-gray-200 font-medium inline-flex items-center gap-2 transition-colors">
                <span>Explore All Floral Pillow Collections</span>
                <FiArrowRight size={16} />
              </Link>
            </div>
          </figure>

          {/* Engaging intro with keyword in first 100 words */}
          <div className="content-spacing text-lg leading-relaxed">
            <p className="text-gray-700">
              Leather couches are timeless investments that anchor any living space, but figuring out <strong>what kind of pillows go with a leather couch</strong> can make or break your room's entire aesthetic. The wrong pillows can make your beautiful leather furniture look sterile or cheap, while the right ones transform it into a cozy, designer-worthy focal point.
            </p>
            
            <p className="text-gray-700">
              The secret isn't about expensive throws or trending colors — it's about understanding texture contrast, complementary tones, and strategic placement. In this comprehensive guide, we'll show you exactly which fabrics, colors, and patterns work best with different leather types, plus 5+ stunning real examples you can copy in your own home.
            </p>
          </div>
        </div>
      </header>

      {/* Body */}
      <article className="pb-16 md:pb-24">
        <div className="container-custom grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Table of Contents */}
          <TableOfContents />

          {/* Main content */}
          <div className="lg:col-span-8 max-w-3xl">
            
            {/* Quick Style Guide */}
            <section id="quick-guide" className="prose prose-lg max-w-none section-anchor fade-in">
              <h2 className="font-cormorant text-3xl font-bold mb-6">Quick Style Guide for Leather Couches</h2>
              <table className="w-full mb-8">
                <thead>
                  <tr>
                    <th className="text-left font-semibold text-gray-900">Leather Type</th>
                    <th className="text-left font-semibold text-gray-900">Best Pillow Colors</th>
                    <th className="text-left font-semibold text-gray-900">Ideal Fabrics</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="font-medium text-gray-700">Brown/Cognac</td>
                    <td className="text-gray-700">Cream, sage green, dusty rose, golden yellow</td>
                    <td className="text-gray-700">Linen, velvet, cotton</td>
                  </tr>
                  <tr>
                    <td className="font-medium text-gray-700">Black Leather</td>
                    <td className="text-gray-700">Bright white, jewel tones, metallic accents</td>
                    <td className="text-gray-700">Faux fur, silk, textured cotton</td>
                  </tr>
                  <tr>
                    <td className="font-medium text-gray-700">Tan/Caramel</td>
                    <td className="text-gray-700">Navy blue, forest green, burgundy, ivory</td>
                    <td className="text-gray-700">Burlap, wool, canvas</td>
                  </tr>
                  <tr>
                    <td className="font-medium text-gray-700">Gray Leather</td>
                    <td className="text-gray-700">Blush pink, coral, mustard, crisp white</td>
                    <td className="text-gray-700">Chenille, knit, linen</td>
                  </tr>
                  <tr>
                    <td className="font-medium text-gray-700">White/Cream</td>
                    <td className="text-gray-700">Any bold color, patterns, rich textures</td>
                    <td className="text-gray-700">All fabrics work well</td>
                  </tr>
                </tbody>
              </table>

              <div className="highlight-box">
                <h3 className="font-semibold text-gray-900 mb-3">💡 Designer's Secret</h3>
                <p className="text-gray-700 mb-0">The golden rule for leather furniture: <strong>never match pillow materials to your couch</strong>. Leather-on-leather looks monotone and expensive furniture can actually appear cheap. Instead, choose contrasting textures that make your leather pop.</p>
              </div>
            </section>

            {/* Best Fabrics Guide */}
            <section id="fabric-guide" className="prose prose-lg max-w-none section-anchor">
              <h2 className="font-cormorant text-3xl font-bold mb-6">Best Fabric Types for Leather Furniture</h2>
              
              <div className="content-spacing">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Leather has a naturally smooth, sleek surface, so the best pillow fabrics create textural contrast. Think of it like pairing a silk blouse with denim jeans — the different textures complement each other beautifully.
                </p>

                <div className="comparison-grid">
                  <div className="comparison-card">
                    <h3 className="font-semibold text-gray-900 mb-3">🏆 Premium Choices</h3>
                    <div className="star-rating">
                      <FiStar className="star" size={16} />
                      <FiStar className="star" size={16} />
                      <FiStar className="star" size={16} />
                      <FiStar className="star" size={16} />
                      <FiStar className="star" size={16} />
                    </div>
                    <ul className="text-sm text-gray-700 space-y-2">
                      <li><strong>Linen:</strong> Natural, relaxed texture that softens leather's formality</li>
                      <li><strong>Velvet:</strong> Luxurious contrast, especially gorgeous with brown leather</li>
                      <li><strong>Wool:</strong> Cozy warmth that balances leather's coolness</li>
                      <li><strong>Cotton Canvas:</strong> Casual, durable, perfect for family rooms</li>
                    </ul>
                  </div>
                  
                  <div className="comparison-card">
                    <h3 className="font-semibold text-gray-900 mb-3">✅ Good Options</h3>
                    <div className="star-rating">
                      <FiStar className="star" size={16} />
                      <FiStar className="star" size={16} />
                      <FiStar className="star" size={16} />
                      <FiStar className="star" size={16} />
                      <span className="text-gray-300"><FiStar size={16} /></span>
                    </div>
                    <ul className="text-sm text-gray-700 space-y-2">
                      <li><strong>Chenille:</strong> Soft texture, budget-friendly</li>
                      <li><strong>Knit Fabrics:</strong> Cozy, casual feel</li>
                      <li><strong>Burlap/Jute:</strong> Rustic texture for farmhouse styles</li>
                      <li><strong>Faux Fur:</strong> Ultimate luxury contrast</li>
                    </ul>
                  </div>
                </div>

                <div className="tip-box">
                  <p className="text-gray-700 mb-0"><strong>Pro Tip:</strong> Avoid synthetic materials like polyester blends on quality leather furniture. They can look cheap and don't age well. Natural fibers complement leather's premium quality much better.</p>
                </div>
              </div>
            </section>

            {/* Perfect Color Combinations */}
            <section id="color-combinations" className="prose prose-lg max-w-none section-anchor">
              <h2 className="font-cormorant text-3xl font-bold mb-6">Perfect Color Combinations by Leather Type</h2>
              
              <div className="content-spacing">
                <p className="text-lg text-gray-700 leading-relaxed">
                  The key to choosing pillow colors for leather furniture isn't following trends — it's understanding undertones. Every leather piece has warm or cool undertones that determine which colors will look harmonious versus jarring.
                </p>

                <h3 className="font-semibold text-xl text-gray-900 mt-8 mb-4">Brown & Cognac Leather (Warm Undertones)</h3>
                <p className="text-gray-700 leading-relaxed">
                  Brown leather is the most versatile and forgiving. Its warm undertones pair beautifully with both earthy neutrals and unexpected pops of color. The key is avoiding anything too cool-toned, which can create an unpleasant clash.
                </p>
                
                <div className="highlight-box">
                  <h4 className="font-medium text-gray-800 mb-3">Perfect Color Palette:</h4>
                  <ul className="text-gray-700 space-y-1 mb-4">
                    <li>• <strong>Warm Neutrals:</strong> Cream, ivory, warm white, mushroom gray</li>
                    <li>• <strong>Earthy Tones:</strong> Sage green, dusty rose, terra cotta, burnt orange</li>
                    <li>• <strong>Rich Accents:</strong> Golden yellow, deep burgundy, forest green</li>
                    <li>• <strong>Floral Patterns:</strong> Vintage roses, autumn dahlias, warm botanicals</li>
                  </ul>
                  <p className="text-sm text-gray-600 mb-0"><em>Avoid: Cool blues, stark white, purple tones</em></p>
                </div>

                <h3 className="font-semibold text-xl text-gray-900 mt-8 mb-4">Black Leather (Neutral Base)</h3>
                <p className="text-gray-700 leading-relaxed">
                  Black leather is your blank canvas — almost any color works, but the trick is choosing the right intensity. Too muted, and your pillows disappear. Too bright, and they overpower the sophisticated black base.
                </p>

                <div className="comparison-grid">
                  <div className="comparison-card">
                    <h4 className="font-medium text-gray-800 mb-3">Bold & Beautiful</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Crisp white or cream</li>
                      <li>• Jewel tones (emerald, sapphire, ruby)</li>
                      <li>• Metallic accents (gold, silver, copper)</li>
                      <li>• High-contrast patterns</li>
                    </ul>
                  </div>
                  <div className="comparison-card">
                    <h4 className="font-medium text-gray-800 mb-3">Sophisticated Neutrals</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Charcoal and light gray</li>
                      <li>• Soft beige tones</li>
                      <li>• Muted pastels</li>
                      <li>• Monochromatic patterns</li>
                    </ul>
                  </div>
                </div>

                <h3 className="font-semibold text-xl text-gray-900 mt-8 mb-4">Tan & Caramel Leather (Warm Neutrals)</h3>
                <p className="text-gray-700 leading-relaxed">
                  Light leather colors are trickier because they show everything. The goal is choosing colors that add depth without competing with the leather's natural beauty. Tan and caramel work best with colors that have enough contrast to stand out but aren't so bold they overwhelm.
                </p>
                
                <div className="tip-box">
                  <p className="text-gray-700 mb-2"><strong>Best Combinations for Tan Leather:</strong></p>
                  <ul className="text-gray-700 space-y-1">
                    <li>• <strong>Classic Contrast:</strong> Navy blue and white combinations</li>
                    <li>• <strong>Rich Warmth:</strong> Forest green with burgundy accents</li>
                    <li>• <strong>Modern Elegance:</strong> Charcoal gray with ivory</li>
                    <li>• <strong>Cozy Vibes:</strong> Rust orange with cream patterns</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* 5 Stunning Examples */}
            <section id="pillow-examples" className="prose prose-lg max-w-none section-anchor">
              <h2 className="font-cormorant text-3xl font-bold mb-6">5 Stunning Real-World Examples</h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Ready to see these principles in action? Here are ten gorgeous examples of leather couches styled with floral and patterned pillows that you can recreate in your own home. Each look demonstrates specific color and texture relationships that work beautifully together.
              </p>

              {/* Example 1 - Pink Peony */}
              <div className="my-10">
                <h3 className="font-cormorant text-2xl font-bold mb-4">1. Romantic Elegance: Pink Peonies on Caramel Leather</h3>
                <figure className="product-card">
                  <Link href={PRODUCT_IMAGES[0].link} className="block">
                    <Image
                      src={PRODUCT_IMAGES[0].src}
                      alt={PRODUCT_IMAGES[0].alt}
                      width={PRODUCT_IMAGES[0].width}
                      height={PRODUCT_IMAGES[0].height}
                      loading="lazy"
                      sizes="(max-width: 768px) 100vw, 800px"
                      className="w-full h-auto object-cover"
                      style={{ aspectRatio: '3/2' }}
                    />
                  </Link>
                  <div className="product-caption">
                    <Link href={PRODUCT_IMAGES[0].link} className="text-white hover:text-gray-200 inline-flex items-center gap-2 transition-colors">
                      <span>{PRODUCT_IMAGES[0].caption}</span>
                      <FiArrowRight size={16} />
                    </Link>
                  </div>
                </figure>
                <p className="text-gray-700 leading-relaxed">
                  This stunning combination shows how soft pink peony prints can add feminine elegance to warm caramel leather. The watercolor effect prevents the floral pattern from looking too traditional, while the warm pink tones complement the leather's honey undertones. Perfect for creating a cozy yet sophisticated living room that feels both modern and timeless.
                </p>
                
                <div className="tip-box">
                  <p className="text-gray-700 mb-0"><strong>Key Success Elements:</strong> Watercolor effect softens bold florals • Pink tones match leather's warmth • Mix of pillow sizes creates visual interest</p>
                </div>
              </div>

              {/* Example 2 - Golden Rose */}
              <div className="my-10">
                <h3 className="font-cormorant text-2xl font-bold mb-4">2. Vintage Charm: Golden Rose Pillows on Rich Brown</h3>
                <figure className="product-card">
                  <Link href={PRODUCT_IMAGES[1].link} className="block">
                    <Image
                      src={PRODUCT_IMAGES[1].src}
                      alt={PRODUCT_IMAGES[1].alt}
                      width={PRODUCT_IMAGES[1].width}
                      height={PRODUCT_IMAGES[1].height}
                      loading="lazy"
                      sizes="(max-width: 768px) 100vw, 800px"
                      className="w-full h-auto object-cover"
                      style={{ aspectRatio: '3/2' }}
                    />
                  </Link>
                  <div className="product-caption">
                    <Link href={PRODUCT_IMAGES[1].link} className="text-white hover:text-gray-200 inline-flex items-center gap-2 transition-colors">
                      <span>{PRODUCT_IMAGES[1].caption}</span>
                      <FiArrowRight size={16} />
                    </Link>
                  </div>
                </figure>
                <p className="text-gray-700 leading-relaxed">
                  Here's proof that brown-on-brown can work when done right. These golden rose pillows pick up the warm toffee tones in the leather while adding just enough contrast to avoid looking flat. The vintage-inspired floral pattern brings character without overwhelming the space. This approach works especially well in traditional or transitional room styles.
                </p>
              </div>

              {/* Example 3 - Dahlia Mix */}
              <div className="my-10">
                <h3 className="font-cormorant text-2xl font-bold mb-4">3. Modern Eclectic: Colorful Dahlias on Cognac Leather</h3>
                <figure className="product-card">
                  <Link href={PRODUCT_IMAGES[2].link} className="block">
                    <Image
                      src={PRODUCT_IMAGES[2].src}
                      alt={PRODUCT_IMAGES[2].alt}
                      width={PRODUCT_IMAGES[2].width}
                      height={PRODUCT_IMAGES[2].height}
                      loading="lazy"
                      sizes="(max-width: 768px) 100vw, 800px"
                      className="w-full h-auto object-cover"
                      style={{ aspectRatio: '3/2' }}
                    />
                  </Link>
                  <div className="product-caption">
                    <Link href={PRODUCT_IMAGES[2].link} className="text-white hover:text-gray-200 inline-flex items-center gap-2 transition-colors">
                      <span>{PRODUCT_IMAGES[2].caption}</span>
                      <FiArrowRight size={16} />
                    </Link>
                  </div>
                </figure>
                <p className="text-gray-700 leading-relaxed">
                  This bold approach uses four different dahlia pillows in coordinating autumn tones — burgundy, coral, golden yellow, and cream. The secret to making this work is sticking to a warm color family that complements the cognac leather's undertones. Notice how the modern room's clean lines balance the busy floral patterns.
                </p>
                
                <div className="highlight-box">
                  <h4 className="font-semibold text-gray-900 mb-3">🎨 Color Theory in Action</h4>
                  <p className="text-gray-700 mb-0">This arrangement demonstrates the "analogous color scheme" — colors that sit next to each other on the color wheel (red, orange, yellow). It creates harmony while still offering variety and visual interest.</p>
                </div>
              </div>

              {/* Example 4 - Patriotic Floral */}
              <div className="my-10">
                <h3 className="font-cormorant text-2xl font-bold mb-4">4. Americana Style: Patriotic Florals with Personality</h3>
                <figure className="product-card">
                  <Link href={PRODUCT_IMAGES[3].link} className="block">
                    <Image
                      src={PRODUCT_IMAGES[3].src}
                      alt={PRODUCT_IMAGES[3].alt}
                      width={PRODUCT_IMAGES[3].width}
                      height={PRODUCT_IMAGES[3].height}
                      loading="lazy"
                      sizes="(max-width: 768px) 100vw, 800px"
                      className="w-full h-auto object-cover"
                      style={{ aspectRatio: '3/2' }}
                    />
                  </Link>
                  <div className="product-caption">
                    <Link href={PRODUCT_IMAGES[3].link} className="text-white hover:text-gray-200 inline-flex items-center gap-2 transition-colors">
                      <span>{PRODUCT_IMAGES[3].caption}</span>
                      <FiArrowRight size={16} />
                    </Link>
                  </div>
                </figure>
                <p className="text-gray-700 leading-relaxed">
                  Who says patriotic decor can't be sophisticated? These American flag-inspired pillows feature sunflowers, roses, and daisies that soften the traditional red, white, and blue palette. The brown leather grounds the look and prevents it from feeling too themed or juvenile. Perfect for creating seasonal displays or year-round Americana charm.
                </p>
              </div>

              {/* Example 5 - Blush Peonies */}
              <div className="my-10">
                <h3 className="font-cormorant text-2xl font-bold mb-4">5. Soft Sophistication: Blush Peonies with Vintage Accents</h3>
                <figure className="product-card">
                  <Link href={PRODUCT_IMAGES[4].link} className="block">
                    <Image
                      src={PRODUCT_IMAGES[4].src}
                      alt={PRODUCT_IMAGES[4].alt}
                      width={PRODUCT_IMAGES[4].width}
                      height={PRODUCT_IMAGES[4].height}
                      loading="lazy"
                      sizes="(max-width: 768px) 100vw, 800px"
                      className="w-full h-auto object-cover"
                      style={{ aspectRatio: '3/2' }}
                    />
                  </Link>
                  <div className="product-caption">
                    <Link href={PRODUCT_IMAGES[4].link} className="text-white hover:text-gray-200 inline-flex items-center gap-2 transition-colors">
                      <span>{PRODUCT_IMAGES[4].caption}</span>
                      <FiArrowRight size={16} />
                    </Link>
                  </div>
                </figure>
                <p className="text-gray-700 leading-relaxed">
                  This example demonstrates how neutral backgrounds can make floral pillows pop. The blush pink peonies stand out beautifully against the brown leather, while the vintage American flag wall art adds character without competing. The key is using pillows as your main color source while keeping other decor more subdued.
                </p>
              </div>
            </section>

            {/* Styling Formulas */}
            <section id="styling-formulas" className="prose prose-lg max-w-none section-anchor">
              <h2 className="font-cormorant text-3xl font-bold mb-6">Foolproof Arrangement Formulas</h2>
              
              <div className="content-spacing">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Even the most beautiful pillows can look wrong if they're not arranged properly. Here are three proven formulas that work every time, whether you're styling a loveseat or a large sectional.
                </p>

                <h3 className="font-semibold text-xl text-gray-900 mt-8 mb-4">Formula #1: The Classic Triangle (3-Pillow Sofas)</h3>
                <div className="comparison-card">
                  <p className="text-gray-700 mb-3"><strong>Perfect for:</strong> Standard 3-seat sofas, loveseats</p>
                  <p className="text-gray-700 mb-3"><strong>The Setup:</strong></p>
                  <ul className="text-gray-700 space-y-2 text-sm">
                    <li>• <strong>Corner 1:</strong> 20" x 20" pillow in your main color</li>
                    <li>• <strong>Center:</strong> 16" x 16" pillow in contrasting color or pattern</li>
                    <li>• <strong>Corner 2:</strong> 20" x 20" pillow that coordinates with corner 1</li>
                  </ul>
                  <p className="text-gray-600 text-sm mt-3 mb-0"><em>Example: Cream corner pillows with a coral floral center pillow on brown leather</em></p>
                </div>

                <h3 className="font-semibold text-xl text-gray-900 mt-8 mb-4">Formula #2: The Balanced Five (Large Sectionals)</h3>
                <div className="comparison-card">
                  <p className="text-gray-700 mb-3"><strong>Perfect for:</strong> L-shaped sectionals, large curved sofas</p>
                  <p className="text-gray-700 mb-3"><strong>The Setup:</strong></p>
                  <ul className="text-gray-700 space-y-2 text-sm">
                    <li>• <strong>Left end:</strong> 2 pillows (one large, one medium) in main color</li>
                    <li>• <strong>Corner:</strong> 1 lumbar pillow in contrasting pattern</li>
                    <li>• <strong>Right end:</strong> 2 pillows (mirror the left side)</li>
                  </ul>
                  <p className="text-gray-600 text-sm mt-3 mb-0"><em>Pro tip: Use odd numbers for visual balance — it's more pleasing to the eye than even groupings</em></p>
                </div>

                <h3 className="font-semibold text-xl text-gray-900 mt-8 mb-4">Formula #3: The Casual Scatter (Family Rooms)</h3>
                <p className="text-gray-700 leading-relaxed">
                  This approach works best for lived-in spaces where comfort trumps formality. Mix 4-6 pillows in varying sizes, but stick to a cohesive color palette. The "imperfect" arrangement actually looks more natural and inviting.
                </p>

                <div className="highlight-box">
                  <h4 className="font-semibold text-gray-900 mb-3">📏 Size Guidelines That Actually Work</h4>
                  <ul className="text-gray-700 space-y-2 text-sm">
                    <li>• <strong>Standard sofas:</strong> Mix 18" and 20" squares for best proportions</li>
                    <li>• <strong>Large sectionals:</strong> Add some 22" or 24" pillows for scale</li>
                    <li>• <strong>Lumbar pillows:</strong> 12" x 20" work great for lower back support</li>
                    <li>• <strong>Avoid tiny pillows:</strong> Anything under 16" looks lost on leather furniture</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Seasonal Styling */}
            <section id="seasonal-styling" className="prose prose-lg max-w-none section-anchor">
              <h2 className="font-cormorant text-3xl font-bold mb-6">Seasonal Styling Updates</h2>
              
              <div className="content-spacing">
                <p className="text-lg text-gray-700 leading-relaxed">
                  One of the biggest advantages of decorating with pillows is how easily you can refresh your look for different seasons. With leather furniture as your neutral base, you can completely transform the mood of your room just by swapping pillow covers.
                </p>

                <div className="comparison-grid">
                  <div className="comparison-card">
                    <h3 className="font-semibold text-gray-900 mb-3">🌸 Spring & Summer</h3>
                    <p className="text-sm text-gray-600 mb-3">Light, fresh, energizing</p>
                    <ul className="text-gray-700 space-y-1 text-sm">
                      <li>• <strong>Colors:</strong> Coral, blush pink, sage green, crisp white</li>
                      <li>• <strong>Patterns:</strong> Watercolor florals, botanical prints, light geometrics</li>
                      <li>• <strong>Fabrics:</strong> Linen, cotton, lightweight weaves</li>
                      <li>• <strong>Mood:</strong> Airy, coastal, garden-inspired</li>
                    </ul>
                  </div>
                  
                  <div className="comparison-card">
                    <h3 className="font-semibold text-gray-900 mb-3">🍂 Fall & Winter</h3>
                    <p className="text-sm text-gray-600 mb-3">Cozy, rich, grounding</p>
                    <ul className="text-gray-700 space-y-1 text-sm">
                      <li>• <strong>Colors:</strong> Burgundy, golden yellow, forest green, warm cream</li>
                      <li>• <strong>Patterns:</strong> Vintage florals, paisley, plaid accents</li>
                      <li>• <strong>Fabrics:</strong> Velvet, wool, faux fur, thick cotton</li>
                      <li>• <strong>Mood:</strong> Hygge, traditional, layered luxury</li>
                    </ul>
                  </div>
                </div>

                <div className="tip-box">
                  <p className="text-gray-700 mb-0"><strong>Budget-Friendly Seasonal Switch:</strong> Instead of buying all new pillows, invest in quality pillow inserts once, then buy seasonal pillow covers. You'll save money and storage space while still getting that fresh seasonal look.</p>
                </div>

                <h3 className="font-semibold text-xl text-gray-900 mt-8 mb-4">Holiday Styling Without the Kitsch</h3>
                <p className="text-gray-700 leading-relaxed">
                  The key to holiday decorating with leather furniture is subtlety. Instead of obvious themed pillows, choose sophisticated color combinations that nod to the season without screaming "holiday decor."
                </p>

                <table className="w-full">
                  <thead>
                    <tr>
                      <th className="text-left font-semibold text-gray-900">Holiday/Season</th>
                      <th className="text-left font-semibold text-gray-900">Sophisticated Color Combo</th>
                      <th className="text-left font-semibold text-gray-900">Pattern Ideas</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-medium text-gray-700">Christmas</td>
                      <td className="text-gray-700">Deep forest green + cream + gold accents</td>
                      <td className="text-gray-700">Winter botanicals, gold florals</td>
                    </tr>
                    <tr>
                      <td className="font-medium text-gray-700">Thanksgiving</td>
                      <td className="text-gray-700">Burnt orange + warm cream + burgundy</td>
                      <td className="text-gray-700">Autumn leaves, harvest florals</td>
                    </tr>
                    <tr>
                      <td className="font-medium text-gray-700">Easter/Spring</td>
                      <td className="text-gray-700">Soft lavender + sage green + ivory</td>
                      <td className="text-gray-700">Watercolor flowers, butterfly motifs</td>
                    </tr>
                    <tr>
                      <td className="font-medium text-gray-700">Summer</td>
                      <td className="text-gray-700">Coral + navy blue + crisp white</td>
                      <td className="text-gray-700">Coastal florals, nautical stripes</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Pattern Mixing Rules */}
            <section id="pattern-mixing" className="prose prose-lg max-w-none section-anchor">
              <h2 className="font-cormorant text-3xl font-bold mb-6">Pattern Mixing Rules That Work</h2>
              
              <div className="content-spacing">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Mixing patterns with leather furniture can feel intimidating, but it's actually easier than you think. The key is understanding pattern scales and sticking to a cohesive color palette. Here's how to do it like a pro.
                </p>

                <h3 className="font-semibold text-xl text-gray-900 mt-8 mb-4">The 3-Pattern Rule</h3>
                <p className="text-gray-700 leading-relaxed">
                  Professional designers rarely use more than three patterns in one seating area. Here's the foolproof formula:
                </p>

                <div className="comparison-grid">
                  <div className="comparison-card">
                    <h4 className="font-medium text-gray-800 mb-3">Pattern #1: Large Scale</h4>
                    <p className="text-sm text-gray-700">Bold florals, large geometrics, or dramatic prints. Use this on 1-2 pillows maximum.</p>
                    <p className="text-xs text-gray-600 mt-2"><em>Example: Large peony print pillow</em></p>
                  </div>
                  
                  <div className="comparison-card">
                    <h4 className="font-medium text-gray-800 mb-3">Pattern #2: Medium Scale</h4>
                    <p className="text-sm text-gray-700">Coordinate patterns that complement the large scale without competing. Use on 2-3 pillows.</p>
                    <p className="text-xs text-gray-600 mt-2"><em>Example: Small rose pattern in similar colors</em></p>
                  </div>
                  
                  <div className="comparison-card">
                    <h4 className="font-medium text-gray-800 mb-3">Pattern #3: Small Scale/Solid</h4>
                    <p className="text-sm text-gray-700">Tiny patterns, textures, or solid colors that ground the look. Use on remaining pillows.</p>
                    <p className="text-xs text-gray-600 mt-2"><em>Example: Solid linen or subtle texture</em></p>
                  </div>
                </div>

                <div className="highlight-box">
                  <h4 className="font-semibold text-gray-900 mb-3">🎯 Pattern Mixing Success Formula</h4>
                  <ol className="text-gray-700 space-y-2 text-sm">
                    <li><strong>1. Start with color:</strong> Choose 2-3 colors that work with your leather</li>
                    <li><strong>2. Vary the scales:</strong> One large, one medium, one small/solid</li>
                    <li><strong>3. Repeat your colors:</strong> Each pattern should share at least one color with the others</li>
                    <li><strong>4. Add texture:</strong> Include at least one textured solid to break up busy patterns</li>
                  </ol>
                </div>

                <h3 className="font-semibold text-xl text-gray-900 mt-8 mb-4">Safe Pattern Combinations for Beginners</h3>
                <p className="text-gray-700 leading-relaxed">
                  If you're nervous about mixing patterns, start with these tried-and-true combinations that work beautifully with leather furniture:
                </p>

                <table className="w-full">
                  <thead>
                    <tr>
                      <th className="text-left font-semibold text-gray-900">Pattern Combo</th>
                      <th className="text-left font-semibold text-gray-900">Why It Works</th>
                      <th className="text-left font-semibold text-gray-900">Best For</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-medium text-gray-700">Floral + Stripe</td>
                      <td className="text-gray-700">Organic meets geometric - natural contrast</td>
                      <td className="text-gray-700">Traditional, coastal styles</td>
                    </tr>
                    <tr>
                      <td className="font-medium text-gray-700">Floral + Solid + Texture</td>
                      <td className="text-gray-700">Safest option - texture adds interest without pattern clash</td>
                      <td className="text-gray-700">Beginners, classic looks</td>
                    </tr>
                    <tr>
                      <td className="font-medium text-gray-700">Large Floral + Small Geometric</td>
                      <td className="text-gray-700">Different scales prevent competition</td>
                      <td className="text-gray-700">Modern traditional, eclectic</td>
                    </tr>
                    <tr>
                      <td className="font-medium text-gray-700">Two Florals + Solid</td>
                      <td className="text-gray-700">Same pattern family in different scales</td>
                      <td className="text-gray-700">Romantic, cottage styles</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Common Mistakes */}
            <section id="common-mistakes" className="prose prose-lg max-w-none section-anchor">
              <h2 className="font-cormorant text-3xl font-bold mb-6">Avoid These Common Mistakes</h2>
              
              <div className="content-spacing">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Even with the best intentions, it's easy to make decorating mistakes that can make your beautiful leather furniture look less than its best. Here are the most common pitfalls and how to avoid them.
                </p>

                <div className="comparison-grid">
                  <div className="comparison-card border-red-200 bg-red-50">
                    <h3 className="font-semibold text-red-900 mb-3">❌ Common Mistakes</h3>
                    <ul className="text-red-800 space-y-3 text-sm">
                      <li><strong>Matching too closely:</strong> Pillows that exactly match your leather color look flat and boring</li>
                      <li><strong>Going too small:</strong> Tiny 14" pillows get lost on large leather furniture</li>
                      <li><strong>All the same size:</strong> Using only 18" x 18" pillows creates a boring, uniform look</li>
                      <li><strong>Forgetting texture:</strong> All smooth fabrics make leather furniture feel cold</li>
                      <li><strong>Too many patterns:</strong> More than 3 different patterns creates visual chaos</li>
                    </ul>
                  </div>
                  
                  <div className="comparison-card border-green-200 bg-green-50">
                    <h3 className="font-semibold text-green-900 mb-3">✅ Better Approach</h3>
                    <ul className="text-green-800 space-y-3 text-sm">
                      <li><strong>Create contrast:</strong> Choose colors that complement but don't match your leather</li>
                      <li><strong>Scale appropriately:</strong> Use 18"-22" pillows on standard sofas, larger on sectionals</li>
                      <li><strong>Mix sizes thoughtfully:</strong> Combine 2-3 different sizes for visual interest</li>
                      <li><strong>Add texture variety:</strong> Mix smooth and textured fabrics for depth</li>
                      <li><strong>Stick to 3 patterns max:</strong> Use the large-medium-small scale rule</li>
                    </ul>
                  </div>
                </div>

                <h3 className="font-semibold text-xl text-gray-900 mt-8 mb-4">The Biggest Mistake: Overthinking It</h3>
                <p className="text-gray-700 leading-relaxed">
                  Here's what I see happen all the time: someone gets so worried about making the "wrong" choice that they end up with safe, boring pillows that don't enhance their beautiful leather furniture at all. The truth is, leather is incredibly forgiving. As long as you follow the basic guidelines about contrast and scale, you have a lot of room to experiment and express your personal style.
                </p>

                <div className="tip-box">
                  <p className="text-gray-700 mb-0"><strong>Designer's Reality Check:</strong> I've been styling homes for 15+ years, and I can tell you that the "perfect" pillow combination exists only in magazines. Real homes look better with a little personality and imperfection. Trust your instincts, and don't be afraid to try something that makes you smile.</p>
                </div>
              </div>
            </section>

            {/* Related Articles */}
            <section className="my-12">
              <h2 className="font-cormorant text-2xl font-bold mb-6">Related Style Guides</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Link href="/blog/what-color-pillows-go-with-a-gray-couch" className="block p-6 bg-white border border-gray-200 rounded-lg hover:border-gray-300 transition-colors">
                  <h3 className="font-semibold text-gray-900 mb-2">What Color Pillows Go With a Gray Couch?</h3>
                  <p className="text-gray-600 text-sm">Discover stunning color combinations for gray sofas with our complete styling guide.</p>
                </Link>
                <Link href="/blog/what-color-pillows-go-with-a-navy-blue-couch" className="block p-6 bg-white border border-gray-200 rounded-lg hover:border-gray-300 transition-colors">
                  <h3 className="font-semibold text-gray-900 mb-2">What Color Pillows Go With a Navy Blue Couch?</h3>
                  <p className="text-gray-600 text-sm">Expert tips for styling navy couches with beautiful pillow combinations.</p>
                </Link>
                <Link href="/blog/what-color-pillows-go-with-a-cream-sofa" className="block p-6 bg-white border border-gray-200 rounded-lg hover:border-gray-300 transition-colors">
                  <h3 className="font-semibold text-gray-900 mb-2">What Color Pillows Go With a Cream Sofa?</h3>
                  <p className="text-gray-600 text-sm">Complete guide to styling cream and beige couches with the perfect pillow colors.</p>
                </Link>
              </div>
            </section>

            {/* FAQs */}
            <section id="faqs" className="prose prose-lg max-w-none section-anchor">
              <h2 className="font-cormorant text-3xl font-bold mb-8">Frequently Asked Questions</h2>
              
              <div className="space-y-8">
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="font-semibold text-gray-900 mb-3">What kind of pillows go with leather couches?</h3>
                  <p className="text-gray-700 leading-relaxed">
                    The best pillows for leather couches are textured fabrics like linen, velvet, cotton, and wool that create contrast with the smooth leather surface. Avoid matching leather-on-leather. Choose warm neutrals for brown leather, jewel tones for black leather, or contrasting colors that complement your leather's undertones. Floral prints, geometric patterns, and vintage-inspired designs work particularly well.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="font-semibold text-gray-900 mb-3">What colors look best on brown leather sofas?</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Brown leather sofas look stunning with warm colors that complement their undertones: cream and ivory for classic elegance, sage green and dusty rose for sophistication, burnt orange and golden yellow for warmth, and burgundy or forest green for richness. Avoid cool blues and purples which clash with brown's warm undertones.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="font-semibold text-gray-900 mb-3">How many pillows should I put on a leather sectional?</h3>
                  <p className="text-gray-700 leading-relaxed">
                    For leather sectionals, use 5-7 pillows total. Place 2-3 pillows on each end section and 1-2 in the corner area. Always use odd numbers for better visual balance. Mix sizes — combine 20x20 inch and 16x16 inch pillows for the most pleasing proportions. Large sectionals can handle 22x22 inch pillows for proper scale.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="font-semibold text-gray-900 mb-3">What fabrics work best with leather furniture?</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Natural fabrics work beautifully with leather because they create textural contrast. Top choices include linen for casual elegance, velvet for luxury, cotton canvas for durability, and wool for cozy warmth. These fabrics soften leather's sleek surface and prevent the space from feeling cold or sterile. Avoid synthetic materials that can look cheap against quality leather.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="font-semibold text-gray-900 mb-3">Should pillows match leather couch color exactly?</h3>
                  <p className="text-gray-700 leading-relaxed">
                    No, avoid matching pillow colors exactly to your leather couch. This creates a flat, monotone look that makes expensive furniture appear cheap. Instead, choose complementary or contrasting colors that enhance your leather's natural beauty. For brown leather, try cream or sage green. For black leather, use crisp white or jewel tones. The goal is harmony, not matching.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="font-semibold text-gray-900 mb-3">Can I mix patterns with leather furniture?</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Absolutely! Leather furniture provides an excellent neutral base for pattern mixing. Follow the 3-pattern rule: one large-scale pattern (bold florals), one medium-scale pattern (small florals or geometrics), and one small-scale pattern or solid color. Stick to 2-3 colors that complement your leather, and vary the pattern scales to avoid visual competition.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="font-semibold text-gray-900 mb-3">How do I style leather furniture for different seasons?</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Use pillow covers to easily update your look seasonally. Spring/summer: choose light, fresh colors like coral, blush pink, and sage green in linen or cotton fabrics. Fall/winter: switch to rich, cozy colors like burgundy, golden yellow, and forest green in velvet or wool textures. This approach lets you refresh your space without buying new furniture.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="font-semibold text-gray-900 mb-3">What's the biggest mistake people make with leather couch pillows?</h3>
                  <p className="text-gray-700 leading-relaxed">
                    The biggest mistake is playing it too safe with colors and textures that exactly match the leather. This creates a boring, flat look that doesn't enhance your furniture's beauty. Other common errors include using pillows that are too small (under 16"), using only one size, or adding too many competing patterns. Remember: leather is forgiving, so don't be afraid to add personality with contrasting colors and textures.
                  </p>
                </div>
              </div>
            </section>

            {/* Final CTA Section */}
            <section className="my-12 p-8 bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl border border-amber-100">
              <div className="text-center">
                <h2 className="font-cormorant text-3xl font-bold text-gray-900 mb-4">Ready to Transform Your Leather Couch?</h2>
                <p className="text-lg text-gray-700 mb-6">
                  Browse our collection of premium floral throw pillows designed specifically to complement leather furniture. Each pillow is crafted with quality fabrics that create the perfect textural contrast with your leather sofa.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Link 
                    href="/flower-throw-pillows" 
                    className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-xl font-semibold hover:bg-primary-dark transition-colors shadow-lg hover:shadow-xl"
                  >
                    <span>Shop Floral Pillows</span>
                    <FiArrowRight size={18} />
                  </Link>
                  <Link 
                    href="/blog" 
                    className="inline-flex items-center gap-2 text-primary hover:text-primary-dark font-semibold px-8 py-4 transition-colors"
                  >
                    <span>More Styling Guides</span>
                    <FiChevronRight size={18} />
                  </Link>
                </div>
              </div>
            </section>

          </div>
        </div>
      </article>

      {/* Article Navigation */}
      <nav className="container-custom max-w-4xl mx-auto py-12 border-t border-gray-200">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <Link 
            href="/blog/what-color-pillows-go-with-a-navy-blue-couch"
            className="group flex items-center gap-3 text-gray-600 hover:text-gray-900 transition-colors"
          >
            <FiArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            <div>
              <div className="text-sm font-medium">Previous Article</div>
              <div className="text-base">Navy Blue Couch Pillow Ideas</div>
            </div>
          </Link>
          
          <Link 
            href="/blog/what-color-pillows-go-with-a-gray-couch"
            className="group flex items-center gap-3 text-gray-600 hover:text-gray-900 transition-colors text-right"
          >
            <div>
              <div className="text-sm font-medium">Next Article</div>
              <div className="text-base">Gray Couch Styling Guide</div>
            </div>
            <FiArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </nav>
    </>
  )
}

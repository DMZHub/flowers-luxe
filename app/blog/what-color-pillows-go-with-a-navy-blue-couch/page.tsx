import React from "react"
import Link from "next/link"
import Image from "next/image"
import type { Metadata } from 'next'
import { FiCalendar, FiClock, FiTag, FiArrowRight, FiArrowLeft, FiChevronRight } from "react-icons/fi"
import Breadcrumbs from "../../../components/Breadcrumbs"
import SchemaMarkup from "../../../components/SchemaMarkup"


// Article Config
const ARTICLE = {
  title: "What Color Pillows Go With a Navy Blue Couch?",
  slug: "what-color-pillows-go-with-a-navy-blue-couch",
  description:
    "Discover the best pillow colors for navy blue couches with expert color theory, 8 stunning floral examples, arrangement tips, and seasonal styling ideas that transform your living space.",
  category: "Home Decor",
  categorySlug: "home-decor",
  author: "FlowersLuxe Editorial Team",
  publishDateISO: "2025-08-10",
  modifiedDateISO: "2025-08-10",
  publishDateHuman: "August 10, 2025",
  readTime: "14 min read",
  hero: {
    src: "/images/blog/navy-blue-couch/navy-blue-couch-pillow-ideas.webp",
    alt: "Navy blue couch in a modern living room, used as a base for exploring stylish pillow combinations that match deep blue sofas.",
    width: 1200,
    height: 800,
  },
}

// Server-side metadata export
export const metadata: Metadata = {
  title: `${ARTICLE.title} | FlowersLuxe Blog`,
  description: ARTICLE.description,
  keywords: "what color pillows go with navy blue couch, navy couch pillow colors, navy blue sofa styling, floral pillows navy couch",
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
    src: "/images/blog/navy-blue-couch/floral-pillow-navy-sectional.webp",
    alt: "Navy blue sectional sofa with floral throw pillows in red, peach, and violet tones.",
    caption: "Shop Watercolor Garden Blush Pillow",
    link: "/flower-throw-pillows/watercolor/watercolor-garden-blush-pillow",
    width: 1200,
    height: 800,
  },
  {
    src: "/images/blog/navy-blue-couch/pampas-pillow-navy-sofa.webp",
    alt: "Navy velvet sofa with cream throw pillows featuring pampas grass prints in a minimalist light-toned living room.",
    caption: "Shop Boho Pampas Grass Pillow",
    link: "/flower-throw-pillows/boho/boho-pampas-grass-pillow",
    width: 1200,
    height: 800,
  },
  {
    src: "/images/blog/navy-blue-couch/burnt-orange-rose-pillow-navy-sofa.webp",
    alt: "Navy blue sectional sofa with burnt orange rose-print pillow set against terracotta walls and neutral decor.",
    caption: "Shop Vintage Toffee Rose Pillow",
    link: "/flower-throw-pillows/vintage/vintage-toffee-rose-pillow",
    width: 1200,
    height: 800,
  },
  {
    src: "/images/blog/navy-blue-couch/brown-floral-pillow-navy-sectional.webp",
    alt: "Navy velvet sectional sofa with brown floral pillows featuring green center detail, placed near an earthy green accent wall.",
    caption: "Shop Autumn Dahlia Luxe Pillow",
    link: "/flower-throw-pillows/floral/autumn-dahlia-luxe-pillow",
    width: 1200,
    height: 800,
  },
  {
    src: "/images/blog/navy-blue-couch/quicksand-rose-pillow-navy-sofa.webp",
    alt: "Deep navy couch with elegant quicksand rose pillows in a light modern living room with wood accents and a geometric rug.",
    caption: "Shop Modern Quicksand Rose Pillow",
    link: "/flower-throw-pillows/modern/modern-quicksand-rose-pillow",
    width: 1200,
    height: 800,
  },
  {
    src: "/images/blog/navy-blue-couch/patriotic-floral-pillows-navy-sectional.webp",
    alt: "Modern navy sectional sofa with throw pillows featuring a patriotic floral design of sunflowers, roses, and stars.",
    caption: "Shop Patriotic Floral Flag Pillow",
    link: "/flower-throw-pillows/vintage/patriotic-floral-flag-pillow",
    width: 1200,
    height: 800,
  },
  {
    src: "/images/blog/navy-blue-couch/pink-flower-pillows-blue-sofa.webp",
    alt: "Contemporary navy couch with matching throw pillows showcasing a soft pink floral design against neutral decor.",
    caption: "Shop Romantic Pink Peony Pillow",
    link: "/flower-throw-pillows/watercolor/romantic-pink-peony-pillow",
    width: 1200,
    height: 800,
  },
  {
    src: "/images/blog/navy-blue-couch/navy-blue-couch-pillow-ideas.webp",
    alt: "Navy blue couch in a modern living room, used as a base for exploring stylish pillow combinations that match deep blue sofas.",
    caption: "Explore Navy Couch Styling Ideas",
    link: "/flower-throw-pillows",
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
    wordCount: "3500",
  }
}

function getFAQSchema(currentUrl: string) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What colors look best with navy blue couches?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The best colors for navy couches are warm neutrals (cream, ivory, gold), coral and peach tones, crisp whites, blush pink, and burnt orange. These create beautiful contrast while maintaining sophistication."
        }
      },
      {
        "@type": "Question",
        name: "Should I choose warm or cool colors for navy couch pillows?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Both work! Navy is versatile enough to handle warm colors like coral and gold for cozy vibes, or cool colors like silver and white for modern elegance. The key is choosing colors with enough contrast to pop against the dark blue."
        }
      },
      {
        "@type": "Question",
        name: "How many pillows should I put on a navy sectional?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "For navy sectionals, use 5-7 pillows in odd numbers. Place larger 22×22 inch pillows at corners, medium 20×20 inch pillows in between, and add one lumbar pillow (12×20 inches) for variety."
        }
      },
      {
        "@type": "Question",
        name: "Can I use white pillows with a navy blue couch?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes! White pillows create classic nautical elegance with navy couches. Choose cream or ivory over stark white to avoid harsh contrast, and consider textured whites like cable knit or linen for added visual interest."
        }
      },
      {
        "@type": "Question",
        name: "What floral patterns work with navy blue sofas?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Watercolor florals in soft pinks, coral roses with green foliage, pampas grass in neutral tones, and vintage botanical prints work beautifully. The key is choosing florals with colors that complement rather than compete with navy."
        }
      }
    ],
    url: currentUrl
  };
}

// Sticky TOC styles
const StickyTocStyles = () => (
  <style
    dangerouslySetInnerHTML={{
      __html: `
        .toc-sticky{position:sticky;top:96px}
        @media (max-width:1023px){.toc-sticky{position:static;top:auto}}
        .toc-card{background:#fafaf9;border:1px solid #eee;border-radius:12px;padding:16px}
        .toc-link{display:flex;align-items:center;gap:8px;padding:6px 4px;border-radius:8px;color:#374151;text-decoration:none}
        .toc-link:hover{background:#f3f4f6;color:#111827}
        .toc-bullet{display:inline-block;width:6px;height:6px;border-radius:9999px;background:#9ca3af}
        .section-anchor{scroll-margin-top:120px}
        table{width:100%;border-collapse:separate;border-spacing:0;border:1px solid #e5e7eb;border-radius:12px;overflow:hidden}
        th,td{padding:12px;border-bottom:1px solid #e5e7eb}
        thead th{background:#f9fafb;font-weight:600}
        tr:last-child td{border-bottom:none}
      `,
    }}
  />
)

// Main Component
export default function NavyCouchPillowsArticlePage() {
  const currentUrl = `https://flowersluxe.com/blog/${ARTICLE.slug}`
  
  const articleSchema = getArticleSchema(currentUrl)
  const faqSchema = getFAQSchema(currentUrl)

  const breadcrumbItems = [
    { name: "Blog", url: "/blog" },
    { name: ARTICLE.title, url: `/blog/${ARTICLE.slug}` },
  ]

  return (
    <>
      <StickyTocStyles />
      <SchemaMarkup schema={articleSchema} />
      <SchemaMarkup schema={faqSchema} />

      {/* Breadcrumbs */}
      <div className="container-custom">
        <Breadcrumbs items={breadcrumbItems} />
      </div>

      {/* Header / Hero */}
      <header className="py-8 md:py-10">
        <div className="container-custom max-w-4xl mx-auto">
          <div className="mb-4">
            <Link href="/blog" className="inline-flex items-center gap-2 text-primary hover:text-primary-dark font-medium">
              <FiArrowLeft size={18} />
              <span>Back to Blog</span>
            </Link>
          </div>

          <div className="flex flex-wrap items-center gap-3 text-sm text-gray-600 mb-4">
            <span className="inline-flex items-center gap-2">
              <FiTag size={14} />
              <span className="bg-primary/10 text-primary px-3 py-1 rounded-full font-medium">{ARTICLE.category}</span>
            </span>
            <span className="inline-flex items-center gap-1">
              <FiCalendar size={14} />
              <span>{ARTICLE.publishDateHuman}</span>
            </span>
            <span className="inline-flex items-center gap-1">
              <FiClock size={14} />
              <span>{ARTICLE.readTime}</span>
            </span>
          </div>

          <h1 className="font-cormorant text-4xl md:text-5xl font-bold leading-tight text-gray-900 mb-4">{ARTICLE.title}</h1>

          {/* Engaging intro with keyword in first 100 words */}
          <p className="text-lg text-gray-700 mb-4">
            Navy blue couches are sophisticated statement pieces, but figuring out <strong>what color pillows go with a navy blue couch</strong> can feel tricky. The deep, rich tone needs colors that complement without clashing or disappearing entirely. The right pillows can warm up your navy sofa, add seasonal flair, or create that perfect contrast you're after.
          </p>
          {/* Expert Authority Paragraph */}
          <p className="text-lg text-gray-700 mb-6">
            In this comprehensive guide, we'll decode color theory for navy furniture, show you <strong>8 gorgeous real-world examples</strong> with floral pillows, and give you foolproof formulas for arrangement, seasonal updates, and pattern mixing. Whether you're going for coastal elegance or cozy modern vibes, you'll find your perfect palette here.
          </p>
        </div>
      </header>

      {/* Body */}
      <article className="pb-16 md:pb-24">
        <div className="container-custom grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Main content */}
          <div className="lg:col-span-8 max-w-3xl">
            
            {/* Quick Answer Table */}
            <section id="quick-answers" className="prose prose-lg max-w-none section-anchor">
              <h2 className="font-cormorant text-3xl font-bold mb-6">Key Takeaways</h2>
              <table className="w-full border-collapse border border-gray-200 rounded-xl overflow-hidden mb-8">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="text-left p-4 font-semibold text-gray-900 border-b border-gray-200">Question</th>
                    <th className="text-left p-4 font-semibold text-gray-900 border-b border-gray-200">Best Answer</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100">
                    <td className="p-4 text-gray-700 font-medium">Top colors for navy couches</td>
                    <td className="p-4 text-gray-700">Cream, coral, blush pink, gold/mustard, crisp white, burnt orange</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="p-4 text-gray-700 font-medium">Best floral patterns</td>
                    <td className="p-4 text-gray-700">Watercolor peonies, coral roses, pampas grass, vintage botanicals</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="p-4 text-gray-700 font-medium">How many pillows?</td>
                    <td className="p-4 text-gray-700">3–5 on standard sofas, 5–7 on large sectionals (odd numbers work best)</td>
                  </tr>
                  <tr>
                    <td className="p-4 text-gray-700 font-medium">Seasonal approach</td>
                    <td className="p-4 text-gray-700">Spring/summer: corals & pinks. Fall/winter: golds & warm neutrals</td>
                  </tr>
                </tbody>
              </table>
            </section>

            {/* Color Psychology & Theory */}
            <section id="color-theory" className="prose prose-lg max-w-none section-anchor">
              <h2 className="font-cormorant text-3xl font-bold mb-6">Why Navy Blue Couches Are Styling Goldmines</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Navy isn't just another dark neutral — it's what designers call a "grounded dramatic." Unlike black, which can feel stark, navy has enough color richness to play well with both warm and cool tones. This flexibility is your secret weapon for creating looks that feel intentional rather than accidental.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Here's the thing most people miss: navy acts like a sophisticated version of denim. Just as you can pair jeans with almost anything, navy furniture accepts a surprisingly wide range of colors. The key is understanding contrast levels and temperature balance.
              </p>
              <div className="bg-blue-50 border border-blue-100 rounded-xl p-6 mb-8">
                <h3 className="font-semibold text-gray-900 mb-3">Navy's Color Personality</h3>
                <ul className="text-gray-700 leading-relaxed space-y-2">
                  <li><strong>Warm partners:</strong> Creates cozy, inviting spaces (coral, gold, cream)</li>
                  <li><strong>Cool partners:</strong> Achieves crisp, modern elegance (white, silver, ice blue)</li>
                  <li><strong>High contrast:</strong> Makes bold statements (bright coral, sunny yellow)</li>
                  <li><strong>Low contrast:</strong> Delivers subtle sophistication (dusty rose, sage)</li>
                </ul>
              </div>
            </section>

            {/* 8 Stunning Examples */}
            <section id="pillow-examples" className="prose prose-lg max-w-none section-anchor">
              <h2 className="font-cormorant text-3xl font-bold mb-6">8 Stunning Navy Couch Pillow Ideas</h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Ready to see these color theories come to life? Here are eight gorgeous examples showing different ways to style your navy sofa with floral pillows. Each look demonstrates specific color relationships you can recreate in your own space.
              </p>

              {/* Example 1 */}
              <div className="my-8">
                <h3 className="font-cormorant text-xl font-bold mb-3">Garden Romance: Mixed Watercolor Florals</h3>
                <figure className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm bg-white mb-4">
                  <Link href="/flower-throw-pillows/watercolor/watercolor-garden-blush-pillow" className="block">
                    <Image
                      src="/images/blog/navy-blue-couch/floral-pillow-navy-sectional.webp"
                      alt="Navy blue sectional sofa with floral throw pillows in red, peach, and violet tones."
                      width={1200}
                      height={800}
                      priority
                      sizes="100vw"
                      className="w-full h-auto object-cover"
                    />
                  </Link>
                  <figcaption className="px-4 py-3 text-sm text-gray-700 border-t border-gray-100 flex items-center justify-between">
                    <Link href="/flower-throw-pillows/vintage/patriotic-floral-flag-pillow" className="text-primary hover:text-primary-dark font-medium inline-flex items-center gap-2">
                      <span>Shop Patriotic Floral Flag Pillow</span>
                      <FiArrowRight size={16} />
                    </Link>
                  </figcaption>
                </figure>
                <p>Bold patriotic florals might seem risky, but they work beautifully with navy because blue is already part of the color story. The red roses and sunflowers pop dramatically against the navy sectional, while the star details add whimsy. This look is perfect for women who love vintage Americana style and aren't afraid to make a statement.</p>
              </div>

              {/* Example 7 */}
              <div className="my-8">
                <h3 className="font-cormorant text-xl font-bold mb-3">Soft Romance: Pink Peony Watercolors</h3>
                <figure className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm bg-white mb-4">
                  <Link href="/flower-throw-pillows/watercolor/romantic-pink-peony-pillow" className="block">
                    <Image
                      src="/images/blog/navy-blue-couch/pink-flower-pillows-blue-sofa.webp"
                      alt="Contemporary navy couch with matching throw pillows showcasing a soft pink floral design against neutral decor."
                      width={1200}
                      height={800}
                      priority
                      sizes="100vw"
                      className="w-full h-auto object-cover"
                    />
                  </Link>
                  <figcaption className="px-4 py-3 text-sm text-gray-700 border-t border-gray-100 flex items-center justify-between">
                    <Link href="/flower-throw-pillows/watercolor/romantic-pink-peony-pillow" className="text-primary hover:text-primary-dark font-medium inline-flex items-center gap-2">
                      <span>Shop Romantic Pink Peony Pillow</span>
                      <FiArrowRight size={16} />
                    </Link>
                  </figcaption>
                </figure>
                <p>Pink and navy is a classic combination that never goes out of style, and these soft peony pillows show why. The watercolor technique keeps the pink from being too bold or sweet, creating a romantic but sophisticated feel. This combination works especially well in bedrooms or living rooms where you want a feminine touch without sacrificing elegance.</p>
              </div>

              {/* Example 8 */}
              <div className="my-8">
                <h3 className="font-cormorant text-xl font-bold mb-3">Hero Shot: Navy Styling Inspiration</h3>
                <figure className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm bg-white mb-4">
                  <Link href="/flower-throw-pillows" className="block">
                    <Image
                      src="/images/blog/navy-blue-couch/navy-blue-couch-pillow-ideas.webp"
                      alt="Navy blue couch in a modern living room, used as a base for exploring stylish pillow combinations that match deep blue sofas."
                      width={1200}
                      height={800}
                      priority
                      sizes="100vw"
                      className="w-full h-auto object-cover"
                    />
                  </Link>
                  <figcaption className="px-4 py-3 text-sm text-gray-700 border-t border-gray-100 flex items-center justify-between">
                    <Link href="/flower-throw-pillows" className="text-primary hover:text-primary-dark font-medium inline-flex items-center gap-2">
                      <span>Explore Navy Couch Styling Ideas</span>
                      <FiArrowRight size={16} />
                    </Link>
                  </figcaption>
                </figure>
                <p>This clean, modern navy couch serves as the perfect canvas for experimenting with different pillow combinations. The neutral backdrop lets you see how various colors and patterns would look against deep navy upholstery. Use this as your starting point for visualizing your own pillow styling ideas.</p>
              </div>
            </section>

            {/* Color Combinations Table */}
            <section id="color-combinations" className="prose prose-lg max-w-none section-anchor">
              <h2 className="font-cormorant text-3xl font-bold mb-6">Navy Couch Color Combinations That Always Work</h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Understanding which colors harmonize with navy takes the guesswork out of pillow shopping. Here are the most reliable combinations, organized by the mood you want to create.
              </p>
              <table className="w-full border-collapse border border-gray-200 rounded-xl overflow-hidden mb-6">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="text-left p-4 font-semibold text-gray-900 border-b border-gray-200">Style Goal</th>
                    <th className="text-left p-4 font-semibold text-gray-900 border-b border-gray-200">Color Palette</th>
                    <th className="text-left p-4 font-semibold text-gray-200">Floral Patterns</th>
                    <th className="text-left p-4 font-semibold text-gray-900 border-b border-gray-200">Best For</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100">
                    <td className="p-4 text-gray-700 font-medium">Coastal Elegance</td>
                    <td className="p-4 text-gray-700">Cream, coral, soft white</td>
                    <td className="p-4 text-gray-700">Sea roses, coastal botanicals</td>
                    <td className="p-4 text-gray-700">Beach houses, airy spaces</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="p-4 text-gray-700 font-medium">Modern Sophistication</td>
                    <td className="p-4 text-gray-700">Blush, dusty rose, silver</td>
                    <td className="p-4 text-gray-700">Abstract florals, minimalist blooms</td>
                    <td className="p-4 text-gray-700">Contemporary homes</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="p-4 text-gray-700 font-medium">Warm Traditional</td>
                    <td className="p-4 text-gray-700">Gold, burnt orange, cream</td>
                    <td className="p-4 text-gray-700">Classic roses, autumn florals</td>
                    <td className="p-4 text-gray-700">Traditional, farmhouse</td>
                  </tr>
                  <tr>
                    <td className="p-4 text-gray-700 font-medium">Bold Statement</td>
                    <td className="p-4 text-gray-700">Bright coral, sunny yellow</td>
                    <td className="p-4 text-gray-700">Tropical blooms, graphic florals</td>
                    <td className="p-4 text-gray-700">Eclectic, bohemian spaces</td>
                  </tr>
                </tbody>
              </table>
              <p className="text-gray-700 leading-relaxed mb-8">
                <strong>Pro tip:</strong> Start with one dominant color from your chosen palette, then add 1-2 supporting colors in smaller doses through pattern details or accent pillows.
              </p>
            </section>

            {/* Arrangement & Styling Guide */}
            <section id="arrangement-guide" className="prose prose-lg max-w-none section-anchor">
              <h2 className="font-cormorant text-3xl font-bold mb-6">Pillow Arrangement Formulas for Navy Couches</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Navy's richness means your pillow arrangement needs to be intentional. Too few pillows and the sofa looks stark; too many and you lose the elegant simplicity navy provides.
              </p>

              <table className="w-full border-collapse border border-gray-200 rounded-xl overflow-hidden mb-6">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="text-left p-4 font-semibold text-gray-900 border-b border-gray-200">Sofa Size</th>
                    <th className="text-left p-4 font-semibold text-gray-900 border-b border-gray-200">Pillow Count</th>
                    <th className="text-left p-4 font-semibold text-gray-900 border-b border-gray-200">Size Formula</th>
                    <th className="text-left p-4 font-semibold text-gray-900 border-b border-gray-200">Arrangement Pattern</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100">
                    <td className="p-4 text-gray-700 font-medium">Loveseat (60-72")</td>
                    <td className="p-4 text-gray-700">3 pillows</td>
                    <td className="p-4 text-gray-700">20×20, 18×18, 12×18 lumbar</td>
                    <td className="p-4 text-gray-700">Large-Medium-Lumbar</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="p-4 text-gray-700 font-medium">Standard Sofa (80-90")</td>
                    <td className="p-4 text-gray-700">5 pillows</td>
                    <td className="p-4 text-gray-700">22×22, 20×20, 12×20 lumbar</td>
                    <td className="p-4 text-gray-700">22-20-Lumbar-20-22</td>
                  </tr>
                  <tr>
                    <td className="p-4 text-gray-700 font-medium">Large Sectional (100"+)</td>
                    <td className="p-4 text-gray-700">7 pillows</td>
                    <td className="p-4 text-gray-700">24×24 corners, 20×20, 14×20 lumbar</td>
                    <td className="p-4 text-gray-700">Mirror corners, vary center</td>
                  </tr>
                </tbody>
              </table>

              <div className="bg-amber-50 border border-amber-100 rounded-xl p-6 mb-8">
                <h3 className="font-semibold text-gray-900 mb-3">Navy Styling Secrets</h3>
                <ul className="text-gray-700 leading-relaxed space-y-2">
                  <li><strong>Light spillover:</strong> Navy absorbs light, so place pillows to "bounce" brightness back into the room</li>
                  <li><strong>Texture matters more:</strong> Dark surfaces make texture differences more noticeable — mix smooth and nubby fabrics</li>
                  <li><strong>Avoid black accents:</strong> They disappear against navy; choose charcoal or warm grays instead</li>
                  <li><strong>Use metallic touches:</strong> Gold or brass pillow details add warmth; silver keeps things crisp</li>
                </ul>
              </div>
            </section>

            {/* Pattern Mixing Guide */}
            <section id="pattern-mixing" className="prose prose-lg max-w-none section-anchor">
              <h2 className="font-cormorant text-3xl font-bold mb-6">Pattern Mixing With Navy Furniture</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Navy's solid richness makes it the perfect backdrop for pattern play. Since the sofa itself isn't competing for attention, you have more freedom to mix prints than you would with a patterned couch.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="p-6 rounded-xl border border-gray-200 bg-blue-50">
                  <h3 className="font-semibold text-gray-900 mb-4">Safe Pattern Formula</h3>
                  <ul className="text-gray-700 leading-relaxed space-y-2">
                    <li><strong>1 Large:</strong> Statement floral (roses, peonies)</li>
                    <li><strong>1 Medium:</strong> Geometric or stripe that echoes floral colors</li>
                    <li><strong>1 Small:</strong> Tiny dot or mini-check for texture</li>
                    <li><strong>1 Solid:</strong> Rich texture like bouclé or velvet</li>
                  </ul>
                </div>
                <div className="p-6 rounded-xl border border-gray-200 bg-coral-50">
                  <h3 className="font-semibold text-gray-900 mb-4">Advanced Mixing</h3>
                  <ul className="text-gray-700 leading-relaxed space-y-2">
                    <li><strong>Color bridge:</strong> Use one color across all patterns</li>
                    <li><strong>Scale variation:</strong> Mix large watercolor florals with tiny ditsy prints</li>
                    <li><strong>Style consistency:</strong> Keep all patterns in same era (all vintage or all modern)</li>
                    <li><strong>Odd numbers:</strong> 3 patterns + 1-2 solids work best</li>
                  </ul>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed mb-8">
                <strong>Navy advantage:</strong> Because navy is so neutral, you can get away with more pattern variety than with colorful sofas. The dark backdrop unifies even busy combinations.
              </p>
            </section>

            {/* Seasonal Styling */}
            <section id="seasonal-styling" className="prose prose-lg max-w-none section-anchor">
              <h2 className="font-cormorant text-3xl font-bold mb-6">Seasonal Pillow Swaps for Navy Couches</h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                One of navy's best features is how easily it transitions between seasons. A simple pillow swap can take your sofa from fresh spring energy to cozy winter warmth.
              </p>

              <table className="w-full border-collapse border border-gray-200 rounded-xl overflow-hidden mb-8">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="text-left p-4 font-semibold text-gray-900 border-b border-gray-200">Season</th>
                    <th className="text-left p-4 font-semibold text-gray-900 border-b border-gray-200">Color Focus</th>
                    <th className="text-left p-4 font-semibold text-gray-900 border-b border-gray-200">Floral Motifs</th>
                    <th className="text-left p-4 font-semibold text-gray-900 border-b border-gray-200">Fabric Textures</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100">
                    <td className="p-4 text-gray-700 font-medium">Spring</td>
                    <td className="p-4 text-gray-700">Blush, soft coral, sage</td>
                    <td className="p-4 text-gray-700">Cherry blossoms, tulips, peonies</td>
                    <td className="p-4 text-gray-700">Light linen, cotton voile</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="p-4 text-gray-700 font-medium">Summer</td>
                    <td className="p-4 text-gray-700">Bright coral, white, aqua</td>
                    <td className="p-4 text-gray-700">Tropical blooms, coastal grasses</td>
                    <td className="p-4 text-gray-700">Breathable cotton, canvas</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="p-4 text-gray-700 font-medium">Autumn</td>
                    <td className="p-4 text-gray-700">Burnt orange, gold, warm cream</td>
                    <td className="p-4 text-gray-700">Dahlias, sunflowers, autumn leaves</td>
                    <td className="p-4 text-gray-700">Heavier cotton, light wool</td>
                  </tr>
                  <tr>
                    <td className="p-4 text-gray-700 font-medium">Winter</td>
                    <td className="p-4 text-gray-700">Deep jewel tones, metallics</td>
                    <td className="p-4 text-gray-700">Evergreen, winter roses</td>
                    <td className="p-4 text-gray-700">Velvet, thick bouclé</td>
                  </tr>
                </tbody>
              </table>
            </section>

            {/* Common Mistakes */}
            <section id="common-mistakes" className="prose prose-lg max-w-none section-anchor">
              <h2 className="font-cormorant text-3xl font-bold mb-6">Avoid These Navy Couch Styling Mistakes</h2>
              <div className="space-y-6 mb-8">
                <div className="flex gap-4">
                  <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-red-600 text-sm font-bold">×</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Going too matchy with blues</h4>
                    <p className="text-gray-700">Different shades of blue often clash rather than coordinate. Stick to one blue (your navy couch) and use other colors for contrast.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-red-600 text-sm font-bold">×</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Using only dark colors</h4>
                    <p className="text-gray-700">Navy + black + charcoal = a design black hole. Add light colors to prevent your seating area from feeling heavy or cave-like.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-red-600 text-sm font-bold">×</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Forgetting about room lighting</h4>
                    <p className="text-gray-700">Navy absorbs light, so colors that look great in the store might disappear in your dimly-lit living room. Test pillow colors in your actual space.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-green-600 text-sm font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">The fix: Use the 60-30-10 rule</h4>
                    <p className="text-gray-700">Navy couch = 60%, wall color/rug = 30%, pillows and accessories = 10%. This prevents any single element from overwhelming the space.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* FAQ Section */}
            <section id="faqs" className="prose prose-lg max-w-none section-anchor">
              <h2 className="font-cormorant text-3xl font-bold mb-6">Frequently Asked Questions</h2>
              
              <div className="space-y-4 mb-8">
                <details className="border border-gray-200 rounded-lg p-4 bg-gray-50">
                  <summary className="font-semibold text-gray-900 cursor-pointer hover:text-primary">What colors look best with navy blue couches?</summary>
                  <div className="mt-3 text-gray-700 leading-relaxed">
                    The best colors for navy couches are warm neutrals (cream, ivory, gold), coral and peach tones, crisp whites, blush pink, and burnt orange. These create beautiful contrast while maintaining sophistication.
                  </div>
                </details>

                <details className="border border-gray-200 rounded-lg p-4 bg-gray-50">
                  <summary className="font-semibold text-gray-900 cursor-pointer hover:text-primary">Should I choose warm or cool colors for navy couch pillows?</summary>
                  <div className="mt-3 text-gray-700 leading-relaxed">
                    Both work! Navy is versatile enough to handle warm colors like coral and gold for cozy vibes, or cool colors like silver and white for modern elegance. The key is choosing colors with enough contrast to pop against the dark blue.
                  </div>
                </details>

                <details className="border border-gray-200 rounded-lg p-4 bg-gray-50">
                  <summary className="font-semibold text-gray-900 cursor-pointer hover:text-primary">How many pillows should I put on a navy sectional?</summary>
                  <div className="mt-3 text-gray-700 leading-relaxed">
                    For navy sectionals, use 5-7 pillows in odd numbers. Place larger 22×22 inch pillows at corners, medium 20×20 inch pillows in between, and add one lumbar pillow (12×20 inches) for variety.
                  </div>
                </details>

                <details className="border border-gray-200 rounded-lg p-4 bg-gray-50">
                  <summary className="font-semibold text-gray-900 cursor-pointer hover:text-primary">Can I use white pillows with a navy blue couch?</summary>
                  <div className="mt-3 text-gray-700 leading-relaxed">
                    Yes! White pillows create classic nautical elegance with navy couches. Choose cream or ivory over stark white to avoid harsh contrast, and consider textured whites like cable knit or linen for added visual interest.
                  </div>
                </details>

                <details className="border border-gray-200 rounded-lg p-4 bg-gray-50">
                  <summary className="font-semibold text-gray-900 cursor-pointer hover:text-primary">What floral patterns work with navy blue sofas?</summary>
                  <div className="mt-3 text-gray-700 leading-relaxed">
                    Watercolor florals in soft pinks, coral roses with green foliage, pampas grass in neutral tones, and vintage botanical prints work beautifully. The key is choosing florals with colors that complement rather than compete with navy.
                  </div>
                </details>

                <details className="border border-gray-200 rounded-lg p-4 bg-gray-50">
                  <summary className="font-semibold text-gray-900 cursor-pointer hover:text-primary">Do navy couches work in small rooms?</summary>
                  <div className="mt-3 text-gray-700 leading-relaxed">
                    Navy couches can work in small rooms if you balance them with plenty of light colors and good lighting. Use cream, white, or pale pink pillows and ensure adequate natural and artificial light to prevent the space from feeling dark.
                  </div>
                </details>

                <details className="border border-gray-200 rounded-lg p-4 bg-gray-50">
                  <summary className="font-semibold text-gray-900 cursor-pointer hover:text-primary">What's the best fabric for pillows on velvet navy couches?</summary>
                  <div className="mt-3 text-gray-700 leading-relaxed">
                    Mix textures for visual interest! Pair velvet navy couches with linen, cotton, or bouclé pillow covers. Avoid matching velvet pillows — the texture variety keeps the look from being too heavy or formal.
                  </div>
                </details>

                <details className="border border-gray-200 rounded-lg p-4 bg-gray-50">
                  <summary className="font-semibold text-gray-900 cursor-pointer hover:text-primary">Should I match my navy couch to my walls?</summary>
                  <div className="mt-3 text-gray-700 leading-relaxed">
                    Avoid painting walls the same navy as your couch — this creates a monotonous look. Instead, choose complementary colors like warm gray, cream, or soft coral for walls, and use pillows to tie the colors together.
                  </div>
                </details>
              </div>
            </section>

            {/* Final CTA */}
            <section className="text-center py-10 mt-10 bg-gradient-to-br from-primary to-primary-dark rounded-2xl text-white">
              <h3 className="font-cormorant text-3xl font-bold mb-3">Transform Your Navy Couch Today</h3>
              <p className="text-white/90 mb-6">Discover hundreds of floral pillows perfect for navy furniture styling.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/flower-throw-pillows" className="bg-white text-primary hover:bg-gray-100 font-medium py-3 px-8 rounded-lg transition-colors">
                  Shop Floral Pillows
                </Link>
                <Link href="/flower-throw-pillows/watercolor" className="border border-white/30 text-white hover:bg-white/10 font-medium py-3 px-8 rounded-lg transition-colors">
                  Browse Watercolor Collection
                </Link>
              </div>
            </section>
          </div>

          {/* Sticky TOC */}
          <aside className="lg:col-span-4">
            <div className="toc-sticky">
              <nav className="toc-card">
                <div className="text-sm font-medium text-gray-900 mb-3 flex items-center gap-2">
                  <span className="uppercase tracking-wide">Article Contents</span>
                </div>
                <ul className="m-0 p-0 list-none space-y-1">
                  {[
                    { href: "#quick-answers", label: "Key Takeaways" },
                    { href: "#color-theory", label: "Why Navy Works" },
                    { href: "#pillow-examples", label: "8 Stunning Examples" },
                    { href: "#color-combinations", label: "Color Combinations" },
                    { href: "#arrangement-guide", label: "Arrangement Guide" },
                    { href: "#pattern-mixing", label: "Pattern Mixing" },
                    { href: "#seasonal-styling", label: "Seasonal Styling" },
                    { href: "#common-mistakes", label: "Common Mistakes" },
                    { href: "#faqs", label: "FAQs" },
                    { href: "#related-articles", label: "Related Articles" },
                  ].map((item) => (
                    <li key={item.href}>
                      <a href={item.href} className="toc-link">
                        <span className="toc-bullet" />
                        <span>{item.label}</span>
                        <FiChevronRight className="ml-auto opacity-60" />
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </aside>
        </div>
      </article>

      {/* Related Articles */}
      <section id="related-articles" className="py-16 bg-surface-muted">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-cormorant text-3xl font-bold mb-4">Continue Reading</h2>
              <p className="text-gray-600">Complete your couch styling knowledge with these expert guides</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Link href="/blog/what-color-pillows-go-with-a-gray-couch" className="group block bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100">
                <div className="relative h-40">
                  <Image src="/images/blog/gray-couch/gray-couch-usa-flag-floral-pillows.webp" alt="Gray couch with floral pillows" fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
                </div>
                <div className="p-4">
                  <h3 className="font-medium group-hover:text-primary transition-colors">What Color Pillows Go With a Gray Couch?</h3>
                  <p className="text-sm text-gray-600 mt-1">Undertone matching and 8 gorgeous examples</p>
                </div>
              </Link>
              <Link href="/blog/what-color-pillows-go-with-a-cream-sofa" className="group block bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100">
                <div className="relative h-40">
                  <Image src="/images/blog/cream-sofa/cream-sofa-pillow-ideas.webp" alt="Cream sofa with floral pillows" fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
                </div>
                <div className="p-4">
                  <h3 className="font-medium group-hover:text-primary transition-colors">What Color Pillows Go With a Cream Sofa?</h3>
                  <p className="text-sm text-gray-600 mt-1">Warm vs cool balance for neutral sofas</p>
                </div>
              </Link>
              <Link href="/blog/what-kind-of-pillows-go-with-leather-couch" className="group block bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100">
                <div className="relative h-40">
                  <Image src="/images/blog/leather-couch/leather-couch-pillow-ideas.webp" alt="Leather couch with pillows" fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
                </div>
                <div className="p-4">
                  <h3 className="font-medium group-hover:text-primary transition-colors">What Kind of Pillows Go With a Leather Couch?</h3>
                  <p className="text-sm text-gray-600 mt-1">Textures and fabrics that complement leather</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

 

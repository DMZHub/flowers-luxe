"use client"

import React from "react"
import Head from "next/head"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { FiCalendar, FiClock, FiTag, FiShare2, FiArrowRight, FiArrowLeft, FiChevronRight } from "react-icons/fi"
import Breadcrumbs from "../../../components/Breadcrumbs"
import SchemaMarkup from "../../../components/SchemaMarkup"

/**
 * FlowersLuxe Blog Article (Final Version)
 * -------------------------------------------------------------
 * Title: What Color Pillows Go With a Gray Couch? (Stylish Ideas)
 * Route: /blog/what-color-pillows-go-with-a-gray-couch
 * Features:
 * - Engaging intro + expert paragraph targeting: "what color pillows go with a gray couch"
 * - Quick Answer Table after intro (high-intent skim block)
 * - Audience tone: U.S.-based women into cozy, floral home styling
 * - 8 detailed examples with H3 subheadings and explanatory text
 * - Professional spacing/typography matching FlowersLuxe template
 * - Complete SEO optimization with schema markup
 * - Women-focused conversational expert tone
 * -------------------------------------------------------------
 */

// ---------------------------------------------
// Article Config
// ---------------------------------------------
const ARTICLE = {
  title: "What Color Pillows Go With a Gray Couch? (Stylish Ideas)",
  slug: "what-color-pillows-go-with-a-gray-couch",
  description:
    "The definitive guide to what color pillows go with a gray couch — with undertone-specific palettes, pattern mixing, arrangement formulas, seasonal swaps, and 8 real floral examples.",
  category: "Home Decor",
  categorySlug: "home-decor",
  author: "FlowersLuxe Editorial Team",
  publishDateISO: "2025-08-08",
  modifiedDateISO: "2025-08-08",
  publishDateHuman: "August 8, 2025",
  readTime: "12 min read",
  hero: {
    src: "/images/blog/gray-couch/gray-couch-usa-flag-floral-pillows.webp",
    alt: "USA flag-inspired floral throw pillows styled on a gray couch, offering a bold color pairing idea for gray sofas.",
    width: 1200,
    height: 800,
  },
}

// ---------------------------------------------
// Product Images (8) — Updated with correct data
// ---------------------------------------------
const PRODUCT_IMAGES: Array<{
  src: string
  alt: string
  caption: string
  link: string
  width: number
  height: number
}> = [
  {
    src: "/images/blog/gray-couch/pampas-pillow-light-gray-sofa.webp",
    alt: "Soft gray minimalist sofa with beige throw pillows featuring pampas grass prints in a Scandinavian-style living room.",
    caption: "Shop Pampas Beige Botanical Pillow",
    link: "/flower-throw-pillows/boho/boho-pampas-grass-pillow",
    width: 1200,
    height: 800,
  },
  {
    src: "/images/blog/gray-couch/patriotic-flower-pillows-gray-sofa.webp",
    alt: "Medium gray fabric sofa with USA flag-inspired floral pillows featuring sunflowers, roses, and stars in a farmhouse-style living room.",
    caption: "Shop Patriotic Flower Pillow",
    link: "/flower-throw-pillows/vintage/patriotic-floral-flag-pillow",
    width: 1200,
    height: 800,
  },
  {
    src: "/images/blog/gray-couch/american-floral-pillows-gray-sectional.webp",
    alt: "Modern gray sectional sofa with Americana-style floral pillows featuring sunflowers and roses in a warm-toned living room.",
    caption: "Shop American Wildflower Pillows",
    link: "/flower-throw-pillows/vintage/patriotic-floral-flag-pillow",
    width: 1200,
    height: 800,
  },
  {
    src: "/images/blog/gray-couch/lavender-yellow-pillow-gray-sofa.webp",
    alt: "Light gray modern sofa with bold yellow throw pillows featuring purple lavender floral designs in a minimalist neutral living room.",
    caption: "Shop Lavender & Yellow Botanical Pillow",
    link: "/flower-throw-pillows/floral/lavender-throw-pillow-botanical-illustration",
    width: 1200,
    height: 800,
  },
  {
    src: "/images/blog/gray-couch/tulip-pillow-dark-gray-sectional.webp",
    alt: "Dark gray sectional sofa with watercolor pink tulip pillows in a cozy living room with wood accents and large windows.",
    caption: "Shop Watercolor Tulip Pillow",
    link: "/flower-throw-pillows/watercolor/tulip-watercolor-floral-pillow",
    width: 1200,
    height: 800,
  },
  {
    src: "/images/blog/gray-couch/flower-pillows-dark-gray-sofa.webp",
    alt: "Deep gray L-shaped sofa with bold floral-patterned pillows in a neutral-toned living room.",
    caption: "Shop Vintage Wildflower Pillows",
    link: "/flower-throw-pillows/vintage/wildflower-vintage-botanical-pillow",
    width: 1200,
    height: 800,
  },
  {
    src: "/images/blog/gray-couch/rose-floral-pillow-gray-sofa.webp",
    alt: "Modern gray sectional sofa with rose-patterned floral pillows in a stylish living room with a black accent wall and minimalist decor.",
    caption: "Shop Vintage Rose Floral Pillow",
    link: "/flower-throw-pillows/vintage/vintage-toffee-rose-pillow",
    width: 1200,
    height: 800,
  },
  {
    src: "/images/blog/gray-couch/gray-couch-usa-flag-floral-pillows.webp",
    alt: "USA flag-inspired floral throw pillows styled on a gray couch, offering a bold color pairing idea for gray sofas.",
    caption: "Shop Flag Floral Collection",
    link: "/flower-throw-pillows/vintage/patriotic-floral-flag-pillow",
    width: 1200,
    height: 800,
  },
]

// ---------------------------------------------
// Share functionality
// ---------------------------------------------
async function shareArticle(title: string, description: string, url: string) {
  const shareData = { title, text: description, url }
  try {
    if (navigator.share) {
      await navigator.share(shareData)
      return
    }
    await navigator.clipboard.writeText(url)
    alert("Link copied to clipboard!")
  } catch (err) {
    const shareUrl = encodeURIComponent(url)
    const shareText = encodeURIComponent(title)
    window.open(`https://twitter.com/intent/tweet?text=${shareText}&url=${shareUrl}`, "_blank")
  }
}

// ---------------------------------------------
// JSON-LD Schema Objects
// ---------------------------------------------
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
    wordCount: "3200",
  }
}

function getFAQSchema(currentUrl: string) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What pillow colors are trending for gray sofas in 2025?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Olive, rust, terracotta, and blush are trending, along with bold jewel tones like fuchsia, mustard, and teal. Vintage-inspired botanicals and watercolor florals are also popular choices. The key is matching the warmth of your gray's undertone."
        }
      },
      {
        "@type": "Question",
        name: "How many pillows should I put on a gray sectional?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Start with 5-7 pillows using odd numbers for the best visual balance. For a standard sectional, use two 22×22 pillows on each corner section and one 12×20 lumbar in the center. Scale up to 7 for extra-wide sectionals by mirroring a 3–1–3 arrangement."
        }
      },
      {
        "@type": "Question",
        name: "Can I mix floral pillows with stripes or geometric patterns?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes! Use one dominant floral print as your anchor, then support with a smaller-scale stripe or geometric that repeats 1–2 colors from the floral. Keep total patterns to three or fewer for a cohesive look."
        }
      },
      {
        "@type": "Question",
        name: "What size pillow inserts should I buy?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Choose inserts that are 2″ larger than your pillow covers for a full, plump look. So for 20×20 covers, use 22×22 inserts. Down or quality down-alternative fills work best—avoid solid foam inserts."
        }
      },
      {
        "@type": "Question",
        name: "What's the smallest pillow size I should use on a sofa?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "For most sofas, don't go smaller than 20×20 inches for square pillows. Smaller pillows can look disproportionate and cheap. The exception is lumbar pillows, which typically measure 12×20 or 14×22 inches."
        }
      },
      {
        "@type": "Question",
        name: "Should I match my gray couch's undertone exactly?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Not exactly, but stay within the same temperature family. If your gray has warm (brown/beige) undertones, choose warm pillow colors like terracotta or mustard. Cool grays (blue/green undertones) pair with navy, lavender, or sage."
        }
      },
      {
        "@type": "Question",
        name: "How do I arrange pillows on a large sectional without it looking cluttered?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Place larger pillows (22″ or 24″) at the back as your foundation, then layer smaller ones in front. Distribute pillows evenly but not symmetrically—this creates visual interest while maintaining balance. Leave 3–4 inches between pillow edges."
        }
      },
      {
        "@type": "Question",
        name: "What colors should I avoid with a dark gray couch?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Avoid very dark colors that will disappear against your sofa, and be cautious with stark white which can create harsh contrast. Instead, choose cream or ivory over bright white, and opt for colors with enough contrast to stand out without being jarring."
        }
      },
      {
        "@type": "Question",
        name: "Are white pillows a good choice for gray couches?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "White pillows work beautifully for clean, minimalist looks, especially in Scandinavian or modern interiors. However, choose cream or ivory over stark white to avoid harsh contrast, especially with darker gray sofas."
        }
      },
      {
        "@type": "Question",
        name: "How often should I change my pillow covers?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Seasonally is ideal—swap to lighter colors and fabrics for spring/summer (blush, sage, linen) and richer tones for fall/winter (burgundy, velvet). This keeps your space feeling fresh and current with minimal investment."
        }
      },
      {
        "@type": "Question",
        name: "What's the best fabric for gray couch pillows if I have kids or pets?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Performance fabrics, microfiber, and removable cotton covers are best for high-traffic homes. Look for machine-washable options and avoid delicate fabrics like silk. Consider zippered covers for easy removal and washing."
        }
      }
    ],
    url: currentUrl
  };
}


// ---------------------------------------------
// Sticky TOC styles (preloaded)
// ---------------------------------------------
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

// ---------------------------------------------
// Main Component
// ---------------------------------------------
export default function GrayCouchPillowsArticlePage() {
  const pathname = usePathname()
  const currentUrl = `https://flowersluxe.com${pathname ?? "/blog/what-color-pillows-go-with-a-gray-couch"}`

  const articleSchema = React.useMemo(() => getArticleSchema(currentUrl), [currentUrl])
  const faqSchema = React.useMemo(() => getFAQSchema(currentUrl), [currentUrl])

  const breadcrumbItems = [
    { name: "Blog", url: "/blog" },
    { name: ARTICLE.title, url: `/blog/${ARTICLE.slug}` },
  ]

  return (
    <>
      <StickyTocStyles />
      <SchemaMarkup schema={articleSchema} />
      <SchemaMarkup schema={faqSchema} />

      <Head>
        <title>{ARTICLE.title} | FlowersLuxe Blog</title>
        <meta name="description" content={ARTICLE.description} />
        <meta name="keywords" content="what color pillows go with a gray couch, gray couch pillow colors, floral pillows gray sofa, best pillows for gray couch" />
        <link rel="canonical" href={`https://flowersluxe.com/blog/${ARTICLE.slug}`} />
        <meta property="og:title" content={`${ARTICLE.title} | FlowersLuxe Blog`} />
        <meta property="og:description" content={ARTICLE.description} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={currentUrl} />
        <meta property="og:image" content={`https://flowersluxe.com${ARTICLE.hero.src}`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${ARTICLE.title} | FlowersLuxe Blog`} />
        <meta name="twitter:description" content={ARTICLE.description} />
        <meta name="twitter:image" content={`https://flowersluxe.com${ARTICLE.hero.src}`} />
        <meta property="article:published_time" content={ARTICLE.publishDateISO} />
        <meta property="article:modified_time" content={ARTICLE.modifiedDateISO} />
        <meta property="article:section" content={ARTICLE.category} />
        <meta property="article:author" content={ARTICLE.author} />
      </Head>

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

          {/* Revised Intro Hook (Keyword in first 100 words) */}
          <p className="text-lg text-gray-700 mb-4">
            Wondering <strong>what color pillows go with a gray couch</strong>? You're not alone. Gray sofas are popular because they're versatile — but that flexibility can make styling feel overwhelming. The right pillows can warm up a cool charcoal, add depth to a mid-gray, or soften a light dove-gray in seconds.
          </p>
          {/* Expert Authority Paragraph */}
          <p className="text-lg text-gray-700 mb-6">
            In this expert guide, we'll map undertones, translate color theory into easy choices, and give you copy‑and‑paste formulas that work on real couches (not just mood boards). You'll see <strong>8 full-width examples</strong> with floral pillows, learn arrangement sizes for sectionals vs loveseats, get seasonal palettes to go from idea → cart with confidence.
          </p>

          {/* Share */}
          <div className="flex items-center gap-3 mb-6">
            <button
              onClick={() => shareArticle(ARTICLE.title, ARTICLE.description, currentUrl)}
              className="inline-flex items-center gap-2 text-gray-600 hover:text-primary transition-colors"
              aria-label="Share this article"
            >
              <FiShare2 size={18} />
              <span>Share</span>
            </button>
          </div>

          <div className="relative rounded-2xl overflow-hidden shadow-sm border border-gray-100">
            <Image
              src={ARTICLE.hero.src}
              alt={ARTICLE.hero.alt}
              width={ARTICLE.hero.width}
              height={ARTICLE.hero.height}
              priority
              sizes="(max-width: 1024px) 100vw, 1024px"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </header>

      {/* Body */}
      <article className="pb-16 md:pb-24">
        <div className="container-custom grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Main content */}
          <div className="lg:col-span-8 max-w-3xl">
            
          {/* Quick Answer Table */}
            <section id="quick-answers" className="prose prose-lg max-w-none section-anchor">
              <h2 className="font-cormorant text-3xl font-bold mb-6">Quick Answers</h2>
              <table className="w-full border-collapse border border-gray-200 rounded-xl overflow-hidden mb-8">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="text-left p-4 font-semibold text-gray-900 border-b border-gray-200">Question</th>
                    <th className="text-left p-4 font-semibold text-gray-900 border-b border-gray-200">Answer</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100">
                    <td className="p-4 text-gray-700 font-medium">Best colors for gray couches</td>
                    <td className="p-4 text-gray-700">Blush, dusty rose, navy/indigo, terracotta, saffron/mustard, ivory, sage/olive</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="p-4 text-gray-700 font-medium">Mixing patterns</td>
                    <td className="p-4 text-gray-700">One dominant floral + one small-scale stripe/geometric + one solid texture</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="p-4 text-gray-700 font-medium">How many pillows?</td>
                    <td className="p-4 text-gray-700">3–5 on standard sofas, 5–7 on large sectionals</td>
                  </tr>
                  <tr>
                    <td className="p-4 text-gray-700 font-medium">Undertone rule</td>
                    <td className="p-4 text-gray-700">Warm gray → warm hues (terracotta/olive). Cool gray → cool hues (navy/lavender).</td>
                  </tr>
                </tbody>
              </table>
            </section>

           {/* Eight detailed examples with H3 subheadings and explanatory text */}
            <section id="examples" className="prose prose-lg max-w-none section-anchor">
              <h2 className="font-cormorant text-3xl font-bold mb-6">8 Stunning Gray Couch Pillow Color Ideas</h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Ready to see these color theories in action? Here are eight real-world examples showing different ways to style your gray sofa with floral pillows. Each look demonstrates specific undertone matching and color coordination principles you can copy at home.
              </p>

              {/* Example 1 */}
              <div className="my-8">
                <h3 className="font-cormorant text-xl font-bold mb-3">Scandinavian Minimalism: Beige Pampas Grass Pillows</h3>
                <figure className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm bg-white mb-4">
                  <Link href="/flower-throw-pillows/boho/boho-pampas-grass-pillow" className="block">
                    <Image
                      src="/images/blog/gray-couch/pampas-pillow-light-gray-sofa.webp"
                      alt="Soft gray minimalist sofa with beige throw pillows featuring pampas grass prints in a Scandinavian-style living room."
                      width={1200}
                      height={800}
                      priority
                      sizes="100vw"
                      className="w-full h-auto object-cover"
                    />
                  </Link>
                  <figcaption className="px-4 py-3 text-sm text-gray-700 border-t border-gray-100 flex items-center justify-between">
                    <Link href="/flower-throw-pillows/boho/boho-pampas-grass-pillow" className="text-primary hover:text-primary-dark font-medium inline-flex items-center gap-2">
                      <span>Shop Pampas Beige Botanical Pillow</span>
                      <FiArrowRight size={16} />
                    </Link>
                  </figcaption>
                </figure>
                <p>This light gray sofa pairs beautifully with soft beige pillows featuring delicate pampas grass prints. The neutral palette creates that coveted Scandinavian look without feeling cold or stark. This combination works especially well if your gray has warm undertones — the beige bridges the gap between your sofa and other warm wood or cream elements in your room.</p>
              </div>

              {/* Example 2 */}
              <div className="my-8">
                <h3 className="font-cormorant text-xl font-bold mb-3">Americana Farmhouse: Patriotic Floral Statement Pillows</h3>
                <figure className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm bg-white mb-4">
                  <Link href="/flower-throw-pillows/vintage/patriotic-floral-flag-pillow" className="block">
                    <Image
                      src="/images/blog/gray-couch/patriotic-flower-pillows-gray-sofa.webp"
                      alt="Medium gray fabric sofa with USA flag-inspired floral pillows featuring sunflowers, roses, and stars in a farmhouse-style living room."
                      width={1200}
                      height={800}
                      priority
                      sizes="100vw"
                      className="w-full h-auto object-cover"
                    />
                  </Link>
                  <figcaption className="px-4 py-3 text-sm text-gray-700 border-t border-gray-100 flex items-center justify-between">
                    <Link href="/flower-throw-pillows/vintage/patriotic-floral-flag-pillow" className="text-primary hover:text-primary-dark font-medium inline-flex items-center gap-2">
                      <span>Shop Patriotic Flower Pillow</span>
                      <FiArrowRight size={16} />
                    </Link>
                  </figcaption>
                </figure>
                <p>Bold red and blue florals make a stunning statement against this medium-gray sofa. The patriotic color scheme works because gray acts as the perfect neutral backdrop, letting the vibrant sunflowers and roses take center stage. This look is perfect for women who love vintage-inspired farmhouse style and aren't afraid of a little color drama.</p>
              </div>

              {/* Example 3 */}
              <div className="my-8">
                <h3 className="font-cormorant text-xl font-bold mb-3">Modern Sectional Styling: Coordinated Floral Mix</h3>
                <figure className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm bg-white mb-4">
                  <Link href="/flower-throw-pillows/vintage/patriotic-floral-flag-pillow" className="block">
                    <Image
                      src="/images/blog/gray-couch/american-floral-pillows-gray-sectional.webp"
                      alt="Modern gray sectional sofa with Americana-style floral pillows featuring sunflowers and roses in a warm-toned living room."
                      width={1200}
                      height={800}
                      priority
                      sizes="100vw"
                      className="w-full h-auto object-cover"
                    />
                  </Link>
                  <figcaption className="px-4 py-3 text-sm text-gray-700 border-t border-gray-100 flex items-center justify-between">
                    <Link href="/flower-throw-pillows/vintage/patriotic-floral-flag-pillow" className="text-primary hover:text-primary-dark font-medium inline-flex items-center gap-2">
                      <span>Shop American Wildflower Pillows</span>
                      <FiArrowRight size={16} />
                    </Link>
                  </figcaption>
                </figure>
                <p>Here's how to style a large sectional without overwhelming the space. Notice how the floral pillows are distributed evenly but not symmetrically — this creates visual interest while maintaining balance. The warm reds and golds in the flowers complement the gray beautifully, proving that bold florals can work in modern spaces when properly proportioned.</p>
              </div>

              {/* Example 4 */}
              <div className="my-8">
                <h3 className="font-cormorant text-xl font-bold mb-3">Cheerful Contrast: Yellow and Purple Lavender Pillows</h3>
                <figure className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm bg-white mb-4">
                  <Link href="/flower-throw-pillows/floral/lavender-throw-pillow-botanical-illustration" className="block">
                    <Image
                      src="/images/blog/gray-couch/lavender-yellow-pillow-gray-sofa.webp"
                      alt="Light gray modern sofa with bold yellow throw pillows featuring purple lavender floral designs in a minimalist neutral living room."
                      width={1200}
                      height={800}
                      priority
                      sizes="100vw"
                      className="w-full h-auto object-cover"
                    />
                  </Link>
                  <figcaption className="px-4 py-3 text-sm text-gray-700 border-t border-gray-100 flex items-center justify-between">
                    <Link href="/flower-throw-pillows/floral/lavender-throw-pillow-botanical-illustration" className="text-primary hover:text-primary-dark font-medium inline-flex items-center gap-2">
                      <span>Shop Lavender & Yellow Botanical Pillow</span>
                      <FiArrowRight size={16} />
                    </Link>
                  </figcaption>
                </figure>
                <p>Don't shy away from bold color combinations! This sunny yellow pillow with purple lavender motifs brings instant cheerfulness to a neutral gray sofa. Yellow and purple are complementary colors, which means they naturally enhance each other — and gray provides the perfect neutral ground to let this vibrant pairing shine without competing.</p>
              </div>

              {/* Example 5 */}
              <div className="my-8">
                <h3 className="font-cormorant text-xl font-bold mb-3">Romantic Watercolors: Pink Tulip Accent Pillows</h3>
                <figure className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm bg-white mb-4">
                  <Link href="/flower-throw-pillows/watercolor/tulip-watercolor-floral-pillow" className="block">
                    <Image
                      src="/images/blog/gray-couch/tulip-pillow-dark-gray-sectional.webp"
                      alt="Dark gray sectional sofa with watercolor pink tulip pillows in a cozy living room with wood accents and large windows."
                      width={1200}
                      height={800}
                      priority
                      sizes="100vw"
                      className="w-full h-auto object-cover"
                    />
                  </Link>
                  <figcaption className="px-4 py-3 text-sm text-gray-700 border-t border-gray-100 flex items-center justify-between">
                    <Link href="/flower-throw-pillows/watercolor/tulip-watercolor-floral-pillow" className="text-primary hover:text-primary-dark font-medium inline-flex items-center gap-2">
                      <span>Shop Watercolor Tulip Pillow</span>
                      <FiArrowRight size={16} />
                    </Link>
                  </figcaption>
                </figure>
                <p>Soft watercolor florals are perfect for women who love feminine touches without going overly sweet. These pink tulip pillows add gentle color contrast against the darker gray sectional, while the watercolor style keeps the look sophisticated and artistic. The muted pink tones work beautifully with both warm and cool gray undertones.</p>
              </div>

              {/* Example 6 */}
              <div className="my-8">
                <h3 className="font-cormorant text-xl font-bold mb-3">Bold Statement: Vintage Wildflower Mix</h3>
                <figure className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm bg-white mb-4">
                  <Link href="/flower-throw-pillows/vintage/wildflower-vintage-botanical-pillow" className="block">
                    <Image
                      src="/images/blog/gray-couch/flower-pillows-dark-gray-sofa.webp"
                      alt="Deep gray L-shaped sofa with bold floral-patterned pillows in a neutral-toned living room."
                      width={1200}
                      height={800}
                      priority
                      sizes="100vw"
                      className="w-full h-auto object-cover"
                    />
                  </Link>
                  <figcaption className="px-4 py-3 text-sm text-gray-700 border-t border-gray-100 flex items-center justify-between">
                    <Link href="/flower-throw-pillows/vintage/wildflower-vintage-botanical-pillow" className="text-primary hover:text-primary-dark font-medium inline-flex items-center gap-2">
                      <span>Shop Vintage Wildflower Pillows</span>
                      <FiArrowRight size={16} />
                    </Link>
                  </figcaption>
                </figure>
                <p>Sometimes you need a pillow that commands attention! These vintage-inspired wildflower pillows feature rich, saturated colors that pop beautifully against the deep gray sofa. This approach works best when you keep the rest of your decor fairly neutral — let the pillows be the star of your living room show.</p>
              </div>

              {/* Example 7 */}
              <div className="my-8">
                <h3 className="font-cormorant text-xl font-bold mb-3">Classic Elegance: Toffee Rose Pattern</h3>
                <figure className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm bg-white mb-4">
                  <Link href="/flower-throw-pillows/vintage/vintage-toffee-rose-pillow" className="block">
                    <Image
                      src="/images/blog/gray-couch/rose-floral-pillow-gray-sofa.webp"
                      alt="Modern gray sectional sofa with rose-patterned floral pillows in a stylish living room with a black accent wall and minimalist decor."
                      width={1200}
                      height={800}
                      priority
                      sizes="100vw"
                      className="w-full h-auto object-cover"
                    />
                  </Link>
                  <figcaption className="px-4 py-3 text-sm text-gray-700 border-t border-gray-100 flex items-center justify-between">
                    <Link href="/flower-throw-pillows/vintage/vintage-toffee-rose-pillow" className="text-primary hover:text-primary-dark font-medium inline-flex items-center gap-2">
                      <span>Shop Vintage Rose Floral Pillow</span>
                      <FiArrowRight size={16} />
                    </Link>
                  </figcaption>
                </figure>
                <p>Rose patterns never go out of style, and this toffee-toned version proves why. The warm brown and cream color palette creates a sophisticated, timeless look that works beautifully with gray upholstery. This is perfect for women who love classic floral patterns but prefer more muted, grown-up color schemes over bright pinks.</p>
              </div>

  {/* Example 8 */}
  <div className="my-8"> 
  <h3 className="font-cormorant text-xl font-bold mb-3">Spring Touch: Red Tulip Floral Print</h3>
  <figure className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm bg-white mb-4">
    <Link href="/flower-throw-pillows/floral/red-tulip-pillow" className="block">
      <Image
        src="/images/blog/gray-couch/red-tulip-flower-pillows-gray-sofa.webp"
        alt="Gray fabric sofa with square throw pillows featuring red tulip flower prints on a green background, accented by an orange blanket and indoor plants."
        width={1200}
        height={800}
        priority
        sizes="100vw"
        className="w-full h-auto object-cover"
      />
    </Link>
    <figcaption className="px-4 py-3 text-sm text-gray-700 border-t border-gray-100 flex items-center justify-between">
      <Link href="/flower-throw-pillows/floral/red-tulip-pillow" className="text-primary hover:text-primary-dark font-medium inline-flex items-center gap-2">
        <span>Shop Red Tulip Collection</span>
        <FiArrowRight size={16} />
      </Link>
    </figcaption>
  </figure>
  <p>This red tulip floral print pairs naturally with a gray sofa, creating a fresh, seasonal look. The green foliage in the design ties in beautifully with surrounding indoor plants, while the warm orange accent adds contrast and visual interest.</p>
</div>
</section>

          {/* Undertone Table */}
            <section id="color-coordination" className="prose prose-lg max-w-none section-anchor">
              <h2 className="font-cormorant text-3xl font-bold mb-6">Color Coordination Fundamentals</h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Identify your sofa's undertone first — it's the fastest path to a palette that looks intentional.
              </p>
              <table className="w-full border-collapse border border-gray-200 rounded-xl overflow-hidden mb-6">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="text-left p-4 font-semibold text-gray-900 border-b border-gray-200">Gray Undertone</th>
                    <th className="text-left p-4 font-semibold text-gray-900 border-b border-gray-200">Safe Pillow Colors</th>
                    <th className="text-left p-4 font-semibold text-gray-900 border-b border-gray-200">Metal Accents</th>
                    <th className="text-left p-4 font-semibold text-gray-900 border-b border-gray-200">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100">
                    <td className="p-4 text-gray-700 font-medium">Warm (brown/greige)</td>
                    <td className="p-4 text-gray-700">Terracotta, rust, mustard, olive, cream</td>
                    <td className="p-4 text-gray-700">Brass, antique gold</td>
                    <td className="p-4 text-gray-700">Use warm white/ivory rather than stark white</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="p-4 text-gray-700 font-medium">Cool (blue/green)</td>
                    <td className="p-4 text-gray-700">Navy, indigo, lavender, icy pink, crisp white</td>
                    <td className="p-4 text-gray-700">Brushed nickel, matte black</td>
                    <td className="p-4 text-gray-700">Lean into cool florals with blue/green foliage</td>
                  </tr>
                  <tr>
                    <td className="p-4 text-gray-700 font-medium">Neutral (balanced)</td>
                    <td className="p-4 text-gray-700">Blush, sage, saffron, taupe, charcoal</td>
                    <td className="p-4 text-gray-700">Brushed brass or black</td>
                    <td className="p-4 text-gray-700">Mix warm + cool accents for range</td>
                  </tr>
                </tbody>
              </table>
              <p className="text-gray-700 leading-relaxed mb-8">
                <strong>60–30–10:</strong> let gray be your 60%, secondary tones 30%, and use pillows for the final 10% accent.
              </p>
            </section>
              
              {/* Arrangement Techniques + Size Guide Table */}
            <section id="arrangement-techniques" className="prose prose-lg max-w-none section-anchor">
              <h2 className="font-cormorant text-3xl font-bold mb-6">Pillow Arrangement Techniques</h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Use size variation, consistent spacing, and a clear focal pillow (floral) to keep the look polished.
              </p>

             <table className="w-full border-collapse border border-gray-200 rounded-xl overflow-hidden mb-6">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="text-left p-4 font-semibold text-gray-900 border-b border-gray-200">Sofa Type</th>
                    <th className="text-left p-4 font-semibold text-gray-900 border-b border-gray-200">Suggested Count</th>
                    <th className="text-left p-4 font-semibold text-gray-900 border-b border-gray-200">Sizes (inches)</th>
                    <th className="text-left p-4 font-semibold text-gray-900 border-b border-gray-200">Formula</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100">
                    <td className="p-4 text-gray-700 font-medium">Standard Sofa (80–90")</td>
                    <td className="p-4 text-gray-700">3–5</td>
                    <td className="p-4 text-gray-700">22×22, 20×20, 12×20 lumbar</td>
                    <td className="p-4 text-gray-700">22 (outer) + 20 (inner) + 12×20 lumbar (center)</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="p-4 text-gray-700 font-medium">Loveseat (60–72")</td>
                    <td className="p-4 text-gray-700">3–4</td>
                    <td className="p-4 text-gray-700">20×20, 18×18, 12×18 lumbar</td>
                    <td className="p-4 text-gray-700">20 (outer) + 18 (inner) + 12×18 lumbar</td>
                  </tr>
                  <tr>
                    <td className="p-4 text-gray-700 font-medium">Sectional (110"+)</td>
                    <td className="p-4 text-gray-700">5–7</td>
                    <td className="p-4 text-gray-700">22×22 corners, 20×20, 12×20 lumbar</td>
                    <td className="p-4 text-gray-700">Mirror corners; add center lumbar</td>
                  </tr>
                </tbody>
              </table>
              <ul className="text-gray-700 leading-relaxed space-y-2 mb-8">
                <li>Leave 3–4" between pillow edges for a non-cramped look</li>
                <li>Use inserts 2" larger than covers for fullness</li>
                <li>Asymmetry reads casual; symmetry reads formal</li>
              </ul>
            </section>

            {/* Pattern Mixing */}
            <section id="pattern-mixing" className="prose prose-lg max-w-none section-anchor">
              <h2 className="font-cormorant text-3xl font-bold mb-6">Mastering Pattern Mixing (with Florals)</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Cap patterns at three. Start with a dominant floral, then a small-scale helper pattern, then a solid texture.
              </p>
              <ul className="text-gray-700 leading-relaxed space-y-2 mb-6">
                <li><strong>Large:</strong> abstract petals, oversized botanicals</li>
                <li><strong>Medium:</strong> painterly blooms, classic florals</li>
                <li><strong>Small:</strong> pinstripe, micro-check, ditsy floral</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-8">
                Repeat one or two colors from your floral across the set and in nearby decor (throw, art, rug) for cohesion.
              </p>
            </section>

            {/* Style-Specific Tips */}
            <section id="style-specific-tips" className="prose prose-lg max-w-none section-anchor">
              <h2 className="font-cormorant text-3xl font-bold mb-6">Style-Specific Tips</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="p-6 rounded-xl border border-gray-200 bg-blue-50">
                  <h3 className="font-cormorant text-xl font-bold mb-4 text-gray-900">Modern & Contemporary</h3>
                  <ul className="text-gray-700 leading-relaxed space-y-2">
                    <li>2–3 colors max with crisp contrast</li>
                    <li>Abstract florals + solid bouclé</li>
                    <li>Matte black accents, clean spacing</li>
                  </ul>
                </div>
                <div className="p-6 rounded-xl border border-gray-200 bg-amber-50">
                  <h3 className="font-cormorant text-xl font-bold mb-4 text-gray-900">Vintage & Traditional</h3>
                  <ul className="text-gray-700 leading-relaxed space-y-2">
                    <li>Muted palettes and classic blooms</li>
                    <li>Trim details: piping, fringe</li>
                    <li>Prefer symmetry</li>
                  </ul>
                </div>
                <div className="p-6 rounded-xl border border-gray-200 bg-purple-50">
                  <h3 className="font-cormorant text-xl font-bold mb-4 text-gray-900">Bohemian & Eclectic</h3>
                  <ul className="text-gray-700 leading-relaxed space-y-2">
                    <li>Rich colors, global-inspired motifs</li>
                    <li>Intentional asymmetry, layers</li>
                    <li>Use a solid anchor to ground</li>
                  </ul>
                </div>
                <div className="p-6 rounded-xl border border-gray-200 bg-green-50">
                  <h3 className="font-cormorant text-xl font-bold mb-4 text-gray-900">Farmhouse & Rustic</h3>
                  <ul className="text-gray-700 leading-relaxed space-y-2">
                    <li>Warm neutrals + gingham/stripe</li>
                    <li>Linen/cotton textures</li>
                    <li>Olive, mustard, terracotta</li>
                  </ul>
                </div>
              </div>
            </section>

           {/* Seasonal Swaps Table */}
            <section id="seasonal-updates" className="prose prose-lg max-w-none section-anchor">
              <h2 className="font-cormorant text-3xl font-bold mb-6">Seasonal Styling Updates</h2>
              <table className="w-full border-collapse border border-gray-200 rounded-xl overflow-hidden mb-8">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="text-left p-4 font-semibold text-gray-900 border-b border-gray-200">Season</th>
                    <th className="text-left p-4 font-semibold text-gray-900 border-b border-gray-200">Palette</th>
                    <th className="text-left p-4 font-semibold text-gray-900 border-b border-gray-200">Floral Motifs</th>
                    <th className="text-left p-4 font-semibold text-gray-900 border-b border-gray-200">Fabrics</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100">
                    <td className="p-4 text-gray-700 font-medium">Spring</td>
                    <td className="p-4 text-gray-700">Blush, sage, sky blue</td>
                    <td className="p-4 text-gray-700">Cherry blossom, tulip, peony</td>
                    <td className="p-4 text-gray-700">Linen, light cotton</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="p-4 text-gray-700 font-medium">Summer</td>
                    <td className="p-4 text-gray-700">Lavender, sunny saffron</td>
                    <td className="p-4 text-gray-700">Wildflower, tropical leaves</td>
                    <td className="p-4 text-gray-700">Breathable cotton</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="p-4 text-gray-700 font-medium">Autumn</td>
                    <td className="p-4 text-gray-700">Rust, burgundy, mustard</td>
                    <td className="p-4 text-gray-700">Sunflower, chrysanthemum</td>
                    <td className="p-4 text-gray-700">Woven textures</td>
                  </tr>
                  <tr>
                    <td className="p-4 text-gray-700 font-medium">Winter</td>
                    <td className="p-4 text-gray-700">Jewel tones, metallics</td>
                    <td className="p-4 text-gray-700">Evergreen, winter florals</td>
                    <td className="p-4 text-gray-700">Velvet, wool blend</td>
                  </tr>
                </tbody>
              </table>
            </section>

            {/* Common Mistakes */}
            <section id="common-mistakes" className="prose prose-lg max-w-none section-anchor">
              <h2 className="font-cormorant text-3xl font-bold mb-6">Common Mistakes & Fixes</h2>
              <ul className="text-gray-700 leading-relaxed space-y-3 mb-8">
                <li><strong>Too many patterns:</strong> cap at three; repeat a color</li>
                <li><strong>All same size:</strong> mix 22, 20, and a lumbar</li>
                <li><strong>Ignoring undertones:</strong> match warm↔warm, cool↔cool</li>
                <li><strong>Harsh contrast on charcoal:</strong> soften with watercolor florals</li>
              </ul>
            </section>

            {/* Care & Maintenance */}
            <section id="care-maintenance" className="prose prose-lg max-w-none section-anchor">
              <h2 className="font-cormorant text-3xl font-bold mb-6">Care & Maintenance</h2>
              <ul className="text-gray-700 leading-relaxed space-y-3 mb-8">
                <li>Removable covers; wash cold, air dry</li>
                <li>Rotate inserts monthly; buy inserts 2" larger than covers</li>
                <li>Avoid prolonged direct sun to prevent fading</li>
                <li>Spot clean promptly; fabric-shave if pilling</li>
              </ul>
            </section>

           {/* FAQ */}
            <section id="faqs" className="prose prose-lg max-w-none section-anchor">
              <h2 className="font-cormorant text-3xl font-bold mb-6">FAQs</h2>
              
              <div className="space-y-4 mb-8">
                <details className="border border-gray-200 rounded-lg p-4 bg-gray-50">
                  <summary className="font-semibold text-gray-900 cursor-pointer hover:text-primary">What pillow colors are trending for gray sofas in 2025?</summary>
                  <div className="mt-3 text-gray-700 leading-relaxed">
                    Olive, rust, terracotta, and blush are trending, along with bold jewel tones like fuchsia, mustard, and teal. Vintage-inspired botanicals and watercolor florals are also popular choices. The key is matching the warmth of your gray's undertone.
                  </div>
                </details>

                <details className="border border-gray-200 rounded-lg p-4 bg-gray-50">
                  <summary className="font-semibold text-gray-900 cursor-pointer hover:text-primary">How many pillows should I put on a gray sectional?</summary>
                  <div className="mt-3 text-gray-700 leading-relaxed">
                    Start with 5-7 pillows using odd numbers for the best visual balance. For a standard sectional, use two 22×22 pillows on each corner section and one 12×20 lumbar in the center. Scale up to 7 for extra-wide sectionals by mirroring a 3–1–3 arrangement.
                  </div>
                </details>

                <details className="border border-gray-200 rounded-lg p-4 bg-gray-50">
                  <summary className="font-semibold text-gray-900 cursor-pointer hover:text-primary">Can I mix floral pillows with stripes or geometric patterns?</summary>
                  <div className="mt-3 text-gray-700 leading-relaxed">
                    Yes! Use one dominant floral print as your anchor, then support with a smaller-scale stripe or geometric that repeats 1–2 colors from the floral. Keep total patterns to three or fewer for a cohesive look.
                  </div>
                </details>

                <details className="border border-gray-200 rounded-lg p-4 bg-gray-50">
                  <summary className="font-semibold text-gray-900 cursor-pointer hover:text-primary">What size pillow inserts should I buy?</summary>
                  <div className="mt-3 text-gray-700 leading-relaxed">
                    Choose inserts that are 2″ larger than your pillow covers for a full, plump look. So for 20×20 covers, use 22×22 inserts. Down or quality down-alternative fills work best—avoid solid foam inserts.
                  </div>
                </details>

                <details className="border border-gray-200 rounded-lg p-4 bg-gray-50">
                  <summary className="font-semibold text-gray-900 cursor-pointer hover:text-primary">What's the smallest pillow size I should use on a sofa?</summary>
                  <div className="mt-3 text-gray-700 leading-relaxed">
                    For most sofas, don't go smaller than 20×20 inches for square pillows. Smaller pillows can look disproportionate and cheap. The exception is lumbar pillows, which typically measure 12×20 or 14×22 inches.
                  </div>
                </details>

                <details className="border border-gray-200 rounded-lg p-4 bg-gray-50">
                  <summary className="font-semibold text-gray-900 cursor-pointer hover:text-primary">Should I match my gray couch's undertone exactly?</summary>
                  <div className="mt-3 text-gray-700 leading-relaxed">
                    Not exactly, but stay within the same temperature family. If your gray has warm (brown/beige) undertones, choose warm pillow colors like terracotta or mustard. Cool grays (blue/green undertones) pair with navy, lavender, or sage.
                  </div>
                </details>

                <details className="border border-gray-200 rounded-lg p-4 bg-gray-50">
                  <summary className="font-semibold text-gray-900 cursor-pointer hover:text-primary">How do I arrange pillows on a large sectional without it looking cluttered?</summary>
                  <div className="mt-3 text-gray-700 leading-relaxed">
                    Place larger pillows (22″ or 24″) at the back as your foundation, then layer smaller ones in front. Distribute pillows evenly but not symmetrically—this creates visual interest while maintaining balance. Leave 3-4 inches between pillow edges.
                  </div>
                </details>

                <details className="border border-gray-200 rounded-lg p-4 bg-gray-50">
                  <summary className="font-semibold text-gray-900 cursor-pointer hover:text-primary">What colors should I avoid with a dark gray couch?</summary>
                  <div className="mt-3 text-gray-700 leading-relaxed">
                    Avoid very dark colors that will disappear against your sofa, and be cautious with stark white which can create harsh contrast. Instead, choose cream or ivory over bright white, and opt for colors with enough contrast to stand out without being jarring.
                  </div>
                </details>

                <details className="border border-gray-200 rounded-lg p-4 bg-gray-50">
                  <summary className="font-semibold text-gray-900 cursor-pointer hover:text-primary">Are white pillows a good choice for gray couches?</summary>
                  <div className="mt-3 text-gray-700 leading-relaxed">
                    White pillows work beautifully for clean, minimalist looks, especially in Scandinavian or modern interiors. However, choose cream or ivory over stark white to avoid harsh contrast, especially with darker gray sofas.
                  </div>
                </details>

                <details className="border border-gray-200 rounded-lg p-4 bg-gray-50">
                  <summary className="font-semibold text-gray-900 cursor-pointer hover:text-primary">How often should I change my pillow covers?</summary>
                  <div className="mt-3 text-gray-700 leading-relaxed">
                    Seasonally is ideal—swap to lighter colors and fabrics for spring/summer (blush, sage, linen) and richer tones for fall/winter (burgundy, velvet). This keeps your space feeling fresh and current with minimal investment.
                  </div>
                </details>

                <details className="border border-gray-200 rounded-lg p-4 bg-gray-50">
                  <summary className="font-semibold text-gray-900 cursor-pointer hover:text-primary">What's the best fabric for gray couch pillows if I have kids or pets?</summary>
                  <div className="mt-3 text-gray-700 leading-relaxed">
                    Performance fabrics, microfiber, and removable cotton covers are best for high-traffic homes. Look for machine-washable options and avoid delicate fabrics like silk. Consider zippered covers for easy removal and washing.
                  </div>
                </details>
              </div>
            </section>

            

            {/* Final CTA */}
            <section className="text-center py-10 mt-10 bg-gradient-to-br from-primary to-primary-dark rounded-2xl text-white">
              <h3 className="font-cormorant text-3xl font-bold mb-3">Ready to Style Your Gray Sofa?</h3>
              <p className="text-white/90 mb-6">Explore our full collection or find your match in minutes.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/shop" className="bg-white text-primary hover:bg-gray-100 font-medium py-3 px-8 rounded-lg transition-colors">
                  Shop All Pillows
                </Link>
                <Link href="/flower-throw-pillows" className="border border-white/30 text-white hover:bg-white/10 font-medium py-3 px-8 rounded-lg transition-colors">
                  Browse by Style
                </Link>
              </div>
            </section>
          </div>

          {/* Sticky TOC */}
          <aside className="lg:col-span-4">
            <div className="toc-sticky">
              <nav className="toc-card">
                <div className="text-sm font-medium text-gray-900 mb-3 flex items-center gap-2">
                  <span className="uppercase tracking-wide">What You'll Learn</span>
                </div>
                <ul className="m-0 p-0 list-none space-y-1">
                  {[
                    { href: "#quick-answers", label: "Quick Answers" },
                    { href: "#examples", label: "Real Examples" },
                    { href: "#color-coordination", label: "Color Coordination" },
                    { href: "#arrangement-techniques", label: "Arrangement Techniques" },
                    { href: "#pattern-mixing", label: "Pattern Mixing" },
                    { href: "#style-specific-tips", label: "Style-Specific Tips" },
                    { href: "#seasonal-updates", label: "Seasonal Updates" },
                    { href: "#common-mistakes", label: "Common Mistakes" },
                    { href: "#care-maintenance", label: "Care & Maintenance" },
                    { href: "#faqs", label: "FAQs" },
                    { href: "#newsletter", label: "Newsletter" },
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
              <p className="text-gray-600">More guides to help you style every sofa color and finish</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Link href="/blog/what-color-pillows-go-with-a-navy-blue-couch" className="group block bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100">
                <div className="relative h-40">
                  <Image src="/images/blog/navy-couch/navy-couch-pillow-ideas.webp" alt="Navy couch with floral pillows" fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
                </div>
                <div className="p-4">
                  <h3 className="font-medium group-hover:text-primary transition-colors">What Color Pillows Go With a Navy Blue Couch?</h3>
                  <p className="text-sm text-gray-600 mt-1">Contrast, complementary hues, and real-life examples</p>
                </div>
              </Link>
              <Link href="/blog/what-color-pillows-go-with-a-cream-sofa" className="group block bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100">
                <div className="relative h-40">
                  <Image src="/images/blog/cream-sofa/cream-sofa-pillow-ideas.webp" alt="Cream sofa with floral pillows" fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
                </div>
                <div className="p-4">
                  <h3 className="font-medium group-hover:text-primary transition-colors">What Color Pillows Go With a Cream Sofa?</h3>
                  <p className="text-sm text-gray-600 mt-1">Warm/cool balance and undertone-safe palettes</p>
                </div>
              </Link>
              <Link href="/blog/what-kind-of-pillows-go-with-leather-couch" className="group block bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100">
                <div className="relative h-40">
                  <Image src="/images/blog/leather-couch/leather-couch-pillow-ideas.webp" alt="Leather couch with pillows" fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
                </div>
                <div className="p-4">
                  <h3 className="font-medium group-hover:text-primary transition-colors">What Kind of Pillows Go With a Leather Couch?</h3>
                  <p className="text-sm text-gray-600 mt-1">Textures, temperatures, and durable fabrics</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

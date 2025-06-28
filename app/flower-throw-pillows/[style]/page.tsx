"use client"
import React, { use } from 'react'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { FiArrowRight, FiFilter, FiGrid, FiList } from 'react-icons/fi'
import ProductCard from '../../../components/ProductCard'
import SchemaMarkup from '../../../components/SchemaMarkup'
import Breadcrumbs from '../../../components/Breadcrumbs'
import { 
  getProductsByFilters, 
  type ProductStyle 
} from '../../../data/products'
import { generateCollectionPageSchema } from '../../../utils/schema'
import { generateStylePageMetadata } from '../../../utils/seo'

const validStyles: ProductStyle[] = ['watercolor', 'floral', 'solid-color', 'abstract', 'vintage', 'modern', 'boho', 'farmhouse']

const styleInfo: Record<ProductStyle, {
  title: string
  description: string
  longDescription: string
  characteristics: string[]
  gradient: string
  textColor: string
}> = {
  vintage: {
    title: 'Vintage Style Flower Throw Pillows',
    description: 'Timeless botanical designs with classic charm and elegant vintage aesthetics',
    longDescription: 'Our vintage style flower throw pillows capture the timeless beauty of botanical illustrations from bygone eras. These designs feature classic floral motifs with muted color palettes and intricate details that evoke a sense of nostalgia and elegance. Perfect for traditional, shabby chic, or eclectic home décor.',
    characteristics: ['Muted color palettes', 'Classic botanical motifs', 'Intricate vintage details', 'Timeless appeal'],
    gradient: 'from-amber-50 to-orange-50',
    textColor: 'text-amber-700'
  },
  modern: {
    title: 'Modern Style Flower Throw Pillows',
    description: 'Contemporary floral patterns perfect for today\'s minimalist and modern homes',
    longDescription: 'Our modern style flower throw pillows feature clean lines, bold graphics, and contemporary interpretations of botanical elements. These designs embrace simplicity and sophistication, making them ideal for minimalist, Scandinavian, or mid-century modern interiors.',
    characteristics: ['Clean, minimalist designs', 'Bold color contrasts', 'Geometric elements', 'Contemporary aesthetics'],
    gradient: 'from-blue-50 to-indigo-50',
    textColor: 'text-blue-700'
  },
  boho: {
    title: 'Boho Style Flower Throw Pillows',
    description: 'Free-spirited designs with artistic flair and bohemian elegance',
    longDescription: 'Our boho style flower throw pillows embrace the free-spirited nature of bohemian design with eclectic patterns, rich textures, and artistic interpretations of floral motifs. These pieces celebrate creativity and individuality, perfect for layered, eclectic spaces.',
    characteristics: ['Eclectic patterns', 'Rich, earthy colors', 'Artistic freedom', 'Textural variety'],
    gradient: 'from-purple-50 to-pink-50',
    textColor: 'text-purple-700'
  },
  farmhouse: {
    title: 'Farmhouse Style Flower Throw Pillows',
    description: 'Rustic charm meets floral beauty in cozy, country-inspired designs',
    longDescription: 'Our farmhouse style flower throw pillows combine rustic charm with delicate floral elements, creating the perfect balance of country comfort and botanical beauty. These designs feature warm, welcoming colors and patterns that embody the cozy farmhouse aesthetic.',
    characteristics: ['Rustic charm', 'Warm, welcoming colors', 'Country-inspired motifs', 'Cozy comfort'],
    gradient: 'from-green-50 to-emerald-50',
    textColor: 'text-green-700'
  },
  abstract: {
    title: 'Abstract Style Flower Throw Pillows',
    description: 'Artistic interpretations of botanical elements with creative modern flair',
    longDescription: 'Our abstract style flower throw pillows transform traditional floral motifs into contemporary art pieces. These designs feature bold colors, geometric interpretations, and creative compositions that make botanical elements feel fresh and modern.',
    characteristics: ['Bold artistic interpretations', 'Vibrant color schemes', 'Creative compositions', 'Contemporary art appeal'],
    gradient: 'from-rose-50 to-red-50',
    textColor: 'text-rose-700'
  },
  watercolor: {
    title: 'Watercolor Style Flower Throw Pillows',
    description: 'Soft, dreamy floral designs with gentle watercolor aesthetics',
    longDescription: 'Our watercolor style flower throw pillows capture the delicate beauty of watercolor paintings with soft, flowing designs and gentle color transitions. These pillows bring a serene, artistic quality to any space with their dreamy, painted aesthetic.',
    characteristics: ['Soft color transitions', 'Dreamy, painted quality', 'Gentle aesthetics', 'Serene beauty'],
    gradient: 'from-teal-50 to-cyan-50',
    textColor: 'text-teal-700'
  },
  floral: {
    title: 'Floral Style Flower Throw Pillows',
    description: 'Classic flower patterns in rich detail and vibrant colors',
    longDescription: 'Our floral style flower throw pillows celebrate the pure beauty of flowers with detailed, realistic patterns and vibrant colors. These designs showcase various flower types in their full glory, perfect for those who love traditional floral décor.',
    characteristics: ['Realistic floral details', 'Vibrant color palettes', 'Traditional appeal', 'Rich botanical accuracy'],
    gradient: 'from-pink-50 to-rose-50',
    textColor: 'text-pink-700'
  },
  'solid-color': {
    title: 'Solid Color Flower Throw Pillows',
    description: 'Minimalist floral designs with single-color sophistication',
    longDescription: 'Our solid color flower throw pillows offer elegant simplicity with botanical motifs rendered in single, sophisticated color schemes. These designs provide subtle floral beauty that complements any décor without overwhelming the space.',
    characteristics: ['Minimalist elegance', 'Single-color sophistication', 'Subtle botanical beauty', 'Versatile styling'],
    gradient: 'from-gray-50 to-slate-50',
    textColor: 'text-gray-700'
  }
}

// Define the params type
interface StylePageParams {
  style: string;
}

export default function StylePageComponent({ params }: { params: Promise<StylePageParams> }) {
  // Use React.use() to unwrap the Promise
  const resolvedParams = use(params);
  const style = resolvedParams.style as ProductStyle;
  
  // Validate style
  if (!validStyles.includes(style)) {
    notFound();
  }

  // Get products for this style
  const styleProducts = getProductsByFilters({ style })
  
  if (styleProducts.length === 0) {
    notFound();
  }

  const info = styleInfo[style];
  const metadata = generateStylePageMetadata(style, styleProducts.length);
  const styleSchema = generateCollectionPageSchema(styleProducts, style);

  const breadcrumbItems = [
    { name: 'Flower Throw Pillows', url: '/flower-throw-pillows' },
    { name: info.title, url: `/flower-throw-pillows/${style}` }
  ];

  return (
    <>
      <SchemaMarkup schema={styleSchema} />
      
      {/* Breadcrumbs */}
      <div className="container-custom">
        <Breadcrumbs items={breadcrumbItems} />
      </div>

      {/* Style Header */}
      <section className={`bg-gradient-to-br ${info.gradient} py-16 md:py-24 relative overflow-hidden`}>
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-96 h-96 -top-48 -right-48 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute w-64 h-64 bottom-0 left-1/4 bg-primary/5 rounded-full blur-2xl" />
          <div className="subtle-pattern absolute inset-0 opacity-30" />
        </div>

        <div className="container-custom relative">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="font-cormorant text-4xl md:text-6xl font-bold mb-6 text-gray-900">
                {info.title}
              </h1>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                {info.longDescription}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                <Link href="#products" className="btn-primary text-lg px-8 py-4">
                  Shop {styleProducts.length} Designs
                </Link>
                <Link href="/flower-throw-pillows" className="btn-outline text-lg px-8 py-4">
                  Browse Other Styles
                  <FiArrowRight className="ml-2" size={20} />
                </Link>
              </div>

              {/* Style Characteristics */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
                {info.characteristics.map((characteristic, index) => (
                  <div key={index} className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-sm border border-white/50">
                    <div className={`text-sm font-medium ${info.textColor}`}>
                      {characteristic}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-16 md:py-24">
        <div className="container-custom">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="font-cormorant text-3xl font-bold mb-2">
                {info.title}
              </h2>
              <p className="text-gray-600">
                {styleProducts.length} unique designs available
              </p>
            </div>
            
            <Link 
              href="/shop"
              className="hidden md:inline-flex items-center gap-2 text-primary hover:text-primary-dark font-medium"
            >
              View in Shop
              <FiArrowRight size={16} />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {styleProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <ProductCard
                  product={product}
                  showQuickView={true}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Style Guide Section */}
      <section className="py-16 md:py-24 bg-surface-muted">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-cormorant text-3xl md:text-4xl font-bold mb-4">
                Styling Your {style.charAt(0).toUpperCase() + style.slice(1)} Pillows
              </h2>
              <p className="text-gray-600">
                Get the most out of your {style} flower throw pillows with these expert styling tips
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl p-8 shadow-sm">
                <h3 className="font-cormorant text-xl font-bold mb-4">Perfect Pairings</h3>
                <div className="space-y-3">
                  {style === 'vintage' && (
                    <>
                      <p className="text-gray-600">• Pair with antique furniture and lace accents</p>
                      <p className="text-gray-600">• Combine with neutral linens and vintage brass</p>
                      <p className="text-gray-600">• Layer with textured throws in cream or sage</p>
                    </>
                  )}
                  {style === 'modern' && (
                    <>
                      <p className="text-gray-600">• Match with clean-lined furniture and minimal décor</p>
                      <p className="text-gray-600">• Pair with geometric patterns and bold colors</p>
                      <p className="text-gray-600">• Combine with sleek metal and glass accents</p>
                    </>
                  )}
                  {style === 'boho' && (
                    <>
                      <p className="text-gray-600">• Layer with mixed patterns and rich textures</p>
                      <p className="text-gray-600">• Combine with macramé and natural materials</p>
                      <p className="text-gray-600">• Pair with warm lighting and plants</p>
                    </>
                  )}
                  {style === 'farmhouse' && (
                    <>
                      <p className="text-gray-600">• Match with distressed wood and galvanized metal</p>
                      <p className="text-gray-600">• Pair with gingham and buffalo check patterns</p>
                      <p className="text-gray-600">• Combine with mason jars and vintage signs</p>
                    </>
                  )}
                  {(style === 'abstract' || style === 'watercolor' || style === 'floral' || style === 'solid-color') && (
                    <>
                      <p className="text-gray-600">• Mix with complementary colors and textures</p>
                      <p className="text-gray-600">• Layer with solid-colored throws and blankets</p>
                      <p className="text-gray-600">• Pair with natural materials like wood and rattan</p>
                    </>
                  )}
                </div>
              </div>
              
              <div className="bg-white rounded-xl p-8 shadow-sm">
                <h3 className="font-cormorant text-xl font-bold mb-4">Color Coordination</h3>
                <div className="space-y-3">
                  <p className="text-gray-600">• Choose 2-3 main colors from the pillow design</p>
                  <p className="text-gray-600">• Use the 60-30-10 rule for color distribution</p>
                  <p className="text-gray-600">• Add metallic accents for extra sophistication</p>
                  <p className="text-gray-600">• Consider seasonal color swaps for variety</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Styles Section */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="font-cormorant text-3xl font-bold mb-4">Explore Other Styles</h2>
            <p className="text-gray-600">
              Discover more flower throw pillow styles to complete your home décor
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {validStyles
              .filter(s => s !== style)
              .slice(0, 3)
              .map((otherStyle) => {
                const otherProducts = getProductsByFilters({ style: otherStyle })
                const otherInfo = styleInfo[otherStyle]
                
                return (
                  <Link 
                    key={otherStyle}
                    href={`/flower-throw-pillows/${otherStyle}`}
                    className="group"
                  >
                    <div className={`bg-gradient-to-br ${otherInfo.gradient} rounded-xl p-6 shadow-sm hover:shadow-md transition-all group-hover:scale-105`}>
                      <h3 className={`font-cormorant text-xl font-bold mb-2 ${otherInfo.textColor}`}>
                        {otherInfo.title.split(' ')[0]} Style
                      </h3>
                      <p className="text-gray-700 text-sm mb-4">
                        {otherInfo.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-gray-600">
                          {otherProducts.length} designs
                        </span>
                        <FiArrowRight className="text-gray-600 group-hover:translate-x-1 transition-transform" size={16} />
                      </div>
                    </div>
                  </Link>
                )
              })}
          </div>
          
          <div className="text-center mt-8">
            <Link href="/flower-throw-pillows" className="btn-secondary inline-flex items-center gap-2">
              <span>View All Styles</span>
              <FiArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
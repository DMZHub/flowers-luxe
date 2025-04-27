// app/custom/[slug]/page.tsx
"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Head from 'next/head'     
import { motion } from 'framer-motion'
import { ArrowLeft, CheckCircle, AlertCircle, Shield, ChevronRight } from 'lucide-react'
import { useParams } from 'next/navigation'
import emailjs from '@emailjs/browser'
import ProductCard from '@/components/ProductCard'

// Product data
const customProducts = {
  'custom-flower-mug-best-gift-for-new-moms': {
    id: 2,
    slug: 'custom-flower-mug-best-gift-for-new-moms',
    title: 'Custom Flower Mug for Mom| Best Gift for New Moms',
    category: 'Mug',
    price: 29.99,
    imageSrc: '/images/products/mugs/Custom-Flower-Mug-Best-Gift-for-New-Moms.webp',
    description: `Celebrate motherhood with the Mom Mug, the perfect gift idea for new mothers. This elegant ceramic mug features delicate floral designs and a space for your mom's name or a special message. Perfect for Mother's Day, baby showers, or as a special gift for new mothers, it's both practical and sentimental. Handmade and custom-printed, this mug makes a high-quality keepsake for birthdays, anniversaries, and special celebrations.`,
    features: [
      'High-Quality Premium Ceramic: Crafted from durable, premium ceramic for a luxurious feel and long-lasting use.',
      '11oz Capacity: Perfectly sized (3.75" tall x 3.25" diameter) to hold your favorite hot or cold beverages.',
      'Microwave & Dishwasher Safe: No need to worry about melting, bubbling, or cracking—this mug is top-shelf dishwasher safe and heats evenly in the microwave.',
      'Embedded Image with Gloss Finish: The design is embedded into the mug with a glossy protective layer, ensuring it won’t fade, scratch, or peel over time. ',
      'Vacuum-Form Printed for a Complete Wrap: Enjoy a seamless, Proudly made in the USA using advanced printing technology for superior quality. ',
    ],
    returnPolicy: `Our custom products are made especially for you. If there are any defects or quality issues, we'll gladly replace your order. However, due to the personalized nature of custom items, we cannot accept returns for customization errors if the text matches what you submitted. Please double-check your personalization text before submitting.`,
  },
  
 
}

export default function CustomProductPage() {
  const { slug } = useParams()
  const [customizationText, setCustomizationText] = useState('')
  const [email, setEmail] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{
    success?: boolean
    message?: string
  }>({})

  // EmailJS credentials
  const serviceID = "service_pg53bjv"
  const templateID = "template_ax0l7yp"
  const publicKey = "yvJpeo6ujp2VaM2rX"

  // Get product data
  const customProduct = customProducts[slug  as keyof typeof customProducts]

  // Handle case where product is not found
  if (!customProduct) {
    return (
      <div className="py-16 text-center">
        <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
        <p className="text-gray-600 mb-8">The custom product you're looking for doesn't exist.</p>
        <Link href="/shop" className="btn-primary">
          Back to Shop
        </Link>
      </div>
    )
  }

  // Similar custom products
  const similarProducts = [
    {
      id: 8,
      slug: 'personalized-name-floral-mug',
      title: 'Personalized Name Floral Mug',
      category: 'Mug',
      price: 24.99,
      imageSrc: '/images/products/mugs/personalized-name-floral-mug.jpg',
      customUrl: '/custom/personalized-name-floral-mug',
      isNew: true,
      isCustom: true
    },
  
   
  ].filter(product => product.id !== customProduct.id)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!customizationText.trim()) {
      setSubmitStatus({
        success: false,
        message: 'Please enter the customization text.'
      })
      return
    }

    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      setSubmitStatus({
        success: false,
        message: 'Please enter a valid email address.'
      })
      return
    }
    
    setSubmitting(true)
    try {
      const templateParams = {
        email: email,
        product_name: customProduct.title,
        customization_text: customizationText,
        message: `Custom product request for ${customProduct.title}. Customization: ${customizationText}. From: ${email}`
      }
      
      await emailjs.send(serviceID, templateID, templateParams, publicKey)
      
      setSubmitStatus({
        success: true,
        message: 'Custom order submitted successfully!'
      })
      setEmail('')
      setCustomizationText('')
    } catch (error) {
      console.error('Failed to send custom order:', error)
      setSubmitStatus({
        success: false,
        message: 'Failed to submit order. Please try again later.'
      })
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{
  __html: JSON.stringify({
    "@context": "https://schema.org/",
    "@type": "Product",
    "name": customProduct.title,
    "image": `https://flowersluxe.com${customProduct.imageSrc}`,
    "description": customProduct.description,
    "brand": {
      "@type": "Brand",
      "name": "FlowersLuxe"
    },
    "offers": {
      "@type": "Offer",
      "priceCurrency": "USD",
      "price": customProduct.price,
      "availability": "https://schema.org/InStock",
      "url": `https://flowersluxe.com/custom/${customProduct.slug}`
    }
  })
}} />

  <Head>
  <title>{customProduct.title} | FlowersLuxe Custom Print</title>
  <meta name="description" content={`Buy a personalized ${customProduct.category.toLowerCase()} - ${customProduct.title}. ${customProduct.description.slice(0, 150)}...`} />
  <meta name="robots" content="index, follow" />
  <link rel="canonical" href={`https://flowersluxe.com/custom/${customProduct.slug}`} />
  </Head>

      {/* Breadcrumb */}
      <section className="bg-surface-muted py-4">
        <div className="container-custom">
          <nav className="flex" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-2">
              <li>
                <Link href="/" className="text-gray-500 hover:text-primary">Home</Link>
              </li>
              <ChevronRight size={16} className="text-gray-400" />
              <li>
                <Link href="/shop" className="text-gray-500 hover:text-primary">Shop</Link>
              </li>
              <ChevronRight size={16} className="text-gray-400" />
              <li>
                <Link href="/shop?category=Custom Items" className="text-gray-500 hover:text-primary">Custom Items</Link>
              </li>
              <ChevronRight size={16} className="text-gray-400" />
              <li>
                <span className="text-gray-900">{customProduct.title}</span>
              </li>
            </ol>
          </nav>
        </div>
      </section>

      {/* Product Details */}
      <section className="py-12" aria-labelledby="product-heading">
  <div className="container-custom">
    <h2 id="product-heading" className="sr-only">Product Details for {customProduct.title}</h2>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Image */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="relative aspect-square rounded-2xl overflow-hidden shadow-elevated"
            >
<Image
  src={customProduct.imageSrc}
  alt={customProduct.title}
  fill
  className="object-cover"
  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 40vw"
  priority
  loading="eager"
/>
              <div className="absolute top-4 left-4 bg-primary text-white text-sm font-medium px-3 py-1 rounded-full">
                Customizable
              </div>
            </motion.div>

            {/* Product Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="mb-4">
                <span className="bg-primary/10 text-primary text-sm font-medium px-3 py-1 rounded-full">
                  {customProduct.category}
                </span>
              </div>
              
              <h1 className="font-cormorant text-3xl md:text-4xl font-bold mb-4">
                {customProduct.title}
              </h1>
              
              <p className="text-2xl font-medium text-gray-900 mb-6">
                ${customProduct.price.toFixed(2)}
              </p>
              
              <p className="text-gray-600 mb-8">
  {customProduct.description} This handcrafted {customProduct.category.toLowerCase()} is a perfect custom printed gift idea for birthdays, anniversaries, weddings, and special occasions. Our personalized {customProduct.category.toLowerCase()} collection offers high-quality custom print products with beautiful floral designs that make memorable keepsakes for every celebration.
</p>

              
              <div className="mb-8">
                <h3 className="font-cormorant text-xl font-semibold mb-4">Features:</h3>
                <ul className="space-y-2" itemProp="additionalProperty" itemScope itemType="https://schema.org/PropertyValue">
               {customProduct.features.map((feature, index) => (
               <li key={index} className="flex items-center gap-2" itemProp="value">
               <CheckCircle size={16} className="text-primary flex-shrink-0" />
               <span className="text-gray-700">{feature}</span>
             </li>
             ))}
        </ul>
    </div>

              {/* Customization Form */}
              <div className="bg-surface-muted rounded-xl p-6 mb-8">
                <h3 className="font-cormorant text-xl font-semibold mb-4">Customize Your Product</h3>
                
                {submitStatus.success ? (
                  <div className="bg-green-50 border border-green-100 rounded-lg p-6 text-center">
                    <CheckCircle size={48} className="text-green-500 mx-auto mb-4" />
                    <h4 className="text-xl font-medium text-gray-900 mb-2">Thank You!</h4>
                    <p className="text-gray-600 mb-6">
                      Your custom order has been submitted. Please check your email for further instructions. We'll send you a link to your custom product on TeePublic as soon as it's ready.
                    </p>
                    <button
                      onClick={() => setSubmitStatus({})}
                      className="btn-secondary"
                    >
                      Create Another Custom Item
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                      <label htmlFor="customization" className="block text-sm font-medium text-gray-700 mb-1">
                        Enter text to print on product*
                      </label>
                      <input
                        type="text"
                        id="customization"
                        value={customizationText}
                        onChange={(e) => setCustomizationText(e.target.value)}
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                        placeholder="e.g., Sarah, Mom, or a special message"
                        required
                      />
                    </div>
                    
                    <div className="mb-6">
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Your email address*
                      </label>
                      <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                        placeholder="your@email.com"
                        required
                      />
                      <p className="text-sm text-gray-500 mt-1">
                        We'll send you the link to purchase your custom product.
                      </p>
                    </div>
                    
                    {submitStatus.message && !submitStatus.success && (
                      <div className="mb-4 p-3 bg-red-50 border border-red-100 rounded-lg flex items-center gap-2 text-red-700">
                        <AlertCircle size={16} />
                        <span>{submitStatus.message}</span>
                      </div>
                    )}
                    
                    <button
                      type="submit"
                      disabled={submitting}
                      className={`w-full btn-primary ${submitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                    >
                      {submitting ? 'Submitting...' : 'Submit Custom Order'}
                    </button>
                  </form>
                )}
              </div>

              {/* Return Policy */}
              <div className="bg-surface-muted rounded-xl p-6">
                <h3 className="font-cormorant text-xl font-semibold mb-4 flex items-center gap-2">
                  <Shield size={20} className="text-primary" />
                  Return Policy for Custom Items
                </h3>
                <p className="text-gray-600">
                  {customProduct.returnPolicy}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Similar Products */}
      <section className="py-16 bg-surface-muted">
        <div className="container-custom">
          <h2 className="font-cormorant text-2xl md:text-3xl font-bold mb-8">Similar Custom Products</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {similarProducts.map((product) => (
              <ProductCard
                key={product.id}
                title={product.title}
                category={product.category}
                price={`$${product.price.toFixed(2)}`}
                imageSrc={product.imageSrc}
                externalUrl={product.customUrl}
                isNew={product.isNew}
                isCustom={true}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

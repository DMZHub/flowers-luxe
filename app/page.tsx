"use client"
import { useState } from 'react'
import Link from 'next/link'
import { FiChevronRight, FiArrowRight, FiShoppingBag, FiHeart, FiTruck } from 'react-icons/fi'
import ProductCard from '../components/ProductCard'
import { products, getFeaturedProducts } from '../data/products'
import emailjs from '@emailjs/browser'

export default function Home() {
  const [email, setEmail] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const [subscribeStatus, setSubscribeStatus] = useState<{
    success?: boolean
    message?: string
  }>({})

  const featured = getFeaturedProducts(8)

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    try {
      setSubmitting(true)
      setSubscribeStatus({})
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string,
        { user_email: email },
        { publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string }
      )
      setSubscribeStatus({ success: true, message: 'Thanks! Check your inbox for a welcome email.' })
      setEmail('')
    } catch (err) {
      setSubscribeStatus({ success: false, message: 'Something went wrong. Please try again.' })
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <>
      {/* Hero */}
      <section className="bg-white">
        <div className="container-custom grid grid-cols-1 md:grid-cols-2 gap-10 items-center py-12 md:py-20">
          <div>
            <h1 className="text-3xl md:text-5xl font-semibold tracking-tight">
              Premium Flower Throw Pillows & Floral Home Decor
            </h1>
            <p className="mt-4 text-gray-600 md:text-lg">
              Beautiful, botanically inspired pillows crafted with premium fabrics. Style your sofa, bed, or reading nook with seasonal florals and timeless neutrals.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-4">
              <Link
                href="/flower-throw-pillows"
                className="btn btn-primary inline-flex items-center gap-2"
              >
                Shop Pillows <FiShoppingBag className="inline-block" />
              </Link>
              <Link
                href="/blog"
                className="btn btn-secondary inline-flex items-center gap-2"
              >
                Read the Blog <FiArrowRight className="inline-block" />
              </Link>
            </div>

            <ul className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm text-gray-600">
              <li className="flex items-center gap-2"><FiTruck /> Fast US Shipping</li>
              <li className="flex items-center gap-2"><FiHeart /> Handcrafted Quality</li>
              <li className="flex items-center gap-2"><FiChevronRight /> Easy Returns</li>
            </ul>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img
              src="/images/hero/flowersluxe-hero.webp"
              alt="Assorted floral throw pillows styled on a modern sofa"
              width={1200}
              height={800}
              className="w-full h-auto"
              loading="eager"
            />
          </div>
        </div>
      </section>

      {/* Featured */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container-custom">
          <div className="flex items-end justify-between mb-6 md:mb-8">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Featured Pillows</h2>
            <Link href="/flower-throw-pillows" className="text-primary inline-flex items-center gap-2">
              View all <FiChevronRight />
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {featured.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-12 md:py-16">
        <div className="container-custom">
          <div className="rounded-2xl border bg-white p-6 md:p-10">
            <div className="max-w-2xl">
              <h3 className="text-xl md:text-2xl font-semibold tracking-tight">Get styling ideas in your inbox</h3>
              <p className="mt-2 text-gray-600">
                Weekly tips on matching floral pillows with your sofa color, plus seasonal lookbooks.
              </p>

              <form onSubmit={handleSubscribe} className="mt-6 flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="input input-bordered w-full sm:max-w-md"
                  aria-label="Email address"
                />
                <button
                  type="submit"
                  className="btn btn-primary inline-flex items-center gap-2"
                  disabled={submitting}
                >
                  {submitting ? 'Subscribing...' : 'Subscribe'}
                </button>
              </form>

              {subscribeStatus.message && (
                <div
                  className={`mt-3 text-sm ${subscribeStatus.success ? 'text-green-600' : 'text-red-600'}`}
                  role="status"
                  aria-live="polite"
                >
                  {subscribeStatus.message}
                </div>
              )}
              
              <p className="text-sm text-gray-500 mt-4">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

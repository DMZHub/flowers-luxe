"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import { Instagram, Twitter, Facebook, Leaf, Mail, MapPin, Phone } from 'lucide-react'
import emailjs from '@emailjs/browser'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  const [email, setEmail] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const [subscribeStatus, setSubscribeStatus] = useState<{
    success?: boolean
    message?: string
  }>({})
  
  // EmailJS credentials
  const serviceID = "service_yjfk3dq"
  const templateID = "template_jkea55x"
  const publicKey = "p_xEzMpgucBUYxDyC"
  
  const categories = [
    { name: 'Flower Throw Pillows', slug: 'throw-pillows' },
    { name: 'Flower Stickers', slug: 'stickers' },
    { name: 'Flower Mugs', slug: 'mugs' },
    { name: 'Flower Art', slug: 'art' },
    { name: 'Flower Tote Bags', slug: 'tote-bags' },
    { name: 'Flower Tapestries', slug: 'tapestries' },
    { name: 'Flower Pins', slug: 'pins' },
  ]
  
  const legalLinks = [
    { name: 'Contact Us', url: '/contact' },
    { name: 'Privacy Policy', url: '/privacy-policy' },
    { name: 'Terms & Conditions', url: '/terms-conditions' },
  ]

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      setSubscribeStatus({
        success: false,
        message: 'Please enter a valid email address.'
      })
      return
    }
    
    setSubmitting(true)
    try {
      const templateParams = {
        email: email,
        to_name: email.split('@')[0], // Use part before @ as name
        message: 'Newsletter subscription request'
      }
      
      await emailjs.send(serviceID, templateID, templateParams, publicKey)
      
      setSubscribeStatus({
        success: true,
        message: 'Thank you for subscribing!'
      })
      setEmail('')
    } catch (error) {
      console.error('Failed to subscribe:', error)
      setSubscribeStatus({
        success: false,
        message: 'Subscription failed. Please try again later.'
      })
    } finally {
      setSubmitting(false)
      
      // Clear status message after 5 seconds
      setTimeout(() => {
        setSubscribeStatus({})
      }, 5000)
    }
  }

  return (
    <footer className="bg-surface-muted border-t border-border mt-16">
      <div className="container-custom pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
          {/* Brand Column */}
          <div className="md:col-span-4">
            <Link href="/" className="inline-flex items-center gap-2 mb-5">
              <div className="w-8 h-8 relative">
                <div className="absolute inset-0 bg-primary rounded-full opacity-20"></div>
                <div className="absolute inset-1 bg-primary rounded-full opacity-40"></div>
                <div className="absolute inset-2 bg-primary rounded-full opacity-90"></div>
              </div>
              <span className="text-2xl font-cormorant font-bold tracking-tight text-gray-900">
                FlowersLuxe
              </span>
            </Link>
            <p className="text-gray-600 mb-6 leading-relaxed">
            Beautiful floral designs on premium products. Express your love for nature through our unique, floral collections.
            </p>
            
            <div className="flex items-center gap-3 mb-6">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-primary transition-colors p-2 bg-white rounded-full shadow-sm"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-primary transition-colors p-2 bg-white rounded-full shadow-sm"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-primary transition-colors p-2 bg-white rounded-full shadow-sm"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-primary flex-shrink-0" />
                <span className="text-gray-600 text-sm">hello@flowersluxe.com</span>
              </div>
            </div>
          </div>

          {/* Product Categories Column */}
          <div className="md:col-span-3 md:ml-auto">
            <h3 className="font-cormorant text-lg font-semibold mb-5 text-gray-900">Explore Our Products</h3>
            <ul className="space-y-3">
              {categories.map((category) => (
                <li key={category.slug}>
                  <Link 
                    href={`/shop/category/${category.slug}`}
                    className="text-gray-600 hover:text-primary transition-colors hover:underline text-sm flex items-center"
                  >
                    <Leaf size={14} className="mr-2 text-primary/60" />
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links Column */}
          <div className="md:col-span-2">
            <h3 className="font-cormorant text-lg font-semibold mb-5 text-gray-900">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link 
                  href="/"
                  className="text-gray-600 hover:text-primary transition-colors hover:underline text-sm"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  href="/shop"
                  className="text-gray-600 hover:text-primary transition-colors hover:underline text-sm"
                >
                  Shop
                </Link>
              </li>
              <li>
                <Link 
                  href="/blog"
                  className="text-gray-600 hover:text-primary transition-colors hover:underline text-sm"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link 
                  href="/about"
                  className="text-gray-600 hover:text-primary transition-colors hover:underline text-sm"
                >
                  About
                </Link>
              </li>
              <li>
                <a 
                  href="https://www.teepublic.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-primary transition-colors hover:underline text-sm"
                >
                  TeePublic Store
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter & Legal Column */}
          <div className="md:col-span-3">
            <h3 className="font-cormorant text-lg font-semibold mb-5 text-gray-900">Newsletter</h3>
            <p className="text-gray-600 text-sm mb-4">Subscribe to our newsletter to receive updates and special offers.</p>
            
            <form className="mb-5" onSubmit={handleSubscribe}>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-grow px-4 py-2 text-sm border border-border rounded-l-md focus:outline-none focus:ring-1 focus:ring-primary/20 focus:border-primary"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={submitting}
                />
                <button
                  type="submit"
                  className={`bg-primary hover:bg-primary-dark text-white font-medium px-4 py-2 rounded-r-md text-sm transition-all ${
                    submitting ? 'opacity-70 cursor-not-allowed' : ''
                  }`}
                  disabled={submitting}
                >
                  {submitting ? 'Sending...' : 'Subscribe'}
                </button>
              </div>
              
              {/* Status messages */}
              {subscribeStatus.message && (
                <div 
                  className={`mt-2 text-sm ${
                    subscribeStatus.success ? 'text-green-600' : 'text-red-600'
                  }`}
                >
                  {subscribeStatus.message}
                </div>
              )}
            </form>
            
            <h3 className="font-cormorant text-lg font-semibold mb-3 text-gray-900">Legal</h3>
            <ul className="space-y-2">
              {legalLinks.map((link) => (
                <li key={link.url}>
                  <Link 
                    href={link.url}
                    className="text-gray-600 hover:text-primary transition-colors hover:underline text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {currentYear} FlowersLuxe.com All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a 
              href="https://www.teepublic.com"
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-primary transition-colors text-xs"
            >
              Shop on TeePublic
            </a>
            <span className="h-3 w-px bg-gray-300"></span>
            <Link 
              href="/sitemap"
              className="text-gray-500 hover:text-primary transition-colors text-xs"
            >
              Sitemap
            </Link>
            <span className="h-3 w-px bg-gray-300"></span>
            <Link 
              href="/contact"
              className="text-gray-500 hover:text-primary transition-colors text-xs"
            >
              FAQ
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
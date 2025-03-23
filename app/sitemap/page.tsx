"use client"

import React from 'react'
import Link from 'next/link'
import { ArrowRight, Home, ShoppingBag, FileText, Info, Mail, Tag, BookOpen, Heart, Shield, AlertCircle, Map } from 'lucide-react'

export default function SitemapPage() {
  // Site structure data
  const siteStructure = [
    {
      title: 'Main Pages',
      icon: Home,
      links: [
        { name: 'Home', path: '/' },
        { name: 'Shop', path: '/shop' },
        { name: 'Blog', path: '/blog' },
        { name: 'About', path: '/about' },
        { name: 'Contact', path: '/contact' },
      ]
    },
    {
      title: 'Shop Categories',
      icon: Tag,
      links: [
        { name: 'Throw Pillows', path: '/shop/category/throw-pillows' },
        { name: 'Stickers', path: '/shop/category/stickers' },
        { name: 'Mugs', path: '/shop/category/mugs' },
        { name: 'Art Prints', path: '/shop/category/art' },
        { name: 'Tote Bags', path: '/shop/category/tote-bags' },
        { name: 'Tapestries', path: '/shop/category/tapestries' },
        { name: 'Pins', path: '/shop/category/pins' },
      ]
    },
    {
      title: 'Blog Categories',
      icon: BookOpen,
      links: [
        { name: 'Decor Tips', path: '/blog?category=Decor%20Tips' },
        { name: 'DIY Projects', path: '/blog?category=DIY%20Projects' },
        { name: 'Flower Symbolism', path: '/blog?category=Flower%20Symbolism' },
        { name: 'Trends', path: '/blog?category=Trends' },
        { name: 'Product Care', path: '/blog?category=Product%20Care' },
      ]
    },
    {
      title: 'Legal & Info',
      icon: Shield,
      links: [
        { name: 'Terms & Conditions', path: '/terms-conditions' },
        { name: 'Privacy Policy', path: '/privacy-policy' },
        { name: 'FAQ', path: '/faq' }
      ]
    }
  ]

  return (
    <>
      {/* Sitemap Header */}
      <section className="bg-surface-muted py-16 md:py-24 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-96 h-96 -top-48 -right-48 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute w-64 h-64 bottom-0 left-1/4 bg-primary/5 rounded-full blur-2xl" />
          <div className="subtle-pattern absolute inset-0 opacity-30" />
        </div>

        <div className="container-custom relative">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-cormorant text-4xl md:text-5xl font-bold mb-4">
              Sitemap
            </h1>
            <p className="text-gray-600 text-lg mb-8">
              A complete overview of all pages available on the FlowersLuxe website.
            </p>
          </div>
        </div>
      </section>

      {/* Sitemap Content */}
      <section className="py-12 md:py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {siteStructure.map((section, idx) => (
              <div 
                key={section.title}
                className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 md:p-8"
              >
                <div className="flex items-center mb-6">
                  <div className="bg-primary/10 p-3 rounded-lg mr-4">
                    <section.icon size={24} className="text-primary" />
                  </div>
                  <h2 className="font-cormorant text-2xl font-bold">{section.title}</h2>
                </div>
                
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <Link 
                        href={link.path}
                        className="flex items-center py-2 px-4 rounded-lg hover:bg-gray-50 transition-colors group"
                      >
                        <ArrowRight 
                          size={16} 
                          className="text-primary mr-3 opacity-0 group-hover:opacity-100 transition-opacity" 
                        />
                        <span className="text-gray-700 group-hover:text-primary transition-colors">
                          {link.name}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          {/* Sitemap Visualization */}
          <div className="mt-16 bg-white rounded-xl shadow-sm border border-gray-100 p-6 md:p-8">
            <div className="flex items-center mb-6">
              <div className="bg-primary/10 p-3 rounded-lg mr-4">
                <Map size={24} className="text-primary" />
              </div>
              <h2 className="font-cormorant text-2xl font-bold">Visual Sitemap</h2>
            </div>
            
            <div className="overflow-auto">
              <div className="min-w-[700px]">
                <div className="flex flex-col items-center">
                  {/* Home Node */}
                  <div className="bg-primary text-white px-6 py-2 rounded-lg font-medium">
                    Home
                  </div>
                  
                  {/* Connection Line */}
                  <div className="w-px h-6 bg-gray-300"></div>
                  
                  {/* Main Level */}
                  <div className="flex justify-center items-center gap-3 mb-6">
                    <div className="flex flex-col items-center">
                      <div className="bg-primary/80 text-white px-4 py-2 rounded-lg font-medium">
                        Shop
                      </div>
                      <div className="w-px h-6 bg-gray-300"></div>
                      <div className="flex gap-2">
                        <div className="bg-gray-100 px-3 py-1 rounded text-sm">Throw Pillows</div>
                        <div className="bg-gray-100 px-3 py-1 rounded text-sm">Stickers</div>
                        <div className="bg-gray-100 px-3 py-1 rounded text-sm">Mugs</div>
                      </div>
                    </div>
                    
                    <div className="flex flex-col items-center mx-2">
                      <div className="bg-primary/80 text-white px-4 py-2 rounded-lg font-medium">
                        Blog
                      </div>
                      <div className="w-px h-6 bg-gray-300"></div>
                      <div className="flex gap-2">
                        <div className="bg-gray-100 px-3 py-1 rounded text-sm">Decor Tips</div>
                        <div className="bg-gray-100 px-3 py-1 rounded text-sm">Trends</div>
                      </div>
                    </div>
                    
                    <div className="bg-primary/80 text-white px-4 py-2 rounded-lg font-medium">
                      About
                    </div>
                    
                    <div className="bg-primary/80 text-white px-4 py-2 rounded-lg font-medium">
                      Contact
                    </div>
                  </div>
                  
                  {/* Footer Level */}
                  <div className="w-1/2 h-px bg-gray-300 mb-6"></div>
                  <div className="flex justify-center gap-3">
                    <div className="bg-gray-200 px-3 py-1 rounded text-sm">Terms</div>
                    <div className="bg-gray-200 px-3 py-1 rounded text-sm">Privacy</div>
                    <div className="bg-gray-200 px-3 py-1 rounded text-sm">FAQ</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* External Resources Link */}
      <section className="py-12">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto bg-surface-muted rounded-xl p-6 border border-gray-100">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="font-cormorant text-xl font-bold mb-2">Looking for TeePublic Store?</h3>
                <p className="text-gray-600">
                  You can find all our products available for purchase on our TeePublic store.
                </p>
              </div>
              <a 
                href="https://www.teepublic.com/user/flowersluxe" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-primary whitespace-nowrap flex items-center gap-2"
              >
                <span>Visit TeePublic Store</span>
                <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
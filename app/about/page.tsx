"use client"

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Mail, Instagram, Twitter, Facebook } from 'lucide-react'

export default function AboutPage() {
  return (
    <>
      {/* About Header */}
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
              About FlowersLuxe
            </h1>
            <p className="text-gray-600 text-lg mb-8">
              Bringing the beauty of nature into your everyday life through thoughtfully designed floral products.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="bg-primary/10 text-primary text-sm font-medium px-4 py-1.5 rounded-full inline-block mb-4">Our Story</span>
              <h2 className="font-cormorant text-3xl md:text-4xl font-bold mb-6">
                Passion for Floral Design
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                FlowersLuxe was founded on a deep appreciation for the beauty of flowers and their ability to transform spaces and uplift moods. What began as a creative exploration in botanical illustration evolved into a curated collection of unique floral designs, seamlessly blending artistry with functionality.
                </p>
                <p>
                Since its humble beginnings in 2018, FlowersLuxe has grown into a brand devoted to bringing timeless elegance through floral patterns in everyday life. Each design is thoughtfully crafted to celebrate nature’s artistry, ensuring beauty remains visually captivating while adding meaning to daily experiences.
                </p>
                <p>
                At FlowersLuxe, design is more than aesthetics—it is a balance of style and purpose. Every product is carefully selected to offer both exquisite appeal and practical use, making floral-inspired living effortlessly accessible.
                </p>
              </div>
            </motion.div>
            
            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative h-96 rounded-2xl overflow-hidden shadow-elevated">
                <Image
                  src="/images/flowers-luxe-hero-image.webp"
                  alt="Floral Products"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-surface-muted rounded-2xl -z-10"></div>
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary/10 rounded-2xl -z-10"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 md:py-24 bg-surface-muted">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="bg-primary/10 text-primary text-sm font-medium px-4 py-1.5 rounded-full inline-block mb-4">Our Values</span>
            <h2 className="font-cormorant text-3xl md:text-4xl font-bold mb-6">
              What We Stand For
            </h2>
            <p className="text-gray-600">
              At FlowersLuxe, we're guided by a few core principles that shape everything we do.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              className="bg-white p-8 rounded-xl shadow-sm border border-gray-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="bg-primary/10 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                  <path d="M12 2a3 3 0 0 0-3 3c0 1.6.8 3 2 4l-2 1l4 4l4-4l-2-1c1.2-1 2-2.4 2-4a3 3 0 0 0-3-3h-2z"></path>
                  <path d="M14 15c2.7-.4 4-1.7 4-5c-1.4 1.3-3 2-5 2"></path>
                  <path d="M10 15c-2.7-.4-4-1.7-4-5c1.4 1.3 3 2 5 2"></path>
                  <path d="M10 20a1 1 0 1 0 2 0v-5h2v5a1 1 0 1 0 2 0v-5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v5a1 1 0 1 0 2 0v-5h0Z"></path>
                </svg>
              </div>
              <h3 className="font-cormorant text-xl font-bold mb-3">Quality Craftsmanship</h3>
              <p className="text-gray-600">
                We partner with ethical manufacturers who share our commitment to quality, attention to detail, and sustainable production methods.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-white p-8 rounded-xl shadow-sm border border-gray-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="bg-primary/10 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <h3 className="font-cormorant text-xl font-bold mb-3">Customer Focus</h3>
              <p className="text-gray-600">
                Your satisfaction is our priority. We're dedicated to providing exceptional customer service and creating products that bring joy to your daily life.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-white p-8 rounded-xl shadow-sm border border-gray-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="bg-primary/10 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                  <path d="M18 15h-6v6h6z"></path>
                  <rect x="2" y="3" width="6" height="6"></rect>
                  <rect x="14" y="3" width="8" height="6"></rect>
                  <rect x="2" y="15" width="6" height="6"></rect>
                </svg>
              </div>
              <h3 className="font-cormorant text-xl font-bold mb-3">Artistic Integrity</h3>
              <p className="text-gray-600">
                Each design is created with care and passion, drawing inspiration from botanical forms and natural elements to create timeless patterns.
              </p>
            </motion.div>
          </div>
        </div>
      </section>



      {/* Connect With Us */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <span className="bg-primary/10 text-primary text-sm font-medium px-4 py-1.5 rounded-full inline-block mb-4">Connect With Us</span>
            <h2 className="font-cormorant text-3xl md:text-4xl font-bold mb-6">
              Join Our Floral Community
            </h2>
            <p className="text-gray-600 mb-10 max-w-2xl mx-auto">
              Stay connected with us on social media for design inspiration, behind-the-scenes content, and updates on new product releases.
            </p>
            
            <div className="flex flex-wrap justify-center gap-6">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex flex-col items-center p-6 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all"
              >
                <div className="bg-primary/10 p-4 rounded-full mb-4">
                  <Instagram size={28} className="text-primary" />
                </div>
                <h3 className="font-medium mb-1">Instagram</h3>
                <p className="text-gray-500 text-sm">@flowersluxe</p>
              </a>
              
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex flex-col items-center p-6 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all"
              >
                <div className="bg-primary/10 p-4 rounded-full mb-4">
                  <Twitter size={28} className="text-primary" />
                </div>
                <h3 className="font-medium mb-1">Twitter</h3>
                <p className="text-gray-500 text-sm">@flowersluxe</p>
              </a>
              
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex flex-col items-center p-6 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all"
              >
                <div className="bg-primary/10 p-4 rounded-full mb-4">
                  <Facebook size={28} className="text-primary" />
                </div>
                <h3 className="font-medium mb-1">Facebook</h3>
                <p className="text-gray-500 text-sm">FlowersLuxe</p>
              </a>
              
              <a 
                href="mailto:hello@flowersluxe.com"
                className="flex flex-col items-center p-6 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all"
              >
                <div className="bg-primary/10 p-4 rounded-full mb-4">
                  <Mail size={28} className="text-primary" />
                </div>
                <h3 className="font-medium mb-1">Email</h3>
                <p className="text-gray-500 text-sm">hello@flowersluxe.com</p>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-surface-muted">
        <div className="container-custom">
          <div className="bg-white rounded-2xl shadow-elevated border border-border p-8 md:p-12">
            <div className="max-w-3xl mx-auto text-center">
              <span className="bg-primary/10 text-primary text-sm font-medium px-4 py-1.5 rounded-full inline-block mb-4">Shop Now</span>
              <h2 className="font-cormorant text-3xl md:text-4xl font-bold mb-4">
                Ready to Explore Our Collection?
              </h2>
              <p className="text-gray-600 mb-8">
                Browse our range of beautiful floral designs on premium quality products, from throw pillows to stickers and more.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/shop" className="btn-primary">
                  Shop Collection
                </Link>
                <Link href="/contact" className="btn-outline">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

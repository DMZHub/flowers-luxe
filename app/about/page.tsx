"use client"
import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { FiHeart, FiUsers, FiAward, FiTruck, FiShield, FiStar } from 'react-icons/fi'
import Breadcrumbs from '../../components/Breadcrumbs'

export default function AboutPage() {
  const breadcrumbItems = [
    { name: 'About', url: '/about' }
  ]

  return (
    <>
      {/* Breadcrumbs */}
      <div className="container-custom">
        <Breadcrumbs items={breadcrumbItems} />
      </div>

      {/* About Header */}
      <section className="bg-surface-muted py-16 md:py-24 relative overflow-hidden">
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
              Bringing the beauty of botanical design into your home through premium flower throw pillows, 
              handcrafted in America with passion and attention to detail.
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
  FlowersLuxe was born from a deep appreciation for the natural elegance of flowers and their unique ability to elevate any space. What began as a creative exploration of botanical patterns has blossomed into a curated collection of floral throw pillows designed to bring beauty and comfort into everyday living.
</p>
<p>
  Each piece in our collection reflects a commitment to thoughtful design and quality craftsmanship. We aim to capture the timeless charm of florals in pieces that feel both artistic and inviting — perfect for enhancing any room with a touch of nature-inspired warmth.
</p>
<p>
  At FlowersLuxe, we believe that great design should be both inspiring and functional. Every floral pillow is carefully selected to ensure it not only adds visual appeal but also offers a cozy, practical accent to your home.
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
                <img
                  src="/images/about/founder-flower-pillows.jpg"
                  alt="FlowersLuxe Founder with Flower Throw Pillows"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-surface-muted rounded-2xl -z-10"></div>
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary/10 rounded-2xl -z-10"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-16 md:py-24 bg-surface-muted">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="font-cormorant text-3xl md:text-4xl font-bold mb-6">
              Our Mission
            </h2>
            <p className="text-gray-600 text-lg">
              To create beautiful, high-quality flower throw pillows that bring joy, comfort, and 
              natural beauty into every home, while supporting American craftsmanship and sustainable practices.
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
                <FiHeart className="text-primary" size={24} />
              </div>
              <h3 className="font-cormorant text-xl font-bold mb-3">Quality Craftsmanship</h3>
              <p className="text-gray-600">
                Every flower throw pillow is individually cut and sewn by hand in America, ensuring 
                exceptional quality and supporting local artisans and craftsmanship.
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
                <FiUsers className="text-primary" size={24} />
              </div>
              <h3 className="font-cormorant text-xl font-bold mb-3">Customer Focus</h3>
              <p className="text-gray-600">
                Your satisfaction is our priority. We're dedicated to providing exceptional customer 
                service and creating flower throw pillows that bring joy to your daily life.
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
                <FiAward className="text-primary" size={24} />
              </div>
              <h3 className="font-cormorant text-xl font-bold mb-3">Artistic Integrity</h3>
              <p className="text-gray-600">
                Each design is created with care and passion, drawing inspiration from botanical 
                forms and natural elements to create timeless flower throw pillow patterns.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="bg-primary/10 text-primary text-sm font-medium px-4 py-1.5 rounded-full inline-block mb-4">Our Process</span>
            <h2 className="font-cormorant text-3xl md:text-4xl font-bold mb-6">
              From Sketch to Pillow
            </h2>
            <p className="text-gray-600">
              Each FlowersLuxe flower throw pillow begins as a hand-drawn sketch before becoming 
              the beautiful, comfortable pillow that arrives at your doorstep.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="relative">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-medium z-10">
                1
              </div>
              <div className="absolute top-5 left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-200 z-0 hidden md:block"></div>
              
              <div className="relative bg-white pt-14 px-6 pb-6 rounded-xl shadow-sm border border-gray-100 z-10">
                <h3 className="font-cormorant text-xl font-bold mb-3 text-center">Design Creation</h3>
                <p className="text-gray-600 text-center">
                  Our designers create detailed floral sketches inspired by nature, focusing on 
                  botanical forms and flower elements perfect for throw pillows.
                </p>
              </div>
            </div>
            
            <div className="relative mt-10 md:mt-0">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-medium z-10">
                2
              </div>
              <div className="absolute top-5 left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-200 z-0 hidden md:block"></div>
              
              <div className="relative bg-white pt-14 px-6 pb-6 rounded-xl shadow-sm border border-gray-100 z-10">
                <h3 className="font-cormorant text-xl font-bold mb-3 text-center">Digital Refinement</h3>
                <p className="text-gray-600 text-center">
                  Each design is carefully refined for color harmony, balanced proportions, and seamless patterns—ensuring every pillow looks striking and well-crafted.
                </p>
              </div>
            </div>
            
            <div className="relative mt-10 md:mt-0">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-medium z-10">
                3
              </div>
              
              <div className="relative bg-white pt-14 px-6 pb-6 rounded-xl shadow-sm border border-gray-100 z-10">
                <h3 className="font-cormorant text-xl font-bold mb-3 text-center">Quality Production</h3>
                <p className="text-gray-600 text-center">
                  We partner with trusted American manufacturers who apply our designs to premium 
                  textured poly twill, creating beautiful finished flower throw pillows.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 bg-surface-muted">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="font-cormorant text-3xl md:text-4xl font-bold mb-6">
              Why Choose Our Flower Throw Pillows
            </h2>
            <p className="text-gray-600">
              Discover what makes FlowersLuxe flower throw pillows the perfect choice for your home
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FiShield className="text-green-600" size={24} />
              </div>
              <h3 className="font-cormorant text-lg font-bold mb-3">Premium Materials</h3>
              <p className="text-gray-600 text-sm">
                Double-sided textured poly twill fabric with concealed zipper and synthetic insert included
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FiAward className="text-blue-600" size={24} />
              </div>
              <h3 className="font-cormorant text-lg font-bold mb-3">Made in America</h3>
              <p className="text-gray-600 text-sm">
                Individually cut and sewn by hand in the USA, supporting local craftsmanship
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FiHeart className="text-purple-600" size={24} />
              </div>
              <h3 className="font-cormorant text-lg font-bold mb-3">Unique Designs</h3>
              <p className="text-gray-600 text-sm">
                Exclusive botanical patterns you won't find anywhere else, designed specifically for pillows
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FiTruck className="text-orange-600" size={24} />
              </div>
              <h3 className="font-cormorant text-lg font-bold mb-3">Fast Shipping</h3>
              <p className="text-gray-600 text-sm">
                Quick delivery with secure packaging and tracking for your flower throw pillows
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
              <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FiStar className="text-teal-600" size={24} />
              </div>
              <h3 className="font-cormorant text-lg font-bold mb-3">Quality Guarantee</h3>
              <p className="text-gray-600 text-sm">
                Highest quality standards maintained to ensure every pillow meets our expectations
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FiUsers className="text-red-600" size={24} />
              </div>
              <h3 className="font-cormorant text-lg font-bold mb-3">Customer Support</h3>
              <p className="text-gray-600 text-sm">
                Dedicated support team ready to help with your flower throw pillow questions
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="bg-gradient-to-br from-primary to-primary-dark rounded-2xl p-8 md:p-12 text-white">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="font-cormorant text-3xl md:text-4xl font-bold mb-4">
                  FlowersLuxe by the Numbers
                </h2>
                <p className="text-white/90">
                  Our commitment to quality and customer satisfaction speaks for itself
                </p>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold mb-2">50+</div>
                  <div className="text-white/80 text-sm">Unique Pillow Designs</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold mb-2">7</div>
                  <div className="text-white/80 text-sm">Style Categories</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold mb-2">100%</div>
                  <div className="text-white/80 text-sm">Made in USA</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold mb-2">5★</div>
                  <div className="text-white/80 text-sm">Customer Rating</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-24 bg-surface-muted">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-cormorant text-3xl md:text-4xl font-bold mb-6">
              Get in Touch
            </h2>
            <p className="text-gray-600 mb-8">
              Have questions about our flower throw pillows or need styling advice? 
              We'd love to hear from you and help you find the perfect pillows for your space.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="btn-primary"
              >
                Contact Us
              </Link>
              <Link 
                href="/shop"
                className="btn-outline"
              >
                Shop Pillows
              </Link>
            </div>
            
            <div className="mt-8 text-gray-600">
              <p>Email: info@flowersluxe.com</p>
              <p className="mt-2">Follow us on social media for design inspiration and updates</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
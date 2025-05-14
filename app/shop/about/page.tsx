"use client"

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ExternalLink, Mail, Phone, Instagram, Twitter, Facebook } from 'lucide-react'

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
                  FlowersLuxe began with a simple love for flowers and their ability to transform spaces and elevate moods. Our founder, Emily Parker, started creating floral patterns during her studies in botanical illustration, which eventually evolved into a collection of designs applied to various products.
                </p>
                <p>
                  What started as a small creative project in 2018 has grown into a thoughtfully curated collection of high-quality products featuring unique floral designs. Our mission is to bring the timeless beauty of flowers into everyday objects, allowing you to surround yourself with nature's artistry.
                </p>
                <p>
                  We believe that beautiful design should be accessible and functional. That's why we carefully select each product in our collection, ensuring that they not only look stunning but also serve a practical purpose in your daily life.
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
                  src="/images/about/founder.jpg"
                  alt="FlowersLuxe Founder"
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

      {/* Our Process */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="bg-primary/10 text-primary text-sm font-medium px-4 py-1.5 rounded-full inline-block mb-4">Our Process</span>
            <h2 className="font-cormorant text-3xl md:text-4xl font-bold mb-6">
              From Sketch to Product
            </h2>
            <p className="text-gray-600">
              Each FlowersLuxe product begins as a hand-drawn sketch before becoming the beautiful product that arrives at your doorstep.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="relative">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-medium z-10">
                1
              </div>
              <div className="absolute top-5 left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-200 z-0"></div>
              
              <div className="relative bg-white pt-14 px-6 pb-6 rounded-xl shadow-sm border border-gray-100 z-10">
                <h3 className="font-cormorant text-xl font-bold mb-3 text-center">Design Creation</h3>
                <p className="text-gray-600 text-center">
                  Our designers create detailed sketches inspired by the natural world, focusing on botanical forms and floral elements.
                </p>
              </div>
            </div>
            
            <div className="relative mt-10 md:mt-0">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-medium z-10">
                2
              </div>
              <div className="absolute top-5 left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-200 z-0"></div>
              
              <div className="relative bg-white pt-14 px-6 pb-6 rounded-xl shadow-sm border border-gray-100 z-10">
                <h3 className="font-cormorant text-xl font-bold mb-3 text-center">Digital Refinement</h3>
                <p className="text-gray-600 text-center">
                  Hand-drawn designs are digitized and refined, with careful attention to color, proportion, and pattern repetition.
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
                  We partner with trusted manufacturers who apply our designs to high-quality materials, creating beautiful finished products.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 md:py-24 bg-surface-muted">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="bg-primary/10 text-primary text-sm font-medium px-4 py-1.5 rounded-full inline-block mb-4">Our Team</span>
            <h2 className="font-cormorant text-3xl md:text-4xl font-bold mb-6">
              Meet the People Behind FlowersLuxe
            </h2>
            <p className="text-gray-600">
              Our small but passionate team brings together diverse talents united by a love for floral design and quality craftsmanship.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100">
              <div className="relative h-72">
                <Image
                  src="/images/about/team-1.jpg"
                  alt="Emily Parker - Founder & Creative Director"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-6">
                <h3 className="font-cormorant text-xl font-bold mb-1">Emily Parker</h3>
                <p className="text-primary text-sm font-medium mb-3">Founder & Creative Director</p>
                <p className="text-gray-600 text-sm">
                  With a background in botanical illustration and textile design, Emily brings a unique artistic vision to FlowersLuxe.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100">
              <div className="relative h-72">
                <Image
                  src="/images/about/team-2.jpg"
                  alt="Michael Chen - Production Manager"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-6">
                <h3 className="font-cormorant text-xl font-bold mb-1">Michael Chen</h3>
                <p className="text-primary text-sm font-medium mb-3">Production Manager</p>
                <p className="text-gray-600 text-sm">
                  Michael oversees our manufacturing partnerships, ensuring each product meets our high standards for quality and sustainability.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100">
              <div className="relative h-72">
                <Image
                  src="/images/about/team-3.jpg"
                  alt="Sophia Rodriguez - Digital Artist"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-6">
                <h3 className="font-cormorant text-xl font-bold mb-1">Sophia Rodriguez</h3>
                <p className="text-primary text-sm font-medium mb-3">Digital Artist</p>
                <p className="text-gray-600 text-sm">
                  Sophia transforms hand-drawn sketches into digital designs, perfecting colors and patterns for various product applications.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <span className="bg-primary/10 text-primary text-sm font-medium px-4 py-1.5 rounded-full inline-block mb-4">Get In Touch</span>
              <h2 className="font-cormorant text-3xl md:text-4xl font-bold mb-6">
                We'd Love to Hear From You
              </h2>
              <p className="text-gray-600 mb-8">
                Have questions about our products, custom orders, or wholesale opportunities? Reach out to us using the contact information below.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg text-primary">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Email Us</h3>
                    <a href="mailto:info@flowersluxe.com" className="text-gray-600 hover:text-primary transition-colors">
                      info@flowersluxe.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg text-primary">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Call Us</h3>
                    <a href="tel:+1234567890" className="text-gray-600 hover:text-primary transition-colors">
                      +1 (234) 567-890
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg text-primary">
                    <ExternalLink size={20} />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Online Store</h3>
                    <a 
                      href="https://store.flowersluxe.com/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-primary transition-colors"
                    >
                      TeePublic Store
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h3 className="font-medium mb-3">Follow Us</h3>
                <div className="flex gap-4">
                  <a 
                    href="https://instagram.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-white border border-gray-200 p-3 rounded-lg text-gray-500 hover:text-primary hover:border-primary transition-colors"
                    aria-label="Instagram"
                  >
                    <Instagram size={20} />
                  </a>
                  <a 
                    href="https://twitter.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-white border border-gray-200 p-3 rounded-lg text-gray-500 hover:text-primary hover:border-primary transition-colors"
                    aria-label="Twitter"
                  >
                    <Twitter size={20} />
                  </a>
                  <a 
                    href="https://facebook.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-white border border-gray-200 p-3 rounded-lg text-gray-500 hover:text-primary hover:border-primary transition-colors"
                    aria-label="Facebook"
                  >
                    <Facebook size={20} />
                  </a>
                </div>
              </div>
            </div>
            
            <div>
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
                <h3 className="font-cormorant text-2xl font-bold mb-6">Send Us a Message</h3>
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                      placeholder="Your email address"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                      placeholder="Message subject"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                      placeholder="Your message"
                      required
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary-dark text-white font-medium py-3 px-6 rounded-lg transition-colors"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

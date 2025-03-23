"use client"
import React, { useState, useRef, FormEvent, ChangeEvent } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Mail, Instagram, Twitter, Facebook, CheckCircle, AlertCircle } from 'lucide-react'
import emailjs from 'emailjs-com'

export default function ContactPage() {
  // Contact form state
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const formRef = useRef<HTMLFormElement>(null)
  
  // Newsletter form state
  const [newsletterStatus, setNewsletterStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const [newsletterEmail, setNewsletterEmail] = useState('')
  const newsletterFormRef = useRef<HTMLFormElement>(null)
  
  // EmailJS credentials
  const serviceID = "service_yjfk3dq"
  const templateID = "template_jkea55x" 
  const publicKey = "p_xEzMpgucBUYxDyC"

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setFormStatus('sending')

    if (formRef.current) {
      emailjs.sendForm(serviceID, templateID, formRef.current, publicKey)
      .then((result) => {
        console.log('Contact form email sent successfully:', result.text)
        setFormStatus('success')
      })
      .catch((error) => {
        console.error('Error sending contact form email:', error)
        setFormStatus('error')
      })
    }
  }

  const handleNewsletterSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setNewsletterStatus('sending')

    // Create template params for newsletter signup
    const templateParams = {
      to_name: "Admin",
      from_name: "Newsletter Subscriber",
      email: newsletterEmail,
      subject: 'Newsletter Subscription',
      message: `New newsletter subscription from ${newsletterEmail}`
    }

    // Log the attempt
    console.log('Attempting to send newsletter subscription for:', newsletterEmail)
    
    // Use emailjs.send directly with the parameters
    emailjs.send(serviceID, templateID, templateParams, publicKey)
      .then((result) => {
        console.log('Newsletter subscription sent successfully:', result.text)
        setNewsletterStatus('success')
      })
      .catch((error) => {
        console.error('Error sending newsletter subscription:', error)
        setNewsletterStatus('error')
      })
  }

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    })
    setFormStatus('idle')
  }

  const resetNewsletterForm = () => {
    setNewsletterEmail('')
    setNewsletterStatus('idle')
  }

  return (
    <>
      {/* Contact Header */}
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
              Contact Us
            </h1>
            <p className="text-gray-600 text-lg mb-8">
              We'd love to hear from you! Whether you have a question about our products, need custom design work, or just want to say hello.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <span className="bg-primary/10 text-primary text-sm font-medium px-4 py-1.5 rounded-full inline-block mb-4">Get In Touch</span>
              <h2 className="font-cormorant text-3xl md:text-4xl font-bold mb-6">
                How Can We Help You?
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Have questions about our floral products or interested in custom designs? Our team is here to assist you. Fill out the form or use the contact information below to reach us.
              </p>
              
              <div className="space-y-8 mb-12">
                <motion.div 
                  className="flex items-start gap-5"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="bg-primary/10 p-4 rounded-lg text-primary">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg mb-2">Email Us</h3>
                    <a href="mailto:hello@flowersluxe.com" className="text-gray-600 hover:text-primary transition-colors">
                      hello@flowersluxe.com
                    </a>
                    <p className="text-gray-500 text-sm mt-1">
                      We'll respond within 24-48 hours
                    </p>
                  </div>
                </motion.div>
              </div>
              
              <div>
                <h3 className="font-medium text-lg mb-4">Connect With Us</h3>
                <div className="flex gap-4">
                  <a 
                    href="https://instagram.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-white border border-gray-200 p-3 rounded-lg text-gray-500 hover:text-primary hover:border-primary transition-colors"
                    aria-label="Instagram"
                  >
                    <Instagram size={24} />
                  </a>
                  <a 
                    href="https://twitter.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-white border border-gray-200 p-3 rounded-lg text-gray-500 hover:text-primary hover:border-primary transition-colors"
                    aria-label="Twitter"
                  >
                    <Twitter size={24} />
                  </a>
                  <a 
                    href="https://facebook.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-white border border-gray-200 p-3 rounded-lg text-gray-500 hover:text-primary hover:border-primary transition-colors"
                    aria-label="Facebook"
                  >
                    <Facebook size={24} />
                  </a>
                </div>
              </div>
            </div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-white rounded-xl shadow-elevated border border-border p-8">
                <h3 className="font-cormorant text-2xl font-bold mb-6">Send Us a Message</h3>
                
                {formStatus === 'idle' && (
                  <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Your Name*
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                        placeholder="Enter your name"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address*
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                        placeholder="Enter your email"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                        Subject*
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                        placeholder="What is this regarding?"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                        Message*
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={5}
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                        placeholder="How can we help you?"
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
                )}

                {formStatus === 'sending' && (
                  <div className="bg-blue-50 border border-blue-100 rounded-lg p-6 text-center">
                    <div className="animate-pulse">
                      <div className="h-12 w-12 mx-auto mb-4 rounded-full border-4 border-blue-500 border-t-transparent animate-spin"></div>
                    </div>
                    <h4 className="text-xl font-medium text-gray-900 mb-2">Sending your message...</h4>
                    <p className="text-gray-600">
                      Please wait while we process your request.
                    </p>
                  </div>
                )}

                {formStatus === 'success' && (
                  <div className="bg-green-50 border border-green-100 rounded-lg p-6 text-center">
                    <CheckCircle size={48} className="text-green-500 mx-auto mb-4" />
                    <h4 className="text-xl font-medium text-gray-900 mb-2">Message Sent Successfully!</h4>
                    <p className="text-gray-600 mb-6">
                      Thank you for reaching out. We've received your message and will get back to you shortly.
                    </p>
                    <button
                      onClick={resetForm}
                      className="bg-primary hover:bg-primary-dark text-white font-medium py-3 px-6 rounded-lg transition-colors"
                    >
                      Send Another Message
                    </button>
                  </div>
                )}

                {formStatus === 'error' && (
                  <div className="bg-red-50 border border-red-100 rounded-lg p-6 text-center">
                    <AlertCircle size={48} className="text-red-500 mx-auto mb-4" />
                    <h4 className="text-xl font-medium text-gray-900 mb-2">Something Went Wrong</h4>
                    <p className="text-gray-600 mb-6">
                      We couldn't send your message. Please try again or contact us directly via email or phone.
                    </p>
                    <button
                      onClick={resetForm}
                      className="bg-primary hover:bg-primary-dark text-white font-medium py-3 px-6 rounded-lg transition-colors"
                    >
                      Try Again
                    </button>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="bg-primary/10 text-primary text-sm font-medium px-4 py-1.5 rounded-full inline-block mb-4">FAQ</span>
            <h2 className="font-cormorant text-3xl md:text-4xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Find answers to our most commonly asked questions. If you can't find what you're looking for, please contact us.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <h3 className="font-cormorant text-xl font-bold mb-3">Do you ship internationally?</h3>
              <p className="text-gray-600">
                Yes, our products are available worldwide through our TeePublic store, which ships to most countries. International shipping times and costs vary by location.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <h3 className="font-cormorant text-xl font-bold mb-3">Can I request a custom design?</h3>
              <p className="text-gray-600">
                Absolutely! We love creating custom floral designs. Please reach out through our contact form with details about your project, and we'll get back to you with a quote.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <h3 className="font-cormorant text-xl font-bold mb-3">What is your return policy?</h3>
              <p className="text-gray-600">
                Since we work through TeePublic, all orders are subject to their return policy. Generally, if you're not happy with your purchase, you can return it within 30 days.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <h3 className="font-cormorant text-xl font-bold mb-3">Do you offer wholesale pricing?</h3>
              <p className="text-gray-600">
                Yes, we offer wholesale options for retailers interested in carrying our designs. Please contact us directly with your business details for wholesale pricing information.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-surface-muted">
        <div className="container-custom">
          <div className="bg-white rounded-2xl shadow-elevated border border-border p-8 md:p-12">
            <div className="max-w-3xl mx-auto text-center">
              <span className="bg-primary/10 text-primary text-sm font-medium px-4 py-1.5 rounded-full inline-block mb-4">Stay Updated</span>
              <h2 className="font-cormorant text-3xl md:text-4xl font-bold mb-4">
                Join Our Newsletter
              </h2>
              <p className="text-gray-600 mb-8">
                Subscribe to receive updates on new product releases, special promotions, and floral design inspiration delivered straight to your inbox.
              </p>
              
              {newsletterStatus === 'idle' && (
                <form 
                  onSubmit={handleNewsletterSubmit} 
                  className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto"
                >
                  <input
                    type="email"
                    id="newsletter_email"
                    name="email" // Match the template param name
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    placeholder="Your email address"
                    className="flex-grow px-4 py-3 rounded-md border border-border focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                    required
                  />
                  <button
                    type="submit"
                    className="bg-primary hover:bg-primary-dark text-white font-medium py-3 px-6 rounded-lg transition-colors whitespace-nowrap"
                  >
                    Subscribe
                  </button>
                </form>
              )}
              
              {newsletterStatus === 'sending' && (
                <div className="bg-blue-50 border border-blue-100 rounded-lg p-6 text-center max-w-lg mx-auto">
                  <div className="animate-pulse">
                    <div className="h-12 w-12 mx-auto mb-4 rounded-full border-4 border-blue-500 border-t-transparent animate-spin"></div>
                  </div>
                  <h4 className="text-xl font-medium text-gray-900 mb-2">Processing subscription...</h4>
                  <p className="text-gray-600">
                    Please wait while we add you to our newsletter.
                  </p>
                </div>
              )}
              
              {newsletterStatus === 'success' && (
                <div className="bg-green-50 border border-green-100 rounded-lg p-6 text-center max-w-lg mx-auto">
                  <CheckCircle size={48} className="text-green-500 mx-auto mb-4" />
                  <h4 className="text-xl font-medium text-gray-900 mb-2">Successfully Subscribed!</h4>
                  <p className="text-gray-600 mb-6">
                    Thank you for subscribing to our newsletter. You'll receive updates on our latest products and promotions.
                  </p>
                  <button
                    onClick={resetNewsletterForm}
                    className="bg-primary hover:bg-primary-dark text-white font-medium py-3 px-6 rounded-lg transition-colors"
                  >
                    Subscribe Another Email
                  </button>
                </div>
              )}
              
              {newsletterStatus === 'error' && (
                <div className="bg-red-50 border border-red-100 rounded-lg p-6 text-center max-w-lg mx-auto">
                  <AlertCircle size={48} className="text-red-500 mx-auto mb-4" />
                  <h4 className="text-xl font-medium text-gray-900 mb-2">Subscription Failed</h4>
                  <p className="text-gray-600 mb-6">
                    We couldn't process your subscription. Please try again or contact us directly.
                  </p>
                  <button
                    onClick={resetNewsletterForm}
                    className="bg-primary hover:bg-primary-dark text-white font-medium py-3 px-6 rounded-lg transition-colors"
                  >
                    Try Again
                  </button>
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
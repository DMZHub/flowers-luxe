"use client"
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FiMail, FiMessageSquare, FiHelpCircle, FiInstagram, FiTwitter, FiFacebook } from 'react-icons/fi'
import { SiPinterest } from 'react-icons/si'
import Breadcrumbs from '../../components/Breadcrumbs'
import emailjs from '@emailjs/browser'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [submitting, setSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{
    success?: boolean
    message?: string
  }>({})

  // EmailJS credentials
  const serviceID = "service_pg53bjv"
  const templateID = "template_ax0l7yp"
  const publicKey = "yvJpeo6ujp2VaM2rX"

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!formData.name || !formData.email || !formData.message) {
      setSubmitStatus({
        success: false,
        message: 'Please fill in all required fields.'
      })
      return
    }

    if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      setSubmitStatus({
        success: false,
        message: 'Please enter a valid email address.'
      })
      return
    }
    
    setSubmitting(true)
    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject || 'Contact Form Submission',
        message: formData.message,
        to_name: 'FlowersLuxe Team'
      }
      
      await emailjs.send(serviceID, templateID, templateParams, publicKey)
      
      setSubmitStatus({
        success: true,
        message: 'Thank you for your message! We\'ll get back to you within 24 hours.'
      })
      setFormData({ name: '', email: '', subject: '', message: '' })
    } catch (error) {
      console.error('Failed to send message:', error)
      setSubmitStatus({
        success: false,
        message: 'Failed to send message. Please try again later.'
      })
    } finally {
      setSubmitting(false)
      
      setTimeout(() => {
        setSubmitStatus({})
      }, 5000)
    }
  }

  const breadcrumbItems = [
    { name: 'Contact', url: '/contact' }
  ]

  return (
    <>
      {/* Breadcrumbs */}
      <div className="container-custom">
        <Breadcrumbs items={breadcrumbItems} />
      </div>

      {/* Contact Header */}
      <section className="bg-surface-muted py-16 md:py-24 relative overflow-hidden">
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
              Have questions about our flower throw pillows? Need styling advice? We're here to help 
              you find the perfect botanical accents for your home.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="font-cormorant text-3xl font-bold mb-8">Get in Touch</h2>
              <p className="text-gray-600 mb-8">
                We'd love to hear from you! Whether you have questions about our flower throw pillows, 
                need help with an order, or want styling advice, our team is here to help.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg text-primary">
                    <FiMail size={20} />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Email Us</h3>
                    <p className="text-gray-600 mb-2">For general inquiries and support</p>
                    <a href="mailto:info@flowersluxe.com" className="text-primary hover:text-primary-dark transition-colors">
                      info@flowersluxe.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg text-primary">
                    <FiMessageSquare size={20} />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Live Chat</h3>
                    <p className="text-gray-600 mb-2">Quick answers to your questions</p>
                    <p className="text-sm text-gray-500">Available Mon-Fri, 9 AM - 5 PM EST</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg text-primary">
                    <FiHelpCircle size={20} />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">FAQ</h3>
                    <p className="text-gray-600 mb-2">Find answers to common questions</p>
                    <a href="#faq" className="text-primary hover:text-primary-dark transition-colors text-sm">
                      View FAQ Section
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h3 className="font-medium mb-4">Follow Us</h3>
                <div className="flex gap-4">
                  <a 
                    href="https://www.instagram.com/flowersluxe1" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-white border border-gray-200 p-3 rounded-lg text-gray-500 hover:text-primary hover:border-primary transition-colors"
                    aria-label="Instagram"
                  >
                    <FiInstagram size={20} />
                  </a>
                  <a 
                    href="https://x.com/FlowerLxe" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-white border border-gray-200 p-3 rounded-lg text-gray-500 hover:text-primary hover:border-primary transition-colors"
                    aria-label="Twitter"
                  >
                    <FiTwitter size={20} />
                  </a>
                  <a 
                    href="https://www.facebook.com/profile.php?id=61575082658424" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-white border border-gray-200 p-3 rounded-lg text-gray-500 hover:text-primary hover:border-primary transition-colors"
                    aria-label="Facebook"
                  >
                    <FiFacebook size={20} />
                  </a>
                  <a 
                    href="https://www.pinterest.com/FlowersLuxe1" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-white border border-gray-200 p-3 rounded-lg text-gray-500 hover:text-primary hover:border-primary transition-colors"
                    aria-label="Pinterest"
                  >
                    <SiPinterest size={20} />
                  </a>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div>
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
                <h3 className="font-cormorant text-2xl font-bold mb-6">Send Us a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                      placeholder="Your name"
                      required
                      disabled={submitting}
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                      placeholder="Your email address"
                      required
                      disabled={submitting}
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                      Subject
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                      disabled={submitting}
                    >
                      <option value="">Select a subject</option>
                      <option value="Product Question">Product Question</option>
                      <option value="Order Support">Order Support</option>
                      <option value="Styling Advice">Styling Advice</option>
                      <option value="Custom Order">Custom Order</option>
                      <option value="Wholesale Inquiry">Wholesale Inquiry</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                      placeholder="Tell us how we can help you..."
                      required
                      disabled={submitting}
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className={`w-full bg-primary hover:bg-primary-dark text-white font-medium py-3 px-6 rounded-lg transition-colors ${
                      submitting ? 'opacity-70 cursor-not-allowed' : ''
                    }`}
                    disabled={submitting}
                  >
                    {submitting ? 'Sending Message...' : 'Send Message'}
                  </button>
                  
                  {submitStatus.message && (
                    <div 
                      className={`text-sm p-3 rounded-lg ${
                        submitStatus.success 
                          ? 'bg-green-50 text-green-700 border border-green-200' 
                          : 'bg-red-50 text-red-700 border border-red-200'
                      }`}
                    >
                      {submitStatus.message}
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 md:py-24 bg-surface-muted">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-cormorant text-3xl font-bold mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-gray-600">
                Find quick answers to common questions about our flower throw pillows
              </p>
            </div>
            
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
              >
                <h3 className="font-medium text-lg mb-3">Can I wash my flower throw pillows?</h3>
                <p className="text-gray-600">
                  Yes! All pillows consist of an outer cover and an insert. The cover can be machine washed 
                  separately in cold water on a gentle cycle with mild detergent and no bleach. Tumble dry low. 
                  The insert should be spot cleaned or dry cleaned only.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
              >
                <h3 className="font-medium text-lg mb-3">What materials are the pillows made from?</h3>
                <p className="text-gray-600">
                  Our flower throw pillows feature textured poly "twill" covers with concealed zippers 
                  and synthetic inserts included. Each pillow is individually cut and sewn by hand in America 
                  for premium quality and comfort.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
              >
                <h3 className="font-medium text-lg mb-3">What sizes are available?</h3>
                <p className="text-gray-600">
                  We offer flower throw pillows in a variety of sizes to fit all your decorating and comfort needs. 
                  Sizes typically range from 16x16 inches to 24x24 inches. Check individual product pages for 
                  specific size options.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
              >
                <h3 className="font-medium text-lg mb-3">Do you offer custom designs?</h3>
                <p className="text-gray-600">
                  While our current collection features carefully curated floral designs, we occasionally 
                  accept custom design requests. Please contact us with your specific requirements, and 
                  we'll let you know if we can accommodate your request.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
              >
                <h3 className="font-medium text-lg mb-3">What's your return policy?</h3>
                <p className="text-gray-600">
                  We want you to love your order! If for any reason you're not satisfied with your flower 
                  throw pillows, we follow TeePublic's standard 30-day return policy. Contact us and we'll 
                  make things right.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
              >
                <h3 className="font-medium text-lg mb-3">How long does shipping take?</h3>
                <p className="text-gray-600">
                  Shipping times vary depending on your location and the shipping method selected. 
                  Typically, orders are processed within 2-3 business days and delivered within 5-10 business days. 
                  You'll receive tracking information once your order ships.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="bg-gradient-to-br from-primary to-primary-dark rounded-2xl p-8 md:p-12 text-white text-center">
            <h2 className="font-cormorant text-3xl md:text-4xl font-bold mb-4">
              Still Have Questions?
            </h2>
            <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
              Our customer service team is here to help you find the perfect flower throw pillows 
              for your home. Don't hesitate to reach out!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="mailto:info@flowersluxe.com"
                className="bg-white text-primary hover:bg-gray-100 font-medium py-3 px-8 rounded-lg transition-colors"
              >
                Email Us Now
              </a>
              <a 
                href="https://store.flowersluxe.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-white/30 text-white hover:bg-white/10 font-medium py-3 px-8 rounded-lg transition-colors"
              >
                Visit Our Store
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
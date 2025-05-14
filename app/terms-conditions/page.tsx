"use client"

import React from 'react'
import Link from 'next/link'

export default function TermsConditionsPage() {
  return (
    <>
      {/* Terms & Conditions Header */}
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
              Terms & Conditions
            </h1>
            <p className="text-gray-600 text-lg">
              Last Updated: February 26, 2025
            </p>
          </div>
        </div>
      </section>

      {/* Terms & Conditions Content */}
      <section className="py-12 md:py-16">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-sm p-8 md:p-12">
            <div className="prose prose-lg max-w-none">
              <p>
                Welcome to FlowersLuxe. By accessing our website and purchasing our products, you agree to be bound by these Terms and Conditions, our Privacy Policy, and any other policies referenced herein.
              </p>

              <h2 className="font-cormorant text-2xl font-bold mt-8 mb-4">1. Acceptance of Terms</h2>
              <p>
                By accessing and using this website, you accept and agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, you may not use our website or services.
              </p>

              <h2 className="font-cormorant text-2xl font-bold mt-8 mb-4">2. Products and Services</h2>
              <p>
                FlowersLuxe offers floral-designed products through our TeePublic store. When you make a purchase, you will be redirected to TeePublic's platform, where you will be subject to their terms and conditions in addition to ours.
              </p>
              <p>
                We strive to accurately display the colors and images of our products, but we cannot guarantee that your device's display will accurately reflect the actual product colors.
              </p>

              <h2 className="font-cormorant text-2xl font-bold mt-8 mb-4">3. Pricing and Payment</h2>
              <p>
                All prices are listed in US dollars unless otherwise specified. Prices are subject to change without notice. All purchases are processed through TeePublic's secure payment system, and we do not store your payment information.
              </p>
             
              <h2 className="font-cormorant text-2xl font-bold mt-8 mb-4">4. Shipping and Delivery</h2>
              <p>
                Shipping and delivery are handled by TeePublic. Shipping times and costs vary depending on your location and chosen shipping method. We are not responsible for any delays, damages, or issues arising during the shipping process.
              </p>

              <h2 className="font-cormorant text-2xl font-bold mt-8 mb-4">5. Returns and Refunds</h2>
              <p>
                Our return and refund policy follows TeePublic's policies. Generally, if you're not satisfied with your purchase, you may return it within 30 days for a refund or exchange. Please contact TeePublic directly for all return and refund requests.
              </p>

              <h2 className="font-cormorant text-2xl font-bold mt-8 mb-4">6. Intellectual Property</h2>
              <p>
                All content on this website, including text, graphics, logos, images, designs, and software, is the property of FlowersLuxe and is protected by copyright, trademark, and other intellectual property laws.
              </p>
              <p>
                You may not reproduce, distribute, modify, create derivative works of, publicly display, publicly perform, republish, download, store, or transmit any of the material on our website without our written consent.
              </p>

              <h2 className="font-cormorant text-2xl font-bold mt-8 mb-4">7. User Conduct</h2>
              <p>
                When using our website, you agree not to:
              </p>
              <ul className="list-disc pl-6 mb-6">
                <li>Use the website in any way that violates applicable laws or regulations</li>
                <li>Attempt to gain unauthorized access to any part of the website</li>
                <li>Interfere with the proper functioning of the website</li>
                <li>Collect or harvest any personal information from other users</li>
                <li>Engage in any activity that could harm or disrupt our services</li>
              </ul>

              <h2 className="font-cormorant text-2xl font-bold mt-8 mb-4">8. Limitation of Liability</h2>
              <p>
                FlowersLuxe, or affiliates shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use our website or products.
              </p>
              <p>
                We do not guarantee that our website will be secure or free from errors, viruses, or other harmful components.
              </p>

              <h2 className="font-cormorant text-2xl font-bold mt-8 mb-4">9. Indemnification</h2>
              <p>
                You agree to indemnify, defend, and hold harmless FlowersLuxe and its affiliates from any claims, liabilities, damages, costs, and expenses, including attorney's fees, arising from your use of the website or violation of these Terms and Conditions.
              </p>

              <h2 className="font-cormorant text-2xl font-bold mt-8 mb-4">10. Governing Law</h2>
              <p>
              These Terms and Conditions are governed by the laws of the United States, excluding conflict of law provisions.
              </p>

              <h2 className="font-cormorant text-2xl font-bold mt-8 mb-4">11. Changes to Terms</h2>
              <p>
                We reserve the right to modify these Terms and Conditions at any time. We will indicate the date of the most recent update at the top of this page. Your continued use of the website after any changes constitutes acceptance of the new Terms and Conditions.
              </p>

              <h2 className="font-cormorant text-2xl font-bold mt-8 mb-4">12. Contact Information</h2>
              <p>
                If you have any questions about these Terms and Conditions, please contact us at:
              </p>
              <p>
                Email: <a href="mailto:info@flowersluxe.com" className="text-primary hover:underline">info@flowersluxe.com</a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

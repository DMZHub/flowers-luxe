"use client"

import React from 'react'
import Link from 'next/link'

export default function PrivacyPolicyPage() {
  return (
    <>
      {/* Privacy Policy Header */}
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
              Privacy Policy
            </h1>
            <p className="text-gray-600 text-lg">
              Last Updated: February 26, 2025
            </p>
          </div>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="py-12 md:py-16">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-sm p-8 md:p-12">
            <div className="prose prose-lg max-w-none">
              <p>
                At FlowersLuxe, we value your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or make a purchase through our TeePublic store.
              </p>

              <h2 className="font-cormorant text-2xl font-bold mt-8 mb-4">Information We Collect</h2>
              
              <h3 className="font-medium text-xl mb-3">Personal Data</h3>
              <p>
                When you visit our site or make a purchase, we may collect personal information, including:
              </p>
              <ul className="list-disc pl-6 mb-6">
                <li>Name and contact information (email address, phone number)</li>
                <li>Billing and shipping address</li>
                <li>Payment information (processed securely through our payment processors)</li>
                <li>Email communications and correspondence with us</li>
              </ul>

              <h3 className="font-medium text-xl mb-3">Automatically Collected Information</h3>
              <p>
                When you browse our website, we may collect certain information automatically, including:
              </p>
              <ul className="list-disc pl-6 mb-6">
                <li>IP address</li>
                <li>Browser type and version</li>
                <li>Operating system</li>
                <li>Pages you visit and time spent on those pages</li>
                <li>Referral source</li>
                <li>Clickstream data</li>
              </ul>

              <h2 className="font-cormorant text-2xl font-bold mt-8 mb-4">How We Use Your Information</h2>
              <p>
                We use the information we collect for various purposes, including:
              </p>
              <ul className="list-disc pl-6 mb-6">
                <li>Processing and fulfilling orders</li>
                <li>Communicating with you about your order or inquiry</li>
                <li>Sending you product updates and marketing communications (if you've opted in)</li>
                <li>Improving our website, products, and customer service</li>
                <li>Complying with legal obligations</li>
                <li>Detecting and preventing fraud</li>
              </ul>

              <h2 className="font-cormorant text-2xl font-bold mt-8 mb-4">Cookies and Tracking Technologies</h2>
              <p>
                We use cookies and similar tracking technologies to collect information about your browsing activities. You can manage your cookie preferences through your browser settings. Disabling cookies may affect certain website functionalities.
              </p>

              <h2 className="font-cormorant text-2xl font-bold mt-8 mb-4">Third-Party Services</h2>
              <p>
                We use third-party services to facilitate our business operations, including payment processing, order fulfillment, and website analytics. These service providers have access to your personal information only to perform specific tasks on our behalf and are obligated to protect your information.
              </p>
              <p>
                Our products are sold through TeePublic, and when you make a purchase, you will be subject to TeePublic's privacy policy and terms of service.
              </p>

              <h2 className="font-cormorant text-2xl font-bold mt-8 mb-4">Information Sharing and Disclosure</h2>
              <p>
                We do not sell, trade, or otherwise transfer your personal information to outside parties except in the following circumstances:
              </p>
              <ul className="list-disc pl-6 mb-6">
                <li>To service providers who assist us in operating our website and conducting our business</li>
                <li>When required by law or to protect our rights</li>
                <li>In the event of a business transfer or acquisition</li>
                <li>With your consent</li>
              </ul>

              <h2 className="font-cormorant text-2xl font-bold mt-8 mb-4">Data Security</h2>
              <p>
                We implement appropriate security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. While we implement strict security measures, no online system is entirely immune to risks.
              </p>

              <h2 className="font-cormorant text-2xl font-bold mt-8 mb-4">Your Rights</h2>
              <p>
                Depending on your location, you may have certain rights regarding your personal information, including:
              </p>
              <ul className="list-disc pl-6 mb-6">
                <li>Access to your personal information</li>
                <li>Correction of inaccurate or incomplete information</li>
                <li>Deletion of your personal information</li>
                <li>Restriction or objection to processing</li>
                <li>Data portability</li>
                <li>Withdrawal of consent</li>
              </ul>
              <p>
                To exercise these rights, please contact us using the information provided below.
              </p>

              <h2 className="font-cormorant text-2xl font-bold mt-8 mb-4">Children's Privacy</h2>
              <p>
                Our website is not intended for children under 13 years of age. We do not intentionally collect personal data from individuals under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us.
              </p>

              <h2 className="font-cormorant text-2xl font-bold mt-8 mb-4">Changes to This Privacy Policy</h2>
              <p>
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. We encourage you to review this Privacy Policy periodically.
              </p>

              <h2 className="font-cormorant text-2xl font-bold mt-8 mb-4">Contact Us</h2>
              <p>
                If you have any questions or concerns about our Privacy Policy, please contact us at:
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

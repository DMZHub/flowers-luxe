"use client"
import React from 'react'
import Breadcrumbs from '../../components/Breadcrumbs'

export default function PrivacyPolicyPage() {
  const breadcrumbItems = [
    { name: 'Privacy Policy', url: '/privacy-policy' }
  ]

  return (
    <>
      {/* Breadcrumbs */}
      <div className="container-custom">
        <Breadcrumbs items={breadcrumbItems} />
      </div>

      {/* Privacy Policy Header */}
      <section className="bg-surface-muted py-16 md:py-24 relative overflow-hidden">
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
              Last Updated: June 4, 2025
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
                At FlowersLuxe, we value your privacy and are committed to protecting your personal information. 
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information when 
                you visit our website or make a purchase through our TeePublic store.
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
                <li>Product preferences and purchase history</li>
              </ul>

              <h3 className="font-medium text-xl mb-3">Automatically Collected Information</h3>
              <p>
                When you browse our website, we may collect certain information automatically, including:
              </p>
              <ul className="list-disc pl-6 mb-6">
                <li>IP address and browser information</li>
                <li>Device type and operating system</li>
                <li>Pages you visit and time spent on those pages</li>
                <li>Referral source and search terms</li>
                <li>Clickstream data and user interactions</li>
                <li>Cookies and similar tracking technologies</li>
              </ul>

              <h2 className="font-cormorant text-2xl font-bold mt-8 mb-4">How We Use Your Information</h2>
              <p>
                We use the information we collect for various purposes, including:
              </p>
              <ul className="list-disc pl-6 mb-6">
                <li>Processing and fulfilling orders for flower throw pillows</li>
                <li>Communicating with you about your order or inquiry</li>
                <li>Sending you product updates and marketing communications (if you've opted in)</li>
                <li>Improving our website, products, and customer service</li>
                <li>Personalizing your shopping experience</li>
                <li>Analyzing website usage and customer behavior</li>
                <li>Complying with legal obligations and preventing fraud</li>
              </ul>

              <h2 className="font-cormorant text-2xl font-bold mt-8 mb-4">Cookies and Tracking Technologies</h2>
              <p>
                We use cookies and similar tracking technologies to enhance your browsing experience and collect 
                information about your website usage. These technologies help us:
              </p>
              <ul className="list-disc pl-6 mb-6">
                <li>Remember your preferences and shopping cart items</li>
                <li>Analyze website traffic and user behavior</li>
                <li>Provide personalized content and recommendations</li>
                <li>Improve website functionality and performance</li>
              </ul>
              <p>
                You can manage your cookie preferences through your browser settings. However, disabling cookies 
                may affect certain website functionalities.
              </p>

              <h2 className="font-cormorant text-2xl font-bold mt-8 mb-4">Third-Party Services</h2>
              <p>
                We work with trusted third-party services to facilitate our business operations, including:
              </p>
              <ul className="list-disc pl-6 mb-6">
                <li><strong>TeePublic:</strong> Our primary platform for product sales and fulfillment</li>
                <li><strong>EmailJS:</strong> For contact form submissions and newsletter management</li>
                <li><strong>Analytics Services:</strong> To understand website usage and improve user experience</li>
                <li><strong>Payment Processors:</strong> For secure payment processing</li>
                <li><strong>Shipping Partners:</strong> For order fulfillment and delivery</li>
              </ul>
              <p>
                These service providers have access to your personal information only to perform specific tasks 
                on our behalf and are obligated to protect your information according to their respective privacy policies.
              </p>

              <h2 className="font-cormorant text-2xl font-bold mt-8 mb-4">Information Sharing and Disclosure</h2>
              <p>
                We do not sell, trade, or otherwise transfer your personal information to outside parties except 
                in the following circumstances:
              </p>
              <ul className="list-disc pl-6 mb-6">
                <li>To service providers who assist us in operating our website and conducting our business</li>
                <li>When required by law or to protect our rights and the rights of others</li>
                <li>In the event of a business transfer, merger, or acquisition</li>
                <li>With your explicit consent for specific purposes</li>
                <li>To prevent fraud and ensure transaction security</li>
              </ul>

              <h2 className="font-cormorant text-2xl font-bold mt-8 mb-4">Data Security</h2>
              <p>
                We implement appropriate security measures to protect your personal information from unauthorized 
                access, alteration, disclosure, or destruction. Our security measures include:
              </p>
              <ul className="list-disc pl-6 mb-6">
                <li>Secure Socket Layer (SSL) encryption for data transmission</li>
                <li>Regular security assessments and updates</li>
                <li>Limited access to personal information on a need-to-know basis</li>
                <li>Secure storage of customer data</li>
              </ul>
              <p>
                While we implement strict security measures, no online system is entirely immune to risks. 
                We cannot guarantee absolute security but are committed to protecting your information.
              </p>

              <h2 className="font-cormorant text-2xl font-bold mt-8 mb-4">Your Rights and Choices</h2>
              <p>
                Depending on your location, you may have certain rights regarding your personal information, including:
              </p>
              <ul className="list-disc pl-6 mb-6">
                <li><strong>Access:</strong> Request information about the personal data we hold about you</li>
                <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
                <li><strong>Deletion:</strong> Request deletion of your personal information (subject to legal obligations)</li>
                <li><strong>Restriction:</strong> Request restriction or objection to processing</li>
                <li><strong>Data Portability:</strong> Request a copy of your data in a portable format</li>
                <li><strong>Opt-out:</strong> Unsubscribe from marketing communications at any time</li>
              </ul>
              <p>
                To exercise these rights, please contact us using the information provided below.
              </p>

              <h2 className="font-cormorant text-2xl font-bold mt-8 mb-4">Children's Privacy</h2>
              <p>
                Our website is not intended for children under 13 years of age. We do not intentionally collect 
                personal data from individuals under 13. If you are a parent or guardian and believe your child 
                has provided us with personal information, please contact us immediately so we can remove such information.
              </p>

              <h2 className="font-cormorant text-2xl font-bold mt-8 mb-4">International Users</h2>
              <p>
                If you are accessing our website from outside the United States, please be aware that your 
                information may be transferred to, stored, and processed in the United States where our servers 
                are located. By using our website, you consent to this transfer.
              </p>

              <h2 className="font-cormorant text-2xl font-bold mt-8 mb-4">Changes to This Privacy Policy</h2>
              <p>
                We may update our Privacy Policy from time to time to reflect changes in our practices or 
                applicable laws. We will notify you of any material changes by:
              </p>
              <ul className="list-disc pl-6 mb-6">
                <li>Posting the new Privacy Policy on this page</li>
                <li>Updating the "Last Updated" date at the top of this policy</li>
                <li>Sending an email notification for significant changes (if you've subscribed to our newsletter)</li>
              </ul>
              <p>
                We encourage you to review this Privacy Policy periodically to stay informed about how we 
                protect your information.
              </p>

              <h2 className="font-cormorant text-2xl font-bold mt-8 mb-4">Contact Us</h2>
              <p>
                If you have any questions, concerns, or requests regarding this Privacy Policy or our data 
                practices, please contact us at:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg mt-4">
                <p><strong>Email:</strong> <a href="mailto:info@flowersluxe.com" className="text-primary hover:underline">info@flowersluxe.com</a></p>
                <p><strong>Subject Line:</strong> Privacy Policy Inquiry</p>
                <p><strong>Website:</strong> <a href="https://flowersluxe.com" className="text-primary hover:underline">flowersluxe.com</a></p>
              </div>
              
              <p className="mt-6">
                For specific questions about orders placed through TeePublic, please also refer to 
                <a href="https://www.teepublic.com/privacy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline ml-1">
                  TeePublic's Privacy Policy
                </a>.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
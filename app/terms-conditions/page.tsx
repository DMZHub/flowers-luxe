"use client"
import React from 'react'
import Breadcrumbs from '../../components/Breadcrumbs'

export default function TermsConditionsPage() {
  const breadcrumbItems = [
    { name: 'Terms & Conditions', url: '/terms-conditions' }
  ]

  return (
    <>
      {/* Breadcrumbs */}
      <div className="container-custom">
        <Breadcrumbs items={breadcrumbItems} />
      </div>

      {/* Terms & Conditions Header */}
      <section className="bg-surface-muted py-16 md:py-24 relative overflow-hidden">
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
              Last Updated: June 4, 2025
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
                Welcome to FlowersLuxe. By accessing our website and purchasing our flower throw pillows, 
                you agree to be bound by these Terms and Conditions, our Privacy Policy, and any other 
                policies referenced herein.
              </p>

              <h2 className="font-cormorant text-2xl font-bold mt-8 mb-4">1. Acceptance of Terms</h2>
              <p>
                By accessing and using this website (flowersluxe.com), you accept and agree to be bound 
                by these Terms and Conditions. If you do not agree with any part of these terms, you may 
                not use our website or services. Your continued use of the website constitutes acceptance 
                of any updates to these terms.
              </p>

              <h2 className="font-cormorant text-2xl font-bold mt-8 mb-4">2. Products and Services</h2>
              <p>
                FlowersLuxe specializes in flower throw pillows featuring unique botanical designs. Our 
                products are sold through our TeePublic store. When you make a purchase, you will be 
                redirected to TeePublic's platform, where you will be subject to their terms and conditions 
                in addition to ours.
              </p>
              <p>
                We strive to accurately display the colors, patterns, and details of our flower throw pillows, 
                but we cannot guarantee that your device's display will perfectly reflect the actual product 
                appearance. Minor variations in color and pattern placement may occur due to the handcrafted 
                nature of our products.
              </p>

              <h2 className="font-cormorant text-2xl font-bold mt-8 mb-4">3. Pricing and Payment</h2>
              <p>
                All prices for our flower throw pillows are listed in US dollars unless otherwise specified. 
                Prices are subject to change without notice. Promotional pricing and discounts may be 
                limited-time offers. All purchases are processed through TeePublic's secure payment system, 
                and we do not store your payment information.
              </p>
              <p>
                Sales tax may be applied to your order based on your shipping address and applicable local laws.
              </p>

              <h2 className="font-cormorant text-2xl font-bold mt-8 mb-4">4. Product Availability</h2>
              <p>
                We make every effort to ensure that our flower throw pillows are available as displayed on 
                our website. However, availability is subject to change without notice. In the rare event 
                that a product becomes unavailable after you place an order, we will notify you promptly 
                and offer suitable alternatives or a full refund.
              </p>

              <h2 className="font-cormorant text-2xl font-bold mt-8 mb-4">5. Shipping and Delivery</h2>
              <p>
                Shipping and delivery of flower throw pillows are handled by TeePublic and their shipping partners. 
                Shipping times and costs vary depending on your location and chosen shipping method. We are not 
                responsible for delays, damages, or issues arising during the shipping process that are beyond our control.
              </p>
              <p>
                Risk of loss and title for our flower throw pillows pass to you upon delivery to the shipping carrier.
              </p>

              <h2 className="font-cormorant text-2xl font-bold mt-8 mb-4">6. Returns and Refunds</h2>
              <p>
                Our return and refund policy follows TeePublic's standard policies. Generally, if you're not 
                satisfied with your flower throw pillow purchase, you may return it within 30 days for a 
                refund or exchange, subject to certain conditions:
              </p>
              <ul className="list-disc pl-6 mb-6">
                <li>Items must be in original condition</li>
                <li>Custom or personalized items may not be returnable</li>
                <li>Return shipping costs may apply</li>
                <li>Refunds are typically processed to the original payment method</li>
              </ul>
              <p>
                Please contact TeePublic directly for all return and refund requests, or reach out to us 
                for assistance navigating the process.
              </p>

              <h2 className="font-cormorant text-2xl font-bold mt-8 mb-4">7. Intellectual Property</h2>
              <p>
                All content on this website, including floral designs, text, graphics, logos, images, and 
                software, is the property of FlowersLuxe and is protected by copyright, trademark, and other 
                intellectual property laws. Our flower throw pillow designs are original creations and are 
                protected by copyright.
              </p>
              <p>
                You may not reproduce, distribute, modify, create derivative works of, publicly display, 
                publicly perform, republish, download, store, or transmit any of the material on our website 
                without our written consent, except for personal, non-commercial use.
              </p>

              <h2 className="font-cormorant text-2xl font-bold mt-8 mb-4">8. User Conduct</h2>
              <p>
                When using our website, you agree not to:
              </p>
              <ul className="list-disc pl-6 mb-6">
                <li>Use the website in any way that violates applicable laws or regulations</li>
                <li>Attempt to gain unauthorized access to any part of the website or its systems</li>
                <li>Interfere with the proper functioning of the website or its services</li>
                <li>Collect or harvest any personal information from other users</li>
                <li>Engage in any activity that could harm, disrupt, or overburden our services</li>
                <li>Use automated systems to access the website without permission</li>
                <li>Post or transmit any harmful, offensive, or inappropriate content</li>
              </ul>

              <h2 className="font-cormorant text-2xl font-bold mt-8 mb-4">9. Product Quality and Warranties</h2>
              <p>
                We take pride in the quality of our flower throw pillows and work with manufacturers who 
                maintain high standards. However, our products are sold "as is" without express warranties 
                beyond those required by law. We disclaim all implied warranties, including warranties of 
                merchantability and fitness for a particular purpose.
              </p>
              <p>
                If you receive a defective product, please contact us or TeePublic within a reasonable time 
                for assistance with replacement or refund.
              </p>

              <h2 className="font-cormorant text-2xl font-bold mt-8 mb-4">10. Limitation of Liability</h2>
              <p>
                FlowersLuxe and its affiliates shall not be liable for any indirect, incidental, special, 
                consequential, or punitive damages resulting from your use of or inability to use our website 
                or flower throw pillow products, including but not limited to damages for loss of profits, 
                data, or other intangible losses.
              </p>
              <p>
                Our total liability to you for any claims related to your use of the website or purchase 
                of products shall not exceed the amount you paid for the specific product giving rise to the claim.
              </p>

              <h2 className="font-cormorant text-2xl font-bold mt-8 mb-4">11. Indemnification</h2>
              <p>
                You agree to indemnify, defend, and hold harmless FlowersLuxe and its affiliates, officers, 
                directors, employees, and agents from any claims, liabilities, damages, costs, and expenses, 
                including reasonable attorney's fees, arising from your use of the website, violation of these 
                Terms and Conditions, or infringement of any third-party rights.
              </p>

              <h2 className="font-cormorant text-2xl font-bold mt-8 mb-4">12. Third-Party Links and Services</h2>
              <p>
                Our website may contain links to third-party websites or services, including TeePublic, 
                social media platforms, and other external sites. We are not responsible for the content, 
                privacy policies, or practices of these third-party sites. Your interactions with third-party 
                sites are governed by their respective terms and conditions.
              </p>

              <h2 className="font-cormorant text-2xl font-bold mt-8 mb-4">13. Governing Law and Jurisdiction</h2>
              <p>
                These Terms and Conditions are governed by the laws of the United States, without regard 
                to conflict of law provisions. Any disputes arising from these terms or your use of the 
                website shall be resolved in the appropriate courts of the United States.
              </p>

              <h2 className="font-cormorant text-2xl font-bold mt-8 mb-4">14. Severability</h2>
              <p>
                If any provision of these Terms and Conditions is found to be invalid, illegal, or 
                unenforceable, the remaining provisions shall continue to be valid and enforceable to 
                the fullest extent permitted by law.
              </p>

              <h2 className="font-cormorant text-2xl font-bold mt-8 mb-4">15. Changes to Terms</h2>
              <p>
                We reserve the right to modify these Terms and Conditions at any time. We will indicate 
                the date of the most recent update at the top of this page. Material changes will be 
                communicated through our website or email notification to subscribed users. Your continued 
                use of the website after any changes constitutes acceptance of the new Terms and Conditions.
              </p>

              <h2 className="font-cormorant text-2xl font-bold mt-8 mb-4">16. Entire Agreement</h2>
              <p>
                These Terms and Conditions, together with our Privacy Policy and any other policies 
                referenced herein, constitute the entire agreement between you and FlowersLuxe regarding 
                your use of the website and purchase of our flower throw pillows.
              </p>

              <h2 className="font-cormorant text-2xl font-bold mt-8 mb-4">17. Contact Information</h2>
              <p>
                If you have any questions about these Terms and Conditions, please contact us at:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg mt-4">
                <p><strong>Email:</strong> <a href="mailto:info@flowersluxe.com" className="text-primary hover:underline">info@flowersluxe.com</a></p>
                <p><strong>Subject Line:</strong> Terms and Conditions Inquiry</p>
                <p><strong>Website:</strong> <a href="https://flowersluxe.com" className="text-primary hover:underline">flowersluxe.com</a></p>
              </div>
              
              <p className="mt-6">
                For questions specifically related to orders, shipping, or returns, please also refer to 
                <a href="https://www.teepublic.com/terms" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline ml-1">
                  TeePublic's Terms of Service
                </a>.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
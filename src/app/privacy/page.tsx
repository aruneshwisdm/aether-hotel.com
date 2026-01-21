'use client';

import { motion } from 'framer-motion';
import { Navigation, Footer } from '@/components/layout';
import { ScrollToTop } from '@/components/ui';

export default function PrivacyPage() {
  return (
    <>
      <Navigation />

      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 bg-navy">
          <div className="container-luxury text-center">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-block text-gold text-sm font-medium tracking-[0.3em] uppercase mb-4"
            >
              Legal
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-white mb-6"
            >
              Privacy Policy
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-white/70 text-lg max-w-2xl mx-auto"
            >
              Your privacy is important to us. Learn how we collect, use, and protect your
              information.
            </motion.p>
          </div>
        </section>

        {/* Content Section */}
        <section className="section-padding">
          <div className="container-luxury max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="prose prose-lg max-w-none"
            >
              <div className="space-y-8">
                <div>
                  <h2 className="font-serif text-2xl text-navy mb-4">1. Information We Collect</h2>
                  <div className="text-gray-600 space-y-4">
                    <p>
                      We collect information you provide directly to us when making a reservation,
                      contacting us, or using our services. This may include your name, email
                      address, phone number, payment information, and any preferences you share
                      with us.
                    </p>
                    <p>
                      We may also automatically collect certain information when you visit our
                      website, including your IP address, browser type, device information, and
                      browsing behavior through cookies and similar technologies.
                    </p>
                  </div>
                </div>

                <div>
                  <h2 className="font-serif text-2xl text-navy mb-4">2. How We Use Your Information</h2>
                  <div className="text-gray-600 space-y-4">
                    <p>We use the information we collect to:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Process and manage your reservations</li>
                      <li>Communicate with you about your stay</li>
                      <li>Personalize your experience at Aether Hotel</li>
                      <li>Send promotional offers and updates (with your consent)</li>
                      <li>Improve our services and website functionality</li>
                      <li>Comply with legal obligations</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h2 className="font-serif text-2xl text-navy mb-4">3. Information Sharing</h2>
                  <div className="text-gray-600 space-y-4">
                    <p>
                      We do not sell, trade, or rent your personal information to third parties.
                      We may share your information with trusted service providers who assist us
                      in operating our hotel and website, processing payments, or providing
                      services to you.
                    </p>
                    <p>
                      We may also disclose your information when required by law or to protect
                      our rights, property, or safety, or that of our guests and the public.
                    </p>
                  </div>
                </div>

                <div>
                  <h2 className="font-serif text-2xl text-navy mb-4">4. Data Security</h2>
                  <div className="text-gray-600 space-y-4">
                    <p>
                      We implement appropriate technical and organizational measures to protect
                      your personal information against unauthorized access, alteration,
                      disclosure, or destruction. However, no method of transmission over the
                      internet is 100% secure.
                    </p>
                    <p>
                      Payment information is encrypted using industry-standard SSL technology
                      and processed through secure payment gateways.
                    </p>
                  </div>
                </div>

                <div>
                  <h2 className="font-serif text-2xl text-navy mb-4">5. Cookies</h2>
                  <div className="text-gray-600 space-y-4">
                    <p>
                      Our website uses cookies to enhance your browsing experience, analyze site
                      traffic, and personalize content. You can control cookie preferences through
                      your browser settings, though disabling cookies may affect website
                      functionality.
                    </p>
                  </div>
                </div>

                <div>
                  <h2 className="font-serif text-2xl text-navy mb-4">6. Your Rights</h2>
                  <div className="text-gray-600 space-y-4">
                    <p>You have the right to:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Access the personal information we hold about you</li>
                      <li>Request correction of inaccurate information</li>
                      <li>Request deletion of your personal information</li>
                      <li>Opt out of marketing communications</li>
                      <li>Withdraw consent where processing is based on consent</li>
                    </ul>
                    <p>
                      To exercise these rights, please contact us using the information provided
                      on our Contact page.
                    </p>
                  </div>
                </div>

                <div>
                  <h2 className="font-serif text-2xl text-navy mb-4">7. Changes to This Policy</h2>
                  <div className="text-gray-600 space-y-4">
                    <p>
                      We may update this privacy policy from time to time. We will notify you of
                      any material changes by posting the new policy on our website with an
                      updated effective date.
                    </p>
                  </div>
                </div>

                <div>
                  <h2 className="font-serif text-2xl text-navy mb-4">8. Contact Us</h2>
                  <div className="text-gray-600 space-y-4">
                    <p>
                      If you have any questions about this privacy policy or our data practices,
                      please contact us at privacy@aether-hotel.com or through our Contact page.
                    </p>
                  </div>
                </div>

                <div className="pt-8 border-t border-cream-dark">
                  <p className="text-sm text-gray-500">
                    Last updated: January 2025
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
      <ScrollToTop />
    </>
  );
}

'use client';

import { motion } from 'framer-motion';
import { Navigation, Footer } from '@/components/layout';
import { ScrollToTop } from '@/components/ui';

export default function TermsPage() {
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
              Terms & Conditions
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-white/70 text-lg max-w-2xl mx-auto"
            >
              Please read these terms carefully before making a reservation.
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
                  <h2 className="font-serif text-2xl text-navy mb-4">1. Reservation & Booking</h2>
                  <div className="text-gray-600 space-y-4">
                    <p>
                      All reservations are subject to availability and confirmation by Aether Hotel.
                      A valid credit card is required to guarantee your reservation. By making a
                      reservation, you agree to these terms and conditions.
                    </p>
                    <p>
                      Check-in time is 3:00 PM and check-out time is 11:00 AM. Early check-in and
                      late check-out may be available upon request and subject to availability,
                      with additional charges potentially applicable.
                    </p>
                  </div>
                </div>

                <div>
                  <h2 className="font-serif text-2xl text-navy mb-4">2. Cancellation Policy</h2>
                  <div className="text-gray-600 space-y-4">
                    <p>
                      Cancellations made 72 hours or more before the scheduled arrival date will
                      receive a full refund. Cancellations made within 72 hours of arrival will be
                      charged one night&apos;s stay.
                    </p>
                    <p>
                      No-shows will be charged the full amount of the reservation. Special rates
                      and promotional offers may have different cancellation policies, which will
                      be communicated at the time of booking.
                    </p>
                  </div>
                </div>

                <div>
                  <h2 className="font-serif text-2xl text-navy mb-4">3. Payment Terms</h2>
                  <div className="text-gray-600 space-y-4">
                    <p>
                      We accept major credit cards including Visa, MasterCard, American Express,
                      and Discover. Payment for the full stay is due upon check-in unless
                      otherwise arranged.
                    </p>
                    <p>
                      All rates are quoted in US Dollars and are subject to applicable taxes and
                      service charges. A credit card authorization may be taken upon check-in for
                      incidentals.
                    </p>
                  </div>
                </div>

                <div>
                  <h2 className="font-serif text-2xl text-navy mb-4">4. Guest Conduct</h2>
                  <div className="text-gray-600 space-y-4">
                    <p>
                      Guests are expected to conduct themselves in a manner that respects the
                      comfort and safety of other guests and staff. The hotel reserves the right
                      to refuse service or remove guests who violate this policy.
                    </p>
                    <p>
                      Aether Hotel is a non-smoking property. Smoking is prohibited in all indoor
                      areas, including guest rooms. A cleaning fee will be charged for any
                      violations.
                    </p>
                  </div>
                </div>

                <div>
                  <h2 className="font-serif text-2xl text-navy mb-4">5. Liability</h2>
                  <div className="text-gray-600 space-y-4">
                    <p>
                      Aether Hotel is not responsible for loss, theft, or damage to personal
                      belongings left in guest rooms or common areas. A safe is provided in each
                      room for valuables.
                    </p>
                    <p>
                      Guests assume responsibility for any damage to hotel property caused by
                      themselves or their guests during their stay.
                    </p>
                  </div>
                </div>

                <div>
                  <h2 className="font-serif text-2xl text-navy mb-4">6. Amendments</h2>
                  <div className="text-gray-600 space-y-4">
                    <p>
                      Aether Hotel reserves the right to modify these terms and conditions at any
                      time. Changes will be effective immediately upon posting to our website.
                      Continued use of our services constitutes acceptance of any changes.
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

'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { HiLocationMarker, HiPhone, HiMail, HiClock, HiCheck } from 'react-icons/hi';
import { Navigation, Footer } from '@/components/layout';
import { Button, ScrollToTop } from '@/components/ui';
import { contactInfo } from '@/lib/data';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().optional(),
  checkIn: z.string().optional(),
  checkOut: z.string().optional(),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    // Simulate form submission - replace with actual Formspree integration
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
    reset();
  };

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
              Contact
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-white mb-6"
            >
              Get In Touch
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-white/70 text-lg max-w-2xl mx-auto"
            >
              We would love to hear from you. Reach out with any questions or to begin
              planning your stay.
            </motion.p>
          </div>
        </section>

        {/* Contact Content */}
        <section className="section-padding">
          <div className="container-luxury">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="lg:col-span-3"
              >
                <h2 className="font-serif text-2xl md:text-3xl text-navy mb-2">
                  Send us a Message
                </h2>
                <div className="divider-gold mb-8" />

                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-cream p-8 rounded-sm text-center"
                  >
                    <div className="w-16 h-16 mx-auto rounded-full bg-gold/20 flex items-center justify-center mb-4">
                      <HiCheck className="w-8 h-8 text-gold" />
                    </div>
                    <h3 className="font-serif text-2xl text-navy mb-2">
                      Thank You!
                    </h3>
                    <p className="text-gray-600 mb-6">
                      Your message has been sent successfully. We will get back to you
                      shortly.
                    </p>
                    <Button
                      variant="secondary"
                      onClick={() => setIsSubmitted(false)}
                    >
                      Send Another Message
                    </Button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-charcoal mb-2"
                        >
                          Full Name *
                        </label>
                        <input
                          {...register('name')}
                          type="text"
                          id="name"
                          className="input-luxury"
                          placeholder="John Smith"
                        />
                        {errors.name && (
                          <p className="mt-1 text-sm text-red-500">
                            {errors.name.message}
                          </p>
                        )}
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-charcoal mb-2"
                        >
                          Email Address *
                        </label>
                        <input
                          {...register('email')}
                          type="email"
                          id="email"
                          className="input-luxury"
                          placeholder="john@example.com"
                        />
                        {errors.email && (
                          <p className="mt-1 text-sm text-red-500">
                            {errors.email.message}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div>
                        <label
                          htmlFor="phone"
                          className="block text-sm font-medium text-charcoal mb-2"
                        >
                          Phone Number
                        </label>
                        <input
                          {...register('phone')}
                          type="tel"
                          id="phone"
                          className="input-luxury"
                          placeholder="+1 (555) 000-0000"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="checkIn"
                          className="block text-sm font-medium text-charcoal mb-2"
                        >
                          Check-in Date
                        </label>
                        <input
                          {...register('checkIn')}
                          type="date"
                          id="checkIn"
                          className="input-luxury"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="checkOut"
                          className="block text-sm font-medium text-charcoal mb-2"
                        >
                          Check-out Date
                        </label>
                        <input
                          {...register('checkOut')}
                          type="date"
                          id="checkOut"
                          className="input-luxury"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-charcoal mb-2"
                      >
                        Message *
                      </label>
                      <textarea
                        {...register('message')}
                        id="message"
                        rows={5}
                        className="input-luxury resize-none"
                        placeholder="How can we assist you?"
                      />
                      {errors.message && (
                        <p className="mt-1 text-sm text-red-500">
                          {errors.message.message}
                        </p>
                      )}
                    </div>

                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      isLoading={isSubmitting}
                    >
                      Send Message
                    </Button>
                  </form>
                )}
              </motion.div>

              {/* Contact Info & Map */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                className="lg:col-span-2 space-y-8"
              >
                {/* Contact Details */}
                <div className="bg-cream p-8 rounded-sm">
                  <h3 className="font-serif text-xl text-navy mb-6">
                    Contact Information
                  </h3>

                  <ul className="space-y-6">
                    <li className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0">
                        <HiLocationMarker className="w-5 h-5 text-gold" />
                      </div>
                      <div>
                        <p className="font-medium text-navy">Address</p>
                        <p className="text-gray-600 text-sm mt-1">
                          {contactInfo.address.street}
                          <br />
                          {contactInfo.address.city}, {contactInfo.address.state}{' '}
                          {contactInfo.address.zip}
                        </p>
                      </div>
                    </li>

                    <li className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0">
                        <HiPhone className="w-5 h-5 text-gold" />
                      </div>
                      <div>
                        <p className="font-medium text-navy">Phone</p>
                        <a
                          href={`tel:${contactInfo.phone}`}
                          className="text-gray-600 text-sm mt-1 hover:text-gold transition-colors"
                        >
                          {contactInfo.phone}
                        </a>
                      </div>
                    </li>

                    <li className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0">
                        <HiMail className="w-5 h-5 text-gold" />
                      </div>
                      <div>
                        <p className="font-medium text-navy">Email</p>
                        <a
                          href={`mailto:${contactInfo.email}`}
                          className="text-gray-600 text-sm mt-1 hover:text-gold transition-colors"
                        >
                          {contactInfo.email}
                        </a>
                      </div>
                    </li>

                    <li className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0">
                        <HiClock className="w-5 h-5 text-gold" />
                      </div>
                      <div>
                        <p className="font-medium text-navy">Hours</p>
                        <div className="text-gray-600 text-sm mt-1 space-y-1">
                          <p>Reception: {contactInfo.hours.reception}</p>
                          <p>Restaurant: {contactInfo.hours.restaurant}</p>
                          <p>Spa: {contactInfo.hours.spa}</p>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>

                {/* Map */}
                <div className="rounded-sm overflow-hidden h-[300px]">
                  <iframe
                    src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.7152203584424!2d${contactInfo.coordinates.lng}!3d${contactInfo.coordinates.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDAxJzEwLjIiTiAxMTjCsDI5JzI4LjMiVw!5e0!3m2!1sen!2sus!4v1234567890`}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Aether Hotel Location"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <ScrollToTop />
    </>
  );
}

'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaInstagram, FaFacebookF, FaTwitter } from 'react-icons/fa';
import { HiLocationMarker, HiPhone, HiMail } from 'react-icons/hi';
import { contactInfo, footerLinks } from '@/lib/data';

const socialLinks = [
  { icon: FaInstagram, href: contactInfo.social.instagram, label: 'Instagram' },
  { icon: FaFacebookF, href: contactInfo.social.facebook, label: 'Facebook' },
  { icon: FaTwitter, href: contactInfo.social.twitter, label: 'Twitter' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy text-cream">
      <div className="container-luxury section-padding">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1"
          >
            <Link href="/" className="inline-block mb-6">
              <span className="font-serif text-3xl font-medium tracking-wider text-white">
                AETHER
              </span>
            </Link>
            <p className="text-cream/70 text-sm leading-relaxed mb-6">
              Boutique luxury nestled in the heart of nature. Experience tranquility,
              refined comfort, and world-class hospitality at Aether Hotel.
            </p>
            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-cream/80 hover:bg-gold hover:text-navy transition-all duration-300"
                  aria-label={label}
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="font-serif text-lg text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {footerLinks.quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-cream/70 hover:text-gold transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/booking"
                  className="text-cream/70 hover:text-gold transition-colors duration-300 text-sm"
                >
                  Book a Stay
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="font-serif text-lg text-white mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <HiLocationMarker className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                <span className="text-cream/70 text-sm">
                  {contactInfo.address.street}
                  <br />
                  {contactInfo.address.city}, {contactInfo.address.state}{' '}
                  {contactInfo.address.zip}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <HiPhone className="w-5 h-5 text-gold flex-shrink-0" />
                <a
                  href={`tel:${contactInfo.phone}`}
                  className="text-cream/70 hover:text-gold transition-colors duration-300 text-sm"
                >
                  {contactInfo.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <HiMail className="w-5 h-5 text-gold flex-shrink-0" />
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="text-cream/70 hover:text-gold transition-colors duration-300 text-sm"
                >
                  {contactInfo.email}
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Hours */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="font-serif text-lg text-white mb-6">Hours</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex justify-between text-cream/70">
                <span>Reception</span>
                <span>{contactInfo.hours.reception}</span>
              </li>
              <li className="flex justify-between text-cream/70">
                <span>Restaurant</span>
                <span>{contactInfo.hours.restaurant}</span>
              </li>
              <li className="flex justify-between text-cream/70">
                <span>Spa</span>
                <span>{contactInfo.hours.spa}</span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-cream/50 text-sm">
              &copy; {currentYear} Aether Hotel. All rights reserved.
            </p>
            <div className="flex gap-6">
              {footerLinks.legal.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-cream/50 hover:text-cream transition-colors duration-300 text-sm"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { HiCheck, HiCalendar, HiUser, HiClipboardList } from 'react-icons/hi';
import { Navigation, Footer } from '@/components/layout';
import { Button, ScrollToTop } from '@/components/ui';
import { rooms } from '@/lib/data';
import { formatPrice, calculateNights, generateConfirmationNumber } from '@/lib/utils';

const bookingSchema = z.object({
  // Step 1
  checkIn: z.string().min(1, 'Check-in date is required'),
  checkOut: z.string().min(1, 'Check-out date is required'),
  guests: z.string().min(1, 'Number of guests is required'),
  roomType: z.string().min(1, 'Room preference is required'),
  // Step 2
  fullName: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  specialRequests: z.string().optional(),
  // Step 3
  terms: z.boolean().refine((val) => val === true, 'You must accept the terms'),
});

type BookingFormData = z.infer<typeof bookingSchema>;

const steps = [
  { id: 1, title: 'Stay Details', icon: HiCalendar },
  { id: 2, title: 'Guest Information', icon: HiUser },
  { id: 3, title: 'Review & Submit', icon: HiClipboardList },
];

function BookingContent() {
  const searchParams = useSearchParams();
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [confirmationNumber, setConfirmationNumber] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
    trigger,
  } = useForm<BookingFormData>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      roomType: searchParams.get('room') || '',
      guests: '2',
      terms: false,
    },
  });

  const watchedValues = watch();

  // Calculate total price
  const selectedRoom = rooms.find((r) => r.slug === watchedValues.roomType);
  const nights =
    watchedValues.checkIn && watchedValues.checkOut
      ? calculateNights(
          new Date(watchedValues.checkIn),
          new Date(watchedValues.checkOut)
        )
      : 0;
  const totalPrice = selectedRoom ? selectedRoom.price * nights : 0;

  const validateStep = async (step: number) => {
    let fieldsToValidate: (keyof BookingFormData)[] = [];

    switch (step) {
      case 1:
        fieldsToValidate = ['checkIn', 'checkOut', 'guests', 'roomType'];
        break;
      case 2:
        fieldsToValidate = ['fullName', 'email', 'phone'];
        break;
      case 3:
        fieldsToValidate = ['terms'];
        break;
    }

    const result = await trigger(fieldsToValidate);
    return result;
  };

  const nextStep = async () => {
    const isValid = await validateStep(currentStep);
    if (isValid && currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const onSubmit = async (data: BookingFormData) => {
    setIsSubmitting(true);
    // Simulate submission
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log('Booking submitted:', data);
    setConfirmationNumber(generateConfirmationNumber());
    setIsSubmitting(false);
  };

  if (confirmationNumber) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-2xl mx-auto text-center py-12"
      >
        <div className="w-20 h-20 mx-auto rounded-full bg-gold/20 flex items-center justify-center mb-6">
          <HiCheck className="w-10 h-10 text-gold" />
        </div>
        <h2 className="font-serif text-3xl text-navy mb-4">Booking Confirmed!</h2>
        <p className="text-gray-600 mb-8">
          Thank you for choosing Aether Hotel. Your reservation has been confirmed.
        </p>

        <div className="bg-cream p-8 rounded-sm mb-8">
          <p className="text-sm text-gray-500 mb-2">Confirmation Number</p>
          <p className="text-2xl font-serif text-navy">{confirmationNumber}</p>
        </div>

        <div className="text-left bg-white border border-cream-dark p-6 rounded-sm space-y-4">
          <div className="flex justify-between">
            <span className="text-gray-500">Room</span>
            <span className="font-medium text-navy">{selectedRoom?.name}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500">Check-in</span>
            <span className="font-medium text-navy">{watchedValues.checkIn}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500">Check-out</span>
            <span className="font-medium text-navy">{watchedValues.checkOut}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500">Guests</span>
            <span className="font-medium text-navy">{watchedValues.guests}</span>
          </div>
          <div className="flex justify-between pt-4 border-t border-cream-dark">
            <span className="text-gray-500">Total</span>
            <span className="text-xl font-serif text-navy">
              {formatPrice(totalPrice)}
            </span>
          </div>
        </div>

        <p className="text-sm text-gray-500 mt-8">
          A confirmation email has been sent to {watchedValues.email}
        </p>
      </motion.div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      {/* Progress Indicator */}
      <div className="flex items-center justify-center mb-12">
        {steps.map((step, index) => (
          <div key={step.id} className="flex items-center">
            <div
              className={`flex items-center justify-center w-12 h-12 rounded-full transition-colors duration-300 ${
                currentStep >= step.id
                  ? 'bg-gold text-navy'
                  : 'bg-cream text-gray-400'
              }`}
            >
              {currentStep > step.id ? (
                <HiCheck className="w-6 h-6" />
              ) : (
                <step.icon className="w-6 h-6" />
              )}
            </div>
            <span
              className={`ml-3 text-sm font-medium hidden sm:block ${
                currentStep >= step.id ? 'text-navy' : 'text-gray-400'
              }`}
            >
              {step.title}
            </span>
            {index < steps.length - 1 && (
              <div
                className={`w-12 md:w-24 h-0.5 mx-4 transition-colors duration-300 ${
                  currentStep > step.id ? 'bg-gold' : 'bg-cream-dark'
                }`}
              />
            )}
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <AnimatePresence mode="wait">
          {/* Step 1: Stay Details */}
          {currentStep === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              <h2 className="font-serif text-2xl text-navy mb-6">Stay Details</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-charcoal mb-2">
                    Check-in Date *
                  </label>
                  <input
                    {...register('checkIn')}
                    type="date"
                    className="input-luxury"
                    min={new Date().toISOString().split('T')[0]}
                  />
                  {errors.checkIn && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.checkIn.message}
                    </p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-charcoal mb-2">
                    Check-out Date *
                  </label>
                  <input
                    {...register('checkOut')}
                    type="date"
                    className="input-luxury"
                    min={watchedValues.checkIn || new Date().toISOString().split('T')[0]}
                  />
                  {errors.checkOut && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.checkOut.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-charcoal mb-2">
                    Number of Guests *
                  </label>
                  <select {...register('guests')} className="input-luxury">
                    {[1, 2, 3, 4, 5, 6].map((num) => (
                      <option key={num} value={num}>
                        {num} Guest{num > 1 ? 's' : ''}
                      </option>
                    ))}
                  </select>
                  {errors.guests && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.guests.message}
                    </p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-charcoal mb-2">
                    Room Preference *
                  </label>
                  <select {...register('roomType')} className="input-luxury">
                    <option value="">Select a room</option>
                    {rooms.map((room) => (
                      <option key={room.slug} value={room.slug}>
                        {room.name} - {formatPrice(room.price)}/night
                      </option>
                    ))}
                  </select>
                  {errors.roomType && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.roomType.message}
                    </p>
                  )}
                </div>
              </div>
            </motion.div>
          )}

          {/* Step 2: Guest Information */}
          {currentStep === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              <h2 className="font-serif text-2xl text-navy mb-6">
                Guest Information
              </h2>

              <div>
                <label className="block text-sm font-medium text-charcoal mb-2">
                  Full Name *
                </label>
                <input
                  {...register('fullName')}
                  type="text"
                  className="input-luxury"
                  placeholder="John Smith"
                />
                {errors.fullName && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.fullName.message}
                  </p>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-charcoal mb-2">
                    Email Address *
                  </label>
                  <input
                    {...register('email')}
                    type="email"
                    className="input-luxury"
                    placeholder="john@example.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.email.message}
                    </p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-charcoal mb-2">
                    Phone Number *
                  </label>
                  <input
                    {...register('phone')}
                    type="tel"
                    className="input-luxury"
                    placeholder="+1 (555) 000-0000"
                  />
                  {errors.phone && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.phone.message}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-charcoal mb-2">
                  Special Requests
                </label>
                <textarea
                  {...register('specialRequests')}
                  rows={4}
                  className="input-luxury resize-none"
                  placeholder="Any special requests or preferences?"
                />
              </div>
            </motion.div>
          )}

          {/* Step 3: Review & Submit */}
          {currentStep === 3 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              <h2 className="font-serif text-2xl text-navy mb-6">
                Review Your Booking
              </h2>

              <div className="bg-cream p-6 rounded-sm space-y-4">
                <h3 className="font-serif text-lg text-navy">Stay Details</h3>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-gray-500">Room</span>
                    <p className="font-medium text-navy">{selectedRoom?.name}</p>
                  </div>
                  <div>
                    <span className="text-gray-500">Guests</span>
                    <p className="font-medium text-navy">{watchedValues.guests}</p>
                  </div>
                  <div>
                    <span className="text-gray-500">Check-in</span>
                    <p className="font-medium text-navy">{watchedValues.checkIn}</p>
                  </div>
                  <div>
                    <span className="text-gray-500">Check-out</span>
                    <p className="font-medium text-navy">{watchedValues.checkOut}</p>
                  </div>
                </div>
              </div>

              <div className="bg-cream p-6 rounded-sm space-y-4">
                <h3 className="font-serif text-lg text-navy">Guest Information</h3>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-gray-500">Name</span>
                    <p className="font-medium text-navy">{watchedValues.fullName}</p>
                  </div>
                  <div>
                    <span className="text-gray-500">Email</span>
                    <p className="font-medium text-navy">{watchedValues.email}</p>
                  </div>
                  <div>
                    <span className="text-gray-500">Phone</span>
                    <p className="font-medium text-navy">{watchedValues.phone}</p>
                  </div>
                </div>
                {watchedValues.specialRequests && (
                  <div className="text-sm">
                    <span className="text-gray-500">Special Requests</span>
                    <p className="font-medium text-navy">
                      {watchedValues.specialRequests}
                    </p>
                  </div>
                )}
              </div>

              <div className="bg-navy text-white p-6 rounded-sm">
                <div className="flex justify-between items-center mb-4">
                  <span>
                    {nights} Night{nights > 1 ? 's' : ''} x{' '}
                    {formatPrice(selectedRoom?.price || 0)}
                  </span>
                  <span>{formatPrice(totalPrice)}</span>
                </div>
                <div className="flex justify-between items-center pt-4 border-t border-white/20">
                  <span className="text-xl font-medium">Estimated Total</span>
                  <span className="text-2xl font-serif">{formatPrice(totalPrice)}</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <input
                  {...register('terms')}
                  type="checkbox"
                  id="terms"
                  className="mt-1 w-4 h-4 text-gold border-gray-300 rounded focus:ring-gold"
                />
                <label htmlFor="terms" className="text-sm text-gray-600">
                  I agree to the{' '}
                  <a href="/terms" className="text-gold hover:underline">
                    Terms & Conditions
                  </a>{' '}
                  and{' '}
                  <a href="/privacy" className="text-gold hover:underline">
                    Privacy Policy
                  </a>
                  . I understand that my reservation is subject to availability and
                  the hotel cancellation policy.
                </label>
              </div>
              {errors.terms && (
                <p className="text-sm text-red-500">{errors.terms.message}</p>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-10 pt-6 border-t border-cream-dark">
          <Button
            type="button"
            variant="ghost"
            onClick={prevStep}
            disabled={currentStep === 1}
            className={currentStep === 1 ? 'invisible' : ''}
          >
            Back
          </Button>

          {currentStep < 3 ? (
            <Button type="button" variant="primary" onClick={nextStep}>
              Next Step
            </Button>
          ) : (
            <Button
              type="submit"
              variant="primary"
              size="lg"
              isLoading={isSubmitting}
            >
              Complete Booking
            </Button>
          )}
        </div>
      </form>
    </div>
  );
}

export default function BookingPage() {
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
              Reservations
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-white mb-6"
            >
              Book Your Stay
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-white/70 text-lg max-w-2xl mx-auto"
            >
              Begin your journey to tranquility. Complete your reservation in just a
              few simple steps.
            </motion.p>
          </div>
        </section>

        {/* Booking Form */}
        <section className="section-padding">
          <div className="container-luxury">
            <Suspense fallback={<div className="text-center py-12">Loading...</div>}>
              <BookingContent />
            </Suspense>
          </div>
        </section>
      </main>

      <Footer />
      <ScrollToTop />
    </>
  );
}

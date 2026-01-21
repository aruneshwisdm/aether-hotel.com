1. AETHER HOTEL
Domains :aether-hotel.com

Pages & Specs:
/home
- Full-screen hero with video background (loop)
- Scroll-triggered fade-in sections
- 3-column amenities grid
- Testimonials carousel
- Footer with social links

/rooms  
- Filterable room cards (Suite, Deluxe, Standard)
- Hover zoom effect on images
- Quick-view modal with image gallery
- Price display, "Book Now" CTA

/about
- Split layout: image + text
- Team section with hover effects
- Awards/recognition badges

/contact
- Embedded Google Maps
- Contact form (Formspree)
- Location details, phone, email

/booking-inquiry
- Multi-step form (dates, room type, guests, details)
- Date picker component
- Form validation

Key Features:

Mobile-first responsive
Page transitions with Framer Motion
Lazy loading images
Contact form with email notifications
90+ Lighthouse score


Create a new Next.js 14 project called "aether-hotel" with the following setup:
- Use App Router
- Install Tailwind CSS
- Install Framer Motion for animations
- Install react-icons for icons
- Set up a clean folder structure with /app, /components, /lib, /public directories

Configure Tailwind with a luxury hotel color palette:
- Primary: Deep navy (#0F172A)
- Secondary: Warm gold (#D4AF37)
- Accent: Soft cream (#F8F6F0)
- Text: Charcoal (#1E293B)

Set up custom fonts using next/font with a serif for headings (Playfair Display) and sans-serif for body (Inter).

Create a basic layout.js with a navigation header and footer.

Build the following components:

1. /components/Navigation.jsx:
- Sticky header with transparent background that becomes solid on scroll
- Logo on left (text: "AETHER" in Playfair Display)
- Navigation links: Home, Rooms, About, Contact (centered)
- "Book Now" button on right (gold background, hover effect)
- Mobile: Hamburger menu with slide-in drawer
- Smooth scroll behavior for anchor links
- Add scroll-triggered animation using Framer Motion

2. /components/Footer.jsx:
- Three columns: About Aether (brief text), Quick Links (Home, Rooms, About, Contact), Contact Info (address, phone, email)
- Social media icons (Instagram, Facebook, Twitter)
- Copyright text at bottom
- Dark navy background with cream text
- Responsive: Stack columns on mobile

Use Tailwind for all styling. Make it feel premium with proper spacing and typography.


Create /components/HeroSection.jsx:

- Full viewport height hero section
- Background: Use a placeholder gradient for now (we'll add video later)
- Centered content with:
  - Large heading: "Escape to Tranquility" (Playfair Display, 72px)
  - Subheading: "Boutique luxury in the heart of nature" (Inter, 24px)
  - Two CTAs side by side: "Explore Rooms" and "Book Your Stay"
- Scroll indicator at bottom (animated down arrow)
- Parallax effect on background using Framer Motion
- Fade-in animation for text on load
- Responsive: Adjust font sizes for mobile

Style the CTAs as premium buttons with hover states:
- Primary button: Gold background, white text
- Secondary button: Transparent with gold border
- Both should have smooth hover transitions

Create these homepage sections in /components/home/:

1. AmenitiesSection.jsx:
- Section title: "Refined Comforts"
- 3-column grid (responsive: 1 column on mobile)
- Each card has an icon, title, and brief description
- Amenities: "Fine Dining" (restaurant icon), "Spa & Wellness" (spa icon), "Concierge Service" (bell icon)
- Cards have subtle hover lift effect
- Scroll-triggered fade-in animation for each card (staggered)

2. ExperienceSection.jsx:
- Split layout: Large image on left (50%), text content on right (50%)
- Heading: "The Aether Experience"
- 2-3 paragraphs of placeholder text about luxury and nature
- "Learn More" link with arrow
- Image should have subtle parallax on scroll
- Swap to stacked layout on mobile

3. TestimonialsSection.jsx:
- Section title: "Guest Stories"
- Simple carousel with 3 testimonials (auto-rotate every 5 seconds)
- Each testimonial: Quote text, guest name, location
- Dots navigation at bottom
- Fade transition between testimonials
- Use Framer Motion AnimatePresence

Apply consistent section padding, max-width containers, and scroll-triggered animations to all sections.

Create /app/page.js (homepage):

Import and assemble all homepage components in this order:
1. HeroSection
2. AmenitiesSection
3. ExperienceSection
4. TestimonialsSection

Add smooth scroll behavior and page-wide animations:
- Fade in on initial load
- Scroll progress indicator (thin gold line at top showing scroll position)
- Smooth transitions between sections

Ensure proper spacing between sections and responsive behavior.

Create room-related components:

1. /components/rooms/RoomCard.jsx:
- Card with image (placeholder), room name, brief description, price per night
- Hover effect: Image zooms slightly, overlay appears with "View Details" button
- Props: image, title, description, price, slug
- Use Framer Motion for hover animations

2. /components/rooms/RoomFilter.jsx:
- Filter buttons: All Rooms, Suites, Deluxe, Standard
- Active state styling (gold background)
- Click to filter room grid
- Smooth transition when filtering

3. /components/rooms/RoomModal.jsx:
- Modal overlay (click outside to close)
- Image gallery with thumbnails
- Room details: name, description, amenities list, price
- "Book This Room" CTA button
- Close button (X) in top right
- Smooth open/close animations with Framer Motion
- Prevent body scroll when modal is open

Create /app/rooms/page.js:

- Page heading: "Our Rooms & Suites"
- Introductory paragraph
- RoomFilter component
- Grid of RoomCard components (2 columns on desktop, 1 on mobile)
- Create 6 placeholder rooms:
  * 2 Suites (Penthouse Suite, Garden Suite)
  * 2 Deluxe (Ocean View Deluxe, Mountain Deluxe)
  * 2 Standard (Classic Room, Courtyard Room)
- Implement filtering logic with useState
- Add fade-in animation when filtering
- Room cards should open RoomModal on click

Use proper SEO metadata for the page.

Create /app/about/page.js:

Sections:
1. Hero section with image and "Our Story" heading
2. Brand story section:
   - Split layout: text on left, image collage on right
   - 3-4 paragraphs about the hotel's philosophy
   - Emphasis on luxury, nature, tranquility
3. Team section:
   - "Meet Our Team" heading
   - Grid of team members (placeholder: General Manager, Head Chef, Spa Director)
   - Each card: photo, name, title, short bio
   - Hover effect reveals full bio
4. Values section:
   - 4 value cards in a row (Sustainability, Excellence, Hospitality, Innovation)
   - Each has icon, title, brief description

Add smooth scroll animations and maintain consistent styling with homepage.

Create /app/contact/page.js:

Layout:
1. Page hero with "Get In Touch" heading
2. Two-column layout (60/40 split):
   
   Left column - Contact Form:
   - Fields: Name, Email, Phone, Check-in Date, Check-out Date, Message
   - Use react-hook-form for validation
   - Submit button with loading state
   - Form should use Formspree (I'll provide endpoint later)
   - Success/error messages
   
   Right column - Contact Information:
   - Address with map icon
   - Phone with phone icon
   - Email with email icon
   - Business hours
   - Social media links
   - Embedded Google Maps iframe (use placeholder coordinates)

Style form inputs with luxury design:
- Subtle borders, focus states with gold accent
- Proper validation states (red for errors)
- Floating labels or clean placeholder text

Add form submission animation (success confetti or smooth transition).

Create /app/booking/page.js:

Multi-step booking form (3 steps):

Step 1 - Stay Details:
- Check-in date (date picker)
- Check-out date (date picker)
- Number of guests (dropdown: 1-6)
- Room preference (dropdown: Suite, Deluxe, Standard)

Step 2 - Guest Information:
- Full name
- Email
- Phone
- Special requests (textarea)

Step 3 - Review & Submit:
- Summary of selections
- Total estimated price calculation
- Terms checkbox
- Submit button

Features:
- Progress indicator showing current step (1 of 3, 2 of 3, etc.)
- "Next" and "Back" buttons
- Form validation on each step
- Smooth transitions between steps using Framer Motion
- Success page after submission with confirmation number

Use react-hook-form and implement step-by-step state management.

Add these finishing touches across the site:

1. Create /components/PageTransition.jsx:
- Wrap pages with smooth fade transitions
- Use Framer Motion AnimatePresence
- Apply to all page navigations

2. Create /components/ScrollToTop.jsx:
- Button that appears when user scrolls down
- Smooth scroll to top on click
- Gold circular button with up arrow
- Fixed position, bottom-right corner

3. Add loading states:
- Create /components/Loading.jsx with elegant loading spinner
- Show on page navigation

4. Optimize images:
- Set up Next.js Image component wrapper
- Add blur placeholders
- Lazy loading

5. Add micro-interactions:
- Button hover scale effects
- Card hover shadows
- Link underline animations
- Smooth color transitions

6. Mobile optimizations:
- Touch-friendly tap targets (min 44px)
- Swipe gestures for carousel
- Optimize font sizes
- Test navigation drawer

Run through entire site and ensure consistent spacing, typography, and animations.

Add placeholder content and prepare for real assets:

1. Create placeholder images:
- Use Unsplash API or placeholder.com for temporary images
- Set up image sizes: Hero (1920x1080), Rooms (800x600), Team (400x400)

2. Add realistic placeholder text:
- Replace "Lorem ipsum" with hotel-specific content
- Room descriptions, amenities lists, testimonials
- Keep it luxurious and on-brand

3. Create /lib/data.js:
- Export arrays of room data, testimonials, team members
- Makes it easy to update content later
- Centralized content management

4. Set up form handling:
- Integrate Formspree for contact and booking forms
- Add environment variables for API keys
- Test form submissions

5. Create a README.md:
- Document the project structure
- List all dependencies
- Explain how to run locally and deploy

Run through this checklist:

1. Performance:
- Run Lighthouse audit
- Optimize images
- Minimize JavaScript bundles
- Add loading="lazy" to images

2. SEO:
- Add meta descriptions to all pages
- Set up proper heading hierarchy (h1, h2, h3)
- Add alt text to all images
- Create sitemap.xml
- Add robots.txt

3. Accessibility:
- Check color contrast ratios
- Add ARIA labels to interactive elements
- Test keyboard navigation
- Ensure form labels are properly associated

4. Mobile testing:
- Test on mobile viewport
- Check touch interactions
- Verify responsive breakpoints
- Test hamburger menu

5. Browser compatibility:
- Test in Chrome, Safari, Firefox
- Check for any CSS issues
- Verify animations work smoothly

6. Deployment preparation:
- Create .env.local for environment variables
- Set up .gitignore
- Prepare for Vercel deployment
- Document any required environment variables

Once all checks pass, the site is ready for deployment!


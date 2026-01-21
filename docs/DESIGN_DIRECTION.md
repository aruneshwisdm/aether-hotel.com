# Design Direction: Luxury Refined

## Aesthetic Overview

Aether Hotel follows the **Luxury Refined** aesthetic direction - characterized by elegant restraint, sophisticated color palettes, generous whitespace, and deliberate motion design.

## Visual Identity

### Color Palette

| Color | Hex | Usage |
|-------|-----|-------|
| Navy (Primary) | `#0F172A` | Headers, backgrounds, text |
| Gold (Secondary) | `#D4AF37` | Accents, CTAs, highlights |
| Cream (Accent) | `#F8F6F0` | Backgrounds, cards |
| White | `#FFFFFF` | Base background |
| Charcoal | `#1E293B` | Body text |

### Typography

**Headings:** Playfair Display (Serif)
- Elegant, high-contrast serif with classic proportions
- Used for h1-h6, hero text, section titles
- Weight range: 400-700

**Body:** Inter (Sans-serif)
- Clean, highly legible sans-serif
- Used for body text, navigation, buttons, forms
- Weight range: 300-700

### Typography Scale (Perfect Fourth: 1.333)

| Size | Desktop | Mobile (clamp) |
|------|---------|----------------|
| 6xl | 90px | 50-90px |
| 5xl | 67px | 38-67px |
| 4xl | 50px | 32-50px |
| 3xl | 38px | 28-38px |
| 2xl | 28px | - |
| xl | 21px | - |
| lg | 18px | - |
| base | 16px | - |

## Motion Philosophy

### Principles
1. **Deliberate** - Every animation serves a purpose
2. **Smooth** - Using luxury easing curves
3. **Orchestrated** - Page load animations are coordinated

### Easing Curves
- **Luxury Ease:** `cubic-bezier(0.16, 1, 0.3, 1)` - Primary for entrances
- **Ease Out:** `cubic-bezier(0, 0, 0.2, 1)` - For exits
- **Ease In Out:** `cubic-bezier(0.4, 0, 0.2, 1)` - For state changes

### Durations
- Fast: 150ms (micro-interactions)
- Normal: 300ms (most transitions)
- Slow: 500ms (page elements)
- Slower: 700ms (complex animations)

### Page Load Sequence
1. Navigation slides down (0-0.6s)
2. Hero content fades up with stagger (0.2-1.2s)
3. Scroll indicator bounces (1.2s+)

## Anti-Patterns to Avoid

❌ **Don't use:**
- Gradient backgrounds (keep solid colors)
- Multiple accent colors
- Complex decorative patterns
- Cluttered layouts
- Excessive animation
- Generic stock photos

✅ **Do use:**
- Generous whitespace
- Single gold accent sparingly
- High-quality, atmospheric imagery
- Subtle shadows and depth
- Purposeful motion
- Clean, minimal interfaces

## Component Styling Guidelines

### Buttons
- Primary: Gold background, navy text, subtle hover lift
- Secondary: Transparent with gold border
- Uppercase text, wide letter-spacing
- Smooth hover transitions

### Cards
- White/cream backgrounds
- Subtle shadows on hover
- Gold accent on interaction
- Generous padding

### Forms
- Clean single-line inputs
- Gold focus states
- Minimal styling until active
- Clear validation feedback

### Images
- Slight zoom on hover
- Overlay transitions
- Quality over quantity
- Atmospheric, not literal

## Spacing Guidelines

Section padding: 96-128px vertical
Container max-width: 1400px
Component padding: 24-48px
Generous margins between sections

## Accessibility Considerations

- Color contrast: WCAG 2.1 AA compliant
- Focus states: Gold 2px outline
- Touch targets: Minimum 44px
- Reduced motion: Respect prefers-reduced-motion

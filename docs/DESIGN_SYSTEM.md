# ReClaim Pro - Design System

## Overview
Professional design system for ReClaim Pro, a modern climate-tech platform. Built with dark mode first, sustainability-focused aesthetics, and industry-grade polish.

---

## 🎨 Color System

### Primary Color - Eco-Friendly Emerald Green
**Purpose:** Main brand color representing sustainability and growth

```css
--color-primary: #10b981       /* Main brand green (Emerald 500) */
--color-primary-400: #34d399   /* Light variant */
--color-primary-600: #059669   /* Dark variant */
```

**Usage:**
- Primary CTA buttons
- Success states
- Icons and accent elements
- Gradient overlays with secondary color

---

### Secondary Color - Ocean Blue
**Purpose:** Accent color representing water conservation and clean technology

```css
--color-secondary: #06b6d4     /* Main accent blue (Cyan 500) */
--color-secondary-400: #22d3ee /* Light variant */
--color-secondary-600: #0891b2 /* Dark variant */
```

**Usage:**
- Secondary buttons
- Links and interactive elements
- Data visualizations
- Gradient combinations

---

### Dark Mode Base Colors

```css
--color-bg-primary: #0a0f1a    /* Main background - Deep navy */
--color-bg-secondary: #111827  /* Secondary surfaces */
--color-bg-card: #1e293b       /* Card backgrounds */
--color-bg-hover: #2d3748      /* Hover states */
```

**Why these colors?**
- High contrast for accessibility
- Professional, not harsh
- Reduces eye strain
- Industry-standard dark mode palette

---

### Text Colors - High Contrast

```css
--color-text-primary: #f9fafb     /* Main text (near white) - WCAG AAA */
--color-text-secondary: #d1d5db   /* Secondary text (light gray) */
--color-text-tertiary: #9ca3af    /* Tertiary text (medium gray) */
--color-text-muted: #6b7280       /* Muted text (dark gray) */
```

**Contrast Ratios:**
- Primary on dark background: 19.5:1 (Excellent)
- Secondary on dark background: 12.3:1 (Very good)
- Tertiary on dark background: 7.2:1 (Good)

---

### Semantic Colors

```css
--color-success: #10b981   /* Green - Success states */
--color-warning: #f59e0b   /* Amber - Warning states */
--color-error: #ef4444     /* Red - Error states */
--color-info: #3b82f6      /* Blue - Info states */
```

---

## 📝 Typography System

### Font Families

**Primary: Inter**
- Modern, professional sans-serif
- Excellent readability at all sizes
- Wide character support
- Optimized for screens

```css
--font-sans: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Helvetica Neue', Arial, sans-serif
```

**Monospace: JetBrains Mono**
- For code snippets and technical data
- Clear character distinction

```css
--font-mono: 'JetBrains Mono', 'SF Mono', Monaco, 'Cascadia Code', 'Courier New', monospace
```

### How to Use Inter Font

**Option 1: Google Fonts CDN** (Recommended)
Add to `index.html`:
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
```

**Option 2: NPM Package**
```bash
npm install @fontsource/inter
```
Then import in `main.jsx`:
```js
import '@fontsource/inter/300.css'
import '@fontsource/inter/400.css'
import '@fontsource/inter/500.css'
import '@fontsource/inter/600.css'
import '@fontsource/inter/700.css'
import '@fontsource/inter/800.css'
```

---

### Font Scale

| Name | Size | Usage | Example |
|------|------|-------|---------|
| `--font-size-xs` | 0.75rem (12px) | Labels, captions | Form helper text |
| `--font-size-sm` | 0.875rem (14px) | Small text, metadata | Timestamps, tags |
| `--font-size-base` | 1rem (16px) | **Body text** | Paragraphs, content |
| `--font-size-lg` | 1.125rem (18px) | Large body, intro text | Lead paragraphs |
| `--font-size-xl` | 1.25rem (20px) | Subheadings | Card titles |
| `--font-size-2xl` | 1.5rem (24px) | **h4** | Section headings |
| `--font-size-3xl` | 1.875rem (30px) | **h3** | Component headings |
| `--font-size-4xl` | 2.25rem (36px) | **h2** | Page headings |
| `--font-size-5xl` | 3rem (48px) | **h1** | Main page titles |
| `--font-size-6xl` | 3.75rem (60px) | Hero headings | Landing page hero |
| `--font-size-7xl` | 4.5rem (72px) | Display text | Large hero text |

---

### Font Weights

```css
--font-weight-light: 300       /* Subtle text */
--font-weight-normal: 400      /* Body text (default) */
--font-weight-medium: 500      /* Emphasized body text */
--font-weight-semibold: 600    /* Subheadings, important text */
--font-weight-bold: 700        /* Headings, CTAs */
--font-weight-extrabold: 800   /* Hero text, large displays */
```

**Recommendations:**
- Body text: 400 (normal)
- Navigation: 500 (medium)
- Buttons: 600 (semibold)
- Headings: 600-700 (semibold-bold)
- Hero titles: 700-800 (bold-extrabold)

---

### Line Heights

```css
--line-height-tight: 1.2       /* Headings, display text */
--line-height-snug: 1.4        /* Subheadings */
--line-height-normal: 1.6      /* Body text (default) */
--line-height-relaxed: 1.8     /* Long-form content */
```

---

### Letter Spacing

```css
--letter-spacing-tight: -0.02em    /* Large headings */
--letter-spacing-normal: 0         /* Body text */
--letter-spacing-wide: 0.025em     /* Uppercase text */
--letter-spacing-wider: 0.05em     /* Small caps, labels */
```

---

## 🔲 Spacing System

8px base unit for consistent rhythm

```css
--spacing-xs: 0.5rem    /* 8px - Tight spacing */
--spacing-sm: 1rem      /* 16px - Default spacing */
--spacing-md: 1.5rem    /* 24px - Medium spacing */
--spacing-lg: 2rem      /* 32px - Large spacing */
--spacing-xl: 3rem      /* 48px - Extra large */
--spacing-2xl: 4rem     /* 64px - Section spacing */
--spacing-3xl: 6rem     /* 96px - Page sections */
```

**Usage Guidelines:**
- Use `xs` for icon padding, inline gaps
- Use `sm` for component padding
- Use `md` for card padding
- Use `lg` for section padding
- Use `xl-3xl` for page layout

---

## 🎯 Border Radius - Soft Edges

```css
--radius-sm: 0.375rem   /* 6px - Small elements */
--radius-md: 0.5rem     /* 8px - Default */
--radius-lg: 0.75rem    /* 12px - Cards */
--radius-xl: 1rem       /* 16px - Large cards */
--radius-2xl: 1.5rem    /* 24px - Modals */
--radius-full: 9999px   /* Pills, avatars */
```

**Design Philosophy:**
- Soft, not sharp - creates friendly feel
- Consistent rounding across components
- Larger elements = larger radius

---

## 🌑 Shadows - Soft, Not Harsh

```css
--shadow-sm: Subtle depth for hover states
--shadow-md: Cards, dropdowns
--shadow-lg: Modals, elevated panels
--shadow-xl: High elevation elements
--shadow-glow-primary: Green glow for focus
--shadow-glow-secondary: Blue glow for accents
```

**Examples:**
```css
.card {
  box-shadow: var(--shadow-md);
}

.button:focus {
  box-shadow: var(--shadow-glow-primary);
}
```

---

## ⚡ Transitions

```css
--transition-fast: 150ms     /* Hover, small changes */
--transition-base: 250ms     /* Default (buttons, cards) */
--transition-slow: 350ms     /* Complex animations */
--transition-slowest: 500ms  /* Page transitions */
```

All use `cubic-bezier(0.4, 0, 0.2, 1)` for natural easing.

---

## 🎨 Component Patterns

### Cards
```css
.card {
  background: var(--color-bg-card);
  border-radius: var(--radius-lg);
  padding: var(--spacing-md);
  box-shadow: var(--shadow-md);
  transition: var(--transition-base);
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
}
```

### Buttons
```css
.btn-primary {
  background: var(--color-primary);
  color: white;
  font-weight: var(--font-weight-semibold);
  padding: 0.75rem 1.5rem;
  border-radius: var(--radius-md);
  transition: var(--transition-fast);
}
```

---

## ✅ Accessibility Guidelines

1. **Color Contrast:** Minimum 4.5:1 for text (WCAG AA)
2. **Focus States:** Always visible with glow shadows
3. **Font Size:** Minimum 16px for body text
4. **Interactive Elements:** Minimum 44x44px touch target
5. **Motion:** Respect `prefers-reduced-motion`

---

## 📱 Responsive Breakpoints

```css
/* Mobile first approach */
@media (min-width: 640px)  { /* sm - Small tablets */ }
@media (min-width: 768px)  { /* md - Tablets */ }
@media (min-width: 1024px) { /* lg - Laptops */ }
@media (min-width: 1280px) { /* xl - Desktops */ }
@media (min-width: 1536px) { /* 2xl - Large screens */ }
```

---

## 🎯 Best Practices

### DO ✅
- Use design tokens (CSS variables) consistently
- Maintain 8px spacing rhythm
- Keep shadows soft and subtle
- Use gradient text for important numbers
- Add hover states to interactive elements
- Test contrast ratios

### DON'T ❌
- Use hard-coded color values
- Mix different border radius values randomly
- Create harsh, dark borders
- Forget focus states
- Use low-contrast text colors
- Ignore responsive design

---

## 🚀 Quick Start

**1. Ensure Inter font is loaded** (see Typography section)

**2. Use CSS variables in components:**
```jsx
<div style={{
  padding: 'var(--spacing-md)',
  background: 'var(--color-bg-card)',
  borderRadius: 'var(--radius-lg)',
  boxShadow: 'var(--shadow-md)'
}}>
  <h3 style={{ color: 'var(--color-text-primary)' }}>Title</h3>
  <p style={{ color: 'var(--color-text-secondary)' }}>Content</p>
</div>
```

**3. Follow the component patterns**

---

## 📊 Color Palette Reference

### Full Emerald Scale (Primary)
50, 100, 200, 300, 400, **500 (base)**, 600, 700, 800, 900

### Full Cyan Scale (Secondary)
50, 100, 200, 300, 400, **500 (base)**, 600, 700, 800, 900

---

**Last Updated:** January 2026  
**Designed for:** ReClaim Pro - AI-Driven E-Waste Platform

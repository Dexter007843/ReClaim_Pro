# Animation & Transition System

## Overview
ReClaim Pro uses smooth, subtle animations to enhance user experience without being distracting. All animations follow the design system's transition tokens for consistency.

---

## 🎬 Global Animations

### Fade In
**Used for:** Page loads, component mounting
```css
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}
/* Duration: 250ms */
```

### Slide In
**Used for:** Sidebar items, list items, staggered reveals
```css
@keyframes slideIn {
  from { opacity: 0; transform: translateX(-20px); }
  to { opacity: 1; transform: translateX(0); }
}
```

### Shimmer (Loading State)
**Used for:** Skeleton loaders, data loading
```css
@keyframes shimmer {
  0% { background-position: -1000px 0; }
  100% { background-position: 1000px 0; }
}
/* Duration: 2s */
```

### Pulse
**Used for:** Loading indicators, active states
```css
@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}
```

### Scale In
**Used for:** Modals, popups, important content
```css
@keyframes scaleIn {
  from { opacity: 0; transform: scale(0.95); }
  to { opacity: 1; transform: scale(1); }
}
```

---

## 🎯 Component Animations

### Cards
```css
.card {
  transition: all 250ms ease;
  animation: fadeIn 250ms ease-out;
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
}
```
**Effect:** Subtle lift on hover with shadow enhancement

### Buttons
```css
.btn {
  transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1);
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 16px rgba(16, 185, 129, 0.3);
}

.btn:active {
  transform: translateY(0);
}
```
**Effect:** 
- Hover: Lift up + green glow
- Active: Press down (tactile feedback)

### Form Inputs
```css
.form-input:focus {
  border-color: var(--color-primary);
  box-shadow: 0 0 0 3px rgba(16, 185, 129, 0.1);
  transform: translateY(-1px);
}
```
**Effect:** Green border + subtle glow + lift

### Navigation Items
```css
nav a::after {
  width: 0;
  transition: width 150ms;
}

nav a:hover::after {
  width: 100%;
}
```
**Effect:** Animated underline on hover

---

## 📦 Staggered List Animation

Apply to list items for sequential entrance:

```jsx
<div className="list-item">Item 1</div>  {/* delay: 0ms */}
<div className="list-item">Item 2</div>  {/* delay: 50ms */}
<div className="list-item">Item 3</div>  {/* delay: 100ms */}
```

Creates cascading effect for visual interest.

---

## ⏳ Loading States

### Skeleton Component
```jsx
import Skeleton from './components/Skeleton'

// Text skeleton
<Skeleton count={3} />

// Card skeleton
<Skeleton type="card" />

// Avatar skeleton
<Skeleton type="avatar" height="48px" />
```

**Features:**
- Animated shimmer effect
- Multiple variants (text, card, avatar)
- Staggered animation by default

### Usage Example
```jsx
const [loading, setLoading] = useState(true)

return (
  <div>
    {loading ? (
      <Skeleton type="card" />
    ) : (
      <CardContent />
    )}
  </div>
)
```

---

## 🔄 Page Transitions

### PageTransition Component
```jsx
import PageTransition from './components/PageTransition'

function MyPage() {
  return (
    <PageTransition>
      <div>Page content...</div>
    </PageTransition>
  )
}
```

**Features:**
- Fade in animation on mount
- Auto-scroll to top on route change
- Works with React Router

---

## ⚡ Transition Tokens

Use the design system's predefined transition speeds:

```css
--transition-fast: 150ms cubic-bezier(0.4, 0, 0.2, 1)
--transition-base: 250ms cubic-bezier(0.4, 0, 0.2, 1)
--transition-slow: 350ms cubic-bezier(0.4, 0, 0.2, 1)
--transition-slowest: 500ms cubic-bezier(0.4, 0, 0.2, 1)
```

**When to use:**
- `fast` - Quick interactions (buttons, icons)
- `base` - Default (cards, page content)
- `slow` - Complex animations (modals, page transitions)
- `slowest` - Attention-grabbing (important reveals)

---

## 🎨 Easing Functions

All animations use `cubic-bezier(0.4, 0, 0.2, 1)` (Material Design standard) for natural, smooth motion.

**Why:** 
- Not too fast, not too slow
- Feels responsive and intentional
- Professional appearance

---

## 🚫 Animation Best Practices

### DO ✅
- Use transitions for hover states
- Keep animations under 300ms for UI interactions
- Use scale/translate instead of top/left (GPU accelerated)
- Stack animations with `animation-delay` for sequences
- Test on slower devices

### DON'T ❌
- Animate opacity alone (feels sluggish)
- Use `all` property on every element
- Create animations longer than 500ms
- Overuse animations (choose moments carefully)
- Animate expensive properties (width, height)

---

## 📱 Performance Considerations

**GPU-Accelerated Properties:**
- `transform` (translate, scale, rotate)
- `opacity`

**CPU-Heavy Properties (Avoid animating):**
- `width`, `height`
- `left`, `right`, `top`, `bottom`
- `box-shadow`, `filter`

---

## 🔗 Examples

### Animated Card Grid
```jsx
<div style={{ display: 'grid', gap: '1.5rem' }}>
  {items.map((item, i) => (
    <div
      key={i}
      className="card"
      style={{
        animation: 'fadeIn 250ms ease-out',
        animationDelay: `${i * 50}ms`,
      }}
    >
      {item.content}
    </div>
  ))}
</div>
```

### Animated Button
```jsx
<button
  className="btn btn-primary"
  style={{
    transition: 'all 150ms ease',
  }}
  onMouseEnter={(e) => {
    e.target.style.transform = 'translateY(-2px)'
  }}
  onMouseLeave={(e) => {
    e.target.style.transform = 'translateY(0)'
  }}
>
  Click Me
</button>
```

---

## 📊 Summary

| Element | Animation | Duration | Trigger |
|---------|-----------|----------|---------|
| Page | Fade In | 250ms | Mount |
| Card | Fade + Lift | 250ms | Hover |
| Button | Lift + Glow | 150ms | Hover |
| Input | Glow | 150ms | Focus |
| List Item | Slide In | 250ms | Mount (staggered) |
| Skeleton | Shimmer | 2s | Loading |
| Nav Link | Underline | 150ms | Hover |

---

**Last Updated:** January 2026  
**Design System:** ReClaim Pro

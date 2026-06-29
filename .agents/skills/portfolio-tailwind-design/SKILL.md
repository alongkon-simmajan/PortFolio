---
name: portfolio-tailwind-design
description: >
  Skill for managing Tailwind CSS design tokens, extending the design system,
  and adding new animations or utility classes in this portfolio project.
  Triggers when: adding animations, custom colors, new CSS utilities, modifying
  tailwind.config.js or assets/css/main.css.
---

# Portfolio Tailwind Design Skill

## Files to Know

| File | Purpose |
|------|---------|
| `tailwind.config.js` | Custom colors, fonts, animations, keyframes |
| `assets/css/main.css` | Global Tailwind directives + custom utility classes |
| `nuxt.config.ts` | Registers `main.css` globally, loads Google Fonts & FA icons |

## Custom Color Tokens

Always use these tokens instead of raw hex values:

```js
// tailwind.config.js — theme.extend.colors
accent: '#64ffda'           // Primary teal-green accent
'accent-purple': '#7c3aed'  // Secondary purple accent
'bg-primary': '#0a0a0f'     // Deepest dark background
'bg-secondary': '#0f0f1a'   // Slightly lighter section background
'bg-card': '#13131f'        // Card/input background
```

## Adding a New Animation

### Step 1: Add keyframes + animation in `tailwind.config.js`

```js
theme: {
  extend: {
    animation: {
      'my-anim': 'myAnim 1s ease infinite',
    },
    keyframes: {
      myAnim: {
        '0%':   { transform: 'scale(1)' },
        '50%':  { transform: 'scale(1.1)' },
        '100%': { transform: 'scale(1)' },
      },
    },
  },
},
```

### Step 2: Use in template
```html
<div class="animate-my-anim">...</div>
```

## Adding a New Utility Class

Add to `assets/css/main.css` inside `@layer utilities {}`:

```css
@layer utilities {
  .my-utility {
    @apply some-tailwind-classes;
    /* or raw CSS */
    property: value;
  }
}
```

## Existing Utilities Reference

```css
/* main.css */
.hero-item     → opacity:0, fadeUp animation (staggered page-load entrance)
.gradient-text → teal→purple diagonal gradient on text
.section-label → font-mono, text-accent, xs, tracking-[0.2em], uppercase
.section-title → text-3xl md:text-4xl, font-bold, text-slate-100
```

## Existing Animations Reference

```js
// tailwind.config.js
animate-blink       → cursor blink (1s step-end infinite)
animate-scroll-dot  → scroll indicator bounce (2s ease infinite)
```

## Background Pattern Technique

The hero section grid pattern is done with inline CSS (not Tailwind) — complex `background-image` values:

```html
<!-- Grid lines -->
<div style="background-image: linear-gradient(rgba(100,255,218,.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(100,255,218,.03) 1px, transparent 1px);
            background-size: 60px 60px" />

<!-- Radial glow -->
<div style="background: radial-gradient(ellipse 70% 55% at 50% 55%,
            rgba(124,58,237,.12) 0%, transparent 70%)" />
```

## Glass Effect Pattern

```html
class="bg-bg-primary/90 backdrop-blur-md border-b border-white/[0.06]"
```

## Shadow Glow Technique

```html
<!-- Teal glow on button -->
class="shadow-[0_0_30px_rgba(100,255,218,.2)]"

<!-- Purple glow alternative -->
class="shadow-[0_0_30px_rgba(124,58,237,.2)]"
```

## Adding a New Font

1. Add `<link>` tags to `nuxt.config.ts` head links
2. Add font family to `tailwind.config.js`:
```js
fontFamily: {
  display: ['"Your Font"', 'sans-serif'],
}
```
3. Use with `font-display` class

## Responsive Breakpoints Used

This project primarily uses `md:` breakpoint for two-column layouts:
- Mobile: single column, hamburger nav
- Desktop (`md:` = 768px+): multi-column grids, horizontal nav

---
name: nuxt-portfolio-component
description: >
  Skill for creating and editing Vue 3 + Nuxt 3 components in the Portfolio project.
  Triggers when: adding new sections, creating Vue components, modifying existing components,
  working with v-reveal directive, Tailwind styling in this project, or updating the design system.
---

# Nuxt 3 Portfolio Component Skill

## Project Context

This is a **Nuxt 3 + Vue 3 + Tailwind CSS** portfolio SPA. All components live in `components/` and are auto-imported by Nuxt.

## Component Template

When creating a new component, always use this structure:

```vue
<script setup lang="ts">
// Composition API logic here
// ref(), reactive(), onMounted(), computed() are all auto-imported
</script>

<template>
  <section id="[section-id]" class="py-28 bg-[bg-primary|bg-secondary]">
    <div class="max-w-5xl mx-auto px-8">
      <!-- Section header -->
      <div v-reveal class="text-center mb-16">
        <span class="section-label">[Category Label]</span>
        <h2 class="section-title">[Section Title]</h2>
      </div>

      <!-- Content -->
    </div>
  </section>
</template>
```

## Design System Rules

### Colors (use Tailwind tokens, NOT raw hex in classes)
- Background primary: `bg-bg-primary` (`#0a0a0f`)
- Background secondary: `bg-bg-secondary` (`#0f0f1a`)
- Card background: `bg-bg-card` (`#13131f`)
- Accent teal: `text-accent`, `border-accent`, `bg-accent` (`#64ffda`)
- Accent purple: `text-accent-purple` (`#7c3aed`)
- Body text: `text-slate-400`
- Headings: `text-slate-100` / `text-slate-200`

### Typography
- Body font: Inter (via `font-sans`)
- Code/labels: JetBrains Mono (via `font-mono`)

### CSS Utility Classes (defined in `assets/css/main.css`)
```html
<span class="section-label">Who I Am</span>    <!-- mono uppercase spaced accent label -->
<h2 class="section-title">About Me</h2>         <!-- bold 3xl-4xl heading -->
<span class="gradient-text">Name</span>          <!-- teal→purple gradient text -->
```

## v-reveal Directive

**Always use `v-reveal` on elements that should animate in on scroll:**

```html
<!-- No delay -->
<div v-reveal>...</div>

<!-- With delay in ms (stagger children) -->
<div v-reveal="80">...</div>
<div v-reveal="160">...</div>
<div v-reveal="240">...</div>

<!-- In v-for loops, use index * delay -->
<div v-for="(item, i) in items" v-reveal="i * 80">...</div>
```

## Card Pattern

Standard card used across sections:

```html
<div class="bg-bg-card border border-white/[0.07] rounded-xl p-6
            hover:border-accent/40 hover:-translate-y-1 transition-all duration-300">
  <!-- card content -->
</div>
```

## Form Input Pattern

```html
<input type="text"
  class="w-full bg-bg-card border border-white/[0.08] rounded-lg px-4 py-3
         text-slate-200 placeholder:text-slate-600
         focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent/20
         transition-colors" />
```

## Button Patterns

Primary CTA:
```html
<a href="#section"
  class="bg-accent text-bg-primary font-semibold px-7 py-3 rounded-lg
         hover:brightness-110 hover:-translate-y-0.5 transition-all
         shadow-[0_0_30px_rgba(100,255,218,.2)]">
  Button Text
</a>
```

Secondary outline:
```html
<a href="#section"
  class="border border-accent text-accent px-7 py-3 rounded-lg
         hover:bg-accent/10 hover:-translate-y-0.5 transition-all">
  Button Text
</a>
```

Ghost link:
```html
<a href="#"
  class="inline-flex items-center gap-2 text-slate-400 border border-white/10
         px-5 py-2.5 rounded-lg hover:border-accent hover:text-accent transition-all duration-200">
  Link Text <i class="fas fa-icon" />
</a>
```

## Section Background Alternation

Sections alternate backgrounds for visual separation:
- `#home` → no background (transparent over global `bg-bg-primary`)
- `#about` → `bg-bg-secondary`
- `#skills` → `bg-bg-primary`
- `#projects` → `bg-bg-secondary`
- `#contact` → `bg-bg-primary`
- Footer → `bg-bg-secondary`

## Icons

Use Font Awesome 6 classes (loaded via CDN in `nuxt.config.ts`):
```html
<i class="fas fa-github" />        <!-- solid icons -->
<i class="fab fa-github" />        <!-- brand icons -->
<i class="fas fa-spinner fa-spin" /> <!-- animated spinner -->
```

## Adding a New Section

1. Create `components/NewSection.vue`
2. Give it `id="new-section"` on the `<section>` element
3. Add `<NewSection />` to `pages/index.vue` in the correct order
4. Add a nav link in `AppNav.vue` links array: `{ href: '#new-section', label: 'Label' }`

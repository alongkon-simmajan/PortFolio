# Portfolio Project — claude.md

## Project Overview

Developer portfolio website for **Alongkorn Simmachan** (Programmer / Full Stack Developer) — a single-page application (SPA) built with **Nuxt 3** + **Vue 3** + **Tailwind CSS**. The site showcases personal brand, tech skills, featured projects, and a contact form with a modern dark-theme aesthetic.

> **Personal data source of truth:** [`cv_content.md`](./cv_content.md) — extracted from `public/files/CV_Alongkorn_Simmachan.pdf`

---

## Tech Stack

| Layer        | Technology                          |
|-------------|--------------------------------------|
| Framework   | Nuxt 3 (v3.x)                        |
| UI Library  | Vue 3 (Composition API, `<script setup>`) |
| Styling     | Tailwind CSS v3 (`@nuxtjs/tailwindcss`) |
| Fonts       | Inter (sans), JetBrains Mono (mono) via Google Fonts |
| Icons       | Font Awesome 6 (CDN)                 |
| Runtime     | Node.js ≥ 20.19.0 or ≥ 22.12.0      |

---

## Project Structure

```
PortFolio/
├── app.vue                   # Root app — renders <NuxtPage />
├── nuxt.config.ts            # Nuxt config (modules, css, head/meta)
├── tailwind.config.js        # Tailwind theme extension (colors, fonts, animations)
├── package.json
│
├── pages/
│   └── index.vue             # Main SPA page (assembles all sections)
│
├── components/
│   ├── AppNav.vue            # Fixed top navbar, scroll-aware, mobile hamburger
│   ├── HeroSection.vue       # Hero — typewriter effect, social links, CTA buttons
│   ├── AboutSection.vue      # About — avatar placeholder, stats, bio, tags
│   ├── SkillsSection.vue     # Tech skills — 4 category cards (Frontend/Backend/DB/DevOps)
│   ├── ProjectsSection.vue   # 3 featured project cards with hover-reveal actions
│   ├── ContactSection.vue    # Contact info + form (simulated send)
│   └── AppFooter.vue         # Footer with logo and copyright
│
├── assets/
│   └── css/
│       └── main.css          # Global CSS (Tailwind directives, custom utilities)
│
└── plugins/
    └── reveal.ts             # Custom v-reveal Vue directive (IntersectionObserver scroll animation)
```

---

## Design System

### Color Palette (Tailwind Custom Colors)
| Token          | Hex       | Usage                          |
|----------------|-----------|-------------------------------|
| `accent`       | `#64ffda` | Primary accent (teal-green)    |
| `accent-purple`| `#7c3aed` | Secondary accent (violet)      |
| `bg-primary`   | `#0a0a0f` | Main page background           |
| `bg-secondary` | `#0f0f1a` | Alternating section background |
| `bg-card`      | `#13131f` | Card / input backgrounds       |

### Typography
- **Sans**: `Inter` (weights 300–800)
- **Mono**: `JetBrains Mono` (weights 400, 500) — used for code labels, logo, typewriter

### CSS Utility Classes (defined in `main.css`)
| Class           | Description                                       |
|-----------------|---------------------------------------------------|
| `.hero-item`    | Staggered fade-up animation on page load          |
| `.gradient-text`| Teal→violet diagonal gradient applied to text     |
| `.section-label`| Mono uppercase spaced label above section titles  |
| `.section-title`| Bold large heading (`3xl–4xl`)                   |

### Custom Tailwind Animations (`tailwind.config.js`)
| Name           | Description                                      |
|----------------|--------------------------------------------------|
| `blink`        | Cursor blink (1s step-end infinite)              |
| `scroll-dot`   | Scroll indicator bounce (2s ease infinite)       |

---

## Key Patterns & Conventions

### Vue Composition API
- All components use `<script setup lang="ts">` (auto-imported composables)
- State with `ref()` / `reactive()`, lifecycle with `onMounted()`
- No Pinia/Vuex — state is local per component

### v-reveal Directive (`plugins/reveal.ts`)
Custom scroll-reveal directive using `IntersectionObserver`.
```html
<!-- Basic usage -->
<div v-reveal>...</div>

<!-- With delay (ms) -->
<div v-reveal="160">...</div>
```
- Elements start hidden (`opacity:0, translateY:28px`)
- Animate to visible when entering viewport (threshold: 10%)
- Unobserves after first trigger (fire-once)

### Section Layout Pattern
Every section follows this structure:
```html
<section id="[section-id]" class="py-28 bg-[bg-primary|bg-secondary]">
  <div class="max-w-5xl mx-auto px-8">
    <!-- Header: section-label + section-title -->
    <!-- Content grid -->
  </div>
</section>
```

### Navigation Links
Pages route via hash anchors: `#about`, `#skills`, `#projects`, `#contact`

---

## Sections Detail

### AppNav
- Fixed position, scroll-aware (adds glass blur + border at `scrollY > 60`)
- Desktop: horizontal links + Resume button
- Mobile: animated hamburger → slide-down menu
- Transition: `slide` (custom CSS in `<style scoped>`)

### HeroSection
- Typewriter cycling through: `['Full Stack Developer', 'Frontend Engineer', 'Backend Developer', 'Problem Solver']`
- Background: CSS grid pattern + radial purple gradient
- CTAs: "View My Work" → `#projects`, "Get In Touch" → `#contact`
- Social links: GitHub, LinkedIn, Twitter (currently `href="#"` — placeholder)
- Scroll indicator: animated dot in bordered pill

### AboutSection
- Stats: 3+ Years, 20+ Projects, 10+ Clients
- Tags: Problem Solver, Open Source, Team Player, Continuous Learner
- Avatar: placeholder `<i class="fas fa-user" />` (needs real photo)
- Download Resume link: currently `href="#"` (placeholder)

### SkillsSection
Skills organized in 4 cards:
- **Frontend**: React, Next.js, TypeScript, Tailwind CSS, HTML5/CSS3, JavaScript
- **Backend**: Node.js, Express, Python, FastAPI, REST API, GraphQL
- **Database**: PostgreSQL, MySQL, MongoDB, Redis, Prisma ORM
- **DevOps & Tools**: Docker, Git/GitHub, CI/CD, Vercel, AWS, Linux

### ProjectsSection
3 featured projects (all placeholder data):
1. E-Commerce Platform (Next.js, Node.js, PostgreSQL, Stripe)
2. Project Management App (React, Express, Socket.io, MongoDB)
3. Analytics Dashboard (TypeScript, FastAPI, Redis, Docker)

### ContactSection
- Contact info: email `alex@example.com`, location Bangkok Thailand, availability status
- Form: Name, Email, Subject, Message — currently **simulated send** (1.5s timeout, no real backend)
- Form state: `sending` / `sent` with button state transitions

---

## Content Rules — Real Data

> ข้อมูลด้านล่างมาจาก **[`cv_content.md`](./cv_content.md)** ซึ่ง extract มาจาก `public/files/CV_Alongkorn_Simmachan.pdf`
> อ้างอิงไฟล์นั้นเสมอก่อนแก้ไขข้อมูลส่วนตัวใด ๆ

| Field | Value |
|-------|-------|
| Name | Alongkorn Simmachan (อลงกรณ์ สิมมาจันทร์) |
| Title | Programmer / Full Stack Developer |
| Location | Bangkok, Thailand |
| Email | fromalongkon@gmail.com |
| Phone | 095-185-5543 |
| GitHub | `https://github.com/alongkon-simmajan` |
| LinkedIn | `https://www.linkedin.com/in/fromalongkon-simmajan-24357a231/` |
| Education | Digital Business Technology, RMUTI Khon Kaen, 2020–2024, GPAX 2.72 |
| Current Job | Programmer at JMT Network Services PCL. (JMART Building), มิถุนายน 2024 – ปัจจุบัน |
| Languages | Thai (native), English (communicative) |
| Resume PDF | `public/files/CV_Alongkorn_Simmachan.pdf` → URL: `/files/CV_Alongkorn_Simmachan.pdf` |

---

## Components Map

| Component | Section ID | Background |
|-----------|-----------|------------|
| AppNav | — | Fixed, glass blur on scroll |
| HeroSection | #home | Transparent (grid pattern bg) |
| AboutSection | #about | bg-secondary |
| SkillsSection | #skills | bg-primary |
| ExperienceSection | #experience | bg-primary |
| ProjectsSection | #projects | bg-secondary |
| ContactSection | #contact | bg-primary |
| AppFooter | — | bg-secondary |

---

## Known TODOs

- [x] Add real profile photo to AboutSection ✅
- [x] Upload actual Resume PDF → `public/files/CV_Alongkorn_Simmachan.pdf` ✅
- [x] Resume link opens in new tab ✅
- [x] Update GitHub URL to actual profile once confirmed ✅
- [x] Update LinkedIn URL to actual profile once confirmed ✅
- [ ] Wire up ContactSection form to real backend (Resend, Formspree, etc.)
- [ ] Add real project screenshots or GitHub links to ProjectsSection cards

---

## Development Setup

### Prerequisites
- Node.js **v22.23.1** (use `nvm use 22.23.1`)
- npm v10+
- PowerShell ExecutionPolicy: `RemoteSigned` for `CurrentUser`

### Commands
```bash
# Fix PATH and run dev server (PowerShell)
$env:PATH = 'C:\Users\DELL\AppData\Local\nvm\v22.23.1;' + $env:PATH; npm run dev

# Or via cmd
cmd /c "nvm use 22.23.1 && npm run dev"
```

### Known Issues
- nvm-windows does NOT update PATH in existing PowerShell sessions — must prepend manually or open new terminal
- ExecutionPolicy must be set to `RemoteSigned` for npm.ps1 to run

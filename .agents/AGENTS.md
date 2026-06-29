# Portfolio Project — Agent Rules (AGENTS.md)

## Project Identity

This is a **Nuxt 3 + Vue 3 + Tailwind CSS** developer portfolio project for **Alongkorn Simmachan** (อลงกรณ์ สิมมาจันทร์).
Always treat this as a **premium, production-quality** portfolio — not a template or demo.

> 📌 **Personal data source of truth:** [`cv_content.md`](./cv_content.md) — extracted from `public/files/CV_Alongkorn_Simmachan.pdf`
> Always read this file before updating any personal information in components.

---

## Code Style Rules

### Vue Components
- Always use `<script setup lang="ts">` — never Options API
- Use Vue 3 Composition API: `ref()`, `reactive()`, `computed()`, `onMounted()`
- Do **not** add manual imports for Vue composables or components — Nuxt auto-imports them
- Use `v-reveal` directive (from `plugins/reveal.ts`) for all scroll-animated elements
- Stagger `v-reveal` delays using multiples of 80ms: `v-reveal="0"`, `v-reveal="80"`, `v-reveal="160"`

### Styling
- Use **Tailwind CSS utility classes** — not inline `style=""` unless it's a complex gradient/pattern unavoidable in Tailwind
- Use the project's custom color tokens: `accent`, `accent-purple`, `bg-primary`, `bg-secondary`, `bg-card`
- Use `text-slate-400` for body text, `text-slate-100`/`text-slate-200` for headings
- Use `font-mono` class for code labels, logo text, and terminal-style text
- Never use hardcoded colors like `text-green-500` without checking against the design system first
- Always add hover states and transitions to interactive elements

### File Organization
- Components → `components/` (auto-imported, PascalCase filenames)
- Pages → `pages/` (file-based routing)
- Global styles → `assets/css/main.css`
- Plugins/directives → `plugins/`
- New Tailwind tokens → `tailwind.config.js` under `theme.extend`

---

## Design Standards

- **Dark theme only** — all backgrounds must use `bg-primary`, `bg-secondary`, or `bg-card`
- **Accent color** is teal (`#64ffda`) — use for highlights, icons, borders, and interactive states
- **All cards** must have: `bg-bg-card border border-white/[0.07] rounded-xl` and hover effects
- **All sections** must have: `py-28` vertical padding and `max-w-5xl mx-auto px-8` content container
- **Section backgrounds alternate**: secondary → primary → secondary → primary
- **Micro-animations are required** — use `transition-all duration-200/300`, `hover:-translate-y-1`, `hover:brightness-110`
- **No placeholder text** (`Lorem ipsum`) — write real, contextual content

---

## Development Environment Rules

- Always use **Node v22.23.1** (run `nvm use 22.23.1` before npm commands)
- When running npm in PowerShell, ensure `ExecutionPolicy = RemoteSigned` for `CurrentUser`
- If PowerShell blocks npm, use `cmd /c npm [command]` as fallback
- Never downgrade Node to v20.12.2 — it breaks oxc-parser native bindings
- Always run `npm install` after adding new dependencies to `package.json`

---

## Content Rules

- The developer is **Alongkorn Simmachan** (อลงกรณ์ สิมมาจันทร์) — Programmer / Full Stack Developer based in Bangkok, Thailand
- Contact email: `fromalongkon@gmail.com`
- Phone: `095-185-5543`
- Current job: **Programmer** at **JMT Network Services PCL.** (JMART Building), มิถุนายน 2024 – ปัจจุบัน
- Education: Digital Business Technology, RMUTI Khon Kaen, 2020–2024, GPAX 2.72
- Resume PDF: `public/files/CV_Alongkorn_Simmachan.pdf` → URL path: `/files/CV_Alongkorn_Simmachan.pdf`
- Social links (`href="#"`) are placeholders — do not invent URLs
- Skills stack (from CV): Vue.js, Nuxt.js, React | Node.js, Express, ElysiaJS, NestJS, TypeScript | Prisma, PostgreSQL, MySQL | Git, GitLab, Postman, DBeaver

---

## What NOT to Do

- ❌ Do not use Options API (`data()`, `methods:`, `computed:`)
- ❌ Do not use inline `<style>` tags for things Tailwind can handle
- ❌ Do not create new color variables outside `tailwind.config.js`
- ❌ Do not use TailwindCSS `purge` (deprecated) — `content` array is correct
- ❌ Do not create separate CSS files per component — use scoped `<style scoped>` only for complex transitions
- ❌ Do not remove the `v-reveal` directive from section headers
- ❌ Do not use `npm` with `--legacy-peer-deps` unless explicitly needed
- ❌ Do not import Vue or Nuxt APIs manually (`import { ref } from 'vue'`) — Nuxt auto-imports

---

## When Adding Features

1. Check `claude.md` for existing patterns before creating new ones
2. Match the existing visual style — new components must feel native to the design
3. Test that `v-reveal` animations work correctly (requires SSR-safe `getSSRProps()`)
4. Ensure mobile responsiveness using `md:` breakpoint
5. Run `npm run dev` to verify no build errors before considering work done

---

## Git & Files

- `.gitignore` already covers `node_modules/`, `.nuxt/`, `.output/`
- `claude.md` is the source of truth for project documentation — keep it updated when adding major features
- `package-lock.json` should be committed (do not add to .gitignore)

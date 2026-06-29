---
name: nuxt-dev-environment
description: >
  Skill for managing the Nuxt 3 development environment on Windows.
  Triggers when: running dev server, fixing npm/Node errors, installing packages,
  dealing with PowerShell execution policy, nvm, or Nuxt-specific build issues.
---

# Nuxt Development Environment Skill (Windows)

## System Configuration

| Setting | Value |
|---------|-------|
| OS | Windows 11 |
| Shell | PowerShell |
| Node Manager | nvm-windows |
| Active Node | v22.23.1 |
| npm | v10.9.8 |
| Execution Policy | RemoteSigned (CurrentUser) |

## Critical: Always Use Node v22.x

This project requires **Node ≥ 20.19.0 or ≥ 22.12.0** due to Nuxt 3.21+, Vite 7/8, and oxc-parser.

```powershell
# Switch to correct Node version before any npm commands
nvm use 22.23.1

# Verify
node -v  # should show v22.23.1
```

## Running the Dev Server

**In PowerShell** (after setting ExecutionPolicy):
```powershell
npm run dev
```

**If npm is blocked** (PowerShell script restriction):
```powershell
# Fix once:
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser -Force

# Or use cmd as workaround:
cmd /c npm run dev
```

## Common npm Scripts

```bash
npm run dev        # Start dev server (http://localhost:3000)
npm run build      # Production build
npm run generate   # Static site generation
npm run preview    # Preview production build
```

## Installing New Packages

```bash
# Regular dependency
npm install [package-name]

# Dev dependency
npm install -D [package-name]

# After installing a new Nuxt module, add to nuxt.config.ts:
modules: ['@nuxtjs/tailwindcss', 'new-module-name']
```

## Fix: Native Binding Errors (oxc-parser)

If you see `Cannot find native binding` or `Cannot find module '@oxc-parser/binding-win32-x64-msvc'`:

```bash
# Delete node_modules and lock file, then reinstall
Remove-Item -Recurse -Force node_modules, package-lock.json
npm install
```

Root cause: npm optional dependency bug when using wrong Node version.

## Fix: EBADENGINE Warnings

If packages warn about unsupported engine:
```
npm WARN EBADENGINE Unsupported engine { required: { node: '^20.19.0 || >=22.12.0' } }
```
→ Run `nvm use 22.23.1` and reinstall.

## Nuxt Auto-Imports

Nuxt auto-imports these — **do NOT manually import them**:
- `ref`, `reactive`, `computed`, `onMounted`, `watch` (Vue composables)
- All components in `components/` directory
- All composables in `composables/` directory

## Nuxt Config Quick Reference

```ts
// nuxt.config.ts
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  modules: ['@nuxtjs/tailwindcss'],
  css: ['~/assets/css/main.css'],
  app: {
    head: {
      title: '...',
      meta: [...],
      link: [...],  // Google Fonts, FA icons CDN
    }
  }
})
```

## Adding a New Nuxt Plugin

1. Create `plugins/my-plugin.ts`
2. Export default function with `defineNuxtPlugin`:

```ts
export default defineNuxtPlugin((nuxtApp) => {
  // Register Vue directives, inject globals, etc.
  nuxtApp.vueApp.directive('my-directive', { ... })
})
```

Nuxt auto-discovers plugins in the `plugins/` directory.

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
  ],
  theme: {
    extend: {
      colors: {
        accent: '#64ffda',
        'accent-purple': '#7c3aed',
        'bg-primary': '#0a0a0f',
        'bg-secondary': '#0f0f1a',
        'bg-card': '#13131f',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      animation: {
        blink: 'blink 1s step-end infinite',
        'scroll-dot': 'scrollDot 2s ease infinite',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        scrollDot: {
          '0%':   { transform: 'translateY(0)',    opacity: '1' },
          '80%':  { transform: 'translateY(14px)', opacity: '0' },
          '100%': { transform: 'translateY(0)',    opacity: '0' },
        },
      },
    },
  },
  plugins: [],
}

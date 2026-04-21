/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: '#012169', // PMS 280 C
        'navy-lift': '#0B3386', // Lifted PMS 280 C
        'navy-deep': '#001850', // Deeper PMS 280 C
        steel: '#75787B', // Cool Gray 9 C
        electric: '#00A3E0', // PMS 299 C
        'electric-dim': '#0085B8',
        offwhite: '#F8FAFC',
        'text-light': '#FFFFFF',
        'text-muted': '#CBD5E1', // Slate 300 (was #94A3B8)
        'text-dark': '#1A202C',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Outfit', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      }
    }
  },
  plugins: [],
}

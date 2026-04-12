/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: '#0A1628',
        'navy-lift': '#0F2040',
        'navy-deep': '#060E1A',
        steel: '#94A3B8', // Slate 400 (was #4A5568)
        electric: '#2563EB',
        'electric-dim': '#1D4ED8',
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

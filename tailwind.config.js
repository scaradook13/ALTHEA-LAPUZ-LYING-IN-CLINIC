/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  safelist: [
    'bg-brand-primary',
    'text-brand-primary',
    'border-brand-primary',
    'bg-brand-primary-hover',
    'bg-brand-primary-active',
    'bg-brand-primary-dark',
    'bg-brand-soft',
    'bg-brand-light',
    'bg-brand-muted',
    'text-text-primary',
    'text-text-secondary',
    'border-brand-light'
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#EC1366',
          'primary-hover': '#CB215F',
          'primary-active': '#920E39',
          'primary-dark': '#630721',
          accent: '#ED1367',
          soft: '#FEEAF5',
          light: '#F0B4CB',
          muted: '#EFC0D2',
          surface: '#FFFFFF',
          border: '#F0B4CB',
        },
        text: {
          primary: '#050505',
          secondary: '#8A5968',
          inverse: '#FFFFFF',
        }
      }
    },
  },
  plugins: [],
}

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
    'text-brand-primary-hover',
    'bg-brand-primary-active',
    'text-brand-primary-active',
    'bg-brand-primary-dark',
    'text-brand-primary-dark',
    'bg-brand-soft',
    'bg-brand-subtle',
    'bg-brand-canvas',
    'bg-brand-light',
    'bg-brand-muted',
    'border-brand-border',
    'bg-brand-accent',
    'bg-brand-accent-soft',
    'text-brand-accent',
    'text-text-primary',
    'text-text-secondary',
    'text-text-muted',
    'border-brand-light'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Figtree"', '"Noto Sans"', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        heading: ['"Figtree"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        body: ['"Noto Sans"', '"Figtree"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        serif: ['"Figtree"', 'Georgia', 'serif'],
      },
      colors: {
        brand: {
          primary: '#D93678',
          'primary-hover': '#B92760',
          'primary-active': '#9E1F50',
          'primary-dark': '#4A1228',
          accent: '#B92760',
          'accent-soft': '#FFF0F5',
          'accent-border': '#F2D6E0',
          soft: '#FFF0F5',
          subtle: '#FFF8FA',
          canvas: '#FFFCFA',
          light: '#FCE4EC',
          muted: '#F4B8CE',
          border: '#F2D6E0',
          surface: '#FFFFFF',
        },
        text: {
          primary: '#172033',
          secondary: '#475569',
          muted: '#64748B',
          inverse: '#FFFFFF',
        }
      },
      boxShadow: {
        'brand-sm': '0 2px 6px -1px rgba(217, 54, 120, 0.20), 0 1px 2px -1px rgba(217, 54, 120, 0.10)',
        'brand': '0 6px 16px -3px rgba(217, 54, 120, 0.24), 0 2px 6px -2px rgba(217, 54, 120, 0.12)',
        'brand-lg': '0 12px 28px -6px rgba(217, 54, 120, 0.26), 0 4px 10px -2px rgba(217, 54, 120, 0.12)',
        'card': '0 1px 3px 0 rgba(23, 32, 51, 0.05), 0 4px 12px -2px rgba(23, 32, 51, 0.04)',
        'card-hover': '0 10px 24px -4px rgba(217, 54, 120, 0.10), 0 4px 8px -2px rgba(23, 32, 51, 0.04)',
      }
    },
  },
  plugins: [],
}

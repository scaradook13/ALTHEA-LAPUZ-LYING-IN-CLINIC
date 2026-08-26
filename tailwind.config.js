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
    'border-brand-border',
    'text-text-primary',
    'text-text-secondary',
    'border-brand-light'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
      },
      colors: {
        brand: {
          primary: '#EC1366',
          'primary-hover': '#D40F5A',
          'primary-active': '#B80B4D',
          'primary-dark': '#7A0630',
          accent: '#EC1366',
          soft: '#FDF2F7',
          subtle: '#FFF5F9',
          light: '#FCE7F0',
          muted: '#F8B4D9',
          border: '#F5A9CE',
          surface: '#FFFFFF',
        },
        text: {
          primary: '#1A1417',
          secondary: '#5C4A54',
          muted: '#8A7781',
          inverse: '#FFFFFF',
        }
      },
      boxShadow: {
        'brand-sm': '0 2px 8px -2px rgba(236, 19, 102, 0.15)',
        'brand': '0 8px 24px -4px rgba(236, 19, 102, 0.20)',
        'brand-lg': '0 16px 36px -6px rgba(236, 19, 102, 0.25)',
        'card': '0 4px 20px -2px rgba(0, 0, 0, 0.04), 0 2px 6px -1px rgba(0, 0, 0, 0.02)',
        'card-hover': '0 12px 30px -4px rgba(236, 19, 102, 0.12), 0 4px 12px -2px rgba(0, 0, 0, 0.04)',
      }
    },
  },
  plugins: [],
}



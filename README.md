# Althea-Lapuz Lying In Clinic

A Vue 3 + Tailwind CSS frontend application representing a single-page layout for the Althea-Lapuz Lying In Clinic based on the provided user flow diagram.

## Features

- **Single-page scrolling layout**: Navigation links in the header smoothly jump to respective sections.
- **Responsive design**: Built with Tailwind CSS to ensure the UI looks great on mobile, tablet, and desktop.
- **Component-based architecture**: The application is broken down into semantic, maintainable Vue components (Hero, Services, About, Contact).
- **Icons**: Uses Lucide icons for beautiful, scalable vector graphics.

## Project Setup

Make sure you have Node.js installed.

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

## Structure

- `src/components/NavBar.vue` - Fixed top navigation
- `src/components/HomeSection.vue` - Hero landing section
- `src/components/ServicesSection.vue` - Detailed clinic services
- `src/components/AboutSection.vue` - Clinic history, healthcare team, mission, and vision
- `src/components/ContactSection.vue` - Contact information, location, and inquiry form
- `src/App.vue` - Main entry assembling all sections

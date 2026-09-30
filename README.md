# Althea-Lapuz Lying In Clinic

A Vue 3 + Tailwind CSS frontend application for the Althea-Lapuz Lying-In Clinic in Tilapayong, Baliwag, Bulacan.

## Features

- **Multi-view layout**: Seamless navigation between Home, Services (with interactive PhilHealth pricing tables), About Us, and Contact Us.
- **In-Memory Admin Portal & Live CMS (`/admin`)**:
  - Demo authentication (`admin` / `admin123`) with one-click credentials auto-fill.
  - Live in-memory updates for Clinic Info, Mission & Vision, Consultation & Contraceptive Prices, PhilHealth Case Rates, Pharmacy/Supplies Catalog, Chatbot FAQs, and Patient Inquiries.
  - Real-time reactive synchronization across all public pages.
  - Safe demo behavior: **All modifications operate in-memory** and automatically restore to original clinic defaults upon page reload.
  - Manual "Reset Defaults" action in the admin dashboard.
- **Interactive AI Assistant**: Floating FAQ chatbot with keyword detection and quick replies.
- **Responsive design**: Built with Tailwind CSS to ensure the UI looks great on mobile, tablet, and desktop.
- **Icons**: Uses `@lucide/vue` icons for vector graphics.

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

## Admin Portal (Demo Mode)

- **URL**: `/admin` (or click "Admin Login" in the header / footer)
- **Demo Username**: `admin`
- **Demo Password**: `admin123`
- **Behavior**: All edits reflect live immediately across the site without a backend database. Reloading the browser (F5) automatically resets all data back to the official default clinic records.

## Project Structure

- `src/stores/clinicStore.js` - Central reactive in-memory state store and authentication logic
- `src/views/admin/AdminLoginView.vue` - Admin login screen with demo credentials helper
- `src/views/admin/AdminDashboardView.vue` - Admin management panel for live data editing
- `src/views/HomeView.vue` - Home landing page
- `src/views/ServicesView.vue` - Multi-tab services, pricing schedules & PhilHealth coverage
- `src/views/AboutView.vue` - Clinic mission, vision, core values & healthcare team
- `src/views/ContactView.vue` - Contact information, map embed & concierge hours
- `src/components/layout/NavBar.vue` - Fixed top navigation with admin portal link
- `src/components/layout/Footer.vue` - Footer with expandable FAQs drawer
- `src/components/chatbot/` - Floating clinic AI assistant widget & FAQ matcher

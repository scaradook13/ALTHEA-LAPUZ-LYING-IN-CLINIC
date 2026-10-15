# Althea-Lapuz Lying In Clinic

A modern, responsive Vue 3 + Tailwind CSS web application and content management portal for **Althea-Lapuz Lying-In Clinic**, located in Tilapayong, Baliwag, Bulacan. Primarily dedicated to maternal and infant healthcare for pregnant women, postpartum mothers, newborns, and their families.

---

## 🌟 Key Features

### 1. Multi-View Public Web Experience
- **Home (`/`)**: Authentic clinic facility showcase, highlighted clinical services, maternal care statistics, interactive Google Maps directions, and quick contact preview.
- **Services & Price Directory (`/services`)**:
  - Segmented 4-tab switcher with clean responsive navigation:
    1. **Overview**: High-level visual gateway cards for clinical services and facility infrastructure.
    2. **Service Pricing & Fees**: Expandable interactive service cards (Prenatal Checkups, Newborn Screening, Normal Spontaneous Delivery, Vaccination & Wellness) with comprehensive clinical specifications, package inclusions, target patients, preparation guidelines, and direct contact CTAs.
    3. **Official Price Directory**: Standalone regulatory price directory adhering to **DOH Administrative Order No. 2021-0008** (Effective April 01, 2026). Features outpatient consultations, family planning contraceptives, Antenatal Care Packages (ANCO1, ANCO2), PhilHealth Delivery & Newborn Packages (MCP01, NSD01, NCP with ₱0.00 No Balance Billing / Walang Bayad), and an itemized directory of 14 medicines and 24 clinical supplies.
    4. **Accessibility Features**: Dedicated showcase of clinic accessibility features (wheelchair ramps, handrails, accessible restroom, high-traction non-slip flooring, priority assistance, and barrier-free main entrance).
- **About Us (`/about`)**: Clinic history, facility photography, official Mission & Vision statements, Core Values (*Transparency, Clarity, Precision*), and Healthcare Team disclosures (Licensed Midwives, OB-GYNs, Pediatricians).
- **Contact Us (`/contact`)**: Multi-line phone support (`0931-069-3921`, `(044)-462-0789`, `0969-405-5108`), direct web Gmail compose helper with auto-clipboard copy (`lapuzaltheajasmine@gmail.com`), official Facebook page link, interactive Google Maps embed, and operating hours (24/7 Delivery Admissions; 9:00 AM – 7:00 PM Prenatal Consultations).
- **Interactive Footer FAQ Drawer**: Expandable accordion drawer providing fast answers to common patient questions regarding PhilHealth requirements, birth certificates, visiting hours, and clinic policies.

### 2. In-Memory Admin Portal & Live CMS (`/admin`)
- **Protected Access**: Route guards (`beforeEach`) guarding `/admin` and redirecting unauthorized visitors to `/admin/login`.
- **Demo Credentials**:
  - **Username**: `admin`
  - **Password**: `admin123`
- **Real-Time Dynamic Editing**: Manage and update clinic records live across the website:
  - Clinic Information (Name, tagline, contact numbers, address, operating hours, advisory announcement banner)
  - Mission, Vision & Core Values
  - Healthcare Team & Midwife Availability Status
  - Service Prices, Family Planning, and PhilHealth Package Rates
  - Pharmacy Medicines & Clinical Supplies Catalog
  - AI Chatbot Automated FAQ Responses
- **Reactive In-Memory Synchronization**: Edits immediately update all views on the active website in real time via `clinicStore.js`.
- **Safe Demo Mode**: All changes operate in-memory during the session. Reloading the browser (F5) automatically restores the clinic's official default data. Includes a manual **"Reset Defaults"** action in the admin dashboard.

### 3. Interactive AI Clinic Assistant
- Floating FAQ chatbot widget (`ChatbotWidget.vue`) accessible on every public page.
- Natural language keyword matching for clinic packages, PhilHealth eligibility, consultations, clinic location, and operating hours.
- Interactive quick-reply buttons and fallback guidance to direct clinic channels.

### 4. Production & Deployment Ready
- **Vercel SPA Rewrite Configuration (`vercel.json`)**: Configured rewrite rules ensure seamless browser reloads and direct URL access without 404 errors.
- **Brand Design System**: Custom Tailwind theme featuring the clinic's authentic brand palette, typography, responsive layouts, and `@lucide/vue` iconography.

---

## 🛠️ Tech Stack

- **Framework**: [Vue 3](https://vuejs.org/) (Composition API, `<script setup>`)
- **Routing**: [Vue Router 4](https://router.vuejs.org/) (HTML5 history mode, smooth scrolling, navigation guards)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [Lucide Vue Next](https://lucide.dev/) (`@lucide/vue`)
- **Build Tool**: [Vite 8](https://vitejs.dev/)
- **Hosting / Deployment**: [Vercel](https://vercel.com/) (configured with `vercel.json` SPA rewrites)

---

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- npm or yarn

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/scaradook13/ALTHEA-LAPUZ-LYING-IN-CLINIC.git
   cd ALTHEA-LAPUZ-LYING-IN-CLINIC
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the local development server:
   ```bash
   npm run dev
   ```
   Open your browser and navigate to `http://localhost:5173`.

4. Build for production:
   ```bash
   npm run build
   ```

---

## 🔐 Admin Portal Access

| Route | Description |
| :--- | :--- |
| `/admin/login` *(or `/login`)* | Staff login portal |
| `/admin` *(or `/admin/dashboard`)* | Protected Admin CMS Dashboard |

**Default Credentials:**
- **Username**: `admin`
- **Password**: `admin123`

---

## 📁 Project Structure

```
ALTHEA-LAPUZ-LYING-IN-CLINIC/
├── index.html
├── package.json
├── tailwind.config.js
├── vercel.json                  # SPA routing configuration for Vercel
├── vite.config.js
└── src/
    ├── App.vue                  # Root application component
    ├── main.js                  # App bootstrap
    ├── style.css                # Global Tailwind directives & scrollbar utilities
    ├── assets/                  # Authentic clinic photos, logos, and vector assets
    ├── components/
    │   ├── chatbot/             # AI Assistant widget & FAQ response datasets
    │   ├── layout/              # NavBar (with admin toggle) & Footer (with FAQ drawer)
    │   └── sections/            # Reusable page sections (Hero, Services, Values, Contact)
    ├── data/
    │   └── pricingData.js       # Official DOH pricing schedules, medicines & supplies
    ├── layouts/
    │   └── MainLayout.vue       # Main wrapper handling public nav, banner, and chatbot
    ├── router/
    │   └── index.js             # Vue Router routes, scroll behavior & auth guards
    ├── stores/
    │   └── clinicStore.js       # Central reactive in-memory state store & auth logic
    └── views/
        ├── HomeView.vue         # Landing page
        ├── AboutView.vue        # Clinic mission, vision, values & medical team
        ├── ContactView.vue      # Contact channels, maps & visiting hours
        ├── ServicesView.vue     # 4-tab clinical services & Official Price Directory
        └── admin/
            ├── AdminLoginView.vue     # Admin sign-in screen
            └── AdminDashboardView.vue # Full CMS dashboard for live site management
```

---

## 📄 License & Compliance

Complies with Department of Health (DOH) Administrative Order No. 2021-0008 regarding Public Access to Price List Information in Health Facilities.

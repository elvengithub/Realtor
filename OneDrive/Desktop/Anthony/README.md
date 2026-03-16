# Anthony Gerard Orais Leuterio | Global Real Estate Coaching Platform

A professional, high-performance real estate coaching and training platform built with **React (TypeScript)** and **Vite**. This project transforms a single-page portfolio into a comprehensive ecosystem for the 2024 International Realtor of the Year.

## Core Features

- **41 Functional Routes**: A complete sitemap implementation including Coaching, Training, Events, and Media systems.
- **Lead Generation System**: Integrated lead capture forms and consultation booking UI on every key service page.
- **Content & Media Hub**: Categorized systems for Blog articles, Podcasts, and Video content (TF Show).
- **Event Management**: Dedicated pages for Global Summits, Intensive Workshops, and Webinars.
- **Dynamic Navigation**: A global, responsive Navbar and multi-column Footer with full sitemap access.
- **Luxury Aesthetic**: A sophisticated "Gold & Navy" theme reflecting the premium nature of global real estate leadership.

## Tech Stack

- **React 18**: Component-based UI architecture.
- **TypeScript**: Type-safe development for enterprise-grade stability.
- **React Router Dom**: Advanced SPA routing for 40+ pages.
- **Vite**: Ultra-fast build tool and development server.
- **Lucide React**: Premium iconography for professional UI.
- **Vanilla CSS**: Custom-engineered styles for maximum performance and design flexibility.

## Project Structure

```text
anothony/Realtor/
├── src/
│   ├── components/       # Reusable UI (Navbar, Footer, LeadForm, Layout)
│   ├── pages/            # Page components organized by category:
│   │   ├── coaching/     # Elite, Core, and Consultation pages
│   │   ├── training/     # OLA, Bootcamp, and Agent Tools
│   │   ├── events/       # Summit, The Edge, and Speakers
│   │   ├── content/      # Blog, Podcast, and Media
│   │   ├── about/        # Biography and Mission
│   │   └── legal/        # Terms, Privacy, and Sitemap
│   ├── App.tsx           # Global routing and application shell
│   ├── main.tsx          # Application entry point
│   └── style.css         # Global design system and theme
├── legacy/               # Original HTML/JS version (Reference)
├── index.html            # Vite entry point
└── package.json          # Project dependencies and scripts
```

## How to Run

### 1. Installation
Navigate to the project directory and install the necessary dependencies:
```bash
npm install
```

### 2. Development
Start the local development server:
```bash
npm run dev
```

### 3. Production Build
Create an optimized production-ready bundle:
```bash
npm run build
```

### 4. Preview Build
Preview the production build locally:
```bash
npm run preview
```

## Functional Sitemap
The website includes over 40 functional routes, all accessible via the global navigation or the dedicated `/sitemap` page. This ensures that Coaching Programs, Training Tools, and Event Schedules are always one click away for the user.

---
© 2026 Anthony Gerard Orais Leuterio. All rights reserved.

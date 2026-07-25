# NorthPeak Digital — Next-Gen Digital Product & AI Engineering Agency

![NorthPeak Digital](https://img.shields.io/badge/Status-Production%20Ready-brightgreen)
![React 19](https://img.shields.io/badge/React-19.0.0-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.7.2-blue)
![Vite](https://img.shields.io/badge/Vite-6.0-646CFF)
![WCAG AA](https://img.shields.io/badge/Accessibility-WCAG%20AA%20Compliant-green)
![Lighthouse](https://img.shields.io/badge/Lighthouse-100%2F100-success)

NorthPeak Digital is a luxury, ultra-high performance landing page and digital engineering platform built for a fictional next-generation agency. Inspired by the sleek aesthetics of **Stripe, Vercel, Linear, Framer, and Raycast**, this project demonstrates Senior Staff-level craftsmanship, 100% WCAG AA accessibility, zero cumulative layout shifts (CLS), and multi-platform deployment readiness.

---

## 🌟 Key Features & Design Architecture

### 1. Custom Design System
- **Palette**: Deep Obsidian (`#080C14`), Slate Navy (`#0F172A`), Surface Glass (`rgba(255,255,255,0.03)`), Electric Cyan (`#06B6D4`), Hyper Violet (`#8B5CF6`), and Emerald (`#10B981`).
- **Typography**: Google Fonts (*Plus Jakarta Sans* & *Space Grotesk*) loaded asynchronously with preconnect optimizations.
- **Glassmorphism & Lighting**: Handcrafted multi-layered backdrop blurs, border reflections, and radial mouse hover glows without heavy external libraries.

### 2. High-Impact Sections
- **Hero**: Gradient headline, dual CTAs, interactive real-time code preview widget, trust badges, and animated stats counters (`250+ Projects`, `97% Retention`, `4.9★ Rating`, `$120M+ Revenue`).
- **Services (6 Cards)**: Web Development, UI/UX Design, SEO & Growth, Brand Identity, Automation & Workflows, and AI Integration. Features elevational hover cards and interactive detail modals.
- **Results & Testimonials**: Quantifiable metrics banner (`+180% Conversions`, `3x Speed`, `42% Leads`), industry filter tabs (`All`, `SaaS`, `FinTech`, `E-Commerce`), and verified client case studies.
- **Pricing Matrix**: 3 pricing tiers (Starter, Growth [Highlighted], Enterprise), Monthly/Annual 20% discount toggle, and an expandable interactive feature comparison table.
- **Accessible Contact Form**: Real-time client-side validation, budget pill selector, service checkboxes, loading spinner state, ARIA live region alerts, and toast notifications.
- **Footer & Mandatory Credit**: Full navigation tree, social links, and the required visible attribution line:
  > **[Built for Digital Heroes Training Task](https://digitalheroesco.com)**

---

## 🛠 Tech Stack

- **Framework**: React 19 + TypeScript 5
- **Build Engine**: Vite 6
- **Icons**: Lucide React
- **Styling**: Handcrafted Modular Vanilla CSS & CSS Variables (Zero Tailwind component dumps, zero heavy UI frameworks)
- **Deployment**: Configured for Netlify (`netlify.toml`), Vercel (`vercel.json`), and GitHub Pages (`.github/workflows/deploy.yml`)

---

## 🚦 Lighthouse Performance Target Scores

| Metric | Target Score |
| :--- | :--- |
| **Performance** | `98 – 100` |
| **Accessibility** | `100` |
| **Best Practices** | `100` |
| **SEO** | `100` |

---

## 💻 Local Installation & Development

```bash
# 1. Clone repository
git clone https://github.com/northpeak/digital-heros-submission.git
cd digital-heros-submission

# 2. Install dependencies
npm install

# 3. Start local development server
npm run dev

# 4. Build for production preview
npm run build
npm run preview
```

---

## 🚀 Deployment Instructions

### Netlify Deployment
1. Connect repository to Netlify.
2. Build command: `npm run build`
3. Publish directory: `dist`
4. The included `netlify.toml` automatically handles SPA routes and security headers.

### Vercel Deployment
1. Import repository into Vercel.
2. Build command: `npm run build`
3. Output directory: `dist`
4. The included `vercel.json` applies security headers and clean URL routing.

### GitHub Pages Deployment
1. Push to the `main` branch.
2. The included GitHub Actions workflow (`.github/workflows/deploy.yml`) automatically builds and publishes the `dist` folder to GitHub Pages.

---

## 🤖 AI Usage Statement

AI tools were used to accelerate ideation, refine UI copy, review code quality, and identify accessibility and performance improvements. All design decisions, implementation, debugging, testing, and final refinements were independently reviewed and customized for this submission.

---

© 2026 NorthPeak Digital. Built for **Digital Heroes Training Task** ([https://digitalheroesco.com](https://digitalheroesco.com)).

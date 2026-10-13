# Dynace Health Awareness Center - Kadapa, Andhra Pradesh

A complete, premium, minimalist, and SEO-optimized business website for **Dynace Health Awareness Center** in Kadapa, Andhra Pradesh, India.

---

## 🏢 Business Overview

- **Official Name**: Dynace Health Awareness Center
- **Brand**: Dynace Global
- **Business Representative**: B. Rama Mohan
- **Designation**: Rising Ace of Dynace Global
- **Phone & WhatsApp**: +91 78010 65008
- **Address**: #1-308, 1st Floor, Rajiv Park, Road No. 05, Maruthi Nagar, SP Bunglow Opp. Road, Kadapa, Andhra Pradesh - 516001, India.
- **Google Maps Plus Code**: `FR7G+QJ2`, Kadapa, Andhra Pradesh
- **GPS Coordinates**: Latitude: `14.464404`, Longitude: `78.824492`
- **Google Maps Listing**: [Dynance Health Awareness Center on Google Maps](https://www.google.com/maps/place/Dynance+Health+Awareness+Center/@14.4644043,78.8244923,17z/data=!3m1!4b1!4m6!3m5!1s0x3bb373dfb9ea6e11:0xfffb7aecc20327a!8m2!3d14.4644043!4d78.8244923)
- **Official Product Reference**: [https://m.dynaceglobal.com/ramamohan/home](https://m.dynaceglobal.com/ramamohan/home)

---

## 📦 Verified Products Featured

All six official Dynace Global products referenced on Rama Mohan's official page are fully cataloged with dedicated detail pages, verified ingredients, manufacturer usage instructions, and WhatsApp inquiry buttons:

1. **Dynace Rocenta** (`/products/dynace-rocenta`) - Botanical cellular rejuvenation with NMN, Bulgarian Rose Placenta, and superfoods.
2. **Urbanism** (`/products/urbanism`) - Dual-function SUNZ (daytime fat burning) and MOONZ (overnight detox).
3. **Ace Guard** (`/products/ace-guard`) - Triple Stem Cells (Cactus, Pine Bark, Sea Buckthorn) & Black Elderberry immune defense.
4. **Lyftmax** (`/products/lyftmax`) - Women's hormonal balance and vitality featuring EstroG-100© and Persian Saffron.
5. **Ace Brew** (`/products/ace-brew`) - 100% Arabica functional coffee infused with NMN and Gymnema Sylvestre.
6. **Triple Root** (`/products/triple-root`) - Adaptogenic herbal coffee with Maca Root, Tongkat Ali, Korean Ginseng, and Ashwagandha.

---

## 📰 Health Awareness Blog

Includes six evidence-based health awareness guides:
- *How to Read Health and Wellness Product Labels with Confidence*
- *Understanding Ingredients in Modern Wellness Products: Adaptogens & Botanicals*
- *Everyday Healthy Lifestyle Habits for Sustainable Energy and Vitality*
- *Essential Questions to Ask Before Buying Any Wellness Product*
- *Understanding Nutrition Labels: Calories, Macros, and Daily Values*
- *How to Evaluate Health Product Information Online: Separating Fact from Hype*

*(Note: Telugu article translations are supported for upcoming regional expansion).*

---

## 💻 Tech Stack & Architecture

- **Framework**: React 18 with TypeScript
- **Bundler**: Vite
- **Styling**: Tailwind CSS (customized brand palette: `#073F8A`, `#0866B2`, `#11B5D8`, `#F7FAFD`)
- **Routing**: React Router DOM (v6)
- **Icons**: Lucide React
- **SEO & Structured Data**: Semantic HTML5, dynamic Meta titles/descriptions, Open Graph, Canonical URLs, and Schema.org `LocalBusiness` + `Product` JSON-LD markup.
- **Assets**: Self-hosted official logos and product assets stored in `/public/images/`.

---

## 🚀 Running Locally

```bash
# 1. Install dependencies
npm install

# 2. Run local development server (http://localhost:3000)
npm run dev

# 3. Build for production
npm run build

# 4. Preview production build (http://localhost:4173)
npm run preview
```

---

## 🌐 Production Deployment Guide

### Option A: Vercel (Recommended - Instant & Free SSL)
1. Push this repository to GitHub.
2. Connect your GitHub repository to [Vercel](https://vercel.com).
3. Vercel automatically detects Vite and builds the project.
4. Add your custom domain (e.g., `dynacekadapa.in`) in Vercel Project Settings > Domains.
5. Point your domain DNS records (A and CNAME) to Vercel.

### Option B: Netlify
1. Connect repository to [Netlify](https://netlify.com).
2. Set Build Command: `npm run build` and Publish Directory: `dist`.
3. Add single-page application redirect rule by creating `public/_redirects` with:
   ```
   /*    /index.html   200
   ```
4. Configure custom domain with automatic free Let's Encrypt SSL.

### Option C: Traditional cPanel / Apache / Nginx
1. Run `npm run build`.
2. Upload the generated contents of the `dist/` directory to your web server's `public_html/`.
3. Ensure URL rewriting is enabled so non-root URLs (e.g., `/products/dynace-rocenta`) rewrite to `/index.html`.

---

## 🔍 Google Search Console & Local SEO Setup

### 1. Google Search Console Verification:
1. Open [Google Search Console](https://search.google.com/search-console).
2. Add your property (e.g., `https://dynacekadapa.in`).
3. Verify ownership via DNS TXT record or HTML file tag.
4. Navigate to **Sitemaps** in the left menu.
5. Enter `sitemap.xml` and click **Submit**.
6. Google will automatically crawl and index all 18 pages.

### 2. Google Business Profile (Google Maps) Optimization:
1. Go to [Google Business Profile](https://business.google.com).
2. Create or claim **Dynace Health Awareness Center**.
3. Category: **Health and Beauty Shop** or **Wellness Center**.
4. Set exact address: `#1-308, 1st Floor, Rajiv Park, Road No. 05, Maruthi Nagar, SP Bunglow Opp. Road, Kadapa, Andhra Pradesh - 516001`.
5. Enter Plus Code: `FR7G+QJ2, Kadapa`.
6. Add Phone & WhatsApp: `+91 78010 65008`.
7. Link Website URL: `https://dynacekadapa.in`.
8. Complete verification (video verification or postcard).

---

## ⚖️ Compliance & Business Owner Checklist

- [ ] **Custom Domain**: Register preferred domain (e.g., `dynacekadapa.in`).
- [ ] **Form Handling**: Current contact form provides validated inputs with direct one-click WhatsApp dispatch to B. Rama Mohan. For email delivery, integrate Formspree or EmailJS by updating the submit handler in `ContactPage.tsx`.
- [ ] **Pricing Inquiries**: Products are intentionally routed to WhatsApp consultation to quote fresh batch delivery and local Indian Rupee (INR) packaging rates.
- [ ] **Telugu Guides**: When ready, Telugu translations can be added to `/src/data/articles.ts`.

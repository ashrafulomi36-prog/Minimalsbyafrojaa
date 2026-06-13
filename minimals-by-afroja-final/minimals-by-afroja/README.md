# Minimals By Afroja 🎂

A **production-ready, fully-typed Next.js 15** website for a premium Bangladeshi cake business.

**Tech Stack:** Next.js 15 (App Router) · TypeScript · Tailwind CSS · Sanity CMS · Framer Motion · React Hook Form · Vercel

---

## Features

- ✅ Sanity CMS with full product schema (flavours, pricing, galleries)
- ✅ Dynamic flavour-based pricing calculator (live, client-side)
- ✅ WhatsApp order & inquiry system (no backend required)
- ✅ Product gallery with lightbox zoom and thumbnail strip
- ✅ ISR revalidation via webhook
- ✅ SEO: Metadata, Open Graph, Twitter Cards, Sitemap, Robots.txt
- ✅ Framer Motion scroll animations & hover effects
- ✅ Skeleton loading states
- ✅ Mobile-first responsive design
- ✅ Fully accessible (ARIA, semantic HTML, keyboard navigation)
- ✅ Zero TypeScript errors · Lighthouse-ready

---

## Folder Structure

```
minimals-by-afroja/
├── sanity.config.ts              # Sanity Studio config
├── next.config.ts                # Next.js config (image domains)
├── tailwind.config.ts            # Design tokens & color palette
├── .env.example                  # Environment variable reference
├── vercel.json                   # Vercel deployment config
│
└── src/
    ├── app/
    │   ├── layout.tsx            # Root layout + global metadata
    │   ├── page.tsx              # Home page
    │   ├── globals.css           # Global styles + Tailwind
    │   ├── sitemap.ts            # Auto-generated sitemap
    │   ├── robots.ts             # Robots.txt
    │   ├── not-found.tsx         # 404 page
    │   ├── error.tsx             # Error boundary
    │   ├── cakes/page.tsx        # /cakes category page
    │   ├── ice-cream/page.tsx    # /ice-cream category page
    │   ├── brownies/page.tsx     # /brownies category page
    │   ├── contact/page.tsx      # Contact page
    │   ├── queries/page.tsx      # Inquiry form page
    │   ├── product/[slug]/       # Dynamic product detail pages
    │   │   └── page.tsx
    │   ├── studio/[[...tool]]/   # Sanity Studio (embedded)
    │   │   └── page.tsx
    │   └── api/revalidate/       # ISR webhook endpoint
    │       └── route.ts
    │
    ├── components/
    │   ├── layout/
    │   │   ├── Navbar.tsx        # Sticky navbar + mobile hamburger
    │   │   ├── Footer.tsx        # Footer with social links
    │   │   └── SiteLayout.tsx    # Page wrapper (Navbar + Footer + Toast)
    │   ├── home/
    │   │   ├── HeroSection.tsx   # Animated hero with floating badges
    │   │   ├── CategoriesSection.tsx  # 3 category cards
    │   │   ├── FeaturedProductsSection.tsx  # Server component (ISR)
    │   │   ├── WhyChooseUsSection.tsx  # 4 feature cards
    │   │   └── SocialSection.tsx  # Instagram + Facebook CTAs
    │   ├── product/
    │   │   ├── CategoryPage.tsx  # Reusable category page component
    │   │   ├── ProductGallery.tsx  # Gallery + thumbnails + lightbox
    │   │   └── OrderForm.tsx     # Dynamic pricing + WhatsApp order
    │   └── ui/
    │       ├── ProductCard.tsx   # Product grid card with hover
    │       ├── Section.tsx       # Animated section wrapper
    │       └── Skeletons.tsx     # Loading skeleton components
    │
    ├── sanity/
    │   ├── schemas/
    │   │   ├── product.ts        # Product document schema
    │   │   └── index.ts          # Schema exports
    │   └── lib/
    │       ├── client.ts         # Sanity client + image URL builder
    │       └── queries.ts        # GROQ query definitions
    │
    ├── types/
    │   └── index.ts              # TypeScript interfaces + constants
    │
    └── lib/
        └── utils.ts              # Utility functions (pricing, WhatsApp, etc.)
```

---

## Environment Variables

Copy `.env.example` to `.env.local` and fill in the values:

```bash
cp .env.example .env.local
```

| Variable | Description |
|---|---|
| `NEXT_PUBLIC_SANITY_PROJECT_ID` | Your Sanity project ID |
| `NEXT_PUBLIC_SANITY_DATASET` | Dataset name (usually `production`) |
| `NEXT_PUBLIC_SANITY_API_VERSION` | API version (e.g., `2024-01-01`) |
| `SANITY_API_TOKEN` | Sanity API token (for server mutations) |
| `SANITY_WEBHOOK_SECRET` | Secret for ISR webhook validation |
| `NEXT_PUBLIC_SITE_URL` | Your production URL |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | WhatsApp number with country code (no `+`) |

---

## Deployment Guide

### Step 1 — Set up Sanity

1. Go to [sanity.io](https://sanity.io) and create a free account
2. Create a new project → name it **Minimals By Afroja**
3. Choose dataset: `production`
4. Copy your **Project ID** from the project dashboard
5. Go to **API → Tokens** → create a new token with **Editor** permissions
6. Go to **API → CORS Origins** → add your Vercel URL (e.g., `https://minimalsbyafroja.vercel.app`) and `http://localhost:3000`

### Step 2 — Push to GitHub

```bash
cd minimals-by-afroja
git init
git add .
git commit -m "Initial commit: Minimals By Afroja website"
git remote add origin https://github.com/yourusername/minimals-by-afroja.git
git push -u origin main
```

### Step 3 — Deploy on Vercel

1. Go to [vercel.com](https://vercel.com) and sign in with GitHub
2. Click **Add New → Project** → import your repository
3. Under **Environment Variables**, add all variables from `.env.example` with real values
4. Click **Deploy** → Vercel will build and deploy automatically

### Step 4 — Set up Sanity ISR Webhook (optional, for live updates)

1. In Vercel, get your deployment URL (e.g., `https://minimalsbyafroja.vercel.app`)
2. In Sanity dashboard → **API → Webhooks → Add Webhook**:
   - URL: `https://minimalsbyafroja.vercel.app/api/revalidate`
   - Dataset: `production`
   - Trigger on: Create, Update, Delete
   - Add header: `x-sanity-webhook-secret` = your `SANITY_WEBHOOK_SECRET` value
3. Now every time you publish a product in Sanity Studio, the website updates within seconds

### Step 5 — Access Sanity Studio

Once deployed, your Sanity Studio is available at:
```
https://minimalsbyafroja.vercel.app/studio
```

Log in with your Sanity account to manage products.

---

## Adding Your First Product in Sanity

1. Go to `/studio` on your deployed site
2. Click **Product → New Product**
3. Fill in:
   - **Title**: e.g., "Classic Vanilla Birthday Cake"
   - **Slug**: auto-generated from title
   - **Category**: Cake / Ice Cream / Brownies
   - **Short Description**: 1–2 sentence summary
   - **Base Price**: Starting price in BDT
   - **Flavours**: Add flavour objects (name + price per pound)
   - **Images**: Upload 1–10 product images
   - **Availability**: Available / Out of Stock / Pre-Order
   - **Featured**: Toggle on to show in homepage Featured section
4. Click **Publish**

---

## Local Development

```bash
# Install dependencies
npm install

# Copy env file and fill in Sanity credentials
cp .env.example .env.local

# Start dev server
npm run dev
```

Visit `http://localhost:3000` for the website and `http://localhost:3000/studio` for Sanity Studio.

---

## WhatsApp Order Flow

1. Customer browses products
2. On product page, customer:
   - Selects flavour (price updates instantly)
   - Selects weight in pounds (total price recalculates live)
   - Fills in name, number, location, notes
3. Clicks **Submit Order via WhatsApp**
4. Pre-formatted message opens in WhatsApp with all order details
5. Customer sends → you receive and confirm the order

**No backend, no database, no payment gateway required.**

---

## Customisation

- **Colors**: Edit `tailwind.config.ts` → `theme.extend.colors`
- **Business info**: Update `NEXT_PUBLIC_WHATSAPP_NUMBER` in `.env.local`
- **Social links**: Search for Facebook/Instagram URLs in components and update
- **Categories**: Edit `src/types/index.ts` → `CATEGORIES`
- **Fonts**: Edit `src/app/globals.css` → `@import` line

---

## Performance Notes

- All category/product pages use **ISR** (revalidate every 60 seconds)
- Images served through **Sanity's CDN** with Next.js `<Image>` optimization
- Server Components used for all data-fetching (category pages, featured products)
- Client Components only where interactivity is required (navbar, forms, gallery)
- Lazy loading on all product card images

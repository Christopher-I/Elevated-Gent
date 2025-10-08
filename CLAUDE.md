# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**The Elevated Gentleman** is a Next.js 15 men's styling service platform that combines:
- Personal styling consultations ($250-$1,000 packages)
- Curated product recommendations ("Weekly Finds")
- Affiliate-linked collections
- User authentication & payment processing
- Content management capabilities

**Tech Stack**: Next.js 15 (Turbopack), TypeScript, React 19, Firebase Auth, Stripe, Tailwind CSS 4

## Essential Commands

### Development
```bash
npm run dev          # Start dev server on http://localhost:3001 with Turbopack
npm run build        # Production build with Turbopack
npm start            # Start production server
npm run lint         # Run ESLint
```

### Port Configuration
The app runs on **port 3001** (not the default 3000). Check `package.json` if the port needs adjustment.

### Testing Changes
1. Start dev server: `npm run dev`
2. Navigate to http://localhost:3001
3. Test authentication flows, payment forms, and navigation
4. Check mobile responsiveness (hamburger menu, modals)

## Architecture Overview

### App Router Structure
This is a **Next.js 15 App Router** project with TypeScript. All pages are in `src/app/`:
- `src/app/page.tsx` - Homepage
- `src/app/services/page.tsx` - Service packages (payment/booking flow)
- `src/app/collections/page.tsx` - Outfit collections
- `src/app/weekly/page.tsx` - Weekly product finds
- `src/app/account/page.tsx` - User profile (protected route)
- `src/app/auth/` - Sign in, sign up, password reset
- `src/app/api/` - API routes for Stripe, bookings

### Key Architectural Patterns

**Client vs Server Components**:
- Root layout (`src/app/layout.tsx`) is a Server Component with metadata exports
- Interactive pages (services, account, auth) are Client Components (`'use client'`)
- **Important**: Never export `metadata` from Client Components—it causes build errors

**State Management**:
- **Auth**: Firebase Authentication via React Context (`src/lib/firebase/auth.tsx`)
- **Cart**: Shopping cart context in `src/lib/hooks/useCart.tsx`
- No global state library; uses React Context + local state

**Payment Flow** (`src/app/services/page.tsx`):
- Configurable flow: `PAYMENT_FIRST` (default) or `BOOKING_FIRST`
- `PAYMENT_FIRST`: User pays → Stripe checkout → Success page
- `BOOKING_FIRST`: User books → Gets contacted → Pays later
- Service prices defined in `src/lib/stripe/client.ts`

**Authentication Flow**:
- Firebase Auth manages users (no custom backend user DB currently)
- Login: `src/app/auth/signin/page.tsx`
- Signup: `src/app/auth/signup/page.tsx`
- Protected routes use `ProtectedRoute` wrapper (`src/components/auth/ProtectedRoute.tsx`)
- Auth context exposes: `user`, `signIn`, `signUp`, `logout`, `resetPassword`

### Data Layer

**Firebase**:
- `src/lib/firebase/config.ts` - Firebase initialization
- `src/lib/firebase/auth.tsx` - Auth context provider
- `src/lib/firebase/firestore.ts` - Firestore operations (bookings, user data)

**Stripe**:
- `src/lib/stripe/client.ts` - Client-side Stripe config & service prices
- `src/lib/stripe/server.ts` - Server-side Stripe operations
- `src/app/api/stripe/` - Payment intent, checkout, webhook handlers

**Product Data**:
- `src/lib/products/data.ts` - Hardcoded product catalog (weekly finds, outfits)
- `src/lib/products/types.ts` - TypeScript types for Product, OutfitLook
- **No database for products yet**—data is static in code

### Component Organization

**Layout Components** (`src/components/layout/`):
- `header.tsx` - Navigation header with mobile slide-out menu
- `footer.tsx` - Footer with newsletter signup, links, social media
- `container.tsx` - Responsive container wrapper

**UI Components** (`src/components/ui/`):
- `button.tsx`, `input.tsx`, `label.tsx` - Base UI primitives (shadcn-style)
- Use `cva` (class-variance-authority) for variant styling

**Feature Components**:
- `src/components/booking/` - BookingForm, BookingSuccess
- `src/components/payment/` - PaymentForm (Stripe Elements)
- `src/components/products/` - ProductCard, OutfitCard
- `src/components/account/` - ProfileEditModal
- `src/components/seo/` - StructuredData (JSON-LD for SEO)

### Styling System

**Tailwind CSS 4** (postcss plugin):
- Config: `postcss.config.mjs` imports `@tailwindcss/postcss`
- Global styles: `src/app/globals.css`
- Custom font: **Bitter** (Google Fonts) configured in `src/app/layout.tsx`
- Uses `cn()` utility (`src/lib/utils/cn.ts`) for conditional classes

**Mobile-First Design**:
- Hamburger menu in header for mobile (`<768px`)
- Modals and forms are responsive
- Test on mobile viewports before committing

### SEO & Metadata

**Metadata System**:
- `src/lib/seo/metadata.ts` - Helper functions for generating page metadata
- `src/components/seo/StructuredData.tsx` - JSON-LD structured data component
- Each page can set title, description, OpenGraph, Twitter cards
- **Critical**: Only Server Components can export `metadata`

**Existing SEO**:
- Root layout has base metadata (title template, description, icons)
- Individual pages should use `generateMetadata()` or static `metadata` export

## Common Development Tasks

### Adding a New Service Package
1. Update `SERVICE_PRICES` in `src/lib/stripe/client.ts`
2. Add service card to `src/app/services/page.tsx`
3. Ensure Stripe product exists in Stripe dashboard

### Adding a New Product to Weekly Finds
1. Add product object to `weeklyProducts` array in `src/lib/products/data.ts`
2. Include all required fields: `id`, `title`, `brand`, `image`, `price`, `productLink`, `affiliateLink`
3. Set `featured: true` to highlight on homepage
4. Add remote image domain to `next.config.ts` if needed

### Updating Footer Links
- Edit `src/components/layout/footer.tsx`
- **Only link to existing pages**—broken links were recently cleaned up
- Footer sections: Services, Collections, Company

### Working with Firebase Auth
- Auth functions: `signIn()`, `signUp()`, `logout()`, `resetPassword()`
- Access current user: `const { user } = useAuth()`
- Protect routes: Wrap page in `<ProtectedRoute>` component

### Working with Stripe
- Test mode keys in `.env.local`: `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`, `STRIPE_SECRET_KEY`
- Service prices in cents (e.g., `25000` = $250.00)
- Webhook secret: `STRIPE_WEBHOOK_SECRET` for `/api/stripe/webhook`

## Configuration Files

- `next.config.ts` - Remote image domains for product images
- `tsconfig.json` - Path alias `@/*` maps to `src/*`
- `eslint.config.mjs` - Warnings for unused vars, explicit `any`, unescaped entities
- `postcss.config.mjs` - Tailwind 4 via PostCSS
- `package.json` - Scripts use `--turbopack` flag for faster builds

## Environment Variables

Required in `.env.local`:
```
# Firebase
NEXT_PUBLIC_FIREBASE_API_KEY=
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
NEXT_PUBLIC_FIREBASE_PROJECT_ID=
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=
NEXT_PUBLIC_FIREBASE_APP_ID=

# Stripe
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=
STRIPE_SECRET_KEY=
STRIPE_WEBHOOK_SECRET=
```

## Known Patterns & Conventions

### Metadata Exports
- **Do not export `metadata` from Client Components** (causes build errors)
- Use `generateMetadata()` for dynamic metadata in Server Components
- Client components can render `<StructuredData>` for JSON-LD

### Form Labels
- Use native HTML `<label>` for form inputs, not custom `<Label>` component
- Custom `Label` component is for display/styling only

### Price Utilities
- `parsePrice()` function in `src/lib/products/utils.ts` converts "$250" to 25000 cents
- Use for Stripe amount conversions

### Auth Method Names
- Use `logout()` not `signOut()` (auth context method is `logout`)

### TypeScript
- Strict mode enabled
- ESLint warnings for `any` types—prefer proper typing
- Some legacy `any` types remain (technical debt)

## Git Workflow

Current branch: **main**
Recent commits focused on:
- Mobile navigation enhancements
- Footer link cleanup
- SEO metadata system
- Build error fixes

When committing:
- Include descriptive messages
- Reference file paths and line numbers for specific changes
- Follow existing commit message style (see `git log`)

## Important Business Context

**Client**: Student with limited budget ($2,500 initial project at discounted rate)
**CMS Proposal**: $1,800 proposal pending (see `CMS_PROPOSAL.md`)
**Long-term Strategy**: Portfolio building, relationship development, future upsells

**Technical Debt**:
- No automated tests
- Some TypeScript `any` types
- Products are hardcoded (no CMS yet)
- No CI/CD pipeline
- Manual deployment

**Future Opportunities**:
- CMS admin dashboard
- Analytics integration
- Email marketing automation
- Subscription box system
- AI-powered recommendations

## Troubleshooting

**Build fails with metadata error**:
- Check if Client Component exports `metadata`—remove it

**Stripe payment not working**:
- Verify `.env.local` has correct keys
- Check Stripe dashboard for test mode
- Ensure webhook endpoint is configured

**Auth redirect loops**:
- Check `ProtectedRoute` logic
- Verify Firebase config is correct

**Image not loading**:
- Add remote domain to `next.config.ts` `remotePatterns`

**Port 3001 conflict**:
- Check if another service is using port 3001
- Update port in `package.json` dev script if needed

## Code Quality Standards

- Use TypeScript strict mode
- Prefer explicit types over `any`
- Use `cn()` for conditional Tailwind classes
- Follow Next.js 15 best practices (App Router, Server Components default)
- Keep Client Components minimal—only when interactivity needed
- Write semantic HTML (accessibility matters)

## External Services

- **Firebase**: Authentication & Firestore database
- **Stripe**: Payment processing & webhooks
- **Calendly**: Booking integration (embedded in booking flow)
- **Affiliate Networks**: Various (links in product data)

---

*Last Updated: During initial codebase setup*
*Context Files: See `CONVERSATION_CONTEXT.md` for project history and business context*

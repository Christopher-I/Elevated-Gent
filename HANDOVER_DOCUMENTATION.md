# The Elevated Gentleman - Developer Handover Documentation

## Table of Contents
1. [Project Overview](#project-overview)
2. [Tech Stack](#tech-stack)
3. [Project Architecture](#project-architecture)
4. [Webflow Integration](#webflow-integration)
5. [Authentication System](#authentication-system)
6. [Subscription System](#subscription-system)
7. [Stripe Integration](#stripe-integration)
8. [Firebase/Firestore Setup](#firebasefirestore-setup)
9. [Content Management (CMS Requirements)](#content-management-cms-requirements)
10. [Environment Variables](#environment-variables)
11. [Deployment](#deployment)
12. [Development Workflow](#development-workflow)

---

## Project Overview

**The Elevated Gentleman** is a men's lifestyle and styling platform offering:
- Personal styling services
- Weekly curated fashion finds (affiliate products)
- Outfit inspiration collections
- Wellness & grooming articles
- Subscription-based access ($2/month)

### Current State
- **Homepage**: Built with Webflow, embedded as iframe
- **Personal Styling Page**: Built with Webflow, embedded as iframe
- **All other pages**: Custom Next.js code
- **Subscription System**: Fully functional with Stripe
- **Authentication**: Firebase Auth with email/password
- **Content**: Currently hardcoded in TypeScript files

---

## Tech Stack

### Core Framework
- **Next.js 15.5.3** with App Router
- **React 19.1.0**
- **TypeScript 5**
- **Tailwind CSS 4** for styling
- **Turbopack** for faster builds

### Authentication & Database
- **Firebase 12.3.0**
  - Firebase Authentication (email/password)
  - Firestore Database (user data, subscriptions)

### Payment Processing
- **Stripe 18.5.0** (server-side)
- **@stripe/stripe-js 7.9.0** (client-side)
- **@stripe/react-stripe-js 4.0.2** (React components)

### UI Components
- **Radix UI** (@radix-ui/react-slot)
- **Lucide React** (icons)
- **class-variance-authority** (component variants)
- **clsx** & **tailwind-merge** (className utilities)

### Other Dependencies
- **Prisma 6.16.2** (database ORM - currently not fully utilized)
- **NextAuth 4.24.11** (installed but not actively used, using Firebase Auth instead)

---

## Project Architecture

### Directory Structure

```
elevated-gentleman-app/
├── src/
│   ├── app/                          # Next.js App Router pages
│   │   ├── account/                  # User account/dashboard
│   │   ├── admin/                    # Admin tools (create test users)
│   │   ├── api/                      # API routes
│   │   │   ├── bookings/            # Booking endpoints
│   │   │   └── stripe/              # Stripe payment endpoints
│   │   │       ├── checkout/
│   │   │       ├── create-payment-intent/
│   │   │       ├── create-subscription/  # Monthly subscription
│   │   │       ├── payment-success/
│   │   │       └── webhook/         # Stripe webhooks
│   │   ├── auth/                    # Authentication pages
│   │   │   ├── signin/
│   │   │   ├── signup/
│   │   │   └── forgot-password/
│   │   ├── outfit-inspiration/       # Outfit collections (CUSTOM CODE)
│   │   ├── personal-styling/         # Webflow embedded page
│   │   ├── privacy/                  # Privacy policy
│   │   ├── weekly/                   # Weekly finds (CUSTOM CODE)
│   │   ├── wellness/                 # Wellness articles (CUSTOM CODE)
│   │   ├── layout.tsx               # Root layout
│   │   ├── page.tsx                 # Homepage redirect
│   │   └── globals.css              # Global styles
│   │
│   ├── components/                   # React components
│   │   ├── account/                 # Profile edit modal
│   │   ├── articles/                # Article cards, related products
│   │   ├── auth/                    # Protected route wrapper
│   │   ├── booking/                 # Booking form & success
│   │   ├── layout/                  # Header, Footer, Container
│   │   ├── payment/                 # Payment form component
│   │   ├── products/                # Product & outfit cards
│   │   ├── seo/                     # Structured data
│   │   ├── subscription/            # Subscription modal & gate
│   │   └── ui/                      # Base UI components (button, input, label)
│   │
│   └── lib/                         # Utilities and configurations
│       ├── articles/                # Article data & types
│       │   ├── data.ts             # Hardcoded articles & affiliate products
│       │   └── types.ts
│       ├── constants/               # App configuration
│       │   └── index.ts            # Navigation, categories, social links
│       ├── firebase/                # Firebase configuration
│       │   ├── auth.tsx            # Auth context & hooks
│       │   ├── config.ts           # Firebase initialization
│       │   └── firestore.ts        # Firestore CRUD operations
│       ├── hooks/                   # Custom React hooks
│       │   └── useCart.tsx         # Shopping cart (not fully implemented)
│       ├── products/                # Product data & types
│       │   ├── data.ts             # Hardcoded weekly products & outfits
│       │   ├── types.ts
│       │   └── utils.ts
│       ├── stripe/                  # Stripe utilities
│       │   ├── client.ts           # Client-side Stripe config
│       │   └── server.ts           # Server-side Stripe config
│       ├── types/                   # Shared TypeScript types
│       └── utils/                   # Utility functions
│
├── public/                          # Static assets
│   └── images/                     # Product images, logos
│
├── firestore.rules                 # Firestore security rules
├── firebase.json                   # Firebase configuration
├── package.json
├── tsconfig.json
└── tailwind.config.ts
```

---

## Webflow Integration

### Pages Built in Webflow
1. **Homepage** (`/`)
2. **Personal Styling** (`/personal-styling`)

### How It Works
- Webflow pages are published and embedded as `<iframe>` elements
- These pages are fully editable through Webflow's visual editor
- To update: Edit in Webflow → Publish → Changes reflect automatically

### Webflow vs Custom Code Pages

| Page | Source | Editing Method |
|------|--------|---------------|
| Homepage | Webflow | Edit in Webflow dashboard |
| Personal Styling | Webflow | Edit in Webflow dashboard |
| Outfit Inspiration | Custom Code | Edit TypeScript files |
| Weekly Finds | Custom Code | Edit TypeScript files |
| Wellness | Custom Code | Edit TypeScript files |
| Account | Custom Code | Edit TypeScript files |
| Auth Pages | Custom Code | Edit TypeScript files |

### Important Note
- Webflow pages handle their own styling and layout
- Navigation header/footer are consistent across all pages (custom code)
- Webflow pages should maintain same header/footer styling for consistency

---

## Authentication System

### Technology
- **Firebase Authentication** with email/password
- **Auth Context** (`src/lib/firebase/auth.tsx`) provides app-wide auth state

### User Flow
1. User signs up at `/auth/signup`
2. Firebase creates auth user
3. Firestore document created in `users` collection
4. User auto-logged in and redirected to `/personal-styling`
5. Subscription modal appears if user hasn't subscribed

### Auth Context API
```typescript
const {
  user,              // Firebase User object
  loading,           // Auth loading state
  signIn,            // (email, password) => Promise<void>
  signUp,            // (email, password, displayName?) => Promise<void>
  logout,            // () => Promise<void>
  resetPassword      // (email) => Promise<void>
} = useAuth()
```

### Protected Routes
- `<ProtectedRoute>` component wraps pages requiring authentication
- Redirects to `/auth/signin` if user not logged in
- Used in: `/account`, service booking pages

### Firestore User Schema
```typescript
{
  id: string                    // Firebase UID
  email: string
  displayName?: string
  photoURL?: string
  subscriptionStatus?: 'active' | 'inactive' | 'cancelled'
  stripeCustomerId?: string
  stripeSubscriptionId?: string
  subscriptionStartDate?: Timestamp
  createdAt: Timestamp
  updatedAt: Timestamp
  preferences?: {
    newsletter: boolean
    notifications: boolean
  }
}
```

---

## Subscription System

### Overview
- **$2/month recurring subscription** via Stripe
- **Wall Street Journal-style paywall** that reappears after dismissal
- Users cannot access content without active subscription (except auth pages)

### User Experience
1. New user signs up → `subscriptionStatus: 'inactive'`
2. After 3 seconds, subscription modal appears
3. User can close modal (X button in top-right)
4. Modal reappears after 60 seconds
5. User clicks "Subscribe Now" → Redirected to Stripe Checkout
6. After payment → Webhook updates `subscriptionStatus: 'active'`
7. Modal disappears permanently

### Implementation Files
- **`src/components/subscription/SubscriptionGate.tsx`** - Global paywall wrapper
- **`src/components/subscription/SubscriptionModal.tsx`** - Subscription modal UI
- **`src/app/layout.tsx`** - Wraps entire app with SubscriptionGate

### Configuration
```typescript
// Time constants in SubscriptionGate.tsx
const INITIAL_DELAY = 3000      // 3 seconds
const RESHOW_DELAY = 60000      // 60 seconds
```

### Modal Behavior
- Shows on all pages except `/auth/*` pages
- Cannot be permanently closed without subscribing
- Tracks dismiss count to re-show periodically
- Dark backdrop with blur effect (z-index: 9999)

---

## Stripe Integration

### Setup
- **Test Mode** currently active
- **Live Mode** requires production keys

### Subscription Flow
1. User clicks "Subscribe Now" in modal
2. Frontend calls `/api/stripe/create-subscription`
3. API creates Stripe Customer (or retrieves existing)
4. API creates Checkout Session for recurring subscription
5. User redirected to Stripe-hosted checkout page
6. User enters payment details
7. Stripe processes payment
8. Stripe sends webhook to `/api/stripe/webhook`
9. Webhook handler updates Firestore user to `subscriptionStatus: 'active'`
10. User redirected to `/account?subscription=success`

### API Endpoints

#### `/api/stripe/create-subscription` (POST)
- Creates monthly subscription checkout session
- **Input**: `{ userId, userEmail }`
- **Output**: `{ sessionId }`
- **Price**: $2.00/month (200 cents)

#### `/api/stripe/webhook` (POST)
- Handles Stripe webhook events
- **Events handled**:
  - `checkout.session.completed` - Subscription activated
  - `customer.subscription.deleted` - Subscription cancelled
  - `customer.subscription.updated` - Subscription status changed
  - `payment_intent.succeeded` - One-time payment succeeded
  - `payment_intent.payment_failed` - Payment failed

### Webhook Security
- Verifies Stripe signature using `STRIPE_WEBHOOK_SECRET`
- Returns 400 if signature invalid
- Logs all events for debugging

### Test Cards (Stripe Test Mode)
```
Success: 4242 4242 4242 4242
Decline: 4000 0000 0000 0002
Exp Date: Any future date
CVC: Any 3 digits
ZIP: Any 5 digits
```

### Environment Variables Needed
```env
STRIPE_SECRET_KEY=sk_test_...
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
STRIPE_WEBHOOK_SECRET=whsec_...
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

### Stripe Dashboard Setup
1. Create subscription product in Stripe Dashboard
2. Set up webhook endpoint: `https://yourdomain.com/api/stripe/webhook`
3. Select events to listen for (listed above)
4. Copy webhook signing secret to env vars

---

## Firebase/Firestore Setup

### Firebase Project Configuration
- **Project ID**: Check `firebase.json` or Firebase console
- **Authentication**: Email/Password enabled
- **Firestore**: Native mode database

### Collections

#### `users`
- Document ID = Firebase Auth UID
- Schema: See [Auth System](#authentication-system) section
- Security: Users can read/write their own document only

#### `orders` (structure defined, not fully used)
- Payment/service orders
- Fields: userId, items, total, status, addresses, stripe IDs

#### `appointments` (structure defined, not fully used)
- Service bookings
- Fields: userId, serviceId, date, status, notes

#### `products` (collection exists but empty)
- Would store product catalog
- Currently products hardcoded in `src/lib/products/data.ts`

#### `services` (collection exists but empty)
- Would store styling services
- Currently services are static content in pages

### Firestore Security Rules

Located in `firestore.rules`:
```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /users/{userId} {
      allow read: if request.auth != null && request.auth.uid == userId;
      allow create: if request.auth != null && request.auth.uid == userId;
      allow update: if request.auth != null && request.auth.uid == userId;
      allow delete: if false;
    }

    match /orders/{orderId} {
      allow read: if request.auth != null && resource.data.userId == request.auth.uid;
      allow create: if request.auth != null;
      allow update, delete: if false;
    }

    match /appointments/{appointmentId} {
      allow read: if request.auth != null && resource.data.userId == request.auth.uid;
      allow create: if request.auth != null;
      allow update: if request.auth != null && resource.data.userId == request.auth.uid;
      allow delete: if false;
    }

    match /products/{productId} {
      allow read: if true;
      allow write: if false;
    }

    match /services/{serviceId} {
      allow read: if true;
      allow write: if false;
    }
  }
}
```

### Deploying Security Rules
```bash
firebase use <project-id>
firebase deploy --only firestore:rules
```

### Firebase Admin SDK
Not currently used, but would enable:
- Server-side user management
- Firestore access without client SDK
- Custom token generation

---

## Content Management (CMS Requirements)

### Current State - Content is Hardcoded

All content is currently stored in TypeScript files as static data:

#### Weekly Finds Products
**File**: `src/lib/products/data.ts`

```typescript
export const weeklyProducts: Product[] = [
  {
    id: 'product-id',
    title: "Product Name",
    brand: "Brand Name",
    description: "Product description",
    image: "https://example.com/image.jpg",
    price: "$100",
    originalPrice: "$150",
    category: "Category",
    tags: ["tag1", "tag2"],
    productLink: "https://...",
    affiliateLink: "https://...",
    featured: true,
    inStock: true,
    sizes: ["S", "M", "L"],
    colors: ["Black", "White"]
  }
]
```

#### Outfit Inspiration Collections
**File**: `src/lib/products/data.ts`

```typescript
export const outfitCollections: OutfitLook[] = [
  {
    id: 'outfit-id',
    title: "Outfit Name",
    occasion: "streetwear",
    image: "/images/outfit.jpg",
    products: [/* array of products */],
    description: "Outfit description"
  }
]
```

#### Wellness Articles
**File**: `src/lib/articles/data.ts`

```typescript
export const articles: Article[] = [
  {
    id: 'article-id',
    slug: 'article-slug',
    title: "Article Title",
    excerpt: "Short description",
    category: 'blueprint',
    occasion: 'casual',
    image: '/images/article.jpg',
    author: { name: "Name", avatar: "url" },
    publishedAt: new Date(),
    readingTime: 8,
    content: [/* array of content blocks */],
    relatedProducts: [/* product IDs */],
    relatedOutfits: [/* outfit IDs */]
  }
]
```

### CMS Implementation Recommendation

#### Option 1: Firestore-Based CMS (Recommended)

**Pros:**
- Already using Firebase
- Real-time updates
- Free tier generous
- Simple integration

**Implementation:**
1. Create Firestore collections for content
2. Build admin panel at `/admin/cms`
3. Forms to add/edit content
4. Image upload to Firebase Storage
5. Real-time preview

**Collections Needed:**
- `weekly_products` - Weekly finds
- `outfit_collections` - Outfit inspiration
- `wellness_articles` - Articles
- `homepage_content` - Hero images, featured items
- `affiliate_products` - Grooming products

**Admin Panel Features:**
- List view of all content
- Add/Edit/Delete operations
- Image upload with preview
- Rich text editor for articles
- Drag-and-drop reordering
- Publish/Unpublish toggle
- Category/tag management

#### Option 2: Headless CMS (Sanity or Contentful)

**Pros:**
- Professional content editing UI
- Built-in image optimization
- Version history
- Collaboration features
- Webhooks for builds

**Cons:**
- Additional service dependency
- Monthly cost (after free tier)
- Learning curve

**Implementation:**
1. Set up Sanity/Contentful account
2. Define content schemas
3. Create API client in Next.js
4. Fetch content server-side
5. Owner edits in CMS dashboard

#### Option 3: Markdown + Git-Based CMS

**Pros:**
- Simple and lightweight
- Version control built-in
- No database needed
- Free

**Cons:**
- Less user-friendly
- Requires Git knowledge
- No real-time updates

### Recommended Implementation: Firestore CMS

#### Step 1: Create Admin Routes

```typescript
// src/app/admin/cms/products/page.tsx
// List all weekly products
// Add/Edit/Delete buttons

// src/app/admin/cms/products/[id]/page.tsx
// Edit individual product
// Image upload
// Form with all fields
```

#### Step 2: Create Firestore Collections

```typescript
// products collection schema
{
  id: string
  title: string
  brand: string
  description: string
  image: string  // Firebase Storage URL
  price: string
  originalPrice?: string
  category: string
  tags: string[]
  productLink: string
  affiliateLink: string
  featured: boolean
  inStock: boolean
  sizes: string[]
  colors: string[]
  createdAt: Timestamp
  updatedAt: Timestamp
  publishedAt?: Timestamp
  published: boolean
}
```

#### Step 3: Update Pages to Fetch from Firestore

```typescript
// src/app/weekly/page.tsx
export default async function WeeklyPage() {
  // Fetch from Firestore instead of static data
  const products = await getPublishedProducts()

  return <ProductGrid products={products} />
}
```

#### Step 4: Image Upload to Firebase Storage

```typescript
// Upload function
async function uploadImage(file: File): Promise<string> {
  const storage = getStorage()
  const storageRef = ref(storage, `products/${Date.now()}_${file.name}`)
  await uploadBytes(storageRef, file)
  return await getDownloadURL(storageRef)
}
```

#### Step 5: Admin Authentication

```typescript
// Protect admin routes
// Check if user.email === 'owner@email.com'
// Or add isAdmin field to user document
```

---

## Environment Variables

### Required Environment Variables

Create `.env.local` file in root directory:

```env
# Firebase Configuration
NEXT_PUBLIC_FIREBASE_API_KEY=AIza...
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your-project-id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your-project.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=123456789
NEXT_PUBLIC_FIREBASE_APP_ID=1:123456789:web:abc123

# Stripe Keys (Test Mode)
STRIPE_SECRET_KEY=sk_test_...
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
STRIPE_WEBHOOK_SECRET=whsec_...

# Stripe Keys (Production)
# STRIPE_SECRET_KEY=sk_live_...
# NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_live_...
# STRIPE_WEBHOOK_SECRET=whsec_...

# Application URL
NEXT_PUBLIC_APP_URL=http://localhost:3000

# Database (if using Prisma in future)
# DATABASE_URL=postgresql://...

# NextAuth (installed but not used)
# NEXTAUTH_URL=http://localhost:3000
# NEXTAUTH_SECRET=your-secret-key
```

### Getting Firebase Config
1. Go to Firebase Console
2. Project Settings → General
3. Scroll to "Your apps" → Web app
4. Copy configuration values

### Getting Stripe Keys
1. Go to Stripe Dashboard
2. Developers → API Keys
3. Copy publishable and secret keys
4. For webhook secret: Developers → Webhooks → Add endpoint → Copy signing secret

---

## Deployment

### Recommended Platform: Vercel

#### Initial Setup
1. Push code to GitHub repository
2. Connect GitHub repo to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy

#### Environment Variables in Vercel
- Go to Project Settings → Environment Variables
- Add all variables from `.env.local`
- Separate staging/production if needed

#### Custom Domain
- Add domain in Vercel
- Update DNS records
- Update `NEXT_PUBLIC_APP_URL` to production URL

#### Stripe Webhook in Production
1. Update Stripe webhook URL to production: `https://yourdomain.com/api/stripe/webhook`
2. Copy new webhook secret
3. Update `STRIPE_WEBHOOK_SECRET` in Vercel

### Alternative: Firebase Hosting

```bash
# Install Firebase CLI
npm install -g firebase-tools

# Login
firebase login

# Initialize hosting
firebase init hosting

# Build
npm run build

# Deploy
firebase deploy --only hosting
```

---

## Development Workflow

### Getting Started

```bash
# Clone repository
git clone <repository-url>
cd elevated-gentleman-app

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
# Edit .env.local with your keys

# Run development server
npm run dev

# Open browser
http://localhost:3000
```

### Development Commands

```bash
# Start dev server with Turbopack
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint
```

### Code Structure Best Practices

1. **Components**: Reusable UI elements in `src/components/`
2. **Pages**: App Router pages in `src/app/`
3. **API Routes**: Server endpoints in `src/app/api/`
4. **Utilities**: Helper functions in `src/lib/`
5. **Types**: TypeScript definitions in `src/lib/types/` or component folders

### Making Changes

#### To Update Webflow Pages
- Edit in Webflow dashboard
- Publish changes
- Changes appear instantly

#### To Update Custom Pages
- Edit TypeScript/React files
- Save (hot reload in dev)
- Commit and push to deploy

#### To Update Content (Current Method)
1. Edit data files in `src/lib/products/data.ts` or `src/lib/articles/data.ts`
2. Save file
3. Refresh page to see changes
4. Commit changes
5. Deploy

#### To Add New Product
1. Open `src/lib/products/data.ts`
2. Add new object to `weeklyProducts` array
3. Upload image to `public/images/` or use external URL
4. Save and test

---

## Next Steps for CMS Implementation

### Phase 1: Database Setup (1-2 days)
- [ ] Create Firestore collections: `products`, `outfits`, `articles`
- [ ] Define complete schemas with all fields
- [ ] Set up security rules for admin access
- [ ] Create helper functions for CRUD operations

### Phase 2: Admin Panel - Products (2-3 days)
- [ ] Build `/admin/cms/products` list view
- [ ] Create add/edit product form
- [ ] Implement image upload to Firebase Storage
- [ ] Add delete confirmation dialog
- [ ] Test full CRUD workflow

### Phase 3: Admin Panel - Outfits (2-3 days)
- [ ] Build `/admin/cms/outfits` list view
- [ ] Create outfit editor with product picker
- [ ] Multi-image upload for outfit looks
- [ ] Occasion/category selector

### Phase 4: Admin Panel - Articles (3-4 days)
- [ ] Build `/admin/cms/articles` list view
- [ ] Implement rich text editor for article content
- [ ] Related products/outfits picker
- [ ] Author info and metadata
- [ ] Publish/unpublish toggle

### Phase 5: Frontend Integration (2-3 days)
- [ ] Update `/weekly` to fetch from Firestore
- [ ] Update `/outfit-inspiration` to fetch from Firestore
- [ ] Update `/wellness` to fetch from Firestore
- [ ] Add loading states and error handling
- [ ] Implement caching if needed

### Phase 6: Image Management (1-2 days)
- [ ] Set up Firebase Storage buckets
- [ ] Implement image optimization
- [ ] Add image cropping/resizing tool
- [ ] Create image gallery/picker

### Phase 7: Testing & Polish (2-3 days)
- [ ] Test all CRUD operations
- [ ] Verify admin authentication
- [ ] Test image uploads
- [ ] Verify frontend displays correctly
- [ ] Add loading skeletons
- [ ] Handle edge cases (empty states, errors)

### Total Estimated Time: 15-20 days

---

## Contact & Support

### Project Owner
- **Email**: [Owner's email]
- **Primary Contact**: [Name]

### Technical Contacts
- **Firebase**: Firebase Console access needed
- **Stripe**: Stripe Dashboard access needed
- **Webflow**: Webflow account access needed

### Important Links
- **Repository**: [GitHub URL]
- **Firebase Console**: https://console.firebase.google.com
- **Stripe Dashboard**: https://dashboard.stripe.com
- **Webflow Dashboard**: https://webflow.com/dashboard
- **Production Site**: [Live URL]
- **Staging Site**: [Staging URL if applicable]

---

## Troubleshooting

### Common Issues

#### Subscription Modal Not Appearing
- Check user's `subscriptionStatus` in Firestore
- Verify `SubscriptionGate` is wrapping app in `layout.tsx`
- Check browser console for errors

#### Stripe Webhook Not Working
- Verify webhook endpoint URL is correct
- Check Stripe webhook signing secret
- View webhook logs in Stripe Dashboard
- Check API route logs

#### Firebase Auth Errors
- Verify Firebase config in `.env.local`
- Check Firebase Auth is enabled for email/password
- Review Firestore security rules

#### Images Not Loading
- Check image paths (absolute vs relative)
- Verify Firebase Storage permissions
- Check image URLs are valid

### Debug Mode
Add to `.env.local`:
```env
NEXT_PUBLIC_DEBUG=true
```

Then check browser console for detailed logs.

---

## Conclusion

This documentation provides a comprehensive overview of The Elevated Gentleman application. The primary task ahead is implementing a Content Management System to allow the owner to update content (products, outfits, articles) without editing code.

The recommended approach is a Firestore-based CMS with a custom admin panel, which integrates seamlessly with the existing Firebase infrastructure and provides a user-friendly interface for content management.

**Key Takeaways:**
- Webflow handles homepage and personal styling pages
- All other pages are custom Next.js code
- Content is currently hardcoded in TypeScript files
- Subscription system is fully functional
- CMS implementation is the next major feature

Good luck with the project! 🚀

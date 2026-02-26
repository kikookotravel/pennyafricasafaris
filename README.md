# Penny Africa Safaris

A modern, SEO-optimized Safari tour operator website showcasing Uganda safari tours.

**Positioning:** "Affordable Trips, Extraordinary Memories"

## Tech Stack

- **Framework:** Next.js 14+ (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS + shadcn/ui
- **i18n:** next-intl (English & German)
- **Hosting:** Firebase Hosting
- **Analytics:** Firebase Analytics

## Getting Started

### Prerequisites

- Node.js 20+ and npm
- Firebase CLI (for deployment)

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser.

The app will automatically redirect to `/en` (English) or `/de` (German) based on your preferences.

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Project Structure

```
penny-africa-safaris/
├── src/
│   ├── app/
│   │   ├── [locale]/           # i18n-wrapped routes
│   │   │   ├── page.tsx        # Homepage
│   │   │   ├── about/
│   │   │   ├── tours/
│   │   │   ├── destinations/
│   │   │   ├── blog/
│   │   │   └── contact/
│   │   └── globals.css
│   ├── components/
│   │   ├── ui/                 # shadcn/ui components
│   │   └── layout/             # Header, Footer, Navigation
│   ├── lib/                    # Utilities
│   ├── messages/               # i18n translations
│   │   ├── en.json
│   │   └── de.json
│   └── types/                  # TypeScript types
├── Photos/                     # Professional safari images
├── old content/                # Content to migrate
└── public/                     # Static assets
```

## Brand Colors

- **Bronze:** #CD7F32 - Primary brand color
- **Copper:** #B87333 - Accent color
- **Taupe:** #8B8680 - Neutral tones
- **Umber:** #635147 - Dark earthy tones
- **Cream:** #F5F5DC - Background color

## Development Roadmap

### Phase 0: Foundation ✅ (Complete)
- Next.js 14 setup with TypeScript
- Tailwind CSS + shadcn/ui configuration
- i18n setup (English & German)
- Header, Footer, and Navigation components
- Firebase configuration

### Phase 1: Homepage & Core Pages (In Progress)
- Homepage with hero, featured tours, testimonials
- About page
- Contact page with form

### Phase 2: Tour System
- Tour data migration from .docx files
- Tour listing page
- Tour detail pages

### Phase 3: Destinations
- Destination pages for Uganda national parks
- Integration with tour pages

### Phase 4: Blog
- Blog post migration from .docx to MDX
- Blog listing and detail pages

### Phase 5: German Translation
- Complete German translations for all content

### Phase 6: SEO & Performance
- Sitemap generation
- Structured data (JSON-LD)
- Performance optimization

### Phase 7: Launch
- Firebase deployment
- Custom domain configuration
- Analytics setup

## Firebase Configuration

The project is configured for Firebase Hosting with the following setup:

- **Project ID:** penn-a8d7f
- **Hosting URL:** TBD (pennyafricasafaris.travel)
- **Analytics:** Enabled

### Deployment

```bash
# Build for production
npm run build

# Deploy to Firebase
firebase deploy
```

## Contact Information

- **Email:** hello@pennyafricasafaris.travel
- **WhatsApp:** +256 705 555 533
- **Location:** Kampala, Uganda

## License

© 2024 Penny Africa Safaris. All rights reserved.

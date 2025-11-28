# Fuentes Carpet Installation Corp Website

A modern, responsive marketing website for Fuentes Carpet Installation Corp, a family-owned flooring contractor based in Miami, FL.

## 🚀 Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Deployment**: Vercel

## 📋 Features

- ✅ Fully responsive, mobile-first design
- ✅ SEO-optimized with metadata
- ✅ Smooth scroll navigation
- ✅ Floating call button on mobile
- ✅ Contact form with validation
- ✅ Services showcase
- ✅ Testimonials section
- ✅ Project gallery
- ✅ Special offers section
- ✅ Bilingual support (English/Spanish)

## 🏗️ Project Structure

```
Fuentescarpets/
├── app/
│   ├── globals.css          # Global styles & Tailwind imports
│   ├── layout.tsx            # Root layout with SEO metadata
│   └── page.tsx              # Home page component
├── components/
│   ├── Navbar.tsx            # Sticky navigation with smooth scroll
│   ├── Hero.tsx              # Hero section with CTAs
│   ├── Benefits.tsx          # Why upgrade section
│   ├── Services.tsx          # Services grid
│   ├── SpecialOffer.tsx      # Special offer section
│   ├── Stats.tsx             # Company statistics
│   ├── Process.tsx           # Installation process timeline
│   ├── Testimonials.tsx      # Customer reviews
│   ├── Gallery.tsx           # Project gallery
│   ├── Contact.tsx           # Contact form & info
│   ├── Footer.tsx            # Footer with links
│   └── FloatingCallButton.tsx # Mobile call button
├── public/                   # Static assets (add images here)
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

## 🎨 Branding

- **Primary Color**: `#1d1c84`
- **Company Name**: Fuentes Carpet Installation Corp
- **Phone**: (305) 323-6368
- **Email**: fuentescarpets@gmail.com

## 🛠️ Getting Started

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📱 Sections

1. **Hero** - Fullscreen hero with background image and CTAs
2. **Benefits** - Why upgrade your floors (4 key benefits)
3. **Services** - 6 service cards (carpet, hardwood, laminate, etc.)
4. **Special Offer** - 3-room carpet installation special
5. **Stats** - 4 trust indicators (25+ years, 7 days/week, etc.)
6. **Process** - 4-step installation process
7. **Testimonials** - Customer reviews with star ratings
8. **Gallery** - 8 project images in a responsive grid
9. **Contact** - Contact form + business information
10. **Footer** - Links, social media, copyright

## 🌐 Deployment

This project is optimized for deployment on Vercel:

1. Push your code to GitHub
2. Import the repository in Vercel
3. Deploy with one click

Alternatively, use the Vercel CLI:

```bash
npm install -g vercel
vercel
```

## 📝 Customization

### Adding Real Images

Replace placeholder image URLs in components with your own images:
- Store images in `/public/images/`
- Update image sources in components

### Updating Content

All content is hardcoded in the component files for easy customization:
- Services: `components/Services.tsx`
- Testimonials: `components/Testimonials.tsx`
- Gallery: `components/Gallery.tsx`
- Contact info: `components/Contact.tsx` and `components/Footer.tsx`

### Form Integration

The contact form currently logs submissions to the console. To integrate with a backend:
- Add your API endpoint in `components/Contact.tsx`
- Consider services like Formspree, SendGrid, or a custom API route

## 🎯 SEO

- Semantic HTML elements
- Meta description included
- Open Graph tags
- Mobile-friendly viewport
- Fast loading times

## 📞 Contact Information

- **Phone**: (305) 323-6368
- **Email**: fuentescarpets@gmail.com
- **Location**: Miami, FL & South Florida
- **Hours**: Sunday–Saturday, 08:00 AM – 08:00 PM
- **Language**: English & Spanish

## 📄 License

© 2025 Fuentes Carpet Installation Corp. All rights reserved.


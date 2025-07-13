# Meta Marc - Social Media Marketing Agency Website

A modern, responsive website for Meta Marc social media marketing agency built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- 🎨 Modern, responsive design
- ⚡ Fast performance with Next.js 14
- 🎭 Smooth animations with Framer Motion
- 📱 Mobile-first responsive design
- 🎯 SEO optimized
- 🎨 Custom color theme (#4AD6AC)
- 📧 Contact form functionality
- 🔍 Blog search and filtering
- 🎪 Interactive portfolio showcase
- 💫 Custom mouse cursor effects

## Pages

- **Home** - Hero section, services overview, testimonials
- **About** - Company story, team, values, statistics
- **Services** - Detailed service offerings and packages
- **Works** - Portfolio showcase with filtering
- **Blog** - Articles with search and category filtering
- **Contact** - Contact form and company information

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository
\`\`\`bash
git clone <repository-url>
cd metamarc-website
\`\`\`

2. Install dependencies
\`\`\`bash
npm install
\`\`\`

3. Run the development server
\`\`\`bash
npm run dev
\`\`\`

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

\`\`\`bash
npm run build
npm start
\`\`\`

## Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Images**: Unsplash (via URLs)

## Project Structure

\`\`\`
metamarc-website/
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Main application component
│   └── globals.css         # Global styles
├── public/                 # Static assets
├── package.json           # Dependencies
├── tail

wind.config.js     # Tailwind configuration
├── tsconfig.json          # TypeScript configuration
└── next.config.js         # Next.js configuration
\`\`\`

## Customization

### Colors
The primary brand color is defined as `#4AD6AC`. To change it, update all instances in:
- `app/page.tsx` (style props and className values)
- `app/globals.css` (custom scrollbar styles)

### Content
All content (services, testimonials, blog posts, etc.) is defined as arrays in `app/page.tsx`. Update these arrays to customize the content.

### Images
Images are sourced from Unsplash. Replace the URLs in the data arrays with your own images.

## Performance

- Optimized images with Next.js Image component
- Lazy loading for animations
- Efficient state management
- Minimal bundle size

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is private and proprietary to Meta Marc Agency.

## Contact

For support or questions, contact: Metamarc25@gmail.com

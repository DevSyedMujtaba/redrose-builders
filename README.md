# Red Rose Builders - Construction Company Website

A modern, responsive website for Red Rose Builders, a construction and renovation company. Built with React, Vite, and Tailwind CSS.

## Features

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Modern UI**: Clean, professional design with smooth animations
- **Interactive Components**: 
  - Navigation with smooth scrolling
  - Contact form with validation
  - Portfolio filter system
  - Mobile-responsive menu
- **Performance Optimized**: Built with Vite for fast development and production builds
- **SEO Friendly**: Proper meta tags and semantic HTML structure

## Sections

1. **Header**: Navigation with logo and mobile menu
2. **Hero**: Eye-catching banner with company introduction and CTA
3. **Services**: Grid of construction services with detailed descriptions
4. **Portfolio**: Filterable gallery of completed projects
5. **Testimonials**: Customer reviews and ratings
6. **Contact**: Contact form and company information
7. **Footer**: Links, contact info, and social media

## Technologies Used

- **React 18**: Modern React with hooks
- **Vite**: Fast build tool and development server
- **Tailwind CSS**: Utility-first CSS framework
- **Lucide React**: Beautiful, customizable icons
- **PostCSS**: CSS processing with autoprefixer

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository or navigate to the project directory
2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and visit `http://localhost:3000`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Project Structure

```
src/
├── components/          # React components
│   ├── Header.jsx      # Navigation header
│   ├── Hero.jsx        # Hero section
│   ├── Services.jsx    # Services grid
│   ├── Portfolio.jsx   # Portfolio gallery
│   ├── Testimonials.jsx # Customer testimonials
│   ├── Contact.jsx     # Contact form
│   ├── Footer.jsx      # Footer
│   └── ServiceCard.jsx # Service card component
├── pages/              # Page components
│   └── Home.jsx        # Main home page
├── styles/             # CSS styles
│   └── index.css       # Main stylesheet with Tailwind
├── assets/             # Static assets
│   ├── images/         # Image files
│   └── icons/          # SVG icons
├── App.jsx             # Main app component
└── main.jsx            # Entry point
```

## Customization

### Colors
The color scheme can be customized in `tailwind.config.js`. The primary colors are set to red tones to match the "Red Rose" branding.

### Content
- Update company information in the components
- Replace placeholder images in `src/assets/images/`
- Modify service descriptions in `Services.jsx`
- Update testimonials in `Testimonials.jsx`

### Styling
- Custom CSS classes are defined in `src/styles/index.css`
- Component-specific styles use Tailwind utility classes
- Responsive breakpoints follow Tailwind's default system

## Deployment

1. Build the project:
   ```bash
   npm run build
   ```

2. The `dist` folder contains the production-ready files
3. Deploy the contents of the `dist` folder to your hosting service

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is created for Red Rose Builders. All rights reserved.


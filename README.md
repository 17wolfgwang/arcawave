# Arcawave Landing Page

A premium landing page UI/UX for Arcawave, heavily inspired by Google Arts & Culture. Features a clean white minimalist gallery aesthetic with interactive 3D elements.

## Features

- **Hero Section**: High-definition 2D masterpiece that seamlessly transitions into a sophisticated 3D wireframe mesh
- **Elegant Typography**: Montserrat (headings) and IBM Plex Sans / Pretendard (body) with ultra-clean presentation
- **Ultra-High Resolution**: Professional lighting and museum-quality presentation
- **Interactive 3D Elements**: Click to transition between 2D and 3D views, mouse interaction for rotation
- **Minimalist Design**: Clean white aesthetic with plenty of negative space
- **Soft Shadows**: Professional depth and dimension
- **Responsive**: Fully responsive design for all devices

## Technologies

- **React 18** - Modern React with hooks
- **Vite** - Fast build tool and dev server
- **Three.js** - 3D rendering and wireframe mesh
- **CSS3** - Modern styling with custom properties

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Then open `http://localhost:5173` in your browser.

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Deployment

### Vercel Deployment

This project is configured for easy deployment on Vercel.

1. **Install Vercel CLI** (if not already installed):
   ```bash
   npm i -g vercel
   ```

2. **Deploy to Vercel**:
   ```bash
   vercel
   ```
   
   Or connect your GitHub repository to Vercel for automatic deployments.

3. **Custom Domain Setup**:
   - Go to your Vercel project settings
   - Navigate to "Domains"
   - Add your custom domain
   - Follow the DNS configuration instructions
   - Vercel will automatically provision SSL certificates

4. **Environment Variables** (if needed):
   - Add any environment variables in Vercel project settings
   - They will be available during build and runtime

The `vercel.json` file is already configured with:
- Build command: `npm run build`
- Output directory: `dist`
- SPA routing support (all routes redirect to `index.html`)
- Asset caching headers for optimal performance

## Project Structure

```
arcawave_landing/
├── public/
│   └── assets/          # Images and logos
├── src/
│   ├── components/     # React components
│   │   ├── Navigation.jsx
│   │   ├── Hero.jsx
│   │   ├── ArtworkContainer.jsx
│   │   ├── About.jsx
│   │   ├── Products.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── hooks/          # Custom React hooks
│   │   ├── useArtwork3D.js
│   │   └── useParallax.js
│   ├── App.jsx         # Main app component
│   ├── main.jsx        # Entry point
│   └── styles.css      # All styling
├── index.html
├── package.json
└── vite.config.js
```

## Interactive Features

1. **Hero Artwork**: 
   - Automatically transitions to 3D when scrolled into view
   - Click to toggle between 2D and 3D modes
   - Mouse movement controls 3D rotation when in 3D mode

2. **Gallery Items**: 
   - Hover effects with smooth transitions
   - Image zoom on hover

3. **Smooth Scrolling**: 
   - Navigation links smoothly scroll to sections

4. **Counter Animation**: 
   - Numbers animate when About section comes into view

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

Requires modern browser support for:
- CSS Grid
- CSS Custom Properties
- Three.js WebGL
- ES6+ JavaScript
- React 18

## Customization

### Colors
Edit CSS variables in `src/styles.css`:
```css
:root {
    --color-primary: #374cc1;
    --color-secondary: #50308e;
    /* ... */
}
```

### 3D Wireframe
Modify the wireframe geometry and material in `src/hooks/useArtwork3D.js`

### Typography
Change the font in `index.html`:
```html
<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200;300;400;500;600;700&family=IBM+Plex+Sans:wght@400;600&display=swap" rel="stylesheet">
```

## License

MIT License - feel free to use this project for your own purposes.

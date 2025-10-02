# MindFit Health - Cinematic Website 🎬

A stunning, modern website for MindFit Health featuring cinematic dark theme, smooth animations, and advanced visual effects.

## ✨ Features

### Visual Design
- **Dark Cinematic Theme**: Deep blue/purple gradient background with neon cyan accents
- **Glass Morphism Cards**: Semi-transparent cards with backdrop blur effects
- **Neon Glow Effects**: Glowing elements throughout the interface
- **Gradient Text**: Beautiful gradient effects on headings
- **Modern Typography**: Orbitron font for cinematic feel, Inter for body text

### Interactive Elements
- **Particle System**: Floating animated particles in hero sections
- **Scroll Animations**: Elements fade in smoothly as you scroll
- **3D Card Tilt**: Cards tilt in 3D on mouse movement
- **Parallax Effect**: Hero section moves at different speed when scrolling
- **Advanced Hover Effects**: Cards lift, scale, and glow on hover
- **Smooth Transitions**: All interactions feel fluid and responsive

### Performance & Accessibility
- **60fps Animations**: Hardware-accelerated CSS transforms
- **Mobile Optimized**: Responsive design with touch-friendly interactions
- **Reduced Motion Support**: Respects user's motion preferences
- **Proper Contrast**: WCAG-compliant color contrast ratios
- **Keyboard Navigation**: Full keyboard accessibility

### Technical Stack
- **HTML5**: Semantic markup
- **CSS3**: Custom properties, Grid, Flexbox, advanced animations
- **Vanilla JavaScript**: Lightweight, no dependencies
- **Intersection Observer API**: Efficient scroll animations
- **Canvas API**: Particle effects

## 🚀 Quick Start

1. Open `index.html` in a web browser to see the loading screen
2. Automatically redirects to `home.html` after loading
3. Navigate between pages: Home, About, Services, Contact

## 📁 File Structure

```
mindfit-health/
├── index.html          # Loading screen
├── home.html           # Home page
├── about.html          # About page
├── services.html       # Services page
├── contact.html        # Contact page
├── style.css           # Loading screen styles
├── main.css            # Main cinematic styles
├── script.js           # Loading screen logic
├── particles.js        # Particle animation system
└── animations.js       # Scroll and interaction animations
```

## 🎨 Color Palette

- **Primary Background**: `#0a0e27` (Deep navy)
- **Secondary Background**: `#1a1f3a` (Dark blue)
- **Accent Color**: `#00d4ff` (Neon cyan)
- **Text Primary**: `#ffffff` (White)
- **Text Secondary**: `#b8c5d6` (Light gray-blue)
- **Text Muted**: `#6b7688` (Medium gray)

## 🌟 Key CSS Features

- CSS Custom Properties for theming
- Backdrop filter for glass morphism
- CSS Grid and Flexbox for layouts
- CSS animations with keyframes
- Transform-based animations for performance
- Media queries for responsive design
- Prefers-reduced-motion media query

## 📱 Browser Support

- Chrome/Edge 88+
- Firefox 87+
- Safari 14+
- Modern mobile browsers

## 🔧 Customization

### Colors
Edit CSS custom properties in `main.css`:
```css
:root {
    --primary-bg: #0a0e27;
    --accent-color: #00d4ff;
    /* ... */
}
```

### Particle Count
Adjust in `particles.js`:
```javascript
this.particleCount = 50; // Desktop
// or
this.particleCount = 30; // Mobile
```

### Animation Speed
Modify animation durations in `main.css` and `animations.js`

## 📄 License

MIT License - See LICENSE file for details

## 👥 Credits

Created for MindFit Health - Advanced Mental Performance Analytics Platform

---

**Note**: This website uses Google Fonts (Orbitron and Inter). If fonts don't load, the system will fallback to default sans-serif fonts.

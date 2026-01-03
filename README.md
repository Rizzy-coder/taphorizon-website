# TapHorizon: Ascend - Marketing Website

A responsive, production-ready marketing website for the TapHorizon: Ascend mobile rhythm game.

## Tech Stack

- **HTML5** - Semantic markup with accessibility considerations
- **CSS3** - Custom properties, flexbox, grid, animations
- **Vanilla JavaScript** - No frameworks, lightweight interactivity
- **Design Inspiration** - StarWell cosmic wellness aesthetic

## Features

- Cosmic gradient backgrounds with particle effects
- Glass morphism UI elements
- Responsive design (mobile-first)
- Smooth scroll navigation
- FAQ accordion
- Image placeholders for all screenshots
- SEO optimized with sitemap and meta tags

## File Structure

```
skytap-website/
├── index.html          # Main landing page
├── privacy.html        # Privacy policy
├── terms.html          # Terms of service
├── support.html        # Help center / FAQ
├── styles.css          # All styles (~1200 lines)
├── script.js           # Interactivity
├── sitemap.xml         # SEO sitemap
├── robots.txt          # Crawler instructions
├── .htaccess           # Apache server config
├── README.md           # This file
└── images/
    ├── screenshots/    # App screenshots
    └── assets/         # Logo, icons, skins
```

## Required Images (Placeholders)

### Core Assets (`images/assets/`)

| File | Size | Description |
|------|------|-------------|
| `logo.png` | 128x128 | App logo/icon |
| `favicon.png` | 32x32 | Browser favicon |
| `apple-touch-icon.png` | 180x180 | iOS home screen icon |
| `og-image.png` | 1200x630 | Open Graph social share |
| `twitter-card.png` | 1200x600 | Twitter card image |

### Element Icons (`images/assets/`)

| File | Size | Description |
|------|------|-------------|
| `icon-earth.png` | 64x64 | Earth element icon |
| `icon-fire.png` | 64x64 | Fire element icon |
| `icon-water.png` | 64x64 | Water element icon |
| `icon-celestial.png` | 64x64 | Celestial element icon |
| `power-stone.png` | 48x48 | Stone Breath power icon |
| `power-gale.png` | 48x48 | Gale Breath power icon |
| `power-inferno.png` | 48x48 | Flame Breath power icon |
| `power-tidal.png` | 48x48 | Tidal Breath power icon |
| `power-transcendent.png` | 48x48 | Transcendent Breath icon |

### Screenshots (`images/screenshots/`)

| File | Aspect | Description |
|------|--------|-------------|
| `hero-gameplay.png` | 9:19 | Main hero - gameplay in action |
| `realm-earth.png` | 16:9 | Earth realm background/gameplay |
| `realm-air.png` | 16:9 | Air realm background/gameplay |
| `realm-fire.png` | 16:9 | Fire realm background/gameplay |
| `realm-water.png` | 16:9 | Water realm background/gameplay |
| `realm-celestial.png` | 16:9 | Celestial realm background/gameplay |
| `journey-mode.png` | 16:9 | Journey mode level select |
| `endless-mode.png` | 16:9 | Endless mode gameplay |
| `polish-particles.png` | 16:9 | Particle effects showcase |
| `polish-combo.png` | 4:3 | Combo counter/effects |
| `polish-boss.png` | 4:3 | Boss battle visual |
| `gallery-menu.png` | 9:16 | Main menu screenshot |
| `gallery-level-select.png` | 9:16 | Level/realm selection |
| `gallery-gameplay.png` | 9:16 | Gameplay action shot |
| `gallery-boss.png` | 9:16 | Boss battle screenshot |
| `gallery-combo.png` | 9:16 | High combo screenshot |
| `gallery-victory.png` | 9:16 | Victory/completion screen |
| `gallery-shop.png` | 9:16 | Cosmetics shop |
| `gallery-endless.png` | 9:16 | Endless mode screenshot |

### Skin Images (`images/assets/skins/`)

**Progression Skins:**
- `earth-adept.png` (100x100)
- `air-ascetic.png` (100x100)
- `flame-warden.png` (100x100)
- `tidal-sage.png` (100x100)
- `celestial-avatar.png` (100x100)

**Earnable Skins:**
- `forest-sage.png` (100x100)
- `desert-nomad.png` (100x100)
- `mountain-monk.png` (100x100)
- `storm-caller.png` (100x100)
- `jade-master.png` (100x100)

**Premium Skins:**
- `phoenix-master.png` (100x100)
- `dragon-sage.png` (100x100)
- `shadow-walker.png` (100x100)
- `golden-emperor.png` (100x100)
- `void-mystic.png` (100x100)

## Color Palette

| Color | Hex | Usage |
|-------|-----|-------|
| Gold | `#FFD700` | Primary accent, CTAs |
| Earth | `#8B4513` | Earth realm |
| Air | `#7B68EE` | Air realm |
| Fire | `#FF4500` | Fire realm |
| Water | `#006994` | Water realm |
| Celestial | `#9333EA` | Celestial realm |
| Background | `#0A0E1A` | Deep space bg |

## Deployment

### GitHub Pages
1. Create a new public repository
2. Push all files to the `main` branch
3. Enable GitHub Pages in repository settings
4. Set source to `main` branch, root folder

### Netlify / Vercel
1. Connect repository to Netlify/Vercel
2. Set build command: (none needed - static site)
3. Set publish directory: `/`
4. Deploy

### Custom Domain
1. Update `sitemap.xml` with your domain
2. Update Open Graph URLs in `index.html`
3. Configure DNS with your hosting provider
4. Enable HTTPS and uncomment `.htaccess` redirect

## Customization

### Update App Store Link
In `index.html`, replace the placeholder App Store URL:
```html
<a href="https://apps.apple.com/app/taphorizon-ascend" ...>
```

### Update Contact Emails
- Privacy: `privacy@taphorizon.app`
- Legal: `legal@taphorizon.app`
- Support form: Configure form action

### Add Analytics
Uncomment and configure in `script.js`:
```javascript
// gtag('event', action, {...});
```

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- iOS Safari 14+

## License

Copyright 2025 SkyTap Games. All rights reserved.

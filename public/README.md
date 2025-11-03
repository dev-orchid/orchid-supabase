# Public Assets Directory

This directory contains all publicly accessible static assets including CSS files, images, fonts, and other media that can be manually updated by developers.

## 📁 Directory Structure

```
public/
├── css/
│   ├── pages/          # Page-specific custom CSS
│   │   ├── home.css
│   │   ├── services.css
│   │   ├── pricing.css
│   │   ├── about.css
│   │   ├── contact.css
│   │   └── blog.css
│   └── components/     # Component-specific custom CSS
│       ├── header.css
│       ├── footer.css
│       └── cta.css
├── images/
│   ├── home/          # Homepage images
│   ├── services/      # Services page images
│   ├── pricing/       # Pricing page images
│   ├── about/         # About page images
│   ├── contact/       # Contact page images
│   ├── blog/          # Blog images
│   └── common/        # Shared images across pages
└── fonts/             # Custom web fonts
```

## 🎨 Working with CSS Files

### How to Use Custom CSS

1. **Page-Specific Styles**: Each page has its own CSS file in `public/css/pages/`
2. **Component Styles**: Reusable component styles are in `public/css/components/`
3. **Import in Components**: Add custom CSS by importing in your component:

```tsx
// Example: In your home page component
import '../../../public/css/pages/home.css';
```

### CSS File Organization

Each CSS file includes:
- **Header comments** explaining the file's purpose
- **Pre-defined class names** for common elements
- **Animation keyframes** for custom animations
- **Hover effects** and transitions
- **Space for your custom styles** at the bottom

### Best Practices

- Keep CSS organized by section (use comments)
- Use meaningful class names
- Avoid inline styles when possible
- Test across browsers
- Keep animations performant (use transform/opacity)

## 🖼️ Working with Images

### Image Organization by Page

Store images in their respective page folders:

```
public/images/
├── home/           # Hero images, feature images
├── services/       # Service illustrations, icons
├── pricing/        # Pricing visuals, comparison graphics
├── about/          # Team photos, office images
├── contact/        # Contact page visuals, maps
├── blog/           # Blog post featured images
└── common/         # Logo, icons, shared assets
```

### How to Add Local Images

#### Step 1: Place Image in Correct Folder
```bash
# Example: Adding a hero image
cp your-hero-image.jpg public/images/home/hero.jpg
```

#### Step 2: Update Image Configuration
Edit `src/lib/images.ts`:

```typescript
// Before (Unsplash URL)
hero: {
  src: "https://images.unsplash.com/photo-...",
  alt: "Team collaborating in modern office",
  width: 1920,
  height: 1080,
},

// After (Local image)
hero: {
  src: "/images/home/hero.jpg",  // Updated to local path
  alt: "Team collaborating in modern office",
  width: 1920,
  height: 1080,
},
```

#### Step 3: Use in Components
The image is now available through the centralized config:

```tsx
import { unsplashImages } from "@/lib/images";

<Image
  src={unsplashImages.hero.src}
  alt={unsplashImages.hero.alt}
  width={unsplashImages.hero.width}
  height={unsplashImages.hero.height}
/>
```

### Image Best Practices

1. **Optimization**: Compress images before uploading
   - Use tools like TinyPNG, ImageOptim, or Squoosh
   - Target: < 200KB for hero images, < 100KB for thumbnails

2. **Formats**:
   - Use WebP for better compression (with JPG/PNG fallback)
   - Use SVG for icons and logos
   - Use PNG for images requiring transparency

3. **Naming Convention**:
   - Use lowercase with hyphens: `hero-image.jpg`
   - Be descriptive: `team-collaboration-2024.jpg`
   - Include dimensions for clarity: `logo-512x512.png`

4. **Responsive Images**:
   - Provide multiple sizes for different devices
   - Example: `hero-mobile.jpg`, `hero-tablet.jpg`, `hero-desktop.jpg`

## 🔤 Working with Fonts

Place custom web fonts in the `public/fonts/` directory:

```
public/fonts/
├── custom-font-regular.woff2
├── custom-font-bold.woff2
└── custom-font-italic.woff2
```

### Adding Custom Fonts

1. **Add font files** to `public/fonts/`
2. **Define @font-face** in a CSS file:

```css
@font-face {
  font-family: 'CustomFont';
  src: url('/fonts/custom-font-regular.woff2') format('woff2');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}
```

3. **Use in Tailwind config** or CSS:

```css
.custom-font-text {
  font-family: 'CustomFont', sans-serif;
}
```

## 📝 Quick Reference

### Accessing Public Files

All files in the `public/` directory are accessible from the root URL:

- CSS: `<link rel="stylesheet" href="/css/pages/home.css" />`
- Images: `<img src="/images/home/hero.jpg" alt="Hero" />`
- Fonts: `url('/fonts/custom-font.woff2')`

### Common Tasks

#### Task: Add a new blog post image
```bash
# 1. Add image
cp my-blog-image.jpg public/images/blog/my-post-2024.jpg

# 2. Use in component
<Image src="/images/blog/my-post-2024.jpg" alt="Blog post" width={800} height={600} />
```

#### Task: Add custom page animation
```css
/* Add to respective page CSS file */
@keyframes customFadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

.my-animated-element {
  animation: customFadeIn 0.6s ease-out;
}
```

#### Task: Replace all Unsplash images with local ones
1. Download/create your images
2. Place in appropriate folders under `public/images/`
3. Update all entries in `src/lib/images.ts`
4. Test on all pages

## 🚀 Performance Tips

1. **Lazy load images** not in viewport
2. **Use Next.js Image component** for automatic optimization
3. **Minimize CSS** by removing unused styles
4. **Use CSS custom properties** for theme colors
5. **Compress assets** before deploying

## 🛠️ Development Workflow

1. **Local Development**:
   - Make changes to CSS/images
   - Changes are immediately available (hot reload)
   - No build step needed for public assets

2. **Testing**:
   - Test on localhost
   - Verify all images load
   - Check CSS applies correctly
   - Test responsive breakpoints

3. **Production**:
   - Assets in `public/` are served as-is
   - No processing or bundling
   - Direct URL access

## 📞 Need Help?

- **CSS Issues**: Check browser console for syntax errors
- **Images Not Loading**: Verify file path and permissions
- **Font Not Displaying**: Check @font-face syntax and file format

## 🔗 Related Files

- **Image Configuration**: `src/lib/images.ts`
- **Tailwind Config**: `tailwind.config.ts`
- **Global Styles**: `src/app/globals.css`

---

**Last Updated**: November 2024
**Maintained By**: Development Team

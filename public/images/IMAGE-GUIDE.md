# Image Management Guide

Complete guide for organizing, naming, and optimizing images for the Orchid SaaS website.

## 📁 Directory Structure

```
public/images/
├── home/          # Homepage images
├── services/      # Services page images
├── pricing/       # Pricing page images
├── about/         # About page images (team photos, office)
├── contact/       # Contact page images
├── blog/          # Blog post featured images
└── common/        # Shared images (logo, icons, backgrounds)
```

---

## 📝 Naming Conventions

### General Rules

1. **Use lowercase** with hyphens (kebab-case)
   - ✅ `hero-image.jpg`
   - ❌ `HeroImage.jpg` or `hero_image.jpg`

2. **Be descriptive** but concise
   - ✅ `team-collaboration-2024.jpg`
   - ❌ `img1.jpg` or `DSC_1234.jpg`

3. **Include dimensions** for multiple sizes
   - `hero-desktop-1920x1080.jpg`
   - `hero-tablet-1024x768.jpg`
   - `hero-mobile-640x480.jpg`

4. **Add context** when needed
   - `service-web-development-icon.svg`
   - `blog-post-ai-trends-featured.jpg`

### Naming Patterns by Type

#### Hero/Banner Images
```
hero-[page]-[variant].jpg
Examples:
- hero-home-main.jpg
- hero-services-background.jpg
- banner-pricing-offer.jpg
```

#### Icons
```
icon-[name]-[size].svg
Examples:
- icon-rocket-24x24.svg
- icon-shield-32x32.svg
- icon-checkmark.svg
```

#### Team Photos
```
team-[name]-[role].jpg
Examples:
- team-john-doe-ceo.jpg
- team-jane-smith-cto.jpg
- team-group-photo-2024.jpg
```

#### Blog Images
```
blog-[post-slug]-[type].jpg
Examples:
- blog-ai-trends-2024-featured.jpg
- blog-web-development-tips-thumbnail.jpg
```

#### Logos
```
logo-[variant]-[size].svg
Examples:
- logo-full-color.svg
- logo-white.svg
- logo-icon-only.svg
- logo-horizontal-512x128.png
```

---

## 📐 Recommended Image Sizes

### Hero/Banner Images
| Device | Width | Height | Format |
|--------|-------|--------|--------|
| Desktop | 1920px | 1080px | WebP/JPG |
| Tablet | 1024px | 768px | WebP/JPG |
| Mobile | 750px | 1334px | WebP/JPG |

### Feature Images
| Type | Width | Height | Format |
|------|-------|--------|--------|
| Feature Card | 800px | 600px | WebP/JPG |
| Thumbnail | 400px | 300px | WebP/JPG |
| Avatar | 200px | 200px | WebP/JPG |

### Icons & Logos
| Type | Size | Format |
|------|------|--------|
| Small Icon | 24x24px | SVG |
| Medium Icon | 32x32px | SVG |
| Large Icon | 48x48px | SVG |
| Logo | 512x128px | SVG/PNG |
| Favicon | 32x32px | ICO/PNG |

### Blog Images
| Type | Width | Height | Format |
|------|-------|--------|--------|
| Featured | 1200px | 630px | WebP/JPG |
| Thumbnail | 600px | 400px | WebP/JPG |
| In-article | 800px | variable | WebP/JPG |

---

## 🎨 Image Formats

### When to Use Each Format

#### WebP (Recommended)
- **Use for**: Most photos and graphics
- **Benefits**: 25-35% smaller than JPG/PNG
- **Browser support**: 95%+ modern browsers
- **Example**: `hero-home.webp`

#### JPG/JPEG
- **Use for**: Photographs, complex images
- **Benefits**: Good compression, universal support
- **Quality**: 80-85% for web
- **Example**: `team-photo.jpg`

#### PNG
- **Use for**: Images requiring transparency
- **Benefits**: Lossless, supports alpha channel
- **Drawback**: Larger file size
- **Example**: `logo-transparent.png`

#### SVG
- **Use for**: Icons, logos, simple graphics
- **Benefits**: Scalable, tiny file size
- **Perfect for**: UI elements
- **Example**: `icon-menu.svg`

#### GIF
- **Use for**: Simple animations only
- **Drawback**: Limited colors, large size
- **Alternative**: Use video or animated WebP

---

## 🗜️ Image Optimization

### Compression Tools

**Online Tools**:
- [TinyPNG](https://tinypng.com) - PNG/JPG compression
- [Squoosh](https://squoosh.app) - All formats, WebP conversion
- [SVGOMG](https://jakearchibald.github.io/svgomg/) - SVG optimization

**CLI Tools**:
```bash
# Install ImageMagick
brew install imagemagick  # macOS
apt-get install imagemagick  # Linux

# Resize image
convert input.jpg -resize 1920x1080 output.jpg

# Convert to WebP
cwebp -q 80 input.jpg -o output.webp

# Optimize PNG
pngquant input.png --output output.png
```

### Target File Sizes

| Image Type | Target Size | Max Size |
|------------|-------------|----------|
| Hero Image | < 150 KB | 300 KB |
| Feature Image | < 100 KB | 200 KB |
| Thumbnail | < 50 KB | 100 KB |
| Icon (PNG) | < 10 KB | 20 KB |
| Logo | < 20 KB | 50 KB |
| Avatar | < 30 KB | 60 KB |

---

## 📋 Image Checklist

Before adding an image to the project:

- [ ] Image is compressed/optimized
- [ ] File size is under target
- [ ] Named according to conventions
- [ ] Placed in correct directory
- [ ] Alt text is descriptive
- [ ] Multiple sizes provided (if needed)
- [ ] WebP version created (for photos)
- [ ] Referenced in code or image config

---

## 💻 Adding Images to the Project

### Method 1: Direct Usage

```tsx
// For static images in public folder
<Image
  src="/images/home/hero.jpg"
  alt="Team collaboration"
  width={1920}
  height={1080}
  priority  // For above-the-fold images
/>
```

### Method 2: Using Image Config

**Step 1**: Add to `src/lib/images.ts`
```typescript
export const images = {
  myNewImage: {
    src: "/images/home/my-image.jpg",
    alt: "Description",
    width: 1920,
    height: 1080,
  },
};
```

**Step 2**: Use in component
```tsx
import { images } from "@/lib/images";

<Image
  src={images.myNewImage.src}
  alt={images.myNewImage.alt}
  width={images.myNewImage.width}
  height={images.myNewImage.height}
/>
```

### Method 3: Dynamic Images

```tsx
// For blog posts or dynamic content
const imagePath = `/images/blog/${post.slug}.jpg`;

<Image
  src={imagePath}
  alt={post.title}
  width={800}
  height={600}
/>
```

---

## 🌐 Responsive Images

### Using Next.js Image Component

```tsx
<Image
  src="/images/home/hero.jpg"
  alt="Hero"
  fill  // Fills parent container
  sizes="(max-width: 768px) 100vw,
         (max-width: 1200px) 50vw,
         33vw"
  priority  // Loads immediately
/>
```

### Manual Picture Element

```tsx
<picture>
  <source
    media="(min-width: 1024px)"
    srcSet="/images/home/hero-desktop.webp"
  />
  <source
    media="(min-width: 768px)"
    srcSet="/images/home/hero-tablet.webp"
  />
  <img
    src="/images/home/hero-mobile.webp"
    alt="Hero"
  />
</picture>
```

---

## 🎯 Performance Best Practices

1. **Lazy Load** images below the fold
```tsx
<Image
  src="/images/section.jpg"
  alt="Section"
  loading="lazy"
  width={800}
  height={600}
/>
```

2. **Use Priority** for above-the-fold images
```tsx
<Image
  src="/images/hero.jpg"
  alt="Hero"
  priority
  width={1920}
  height={1080}
/>
```

3. **Provide Multiple Formats**
```tsx
<picture>
  <source srcSet="/images/photo.webp" type="image/webp" />
  <source srcSet="/images/photo.jpg" type="image/jpeg" />
  <img src="/images/photo.jpg" alt="Photo" />
</picture>
```

4. **Use Appropriate Sizes**
- Don't serve 4K images for mobile
- Generate multiple sizes
- Use `sizes` attribute correctly

---

## 🔍 SEO Best Practices

### Alt Text Guidelines

**Good Alt Text**:
```tsx
<Image
  src="/images/team.jpg"
  alt="Orchid development team collaborating in modern office space"
  width={1920}
  height={1080}
/>
```

**Bad Alt Text**:
```tsx
// Too vague
<Image alt="image" ... />

// File name only
<Image alt="DSC_1234.jpg" ... />

// Redundant
<Image alt="image of team" ... />
```

### Image Metadata

Add structured data for better SEO:
```json
{
  "@type": "ImageObject",
  "contentUrl": "https://yoursite.com/images/hero.jpg",
  "description": "Team collaboration",
  "name": "Orchid Team Hero Image"
}
```

---

## 🛠️ Troubleshooting

### Image Not Loading

1. **Check file path** (case-sensitive)
   ```tsx
   // Wrong
   src="/Images/Home/hero.jpg"

   // Correct
   src="/images/home/hero.jpg"
   ```

2. **Verify file exists**
   ```bash
   ls public/images/home/hero.jpg
   ```

3. **Check file permissions**
   ```bash
   chmod 644 public/images/home/hero.jpg
   ```

### Image Displaying Blurry

- Check if Next.js is serving the right size
- Increase image quality setting
- Provide higher resolution source

### Large File Size

- Use WebP instead of JPG/PNG
- Reduce image dimensions
- Increase compression level
- Remove image metadata

---

## 📚 Additional Resources

- [Next.js Image Optimization](https://nextjs.org/docs/basic-features/image-optimization)
- [Web.dev Image Guide](https://web.dev/fast/#optimize-your-images)
- [Google PageSpeed Insights](https://pagespeed.web.dev/)
- [Can I Use WebP](https://caniuse.com/webp)

---

**Last Updated**: November 2024

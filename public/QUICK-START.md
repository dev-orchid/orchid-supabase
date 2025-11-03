# Quick Start Guide - Managing CSS & Images

This guide will help you quickly update CSS styles and images for the Orchid SaaS website.

## 🎯 Common Tasks

### 1. Update Home Page Styles

**File**: `public/css/pages/home.css`

```css
/* Add your custom styles at the bottom of the file */

/* Example: Change hero section background */
.hero-custom-bg {
  background: linear-gradient(135deg, #yourColor1, #yourColor2);
}

/* Example: Custom button hover effect */
.custom-button:hover {
  transform: scale(1.1);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
}
```

**Apply in Component**:
```tsx
// In your component file
import '../../../public/css/pages/home.css';

<div className="hero-custom-bg">
  <button className="custom-button">Click Me</button>
</div>
```

---

### 2. Replace Hero Image with Your Own

**Step 1**: Add your image
```bash
cp your-hero-image.jpg public/images/home/hero.jpg
```

**Step 2**: Update configuration in `src/lib/images.ts`
```typescript
hero: {
  src: "/images/home/hero.jpg",  // Change from Unsplash to local
  alt: "Your custom alt text",
  width: 1920,
  height: 1080,
},
```

**Done!** The image will automatically update on the homepage.

---

### 3. Add a Custom Font

**Step 1**: Add font files to `public/fonts/`
```bash
cp your-font.woff2 public/fonts/
```

**Step 2**: Create font face in any CSS file
```css
@font-face {
  font-family: 'YourFont';
  src: url('/fonts/your-font.woff2') format('woff2');
  font-weight: 400;
  font-style: normal;
}

.your-custom-text {
  font-family: 'YourFont', sans-serif;
}
```

---

### 4. Update Header Styles

**File**: `public/css/components/header.css`

```css
/* Example: Change header background when scrolled */
.site-header.scrolled {
  background: rgba(255, 255, 255, 0.95);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
}

/* Example: Custom navigation link style */
.nav-link {
  font-weight: 600;
  letter-spacing: 0.5px;
}
```

---

### 5. Add Blog Post Images

**For each blog post**:

```bash
# Add blog image
cp my-post-image.jpg public/images/blog/post-title-2024.jpg
```

**Use in blog component**:
```tsx
<Image
  src="/images/blog/post-title-2024.jpg"
  alt="Blog post about..."
  width={800}
  height={600}
/>
```

---

## 📂 File Locations Cheat Sheet

| What You Want to Change | File Location |
|-------------------------|---------------|
| Home page styles | `public/css/pages/home.css` |
| Services page styles | `public/css/pages/services.css` |
| Pricing page styles | `public/css/pages/pricing.css` |
| About page styles | `public/css/pages/about.css` |
| Contact page styles | `public/css/pages/contact.css` |
| Blog page styles | `public/css/pages/blog.css` |
| Header styles | `public/css/components/header.css` |
| Footer styles | `public/css/components/footer.css` |
| CTA button styles | `public/css/components/cta.css` |
| Home page images | `public/images/home/` |
| Service images | `public/images/services/` |
| About/team images | `public/images/about/` |
| Blog images | `public/images/blog/` |
| Logos, icons | `public/images/common/` |
| Custom fonts | `public/fonts/` |
| Image config | `src/lib/images.ts` |

---

## 💡 Quick Tips

### CSS Tips
- Always add your custom CSS at the **bottom** of the file
- Use **descriptive class names** (e.g., `.hero-gradient-blue` not `.hgb`)
- Test in **multiple browsers** (Chrome, Firefox, Safari)
- Use browser DevTools to test before adding to CSS file

### Image Tips
- **Compress images** before adding (use tinypng.com or squoosh.app)
- **Name files clearly**: `team-photo-2024.jpg` not `IMG_1234.jpg`
- Keep images under **200KB** for best performance
- Use **WebP format** when possible for smaller file sizes

### Font Tips
- Use **woff2** format for best browser support
- Include **font-display: swap** to avoid text flashing
- Only load fonts you actually use (reduces page load time)

---

## 🔧 Development Workflow

1. **Make Changes**
   - Edit CSS or add images
   - Save files

2. **Preview**
   - Changes appear automatically (hot reload)
   - Check localhost:3003

3. **Test**
   - Test on mobile view
   - Check all browsers
   - Verify images load

4. **Deploy**
   - Commit changes
   - Push to repository
   - Deploy (changes go live immediately)

---

## 🆘 Troubleshooting

### CSS not applying?
- ✅ Check if file is imported in component
- ✅ Check for typos in class names
- ✅ Look for errors in browser console
- ✅ Clear browser cache (Cmd+Shift+R / Ctrl+Shift+R)

### Image not showing?
- ✅ Check file path is correct
- ✅ Verify file exists in public/images/
- ✅ Check image file name (case-sensitive)
- ✅ Update src/lib/images.ts if using image config

### Font not loading?
- ✅ Check @font-face syntax
- ✅ Verify font file path
- ✅ Try different font format (woff2, woff, ttf)
- ✅ Check browser console for errors

---

## 📚 Learn More

- Full documentation: `public/README.md`
- Tailwind CSS docs: https://tailwindcss.com
- Next.js Image docs: https://nextjs.org/docs/api-reference/next/image
- CSS animations: https://animista.net

---

**Happy Coding! 🚀**

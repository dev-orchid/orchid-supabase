# CSS Classes Reference Guide

This document lists all custom CSS classes available in the public CSS files. Use these classes in your components for consistent styling.

## 📄 Page-Specific Classes

### Home Page (`/css/pages/home.css`)

| Class Name | Purpose | Example |
|------------|---------|---------|
| `.hero-gradient-overlay` | Custom gradient for hero background | Hero section background |
| `.hero-float-animation` | Floating animation effect | Animated elements |
| `.hero-button-gradient` | Gradient button hover effect | CTA buttons |
| `.trust-badge` | Trust indicator styling | Trust badges |
| `.stats-highlight` | Statistics section styling | Stat numbers |

**Usage Example**:
```tsx
<div className="hero-gradient-overlay hero-float-animation">
  <button className="hero-button-gradient">Get Started</button>
</div>
```

---

### Services Page (`/css/pages/services.css`)

| Class Name | Purpose | Example |
|------------|---------|---------|
| `.service-card` | Service card container | Service offerings |
| `.service-icon-container` | Icon container styles | Service icons |
| `.process-timeline-item` | Timeline animation | Process steps |
| `.service-pricing-highlight` | Pricing badge | Pricing info |

**Usage Example**:
```tsx
<div className="service-card">
  <div className="service-icon-container">
    {/* Icon here */}
  </div>
</div>
```

---

### Pricing Page (`/css/pages/pricing.css`)

| Class Name | Purpose | Example |
|------------|---------|---------|
| `.pricing-card` | Base pricing card | Pricing plans |
| `.pricing-card-popular` | Highlighted popular plan | Featured plan |
| `.pricing-toggle` | Monthly/Annual toggle | Plan switcher |
| `.pricing-feature-item` | Individual feature | Feature list |
| `.pricing-feature-icon` | Feature icon styling | Checkmarks |
| `.pricing-comparison-table` | Comparison table | Plan comparison |

**Usage Example**:
```tsx
<div className="pricing-card pricing-card-popular">
  <ul>
    <li className="pricing-feature-item">
      <span className="pricing-feature-icon">✓</span> Feature
    </li>
  </ul>
</div>
```

---

### About Page (`/css/pages/about.css`)

| Class Name | Purpose | Example |
|------------|---------|---------|
| `.team-member-card` | Team member card | Team section |
| `.team-member-image` | Team photo styling | Profile photos |
| `.value-card` | Company values card | Values section |
| `.company-timeline` | Company history | Timeline |
| `.timeline-item` | Timeline entry | History items |
| `.about-stats` | Company statistics | Stats display |

**Usage Example**:
```tsx
<div className="team-member-card">
  <img className="team-member-image" src="/images/about/john.jpg" />
  <h3>John Doe</h3>
</div>
```

---

### Contact Page (`/css/pages/contact.css`)

| Class Name | Purpose | Example |
|------------|---------|---------|
| `.contact-form` | Form container | Main form |
| `.contact-form-input` | Input field styling | Form inputs |
| `.contact-info-card` | Contact info display | Contact cards |
| `.contact-icon` | Contact method icons | Icons |
| `.contact-map-container` | Map embed container | Embedded map |
| `.contact-success-message` | Success message | Form confirmation |

**Usage Example**:
```tsx
<form className="contact-form">
  <input className="contact-form-input" type="email" />
  <div className="contact-success-message">Sent!</div>
</form>
```

---

### Blog Page (`/css/pages/blog.css`)

| Class Name | Purpose | Example |
|------------|---------|---------|
| `.blog-post-card` | Blog post card | Post listings |
| `.blog-post-image` | Featured image | Post images |
| `.blog-category-badge` | Category tag | Post categories |
| `.blog-post-meta` | Author, date info | Post metadata |
| `.blog-featured-post` | Highlighted post | Featured content |
| `.blog-pagination` | Page navigation | Pagination |

**Usage Example**:
```tsx
<article className="blog-post-card">
  <img className="blog-post-image" src="/images/blog/post1.jpg" />
  <span className="blog-category-badge">Technology</span>
  <div className="blog-post-meta">By John • 5 min read</div>
</article>
```

---

## 🧩 Component Classes

### Header (`/css/components/header.css`)

| Class Name | Purpose | Example |
|------------|---------|---------|
| `.site-header` | Main header container | Header wrapper |
| `.site-header.scrolled` | Scrolled state | Sticky header |
| `.site-logo` | Logo container | Brand logo |
| `.nav-link` | Navigation link | Menu links |
| `.nav-link.active` | Active link state | Current page |
| `.mobile-menu` | Mobile navigation | Mobile menu |

**Usage Example**:
```tsx
<header className="site-header scrolled">
  <a href="/" className="site-logo">Logo</a>
  <nav>
    <a className="nav-link active">Home</a>
    <a className="nav-link">About</a>
  </nav>
</header>
```

---

### Footer (`/css/components/footer.css`)

| Class Name | Purpose | Example |
|------------|---------|---------|
| `.site-footer` | Main footer container | Footer wrapper |
| `.footer-link` | Footer navigation link | Footer links |
| `.social-icon` | Social media icon | Social links |
| `.newsletter-form` | Newsletter form | Email signup |
| `.newsletter-input` | Newsletter input | Email field |
| `.footer-bottom` | Copyright section | Bottom bar |

**Usage Example**:
```tsx
<footer className="site-footer">
  <a className="footer-link">Privacy</a>
  <a className="social-icon">Twitter</a>
  <form className="newsletter-form">
    <input className="newsletter-input" type="email" />
  </form>
</footer>
```

---

### CTA Components (`/css/components/cta.css`)

| Class Name | Purpose | Example |
|------------|---------|---------|
| `.cta-button` | Base CTA button | All CTAs |
| `.cta-button-primary` | Primary CTA style | Main actions |
| `.cta-button-secondary` | Secondary CTA | Alt actions |
| `.cta-banner` | Full-width banner | Banner CTAs |
| `.cta-inline` | Inline CTA section | Inline CTAs |
| `.cta-modal-trigger` | Modal opener | Modal buttons |
| `.cta-icon` | CTA icon | Button icons |

**Usage Example**:
```tsx
<div className="cta-banner">
  <button className="cta-button cta-button-primary">
    <span>Get Started</span>
    <ArrowRight className="cta-icon" />
  </button>
</div>
```

---

## 🎨 Animations & Keyframes

### Available Animations

| Animation Name | File | Duration | Description |
|----------------|------|----------|-------------|
| `float` | home.css | 6s | Floating up/down motion |
| `slideIn` | header.css | 0.3s | Slide in from top |
| `slideDown` | contact.css | 0.3s | Slide down effect |

**Usage**:
```css
.your-element {
  animation: float 6s ease-in-out infinite;
}
```

---

## 📱 Responsive Design

All classes support responsive design through Tailwind breakpoints:
- `sm:` - 640px and up
- `md:` - 768px and up
- `lg:` - 1024px and up
- `xl:` - 1280px and up

**Combine with Tailwind**:
```tsx
<div className="hero-gradient-overlay sm:px-4 lg:px-8">
  {/* Content */}
</div>
```

---

## 🎯 Best Practices

1. **Combine Custom & Tailwind**: Use custom classes with Tailwind utilities
   ```tsx
   <button className="cta-button bg-blue-500 hover:bg-blue-600 px-6 py-3">
   ```

2. **Maintain Specificity**: Custom classes override Tailwind defaults
   ```css
   .custom-button {
     /* Your styles will take precedence */
   }
   ```

3. **Use Semantic Names**: Choose descriptive class names
   - ✅ `.hero-gradient-overlay`
   - ❌ `.hgo` or `.div1`

4. **Test Responsively**: Verify on all screen sizes
   ```tsx
   <div className="service-card sm:w-full md:w-1/2 lg:w-1/3">
   ```

---

## 🔄 Adding New Classes

To add a new custom class:

1. **Choose the right file** (page or component)
2. **Add your CSS** at the bottom of the file
3. **Document it** in this reference
4. **Test thoroughly** across browsers

**Example**:
```css
/* In public/css/pages/home.css */

.my-new-animation {
  animation: customFade 1s ease-in;
}

@keyframes customFade {
  from { opacity: 0; }
  to { opacity: 1; }
}
```

---

## 📚 Additional Resources

- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [CSS Animations Guide](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations)
- [CSS Grid Guide](https://css-tricks.com/snippets/css/complete-guide-grid/)
- [Flexbox Guide](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

---

**Last Updated**: November 2024

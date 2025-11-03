/**
 * Image configuration for the website
 *
 * IMPORTANT: To use local images instead of Unsplash:
 * 1. Place your images in the appropriate folder under /public/images/
 * 2. Update the 'src' path below to point to your local image
 * 3. Example: Change src to "/images/home/hero.jpg"
 *
 * Current setup uses Unsplash as placeholders. Replace with your own images.
 */

export const unsplashImages = {
  // Hero section - local image
  hero: {
    src: "/images/home/4.webp",
    alt: "Indian tech professionals working together on software solutions",
    width: 1920,
    height: 1080,
  },

  // Services section - local image
  services: {
    src: "/images/services/1.webp",
    alt: "Modern coding workspace with multiple screens",
    width: 1920,
    height: 1080,
  },

  // About page - local image
  aboutTeam: {
    src: "/images/about/1.webp",
    alt: "Professional team meeting",
    width: 1920,
    height: 1080,
  },

  // Additional home images
  office: {
    src: "/images/home/2.webp",
    alt: "Sleek modern office workspace",
    width: 1920,
    height: 1080,
  },

  technology: {
    src: "/images/home/3.webp",
    alt: "Abstract technology and digital innovation",
    width: 1920,
    height: 1080,
  },

  collaboration: {
    src: "/images/home/4.webp",
    alt: "Modern team collaboration and innovation",
    width: 1920,
    height: 1080,
  },
};

/**
 * Generate a placeholder image URL from Unsplash
 * @param width - Image width
 * @param height - Image height
 * @param query - Search query for the image
 *
 * NOTE: For production, replace Unsplash URLs with local images from /public/images/
 */
export function getUnsplashImage(width: number, height: number, query: string) {
  return `https://source.unsplash.com/${width}x${height}/?${query}`;
}

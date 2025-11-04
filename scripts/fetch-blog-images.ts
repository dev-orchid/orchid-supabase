import fs from "fs";
import path from "path";
import https from "https";

interface BlogImageConfig {
  slug: string;
  searchQuery: string;
  filename: string;
}

const blogImages: BlogImageConfig[] = [
  {
    slug: "api-security-best-practices",
    searchQuery: "api security cybersecurity",
    filename: "api-security.jpg",
  },
  {
    slug: "building-scalable-saas-applications",
    searchQuery: "software development nextjs coding",
    filename: "nextjs-saas.jpg",
  },
  {
    slug: "database-performance-optimization",
    searchQuery: "database server technology",
    filename: "database-performance.jpg",
  },
];

async function downloadImage(url: string, filepath: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const followRedirects = (currentUrl: string, redirectCount = 0): void => {
      if (redirectCount > 5) {
        reject(new Error("Too many redirects"));
        return;
      }

      const urlObj = new URL(currentUrl);
      const protocol = urlObj.protocol === "https:" ? https : require("http");

      protocol
        .get(currentUrl, (response) => {
          if (response.statusCode === 301 || response.statusCode === 302) {
            const redirectUrl = response.headers.location;
            if (redirectUrl) {
              followRedirects(redirectUrl, redirectCount + 1);
            } else {
              reject(new Error("Redirect without location header"));
            }
          } else if (response.statusCode === 200) {
            const file = fs.createWriteStream(filepath);
            response.pipe(file);
            file.on("finish", () => {
              file.close();
              resolve();
            });
          } else {
            reject(new Error(`HTTP ${response.statusCode}`));
          }
        })
        .on("error", (err) => {
          fs.unlink(filepath, () => {});
          reject(err);
        });
    };

    followRedirects(url);
  });
}

async function fetchUnsplashImage(query: string): Promise<string> {
  // Using Picsum Photos as a reliable alternative (free, no API key required)
  const width = 1200;
  const height = 675;
  // We'll use a seed based on the query to get consistent but relevant images
  const seed = query.replace(/\s+/g, "-");

  // Picsum provides random photos with optional blur/grayscale filters
  return `https://picsum.photos/seed/${seed}/${width}/${height}.jpg`;
}

async function main() {
  const imagesDir = path.join(process.cwd(), "public", "images", "blog");

  // Ensure directory exists
  if (!fs.existsSync(imagesDir)) {
    fs.mkdirSync(imagesDir, { recursive: true });
  }

  console.log("🖼️  Fetching blog images from Unsplash...\n");

  for (const blog of blogImages) {
    try {
      console.log(`📥 Fetching image for: ${blog.slug}`);
      console.log(`   Search query: "${blog.searchQuery}"`);

      const imageUrl = await fetchUnsplashImage(blog.searchQuery);
      const filepath = path.join(imagesDir, blog.filename);

      await downloadImage(imageUrl, filepath);

      console.log(`✅ Downloaded: ${blog.filename}\n`);
    } catch (error) {
      console.error(`❌ Error downloading ${blog.filename}:`, error);
    }
  }

  console.log("🎉 All images downloaded successfully!");
}

main().catch(console.error);

import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  image?: string;
  tags?: string[];
}

export interface BlogPostMetadata {
  slug: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  image?: string;
  tags?: string[];
}

const postsDirectory = path.join(process.cwd(), "content/blog");

export function getAllPostSlugs(): string[] {
  try {
    const fileNames = fs.readdirSync(postsDirectory);
    return fileNames
      .filter((fileName) => fileName.endsWith(".mdx"))
      .map((fileName) => fileName.replace(/\.mdx$/, ""));
  } catch (_error) {
    return [];
  }
}

export function getPostBySlug(slug: string): BlogPost | null {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.mdx`);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);
    const { text: readTime } = readingTime(content);

    return {
      slug,
      title: data.title || "",
      excerpt: data.excerpt || "",
      content,
      author: data.author || "",
      date: data.date || "",
      readTime,
      category: data.category || "Uncategorized",
      image: data.image,
      tags: data.tags || [],
    };
  } catch (_error) {
    return null;
  }
}

export function getAllPosts(): BlogPostMetadata[] {
  const slugs = getAllPostSlugs();
  const posts = slugs
    .map((slug) => {
      const post = getPostBySlug(slug);
      if (!post) return null;

      // Return only metadata (exclude content)
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { content: _content, ...metadata } = post;
      return metadata;
    })
    .filter((post): post is BlogPostMetadata => post !== null)
    .sort((a, b) => {
      // Sort by date (newest first)
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    });

  return posts;
}

export function getRelatedPosts(currentSlug: string, category: string, limit = 3): BlogPostMetadata[] {
  const allPosts = getAllPosts();

  return allPosts
    .filter((post) => post.slug !== currentSlug && post.category === category)
    .slice(0, limit);
}

export function getPostsByCategory(category: string): BlogPostMetadata[] {
  const allPosts = getAllPosts();
  return allPosts.filter((post) => post.category === category);
}

export function getAllCategories(): string[] {
  const allPosts = getAllPosts();
  const categories = new Set(allPosts.map((post) => post.category));
  return Array.from(categories);
}

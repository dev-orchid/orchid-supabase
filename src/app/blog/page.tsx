import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Header } from "@/components/landing/header";
import { Footer } from "@/components/landing/footer";
import { InlineCTA } from "@/components/cta/inline-cta";
import { Calendar, Clock, User, BookOpen } from "lucide-react";
import { getAllPosts, getAllCategories } from "@/lib/blog";
import "../../../public/css/pages/blog.css";

export const metadata: Metadata = {
  title: "Blog - Insights & Updates",
  description:
    "Stay updated with the latest insights, tutorials, and news from Orchid Software. Learn about software engineering best practices and industry trends.",
  keywords: ["blog", "software engineering", "tutorials", "tech insights", "industry news"],
};

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogPage() {
  const blogPosts = getAllPosts();
  const categories = ["All", ...getAllCategories()];

  return (
    <main className="blog-page">
      <Header />

      {/* Hero Section */}
      <section className="blog-hero">
        <div className="blog-hero-grid" />
        <div className="blog-hero-container">
          <div className="blog-hero-content">
            <div className="blog-hero-badge">
              <BookOpen className="blog-hero-badge-icon" />
              <span className="blog-hero-badge-text">Insights & Updates</span>
            </div>

            <h1 className="blog-hero-title">
              Our <span className="blog-hero-title-highlight">Blog</span>
            </h1>

            <p className="blog-hero-description">
              Insights, tutorials, and best practices from our team of expert engineers
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="blog-categories">
        <div className="blog-categories-container">
          <div className="blog-categories-wrapper">
            {categories.map((category) => (
              <button
                key={category}
                className={`blog-category-button ${category === "All" ? "active" : "inactive"}`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="blog-posts-section">
        <div className="blog-posts-grid">
          {blogPosts.map((post) => (
            <Link href={`/blog/${post.slug}`} key={post.slug}>
              <article className="blog-post-card group">
                <div className="blog-post-image-container">
                  {post.image ? (
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="blog-post-image"
                    />
                  ) : (
                    <div className="blog-post-image-placeholder">
                      <BookOpen className="blog-post-image-icon" />
                    </div>
                  )}
                </div>

                <div className="blog-post-content">
                  <div className="blog-post-category">{post.category}</div>

                  <h3 className="blog-post-title">{post.title}</h3>

                  <p className="blog-post-excerpt">{post.excerpt}</p>

                  <div className="blog-post-meta">
                    <div className="blog-post-meta-item">
                      <User className="blog-post-meta-icon" />
                      <span>{post.author}</span>
                    </div>
                    <div className="blog-post-meta-item">
                      <Calendar className="blog-post-meta-icon" />
                      <span>{formatDate(post.date)}</span>
                    </div>
                    <div className="blog-post-meta-item">
                      <Clock className="blog-post-meta-icon" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>

        {/* Inline CTA */}
        <InlineCTA variant="minimal" />
      </section>

      {/* Newsletter Section */}
      <section className="blog-newsletter">
        <div className="blog-newsletter-container">
          <div className="blog-newsletter-content">
            <h2 className="blog-newsletter-title">Subscribe to Our Newsletter</h2>
            <p className="blog-newsletter-description">
              Get the latest articles and insights delivered directly to your inbox
            </p>
            <form className="blog-newsletter-form">
              <input
                type="email"
                placeholder="Enter your email"
                className="blog-newsletter-input"
              />
              <button type="submit" className="blog-newsletter-button">
                Subscribe
              </button>
            </form>
            <p className="blog-newsletter-disclaimer">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

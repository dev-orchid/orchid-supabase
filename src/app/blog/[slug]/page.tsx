import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { MDXRemote } from "next-mdx-remote/rsc";
import { Calendar, Clock, User, ArrowLeft, Tag } from "lucide-react";
import rehypeHighlight from "rehype-highlight";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import { Header } from "@/components/landing/header";
import { Footer } from "@/components/landing/footer";
import { getPostBySlug, getAllPostSlugs, getRelatedPosts } from "@/lib/blog";
import "highlight.js/styles/github-dark.css";
import "../../../../public/css/pages/blog-post.css";

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const slugs = getAllPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = getPostBySlug(params.slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: `${post.title} - Orchid Software Blog`,
    description: post.excerpt,
    keywords: post.tags,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      images: post.image ? [post.image] : [],
    },
  };
}

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

const mdxOptions = {
  mdxOptions: {
    rehypePlugins: [
      rehypeHighlight as any,
      rehypeSlug as any,
      [
        rehypeAutolinkHeadings as any,
        {
          behavior: "wrap",
          properties: {
            className: ["anchor"],
          },
        },
      ] as any,
    ],
  },
};

const mdxComponents = {
  h1: (props: React.HTMLAttributes<HTMLHeadingElement>) => <h1 className="blog-post-h1" {...props} />,
  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => <h2 className="blog-post-h2" {...props} />,
  h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => <h3 className="blog-post-h3" {...props} />,
  h4: (props: React.HTMLAttributes<HTMLHeadingElement>) => <h4 className="blog-post-h4" {...props} />,
  p: (props: React.HTMLAttributes<HTMLParagraphElement>) => <p className="blog-post-paragraph" {...props} />,
  ul: (props: React.HTMLAttributes<HTMLUListElement>) => <ul className="blog-post-ul" {...props} />,
  ol: (props: React.HTMLAttributes<HTMLOListElement>) => <ol className="blog-post-ol" {...props} />,
  li: (props: React.LiHTMLAttributes<HTMLLIElement>) => <li className="blog-post-li" {...props} />,
  a: (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => <a className="blog-post-link" {...props} />,
  code: (props: React.HTMLAttributes<HTMLElement>) => {
    const { className } = props;
    const isInline = !className;
    if (isInline) {
      return <code className="blog-post-code-inline" {...props} />;
    }
    return <code className={className} {...props} />;
  },
  pre: (props: React.HTMLAttributes<HTMLPreElement>) => <pre className="blog-post-pre" {...props} />,
  blockquote: (props: React.BlockquoteHTMLAttributes<HTMLQuoteElement>) => <blockquote className="blog-post-blockquote" {...props} />,
};

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = getRelatedPosts(post.slug, post.category);

  return (
    <main className="blog-post-page">
      <Header />

      {/* Hero Section */}
      <section className="blog-post-hero">
        <div className="blog-post-hero-grid" />
        <div className="blog-post-hero-container">
          <div className="blog-post-hero-content">
            <Link href="/blog" className="blog-post-back-link">
              <ArrowLeft className="blog-post-back-icon" />
              Back to Blog
            </Link>

            <div className="blog-post-hero-category">{post.category}</div>

            <h1 className="blog-post-hero-title">{post.title}</h1>

            <div className="blog-post-hero-meta">
              <div className="blog-post-hero-meta-item">
                <User className="blog-post-hero-meta-icon" />
                <span className="blog-post-hero-meta-author">{post.author}</span>
              </div>
              <div className="blog-post-hero-meta-item">
                <Calendar className="blog-post-hero-meta-icon" />
                <span>{formatDate(post.date)}</span>
              </div>
              <div className="blog-post-hero-meta-item">
                <Clock className="blog-post-hero-meta-icon" />
                <span>{post.readTime}</span>
              </div>
            </div>

            {post.tags && post.tags.length > 0 && (
              <div className="blog-post-hero-tags">
                <Tag className="blog-post-hero-tag-icon" />
                <div className="blog-post-hero-tags-wrapper">
                  {post.tags.map((tag) => (
                    <span key={tag} className="blog-post-hero-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Featured Image */}
      {post.image && (
        <section className="blog-post-featured-image-section">
          <div className="blog-post-featured-image-container">
            <div className="blog-post-featured-image-wrapper">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="blog-post-featured-image"
                priority
              />
            </div>
          </div>
        </section>
      )}

      {/* Article Content */}
      <article className="blog-post-article">
        <div className="blog-post-article-container">
          <div className="blog-post-article-prose">
            <MDXRemote
              source={post.content}
              components={mdxComponents}
              options={mdxOptions}
            />
          </div>
        </div>
      </article>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="blog-post-related">
          <div className="blog-post-related-container">
            <h2 className="blog-post-related-title">Related Articles</h2>

            <div className="blog-post-related-grid">
              {relatedPosts.map((relatedPost) => (
                <Link href={`/blog/${relatedPost.slug}`} key={relatedPost.slug}>
                  <article className="blog-post-related-card group">
                    <div className="blog-post-related-image-container">
                      {relatedPost.image ? (
                        <Image
                          src={relatedPost.image}
                          alt={relatedPost.title}
                          fill
                          className="blog-post-related-image"
                        />
                      ) : (
                        <div className="blog-post-related-image-placeholder">
                          <Tag className="blog-post-related-image-icon" />
                        </div>
                      )}
                    </div>

                    <div className="blog-post-related-content">
                      <div className="blog-post-related-category">
                        {relatedPost.category}
                      </div>

                      <h3 className="blog-post-related-title-text">
                        {relatedPost.title}
                      </h3>

                      <p className="blog-post-related-excerpt">
                        {relatedPost.excerpt}
                      </p>

                      <div className="blog-post-related-meta">
                        <div className="blog-post-related-meta-item">
                          <Clock className="blog-post-related-meta-icon" />
                          <span>{relatedPost.readTime}</span>
                        </div>
                        <div className="blog-post-related-meta-item">
                          <Calendar className="blog-post-related-meta-icon" />
                          <span>{formatDate(relatedPost.date)}</span>
                        </div>
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>

            <div className="blog-post-related-actions">
              <Link href="/blog" className="blog-post-related-view-all">
                View All Articles
              </Link>
            </div>
          </div>
        </section>
      )}

      <Footer />
    </main>
  );
}

import Link from "next/link";
import { ArrowLeft, FileQuestion } from "lucide-react";
import { Header } from "@/components/landing/header";
import { Footer } from "@/components/landing/footer";

export default function BlogNotFound() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />

      <section className="flex-1 flex items-center justify-center px-4 py-20">
        <div className="text-center max-w-2xl mx-auto">
          <div className="mb-6 inline-flex items-center justify-center w-24 h-24 rounded-full bg-primary/10">
            <FileQuestion className="h-12 w-12 text-primary" />
          </div>

          <h1 className="text-4xl font-bold mb-4">Blog Post Not Found</h1>

          <p className="text-lg text-muted-foreground mb-8">
            Sorry, we couldn&apos;t find the blog post you&apos;re looking for. It may have been moved or deleted.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Blog
            </Link>

            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-lg border-2 border-primary bg-background px-6 py-3 font-semibold text-primary hover:bg-primary/10 transition-colors"
            >
              Go Home
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

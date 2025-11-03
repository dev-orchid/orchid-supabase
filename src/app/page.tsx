import { Header } from "@/components/landing/header";
import { Hero } from "@/components/landing/hero";
import { TrustedBy } from "@/components/landing/trusted-by";
import { Features } from "@/components/landing/features";
import { CTA } from "@/components/landing/cta";
import { Footer } from "@/components/landing/footer";
import type { Metadata } from "next";
import "../../public/css/pages/home.css";

export const metadata: Metadata = {
  title: "Orchid - Expert Software Engineering Services | SaaS Solutions",
  description:
    "Build powerful SaaS solutions with our world-class engineering team. From concept to deployment, we deliver scalable, secure, and innovative software. Start your free trial today.",
  keywords: [
    "software engineering",
    "SaaS solutions",
    "custom software development",
    "enterprise software",
    "cloud solutions",
    "software development company",
  ],
  openGraph: {
    title: "Orchid - Expert Software Engineering Services",
    description:
      "Build powerful SaaS solutions with our world-class engineering team. Start your free trial today.",
    type: "website",
  },
};

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <TrustedBy />
      <Features />
      <CTA />
      <Footer />
    </main>
  );
}

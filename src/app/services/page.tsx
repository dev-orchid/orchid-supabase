import type { Metadata } from "next";
import Image from "next/image";
import { Header } from "@/components/landing/header";
import { Footer } from "@/components/landing/footer";
import { BannerCTA } from "@/components/cta/banner-cta";
import { Code2, Database, Cloud, Shield, Zap, Sparkles } from "lucide-react";
import { unsplashImages } from "@/lib/images";
import "../../../public/css/pages/services.css";

export const metadata: Metadata = {
  title: "Our Services - Software Engineering Solutions",
  description:
    "Explore our comprehensive software engineering services. From custom development to cloud architecture, we deliver solutions that drive business growth.",
  keywords: [
    "software engineering services",
    "custom development",
    "cloud solutions",
    "API development",
  ],
};

const services = [
  {
    icon: Code2,
    title: "Custom Software Development",
    description:
      "Build tailored solutions that perfectly fit your business needs with our expert development team.",
    features: ["Web Applications", "Mobile Apps", "Desktop Software", "Progressive Web Apps"],
  },
  {
    icon: Cloud,
    title: "Cloud Architecture & DevOps",
    description:
      "Design and implement scalable cloud infrastructure with automated deployment pipelines.",
    features: ["AWS/Azure/GCP", "CI/CD Pipelines", "Infrastructure as Code", "Monitoring"],
  },
  {
    icon: Database,
    title: "Database Design & Optimization",
    description:
      "Optimize your data architecture for performance, scalability, and reliability.",
    features: ["Database Design", "Query Optimization", "Migration Services", "Data Modeling"],
  },
  {
    icon: Shield,
    title: "Security & Compliance",
    description:
      "Protect your applications with enterprise-grade security and compliance measures.",
    features: ["Security Audits", "Penetration Testing", "GDPR/SOC 2", "Encryption"],
  },
  {
    icon: Sparkles,
    title: "AI & Machine Learning",
    description:
      "Leverage artificial intelligence to automate processes and gain valuable insights.",
    features: ["ML Model Development", "Natural Language Processing", "Predictive Analytics", "Computer Vision"],
  },
  {
    icon: Zap,
    title: "API Development & Integration",
    description:
      "Build robust APIs and integrate seamlessly with third-party services.",
    features: ["RESTful APIs", "GraphQL", "Microservices", "Third-party Integrations"],
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="services-hero-section">
        <div className="services-hero-grid-bg" />

        <div className="container relative mx-auto px-4 py-20 md:py-28">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            {/* Left Column - Content */}
            <div className="mx-auto max-w-2xl text-center lg:text-left">
              <div className="services-badge mb-4">
                <Sparkles className="h-4 w-4 text-primary" />
                <span className="text-primary">Comprehensive Solutions</span>
              </div>

              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                Software Engineering{" "}
                <span className="bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent">
                  Services
                </span>
              </h1>

              <p className="mt-6 text-lg text-muted-foreground sm:text-xl">
                From concept to deployment, we provide end-to-end software engineering services that
                help your business thrive in the digital age.
              </p>
            </div>

            {/* Right Column - Banner Image */}
            <div className="relative">
              <div className="services-hero-image">
                <Image
                  src={unsplashImages.services.src}
                  alt={unsplashImages.services.alt}
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="services-hero-image-overlay" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="container mx-auto px-4 py-20 md:py-28">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div key={index} className="service-card group">
              <div className="service-icon-container">
                <service.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="mb-3 text-xl font-semibold">{service.title}</h3>
              <p className="mb-6 text-muted-foreground">{service.description}</p>
              <ul className="service-features-list">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="service-feature-item">
                    <div className="service-feature-bullet" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Banner CTA */}
      <BannerCTA variant="split" />

      <Footer />
    </main>
  );
}

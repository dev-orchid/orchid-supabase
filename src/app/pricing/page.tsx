"use client";

import { useState } from "react";
import { Header } from "@/components/landing/header";
import { Footer } from "@/components/landing/footer";
import { PricingToggle } from "@/components/pricing/pricing-toggle";
import { PricingCard } from "@/components/pricing/pricing-card";
import { FeatureComparison } from "@/components/pricing/feature-comparison";
import { FAQ } from "@/components/pricing/faq";
import { InlineCTA } from "@/components/cta/inline-cta";
import { Sparkles } from "lucide-react";
import "../../../public/css/pages/pricing.css";

const pricingPlans = [
  {
    name: "Starter",
    description: "Perfect for small teams and startups getting started",
    monthlyPrice: 29,
    annualPrice: 23,
    features: [
      "Up to 5 team members",
      "10 GB storage",
      "Basic analytics",
      "Email support",
      "API access (1,000 calls/day)",
      "SSL encryption",
      "Mobile app access",
      "30-day data retention",
    ],
    ctaText: "Start Free Trial",
    ctaLink: "/signup?plan=starter",
    isPopular: false,
  },
  {
    name: "Professional",
    description: "For growing teams that need advanced features",
    monthlyPrice: 79,
    annualPrice: 63,
    features: [
      "Up to 25 team members",
      "100 GB storage",
      "Advanced analytics & reporting",
      "Priority email support",
      "API access (10,000 calls/day)",
      "Custom domain",
      "Advanced integrations",
      "1-year data retention",
      "SOC 2 compliance",
      "Team collaboration tools",
      "Custom workflows",
      "Audit logs",
    ],
    ctaText: "Start Free Trial",
    ctaLink: "/signup?plan=professional",
    isPopular: true,
  },
  {
    name: "Enterprise",
    description: "For large organizations with custom needs",
    monthlyPrice: 299,
    annualPrice: 239,
    features: [
      "Unlimited team members",
      "Unlimited storage",
      "Custom analytics & reports",
      "24/7 phone & email support",
      "Unlimited API calls",
      "SSO/SAML authentication",
      "White label options",
      "Unlimited data retention",
      "Dedicated account manager",
      "Custom integrations",
      "SLA guarantees",
      "On-premise deployment option",
      "Custom contracts & invoicing",
      "Advanced security features",
    ],
    ctaText: "Contact Sales",
    ctaLink: "/contact-sales",
    isPopular: false,
  },
];

export default function PricingPage() {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="pricing-hero-section">
        <div className="pricing-hero-grid-bg" />

        <div className="container relative mx-auto px-4 py-20 md:py-28">
          <div className="mx-auto max-w-3xl text-center">
            <div className="pricing-badge">
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-primary">Simple, Transparent Pricing</span>
            </div>

            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              Choose the{" "}
              <span className="bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent">
                Perfect Plan
              </span>{" "}
              for Your Team
            </h1>

            <p className="mt-6 text-lg text-muted-foreground sm:text-xl">
              Start with a 14-day free trial. No credit card required. Cancel anytime.
            </p>

            <div className="mt-10">
              <PricingToggle onToggle={setIsAnnual} />
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="container mx-auto px-4 py-20">
        <div className="grid gap-8 lg:grid-cols-3 lg:gap-6">
          {pricingPlans.map((plan, index) => (
            <PricingCard
              key={index}
              name={plan.name}
              description={plan.description}
              monthlyPrice={plan.monthlyPrice}
              annualPrice={plan.annualPrice}
              isAnnual={isAnnual}
              features={plan.features}
              isPopular={plan.isPopular}
              ctaText={plan.ctaText}
              ctaLink={plan.ctaLink}
            />
          ))}
        </div>

        <div className="pricing-trial-notice">
          <p>
            All plans include 14-day free trial •{" "}
            <span className="pricing-trial-notice-highlight">No credit card required</span> • Cancel
            anytime
          </p>
        </div>
      </section>

      {/* Feature Comparison */}
      <FeatureComparison />

      {/* FAQ */}
      <FAQ />

      {/* Inline CTA after FAQ */}
      <div className="container mx-auto px-4">
        <InlineCTA variant="compact" />
      </div>

      <Footer />
    </main>
  );
}

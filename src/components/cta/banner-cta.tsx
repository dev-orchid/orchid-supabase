"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Zap, Shield, Users, CheckCircle2 } from "lucide-react";
import { DemoRequestModal } from "@/components/modals/demo-request-modal";
import { unsplashImages } from "@/lib/images";

interface BannerCTAProps {
  variant?: "gradient" | "split" | "outlined" | "dark";
}

export function BannerCTA({ variant = "gradient" }: BannerCTAProps) {
  const [showDemoModal, setShowDemoModal] = useState(false);

  if (variant === "split") {
    return (
      <>
        <section className="relative overflow-hidden border-y bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
          <div className="container mx-auto px-4 py-16 md:py-24">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
              {/* Left - Content */}
              <div>
                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-medium">
                  <Zap className="h-4 w-4 text-primary" />
                  <span className="text-primary">Limited Time Offer</span>
                </div>

                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                  Start Building{" "}
                  <span className="bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent">
                    Today
                  </span>
                </h2>

                <p className="mt-4 text-lg text-muted-foreground">
                  Join the fastest-growing companies who trust Orchid Software to power their software
                  development. Get started in minutes, not weeks.
                </p>

                <ul className="mt-6 space-y-3">
                  <li className="flex items-center gap-3">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/20">
                      <CheckCircle2 className="h-4 w-4 text-green-600 dark:text-green-500" />
                    </div>
                    <span>Deploy in under 5 minutes</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/20">
                      <CheckCircle2 className="h-4 w-4 text-green-600 dark:text-green-500" />
                    </div>
                    <span>Free migration support included</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/20">
                      <CheckCircle2 className="h-4 w-4 text-green-600 dark:text-green-500" />
                    </div>
                    <span>Dedicated onboarding specialist</span>
                  </li>
                </ul>

                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                  <Button
                    size="lg"
                    className="group relative overflow-hidden bg-gradient-to-r from-orange-600 to-orange-500 hover:shadow-xl hover:scale-105"
                    asChild
                  >
                    <a href="/signup">
                      <span className="relative z-10 flex items-center">
                        Start Free Trial
                        <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-orange-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </a>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="group relative overflow-hidden border-2 border-primary hover:border-transparent hover:text-white hover:scale-105"
                    onClick={() => setShowDemoModal(true)}
                  >
                    <span className="relative z-10 flex items-center">
                      <Calendar className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                      Schedule Demo
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </Button>
                </div>
              </div>

              {/* Right - Image */}
              <div className="relative">
                <div className="relative aspect-square lg:aspect-auto lg:h-[500px] rounded-2xl overflow-hidden border-2 border-primary/20 shadow-2xl">
                  <Image
                    src={unsplashImages.office.src}
                    alt={unsplashImages.office.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>

                {/* Floating Stats */}
                <div className="absolute -bottom-6 -left-6 hidden rounded-xl border bg-white p-4 shadow-xl dark:bg-gray-800 lg:block">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-green-400 to-green-600">
                      <Users className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold">500+ Companies</div>
                      <div className="text-xs text-muted-foreground">Trust Orchid Software</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <DemoRequestModal open={showDemoModal} onOpenChange={setShowDemoModal} />
      </>
    );
  }

  if (variant === "outlined") {
    return (
      <>
        <section className="container mx-auto px-4 py-16 md:py-24">
          <div className="rounded-3xl border-4 border-dashed border-primary/30 p-8 text-center md:p-16">
            <div className="mx-auto max-w-3xl">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary px-4 py-1.5 text-sm font-medium text-primary-foreground">
                <Shield className="h-4 w-4" />
                <span>Enterprise-Grade Security</span>
              </div>

              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                Build Secure, Scalable Applications
              </h2>

              <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
                Experience enterprise-level security, 99.9% uptime, and world-class support.
                No credit card required to get started.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
                <Button
                  size="lg"
                  className="group relative overflow-hidden bg-gradient-to-r from-orange-600 to-orange-500 font-semibold hover:shadow-xl hover:scale-105"
                  asChild
                >
                  <a href="/signup">
                    <span className="relative z-10 flex items-center">
                      Get Started Free
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-orange-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="group relative overflow-hidden border-2 border-primary font-semibold hover:border-transparent hover:text-white hover:scale-105"
                  onClick={() => setShowDemoModal(true)}
                >
                  <span className="relative z-10 flex items-center">
                    <Calendar className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                    Book a Demo
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Button>
              </div>

              <div className="mt-8 grid grid-cols-3 gap-6 border-t pt-8">
                <div>
                  <div className="text-3xl font-bold text-primary">99.9%</div>
                  <div className="text-sm text-muted-foreground">Uptime SLA</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">24/7</div>
                  <div className="text-sm text-muted-foreground">Support</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">SOC 2</div>
                  <div className="text-sm text-muted-foreground">Certified</div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <DemoRequestModal open={showDemoModal} onOpenChange={setShowDemoModal} />
      </>
    );
  }

  if (variant === "dark") {
    return (
      <>
        <section className="bg-slate-900 text-white">
          <div className="container mx-auto px-4 py-16 md:py-24">
            <div className="mx-auto max-w-4xl text-center">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-medium backdrop-blur-sm">
                <Zap className="h-4 w-4" />
                <span>Supercharge Your Development</span>
              </div>

              <h2 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                Ready to Transform Your{" "}
                <span className="bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
                  Software Development?
                </span>
              </h2>

              <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-300">
                Join forward-thinking companies that are building the future with Orchid Software.
                Get started today with our risk-free trial.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
                <Button
                  size="lg"
                  variant="secondary"
                  className="group relative overflow-hidden font-semibold hover:shadow-2xl hover:scale-105"
                  asChild
                >
                  <a href="/signup">
                    <span className="relative z-10 flex items-center">
                      Start Free Trial
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="group relative overflow-hidden border-2 border-white bg-transparent font-semibold text-white hover:bg-white hover:text-slate-900 hover:scale-105 shadow-lg hover:shadow-xl transition-all duration-300"
                  onClick={() => setShowDemoModal(true)}
                >
                  <span className="relative z-10 flex items-center">
                    <Calendar className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                    Watch Demo
                  </span>
                </Button>
              </div>

              <div className="mt-10 flex flex-wrap items-center justify-center gap-8 border-t border-white/10 pt-10 text-sm text-slate-400">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-400" />
                  <span>No credit card required</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-400" />
                  <span>14-day free trial</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-400" />
                  <span>Cancel anytime</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <DemoRequestModal open={showDemoModal} onOpenChange={setShowDemoModal} />
      </>
    );
  }

  // Default gradient variant
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-orange-600 via-amber-600 to-orange-700">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-grid-white/10 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]" />

        {/* Floating Orbs */}
        <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-white/10 blur-3xl" />

        <div className="container relative mx-auto px-4 py-20 md:py-28">
          <div className="mx-auto max-w-4xl text-center text-white">
            <div className="mb-6 inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-medium backdrop-blur-sm">
              <span className="mr-2">Limited Time Offer</span>
              <span className="rounded-full bg-white px-2 py-0.5 text-xs font-bold text-primary">
                50% OFF
              </span>
            </div>

            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Build Something Extraordinary
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg opacity-90 sm:text-xl">
              Start your journey with Orchid Software today. Join hundreds of companies transforming
              their ideas into powerful SaaS products.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button
                size="lg"
                variant="secondary"
                className="group relative overflow-hidden font-semibold shadow-xl hover:shadow-2xl hover:scale-105"
                asChild
              >
                <a href="/signup">
                  <span className="relative z-10 flex items-center">
                    Start Free Trial
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="group relative overflow-hidden border-2 border-white bg-transparent font-semibold text-white hover:bg-white hover:text-primary hover:scale-105 shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={() => setShowDemoModal(true)}
              >
                <span className="relative z-10 flex items-center">
                  <Calendar className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                  Schedule Demo
                </span>
              </Button>
            </div>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-sm opacity-75">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5" />
                <span>14-day free trial</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5" />
                <span>Cancel anytime</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <DemoRequestModal open={showDemoModal} onOpenChange={setShowDemoModal} />
    </>
  );
}

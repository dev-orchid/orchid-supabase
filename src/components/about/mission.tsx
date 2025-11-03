import Image from "next/image";
import { Target, Lightbulb, Heart } from "lucide-react";
import { unsplashImages } from "@/lib/images";

export function Mission() {
  return (
    <section className="about-hero-section">
      <div className="about-hero-grid-bg" />

      <div className="container relative mx-auto px-4 py-20 md:py-28">
        <div className="mx-auto max-w-4xl text-center">
          <div className="about-badge">
            <Target className="h-4 w-4 text-primary" />
            <span className="text-primary">About Orchid</span>
          </div>

          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            Building the{" "}
            <span className="bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent">
              Future of Software
            </span>
          </h1>

          <p className="mt-6 text-lg text-muted-foreground sm:text-xl lg:text-2xl">
            We are a team of passionate engineers, designers, and innovators dedicated to
            transforming ideas into powerful SaaS solutions that drive real business value.
          </p>
        </div>

        {/* Team Photo Banner */}
        <div className="mx-auto mt-12 max-w-5xl">
          <div className="about-team-banner">
            <Image
              src={unsplashImages.aboutTeam.src}
              alt={unsplashImages.aboutTeam.alt}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 1280px) 100vw, 1280px"
            />
            {/* Gradient Overlay */}
            <div className="about-team-banner-overlay" />
          </div>
        </div>

        <div className="mx-auto mt-16 grid max-w-5xl gap-8 md:grid-cols-3">
          <div className="mission-card">
            <div className="mission-icon-container mission-icon-container-blue">
              <Target className="h-7 w-7 text-white" />
            </div>
            <h3 className="mb-3 text-xl font-semibold">Our Mission</h3>
            <p className="text-muted-foreground">
              To empower businesses with cutting-edge software solutions that accelerate growth,
              enhance productivity, and create lasting value.
            </p>
          </div>

          <div className="mission-card">
            <div className="mission-icon-container mission-icon-container-purple">
              <Lightbulb className="h-7 w-7 text-white" />
            </div>
            <h3 className="mb-3 text-xl font-semibold">Our Vision</h3>
            <p className="text-muted-foreground">
              To be the world&apos;s most trusted partner for companies looking to build innovative
              SaaS products that make a difference.
            </p>
          </div>

          <div className="mission-card">
            <div className="mission-icon-container mission-icon-container-green">
              <Heart className="h-7 w-7 text-white" />
            </div>
            <h3 className="mb-3 text-xl font-semibold">Our Commitment</h3>
            <p className="text-muted-foreground">
              We are committed to delivering excellence, fostering innovation, and building
              long-term relationships with our clients.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

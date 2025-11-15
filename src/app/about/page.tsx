import type { Metadata } from "next";
import { Header } from "@/components/landing/header";
import { Footer } from "@/components/landing/footer";
import { Mission } from "@/components/about/mission";
import { Values } from "@/components/about/values";
import { Statistics } from "@/components/about/statistics";
// import { Team } from "@/components/about/team";
import { BannerCTA } from "@/components/cta/banner-cta";
import "../../../public/css/pages/about.css";

export const metadata: Metadata = {
  title: "About Us - Our Mission, Values & Team",
  description:
    "Learn about Orchid Software's mission to build the future of software. Meet our team of expert engineers and discover the values that drive us every day.",
  keywords: [
    "about orchid software",
    "software engineering team",
    "company mission",
    "our values",
    "engineering team",
  ],
  openGraph: {
    title: "About Orchid Software - Our Mission, Values & Team",
    description:
      "Learn about our mission to build exceptional software and meet the team behind Orchid Software.",
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <Mission />
      <Statistics />
      <Values />
      {/* <Team /> */}
      <BannerCTA variant="outlined" />
      <Footer />
    </main>
  );
}

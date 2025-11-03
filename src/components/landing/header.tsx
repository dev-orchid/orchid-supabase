"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import "../../../public/css/components/header.css";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Pricing", href: "/pricing" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
  { name: "Blog", href: "/blog" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  return (
    <header className={cn("site-header", scrolled ? "scrolled" : "not-scrolled")}>
      <nav className="nav-container">
        {/* Logo */}
        <Link href="/" className="site-logo">
          <Image
            src="/images/logo/orchid_logo_color.png"
            alt="Orchid Software"
            width={120}
            height={120}
            className="logo-image"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="nav-desktop">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn("nav-link", isActive(item.href) ? "active" : "inactive")}
            >
              {item.name}
              {isActive(item.href) && <span className="nav-link-indicator" />}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="mobile-menu-button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <X className="mobile-menu-icon" />
          ) : (
            <Menu className="mobile-menu-icon" />
          )}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="mobile-menu">
          <div className="mobile-menu-container">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn("mobile-nav-link", isActive(item.href) ? "active" : "inactive")}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

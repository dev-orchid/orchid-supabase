import Link from "next/link";
import Image from "next/image";
import { Github, Twitter, Linkedin, Facebook, Instagram, Youtube, Mail, MapPin, Phone } from "lucide-react";
import "../../../public/css/components/footer.css";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-grid">
          {/* Company Info */}
          <div className="footer-company-section">
            <Link href="/" className="footer-logo">
              <Image
                src="/images/logo/orchid_logo_color.png"
                alt="Orchid Software"
                width={160}
                height={160}
                className="footer-logo-image"
              />
            </Link>
            <p className="footer-description">
              Building the future of software with cutting-edge SaaS solutions. Transform your
              ideas into powerful applications that drive real business value.
            </p>
            <div className="footer-contact-info">
              <div className="footer-contact-item">
                <MapPin className="footer-contact-icon" />
                <span>13 Laxmichak Parsa Bazar Patna </span>
              </div>
              <div className="footer-contact-item">
                <Phone className="footer-contact-icon" />
                <a href="tel:+9079003238" className="footer-contact-link">
                  +91 9079 00 3238
                </a>
              </div>
              <div className="footer-contact-item">
                <Mail className="footer-contact-icon" />
                <a href="mailto:info@orchidsw.com" className="footer-contact-link">
                  info@orchidsw.com
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="footer-section-heading">Quick Links</h3>
            <ul className="footer-section-list">
              <li><Link href="/" className="footer-link">Home</Link></li>
              <li><Link href="/about" className="footer-link">About Us</Link></li>
              <li><Link href="/pricing" className="footer-link">Pricing</Link></li>
              <li><Link href="/contact" className="footer-link">Contact</Link></li>
              <li><Link href="/blog" className="footer-link">Blog</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="footer-section-heading">Services</h3>
            <ul className="footer-section-list">
              <li><Link href="/services" className="footer-link">Custom Development</Link></li>
              <li><Link href="/services" className="footer-link">Cloud Architecture</Link></li>
              <li><Link href="/services" className="footer-link">Database Design</Link></li>
              <li><Link href="/services" className="footer-link">Security & Compliance</Link></li>
              <li><Link href="/services" className="footer-link">API Development</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="footer-section-heading">Resources</h3>
            <ul className="footer-section-list">
              <li><Link href="/blog" className="footer-link">Documentation</Link></li>
              <li><Link href="/blog" className="footer-link">API Reference</Link></li>
              <li><Link href="/blog" className="footer-link">Tutorials</Link></li>
              <li><Link href="/blog" className="footer-link">Case Studies</Link></li>
              <li><Link href="/contact" className="footer-link">Support</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="footer-section-heading">Legal</h3>
            <ul className="footer-section-list">
              <li><Link href="/privacy" className="footer-link">Privacy Policy</Link></li>
              <li><Link href="/terms" className="footer-link">Terms of Service</Link></li>
              <li><Link href="/cookies" className="footer-link">Cookie Policy</Link></li>
              <li><Link href="/about" className="footer-link">Careers</Link></li>
              <li><Link href="/about" className="footer-link">Press Kit</Link></li>
            </ul>
          </div>
        </div>

        {/* Social Media & Copyright */}
        <div className="footer-bottom">
          <div className="footer-social-container">
            <Link
              href="https://twitter.com/orchid"
              className="footer-social-icon"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              <Twitter className="footer-social-icon-svg" />
            </Link>
            <Link
              href="https://github.com/orchid"
              className="footer-social-icon"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <Github className="footer-social-icon-svg" />
            </Link>
            <Link
              href="https://linkedin.com/company/orchid"
              className="footer-social-icon"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin className="footer-social-icon-svg" />
            </Link>
            <Link
              href="https://facebook.com/orchid"
              className="footer-social-icon"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <Facebook className="footer-social-icon-svg" />
            </Link>
            <Link
              href="https://instagram.com/orchid"
              className="footer-social-icon"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <Instagram className="footer-social-icon-svg" />
            </Link>
            <Link
              href="https://youtube.com/orchid"
              className="footer-social-icon"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
            >
              <Youtube className="footer-social-icon-svg" />
            </Link>
          </div>

          <div className="footer-copyright">
            <p>&copy; {new Date().getFullYear()} Orchid. All rights reserved.</p>
            
          </div>
        </div>
      </div>
    </footer>
  );
}

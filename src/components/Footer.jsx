"use client";

import { Instagram, Facebook, Twitter } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Instagram,
      href: "#",
      label: "Follow us on Instagram",
    },
    {
      icon: Facebook,
      href: "#",
      label: "Follow us on Facebook",
    },
    {
      icon: Twitter,
      href: "#",
      label: "Follow us on Twitter",
    },
  ];

  const footerLinks = [
    { label: "Menu", href: "#menu" },
    { label: "About", href: "#about" },
    { label: "Location", href: "#location" },
    { label: "Catering", href: "#" },
    { label: "Contact", href: "#" },
  ];

  return (
    <footer className="bg-[#FAFAF9] border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-20">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand Column */}
          <div className="space-y-6">
            <h3
              className="text-2xl md:text-3xl font-medium text-black tracking-[0.15em]"
              style={{ fontFamily: "Outfit, sans-serif" }}
            >
              SULTANA'S
            </h3>
            <p
              className="text-gray-600 leading-relaxed max-w-sm tracking-[0.01em]"
              style={{ fontFamily: "Outfit, sans-serif" }}
            >
              Artisanal pastries crafted with love, using the finest ingredients
              and time-honored techniques.
            </p>
            <div className="space-y-2">
              <p
                className="text-sm text-gray-700 tracking-[0.02em]"
                style={{ fontFamily: "Outfit, sans-serif" }}
              >
                123 Artisan Street, Bakery District
              </p>
              <p
                className="text-sm text-gray-700 tracking-[0.02em]"
                style={{ fontFamily: "Outfit, sans-serif" }}
              >
                San Francisco, CA 94102
              </p>
              <p
                className="text-sm text-gray-700 tracking-[0.02em]"
                style={{ fontFamily: "Outfit, sans-serif" }}
              >
                (555) 123-CAKE
              </p>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="space-y-6">
            <h4
              className="text-lg font-medium text-black tracking-[0.05em] uppercase"
              style={{ fontFamily: "Outfit, sans-serif" }}
            >
              Quick Links
            </h4>
            <nav className="flex flex-col space-y-3">
              {footerLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-gray-600 hover:text-[#9ACD32] transition-colors duration-300 tracking-[0.02em]"
                  style={{ fontFamily: "Outfit, sans-serif" }}
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Hours & Social Column */}
          <div className="space-y-6">
            <h4
              className="text-lg font-medium text-black tracking-[0.05em] uppercase"
              style={{ fontFamily: "Outfit, sans-serif" }}
            >
              Hours
            </h4>
            <div className="space-y-2">
              <p
                className="text-sm text-gray-700 tracking-[0.02em]"
                style={{ fontFamily: "Outfit, sans-serif" }}
              >
                Monday - Friday: 6:30 AM - 7:00 PM
              </p>
              <p
                className="text-sm text-gray-700 tracking-[0.02em]"
                style={{ fontFamily: "Outfit, sans-serif" }}
              >
                Saturday - Sunday: 7:00 AM - 8:00 PM
              </p>
            </div>

            {/* Social Media */}
            <div className="pt-4">
              <h5
                className="text-sm font-medium text-black mb-4 tracking-[0.05em] uppercase"
                style={{ fontFamily: "Outfit, sans-serif" }}
              >
                Follow Us
              </h5>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      aria-label={social.label}
                      className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:text-[#9ACD32] hover:border-[#9ACD32] transition-all duration-300 hover:scale-110"
                    >
                      <Icon size={18} />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p
              className="text-sm text-gray-600 tracking-[0.02em]"
              style={{ fontFamily: "Outfit, sans-serif" }}
            >
              © {currentYear} Sultana's. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a
                href="#"
                className="text-sm text-gray-600 hover:text-[#9ACD32] transition-colors duration-300 tracking-[0.02em]"
                style={{ fontFamily: "Outfit, sans-serif" }}
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-sm text-gray-600 hover:text-[#9ACD32] transition-colors duration-300 tracking-[0.02em]"
                style={{ fontFamily: "Outfit, sans-serif" }}
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

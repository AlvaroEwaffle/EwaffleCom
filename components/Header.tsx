"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "/services", label: "Servicios" },
  { href: "/pricing", label: "Modelo comercial" },
  { href: "/case-studies", label: "Casos" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "Sobre Ewaffle" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-navy-950/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/favicon.png"
            alt="Ewaffle"
            width={32}
            height={32}
            className="h-8 w-8 shrink-0"
          />
          <span className="text-xl font-bold text-white">Ewaffle.com</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-300 transition-colors hover:text-white"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/book-a-call"
            data-track-event="cta_click"
            data-track-category="header"
            data-track-label="agendar_discovery_header"
            className="rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-accent-hover"
          >
            Agendar discovery
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="flex flex-col gap-1.5 md:hidden"
          aria-label="Abrir menu"
        >
          <span
            className={`h-0.5 w-6 bg-white transition-transform ${mobileOpen ? "translate-y-2 rotate-45" : ""}`}
          />
          <span
            className={`h-0.5 w-6 bg-white transition-opacity ${mobileOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`h-0.5 w-6 bg-white transition-transform ${mobileOpen ? "-translate-y-2 -rotate-45" : ""}`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <nav className="border-t border-white/10 bg-navy-950 px-6 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-sm font-medium text-slate-300 transition-colors hover:text-white"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/book-a-call"
              onClick={() => setMobileOpen(false)}
              data-track-event="cta_click"
              data-track-category="header"
              data-track-label="agendar_discovery_mobile"
              className="mt-2 rounded-lg bg-accent px-5 py-2.5 text-center text-sm font-semibold text-white transition-colors hover:bg-accent-hover"
            >
              Agendar discovery
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}

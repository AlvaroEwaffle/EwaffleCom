"use client";

import Link from "next/link";
import { useState } from "react";

/* El header pasa al sistema del studio: suelo #0a0812 en vez de navy, la
   tipografía mono para el nav —la misma capa técnica del resto del sitio— y el
   ámbar para el CTA, que es el color con el que la home marca lo accionable.
   Las etiquetas también cambian: "Services" describía un menú de herramientas y
   "Case Studies" un PDF de agencia. Las URLs se mantienen porque están
   indexadas y enlazadas desde fuera. */
const navLinks = [
  { href: "/services", label: "Qué hacemos" },
  { href: "/case-studies", label: "Trabajos" },
  { href: "/pricing", label: "Precios" },
  { href: "/about", label: "Nosotros" },
  { href: "/blog", label: "Notas" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[rgba(10,8,18,0.82)] backdrop-blur-md">
      <div className="mx-auto flex max-w-[1340px] items-center justify-between px-5 py-3.5 sm:px-10 lg:px-14">
        <Link href="/" className="flex items-center gap-2.5">
          <img src="/icon.png" alt="" className="h-7 w-7" />
          <span className="flex flex-col leading-none">
            <span className="text-[17px] font-extrabold tracking-[-0.03em] text-[var(--tiza)]">
              Ewaffle
            </span>
            <span className="mono mt-1 text-[8.5px] text-[var(--niebla)]">
              Experiencias de aprendizaje
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[14.5px] font-medium text-[var(--niebla)] transition-colors hover:text-[var(--tiza)]"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/book-a-call"
            className="rounded-full bg-[var(--rosa)] px-5 py-2.5 text-[14px] font-bold text-white transition-transform hover:-translate-y-0.5"
          >
            Agenda 45 minutos
          </Link>
        </nav>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="flex flex-col gap-1.5 md:hidden"
          aria-label="Abrir menú"
          aria-expanded={mobileOpen}
        >
          <span
            className={`h-0.5 w-6 bg-[var(--tiza)] transition-transform ${mobileOpen ? "translate-y-2 rotate-45" : ""}`}
          />
          <span
            className={`h-0.5 w-6 bg-[var(--tiza)] transition-opacity ${mobileOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`h-0.5 w-6 bg-[var(--tiza)] transition-transform ${mobileOpen ? "-translate-y-2 -rotate-45" : ""}`}
          />
        </button>
      </div>

      {mobileOpen && (
        <nav className="border-t border-white/10 bg-[var(--sala)] px-5 py-5 sm:px-10 md:hidden">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-[15px] font-medium text-[var(--niebla)] transition-colors hover:text-[var(--tiza)]"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/book-a-call"
              onClick={() => setMobileOpen(false)}
              className="mt-2 rounded-full bg-[var(--rosa)] px-5 py-3 text-center text-[14.5px] font-bold text-white"
            >
              Agenda 45 minutos
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}

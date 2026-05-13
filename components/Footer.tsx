import Link from "next/link";
import { CONTACT_EMAIL } from "@/lib/contact";

const footerSections = [
  {
      title: "Empresa",
      links: [
      { href: "/about", label: "Sobre Ewaffle" },
      { href: "/blog", label: "Blog" },
      { href: `mailto:${CONTACT_EMAIL}`, label: "Contacto" },
    ],
  },
  {
    title: "Servicios",
    links: [
      { href: "/services", label: "LMS a medida" },
      { href: "/services", label: "Onboarding masivo" },
      { href: "/services", label: "Alertas tempranas" },
      { href: "/services", label: "WhatsApp learning" },
    ],
  },
  {
      title: "Recursos",
    links: [
      { href: "/case-studies", label: "Casos" },
      { href: "/pricing", label: "Modelo comercial" },
      { href: "/book-a-call", label: "Agendar discovery" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-navy-950">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-4">
          {/* Brand column */}
          <div>
            <Link href="/" className="flex items-center gap-2">
              <img src="/icon.svg" alt="Ewaffle" className="h-8 w-8" />
              <span className="text-xl font-bold text-white">Ewaffle.com</span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-slate-400">
              LMS a medida para empresas grandes con primera línea,
              onboarding masivo y capacitación trazable.
            </p>
            <p className="mt-4 text-sm text-slate-500">
              Submarca de Ewaffle, construida desde Chile para LATAM.
            </p>
          </div>

          {/* Link columns */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-300">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-slate-400 transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 md:flex-row">
          <p className="text-sm text-slate-500">
            &copy; {new Date().getFullYear()} Ewaffle. Todos los derechos
            reservados.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="https://www.linkedin.com/company/ewaffle"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-slate-400 transition-colors hover:text-white"
            >
              LinkedIn
            </a>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="text-sm text-slate-400 transition-colors hover:text-white"
            >
              {CONTACT_EMAIL}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

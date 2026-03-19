import Link from "next/link";

const footerSections = [
  {
    title: "Company",
    links: [
      { href: "/about", label: "About" },
      { href: "/blog", label: "Blog" },
      { href: "mailto:hello@ewaffle.com", label: "Contact" },
    ],
  },
  {
    title: "Services",
    links: [
      { href: "/services", label: "Course Production" },
      { href: "/services", label: "Gamification" },
      { href: "/services", label: "AI Design" },
      { href: "/services", label: "LMS" },
    ],
  },
  {
    title: "Resources",
    links: [
      { href: "/case-studies", label: "Case Studies" },
      { href: "/pricing", label: "Pricing" },
      { href: "/book-a-call", label: "Book a Call" },
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
              <img src="/favicon.png" alt="Ewaffle" className="h-8 w-8" />
              <span className="text-xl font-bold text-white">Ewaffle</span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-slate-400">
              Gamified course production powered by AI. Built for training
              companies that demand results.
            </p>
            <p className="mt-4 text-sm text-slate-500">
              Based in Latin America. Serving the world.
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
            &copy; {new Date().getFullYear()} Ewaffle. All rights reserved.
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
              href="mailto:hello@ewaffle.com"
              className="text-sm text-slate-400 transition-colors hover:text-white"
            >
              hello@ewaffle.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

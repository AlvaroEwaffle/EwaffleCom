import Link from "next/link";
import { CONTACT_EMAIL } from "@/lib/contact";

/* La columna "Services" apuntaba cuatro veces a /services con etiquetas
   distintas —Experience Design, Simulation & Games, AI-built Learning, LMS
   Included— que parecían páginas y no lo eran. Se reemplaza por las piezas
   públicas: enlaces que abren algo real, que es el argumento de todo el sitio. */
const columnas = [
  {
    t: "El estudio",
    links: [
      { href: "/services", label: "Qué hacemos" },
      { href: "/case-studies", label: "Trabajos" },
      { href: "/pricing", label: "Precios" },
      { href: "/about", label: "Quiénes somos" },
    ],
  },
  {
    t: "Ábrelas y pruébalas",
    links: [
      { href: "https://ewaffle.cl/demos/los-heroes-decidir-mas-cerca", label: "Narrativa ramificada", fuera: true },
      { href: "https://ewaffle.cl/demos/juegos-demo", label: "Mecánicas de juego", fuera: true },
      { href: "https://ewaffle.cl/demos/buffalo-induccion", label: "Guía interactiva", fuera: true },
      { href: "https://ewaffle.cl/demos/lms-sim", label: "SCORM, verificado", fuera: true },
    ],
  },
  {
    t: "Hablemos",
    links: [
      { href: "/book-a-call", label: "Agenda 45 minutos" },
      { href: "/blog", label: "Notas del Lab" },
      { href: `mailto:${CONTACT_EMAIL}`, label: CONTACT_EMAIL },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[var(--sala)]">
      <div className="mx-auto max-w-[1340px] px-5 py-16 sm:px-10 lg:px-14">
        <div className="grid gap-12 md:grid-cols-4">
          <div>
            <Link href="/" className="flex items-center gap-2.5">
              <img src="/icon.png" alt="" className="h-7 w-7" />
              <span className="text-[17px] font-extrabold tracking-[-0.03em] text-[var(--tiza)]">
                Ewaffle
              </span>
            </Link>
            <p className="mono mt-4 text-[10px] leading-[2] text-[var(--haz)]">
              Experiencias
              <br />
              de
              <br />
              aprendizaje
            </p>
            <p className="mt-5 max-w-[34ch] text-[14.5px] leading-relaxed text-[var(--niebla)]">
              Diseñamos y construimos la experiencia completa, y te la entregamos funcionando —
              en tu LMS o en el nuestro.
            </p>
            <p className="mono mt-5 text-[10px] text-[var(--niebla)]">
              Chile · ES · EN · PT-BR
            </p>
          </div>

          {columnas.map((c) => (
            <div key={c.t}>
              <h2 className="mono text-[10.5px] text-[var(--niebla)]">{c.t}</h2>
              <ul className="mt-5 space-y-3">
                {c.links.map((l) => (
                  <li key={l.label}>
                    {"fuera" in l && l.fuera ? (
                      <a
                        href={l.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-[14.5px] text-[var(--niebla)] transition-colors hover:text-[var(--tiza)]"
                      >
                        {l.label}
                        <span aria-hidden="true" className="text-[11px] opacity-60">
                          ↗
                        </span>
                      </a>
                    ) : (
                      <Link
                        href={l.href}
                        className="text-[14.5px] text-[var(--niebla)] transition-colors hover:text-[var(--tiza)]"
                      >
                        {l.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-8 md:flex-row md:items-center">
          <p className="mono text-[10px] text-[var(--niebla)]">
            © {new Date().getFullYear()} Ewaffle
          </p>
          <div className="flex items-center gap-6">
            <a
              href="https://www.linkedin.com/company/ewaffle"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[14px] text-[var(--niebla)] transition-colors hover:text-[var(--tiza)]"
            >
              LinkedIn
            </a>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="text-[14px] text-[var(--niebla)] transition-colors hover:text-[var(--tiza)]"
            >
              {CONTACT_EMAIL}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

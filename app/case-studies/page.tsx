import type { Metadata } from "next";
import CTASection from "@/components/CTASection";
import CaseStudyVisualMockup from "@/components/CaseStudyVisualMockup";

export const metadata: Metadata = {
  title: "Casos",
  description:
    "Casos de uso de Ewaffle.com para LMS a medida, onboarding masivo y capacitacion trazable.",
};

const caseStudies = [
  {
    category: "Educacion escolar",
    metric: "LMS activo para acompañar rutas de aprendizaje escolar",
    company: "Colegios SIP",
    description:
      "Una plataforma ya configurada permite mostrar usuarios, cursos, avance y soporte de adopcion en un contexto real. Es una base concreta para demostrar como Ewaffle.com acompaña programas con seguimiento continuo.",
    highlights: [
      "Plataforma LMS activa",
      "Demo basada en contexto real",
      "Seguimiento de cohortes y avance",
      "Evidencia util para nuevas propuestas",
    ],
    visual: "sip" as const,
    color: "border-accent",
    accent: "text-accent",
    bg: "bg-accent/10",
  },
  {
    category: "Primera linea",
    metric: "Piloto de onboarding mobile para equipos en terreno",
    company: "Buffalo Waffles",
    description:
      "El caso Buffalo es ideal para mostrar un flujo de bienvenida simple: capsulas breves, checklist por rol, activacion por WhatsApp y una vista para que el supervisor sepa quien avanzo.",
    highlights: [
      "Demo personalizada para primer turno",
      "Capsulas cortas mobile-first",
      "WhatsApp como hilo de activacion",
      "Vista de avance para supervisor",
    ],
    visual: "buffalo" as const,
    color: "border-gold",
    accent: "text-gold",
    bg: "bg-gold/10",
  },
  {
    category: "Capacitacion masiva",
    metric: "Propuesta para trazabilidad ejecutiva y certificacion",
    company: "AIEP / empresas grandes",
    description:
      "Para organizaciones grandes, el valor esta en conectar contenido, avance y decisiones. La plataforma debe mostrar rutas, certificacion, cohortes y señales accionables para responsables ejecutivos y equipos de implementacion.",
    highlights: [
      "Capacitacion masiva trazable",
      "Dashboard para decision ejecutiva",
      "Señales de seguimiento por cohorte",
      "Alcance listo para propuesta",
    ],
    visual: "aiep" as const,
    color: "border-yellow-400",
    accent: "text-yellow-400",
    bg: "bg-yellow-400/10",
  },
];

export default function CaseStudiesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-navy-900 to-navy-950 py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h1 className="text-4xl font-extrabold text-white md:text-5xl">
            Casos de uso para activar aprendizaje en terreno
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-300">
            Tres contextos concretos para mostrar como una plataforma LMS a
            medida puede activar usuarios, medir avance y abrir conversaciones
            comerciales con una demo cercana al negocio del cliente.
          </p>
        </div>
      </section>

      {/* Casos */}
      <section className="bg-navy-950 py-24">
        <div className="mx-auto max-w-6xl space-y-12 px-6">
          {caseStudies.map((cs, index) => (
            <article
              key={cs.company}
              className={`rounded-2xl border-l-4 ${cs.color} bg-navy-900 p-6 md:p-8`}
            >
              <div
                className={`grid gap-8 lg:grid-cols-[0.94fr_1.06fr] lg:items-center ${
                  index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                <div>
                  <div className="flex flex-wrap items-center gap-4">
                    <span
                      className={`rounded-full ${cs.bg} px-4 py-1.5 text-xs font-semibold ${cs.accent}`}
                    >
                      {cs.category}
                    </span>
                    <span className="text-sm text-slate-500">
                      {cs.company}
                    </span>
                  </div>
                  <h2 className="mt-6 text-2xl font-bold text-white md:text-3xl">
                    {cs.metric}
                  </h2>
                  <p className="mt-4 text-sm leading-relaxed text-slate-400 md:text-base">
                    {cs.description}
                  </p>
                  <div className="mt-8">
                    <h4
                      className={`text-xs font-semibold uppercase tracking-wider ${cs.accent}`}
                    >
                      Señales clave
                    </h4>
                    <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                      {cs.highlights.map((h) => (
                        <li
                          key={h}
                          className="flex items-start gap-3 text-sm text-slate-300"
                        >
                          <svg
                            className={`mt-0.5 h-4 w-4 shrink-0 ${cs.accent}`}
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="m4.5 12.75 6 6 9-13.5"
                            />
                          </svg>
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <CaseStudyVisualMockup variant={cs.visual} />
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Mostremos tu caso funcionando"
        description="En 30 minutos entendemos la necesidad, el responsable ejecutivo, el presupuesto y la demo que podria abrir una propuesta."
      />
    </>
  );
}

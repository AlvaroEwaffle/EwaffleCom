import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Modelo Comercial",
  description:
    "Planes Ewaffle.com: Starter, Standard y Enterprise. Implementation fee por proyecto + mensualidad por usuarios activos. Usuarios ilimitados en todos los planes.",
};

const PROMO_DEADLINE = "7 de junio de 2026";

type Tier = {
  name: string;
  implementation: string;
  implementationNote?: string;
  desc: string;
  features: string[];
  cta: string;
  ctaHref: string;
  featured?: boolean;
  contactOnly?: boolean;
};

const tiers: Tier[] = [
  {
    name: "Starter",
    implementation: "Desde USD 1.2K — USD 2.4K",
    implementationNote: "Promo lanzamiento · hasta " + PROMO_DEADLINE,
    desc: "Para validar un caso de uso acotado con una primera cohorte y un canal único.",
    features: [
      "Discovery + sistema de diseño branded",
      "LMS branded con usuarios y avance",
      "Canal único: email",
      "Dashboard básico",
      "Usuarios ilimitados (mensualidad por activos)",
      "Handover y soporte inicial",
    ],
    cta: "Agendar discovery",
    ctaHref: "/book-a-call",
  },
  {
    name: "Standard",
    implementation: "Desde USD 2.7K — USD 5.4K",
    implementationNote: "Promo lanzamiento · hasta " + PROMO_DEADLINE,
    desc: "El paquete base para empresas con onboarding, compliance o capacitación masiva — multicanal y con modelo de intervención activa.",
    features: [
      "Todo lo del plan Starter",
      "SSO o integración liviana con sistemas existentes",
      "Multicanal: WhatsApp Business + email",
      "Multi-rol: admin, supervisor, colaborador, viewer",
      "Modelo de alertas tempranas",
      "Automatizaciones (flujos, recordatorios, escalamientos)",
      "Playbooks de intervención por etapa",
      "Dashboard ejecutivo + reporte semanal automático",
      "30% de descuento en producción de cursos e-learning estándar Ewaffle",
      "Soporte y ajustes continuos",
    ],
    cta: "Agendar discovery",
    ctaHref: "/book-a-call",
    featured: true,
  },
  {
    name: "Enterprise",
    implementation: "Contact us",
    desc: "Solución a medida para organizaciones con integraciones críticas, múltiples cohortes y necesidades específicas que no caben en un pack predefinido.",
    features: [
      "Plataforma a medida sobre la base Ewaffle.com",
      "Integraciones avanzadas con sistemas core (ERP, HRIS, SAP, LMS)",
      "Multi-canal completo + canales custom",
      "Modelo de alertas predictivas avanzadas",
      "Reportería custom por rol y por unidad de negocio",
      "Capacitación al equipo cliente + transferencia de conocimiento",
      "Account manager dedicado",
      "Soporte prioritario con SLA",
      "Capacidades AI/ML a medida",
    ],
    cta: "Hablar con ventas",
    ctaHref: "/book-a-call",
    contactOnly: true,
  },
];

const activeUserTiers = [
  { range: "Hasta 500 usuarios activos/mes", price: "USD 200/mes" },
  { range: "501 a 2,500 usuarios activos/mes", price: "USD 500/mes" },
  { range: "2,501 a 10,000 usuarios activos/mes", price: "USD 1,200/mes" },
  { range: "10,001 a 30,000 usuarios activos/mes", price: "USD 2,500/mes" },
  { range: "30,001 a 50,000 usuarios activos/mes", price: "USD 4,000/mes" },
  { range: "50,000+ usuarios activos/mes", price: "Contact us" },
];

const rules = [
  "50% upfront antes de kickoff y 50% al go-live (planes Starter y Standard).",
  "Mensualidad aplica desde el go-live, en base a usuarios activos del mes.",
  "Se negocia alcance antes que precio.",
  "Los pilotos se proponen con alcance, responsable ejecutivo y criterio de continuidad.",
  "Cada propuesta incluye alcance, timeline, criterios de salida y owner cliente.",
];

export default function PricingPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-navy-900 to-navy-950 py-20 text-white">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-sky-300">
            Modelo comercial
          </p>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight md:text-6xl">
            Implementation fee por proyecto. Mensualidad por usuarios activos.
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Cada propuesta tiene dos componentes claros: un implementation fee
            para construir, configurar y lanzar; y una mensualidad de operación
            que escala solo con los usuarios que efectivamente acceden a la
            plataforma. Usuarios ilimitados en todos los planes.
          </p>
        </div>
      </section>

      <section className="bg-navy-950 py-20 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-center text-sm font-bold uppercase tracking-[0.18em] text-sky-300">
            Implementation fee · por proyecto
          </p>
          <h2 className="mx-auto mt-3 max-w-3xl text-center text-3xl font-extrabold tracking-tight md:text-4xl">
            Tres formas de entrar — desde un piloto acotado hasta una solución a medida
          </h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {tiers.map((tier) => (
              <article
                key={tier.name}
                className={`flex flex-col rounded-2xl border p-7 ${
                  tier.featured
                    ? "border-accent/50 bg-accent/10 shadow-xl shadow-accent/10"
                    : "border-white/10 bg-navy-900"
                }`}
              >
                {tier.featured && (
                  <div className="mb-4 inline-flex w-fit rounded-full bg-accent px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] text-white">
                    Recomendado
                  </div>
                )}
                <h3 className="text-2xl font-extrabold">{tier.name}</h3>
                <div className="mt-6 rounded-xl border border-white/10 bg-navy-950/80 p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                    Implementation fee
                  </p>
                  <div
                    className={`mt-2 font-extrabold ${
                      tier.contactOnly ? "text-2xl" : "text-2xl md:text-[1.65rem]"
                    }`}
                  >
                    {tier.implementation}
                  </div>
                  {tier.implementationNote && (
                    <p className="mt-2 text-xs font-semibold uppercase tracking-[0.14em] text-accent">
                      {tier.implementationNote}
                    </p>
                  )}
                  <p className="mt-2 text-xs text-slate-400">
                    Pago único por build, configuración y go-live.
                  </p>
                </div>
                <p className="mt-5 min-h-24 text-base leading-7 text-slate-400">
                  {tier.desc}
                </p>
                <ul className="mt-6 space-y-3 text-sm leading-6 text-slate-300">
                  {tier.features.map((feature) => (
                    <li key={feature} className="border-t border-white/10 pt-3">
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  href={tier.ctaHref}
                  className={`mt-8 block rounded-lg px-5 py-3 text-center text-sm font-bold transition focus:outline-none focus:ring-4 ${
                    tier.featured
                      ? "bg-accent text-white hover:bg-accent-hover focus:ring-accent/30"
                      : "border border-white/15 bg-white/[0.04] text-white hover:bg-white/[0.08] focus:ring-white/20"
                  }`}
                >
                  {tier.cta}
                </Link>
              </article>
            ))}
          </div>
          <div className="mt-12 rounded-2xl border border-emerald-400/30 bg-emerald-400/5 p-6 text-center">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-emerald-300">
              Multicanal en acción
            </p>
            <p className="mx-auto mt-2 max-w-2xl text-base text-slate-200">
              Vive en tu propio WhatsApp el motor que entregamos en Standard y
              Enterprise. 5 cápsulas reply-driven · 5 minutos · sin instalar nada.
            </p>
            <Link
              href="/demos/whatsapp-learning"
              className="mt-5 inline-flex items-center gap-2 rounded-lg bg-emerald-500 px-6 py-3 text-sm font-bold text-navy-950 transition hover:bg-emerald-400 focus:outline-none focus:ring-4 focus:ring-emerald-300/40"
            >
              Probar demo WhatsApp learning →
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-slate-950 py-20 text-white">
        <div className="mx-auto max-w-5xl px-6">
          <p className="text-center text-sm font-bold uppercase tracking-[0.18em] text-sky-300">
            Mensualidad · por usuarios activos
          </p>
          <h2 className="mx-auto mt-3 max-w-3xl text-center text-3xl font-extrabold tracking-tight md:text-4xl">
            Pagas solo por los usuarios que efectivamente acceden a la plataforma
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-center text-base leading-7 text-slate-300">
            Aplica a todos los planes (Starter, Standard y Enterprise). El tier
            se ajusta automáticamente cada mes según el volumen real de
            usuarios activos. Sin cargos por usuarios inactivos.
          </p>
          <div className="mt-10 overflow-hidden rounded-2xl border border-white/10">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="bg-white/[0.04] text-xs font-bold uppercase tracking-[0.14em] text-slate-400">
                  <th className="px-6 py-4">Usuarios activos por mes</th>
                  <th className="px-6 py-4 text-right">Mensualidad</th>
                </tr>
              </thead>
              <tbody>
                {activeUserTiers.map((row, idx) => (
                  <tr
                    key={row.range}
                    className={`border-t border-white/10 ${
                      idx % 2 === 0 ? "bg-navy-950/40" : "bg-navy-950/20"
                    }`}
                  >
                    <td className="px-6 py-4 text-slate-200">{row.range}</td>
                    <td className="px-6 py-4 text-right font-bold text-gold">
                      {row.price}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mx-auto mt-6 max-w-3xl text-center text-xs text-slate-500">
            Se considera usuario activo al que ingresa al menos una vez a la
            plataforma durante el mes facturado. Hosting, soporte técnico,
            actualizaciones y mejora continua incluidos.
          </p>
        </div>
      </section>

      <section className="bg-slate-950 py-20 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-sky-300">
              Reglas comerciales
            </p>
            <h2 className="mt-4 text-4xl font-extrabold tracking-tight">
              Claridad comercial antes de comprometer delivery.
            </h2>
          </div>
          <div className="grid gap-4">
            {rules.map((rule) => (
              <div
                key={rule}
                className="rounded-xl border border-white/10 bg-white/[0.04] p-5 text-base leading-7 text-slate-200"
              >
                {rule}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy-900 py-20 text-white">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-4xl font-extrabold tracking-tight">
            La primera conversación no es para vender. Es para calificar.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-300">
            Si la necesidad, el presupuesto o el responsable no están claros,
            preferimos ordenarlo temprano antes de avanzar a propuesta.
          </p>
          <Link
            href="/book-a-call"
            className="mt-8 inline-flex rounded-lg bg-accent px-7 py-4 text-sm font-bold text-white transition hover:bg-accent-hover focus:outline-none focus:ring-4 focus:ring-accent/30"
          >
            Agendar discovery
          </Link>
        </div>
      </section>
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Modelo Comercial",
  description:
    "Modelo comercial de Ewaffle.com para plataformas LMS a medida: setup, mensualidad, discovery y piloto.",
};

const tiers = [
  {
    name: "Starter",
    implementation: "USD 45K",
    monthly: "USD 1.8K",
    desc: "Para validar un caso de uso acotado con una unidad, un canal y una cohorte inicial.",
    features: [
      "Discovery + sistema de diseño branded",
      "1 unidad o flujo principal",
      "LMS branded con usuarios y avance",
      "Canal activo: WhatsApp o email",
      "Dashboard basico",
      "Handover y soporte inicial",
    ],
  },
  {
    name: "Standard",
    implementation: "USD 70K",
    monthly: "USD 2.8K",
    desc: "El paquete base para empresas con onboarding, compliance o capacitación masiva.",
    features: [
      "3 unidades iniciales",
      "SSO o integracion liviana",
      "WhatsApp Business + email",
      "Playbooks de intervención",
      "Dashboard ejecutivo",
      "Reporte semanal automatico",
      "Soporte y ajustes continuos",
    ],
    featured: true,
  },
  {
    name: "Premium",
    implementation: "USD 110K",
    monthly: "USD 4.5K",
    desc: "Para organizaciones con varias cohortes, mayor volumen o necesidad de alertas tempranas.",
    features: [
      "6+ unidades o rutas",
      "Modelo de alertas tempranas",
      "Integraciones adicionales",
      "Multi-canal completo",
      "Reporteria por rol",
      "Capacitacion equipo cliente",
      "Soporte prioritario",
    ],
  },
];

const rules = [
  "50% upfront antes de kickoff y 50% al go-live.",
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
            Implementation fee una vez. Mensualidad para operar.
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Cada propuesta tiene dos componentes visibles: un implementation
            fee para construir, configurar y lanzar; y una mensualidad para
            soporte, hosting, reportería, canales y mejora continua.
          </p>
        </div>
      </section>

      <section className="bg-navy-950 py-20 text-white">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 md:grid-cols-3">
          {tiers.map((tier) => (
            <article
              key={tier.name}
              className={`rounded-2xl border p-7 ${
                tier.featured
                  ? "border-accent/50 bg-accent/10 shadow-xl shadow-accent/10"
                  : "border-white/10 bg-navy-900"
              }`}
            >
              {tier.featured && (
                <div className="mb-4 inline-flex rounded-full bg-accent px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] text-white">
                  Recomendado
                </div>
              )}
              <h2 className="text-2xl font-extrabold">{tier.name}</h2>
              <div className="mt-6 grid gap-3">
                <div className="rounded-xl border border-white/10 bg-navy-950/80 p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                    Implementation fee
                  </p>
                  <div className="mt-2 text-3xl font-extrabold">
                    {tier.implementation}
                  </div>
                  <p className="mt-1 text-xs text-slate-400">
                    Pago unico por build, configuracion y go-live.
                  </p>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/[0.04] p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                    Mensualidad
                  </p>
                  <div className="mt-2 text-3xl font-extrabold text-gold">
                    {tier.monthly}
                    <span className="text-base font-bold text-slate-400">
                      {" "}
                      / mes
                    </span>
                  </div>
                  <p className="mt-1 text-xs text-slate-400">
                    Operacion, soporte, hosting y mejora continua.
                  </p>
                </div>
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
                href="/book-a-call"
                className={`mt-8 block rounded-lg px-5 py-3 text-center text-sm font-bold transition focus:outline-none focus:ring-4 ${
                  tier.featured
                    ? "bg-accent text-white hover:bg-accent-hover focus:ring-accent/30"
                    : "border border-white/15 bg-white/[0.04] text-white hover:bg-white/[0.08] focus:ring-white/20"
                }`}
              >
                Agendar discovery
              </Link>
            </article>
          ))}
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
            La primera conversacion no es para vender. Es para calificar.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-300">
            Si la necesidad, el presupuesto o el responsable no estan claros,
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

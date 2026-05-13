import type { Metadata } from "next";
import Link from "next/link";
import HeroDemoMockup from "@/components/HeroDemoMockup";
import LeadCaptureForm from "@/components/LeadCaptureForm";
import MotionReveal from "@/components/MotionReveal";

export const metadata: Metadata = {
  title: "Ewaffle.com",
  description:
    "Onboarding gamificado y LMS a medida para empresas con equipos grandes, distribuidos o con alta rotación.",
  openGraph: {
    title: "Ewaffle.com",
    description:
      "Onboarding gamificado y LMS a medida para empresas con equipos grandes, distribuidos o con alta rotación.",
    url: "https://e-waffle.com",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ewaffle.com",
    description:
      "Onboarding gamificado y LMS a medida para empresas con equipos grandes, distribuidos o con alta rotación.",
  },
};

const clients = ["ACHS", "AIEP", "Duoc UC", "SIP", "LATAM", "UGM"];

const priorities = [
  {
    title: "Alta rotación",
    body: "Onboarding y capacitación para equipos que cambian seguido y necesitan llegar a productividad rápido: tiendas, planta, reparto, cocina o terreno.",
  },
  {
    title: "Churn de adopción",
    body: "Usuarios que entran una vez, no vuelven o se quedan a medias. Detectamos señales blandas antes de que se transforme en abandono.",
  },
  {
    title: "Seguimiento que actua",
    body: "WhatsApp, email y alertas tempranas para empujar avance, recuperar rezagados y cerrar brechas de completitud.",
  },
];

const hotUseCases = [
  {
    label: "Colegios SIP",
    title: "LMS ya instanciado",
    body: "Base real para demostrar plataforma viva, usuarios, cursos, seguimiento y soporte de adopción.",
  },
  {
    label: "Buffalo Waffles",
    title: "Piloto de onboarding",
    body: "Demo mobile para primer turno, checklist por rol, activación por WhatsApp y vista de avance para supervisión.",
  },
  {
    label: "AIEP / empresas grandes",
    title: "Capacitación masiva trazable",
    body: "Casos donde completion, permanencia, certificación y reportería ejecutiva importan en serio.",
  },
];

const method = [
  {
    step: "01",
    title: "Reunion de descubrimiento",
    body: "Entendemos la necesidad, quién decide, cuál es el sistema actual y qué resultado necesita el responsable ejecutivo.",
  },
  {
    step: "02",
    title: "Demo visual gratis si hay match",
    body: "Si el caso calza, armamos una demo visual acotada con tu marca, tu flujo y una experiencia cercana al usuario final.",
  },
  {
    step: "03",
    title: "Build en 8-10 semanas",
    body: "Plataforma, cápsulas iniciales, canales, dashboard y handover. 50% upfront, 50% al go-live.",
  },
];

const stack = [
  "LMS a medida y branded",
  "SSO, usuarios y cohortes",
  "WhatsApp Business + email",
  "SCORM/xAPI cuando aplica",
  "Dashboard ejecutivo",
  "Alertas tempranas",
  "Reportería semanal",
  "Playbooks de intervención",
];

export default function Home() {
  return (
    <>
      <section
        className="relative overflow-hidden bg-navy-950 text-white"
      >
        <div className="absolute inset-x-0 top-0 h-px bg-white/10" />
        <div className="mx-auto grid min-h-[calc(100svh-65px)] max-w-7xl gap-8 px-6 pb-16 pt-10 md:gap-10 md:pb-20 md:pt-12 lg:h-[calc(100vh-73px)] lg:max-h-[840px] lg:min-h-[640px] lg:grid-cols-[1.02fr_0.98fr] lg:items-center lg:overflow-hidden lg:pb-24">
          <MotionReveal>
            <div className="inline-flex rounded-full border border-sky-300/20 bg-sky-300/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-sky-200">
              Ewaffle.com · Tecnologia aplicada
            </div>
            <h1 className="mt-5 max-w-4xl text-3xl font-extrabold leading-[1.04] tracking-tight text-white md:text-5xl xl:text-6xl">
              Onboarding gamificado para equipos distribuidos.
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-7 text-slate-300 md:mt-5 md:text-xl md:leading-8">
              Plataformas AI-native para primera línea y alta rotación.
              Activan usuarios, reducen abandono y aceleran productividad.
            </p>
            <div className="mt-7 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/book-a-call"
                data-track-event="cta_click"
                data-track-category="hero"
                data-track-label="agendar_discovery_hero"
                className="rounded-lg bg-accent px-7 py-4 text-center text-sm font-bold text-white shadow-lg shadow-accent/20 transition hover:bg-accent-hover focus:outline-none focus:ring-4 focus:ring-accent/30"
              >
                Agendar discovery
              </Link>
              <Link
                href="/case-studies"
                data-track-event="cta_click"
                data-track-category="hero"
                data-track-label="ver_pruebas_y_casos"
                className="rounded-lg border border-white/15 bg-white/[0.04] px-7 py-4 text-center text-sm font-bold text-white transition hover:border-white/30 hover:bg-white/[0.08] focus:outline-none focus:ring-4 focus:ring-white/20"
              >
                Ver pruebas y casos
              </Link>
              <Link
                href="#contact"
                data-track-event="cta_click"
                data-track-category="hero"
                data-track-label="dejar_datos_hero"
                className="rounded-lg border border-sky-300/25 bg-sky-300/10 px-7 py-4 text-center text-sm font-bold text-sky-100 transition hover:border-sky-300/40 hover:bg-sky-300/15 focus:outline-none focus:ring-4 focus:ring-sky-300/20"
              >
                Dejar datos
              </Link>
            </div>
            <div className="mt-8 hidden sm:block">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 md:text-slate-400">
                Clientes con los que hoy trabajamos
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                {clients.map((client) => (
                  <span
                    key={client}
                    className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-semibold text-slate-200"
                  >
                    {client}
                  </span>
                ))}
              </div>
            </div>
            <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-sm font-semibold text-emerald-200">
              <span className="inline-block h-2.5 w-2.5 rounded-full bg-emerald-300" />
              Conexión vía WhatsApp para activación y seguimiento.
            </div>
          </MotionReveal>

          <MotionReveal delay={0.1}>
            <HeroDemoMockup />
          </MotionReveal>
        </div>
      </section>

      <section className="bg-navy-950 py-8 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <div
            className="rounded-2xl border border-accent/25 bg-navy-900 p-6 md:p-8"
            style={{
              backgroundImage:
                "linear-gradient(90deg, rgba(15,22,41,0.92), rgba(15,22,41,0.72)), url('/assets/CourseBg.png')",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          >
            <div className="grid gap-6 md:grid-cols-[1fr_0.65fr] md:items-center">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-accent">
                  Garantia de demo
                </p>
                <h2 className="mt-3 text-3xl font-extrabold tracking-tight md:text-4xl">
                  Reunion de descubrimiento. Si hay match, demo visual gratis.
                </h2>
                <p className="mt-4 max-w-2xl text-base leading-7 text-slate-300">
                  Antes de hablar de un build completo, bajamos la idea a una
                  experiencia visual acotada para que el cliente vea su caso con
                  marca, flujo y resultado esperado.
                </p>
              </div>
              <Link
                href="/book-a-call"
                data-track-event="cta_click"
                data-track-category="demo_guarantee"
                data-track-label="agendar_reunion"
                className="rounded-lg bg-accent px-7 py-4 text-center text-sm font-bold text-white shadow-lg shadow-accent/20 transition hover:bg-accent-hover focus:outline-none focus:ring-4 focus:ring-accent/30"
              >
                Agendar reunion
              </Link>
              <Link
                href="#contact"
                data-track-event="cta_click"
                data-track-category="demo_guarantee"
                data-track-label="dejar_datos"
                className="rounded-lg border border-white/15 bg-white/[0.04] px-7 py-4 text-center text-sm font-bold text-white transition hover:border-white/30 hover:bg-white/[0.08] focus:outline-none focus:ring-4 focus:ring-white/20"
              >
                Dejar datos primero
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-navy-950 py-20 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-sky-300">
              Los dolores reales
            </p>
            <h2 className="mt-4 text-4xl font-extrabold tracking-tight md:text-5xl">
              La rotación, el abandono y la baja adopción cuestan más que el
              contenido.
            </h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {priorities.map((item, index) => (
              <MotionReveal key={item.title} delay={index * 0.05}>
                <article className="h-full rounded-2xl border border-white/10 bg-navy-900 p-7 transition hover:border-accent/40">
                  <h3 className="text-xl font-bold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-base leading-7 text-slate-400">
                    {item.body}
                  </p>
                </article>
              </MotionReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-950 py-20 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-sky-300">
              Oportunidades activas
            </p>
            <h2 className="mt-4 text-4xl font-extrabold tracking-tight md:text-5xl">
                Partimos desde oportunidades reales, no desde teoría.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-300">
              Ewaffle.com prioriza conversaciones con potencial real de
              compra. El sistema de venta existe para convertir casos vivos
              en demos, demos en propuestas y propuestas en continuidad.
              </p>
            </div>
            <div className="grid gap-5">
              {hotUseCases.map((item) => (
                <article
                  key={item.label}
                  className="rounded-2xl border-l-4 border-accent bg-navy-900 p-6 transition hover:bg-navy-800/70"
                >
                  <div className="text-sm font-bold uppercase tracking-[0.16em] text-orange-300">
                    {item.label}
                  </div>
                  <h3 className="mt-2 text-2xl font-bold">{item.title}</h3>
                  <p className="mt-3 text-base leading-7 text-slate-300">
                    {item.body}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-navy-900 py-20 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-gold">
              Como trabajamos
            </p>
            <h2 className="mt-4 text-4xl font-extrabold tracking-tight md:text-5xl">
              Demo primero. Propuesta después. Build con alcance cerrado.
            </h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {method.map((item) => (
              <article
                key={item.step}
                className="rounded-2xl border border-white/10 bg-navy-950 p-7"
              >
                <div className="text-sm font-extrabold text-accent">
                  {item.step}
                </div>
                <h3 className="mt-4 text-xl font-bold">{item.title}</h3>
                <p className="mt-3 text-base leading-7 text-slate-400">
                  {item.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy-950 py-20 text-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-sky-300">
              Plataforma
            </p>
            <h2 className="mt-4 text-4xl font-extrabold tracking-tight md:text-5xl">
              Construimos sistema, no solo contenido.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-300">
              Cada proyecto agrega piezas reutilizables al kit Ewaffle.com:
              autenticación, cohortes, cápsulas, canales, reporting y
              playbooks. La customización vive en la marca, la lógica del
              cliente y sus integraciones.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {stack.map((item) => (
              <div
                key={item}
                className="rounded-lg border border-white/10 bg-white/[0.04] px-5 py-4 text-sm font-semibold text-slate-200"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <LeadCaptureForm />

      <section className="bg-slate-950 py-20 text-white">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-sky-300">
            Siguiente paso
          </p>
          <h2 className="mt-4 text-4xl font-extrabold tracking-tight md:text-5xl">
            Mostremos tu caso funcionando.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-300">
            En una discovery de 30 minutos definimos si hay necesidad real,
            presupuesto, responsable ejecutivo y un caso de uso que valga la
            pena convertir en demo visual.
          </p>
          <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/book-a-call"
              data-track-event="cta_click"
              data-track-category="home_bottom_cta"
              data-track-label="agendar_discovery_footer"
              className="rounded-lg bg-orange-500 px-7 py-4 text-sm font-bold text-white transition hover:bg-orange-600 focus:outline-none focus:ring-4 focus:ring-orange-300"
            >
              Agendar discovery
            </Link>
            <Link
              href="/pricing"
              data-track-event="cta_click"
              data-track-category="home_bottom_cta"
              data-track-label="ver_modelo_comercial"
              className="rounded-lg border border-white/20 px-7 py-4 text-sm font-bold text-white transition hover:bg-white/10 focus:outline-none focus:ring-4 focus:ring-white/20"
            >
              Ver modelo comercial
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

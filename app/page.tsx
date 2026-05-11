import Link from "next/link";
import HeroDemoMockup from "@/components/HeroDemoMockup";
import MotionReveal from "@/components/MotionReveal";

const clients = ["ACHS", "AIEP", "Duoc UC", "SIP", "LATAM", "UGM"];

const priorities = [
  {
    title: "Alta rotacion",
    body: "Onboarding y capacitacion para equipos que cambian seguido y necesitan llegar a productividad rapido: tiendas, planta, reparto, cocina o terreno.",
  },
  {
    title: "Churn de adopcion",
    body: "Usuarios que entran una vez, no vuelven o se quedan a medias. Detectamos senales blandas antes de que se transforme en abandono.",
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
    body: "Base real para demostrar plataforma viva, usuarios, cursos, seguimiento y soporte de adopcion.",
  },
  {
    label: "Buffalo Waffles",
    title: "Piloto de onboarding",
    body: "Demo mobile para primer turno, checklist por rol, activacion por WhatsApp y vista de avance para supervision.",
  },
  {
    label: "AIEP / empresas grandes",
    title: "Capacitacion masiva trazable",
    body: "Casos donde completion, permanencia, certificacion y reportería ejecutiva importan en serio.",
  },
];

const method = [
  {
    step: "01",
    title: "Reunion de descubrimiento",
    body: "Entendemos la necesidad, quien decide, cual es el sistema actual y que resultado necesita el responsable ejecutivo.",
  },
  {
    step: "02",
    title: "Demo visual gratis si hay match",
    body: "Si el caso calza, armamos una demo visual acotada con tu marca, tu flujo y una experiencia cercana al usuario final.",
  },
  {
    step: "03",
    title: "Build en 8-10 semanas",
    body: "Plataforma, capsulas iniciales, canales, dashboard y handover. 50% upfront, 50% al go-live.",
  },
];

const stack = [
  "LMS a medida y branded",
  "SSO, usuarios y cohortes",
  "WhatsApp Business + email",
  "SCORM/xAPI cuando aplica",
  "Dashboard ejecutivo",
  "Alertas tempranas",
  "Reporteria semanal",
  "Playbooks de intervencion",
];

export default function Home() {
  return (
    <>
      <section
        className="relative overflow-hidden bg-navy-950 text-white"
        style={{
          backgroundImage:
            "linear-gradient(180deg, rgba(15,22,41,0.82), rgba(10,14,26,0.98)), url('/assets/HeroBackground.png')",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="absolute inset-x-0 top-0 h-px bg-white/10" />
        <div className="mx-auto grid h-[calc(100svh-65px)] min-h-[720px] max-h-[820px] max-w-7xl gap-5 overflow-hidden px-6 py-8 md:gap-8 md:py-12 lg:h-[calc(100vh-73px)] lg:max-h-[840px] lg:min-h-[640px] lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
          <MotionReveal>
            <div className="inline-flex rounded-full border border-sky-300/20 bg-sky-300/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-sky-200">
              Ewaffle.com · Tecnologia aplicada
            </div>
            <h1 className="mt-5 max-w-4xl text-3xl font-extrabold leading-[1.04] tracking-tight text-white md:text-5xl xl:text-6xl">
              Onboarding gamificado para empresas que necesitan capacitar
              equipos grandes, distribuidos o con alta rotacion.
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-7 text-slate-300 md:mt-5 md:text-xl md:leading-8">
              Diseñamos plataformas AI-native que reducen abandono, aceleran
              adopcion y convierten la capacitacion en una experiencia trazable.
              No es solo un portal de cursos: es una capa de activacion para que
              tu gente llegue a productividad mas rapido y se quede.
            </p>
            <div className="mt-7 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/book-a-call"
                className="rounded-lg bg-accent px-7 py-4 text-center text-sm font-bold text-white shadow-lg shadow-accent/20 transition hover:bg-accent-hover focus:outline-none focus:ring-4 focus:ring-accent/30"
              >
                Agendar discovery
              </Link>
              <Link
                href="/case-studies"
                className="rounded-lg border border-white/15 bg-white/[0.04] px-7 py-4 text-center text-sm font-bold text-white transition hover:border-white/30 hover:bg-white/[0.08] focus:outline-none focus:ring-4 focus:ring-white/20"
              >
                Ver pruebas y casos
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
                className="rounded-lg bg-accent px-7 py-4 text-center text-sm font-bold text-white shadow-lg shadow-accent/20 transition hover:bg-accent-hover focus:outline-none focus:ring-4 focus:ring-accent/30"
              >
                Agendar reunion
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
              La rotacion, el abandono y la baja adopcion cuestan mas que el
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
                Partimos desde oportunidades reales, no desde teoria.
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
              Demo primero. Propuesta despues. Build con alcance cerrado.
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
              autenticacion, cohortes, capsulas, canales, reporting y
              playbooks. La customizacion vive en la marca, la logica del
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
              className="rounded-lg bg-orange-500 px-7 py-4 text-sm font-bold text-white transition hover:bg-orange-600 focus:outline-none focus:ring-4 focus:ring-orange-300"
            >
              Agendar discovery
            </Link>
            <Link
              href="/pricing"
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

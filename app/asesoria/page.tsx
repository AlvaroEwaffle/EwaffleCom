import type { Metadata } from "next";
import Link from "next/link";
import MotionReveal from "@/components/MotionReveal";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Asesoría en Formación Digital",
  description:
    "Asesoría B2B: diagnosticamos la brecha de capacidades de tu equipo, diseñamos el sistema de aprendizaje y producimos la formación digital que la cierra. Diagnóstico → diseño → producción → medición.",
  alternates: { canonical: "/asesoria" },
  openGraph: {
    title: "Asesoría en Formación Digital — Ewaffle",
    description:
      "Diagnosticamos la brecha, diseñamos el sistema de aprendizaje y producimos la formación digital que la cierra. Primero entender, después producir.",
    url: "https://e-waffle.com/asesoria",
    type: "website",
  },
};

const heroSteps = [
  { num: "01", title: "Diagnóstico", text: "Mapa de brechas de capacidad con costo operativo real." },
  { num: "02", title: "Diseño & Producción", text: "Diseño instruccional + cursos gamificados, video e IA." },
  { num: "03", title: "Plataforma & Medición", text: "LMS branded, analytics y certificación SENCE." },
];

const symptoms = [
  "Manuales, PDFs y PPTs que nadie termina de leer.",
  "La inducción depende de una persona — si no está, no pasa.",
  "No sabes quién aprendió qué, ni si quedó aplicado.",
  "Compliance y seguridad sin evidencia trazable.",
  "Onboarding lento: semanas para que alguien sea productivo.",
];

const workSteps = [
  {
    title: "Diagnóstico de capacidades",
    text: "Mapeamos los procesos críticos y dónde se rompe la transferencia de conocimiento. Cuantificamos el costo real de la brecha antes de proponer nada.",
  },
  {
    title: "Diseño instruccional del sistema",
    text: "Convertimos el diagnóstico en una arquitectura de aprendizaje: objetivos, rutas, niveles y evaluación. Diseño antes que producción.",
  },
  {
    title: "Producción & despliegue",
    text: "Cursos gamificados, video, 360° y chatbots IA, publicados en tu LMS branded. Implementación en 4 semanas, sin que necesites equipo técnico.",
  },
  {
    title: "Operar & medir",
    text: "Analytics de quién aprendió qué, certificación SENCE y mejora continua. El sistema sigue operando sin depender de heroísmo.",
  },
];

const modelRows = [
  { layer: "Diagnóstico", question: "¿Qué capacidad falta y cuánto cuesta esa brecha?", evidence: "Mapa de brechas + costo operativo", decision: "Capacitar, rediseñar o automatizar" },
  { layer: "Diseño", question: "¿Cuál es la ruta de aprendizaje más efectiva?", evidence: "Blueprint instruccional + objetivos", decision: "Curso, ruta o microlearning" },
  { layer: "Producción", question: "¿Qué formato logra que el contenido se aplique?", evidence: "Gamificación · video · IA · 360°", decision: "Producir o reutilizar" },
  { layer: "Plataforma", question: "¿Dónde vive y cómo accede tu gente?", evidence: "LMS branded + reportería", decision: "Desplegar o integrar" },
  { layer: "Medición", question: "¿Quién aprendió, y quedó aplicado?", evidence: "Analytics + certificación SENCE", decision: "Escalar o ajustar" },
];

const capabilities = [
  { tag: "LMS", title: "Plataforma branded", text: "Tu LMS con tu marca, dominio y panel de admin. Escala de 10 a 10.000+ usuarios. Ewaffle invisible." },
  { tag: "🎮", title: "Cursos gamificados", text: "Experiencias interactivas SCORM con puntos, niveles, badges y ranking. Hasta 3× más engagement." },
  { tag: "IA", title: "Chatbots con IA (RAG)", text: "Tutores 24/7 que responden las dudas del alumno sobre tu propio contenido, en lenguaje natural." },
  { tag: "▶", title: "Producción multimedia & 360°", text: "Video, motion graphics, audio y recorridos 360° inmersivos para inducción operativa." },
  { tag: "✓", title: "Certificación SENCE", text: "Credenciales digitales con código de verificación, compatibles con franquicia SENCE." },
  { tag: "DI", title: "Asesoría en Diseño Instruccional", text: "Estrategia de aprendizaje y arquitectura de contenido — el diagnóstico que ordena todo lo demás." },
];

const metrics = [
  { value: "+40%", label: "en calidad de cursos al digitalizar y rediseñar el contenido." },
  { value: "3×", label: "más engagement con gamificación vs. formación tradicional." },
  { value: "4 sem", label: "de implementación promedio, sin equipo técnico de tu lado." },
];

const differentiators = [
  { title: "Sin equipo técnico", text: "Nosotros desarrollamos, producimos y publicamos. Tú solo aportas el conocimiento del negocio." },
  { title: "White-label completo", text: "Tu marca, tu dominio, tu experiencia. Ewaffle queda invisible para tus usuarios." },
  { title: "IA nativa", text: "Diseño asistido por IA y tutores RAG integrados — no es un agregado, es parte del sistema." },
  { title: "Listo para SENCE", text: "Certificación con código verificable y compatibilidad con franquicia tributaria." },
  { title: "Velocidad real", text: "Implementación en 4 semanas. El conocimiento de tu equipo deja de esperar." },
  { title: "6 meses de soporte", text: "Acompañamiento y ajustes ilimitados tras el lanzamiento. El sistema sigue vivo." },
];

const clientLogos = ["ACHS", "AIEP", "Duoc UC", "AccademIO", "Los Héroes", "+50 empresas"];

export default function AsesoriaPage() {
  return (
    <main className="bg-navy-950 text-white">
      {/* Hero */}
      <section className="border-b border-white/10 px-6 pb-16 pt-24 md:pb-20 md:pt-32">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-accent">
            Asesoría en formación digital · e-learning con IA
          </p>
          <h1 className="mt-6 max-w-4xl text-4xl font-extrabold leading-[1.04] tracking-tight md:text-6xl">
            El conocimiento de tu equipo no escala al ritmo de tu operación.
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-slate-300">
            Diagnosticamos la brecha de capacidades, diseñamos el sistema de
            aprendizaje y producimos la formación digital que la cierra. Primero
            entender dónde se pierde el conocimiento — después producir.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/book-a-call"
              data-track-event="cta_click"
              data-track-category="asesoria_hero"
              data-track-label="agendar_diagnostico"
              className="rounded-lg bg-accent px-7 py-3.5 text-center text-sm font-bold text-white shadow-lg shadow-accent/20 transition hover:bg-accent-hover"
            >
              Agendar diagnóstico gratuito
            </Link>
            <a
              href="#modelo"
              className="rounded-lg border border-white/20 px-7 py-3.5 text-center text-sm font-bold text-white transition hover:border-white/40 hover:bg-white/5"
            >
              Ver el modelo
            </a>
          </div>
          <div className="mt-14 grid border-y border-white/10 md:grid-cols-3">
            {heroSteps.map((s) => (
              <div
                key={s.num}
                className="border-b border-white/10 py-6 md:border-b-0 md:border-r md:px-6 md:last:border-r-0 md:first:pl-0"
              >
                <p className="text-xs font-bold text-white/30">{s.num}</p>
                <h3 className="mt-2 text-lg font-bold text-white">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problema */}
      <section className="border-b border-white/10 px-6 py-20 md:py-24">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-sky-300">A / El problema</p>
          <h2 className="mt-4 max-w-3xl text-4xl font-extrabold tracking-tight md:text-5xl">
            La capacitación tradicional no deja huella.
          </h2>
          <div className="mt-12 grid gap-10 lg:grid-cols-[1.15fr_1fr]">
            <div className="divide-y divide-white/10 border-y border-white/10">
              {symptoms.map((s) => (
                <MotionReveal key={s}>
                  <div className="flex items-start gap-3 py-4">
                    <span className="mt-0.5 font-extrabold text-accent">›</span>
                    <p className="text-lg leading-relaxed text-slate-200">{s}</p>
                  </div>
                </MotionReveal>
              ))}
            </div>
            <div className="rounded-2xl border border-white/10 bg-navy-900 p-7">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">El costo real</p>
              <div className="mt-5 space-y-4">
                {[
                  ["Tiempo de un nuevo colaborador hasta ser productivo", "Semanas"],
                  ["Conocimiento crítico que vive solo en una persona", "Riesgo"],
                  ["Evidencia de capacitación ante una auditoría", "0%"],
                  ["Contenido que queda obsoleto cada año", "Alto"],
                ].map(([label, value]) => (
                  <div key={label} className="flex items-baseline justify-between gap-4 border-b border-white/5 pb-3 last:border-0">
                    <span className="max-w-[62%] text-sm text-slate-300">{label}</span>
                    <span className="text-xl font-extrabold text-gold">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cómo trabajamos */}
      <section className="border-b border-white/10 px-6 py-20 md:py-24">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-accent">B / Cómo trabajamos</p>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight md:text-5xl">
              Primero diagnóstico. Después producción.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-slate-400">
              La plataforma y los cursos son el resultado del diagnóstico, no el
              punto de partida. Sin tecnología antes de entender la brecha.
            </p>
          </div>
          <div className="divide-y divide-white/10 border-y border-white/10">
            {workSteps.map((step, i) => (
              <MotionReveal key={step.title} delay={i * 0.05}>
                <div className="grid grid-cols-[56px_1fr] gap-2 py-6">
                  <p className="text-sm font-extrabold text-accent">0{i + 1}</p>
                  <div>
                    <h3 className="text-xl font-bold text-white">{step.title}</h3>
                    <p className="mt-2 text-base leading-relaxed text-slate-400">{step.text}</p>
                  </div>
                </div>
              </MotionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Modelo */}
      <section id="modelo" className="border-b border-white/10 bg-navy-900/40 px-6 py-20 md:py-24">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-sky-300">C / El modelo</p>
          <h2 className="mt-4 max-w-3xl text-4xl font-extrabold tracking-tight md:text-5xl">
            Una cadena de decisiones, no de opiniones.
          </h2>
          <div className="mt-10 overflow-hidden rounded-2xl border border-white/10">
            <div className="hidden grid-cols-[0.85fr_2fr_1.5fr_1.3fr] border-b border-white/10 bg-white/[0.04] text-xs font-bold uppercase tracking-[0.14em] text-slate-400 md:grid">
              <div className="p-4">Capa</div>
              <div className="p-4">Pregunta</div>
              <div className="p-4">Evidencia</div>
              <div className="p-4">Decisión</div>
            </div>
            {modelRows.map((row) => (
              <div key={row.layer} className="grid border-b border-white/10 last:border-0 md:grid-cols-[0.85fr_2fr_1.5fr_1.3fr]">
                <div className="p-4 md:border-r md:border-white/10">
                  <p className="text-sm font-bold text-accent">{row.layer}</p>
                </div>
                <div className="p-4 md:border-r md:border-white/10">
                  <p className="text-sm leading-relaxed text-slate-200">{row.question}</p>
                </div>
                <div className="p-4 md:border-r md:border-white/10">
                  <p className="text-sm leading-relaxed text-slate-400">{row.evidence}</p>
                </div>
                <div className="p-4">
                  <p className="text-sm leading-relaxed text-slate-200">{row.decision}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capacidades */}
      <section className="border-b border-white/10 px-6 py-20 md:py-24">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-accent">D / Capacidades</p>
          <h2 className="mt-4 text-4xl font-extrabold tracking-tight md:text-5xl">
            Las piezas que componen el sistema.
          </h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {capabilities.map((c, i) => (
              <MotionReveal key={c.title} delay={(i % 3) * 0.05}>
                <article className="flex h-full flex-col rounded-2xl border border-white/10 bg-navy-900 p-7 transition hover:border-accent/40">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-accent/30 bg-accent/10 text-sm font-extrabold text-accent">
                    {c.tag}
                  </div>
                  <h3 className="mt-4 text-xl font-bold text-white">{c.title}</h3>
                  <p className="mt-3 text-base leading-7 text-slate-400">{c.text}</p>
                </article>
              </MotionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Track record */}
      <section className="border-b border-white/10 px-6 py-20 md:py-24">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-sky-300">E / Track record</p>
          <h2 className="mt-4 text-4xl font-extrabold tracking-tight md:text-5xl">Resultados, no teoría.</h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {metrics.map((m, i) => (
              <MotionReveal key={m.value} delay={i * 0.05}>
                <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.05] to-transparent p-8">
                  <p className="text-4xl font-extrabold text-white">{m.value}</p>
                  <p className="mt-3 text-base leading-7 text-slate-400">{m.label}</p>
                </div>
              </MotionReveal>
            ))}
          </div>
          <div className="mt-12 border-t border-white/10 pt-8">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">Han confiado en Ewaffle</p>
            <div className="mt-5 flex flex-wrap items-center gap-x-8 gap-y-3">
              {clientLogos.map((name) => (
                <span key={name} className="text-lg font-extrabold uppercase tracking-wide text-white/40">
                  {name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Por qué */}
      <section className="border-b border-white/10 px-6 py-20 md:py-24">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-accent">F / Por qué Ewaffle</p>
          <h2 className="mt-4 max-w-3xl text-4xl font-extrabold tracking-tight md:text-5xl">
            Un solo proveedor, del diagnóstico a la operación.
          </h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {differentiators.map((d, i) => (
              <MotionReveal key={d.title} delay={(i % 3) * 0.05}>
                <div className="h-full rounded-2xl border border-white/10 bg-navy-900 p-7">
                  <h3 className="text-lg font-bold text-white">{d.title}</h3>
                  <p className="mt-2 text-base leading-7 text-slate-400">{d.text}</p>
                </div>
              </MotionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Empezamos con 30 minutos."
        description="Diagnóstico gratuito. Sin pitch de ventas: un análisis honesto de tu brecha de capacidades y qué tiene sentido construir."
        primaryCTA="Agendar diagnóstico gratuito"
        primaryHref="/book-a-call"
        secondaryCTA="Ver casos"
        secondaryHref="/case-studies"
      />
    </main>
  );
}

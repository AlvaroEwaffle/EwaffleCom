import type { Metadata } from "next";
import Link from "next/link";
import WhatsAppDemoForm from "@/components/WhatsAppDemoForm";

export const metadata: Metadata = {
  title: "Demo WhatsApp Learning",
  description:
    "Prueba en tu propio WhatsApp cómo entregamos formación corporativa por este canal. 5 cápsulas cortas, reply-driven, en ~5 minutos.",
};

const HIGHLIGHTS = [
  {
    title: "Reply-driven",
    body: "Cada lección espera tu respuesta antes de enviar la siguiente. Vives el ritmo real que sentirá tu equipo.",
  },
  {
    title: "5 minutos",
    body: "5 cápsulas cortas (≤350 caracteres c/u). Lo terminas en una pausa de café.",
  },
  {
    title: "Sin instalaciones",
    body: "WhatsApp que ya tienes. Sin app extra, sin contraseña, sin LMS para este demo.",
  },
];

const STEPS = [
  "Llenas un mini-form con tu nombre y tu WhatsApp.",
  "Te abrimos WhatsApp con un keyword pre-cargado. Solo dale enviar.",
  "Recibes la primera cápsula. Respondes con lo que indique cada mensaje.",
  "Al completar las 5 cápsulas, te dejamos abierto el siguiente paso (discovery 30 min).",
];

export default function WhatsAppLearningDemoPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-navy-900 to-navy-950 py-20 text-white">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-300">
            Demo interactivo
          </p>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight md:text-6xl">
            Vive el WhatsApp learning en tu propio teléfono
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Te enviamos 5 cápsulas cortas de Liderazgo Adaptativo por WhatsApp.
            No es una grabación ni un PDF — es exactamente el mismo motor que usamos
            para nuestros clientes empresariales. Reply-driven, mobile-first, en español.
          </p>
        </div>
      </section>

      <section className="bg-navy-950 py-20 text-white">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[1.05fr_1fr]">
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight">
              Cómo funciona el demo
            </h2>
            <ol className="mt-8 space-y-5 text-base leading-7 text-slate-300">
              {STEPS.map((step, idx) => (
                <li key={step} className="flex gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-400/20 text-sm font-bold text-emerald-300">
                    {idx + 1}
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
            <div className="mt-10 grid gap-4 md:grid-cols-3">
              {HIGHLIGHTS.map((h) => (
                <div
                  key={h.title}
                  className="rounded-2xl border border-white/10 bg-navy-900 p-5"
                >
                  <h3 className="text-sm font-bold uppercase tracking-[0.14em] text-emerald-300">
                    {h.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-300">{h.body}</p>
                </div>
              ))}
            </div>
            <p className="mt-10 text-sm text-slate-400">
              ¿Prefieres hablarlo directo?{" "}
              <Link href="/book-a-call" className="font-bold text-emerald-300 underline">
                Agenda un discovery de 30 min
              </Link>
              .
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-navy-900 p-7 md:p-9">
            <h2 className="text-2xl font-extrabold text-white">Inicia el demo</h2>
            <p className="mt-2 text-sm text-slate-400">
              Solo necesitamos tu nombre y tu WhatsApp.
            </p>
            <div className="mt-8">
              <WhatsAppDemoForm />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-950 py-16 text-white">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-2xl font-extrabold tracking-tight">
            Lo que vas a sentir como usuario
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-300">
            Mismo flujo que entregamos a primera línea logística, compliance corporativo
            o coordinadores académicos. Adaptable a cualquier vertical en discovery.
          </p>
          <div className="mt-8">
            <Link
              href="/book-a-call"
              className="inline-flex rounded-lg bg-accent px-7 py-4 text-sm font-bold text-white transition hover:bg-accent-hover focus:outline-none focus:ring-4 focus:ring-accent/30"
            >
              Agendar discovery de implementación
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

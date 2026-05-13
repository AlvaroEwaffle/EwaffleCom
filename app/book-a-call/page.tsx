import type { Metadata } from "next";
import { CONTACT_EMAIL } from "@/lib/contact";

export const metadata: Metadata = {
  title: "Agendar Discovery",
  description:
    "Agenda una discovery de 30 minutos para evaluar si Ewaffle.com puede construir una plataforma LMS a medida para tu organización.",
};

const steps = [
  {
    num: "1",
    title: "Entendemos la necesidad",
    desc: "Revisamos onboarding, primera línea, compliance, sistema actual y resultado esperado.",
  },
  {
    num: "2",
    title: "Definimos un caso",
    desc: "Si calza, elegimos un caso de uso concreto para convertirlo en demo con tu contexto.",
  },
  {
    num: "3",
    title: "Proponemos con alcance",
    desc: "Recibes alcance, timeline, inversión y criterios de éxito. Sin promesas vagas.",
  },
];

export default function BookACallPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-navy-900 to-navy-950 py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h1 className="text-4xl font-extrabold text-white md:text-5xl">
            Agenda una discovery
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-300">
            30 minutos para entender si hay necesidad real, presupuesto,
            responsable y un caso que valga la pena convertir en demo.
          </p>
        </div>
      </section>

      {/* Scheduling iframe */}
      <section className="bg-navy-950 py-12">
        <div className="mx-auto max-w-4xl px-6">
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-navy-900">
            <iframe
              src="https://capu.villelab.com/schedule/book-a-call"
              className="w-full rounded-xl border-0"
              style={{ height: "700px", minHeight: "600px" }}
              title="Agendar llamada con Alvaro"
              allow="clipboard-write"
            />
          </div>
        </div>
      </section>

      {/* Process steps */}
      <section className="bg-navy-950 py-24">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="text-center text-2xl font-bold text-white">
            Qué esperar
          </h2>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {steps.map((step) => (
              <div key={step.num} className="text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-accent/20 text-lg font-bold text-accent">
                  {step.num}
                </div>
                <h3 className="text-lg font-bold text-white">{step.title}</h3>
                <p className="mt-2 text-sm text-slate-400">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Alternative contact */}
      <section className="bg-navy-900 py-16">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <p className="text-sm text-slate-400">
            ¿Prefieres email? Escríbeme a{" "}
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="font-semibold text-accent transition-colors hover:text-accent-hover"
            >
              {CONTACT_EMAIL}
            </a>
          </p>
        </div>
      </section>
    </>
  );
}

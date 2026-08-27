import type { Metadata } from "next";
import Reveal from "@/components/studio/Reveal";
import PageHero from "@/components/studio/PageHero";
import Escena from "@/components/studio/Escena";
import CTASection from "@/components/CTASection";

/* ═══════════════════════════════════════════════════════════════════════════
   NOTES · lo que estamos escribiendo
   ───────────────────────────────────────────────────────────────────────────
   Cuatro cosas cambiaron acá.

   1. Los temas. Eran los de una fábrica de producción —"How to Outsource
      E-Learning Development", "The True Cost of Building In-House"— escritos
      para un comprador que evalúa proveedores de producción. Bajo esta posición
      el lector es alguien con una conducta que no cambia.
   2. "ROI Data from 200+ Courses" prometía un análisis sobre 200 cursos que no
      existe y una cifra que no medimos. Fuera.
   3. El formulario de newsletter no tenía `action` ni handler: se tragaba el
      correo en silencio. Un formulario roto es peor que no tenerlo, así que
      salió. Cuando haya con qué, va conectado o no va.
   4. Todo sigue marcado "coming" porque no hay ni un artículo publicado. Es
      honesto y también es un argumento para sacar /blog del nav hasta que lo
      haya — decisión pendiente de Álvaro.
   ═══════════════════════════════════════════════════════════════════════════ */

export const metadata: Metadata = {
  title: "Notes",
  description:
    "Notes from the Lab: how we diagnose a behaviour, why the format is never the input, and what we have learned building simulations, narrative and games.",
};

const notas = [
  {
    n: "01",
    tema: "Diagnosis",
    t: "The brief that arrives, and the brief we write back",
    d: "Almost every request names the format before anyone has said what is failing. Here is the set of questions we use to get from “we need a gamified course” to a behaviour written as something you could actually watch happen — and what to do when the answer turns out not to be training at all.",
  },
  {
    n: "02",
    tema: "Method",
    t: "Five real users in week three",
    d: "The single step that separates a studio from an agency, and the one clients push back on hardest because it looks like a delay. Why a rough prototype in real hands beats three rounds of stakeholder review, and how to run the session so it produces decisions instead of opinions.",
  },
  {
    n: "03",
    tema: "Delivery",
    t: "The people your LMS rollout quietly loses",
    d: "Field crews, shift workers, contractors, drivers: no corporate email, no computer, no patience for an account-creation flow. What actually reaches them, why WhatsApp keeps winning that argument, and how to decide the channel during design rather than after launch.",
  },
  {
    n: "04",
    tema: "Measurement",
    t: "Completion rate is not evidence",
    d: "It measures that a file was opened and closed. What to agree on instead before a project starts — the observable behaviour, the evidence that already exists inside your systems, and who is going to look at it ninety days later.",
  },
];

export default function BlogPage() {
  return (
    <div className="relative">
      <Reveal />

      <PageHero
        claqueta="Ewaffle · Notes"
        titulo={
          <>
            Notes from
            <br />
            <em>the Lab</em>.
          </>
        }
        bajada="What we are learning while designing interventions — the diagnosis questions that work, the steps clients resist, the delivery problems that sink good design. Written for whoever owns a behaviour that is not changing."
        nota="None of these are published yet. They are listed because writing them down is how we commit to them — and because it is more useful than four placeholder posts about outsourcing."
        cta={{ label: "Book the diagnosis call", href: "/book-a-call" }}
      />

      <Escena
        n="01"
        rotulo="In the queue"
        titulo={
          <>
            Four we are <em>writing</em>.
          </>
        }
      >
        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {notas.map((p, i) => (
            <article
              key={p.n}
              className="flex flex-col rounded-2xl border border-white/10 bg-[var(--sala-2)] p-6 sm:p-7"
              data-motion
              style={{ ["--retardo" as string]: `${i * 70}ms` }}
            >
              <div className="flex items-center justify-between gap-3">
                <span className="mono text-[11px] text-[var(--haz)]">
                  {p.n} · {p.tema}
                </span>
                <span className="mono rounded-full border border-white/15 px-2.5 py-1 text-[9.5px] text-[var(--niebla)]">
                  Coming
                </span>
              </div>
              <h2 className="mt-4 text-[1.28rem] font-bold leading-snug tracking-[-0.024em] text-[var(--tiza)]">
                {p.t}
              </h2>
              <p className="mt-3 text-[15px] leading-relaxed text-[var(--niebla)]">{p.d}</p>
            </article>
          ))}
        </div>

        <p className="mt-10 max-w-[66ch] text-[var(--niebla)]" data-motion>
          If one of these is the problem you are sitting on right now, the call is faster than
          waiting for the article — and you get the version with your own case in it.
        </p>
      </Escena>

      <CTASection
        title="Skip the reading list."
        description="Bring the behaviour that is not changing. Forty-five minutes, and you leave knowing whether an experience is the right answer to it."
        primaryCTA="Book the diagnosis call"
        secondaryCTA="See the work"
        secondaryHref="/case-studies"
      />
    </div>
  );
}

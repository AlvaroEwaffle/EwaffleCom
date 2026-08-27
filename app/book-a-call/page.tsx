import type { Metadata } from "next";
import Reveal from "@/components/studio/Reveal";
import PageHero from "@/components/studio/PageHero";
import Escena from "@/components/studio/Escena";
import { CONTACT_EMAIL } from "@/lib/contact";

/* ═══════════════════════════════════════════════════════════════════════════
   BOOK A CALL · la llamada de diagnóstico
   ───────────────────────────────────────────────────────────────────────────
   Antes decía "Book Your Free Discovery Call — 30 minutes. No pressure. We'll
   discuss your course production needs". Dos problemas: "course production
   needs" presupone que lo que se compra es producción, y "no pressure" es la
   frase de alguien que sabe que la llamada es un pitch.

   Esta llamada tiene un producto: sale con la conducta escrita como algo
   observable, o con un "esto no es un problema de aprendizaje" fundamentado.
   Decirlo de entrada filtra mejor que cualquier promesa de no presionar, y
   además prepara al cliente para la pregunta con la que abre la reunión.
   ═══════════════════════════════════════════════════════════════════════════ */

export const metadata: Metadata = {
  title: "Book the diagnosis call",
  description:
    "Forty-five minutes on the behaviour that is not changing. You leave with it written as something observable — or with an honest reason why this is not a learning problem.",
};

const pasos = [
  {
    n: "01",
    t: "You describe the floor",
    d: "Not the course you had in mind. What people are doing that they should not be, who they are, and what makes the wrong choice the easy one where they work.",
  },
  {
    n: "02",
    t: "We write it as a behaviour",
    d: "Together, out loud, until it is something you could watch happen or not happen — and until we have named the evidence that would tell us it moved.",
  },
  {
    n: "03",
    t: "You get a straight answer",
    d: "Either the shape of an intervention and what it would take, or our honest read that this is a process, tool or incentive problem and no experience will fix it.",
  },
];

const traer = [
  "The behaviour, not the brief — and one real example of it going wrong.",
  "Who the audience actually is, including the ones without a computer.",
  "What you already measure, even if it is nowhere near the behaviour.",
  "What has been tried before, and what happened to it.",
];

export default function BookACallPage() {
  return (
    <div className="relative">
      <Reveal />

      <PageHero
        claqueta="Ewaffle · Diagnosis call"
        titulo={
          <>
            Forty-five minutes
            <br />
            on <em>one behaviour</em>.
          </>
        }
        bajada="This is not a capability demo and it is not a quote. It is the first step of the Lab, run for free: we take the thing that is not changing in your organisation and work it into something specific enough to design against."
        nota="Worst case for you is a clear no. Some behaviours are not a learning problem, and we would rather say so on this call than six weeks into a project."
      />

      <section className="border-t border-white/10 px-5 py-14 sm:px-10 lg:px-14">
        <div className="mx-auto max-w-[1180px]">
          <div
            className="overflow-hidden rounded-2xl border border-white/10 bg-[var(--sala-2)]"
            data-motion
          >
            <iframe
              src="https://capu.villelab.com/schedule/book-a-call"
              className="w-full border-0"
              style={{ height: "700px", minHeight: "600px" }}
              title="Book the diagnosis call with Álvaro"
              allow="clipboard-write"
            />
          </div>
          <p className="mt-5 text-[15px] text-[var(--niebla)]" data-motion>
            Prefer email?{" "}
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="font-semibold text-[var(--haz)] underline underline-offset-4"
            >
              {CONTACT_EMAIL}
            </a>{" "}
            — describe the behaviour in three lines and we will reply with whether it sounds like an
            intervention.
          </p>
        </div>
      </section>

      <Escena
        n="01"
        rotulo="How it goes"
        fondo
        titulo={
          <>
            Three moves, and <em>a real answer</em>.
          </>
        }
      >
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {pasos.map((p, i) => (
            <div
              key={p.n}
              className="rounded-2xl border border-white/10 bg-[var(--sala-2)] p-6"
              data-motion
              style={{ ["--retardo" as string]: `${i * 80}ms` }}
            >
              <span className="mono text-[11px] text-[var(--haz)]">{p.n}</span>
              <h3 className="mt-3 text-[1.2rem] font-bold tracking-[-0.024em] text-[var(--tiza)]">
                {p.t}
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-[var(--niebla)]">{p.d}</p>
            </div>
          ))}
        </div>
      </Escena>

      <Escena
        n="02"
        rotulo="What to bring"
        titulo={
          <>
            Four things that make it <em>a good call</em>.
          </>
        }
        bajada="None of them require preparation you do not already have. If you can only bring the first one, bring the first one."
      >
        <ul className="mt-10 grid gap-3 md:grid-cols-2" data-motion>
          {traer.map((x) => (
            <li
              key={x}
              className="flex gap-4 rounded-2xl border border-white/10 bg-white/[0.02] px-6 py-5 leading-relaxed text-[var(--tiza)]"
            >
              <span aria-hidden="true" className="text-[var(--haz)]">
                →
              </span>
              <span>{x}</span>
            </li>
          ))}
        </ul>
      </Escena>
    </div>
  );
}

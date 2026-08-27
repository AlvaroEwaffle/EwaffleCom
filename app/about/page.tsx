import type { Metadata } from "next";
import Reveal from "@/components/studio/Reveal";
import PageHero from "@/components/studio/PageHero";
import Escena from "@/components/studio/Escena";
import CTASection from "@/components/CTASection";
import { CONTACT_EMAIL } from "@/lib/contact";

/* ═══════════════════════════════════════════════════════════════════════════
   ABOUT · quiénes somos, bajo la posición nueva
   ───────────────────────────────────────────────────────────────────────────
   La versión anterior se describía como "a nearshore EdTech studio helping US
   training companies produce better courses, faster, and at a fraction of the
   cost". Esa frase vende exactamente lo que estamos dejando de vender: volumen
   de producción, más rápido y más barato. Y el argumento central —"lower
   regional cost of living means you get more value per dollar"— le concede al
   comprador que lo que compra es capacidad de producir horas, no criterio.

   También salieron las cuatro cifras del encabezado: "50+ Organizations",
   "200+ Courses Delivered", "5+ Years" y "40%+ Avg. Engagement Lift". Ninguna
   es defendible si un comprador pregunta de dónde sale, y la última ni siquiera
   la medimos nosotros. Bajo una posición que se apoya en evidencia, publicar un
   número prestado es el flanco más caro que hay. En su lugar va una fila de
   hechos verificables: clientes con nombre, instrumentos que corren, canales.
   ═══════════════════════════════════════════════════════════════════════════ */

export const metadata: Metadata = {
  title: "About",
  description:
    "A learning experience studio in Latin America. We design interventions, build our own engines, and deliver them running — in your LMS or in ours.",
};

/* Hechos, no métricas. Cada uno se puede comprobar sin creernos nada: los
   clientes están publicados, los instrumentos se abren y corren. */
const hechos = [
  { v: "8", l: "instruments built and running" },
  { v: "6", l: "delivery channels, including WhatsApp" },
  { v: "LMS", l: "included, white-labelled" },
  { v: "3", l: "languages: ES · EN · PT-BR" },
];

const porque = [
  {
    n: "01",
    t: "We build our own engines",
    d: "The simulation, the eight game mechanics, the WhatsApp learning engine, the SCORM test harness and the LMS are ours. That is why a client's budget goes into adapting their content rather than into developing the thing that runs it — and why we can say yes to formats an agency would have to subcontract.",
  },
  {
    n: "02",
    t: "We test before we produce",
    d: "A playable prototype in five real pairs of hands, in week three, while changing course is still cheap. It turns the review meeting from “I like it / I don't” into “it worked / it didn't”. Most of what goes wrong in this industry goes wrong because that step does not exist.",
  },
  {
    n: "03",
    t: "We deliver it running",
    d: "Not a zip and a good-luck. The experience lands where your people already are — your LMS, a link with no account, WhatsApp, or our platform under your brand. The logistics of who can actually get in are part of the design, not a change order.",
  },
  {
    n: "04",
    t: "We will tell you when it is not us",
    d: "Some behaviours are not a learning problem. They are a process, a tool or an incentive problem, and no experience we build will move them. Saying that out loud costs us a project now and again; saying the opposite would cost the client a great deal more.",
  },
];

const noHacemos = [
  "Bill by minute of finished content.",
  "Take a format as the brief without asking what is failing.",
  "Publish a completion rate as if it were evidence of learning.",
  "Ship a SCORM package we have not watched talk to an LMS.",
];

export default function AboutPage() {
  return (
    <div className="relative">
      <Reveal />

      <PageHero
        claqueta="Ewaffle · About"
        titulo={
          <>
            A studio, not a
            <br />
            <em>content factory</em>.
          </>
        }
        bajada="We are a learning experience studio based in Latin America, working in Spanish, English and Brazilian Portuguese. We started out producing courses, which is how we learned that producing courses is rarely what the problem needed. Now we design the intervention first and let it decide the format."
        nota="Overlapping hours with both American coasts and most of Europe's afternoon. It matters for the same reason a prototype matters: the work gets better when the feedback arrives the same day."
        cta={{ label: "Book the diagnosis call", href: "/book-a-call" }}
      />

      <section className="border-b border-white/10 px-5 py-12 sm:px-10 lg:px-14">
        <dl className="mx-auto grid max-w-[1180px] grid-cols-2 gap-8 md:grid-cols-4" data-motion>
          {hechos.map((h) => (
            <div key={h.l}>
              <dt className="text-[2.4rem] font-extrabold leading-none tracking-[-0.04em] text-[var(--haz)]">
                {h.v}
              </dt>
              <dd className="mt-2 text-[14px] leading-snug text-[var(--niebla)]">{h.l}</dd>
            </div>
          ))}
        </dl>
      </section>

      <Escena
        n="01"
        rotulo="How we got here"
        titulo={
          <>
            We produced courses for years.
            <br />
            <em>That is how we learned</em> what was wrong with it.
          </>
        }
      >
        <div
          className="mt-10 grid max-w-[74ch] gap-6 leading-relaxed text-[var(--niebla)]"
          data-motion
          style={{ ["--retardo" as string]: "160ms" }}
        >
          <p>
            The work arrived the same way every time: a deck, a manual, a regulation, and a request
            to turn it into a course. We got good at it. We built for occupational-safety
            associations, universities, technical institutes, foundations, schools and foodservice
            chains — compliance, induction, care, leadership, inclusion.
          </p>
          <p>
            And a pattern kept showing up. The courses were correct and the behaviour did not move.
            Not because the content was bad, but because nobody had asked what was actually failing
            on the floor before deciding that a course was the answer. We were being paid to produce
            the format the client had already chosen, and the choosing was the part that mattered.
          </p>
          <p>
            Meanwhile the production half started commoditising. Generative AI put a passable course
            within reach of anyone with the tools they already have open — so competing on being
            faster and cheaper at production means competing with something sitting in the client&apos;s
            other browser tab. That race is lost by definition.
          </p>
          <p className="border-l-2 border-[var(--haz)] pl-5 font-medium text-[var(--tiza)]">
            What has not commoditised is deciding which experience makes someone work differently.
            That takes diagnosis, pedagogical judgement, and the ability to build things that do not
            come out of a template. It is what we had been doing for free inside every project, and
            it is now what the studio sells.
          </p>
        </div>
      </Escena>

      <Escena
        n="02"
        rotulo="What makes it work"
        fondo
        titulo={
          <>
            Four things an agency <em>cannot easily copy</em>.
          </>
        }
      >
        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {porque.map((p, i) => (
            <div
              key={p.n}
              className="rounded-2xl border border-white/10 bg-[var(--sala-2)] p-6 sm:p-7"
              data-motion
              style={{ ["--retardo" as string]: `${i * 70}ms` }}
            >
              <span className="mono text-[11px] text-[var(--haz)]">{p.n}</span>
              <h3 className="mt-3 text-[1.25rem] font-bold tracking-[-0.024em] text-[var(--tiza)]">
                {p.t}
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-[var(--niebla)]">{p.d}</p>
            </div>
          ))}
        </div>
      </Escena>

      <Escena
        n="03"
        rotulo="Who runs it"
        titulo={
          <>
            Small studio. <em>Named people.</em>
          </>
        }
        bajada="You will not be handed to an account manager. The person who runs the diagnosis is the person who shapes the experience, and they stay on it through delivery."
      >
        <div
          className="mt-10 flex max-w-[74ch] flex-col gap-6 rounded-2xl border border-white/10 bg-[var(--sala-2)] p-7 sm:flex-row sm:items-start sm:gap-8"
          data-motion
        >
          <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-[rgba(255,177,72,0.14)] text-[1.6rem] font-extrabold text-[var(--haz)]">
            AV
          </div>
          <div className="min-w-0">
            <h3 className="text-[1.3rem] font-bold tracking-[-0.024em] text-[var(--tiza)]">
              Álvaro Villena
            </h3>
            <p className="mono mt-1 text-[10.5px] text-[var(--rosa)]">Founder</p>
            <p className="mt-4 leading-relaxed text-[var(--niebla)]">
              Eight years building learning products, and a background running AI-driven product
              work as a Toptal project manager before that. He takes the diagnosis calls himself —
              which is the reason this site asks you to describe a behaviour rather than fill in a
              project brief.
            </p>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="mono mt-5 inline-flex w-fit items-center gap-2 rounded-full border border-[var(--linea-viva)] px-4 py-2 text-[10.5px] text-[var(--tiza)] transition-colors hover:border-[var(--haz)] hover:text-[var(--haz)]"
            >
              {CONTACT_EMAIL}
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </Escena>

      <Escena
        n="04"
        rotulo="The no-gos"
        fondo
        titulo={
          <>
            Things we <em>will not do</em>.
          </>
        }
        bajada="A position is only worth something if it costs you work sometimes. These are the four that cost us work."
      >
        <ul className="mt-10 grid gap-3 md:grid-cols-2" data-motion>
          {noHacemos.map((x) => (
            <li
              key={x}
              className="flex gap-4 rounded-2xl border border-white/10 bg-white/[0.02] px-6 py-5 text-[var(--tiza)]"
            >
              <span aria-hidden="true" className="text-[var(--rosa)]">
                ✕
              </span>
              <span className="leading-relaxed">{x}</span>
            </li>
          ))}
        </ul>
      </Escena>

      <CTASection
        title="Tell us what is not changing."
        description="Not what you want built. What your people are doing that they should not be — and what it is costing you. That is the conversation this studio is built for."
        primaryCTA="Book the diagnosis call"
        secondaryCTA="See the work"
        secondaryHref="/case-studies"
      />
    </div>
  );
}

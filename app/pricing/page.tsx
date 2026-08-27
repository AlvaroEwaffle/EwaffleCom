import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/studio/Reveal";
import PageHero from "@/components/studio/PageHero";
import Escena from "@/components/studio/Escena";
import CTASection from "@/components/CTASection";

/* ═══════════════════════════════════════════════════════════════════════════
   PRICING · las tres formas de trabajar juntos
   ───────────────────────────────────────────────────────────────────────────
   Los tres rangos en dólares se mantienen —decisión de Álvaro, 27-ago-2026—
   pero cambia lo que compran. Antes la unidad era el curso: Starter era "1
   curso SCORM de hasta 60 minutos", Professional "3 a 5 cursos", Enterprise
   "cursos ilimitados por trimestre". Se compraba volumen de producción, y los
   escalones se diferenciaban por rondas de revisión y velocidad de entrega.

   Ahora la unidad es la EXPERIENCIA. Lab Sprint es una intervención sobre una
   conducta; Programme es un sistema de experiencias encadenadas con su
   ecosistema; Studio Partner es capacidad reservada. El mismo dinero compra
   otra cosa, y la tabla lo dice explícitamente en vez de dejarlo implícito.

   Salió también toda la sección "in-house vs outsourcing", que comparaba el
   costo contra contratar un diseñador instruccional en Estados Unidos. Ese
   argumento es el de una fábrica de producción barata: le concede al comprador
   que lo que compra es capacidad de producir, cuando lo que compra es criterio.
   ═══════════════════════════════════════════════════════════════════════════ */

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Three ways to work with a learning experience studio: Lab Sprint, Programme and Studio Partner. Priced by the behaviour that has to move, not by how many courses come out.",
};

const formas = [
  {
    n: "01",
    t: "Lab Sprint",
    precio: "$3,000 – $5,000",
    unidad: "One intervention. One behaviour.",
    d: "The way in. You pick the problem that is actually costing you something, and we run the full Lab on it — diagnosis, experience design, a prototype tested with five real users, production and deployment. Small enough to check the method with, real enough to matter on its own.",
    trae: [
      "The behaviour written as something observable, and the evidence we will be judged on",
      "A playable prototype in real hands by week three — not a storyboard",
      "The finished experience, in the format the diagnosis chose",
      "Delivered running: your LMS, a link, WhatsApp, or ours",
    ],
    cta: "Start with one problem",
    destacado: false,
  },
  {
    n: "02",
    t: "Programme",
    precio: "$8,000 – $15,000",
    unidad: "A journey as a system of experiences.",
    d: "Several interventions that build on each other, plus the ecosystem that holds them together: the platform, the tracking, the comms that get people in, and the measurement that tells you whether any of it moved. This is where the included LMS earns its place.",
    trae: [
      "Multiple linked interventions, sequenced by how the behaviour actually develops",
      "Learning platform included, under your brand, no per-user licence",
      "Comms and nudges, because a rollout nobody enters is not a rollout",
      "Measured on behaviour and evidence, not on completion rates",
    ],
    cta: "Scope a programme",
    destacado: true,
  },
  {
    n: "03",
    t: "Studio Partner",
    precio: "$20,000+",
    unidad: "We are your learning experience team.",
    d: "Reserved capacity by the quarter, with the diagnosis running continuously instead of restarting with every brief. For organisations where the demand does not stop and the cost of scoping each project from zero has become its own problem.",
    trae: [
      "Reserved studio capacity, quarter by quarter",
      "Standing diagnosis: we see the problems before they arrive as briefs",
      "Your roadmap, our studio — including the pieces that turn out not to need us",
      "Priority on the instruments already built, so new work starts from a running engine",
    ],
    cta: "Talk about a partnership",
    destacado: false,
  },
];

/* El contraste que justifica el cambio de unidad sin decir "subimos el
   precio": el mismo dinero, otra cosa comprada. */
const antesDespues = [
  {
    k: "The unit",
    antes: "A course, priced per minute of finished content.",
    ahora: "An intervention, priced by the behaviour it has to move.",
  },
  {
    k: "What decides the scope",
    antes: "How many modules you asked for.",
    ahora: "What the diagnosis found, including when the answer is smaller than the brief.",
  },
  {
    k: "The format",
    antes: "Named in the purchase order.",
    ahora: "Concluded in step 03, after we know who fails and why.",
  },
  {
    k: "Revisions",
    antes: "Two rounds. Three on the bigger tier.",
    ahora: "A prototype tested with five real users, while changing course is still cheap.",
  },
  {
    k: "Done means",
    antes: "The zip is delivered.",
    ahora: "The experience is running where your people are, and being measured.",
  },
];

const faqs = [
  {
    q: "Why is a Lab Sprint priced like a course used to be, if it is more work?",
    a: "Because the diagnosis and the prototype replace work that used to be wasted rather than adding to it. Most of the cost in traditional production goes into building the wrong thing well and then revising it. Testing with five real users in week three is cheaper than three rounds of stakeholder review in week ten.",
  },
  {
    q: "What if the diagnosis says we do not need you?",
    a: "Then we say so, and you have paid for the diagnosis rather than for a course you did not need. It happens. Some behaviours are not a learning problem at all — they are a process, a tool or an incentive problem, and no experience we build will move them.",
  },
  {
    q: "Do you work with the LMS we already have?",
    a: "Yes, and we can show you exactly what it will receive before it gets there. We deliver SCORM 1.2, SCORM 2004 and xAPI, and we verify the package against a live call log rather than shipping a zip and hoping. If you do not have a platform, ours is included from the Programme tier up.",
  },
  {
    q: "What does “LMS included” actually mean?",
    a: "A white-labelled learning platform — your logo, your palette, your domain — with no per-user licence, holding the experiences we build for you. Most studios hand over a file and where to put it becomes your problem. If you later want to move to your own platform, the content is standards-compliant and goes with you.",
  },
  {
    q: "How long does a Lab Sprint take?",
    a: "The prototype is in real hands around week three; the finished experience typically lands between weeks six and ten, depending on how much production the chosen format needs. A WhatsApp sequence and a multiplayer simulation are not the same build, and the diagnosis is what tells us which one you are getting.",
  },
  {
    q: "Can you white-label the work for our clients?",
    a: "Yes. If you are an OTEC, a consultancy or a training provider, the work ships under your brand and your clients never see ours. We have done it for years — it is how a good part of our catalogue was built.",
  },
  {
    q: "What languages do you work in?",
    a: "Spanish, English and Brazilian Portuguese. We are based in Latin America, and bilingual delivery — including voice — is routine rather than a surcharge line.",
  },
  {
    q: "How do we start?",
    a: "A 45-minute call where you describe what is going wrong on the floor. If it looks like an intervention, you get a written proposal that opens with the problem, the experience and the result — in that order, with the price at the end.",
  },
];

export default function PricingPage() {
  return (
    <div className="relative">
      <Reveal />

      <PageHero
        claqueta="Ewaffle · Working together"
        titulo={
          <>
            Priced by the <em>problem</em>.
            <br />
            Not by the runtime.
          </>
        }
        bajada="Three ways in. They are not sizes of the same thing — they differ by how much of your world the studio is looking at: one behaviour, one journey, or your whole roadmap. What you are buying in all three is the decision about which experience will move it, and then the experience itself, running."
        nota="Every engagement opens with the diagnosis. If it concludes that the cheapest fix is not something we build, that is a legitimate outcome and we will put it in writing."
        cta={{ label: "Book the diagnosis call", href: "/book-a-call" }}
      />

      <Escena
        n="01"
        rotulo="The three ways"
        titulo={
          <>
            One behaviour, one journey, or <em>the whole roadmap</em>.
          </>
        }
      >
        <div className="mt-12 grid gap-4 lg:grid-cols-3">
          {formas.map((f, i) => (
            <article
              key={f.n}
              className={`flex flex-col rounded-2xl border p-7 ${
                f.destacado
                  ? "border-[rgba(255,177,72,0.45)] bg-[rgba(255,177,72,0.06)]"
                  : "border-white/10 bg-[var(--sala-2)]"
              }`}
              data-motion
              style={{ ["--retardo" as string]: `${i * 90}ms` }}
            >
              <div className="flex items-center justify-between gap-3">
                <span className="mono text-[11px] text-[var(--haz)]">{f.n}</span>
                {f.destacado && (
                  <span className="mono rounded-full bg-[var(--haz)] px-2.5 py-1 text-[9.5px] font-bold text-[#1a1206]">
                    Most chosen
                  </span>
                )}
              </div>

              <h3 className="mt-4 text-[1.7rem] font-extrabold tracking-[-0.03em] text-[var(--tiza)]">
                {f.t}
              </h3>
              <p className="mt-1 text-[15px] font-semibold text-[var(--rosa)]">{f.unidad}</p>

              <p className="mt-6 text-[2rem] font-extrabold tabular-nums tracking-[-0.035em] text-[var(--tiza)]">
                {f.precio}
              </p>
              <p className="mono mt-1 text-[10px] text-[var(--niebla)]">USD · per engagement</p>

              <p className="mt-6 text-[15px] leading-relaxed text-[var(--niebla)]">{f.d}</p>

              <ul className="mb-8 mt-6 grid gap-3 border-t border-white/10 pt-6">
                {f.trae.map((x) => (
                  <li key={x} className="flex gap-3 text-[14.5px] leading-relaxed text-[var(--niebla)]">
                    <span aria-hidden="true" className="mt-[3px] shrink-0 text-[var(--haz)]">
                      →
                    </span>
                    <span>{x}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/book-a-call"
                className={`mt-auto rounded-full px-5 py-3 text-center text-[14.5px] font-bold transition-transform hover:-translate-y-0.5 ${
                  f.destacado
                    ? "bg-[var(--rosa)] text-white"
                    : "border border-[var(--linea-viva)] text-[var(--tiza)] hover:border-[var(--haz)]"
                }`}
              >
                {f.cta}
              </Link>
            </article>
          ))}
        </div>

        <p className="mt-8 max-w-[68ch] text-[var(--niebla)]" data-motion>
          Where an engagement lands inside its range is a function of the diagnosis — how many roles
          are involved, whether the space has to be captured, whether the experience has to run in
          two languages. Nothing on this page is priced by minutes of content, because minutes of
          content is not what changes anyone&apos;s behaviour.
        </p>
      </Escena>

      <Escena
        n="02"
        rotulo="What changed"
        fondo
        titulo={
          <>
            Same numbers. <em>Different thing bought.</em>
          </>
        }
        bajada="These figures used to buy volume: one course, three to five courses, unlimited courses per quarter. They now buy interventions. It is worth being explicit about the swap, because it is the whole argument."
      >
        <div className="mt-10 overflow-hidden rounded-2xl border border-white/10" data-motion>
          <div className="grid grid-cols-1 md:grid-cols-[190px_1fr_1fr]">
            <div className="hidden md:block" />
            <div className="border-b border-white/10 bg-white/[0.02] px-5 py-4 md:border-l">
              <p className="mono text-[10.5px] text-[var(--niebla)]">A production shop sells</p>
            </div>
            <div className="border-b border-l border-white/10 bg-[rgba(255,177,72,0.06)] px-5 py-4">
              <p className="mono text-[10.5px] text-[var(--haz)]">A studio sells</p>
            </div>

            {antesDespues.map((f) => (
              <div key={f.k} className="contents">
                <div className="border-b border-white/10 px-5 py-4">
                  <p className="mono text-[10.5px] text-[var(--niebla)]">{f.k}</p>
                </div>
                <div className="border-b border-white/10 px-5 py-4 md:border-l">
                  <p className="text-[15px] leading-relaxed text-[var(--niebla)]">{f.antes}</p>
                </div>
                <div className="border-b border-l border-white/10 bg-[rgba(255,177,72,0.035)] px-5 py-4">
                  <p className="text-[15px] font-medium leading-relaxed text-[var(--tiza)]">{f.ahora}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Escena>

      <Escena
        n="03"
        rotulo="Questions"
        titulo={
          <>
            The ones worth <em>asking us</em>.
          </>
        }
      >
        <div className="mt-10 grid gap-3 md:grid-cols-2">
          {faqs.map((f, i) => (
            <div
              key={f.q}
              className="rounded-2xl border border-white/10 bg-white/[0.02] p-6"
              data-motion
              style={{ ["--retardo" as string]: `${Math.min(i, 5) * 60}ms` }}
            >
              <h3 className="font-bold leading-snug text-[var(--tiza)]">{f.q}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-[var(--niebla)]">{f.a}</p>
            </div>
          ))}
        </div>
      </Escena>

      <CTASection
        title="The diagnosis is where this starts."
        description="Not with a quote, and not with a format. Tell us what your people are doing that they should not be, and we will tell you whether we are the right answer."
        primaryCTA="Book the diagnosis call"
        secondaryCTA="See the instruments"
        secondaryHref="/services"
      />
    </div>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/studio/Reveal";
import PageHero from "@/components/studio/PageHero";
import Escena from "@/components/studio/Escena";
import CTASection from "@/components/CTASection";

/* ═══════════════════════════════════════════════════════════════════════════
   SERVICES · el instrumental del Lab
   ───────────────────────────────────────────────────────────────────────────
   La versión anterior era un menú de herramientas: "SCORM & xAPI production",
   "Gamification design", "LMS solutions", cada una con su lista de features y
   su claim de conversión. Ese formato le pide al cliente que elija el formato,
   que es exactamente la decisión que no puede tomar todavía —y la única que
   nosotros cobramos por tomar bien.

   Acá el orden se invierte. Primero la regla (el formato es una conclusión, no
   un input), después el instrumental con la pregunta que responde cada
   instrumento, después qué hace y qué no hace la IA, y recién al final los
   canales de entrega.

   También salieron tres afirmaciones que no podíamos defender si un comprador
   preguntaba de dónde salen: "proven to increase completion rates by 40%",
   "50+ LMS compatibility" y "50% faster production cycles".
   ═══════════════════════════════════════════════════════════════════════════ */

export const metadata: Metadata = {
  title: "What we build",
  description:
    "Simulations, branching narrative, game mechanics, spatial learning, AI-built video, interactive guides, WhatsApp learning and a white-labelled LMS. The format is never the input — it is what the diagnosis concludes.",
};

/* Cada instrumento se define por la PREGUNTA que responde, no por la
   herramienta con que se construye. Un comprador no tiene un problema de
   Storyline; tiene gente que no revisa el punto de anclaje. */
const instrumental = [
  {
    n: "01",
    t: "Multiplayer simulation",
    cuando: "Coordination between roles is the competence.",
    d: "Several people log in as the roles that have to agree in real life — customs, carrier, shipping line, importer — and nothing advances until what they submit actually reconciles. The friction between roles is the lesson, and it cannot be rehearsed alone.",
    hecho: [
      "Our own engine, running in the browser. No per-seat platform licence.",
      "Real artefacts of the job: bills of lading, invoices, customs declarations.",
      "The scenario is data, so a new domain is a configuration, not a rebuild.",
    ],
    demo: null,
  },
  {
    n: "02",
    t: "Branching narrative",
    cuando: "The topic has no clean answer and the goal is judgement.",
    d: "Ethics, safeguarding, dignity in care, prevention. Remembering the policy is not the point — holding a line when nobody is watching is. They choose, they see what the choice cost, and they get the reasoning behind it.",
    hecho: [
      "Built on the real dilemmas of the job, not textbook cases.",
      "Every option carries a defensible cost, so there is nothing to game.",
    ],
    demo: {
      href: "https://ewaffle.cl/demos/los-heroes-decidir-mas-cerca",
      label: "Open a real one · 24 lessons",
    },
  },
  {
    n: "03",
    t: "Game mechanics",
    cuando: "The material needs repetition and nobody is repeating it.",
    d: "Eight mechanics already built and tested, configured with your concepts. Your budget goes into adapting your content, not into developing an engine — and people practise the material instead of reading it.",
    hecho: [
      "Wheel, memory, quiz show, word search, concept ring, drag and drop, decision tree, floor-plan placement.",
      "No grade sent to the LMS and unlimited retries: practice without fear of failing.",
    ],
    demo: {
      href: "https://ewaffle.cl/demos/juegos-demo",
      label: "Open four of them, chained",
    },
  },
  {
    n: "04",
    t: "Spatial learning and 360",
    cuando: "The physical space is part of what has to be learned.",
    d: "When the plant, the ward or the venue is the thing, describing it does not work. They place each zone, its function and its risk before they ever walk in — and the on-site induction gets shorter because they arrive oriented.",
    hecho: [
      "Floor-plan placement pairs with 360 walkthroughs of the real site.",
      "Works on a phone: every zone is a touch target, nothing to drag.",
    ],
    demo: {
      href: "https://ewaffle.cl/demos/hotspot-plano-prototipo",
      label: "Open a real floor plan",
    },
  },
  {
    n: "05",
    t: "AI-built video and voice",
    cuando: "The explanation is genuinely the bottleneck.",
    d: "Scripting, motion, voice and visuals produced with AI in the loop, then reviewed piece by piece by a person before anything ships. It makes explanation cheap enough that it stops eating the budget the practice needs.",
    hecho: [
      "Scripted from your material and your terminology, not from a generic template.",
      "On-location production too, when the real workplace is what has to be seen.",
      "A human signs off on every piece. The AI moves the floor, not the decisions.",
    ],
    demo: null,
  },
  {
    n: "06",
    t: "Interactive guides",
    cuando: "There is a manual, and nobody opens it.",
    d: "The procedure becomes something people walk through and finish. It opens in a browser with nothing to install and no account to create, so a new hire can do their induction on day one without waiting on IT for access.",
    hecho: [
      "For induction, procedures and contractor onboarding.",
      "Same experience on phone, tablet and desktop.",
    ],
    demo: {
      href: "https://ewaffle.cl/demos/buffalo-induccion",
      label: "Open a real induction",
    },
  },
  {
    n: "07",
    t: "WhatsApp learning",
    cuando: "Your people have no computer and no corporate email.",
    d: "One lesson per reply, in the app they already have open. Field crews, shift workers, drivers, contractors — the population every LMS rollout quietly loses. Our own engine, not a broadcast list.",
    hecho: [
      "It advances on their reply, so the pace is theirs.",
      "No app to install, no account to create, no training on the tool itself.",
    ],
    demo: null,
  },
  {
    n: "08",
    t: "The LMS, included",
    cuando: "You do not have a platform and do not want to buy one.",
    d: "Most studios hand over a zip, and where to put it is your problem. Ours comes with the experience, under your brand, with no per-user licence. If you already have an LMS we deliver into it instead — and we can show you exactly what it will receive.",
    hecho: [
      "White-labelled: your logo, your palette, your domain.",
      "SCORM 1.2, SCORM 2004 and xAPI, verified against a live call log before delivery.",
    ],
    demo: {
      href: "https://ewaffle.cl/demos/lms-sim",
      label: "Watch the SCORM calls, live",
    },
  },
];

/* La IA es la razón por la que esto es económicamente posible, y también el
   lugar donde más se miente en este mercado. Conviene decir las dos mitades. */
const iaHace = [
  "Drafting and restructuring source material into a first pass.",
  "Voice, motion and visuals at a cost that used to be prohibitive.",
  "Variants: translations, role-specific cuts, alternative scenarios.",
  "The tedious half of production, so the budget can go to the practice.",
];

const iaNoHace = [
  "Decide which behaviour is worth an intervention. That is the diagnosis.",
  "Judge whether a dilemma is honest, or whether a cost is defensible.",
  "Sign anything off. A person reviews every piece before it ships.",
  "Replace testing with five real users. Nothing predicts that.",
];

const canales = [
  { c: "SCORM 1.2 / 2004 / xAPI", w: "You have an LMS and need the formal record." },
  { c: "Web link, no account, no install", w: "Contractors, suppliers, people passing through." },
  { c: "WhatsApp", w: "Field crews and shift workers with no corporate email." },
  { c: "360 and immersive", w: "The physical space is part of what must be learned." },
  { c: "Multiplayer simulation", w: "Coordination between roles is the competence." },
  { c: "Our LMS, white-labelled", w: "You do not have a platform and do not want to buy one." },
];

export default function ServicesPage() {
  return (
    <div className="relative">
      <Reveal />

      <PageHero
        claqueta="Ewaffle · What we build"
        titulo={
          <>
            Eight instruments.
            <br />
            <em>One decision</em> before any of them.
          </>
        }
        bajada="This is not a menu. Nobody has a Storyline problem — they have a crew that signs off on a permit without checking the anchor point. What follows is what the studio can build; which one you get is the conclusion of the diagnosis, not something you order by name."
        nota="If the diagnosis concludes that a one-page checklist would fix it, that is what we will tell you — and it is a cheaper answer than anything on this page."
        cta={{ label: "Start with the diagnosis", href: "/book-a-call" }}
      />

      <Escena
        n="01"
        rotulo="The rule"
        titulo={
          <>
            The format is <em>never</em> the input.
          </>
        }
        bajada="Every brief that arrives already names the format — a course, a video, a game, an LMS. It is an understandable shortcut and it is almost always wrong, because the format is the last decision, not the first. In the Lab it gets made in step 03, once we know the behaviour, the audience, and what makes the wrong choice the easy one today."
      >
        <div
          className="mt-10 grid gap-4 sm:grid-cols-3"
          data-motion
          style={{ ["--retardo" as string]: "180ms" }}
        >
          {[
            {
              k: "What you ask for",
              v: "“We need a gamified course on fall protection.”",
              nuevo: false,
            },
            {
              k: "What we ask back",
              v: "“Who signs off without checking, and what makes skipping it the easy call at 6am?”",
              nuevo: false,
            },
            {
              k: "What it turns out to be",
              v: "A two-minute decision at the moment of sign-off, on the phone they already carry.",
              nuevo: true,
            },
          ].map((c) => (
            <div
              key={c.k}
              className={`rounded-2xl border p-6 ${
                c.nuevo
                  ? "border-[rgba(255,177,72,0.35)] bg-[rgba(255,177,72,0.06)]"
                  : "border-white/10 bg-white/[0.02]"
              }`}
            >
              <p
                className={`mono text-[10.5px] ${c.nuevo ? "text-[var(--haz)]" : "text-[var(--niebla)]"}`}
              >
                {c.k}
              </p>
              <p className="mt-3 text-[15.5px] leading-relaxed text-[var(--tiza)]">{c.v}</p>
            </div>
          ))}
        </div>
      </Escena>

      <Escena
        n="02"
        rotulo="The instruments"
        fondo
        titulo={
          <>
            Built and tested. <em>Not a capability deck.</em>
          </>
        }
        bajada="Every one of these is running somewhere today. Where there is a link, it opens the real thing — no form, no account, no sales call in between."
      >
        <div className="mt-12 grid gap-4 lg:grid-cols-2">
          {instrumental.map((it, i) => (
            <article
              key={it.n}
              className="flex flex-col rounded-2xl border border-white/10 bg-[var(--sala-2)] p-6 sm:p-7"
              data-motion
              style={{ ["--retardo" as string]: `${Math.min(i, 5) * 60}ms` }}
            >
              <div className="flex items-baseline gap-3">
                <span className="mono text-[11px] text-[var(--haz)]">{it.n}</span>
                <h3 className="text-[1.32rem] font-bold tracking-[-0.024em] text-[var(--tiza)]">
                  {it.t}
                </h3>
              </div>

              <p className="mono mt-4 text-[10.5px] text-[var(--niebla)]">When it is the answer</p>
              <p className="mt-1 font-semibold text-[var(--tiza)]">{it.cuando}</p>

              <p className="mt-4 text-[15px] leading-relaxed text-[var(--niebla)]">{it.d}</p>

              <ul className="lista-disco mb-6 mt-5 grid gap-2 pl-5 text-[14.5px] leading-relaxed text-[var(--niebla)] marker:text-[var(--rosa)]">
                {it.hecho.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>

              {it.demo && (
                <a
                  href={it.demo.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mono mt-auto inline-flex w-fit items-center gap-2 rounded-full border border-[var(--linea-viva)] px-4 py-2 pt-2 text-[10.5px] text-[var(--tiza)] transition-colors hover:border-[var(--haz)] hover:text-[var(--haz)]"
                >
                  {it.demo.label}
                  <span aria-hidden="true">↗</span>
                </a>
              )}
            </article>
          ))}
        </div>
      </Escena>

      <Escena
        n="03"
        rotulo="AI, honestly"
        titulo={
          <>
            It moves the floor.
            <br />
            It does <em>not</em> make the decisions.
          </>
        }
        bajada="AI is why a studio our size can build a multiplayer simulation at all, and it is also the most oversold word in this industry. So here is the split, in the terms we actually work in."
      >
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {[
            { t: "What the AI does", items: iaHace, vivo: true },
            { t: "What it does not", items: iaNoHace, vivo: false },
          ].map((col) => (
            <div
              key={col.t}
              className={`rounded-2xl border p-6 sm:p-7 ${
                col.vivo
                  ? "border-[rgba(255,177,72,0.28)] bg-[rgba(255,177,72,0.05)]"
                  : "border-white/10 bg-white/[0.02]"
              }`}
              data-motion
              style={{ ["--retardo" as string]: col.vivo ? "0ms" : "90ms" }}
            >
              <p className={`mono text-[10.5px] ${col.vivo ? "text-[var(--haz)]" : "text-[var(--niebla)]"}`}>
                {col.t}
              </p>
              <ul className="lista-disco mt-4 grid gap-3 pl-5 leading-relaxed text-[var(--niebla)] marker:text-[var(--rosa)]">
                {col.items.map((x) => (
                  <li key={x}>{x}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Escena>

      <Escena
        n="04"
        rotulo="Delivery"
        fondo
        titulo={
          <>
            SCORM <em>and beyond</em>.
          </>
        }
        bajada="The deliverable is not a file, it is the experience working where your people already are. Each channel below is an answer to one question: how does this reach someone who does not sit at a desk?"
      >
        <div className="mt-10 overflow-hidden rounded-2xl border border-white/10" data-motion>
          {canales.map((c) => (
            <div
              key={c.c}
              className="grid gap-1 border-b border-white/10 px-5 py-5 last:border-b-0 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] md:items-baseline md:gap-8"
            >
              <p className="font-semibold text-[var(--tiza)]">{c.c}</p>
              <p className="text-[15px] text-[var(--niebla)]">{c.w}</p>
            </div>
          ))}
        </div>

        <p className="mt-8 max-w-[66ch] text-[var(--niebla)]" data-motion>
          Most of what sinks a rollout is not pedagogical, it is logistical: the people who most
          needed it never had a way in.{" "}
          <Link href="/pricing" className="text-[var(--haz)] underline underline-offset-4">
            All three ways of working with us
          </Link>{" "}
          settle the channel in the diagnosis. It is never a change order.
        </p>
      </Escena>

      <CTASection
        title="Bring us the behaviour, not the brief."
        description="Forty-five minutes. You describe what is going wrong on the floor; we tell you whether it is a learning problem at all — and if it is not, what we think it actually is."
        primaryCTA="Book the diagnosis call"
        secondaryCTA="See what we have built"
        secondaryHref="/case-studies"
      />
    </div>
  );
}

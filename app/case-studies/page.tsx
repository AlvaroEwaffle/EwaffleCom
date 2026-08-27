import type { Metadata } from "next";
import Reveal from "@/components/studio/Reveal";
import PageHero from "@/components/studio/PageHero";
import Escena from "@/components/studio/Escena";
import CTASection from "@/components/CTASection";

/* ═══════════════════════════════════════════════════════════════════════════
   WORK · lo que existe, con el nombre de quien lo encargó
   ───────────────────────────────────────────────────────────────────────────
   Esta página tenía tres clientes inventados —TrainForward Inc., Apex Learning
   Solutions, NovaTech Training— con métricas inventadas: "completion rates from
   45% to 82%", "6x production increase", "12 courses in 8 weeks". Estaba viva
   en e-waffle.com. Bajo una posición que se apoya en evidencia, un caso
   inventado es el flanco más caro que hay: basta que un comprador busque el
   nombre y no encuentre la empresa.

   Reemplazo, decidido por Álvaro el 27-ago-2026: clientes reales, sin métricas.
   Cada caso es problema → experiencia → qué quedó funcionando, y donde hay
   demo pública se abre la pieza misma. Los nombres son los que ewaffle.cl ya
   publica; los formatos y años salen del catálogo interno
   (VPM/Ewaffle/catalogo-whitelabel.tsv, columna "Estado contenido" = Producido).

   Regla al escribir acá: ninguna cifra de resultado que no podamos defender si
   nos la cuestionan. El "qué cambió" describe el diseño y la entrega —hechos
   verificables— y no un porcentaje que no medimos nosotros.
   ═══════════════════════════════════════════════════════════════════════════ */

export const metadata: Metadata = {
  title: "Work",
  description:
    "Real work for ACHS, AIEP, Caja Los Héroes, Buffalo Waffles, Duoc UC and Universidad Gabriela Mistral — problem, experience and what shipped. No invented metrics.",
};

const casos = [
  {
    n: "01",
    cliente: "Caja Los Héroes",
    sector: "Social security · Chile",
    etiqueta: "Branching narrative",
    titulo: "A topic where knowing the policy was never the problem",
    problema:
      "Dignified treatment of older people is the kind of subject everybody agrees with in a classroom and nobody is tested on there. The failure does not happen because someone forgot the protocol — it happens at a counter, with a queue behind, when the patient option costs three minutes nobody has.",
    experiencia:
      "A branching course built on the dilemmas that actually come up at the counter, not on textbook cases. Every option carries a defensible cost, so there is nothing to game by picking the obviously nice answer. They choose, they see what the choice cost, and they get the reasoning.",
    quedo:
      "Twenty-four lessons, open in a browser. Also a second intervention on Law 20.393 — corporate criminal liability — built the same way.",
    formato: "Video · Rise · Storyline · PDF",
    demo: {
      href: "https://ewaffle.cl/demos/los-heroes-decidir-mas-cerca",
      label: "Open it · 24 lessons",
    },
  },
  {
    n: "02",
    cliente: "ACHS",
    sector: "Occupational safety · Chile",
    etiqueta: "Game mechanics · Video",
    titulo: "Prevention content that people had already stopped reading",
    problema:
      "A safety association produces the compliance material that thousands of member companies deliver. The content was correct and the format was the problem: PPE regulation, harassment law, vehicle safety and hazardous-substance storage were all being read rather than practised, and reading is not what fails on a shift.",
    experiencia:
      "Different instrument per behaviour, chosen per topic instead of applied uniformly. PPE rules became a gamified Storyline where the equipment gets selected under conditions. Vehicle safety became three modules shot with a real actor, because the cues that matter are physical. Hazardous storage became an interactive Genially you move through.",
    quedo:
      "Four interventions in production, deliverable to member companies as SCORM and re-brandable for each one.",
    formato: "Gamified Storyline · Rise · Genially · Live-action production",
    demo: null,
  },
  {
    n: "03",
    cliente: "AIEP",
    sector: "Technical higher education · Chile",
    etiqueta: "Instructional design · Production",
    titulo: "Risk prevention, for people who will teach it",
    problema:
      "A technical institute needed prevention and industrial-safety subjects that would hold up academically and still be usable online — the version of this that usually arrives is a slide deck with a quiz bolted on, and it does not survive contact with a student who has to apply it on a plant floor.",
    experiencia:
      "Full instructional design and production for two subjects: risk-prevention training strategies and industrial safety in energy systems. Designed as online subjects from the start rather than as recordings of a classroom that already existed.",
    quedo: "Both produced and validated by the institute's own academic review.",
    formato: "Instructional design + production · TPR302 · TPR305",
    demo: null,
  },
  {
    n: "04",
    cliente: "Buffalo Waffles",
    sector: "Foodservice · Chile",
    etiqueta: "Interactive guide · AI video",
    titulo: "An induction that had to survive the first shift",
    problema:
      "High turnover, first-job crews, and an induction that lived in a manual and in whoever happened to be on shift to explain it. The person who most needs it is the one with no corporate email, no computer, and no patience for an account-creation flow on day one.",
    experiencia:
      "An interactive guide that opens in a browser with nothing to install and no login, carrying AI-produced video for the parts that genuinely need explaining, and a closing check. Built for a phone, because that is the device that is actually in the room.",
    quedo:
      "Three lessons with video and a final check, live and openable by anyone — which is why it is on this page as a link rather than as a claim.",
    formato: "Interactive guide · AI video · Genially",
    demo: {
      href: "https://ewaffle.cl/demos/buffalo-induccion",
      label: "Open the induction",
    },
  },
  {
    n: "05",
    cliente: "Duoc UC",
    sector: "Higher education · Chile",
    etiqueta: "Video · Rise",
    titulo: "Inclusion, told by the institution rather than about it",
    problema:
      "Inclusive-teaching material tends to be written in the voice of a compliance department, which is precisely the voice that makes teaching staff treat it as an obligation instead of as practice.",
    experiencia:
      "A welcome piece in the institution's own voice opening a produced Rise route on inclusive strategies for the classroom and the workplace — framed as things to try on Monday rather than as a policy to acknowledge.",
    quedo: "Produced and in use across the institution.",
    formato: "Welcome video · Rise production",
    demo: null,
  },
  {
    n: "06",
    cliente: "Universidad Gabriela Mistral",
    sector: "Higher education · Chile",
    etiqueta: "Online subject design",
    titulo: "Six university subjects, designed online rather than moved online",
    problema:
      "Putting a university subject online usually means recording the lectures. It produces something that is technically available and pedagogically worse than the room it came from, and students notice within a week.",
    experiencia:
      "Complete instructional design and production for six subjects — four in sustainability, two in humanities — built as online subjects from the outset: their own sequence, their own assessment logic, their own materials.",
    quedo: "All six produced at university level, running in the institution's own programmes.",
    formato: "Full online subject design · 6 subjects",
    demo: null,
  },
];

/* Trabajo real que no tiene ficha propia acá. Se lista igual: media página de
   nombres verificables pesa más que un caso largo inventado. */
const otros = [
  { c: "Coanil", q: "Comprehensive-care manuals for residential settings, as multi-module Rise" },
  { c: "Colegios SIP", q: "School coexistence protocol as animated video and Rise" },
  { c: "CERP Dávila", q: "Psychological first aid, humanised care, leadership and conflict handling" },
  { c: "Fundación Oportunidad", q: "Five-module programme on classroom observation and feedback" },
  { c: "Manpower LATAM", q: "Power-skills and agility academies for distributed teams" },
  { c: "UNIACC · U. Santo Tomás", q: "Online programme design for higher education" },
];

export default function CaseStudiesPage() {
  return (
    <div className="relative">
      <Reveal />

      <PageHero
        claqueta="Ewaffle · Work"
        titulo={
          <>
            Real clients.
            <br />
            <em>No invented numbers.</em>
          </>
        }
        bajada="What follows is work that exists, for organisations you can look up. Each one is written the way we write a brief — the problem on the floor, the experience we designed for it, and what ended up running. Where the piece is public, the link opens the actual thing."
        nota="You will not find a completion-rate percentage on this page. The ones worth quoting are measured inside our clients' systems, not ours — so publishing them as our results would be borrowing evidence we cannot defend."
        cta={{ label: "Book the diagnosis call", href: "/book-a-call" }}
      />

      <Escena
        n="01"
        rotulo="Selected work"
        titulo={
          <>
            Six problems, and <em>what we built</em> for each.
          </>
        }
      >
        <div className="mt-12 grid gap-4">
          {casos.map((c, i) => (
            <article
              key={c.n}
              className="grid gap-8 rounded-2xl border border-white/10 bg-[var(--sala-2)] p-6 sm:p-8 lg:grid-cols-[minmax(0,0.34fr)_minmax(0,0.66fr)]"
              data-motion
              style={{ ["--retardo" as string]: `${Math.min(i, 4) * 70}ms` }}
            >
              <header className="min-w-0">
                <div className="flex items-baseline gap-3">
                  <span className="mono text-[11px] text-[var(--haz)]">{c.n}</span>
                  <span className="mono text-[10px] text-[var(--niebla)]">{c.etiqueta}</span>
                </div>
                <h3 className="mt-3 text-[1.55rem] font-extrabold leading-tight tracking-[-0.03em] text-[var(--tiza)]">
                  {c.cliente}
                </h3>
                <p className="mono mt-1.5 text-[10px] text-[var(--niebla)]">{c.sector}</p>

                <p className="mt-6 border-l-2 border-[var(--rosa)] pl-4 text-[15px] font-semibold leading-snug text-[var(--tiza)]">
                  {c.titulo}
                </p>

                <p className="mono mt-6 text-[10px] text-[var(--niebla)]">Built with</p>
                <p className="mt-1 text-[13.5px] text-[var(--niebla)]">{c.formato}</p>

                {c.demo && (
                  <a
                    href={c.demo.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mono mt-6 inline-flex w-fit items-center gap-2 rounded-full border border-[var(--linea-viva)] px-4 py-2 text-[10.5px] text-[var(--tiza)] transition-colors hover:border-[var(--haz)] hover:text-[var(--haz)]"
                  >
                    {c.demo.label}
                    <span aria-hidden="true">↗</span>
                  </a>
                )}
              </header>

              <div className="grid min-w-0 gap-6 border-t border-white/10 pt-7 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
                {[
                  { k: "The problem", v: c.problema, vivo: false },
                  { k: "The experience", v: c.experiencia, vivo: true },
                  { k: "What shipped", v: c.quedo, vivo: false },
                ].map((b) => (
                  <div key={b.k}>
                    <p
                      className={`mono text-[10.5px] ${b.vivo ? "text-[var(--haz)]" : "text-[var(--niebla)]"}`}
                    >
                      {b.k}
                    </p>
                    <p
                      className={`mt-2 max-w-[70ch] leading-relaxed ${
                        b.vivo ? "text-[var(--tiza)]" : "text-[var(--niebla)]"
                      }`}
                    >
                      {b.v}
                    </p>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </Escena>

      <Escena
        n="02"
        rotulo="Also built"
        fondo
        titulo={
          <>
            Work without a page of <em>its own</em>.
          </>
        }
        bajada="Foundations, schools, clinical training centres, universities and staffing groups. Named, because a list of verifiable names is worth more than a long case study nobody can check."
      >
        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {otros.map((o, i) => (
            <div
              key={o.c}
              className="rounded-2xl border border-white/10 bg-white/[0.02] p-5"
              data-motion
              style={{ ["--retardo" as string]: `${Math.min(i, 5) * 55}ms` }}
            >
              <p className="font-bold text-[var(--tiza)]">{o.c}</p>
              <p className="mt-2 text-[14.5px] leading-relaxed text-[var(--niebla)]">{o.q}</p>
            </div>
          ))}
        </div>
      </Escena>

      <Escena
        n="03"
        rotulo="Built by the studio"
        titulo={
          <>
            The pieces we built <em>for ourselves</em>.
          </>
        }
        bajada="Not every instrument arrives through a brief. Some we built because the problem kept appearing and nothing on the market answered it — and they are now what a client's budget starts from instead of paying to develop."
      >
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {[
            {
              t: "Multiplayer trade simulation",
              d: "Four roles — customs, carrier, shipping line, importer — and a container that does not move until the paperwork reconciles. Real bills of lading, real customs declarations, our own engine in the browser. The scenario is data, so another domain is a configuration rather than a rebuild.",
            },
            {
              t: "Eight game mechanics",
              d: "Wheel, memory, quiz show, word search, concept ring, drag and drop, decision tree and floor-plan placement. Already built and tested, so a client's budget goes into adapting their content instead of developing an engine.",
            },
            {
              t: "A SCORM test harness",
              d: "The course on one side, the live SCORM conversation on the other — every call, in order. It is how we prove tracking works before a package reaches your platform, and how we debug one your LMS is rejecting.",
            },
          ].map((p, i) => (
            <div
              key={p.t}
              className="rounded-2xl border border-white/10 bg-[var(--sala-2)] p-6"
              data-motion
              style={{ ["--retardo" as string]: `${i * 80}ms` }}
            >
              <h3 className="text-[1.15rem] font-bold tracking-[-0.022em] text-[var(--tiza)]">{p.t}</h3>
              <p className="mt-3 text-[14.5px] leading-relaxed text-[var(--niebla)]">{p.d}</p>
            </div>
          ))}
        </div>
      </Escena>

      <CTASection
        title="Your problem does not have to look like these."
        description="It has to be a behaviour that is costing you something. Bring that to the call and we will tell you honestly whether an experience is the right answer to it."
        primaryCTA="Book the diagnosis call"
        secondaryCTA="See how we work"
        secondaryHref="/services"
      />
    </div>
  );
}

import Link from "next/link";
import Reveal from "@/components/studio/Reveal";
import LabSteps, { type Paso } from "@/components/studio/LabSteps";
import ExperienceLab, { type Pieza } from "@/components/studio/ExperienceLab";

/* ═══════════════════════════════════════════════════════════════════════════
   HOME · Learning Experience Studio
   ───────────────────────────────────────────────────────────────────────────
   La versión anterior vendía producción: "mándanos tu PPT y te devolvemos un
   curso SCORM", con precio por curso y comparación contra agencias y
   freelancers. Ese pitch tiene un problema de fondo: producir contenido se está
   commoditizando, y competir por ser más rápido y más barato es competirle a
   una herramienta que el cliente ya tiene abierta en otra pestaña.

   Lo que no se commoditiza es decidir QUÉ EXPERIENCIA hace que alguien cambie
   cómo trabaja. Esta página vende eso. Tres decisiones la ordenan:

   1. La unidad es la intervención, no el curso: Problema → Experiencia →
      Resultado. La escena 01 es literalmente ese contraste.
   2. El producto se muestra corriendo. Seis construcciones reales se abren y
      funcionan dentro de la página. Una página que vende experiencias no puede
      pedir que le crean.
   3. El formato nunca es el input. El Lab decide el formato recién en el paso
      03, después de diagnosticar — y la página lo dice en vez de listar
      servicios por herramienta.

   La oferta completa vive en VPM/Ewaffle/learning-experience-studio.md.
   ═══════════════════════════════════════════════════════════════════════════ */

export const metadata = {
  title: "Learning Experience Studio",
  description:
    "We design learning interventions, not courses. Simulations, narrative, games and AI-built experiences — delivered running, in your LMS or in ours.",
};

const escenas = [
  { id: "start", n: "00", t: "Start" },
  { id: "shift", n: "01", t: "The shift" },
  { id: "lab", n: "02", t: "The Lab" },
  { id: "experiences", n: "03", t: "Experiences" },
  { id: "ecosystem", n: "04", t: "Delivery" },
  { id: "work", n: "05", t: "Work with us" },
];

/* El contraste que ordena toda la posición. A la izquierda el encargo que
   llega; a la derecha el mismo caso reescrito como intervención. El ejemplo es
   uno solo y concreto a propósito: dos columnas de abstracciones no convencen
   a nadie. */
const contraste = [
  {
    k: "The brief",
    viejo: "“Turn these 40 slides into an e-learning course.”",
    nuevo: "“Our crews sign off on fall-arrest permits without checking the anchor point.”",
  },
  {
    k: "The unit",
    viejo: "A course. Priced per minute of content.",
    nuevo: "An intervention. Priced by the behaviour it has to move.",
  },
  {
    k: "The design question",
    viejo: "What content do we need to cover?",
    nuevo: "What does this person have to be able to do on Monday?",
  },
  {
    k: "What they do",
    viejo: "Watch, read, click Next, pass a quiz.",
    nuevo: "Decide under pressure, get it wrong, see the consequence, try again.",
  },
  {
    k: "The deliverable",
    viejo: "A SCORM zip. Where you put it is your problem.",
    nuevo: "The experience running where your people already are.",
  },
  {
    k: "Success looks like",
    viejo: "94% completion rate.",
    nuevo: "Anchor-point checks in the field audit, before and after.",
  },
];

const pasos: Paso[] = [
  {
    n: "01",
    k: "diagnose",
    t: "Diagnose",
    d: "We start in the job, not in the content. What is actually happening on the floor, who does it, what makes the wrong choice the easy one, and what evidence already exists that would tell us if it changed.",
    sale: "The behaviour to move, written as something observable — and the measure we will hold ourselves to.",
  },
  {
    n: "02",
    k: "design",
    t: "Design the experience",
    d: "We map what the person decides, where they are allowed to be wrong, and how the environment answers back. This is instructional design done as system design, not as a slide outline.",
    sale: "A breadboard of the experience: the moments, the choices and the consequences.",
  },
  {
    n: "03",
    k: "prototype",
    t: "Prototype, and put it in real hands",
    d: "A working piece, not a storyboard, tested with five people from the actual audience. This is the step that separates a studio from an agency: it turns “I like it / I don’t” into “it worked / it didn’t”, while changing course is still cheap.",
    sale: "A playable prototype and what five real users did with it — including where they got stuck.",
  },
  {
    n: "04",
    k: "build",
    t: "Build",
    d: "Full production, with AI accelerating the work that should be fast — drafting, structuring, voice, visuals — and a human reviewing every piece before it ships. The AI moves the floor, it does not make the decisions.",
    sale: "The complete experience, in the format the diagnosis chose. Never the format you asked for by name.",
  },
  {
    n: "05",
    k: "measure",
    t: "Deploy and measure",
    d: "Installed where your people already are — your LMS, a link, WhatsApp, ours — and measured against the evidence we agreed on in step 01, not against completion rates.",
    sale: "The experience live, and an honest read on whether the behaviour moved.",
  },
];

const piezas: Pieza[] = [
  {
    id: "sim",
    etiqueta: "Multiplayer simulation",
    titulo: "The whole operation, before the real one",
    beneficio:
      "Four people log in as customs, carrier, shipping line and importer, and the container does not move until the paperwork actually reconciles. Getting it wrong costs nothing here and a great deal at the port.",
    detalle: [
      "Coordination between roles is the competence being trained.",
      "Real trade documents: B/L, commercial invoice, customs declaration.",
      "Runs in the browser. Our own engine, no per-seat platform licence.",
    ],
    img: "/experiences/comex.webp",
    alt: "Port at dusk with cranes and container ships, and the four simulator roles listed below",
    modo: "video",
    src: "https://tefi.villelab.com/comex-live-explainer.mp4",
    poster: "/experiences/comex.webp",
    nota: "Narrated walkthrough",
  },
  {
    id: "judgement",
    etiqueta: "Branching narrative",
    titulo: "For the topics with no clean answer",
    beneficio:
      "Ethics, safeguarding, autonomy, prevention. The goal is not that they remember the policy — it is that they hold a line when nobody is watching. They choose, they see the cost, and they get the reasoning.",
    detalle: [
      "Built on the real dilemmas of the job, not textbook cases.",
      "Every option has a defensible cost, so there is nothing to game.",
    ],
    img: "/experiences/arbol.webp",
    alt: "Decision-making course interface with a 24-lesson index and the first lesson open",
    modo: "iframe",
    src: "https://ewaffle.cl/demos/los-heroes-decidir-mas-cerca",
    nota: "Caja Los Héroes · 24 lessons",
  },
  {
    id: "games",
    etiqueta: "Game mechanics",
    titulo: "Practice that people finish",
    beneficio:
      "Eight mechanics already built and tested, configured with your concepts. Your budget goes into adapting your content, not into developing an engine — and people practise the material instead of reading it.",
    detalle: [
      "No grade sent to the LMS and unlimited retries: practice without fear of failing.",
      "Wheel, memory, quiz show, word search, concept ring, drag and drop, decision tree, floor-plan placement.",
    ],
    img: "/experiences/juegos.webp",
    alt: "Word-search activity inside a course, with clues alongside and a score counter",
    modo: "iframe",
    src: "https://ewaffle.cl/demos/juegos-demo",
    nota: "Four mechanics chained as a real course",
  },
  {
    id: "spatial",
    etiqueta: "Spatial learning",
    titulo: "Know the plant before the first shift",
    beneficio:
      "When the physical space is part of what has to be learned, describing it does not work. They place each zone, its function and its risk — and the on-site induction gets shorter because they arrive oriented.",
    detalle: [
      "Pairs with 360 walkthroughs when the real environment matters.",
      "Works on a phone: every zone is a touch target, no dragging.",
    ],
    img: "/experiences/plano.webp",
    alt: "Floor-plan activity with eight unlabelled zones to place",
    modo: "iframe",
    src: "https://ewaffle.cl/demos/hotspot-plano-prototipo",
    nota: "Eight zones of a real venue",
  },
  {
    id: "guides",
    etiqueta: "Interactive guides",
    titulo: "The manual nobody opens, rebuilt",
    beneficio:
      "It becomes something people walk through and finish. It opens in a browser, with nothing to install and no account to create — so a new hire can do their induction on day one without waiting on IT for access.",
    detalle: [
      "For induction, procedures and contractor onboarding.",
      "Same experience on phone, tablet and desktop.",
    ],
    img: "/experiences/guias.webp",
    alt: "Interactive guide open in a browser with a lesson index and progress bar",
    modo: "iframe",
    src: "https://ewaffle.cl/demos/buffalo-induccion",
    nota: "Three lessons with video and a closing check",
  },
  {
    id: "scorm",
    etiqueta: "SCORM, verified",
    titulo: "We can show you what your LMS receives",
    beneficio:
      "Most vendors hand over a zip and hope. This is our test harness: the course on the left, the live SCORM conversation on the right — every call, in order. It is how we prove tracking works before it reaches your platform.",
    detalle: [
      "SCORM 1.2, SCORM 2004 and xAPI.",
      "Also how we debug a package that a client LMS is rejecting.",
    ],
    img: "/experiences/lms.webp",
    alt: "LMS simulator with a course on the left and a console logging SCORM calls on the right",
    modo: "iframe",
    src: "https://ewaffle.cl/demos/lms-sim",
    nota: "SCORM 1.2 with the call log visible",
  },
];

const canales = [
  { c: "SCORM 1.2 / 2004 / xAPI", w: "You have an LMS and need the formal record." },
  { c: "Web link, no account, no install", w: "Contractors, suppliers, people passing through." },
  { c: "WhatsApp", w: "Field crews and shift workers with no corporate email. One lesson per reply." },
  { c: "360 and immersive", w: "The physical space is part of what must be learned." },
  { c: "Multiplayer simulation", w: "Coordination between roles is the competence." },
  { c: "Our LMS, white-labelled", w: "You do not have a platform and do not want to buy one." },
];

const formas = [
  {
    n: "01",
    t: "Lab Sprint",
    p: "One intervention, one behaviour.",
    d: "Diagnosis, design, a prototype tested with real users, production and deployment. The way in — you get to check the method against a real problem before committing a programme to it.",
    b: ["One behaviour, defined and measured", "Playable prototype in week three", "Delivered in the channel the diagnosis chose"],
    destacado: false,
  },
  {
    n: "02",
    t: "Programme",
    p: "A journey as a system of experiences.",
    d: "Several interventions that build on each other, plus the ecosystem around them: platform, tracking, comms and measurement. This is where the included LMS matters most.",
    b: ["Multiple linked interventions", "Learning platform included, under your brand", "Measured on behaviour, not completions"],
    destacado: true,
  },
  {
    n: "03",
    t: "Studio Partner",
    p: "We are your learning experience team.",
    d: "Reserved capacity by the quarter, with diagnosis running continuously instead of project by project. For organisations where the demand does not stop.",
    b: ["Reserved quarterly capacity", "Standing diagnosis, not one-off briefs", "Your roadmap, our studio"],
    destacado: false,
  },
];

export default function Home() {
  return (
    <div className="relative">
      <Reveal />

      {/* ══ Riel de escenas ══ Índice y avance a la vez. Bajo 1280px desaparece:
           en un teléfono el índice compite con el contenido y el header sticky
           ya cumple la función de volver. */}
      <aside className="fixed inset-y-0 left-0 z-40 hidden w-[210px] flex-col gap-7 border-r border-white/10 bg-gradient-to-b from-[rgba(20,17,43,0.9)] to-[rgba(10,8,18,0.9)] px-5 pb-8 pt-28 backdrop-blur-md xl:flex">
        <span className="mono text-[11px] font-semibold text-[var(--tiza)]">Ewaffle</span>
        <ol className="grid gap-0.5">
          {escenas.map((e) => (
            <li key={e.id}>
              <a
                href={`#${e.id}`}
                className="-ml-2.5 flex items-baseline gap-2.5 rounded-lg px-2.5 py-2 text-[var(--niebla)] transition-colors hover:bg-white/5 hover:text-[var(--tiza)]"
              >
                <span className="mono text-[11px] opacity-55">{e.n}</span>
                <span className="text-[14.5px] font-medium">{e.t}</span>
              </a>
            </li>
          ))}
        </ol>
        <p className="mono mt-auto text-[10.5px] leading-relaxed text-[var(--niebla)]">
          Learning
          <br />
          Experience
          <br />
          Studio
        </p>
      </aside>

      <div className="xl:ml-[210px]">
        {/* ══ 00 · Start ══════════════════════════════════════════════════ */}
        <section
          id="start"
          className="relative isolate flex min-h-[min(100vh,900px)] flex-col justify-center overflow-hidden px-5 py-24 sm:px-10 lg:px-14"
        >
          <div className="absolute inset-0 -z-10" aria-hidden="true">
            {/* El fotograma del puerto va desenfocado: trae el título del
                simulador quemado encima y nítido competiría con el titular. Lo
                que aporta es la luz, no sus palabras. */}
            <img
              src="/experiences/sala.webp"
              alt=""
              className="h-full w-full scale-[1.14] object-cover object-[50%_46%] opacity-50 blur-[22px] saturate-[1.15]"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,8,18,0.34)_0%,rgba(10,8,18,0.72)_52%,#0a0812_97%),radial-gradient(115%_85%_at_16%_74%,rgba(10,8,18,0.88),transparent_64%)]" />
          </div>

          <div className="mx-auto grid w-full max-w-[1340px] items-center gap-10 lg:grid-cols-[minmax(0,1.24fr)_minmax(0,0.76fr)] lg:gap-14">
            <div className="min-w-0">
              <p className="claqueta" data-motion>
                <span className="claqueta__punto" />
                Ewaffle · Learning intervention design
              </p>
              <h1 className="titular mt-5 lg:!text-[clamp(2.5rem,3.5vw,3.35rem)]" data-motion style={{ ["--retardo" as string]: "90ms" }}>
                Learning Experience
                <br />
                <em>Studio</em>
              </h1>
              <p
                className="mt-6 max-w-[60ch] text-[clamp(1.05rem,1.7vw,1.28rem)] leading-relaxed text-[var(--niebla)]"
                data-motion
                style={{ ["--retardo" as string]: "180ms" }}
              >
                You don&apos;t have a content problem. You have a behaviour that isn&apos;t changing. We
                work out what your team has to be able to do, design the experience that gets them
                there — simulation, narrative, game, immersive, whatever the problem actually calls
                for — and deliver it running. In your LMS, or in ours.
              </p>

              <div className="mt-8 flex flex-wrap gap-3" data-motion style={{ ["--retardo" as string]: "260ms" }}>
                <a
                  href="#shift"
                  className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-full bg-[var(--rosa)] px-7 text-base font-semibold text-white shadow-[0_14px_40px_-14px_rgba(253,90,147,0.85)] transition-transform duration-200 hover:-translate-y-0.5"
                >
                  How we work
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2.1} strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 5v14M19 12l-7 7-7-7" />
                  </svg>
                </a>
                <Link
                  href="/book-a-call"
                  className="inline-flex min-h-[52px] items-center justify-center rounded-full border border-white/20 bg-white/5 px-7 text-base font-semibold text-[var(--tiza)] transition-transform duration-200 hover:-translate-y-0.5 hover:border-white/40"
                >
                  Book a call
                </Link>
              </div>

              <dl
                className="mt-10 flex flex-wrap gap-x-10 gap-y-3 border-t border-white/10 pt-6"
                data-motion
                style={{ ["--retardo" as string]: "340ms" }}
              >
                {[
                  ["Unit of work", "1 intervention"],
                  ["Prototype in real hands", "Week 3"],
                  ["Learning platform", "Included"],
                ].map(([k, v]) => (
                  <div key={k} className="flex items-baseline gap-2.5">
                    <dt className="mono text-[10.5px] text-[var(--niebla)]">{k}</dt>
                    <dd className="text-[1.35rem] font-bold tracking-[-0.02em] tabular-nums">{v}</dd>
                  </div>
                ))}
              </dl>
            </div>

            {/* Pared de pantallas: capturas de construcciones reales. Es lo mismo
                que hicimos en el catálogo — una portada que promete experiencias
                y no muestra ni un pixel de experiencia se lee como agencia. */}
            <div className="relative hidden h-[400px] min-w-0 lg:block" aria-hidden="true" data-motion style={{ ["--retardo" as string]: "200ms" }}>
              <figure className="absolute right-[3%] bottom-0 z-[1] w-[55%] -rotate-[2.4deg] overflow-hidden rounded-[13px] border border-white/20 bg-[var(--sala-2)] shadow-[0_36px_90px_-28px_rgba(0,0,0,0.95)]">
                <span className="flex items-center gap-1.5 border-b border-white/10 bg-white/[0.06] px-2.5 py-2">
                  {[0, 1, 2].map((i) => (
                    <i key={i} className="h-1.5 w-1.5 rounded-full bg-white/25" />
                  ))}
                </span>
                <img src="/experiences/terreno.webp" alt="" className="block w-full" />
              </figure>
              <figure className="absolute right-0 top-0 z-[2] w-[52%] rotate-[2.2deg] overflow-hidden rounded-[13px] border border-white/20 bg-[var(--sala-2)] shadow-[0_36px_90px_-28px_rgba(0,0,0,0.95)]">
                <span className="flex items-center gap-1.5 border-b border-white/10 bg-white/[0.06] px-2.5 py-2">
                  {[0, 1, 2].map((i) => (
                    <i key={i} className="h-1.5 w-1.5 rounded-full bg-white/25" />
                  ))}
                </span>
                <img src="/experiences/arbol.webp" alt="" className="block w-full" />
              </figure>
              <figure className="absolute left-[2%] top-[16%] z-[3] w-[76%] overflow-hidden rounded-[13px] border border-white/20 bg-[var(--sala-2)] shadow-[0_36px_90px_-28px_rgba(0,0,0,0.95)]">
                <span className="flex items-center gap-1.5 border-b border-white/10 bg-white/[0.06] px-2.5 py-2">
                  {[0, 1, 2].map((i) => (
                    <i key={i} className="h-1.5 w-1.5 rounded-full bg-white/25" />
                  ))}
                  <em className="mono ml-1.5 not-italic text-[9px] text-[var(--niebla)]">running in the browser</em>
                </span>
                <img src="/experiences/juegos.webp" alt="" className="block w-full" />
              </figure>
            </div>
          </div>
        </section>

        {/* ══ 01 · The shift ═════════════════════════════════════════════ */}
        <section id="shift" className="border-t border-white/10 px-5 py-24 sm:px-10 lg:px-14 lg:py-32">
          <div className="mx-auto max-w-[1180px]">
            <p className="claqueta" data-motion>01 · The shift</p>
            <h2 className="rubro mt-5" data-motion style={{ ["--retardo" as string]: "80ms" }}>
              Content and courses are the old unit.
              <br />
              <em>Problem, experience, result</em> is the new one.
            </h2>
            <p className="mt-5 max-w-[66ch] text-[var(--niebla)]" data-motion style={{ ["--retardo" as string]: "140ms" }}>
              Producing content is being commoditised — your team can generate a passable course with
              the tools they already have open. What isn&apos;t commoditised is working out which
              experience actually changes how someone works. That&apos;s the job we do, and it starts by
              refusing to accept a brief written as a content list.
            </p>

            <div className="mt-12 overflow-hidden rounded-2xl border border-white/10" data-motion style={{ ["--retardo" as string]: "180ms" }}>
              <div className="grid grid-cols-1 md:grid-cols-[190px_1fr_1fr]">
                <div className="hidden md:block" />
                <div className="border-b border-white/10 bg-white/[0.02] px-5 py-4 md:border-l">
                  <p className="mono text-[10.5px] text-[var(--niebla)]">The brief we get</p>
                </div>
                <div className="border-b border-l border-white/10 bg-[rgba(255,177,72,0.06)] px-5 py-4">
                  <p className="mono text-[10.5px] text-[var(--haz)]">The brief we write back</p>
                </div>

                {contraste.map((f) => (
                  <div key={f.k} className="contents">
                    <div className="border-b border-white/10 px-5 py-4">
                      <p className="mono text-[10.5px] text-[var(--niebla)]">{f.k}</p>
                    </div>
                    <div className="border-b border-white/10 px-5 py-4 md:border-l">
                      <p className="text-[15px] leading-relaxed text-[var(--niebla)]">{f.viejo}</p>
                    </div>
                    <div className="border-b border-l border-white/10 bg-[rgba(255,177,72,0.04)] px-5 py-4">
                      <p className="text-[15px] font-medium leading-relaxed text-[var(--tiza)]">{f.nuevo}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <p className="mt-8 max-w-[66ch] text-[var(--niebla)]" data-motion>
              <strong className="text-[var(--tiza)]">The format is never the input.</strong>{" "}
              Nobody
              should be buying &ldquo;a Storyline module&rdquo; or &ldquo;a 360 video&rdquo;. The format is the
              conclusion of the diagnosis — and if the conclusion is that a one-page job aid solves
              it, that&apos;s what we&apos;ll tell you, even though it&apos;s the smallest invoice in the room.
            </p>
          </div>
        </section>

        {/* ══ 02 · The Lab ═══════════════════════════════════════════════ */}
        <section id="lab" className="border-t border-white/10 px-5 py-24 sm:px-10 lg:px-14 lg:py-32">
          <div className="mx-auto max-w-[1180px]">
            <p className="claqueta" data-motion>02 · The Lab</p>
            <h2 className="rubro mt-5" data-motion style={{ ["--retardo" as string]: "80ms" }}>
              Five steps.
              <br />
              <em>The format is chosen in step three.</em>
            </h2>
            <p className="mt-5 max-w-[66ch] text-[var(--niebla)]" data-motion style={{ ["--retardo" as string]: "140ms" }}>
              We work like a lab, not a production line: diagnose, design, prototype, test with real
              people, then build. Step three is where you find out whether this works, while changing
              direction is still cheap.
            </p>

            <div className="mt-10" data-motion style={{ ["--retardo" as string]: "180ms" }}>
              <LabSteps pasos={pasos} />
            </div>
          </div>
        </section>

        {/* ══ 03 · Experiences ═══════════════════════════════════════════ */}
        <section id="experiences" className="border-t border-white/10 px-5 py-24 sm:px-10 lg:px-14 lg:py-32">
          <div className="mx-auto max-w-[1320px]">
            <p className="claqueta" data-motion>03 · Experiences</p>
            <h2 className="rubro mt-5" data-motion style={{ ["--retardo" as string]: "80ms" }}>
              What we build,
              <br />
              <em>running right here.</em>
            </h2>
            <p className="mt-5 max-w-[68ch] text-[var(--niebla)]" data-motion style={{ ["--retardo" as string]: "140ms" }}>
              These are real client builds — the same files their people received — and they open and
              work without leaving this page. A studio that sells experiences shouldn&apos;t be asking you
              to take its word for it.
            </p>

            <div className="mt-10">
              <ExperienceLab piezas={piezas} />
            </div>
          </div>
        </section>

        {/* ══ 04 · Delivery ══════════════════════════════════════════════ */}
        <section id="ecosystem" className="border-t border-white/10 px-5 py-24 sm:px-10 lg:px-14 lg:py-32">
          <div className="mx-auto max-w-[1180px]">
            <p className="claqueta" data-motion>04 · Delivery</p>
            <h2 className="rubro mt-5" data-motion style={{ ["--retardo" as string]: "80ms" }}>
              SCORM, and well beyond it.
            </h2>
            <p className="mt-5 max-w-[66ch] text-[var(--niebla)]" data-motion style={{ ["--retardo" as string]: "140ms" }}>
              The deliverable isn&apos;t a file, it&apos;s the experience working where your people already
              are. Which channel is right isn&apos;t a preference — it&apos;s the answer to &ldquo;how does this
              reach a crew member who doesn&apos;t have a computer?&rdquo;
            </p>

            <div className="mt-10 overflow-hidden rounded-2xl border border-white/10 bg-[var(--sala-2)]" data-motion style={{ ["--retardo" as string]: "180ms" }}>
              {canales.map((c) => (
                <div
                  key={c.c}
                  className="grid items-baseline gap-2 border-b border-white/10 px-6 py-4 last:border-b-0 md:grid-cols-[300px_1fr] md:gap-6"
                >
                  <p className="font-semibold tracking-[-0.015em] text-[var(--tiza)]">{c.c}</p>
                  <p className="text-[15px] text-[var(--niebla)]">{c.w}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-2xl border border-[rgba(255,177,72,0.25)] bg-[rgba(255,177,72,0.07)] px-6 py-5" data-motion>
              <p className="mono text-[10.5px] text-[var(--haz)]">The one most studios skip</p>
              <p className="mt-2 max-w-[70ch] text-[var(--tiza)]">
                <strong>You don&apos;t need to own an LMS.</strong>{" "}
                Most studios hand over a zip and leave
                &ldquo;where does this live?&rdquo; as your problem. Ours comes with the experience — white-labelled,
                no per-seat licence. If you already have a platform, we deliver into it instead.
              </p>
            </div>
          </div>
        </section>

        {/* ══ 05 · Work with us ══════════════════════════════════════════ */}
        <section id="work" className="border-t border-white/10 px-5 py-24 sm:px-10 lg:px-14 lg:py-32">
          <div className="mx-auto max-w-[1180px]">
            <p className="claqueta" data-motion>05 · Work with us</p>
            <h2 className="rubro mt-5" data-motion style={{ ["--retardo" as string]: "80ms" }}>
              Three ways in.
            </h2>
            <p className="mt-5 max-w-[66ch] text-[var(--niebla)]" data-motion style={{ ["--retardo" as string]: "140ms" }}>
              Scoped by the problem you&apos;re solving, not by how many courses come out the other end.
            </p>

            <div className="mt-10 grid gap-4 md:grid-cols-3">
              {formas.map((f, i) => (
                <article
                  key={f.t}
                  data-motion
                  style={{ ["--retardo" as string]: `${i * 80}ms` }}
                  className={`flex flex-col gap-3 rounded-2xl border bg-[var(--sala-2)] p-6 ${
                    f.destacado ? "border-[rgba(255,177,72,0.5)]" : "border-white/10"
                  }`}
                >
                  <span className="mono text-[11px] text-[var(--haz)]">{f.n}</span>
                  <h3 className="text-[1.3rem] font-bold tracking-[-0.024em] text-[var(--tiza)]">{f.t}</h3>
                  <p className="font-medium text-[var(--tiza)]">{f.p}</p>
                  <p className="text-[14.8px] leading-[1.58] text-[var(--niebla)]">{f.d}</p>
                  <ul className="lista-disco mt-1 grid gap-1.5 pl-[17px] text-[13.8px] text-[var(--niebla)] marker:text-[var(--haz)]">
                    {f.b.map((x) => (
                      <li key={x}>{x}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>

            <div className="mt-12 flex flex-wrap gap-3" data-motion>
              <Link
                href="/book-a-call"
                className="inline-flex min-h-[52px] items-center justify-center rounded-full bg-[var(--rosa)] px-7 text-base font-semibold text-white shadow-[0_14px_40px_-14px_rgba(253,90,147,0.85)] transition-transform duration-200 hover:-translate-y-0.5"
              >
                Bring us a problem
              </Link>
              <Link
                href="/pricing"
                className="inline-flex min-h-[52px] items-center justify-center rounded-full border border-white/20 bg-white/5 px-7 text-base font-semibold text-[var(--tiza)] transition-transform duration-200 hover:-translate-y-0.5 hover:border-white/40"
              >
                See what it costs
              </Link>
            </div>

            <p className="mono mt-14 flex flex-wrap items-center gap-x-4 gap-y-1.5 border-t border-white/10 pt-6 text-[11.5px] text-[var(--niebla)]">
              <span>Learning experience design</span>
              <span aria-hidden="true">·</span>
              <span>Simulation · Narrative · Games · Immersive · AI</span>
              <span aria-hidden="true">·</span>
              <span className="text-[var(--haz)]">e-waffle.com</span>
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}

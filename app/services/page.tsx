import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/studio/Reveal";
import PageHero from "@/components/studio/PageHero";
import Escena from "@/components/studio/Escena";
import Logos from "@/components/studio/Logos";
import CTASection from "@/components/CTASection";

/* ═══════════════════════════════════════════════════════════════════════════
   QUÉ HACEMOS
   ───────────────────────────────────────────────────────────────────────────
   Antes era un menú de herramientas —"SCORM production", "Gamification design",
   "LMS solutions"— cada una con su lista de features y su claim de conversión.
   Ese formato le pide al cliente que elija el formato, que es justo la decisión
   que todavía no puede tomar.

   Acá cada instrumento se define por la PREGUNTA que responde, y arriba de todo
   va la regla: el formato lo concluye el diagnóstico. Salieron tres frases que
   no podíamos defender si alguien preguntaba de dónde salen: "40% más
   completitud", "compatible con 50+ LMS" y "50% más rápido".
   ═══════════════════════════════════════════════════════════════════════════ */

export const metadata: Metadata = {
  title: "Qué hacemos",
  description:
    "Simuladores multijugador, narrativa ramificada, ocho mecánicas de juego, 360, video con IA, guías interactivas, WhatsApp y LMS incluido. Cuál te sirve lo decide el diagnóstico, no el encargo.",
};

const instrumental = [
  {
    n: "01",
    t: "Simulador multijugador",
    cuando: "Cuando la competencia es coordinarse entre roles.",
    d: "Varias personas entran como los roles que tienen que ponerse de acuerdo en la vida real —aduana, transportista, naviera, importador— y nada avanza hasta que lo que cargan cuadra de verdad. La fricción entre roles es la lección, y esa no se ensaya solo.",
    hecho: [
      "Motor propio, corriendo en el navegador. Sin licencia por usuario.",
      "Documentos reales del oficio: B/L, factura comercial, declaración de ingreso.",
      "El escenario es data, así que otro rubro es una configuración y no un desarrollo nuevo.",
    ],
    demo: null,
  },
  {
    n: "02",
    t: "Narrativa ramificada",
    cuando: "Cuando el tema no tiene respuesta limpia y lo que se juega es el criterio.",
    d: "Ética, buen trato, autonomía, prevención. Que se acuerden del protocolo no es el punto: el punto es que sostengan una línea cuando nadie está mirando. Eligen, ven lo que costó esa elección, y recién después reciben el razonamiento.",
    hecho: [
      "Construida sobre los dilemas reales del puesto, no sobre casos de manual.",
      "Cada opción tiene un costo defendible, así que no hay nada que adivinar.",
    ],
    demo: {
      href: "https://ewaffle.cl/demos/los-heroes-decidir-mas-cerca",
      label: "Ábrela · 24 lecciones",
    },
  },
  {
    n: "03",
    t: "Mecánicas de juego",
    cuando: "Cuando la materia necesita repetición y nadie la está repitiendo.",
    d: "Ocho mecánicas ya construidas y probadas, configuradas con tus conceptos. Tu presupuesto se va en adaptar tu contenido y no en desarrollar un motor — y la gente practica la materia en vez de leerla.",
    hecho: [
      "Ruleta, memorice, quiz show, sopa de letras, anillo de conceptos, arrastrar y soltar, árbol de decisión y ubicar en plano.",
      "Sin nota enviada al LMS y con reintentos ilimitados: se practica sin miedo a reprobar.",
    ],
    demo: {
      href: "https://ewaffle.cl/demos/juegos-demo",
      label: "Abre cuatro, encadenadas",
    },
  },
  {
    n: "04",
    t: "Aprendizaje espacial y 360",
    cuando: "Cuando el espacio físico es parte de lo que hay que aprender.",
    d: "Cuando la planta, el pabellón o el recinto es la cosa, describirlo no funciona. Ubican cada zona, su función y su riesgo antes de pisar el lugar — y la inducción en terreno se acorta porque llegan orientados.",
    hecho: [
      "Ubicar en plano se combina con recorridos 360 del sitio real.",
      "Funciona en el teléfono: cada zona es un toque, nada que arrastrar.",
    ],
    demo: {
      href: "https://ewaffle.cl/demos/hotspot-plano-prototipo",
      label: "Abre un plano real",
    },
  },
  {
    n: "05",
    t: "Video y voz con IA",
    cuando: "Cuando explicar es de verdad el cuello de botella.",
    d: "Guion, motion, voz y gráfica producidos con IA en el proceso, y después revisados pieza por pieza por una persona antes de que salga. Vuelve la explicación lo bastante barata como para que deje de comerse el presupuesto que necesita la práctica.",
    hecho: [
      "Guionizado desde tu material y tu terminología, no desde una plantilla genérica.",
      "También producción en terreno, cuando lo que hay que ver es el lugar de trabajo real.",
      "Una persona firma cada pieza. La IA mueve el piso, no toma las decisiones.",
    ],
    demo: null,
  },
  {
    n: "06",
    t: "Guías interactivas",
    cuando: "Cuando existe un manual y nadie lo abre.",
    d: "El procedimiento pasa a ser algo que la gente recorre y termina. Se abre en el navegador sin instalar nada y sin crear cuenta, así alguien que entra hoy hace su inducción el día uno sin esperar que TI le dé acceso.",
    hecho: [
      "Para inducción, procedimientos y onboarding de contratistas.",
      "La misma experiencia en teléfono, tablet y computador.",
    ],
    demo: {
      href: "https://ewaffle.cl/demos/buffalo-induccion",
      label: "Abre una inducción real",
    },
  },
  {
    n: "07",
    t: "WhatsApp",
    cuando: "Cuando tu gente no tiene computador ni correo corporativo.",
    d: "Una lección por respuesta, en la aplicación que ya tienen abierta. Cuadrillas en terreno, turnos, conductores, contratistas — la población que todo despliegue de LMS pierde en silencio. Motor propio, no una lista de difusión.",
    hecho: [
      "Avanza con su respuesta, así que el ritmo es de ellos.",
      "Nada que instalar, ninguna cuenta que crear, ninguna capacitación sobre la herramienta.",
    ],
    demo: null,
  },
  {
    n: "08",
    t: "El LMS, incluido",
    cuando: "Cuando no tienes plataforma y no quieres comprar una.",
    d: "La mayoría entrega un ZIP y dónde ponerlo es tu problema. El nuestro viene con la experiencia, con tu marca y sin licencia por usuario. Y si ya tienes LMS, entregamos ahí — y te mostramos exactamente qué va a recibir.",
    hecho: [
      "Con tu marca: tu logo, tu paleta, tu dominio.",
      "SCORM 1.2, SCORM 2004 y xAPI, verificados contra un registro de llamadas en vivo antes de entregarte nada.",
    ],
    demo: {
      href: "https://ewaffle.cl/demos/lms-sim",
      label: "Mira las llamadas SCORM en vivo",
    },
  },
];

const iaHace = [
  "Redactar y reestructurar tu material en una primera versión.",
  "Voz, motion y gráfica a un costo que antes era prohibitivo.",
  "Variantes: traducciones, cortes por rol, escenarios alternativos.",
  "La mitad tediosa de la producción, para que el presupuesto se vaya a la práctica.",
];

const iaNoHace = [
  "Decidir qué conducta amerita una intervención. Eso es el diagnóstico.",
  "Juzgar si un dilema es honesto o si un costo es defendible.",
  "Firmar nada. Una persona revisa cada pieza antes de que salga.",
  "Reemplazar la prueba con cinco usuarios reales. Eso no lo predice nada.",
];

const canales = [
  { c: "SCORM 1.2 / 2004 / xAPI", w: "Tienes LMS y necesitas el registro formal." },
  { c: "Link web, sin cuenta ni instalación", w: "Contratistas, proveedores, gente de paso." },
  { c: "WhatsApp", w: "Terreno y turnos, sin correo corporativo." },
  { c: "360 e inmersivo", w: "El espacio físico es parte de lo que hay que aprender." },
  { c: "Simulador multijugador", w: "La coordinación entre roles es la competencia." },
  { c: "Nuestro LMS, con tu marca", w: "No tienes plataforma y no quieres comprar una." },
];

export default function ServicesPage() {
  return (
    <div className="relative">
      <Reveal />

      <PageHero
        claqueta="Ewaffle · Qué hacemos"
        titulo={
          <>
            Ocho cosas que
            <br />
            sabemos <em>construir</em>.
          </>
        }
        bajada="Simuladores, narrativa, juegos, 360, video, guías, WhatsApp y la plataforma. Todas están corriendo hoy en algún cliente. Cuál te sirve a ti no lo eliges del menú: lo concluye el diagnóstico, después de saber qué está fallando y con quién."
        nota="Si el diagnóstico concluye que basta con cambiar una lista de chequeo, te lo vamos a decir — y es una respuesta más barata que cualquier cosa de esta página."
        cta={{ label: "Agenda 45 minutos", href: "/book-a-call" }}
      />

      <Logos nota="Corriendo hoy en" />

      <Escena
        n="01"
        rotulo="La regla"
        titulo={<>El formato no es lo que se encarga.</>}
        bajada="Casi todo encargo llega con el formato ya elegido: un curso, un video, un juego, un LMS. Es un atajo entendible y casi siempre está equivocado, porque el formato es la última decisión y no la primera. Acá se toma en el paso 3, cuando ya sabemos la conducta, la gente y qué vuelve fácil la opción equivocada."
      >
        <div
          className="mt-10 grid gap-4 sm:grid-cols-3"
          data-motion
          style={{ ["--retardo" as string]: "180ms" }}
        >
          {[
            { k: "Lo que nos piden", v: "«Necesitamos un curso gamificado de trabajo en altura.»", nuevo: false },
            { k: "Lo que preguntamos", v: "«¿Quién firma sin revisar, y qué hace que saltárselo sea lo fácil a las 6 de la mañana?»", nuevo: false },
            { k: "En qué termina", v: "Una decisión de dos minutos en el momento de firmar, en el teléfono que ya andan trayendo.", nuevo: true },
          ].map((c) => (
            <div
              key={c.k}
              className={`rounded-2xl border p-6 ${
                c.nuevo
                  ? "border-[rgba(255,177,72,0.35)] bg-[rgba(255,177,72,0.06)]"
                  : "border-white/10 bg-white/[0.02]"
              }`}
            >
              <p className={`mono text-[10.5px] ${c.nuevo ? "text-[var(--haz)]" : "text-[var(--niebla)]"}`}>
                {c.k}
              </p>
              <p className="mt-3 text-[15.5px] leading-relaxed text-[var(--tiza)]">{c.v}</p>
            </div>
          ))}
        </div>
      </Escena>

      <Escena
        n="02"
        rotulo="El instrumental"
        fondo
        titulo={<>Construido y probado, no una lámina de capacidades.</>}
        bajada="Donde hay link, abre la cosa real: sin formulario, sin cuenta y sin una llamada de por medio."
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

              <p className="mono mt-4 text-[10.5px] text-[var(--niebla)]">Cuándo sirve</p>
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
                  className="mono mt-auto inline-flex w-fit items-center gap-2 rounded-full border border-[var(--linea-viva)] px-4 py-2 text-[10.5px] text-[var(--tiza)] transition-colors hover:border-[var(--haz)] hover:text-[var(--haz)]"
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
        rotulo="La IA, en concreto"
        titulo={<>Qué hace la IA acá, y qué <em>no</em>.</>}
        bajada="La IA es la razón por la que un estudio de nuestro tamaño puede construir un simulador multijugador, y también la palabra más sobrevendida del rubro. Así que va el reparto, en los términos en que de verdad trabajamos."
      >
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {[
            { t: "Lo que hace", items: iaHace, vivo: true },
            { t: "Lo que no", items: iaNoHace, vivo: false },
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
        rotulo="Dónde llega"
        fondo
        titulo={<>SCORM, y bastante más allá.</>}
        bajada="Lo que entregamos no es un archivo: es la experiencia funcionando donde ya está tu gente. Cada canal de abajo responde una sola pregunta — cómo le llega esto a alguien que no se sienta frente a un escritorio."
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
          La mayor parte de lo que hunde un despliegue no es pedagógico sino logístico: la gente que
          más lo necesitaba nunca tuvo por dónde entrar.{" "}
          <Link href="/pricing" className="text-[var(--haz)] underline underline-offset-4">
            Las tres formas de trabajar con nosotros
          </Link>{" "}
          resuelven el canal en el diagnóstico. Nunca es un cobro aparte.
        </p>
      </Escena>

      <CTASection
        title="Cuéntanos qué no está pasando en terreno."
        description="Cuarenta y cinco minutos. Tú describes qué está saliendo mal; nosotros te decimos si es un problema de aprendizaje o no — y si no lo es, qué creemos que es."
        primaryCTA="Agenda 45 minutos"
        secondaryCTA="Mira lo que hemos construido"
        secondaryHref="/case-studies"
      />
    </div>
  );
}

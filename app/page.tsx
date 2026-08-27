import Link from "next/link";
import Reveal from "@/components/studio/Reveal";
import LabSteps, { type Paso } from "@/components/studio/LabSteps";
import ExperienceLab, { type Pieza } from "@/components/studio/ExperienceLab";
import Logos from "@/components/studio/Logos";

/* ═══════════════════════════════════════════════════════════════════════════
   HOME · Ewaffle
   ───────────────────────────────────────────────────────────────────────────
   Reescrita el 27-ago-2026. La versión anterior era correcta y no servía: el
   hero decía "Learning Experience Studio" y una bajada sobre conductas que no
   cambian, y el visitante llegaba al final sin saber qué vendemos, a quién ni
   qué gana. Además todos los titulares eran la misma figura —"X. No Y."— y
   todas las secciones el mismo bloque: rótulo mono, titular gigante con una
   palabra en ámbar, párrafo, grilla de tarjetas. Cinco veces. Se lee como algo
   generado, no como algo escrito.

   Lo que cambia:

   - El hero dice las tres cosas, en ese orden: QUÉ hacemos (simuladores,
     juegos, guías, 360, video), PARA QUIÉN (mutuales, universidades e
     institutos, empresas con equipos grandes en terreno) y QUÉ GANAS (cuatro
     beneficios concretos, con visto, no en prosa).
   - Los logos de clientes van justo debajo, no en el pie. Es lo único de la
     página que el visitante no tiene que creernos.
   - Los títulos de sección nombran la cosa —Qué hacemos, Cómo trabajamos,
     Míralo funcionando, Dónde llega, Cuánto cuesta— en vez de ser frases.
   - Español de Chile: el hero nombra clientes chilenos, y un hero en inglés
     que nombra a la ACHS le habla a alguien que no existe. La versión en
     inglés irá en /en cuando haya a quién mostrársela.

   Lo que se mantiene: el sistema visual del catálogo de ewaffle.cl y las seis
   piezas que se abren y CORREN dentro de la página. Eso último es el argumento
   entero: una web que vende experiencias no puede pedir que le crean.

   La oferta completa vive en VPM/Ewaffle/learning-experience-studio.md.
   ═══════════════════════════════════════════════════════════════════════════ */

export const metadata = {
  title: "Capacitación que tu gente sí hace",
  description:
    "Simuladores, juegos, guías interactivas, recorridos 360 y video para mutuales, universidades e institutos, y empresas con equipos grandes en terreno. Te lo entregamos funcionando, en tu LMS o en el nuestro. Prototipo probado en la semana 3.",
};

const escenas = [
  { id: "inicio", n: "00", t: "Inicio" },
  { id: "que-hacemos", n: "01", t: "Qué hacemos" },
  { id: "como", n: "02", t: "Cómo trabajamos" },
  { id: "piezas", n: "03", t: "Míralo funcionando" },
  { id: "entrega", n: "04", t: "Dónde llega" },
  { id: "precio", n: "05", t: "Cuánto cuesta" },
];

/* Los cuatro beneficios del hero. Concretos y comprobables: cada uno se puede
   contrastar contra algo —una semana, una licencia, un canal, un estándar—. Un
   beneficio que no se puede contrastar es una promesa, y de esas ya hay muchas
   en este mercado. */
const beneficios = [
  "Ves un prototipo funcionando en la semana 3, probado con 5 personas de tu equipo",
  "Plataforma incluida, con tu marca y sin licencia por usuario",
  "Llega a quien no tiene computador ni correo: por WhatsApp o un link sin clave",
  "SCORM 1.2, 2004 y xAPI, verificados contra un LMS antes de entregarte nada",
];

/* A quién le sirve esto, con el caso típico de cada uno. La lista sale de la
   base real de clientes, no de un segmento inventado: mutuales, educación
   superior, fundaciones de cuidado, y operaciones con primera línea. */
const paraQuien = [
  {
    t: "Mutuales y prevención",
    d: "Contenido normativo que decenas de empresas adherentes tienen que dictar, y que hoy se lee en vez de practicarse.",
    ej: "ACHS · uso de EPP, Ley Karin, sustancias peligrosas",
  },
  {
    t: "Universidades e institutos",
    d: "Asignaturas y programas diseñados para ser online desde el principio, no clases grabadas con una prueba al final.",
    ej: "AIEP · Duoc UC · UGM · UNIACC · U. Santo Tomás",
  },
  {
    t: "Equipos grandes en terreno",
    d: "Rotación alta, primer empleo, turnos, y una inducción que hoy depende de quién esté ese día para explicarla.",
    ej: "Buffalo Waffles · inducción a la operación",
  },
  {
    t: "Cuidado y atención de personas",
    d: "Temas donde saberse el protocolo no basta: hay que sostener un criterio cuando nadie está mirando.",
    ej: "Caja Los Héroes · Coanil · buen trato y cuidados",
  },
];

/* El contraste que ordena la posición. Se mantiene porque es el argumento, pero
   ahora vive DESPUÉS de que la página ya dijo qué vendemos: antes abría con él y
   le pedía al visitante entender una tesis antes de saber a qué llegó. */
const contraste = [
  {
    k: "El encargo",
    viejo: "«Conviértanme estas 40 láminas en un curso e-learning.»",
    nuevo: "«Mis supervisores firman el permiso de altura sin revisar el anclaje.»",
  },
  {
    k: "Lo que se cobra",
    viejo: "Un curso, cotizado por minuto de contenido.",
    nuevo: "Una intervención, cotizada por la conducta que tiene que mover.",
  },
  {
    k: "La pregunta de diseño",
    viejo: "¿Qué contenidos hay que cubrir?",
    nuevo: "¿Qué tiene que ser capaz de hacer esta persona el lunes?",
  },
  {
    k: "Qué hace la persona",
    viejo: "Mira, lee, aprieta Siguiente, aprueba una prueba.",
    nuevo: "Decide con presión, se equivoca, ve la consecuencia, lo intenta de nuevo.",
  },
  {
    k: "Qué se entrega",
    viejo: "Un ZIP SCORM. Dónde ponerlo es tu problema.",
    nuevo: "La experiencia funcionando donde ya está tu gente.",
  },
  {
    k: "Éxito es",
    viejo: "94% de completitud.",
    nuevo: "Que la revisión del anclaje aparezca en la auditoría en terreno.",
  },
];

const pasos: Paso[] = [
  {
    n: "01",
    k: "diagnostico",
    t: "Diagnóstico",
    d: "Partimos en el puesto de trabajo, no en el contenido. Qué pasa hoy, quién lo hace, qué vuelve fácil la opción equivocada, y qué evidencia ya existe que nos diría si cambió.",
    sale: "La conducta a mover, escrita como algo observable, y la medida con la que nos vas a evaluar.",
  },
  {
    n: "02",
    k: "diseno",
    t: "Diseño de la experiencia",
    d: "Mapeamos qué decide la persona, dónde se le permite equivocarse y cómo le responde el entorno. Es diseño instruccional hecho como diseño de sistema, no como índice de contenidos.",
    sale: "El mapa de la experiencia: los momentos, las decisiones y las consecuencias.",
  },
  {
    n: "03",
    k: "prototipo",
    t: "Prototipo, en manos reales",
    d: "Una pieza que funciona —no un storyboard— probada con cinco personas de tu equipo. Acá se decide el formato definitivo, con evidencia y no con preferencia. Y acá conviene cortar si nada se mueve.",
    sale: "Un prototipo jugable y qué hicieron con él cinco personas de verdad, incluido dónde se trabaron.",
  },
  {
    n: "04",
    k: "produccion",
    t: "Producción",
    d: "La experiencia completa, con IA acelerando lo que debe ser rápido —guion, estructura, voz, gráfica— y una persona revisando pieza por pieza antes de que salga.",
    sale: "La experiencia terminada, en el formato que concluyó el diagnóstico.",
  },
  {
    n: "05",
    k: "medicion",
    t: "Despliegue y medición",
    d: "Instalada donde ya está tu gente —tu LMS, un link, WhatsApp, o la nuestra— y medida contra la evidencia que acordamos en el paso 01, no contra tasas de completitud.",
    sale: "La experiencia viva, y una lectura honesta de si la conducta se movió.",
  },
];

const piezas: Pieza[] = [
  {
    id: "sim",
    etiqueta: "Simulador multijugador",
    titulo: "Toda la operación, antes de la operación real",
    beneficio:
      "Cuatro personas entran como aduana, transportista, naviera e importador, y el contenedor no se mueve hasta que los papeles cuadran de verdad. Equivocarse acá no cuesta nada; en el puerto cuesta muchísimo.",
    detalle: [
      "La coordinación entre roles es la competencia que se entrena.",
      "Documentos reales de comercio exterior: B/L, factura comercial, declaración de ingreso.",
      "Corre en el navegador. Motor propio, sin licencia por usuario.",
    ],
    img: "/experiences/comex.webp",
    alt: "Puerto al atardecer con grúas y portacontenedores, y los cuatro roles del simulador listados abajo",
    modo: "video",
    src: "https://tefi.villelab.com/comex-live-explainer.mp4",
    poster: "/experiences/comex.webp",
    nota: "Recorrido narrado",
  },
  {
    id: "criterio",
    etiqueta: "Narrativa ramificada",
    titulo: "Para los temas que no tienen respuesta limpia",
    beneficio:
      "Ética, buen trato, autonomía, prevención. El objetivo no es que se acuerden del protocolo: es que sostengan un criterio cuando nadie está mirando. Eligen, ven lo que costó, y recién ahí reciben el razonamiento.",
    detalle: [
      "Construida sobre los dilemas reales del puesto, no sobre casos de manual.",
      "Cada opción tiene un costo defendible, así que no hay nada que adivinar.",
    ],
    img: "/experiences/arbol.webp",
    alt: "Interfaz de un curso de toma de decisiones con un índice de 24 lecciones y la primera abierta",
    modo: "iframe",
    src: "https://ewaffle.cl/demos/los-heroes-decidir-mas-cerca",
    nota: "Caja Los Héroes · 24 lecciones",
  },
  {
    id: "juegos",
    etiqueta: "Mecánicas de juego",
    titulo: "Práctica que la gente sí termina",
    beneficio:
      "Ocho mecánicas ya construidas y probadas, configuradas con tus conceptos. Tu presupuesto se va en adaptar tu contenido y no en desarrollar un motor — y la gente practica la materia en vez de leerla.",
    detalle: [
      "Sin nota enviada al LMS y con reintentos ilimitados: se practica sin miedo a reprobar.",
      "Ruleta, memorice, quiz show, sopa de letras, anillo de conceptos, arrastrar y soltar, árbol de decisión, ubicar en plano.",
    ],
    img: "/experiences/juegos.webp",
    alt: "Actividad de sopa de letras dentro de un curso, con las pistas al costado y un contador de puntaje",
    modo: "iframe",
    src: "https://ewaffle.cl/demos/juegos-demo",
    nota: "Cuatro mecánicas encadenadas como un curso real",
  },
  {
    id: "espacio",
    etiqueta: "Aprendizaje espacial",
    titulo: "Conocer la planta antes del primer turno",
    beneficio:
      "Cuando el espacio físico es parte de lo que hay que aprender, describirlo no funciona. Ubican cada zona, su función y su riesgo — y la inducción en terreno se acorta porque llegan orientados.",
    detalle: [
      "Se combina con recorridos 360 cuando el entorno real importa.",
      "Funciona en el teléfono: cada zona es un toque, nada que arrastrar.",
    ],
    img: "/experiences/plano.webp",
    alt: "Actividad de plano con ocho zonas sin rotular para ubicar",
    modo: "iframe",
    src: "https://ewaffle.cl/demos/hotspot-plano-prototipo",
    nota: "Ocho zonas de un recinto real",
  },
  {
    id: "guias",
    etiqueta: "Guías interactivas",
    titulo: "El manual que nadie abre, reconstruido",
    beneficio:
      "Pasa a ser algo que la gente recorre y termina. Se abre en el navegador, sin instalar nada y sin crear cuenta — así alguien que entra hoy hace su inducción el día uno, sin esperar que TI le dé acceso.",
    detalle: [
      "Para inducción, procedimientos y onboarding de contratistas.",
      "La misma experiencia en teléfono, tablet y computador.",
    ],
    img: "/experiences/guias.webp",
    alt: "Guía interactiva abierta en el navegador con índice de lecciones y barra de avance",
    modo: "iframe",
    src: "https://ewaffle.cl/demos/buffalo-induccion",
    nota: "Tres lecciones con video y un cierre",
  },
  {
    id: "scorm",
    etiqueta: "SCORM, verificado",
    titulo: "Te mostramos qué recibe tu LMS",
    beneficio:
      "La mayoría entrega un ZIP y cruza los dedos. Esto es nuestro banco de pruebas: el curso a la izquierda, la conversación SCORM en vivo a la derecha, llamada por llamada. Así comprobamos que el registro funciona antes de que llegue a tu plataforma.",
    detalle: [
      "SCORM 1.2, SCORM 2004 y xAPI.",
      "También es como depuramos un paquete que el LMS de un cliente está rechazando.",
    ],
    img: "/experiences/lms.webp",
    alt: "Simulador de LMS con un curso a la izquierda y una consola registrando llamadas SCORM a la derecha",
    modo: "iframe",
    src: "https://ewaffle.cl/demos/lms-sim",
    nota: "SCORM 1.2 con el registro de llamadas a la vista",
  },
];

const canales = [
  { c: "SCORM 1.2 / 2004 / xAPI", w: "Tienes LMS y necesitas el registro formal." },
  { c: "Link web, sin cuenta ni instalación", w: "Contratistas, proveedores, gente de paso." },
  { c: "WhatsApp", w: "Terreno y turnos, sin correo corporativo. Una lección por respuesta." },
  { c: "360 e inmersivo", w: "El espacio físico es parte de lo que hay que aprender." },
  { c: "Simulador multijugador", w: "La coordinación entre roles es la competencia." },
  { c: "Nuestro LMS, con tu marca", w: "No tienes plataforma y no quieres comprar una." },
];

const formas = [
  {
    n: "01",
    t: "Lab Sprint",
    precio: "USD 3.000 – 5.000",
    p: "Una intervención, una conducta.",
    d: "La puerta de entrada. Eliges el problema que te está costando plata y le corremos el Lab completo. Chico como para probar el método, real como para importar por sí solo.",
    b: ["Una conducta, definida y medida", "Prototipo probado en la semana 3", "Entregado en el canal que eligió el diagnóstico"],
    destacado: false,
  },
  {
    n: "02",
    t: "Programa",
    precio: "USD 8.000 – 15.000",
    p: "Un trayecto como sistema de experiencias.",
    d: "Varias intervenciones que se encadenan, más el ecosistema que las sostiene: plataforma, seguimiento, comunicaciones y medición. Acá es donde el LMS incluido más pesa.",
    b: ["Varias intervenciones encadenadas", "Plataforma incluida, con tu marca", "Medido por conducta, no por completitud"],
    destacado: true,
  },
  {
    n: "03",
    t: "Studio Partner",
    precio: "USD 20.000+",
    p: "Somos tu equipo de experiencias.",
    d: "Capacidad reservada por trimestre, con el diagnóstico corriendo de forma continua en vez de partir de cero con cada encargo. Para cuando la demanda no se detiene.",
    b: ["Capacidad reservada por trimestre", "Diagnóstico permanente, no encargos sueltos", "Tu hoja de ruta, nuestro estudio"],
    destacado: false,
  },
];

export default function Home() {
  return (
    <div className="relative">
      <Reveal />

      {/* Riel de escenas: índice y avance a la vez. Bajo 1280px desaparece —en un
          teléfono compite con el contenido y el header sticky ya cumple. */}
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
          Simuladores
          <br />
          Juegos · 360
          <br />
          Video · LMS
        </p>
      </aside>

      <div className="xl:ml-[210px]">
        {/* ══ 00 · Hero ═══════════════════════════════════════════════════
            Dice tres cosas y en este orden: QUÉ hacemos, PARA QUIÉN, y QUÉ
            GANAS. Los beneficios van con visto y no en prosa porque un hero se
            escanea, no se lee. */}
        <section
          id="inicio"
          className="relative isolate overflow-hidden px-5 pb-16 pt-20 sm:px-10 sm:pt-24 lg:px-14"
        >
          <div className="absolute inset-0 -z-10" aria-hidden="true">
            <img
              src="/experiences/sala.webp"
              alt=""
              className="h-full w-full scale-[1.14] object-cover object-[50%_46%] opacity-40 blur-[26px] saturate-[1.15]"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,8,18,0.42)_0%,rgba(10,8,18,0.78)_52%,#0a0812_97%),radial-gradient(115%_85%_at_16%_74%,rgba(10,8,18,0.9),transparent_64%)]" />
          </div>

          <div className="mx-auto grid w-full max-w-[1340px] items-start gap-12 lg:grid-cols-[minmax(0,1.12fr)_minmax(0,0.88fr)] lg:gap-14">
            <div className="min-w-0">
              <p className="claqueta" data-motion>
                <span className="claqueta__punto" />
                Ewaffle · Estudio de experiencias de aprendizaje
              </p>

              <h1
                className="titular mt-5 lg:!text-[clamp(2.5rem,3.6vw,3.45rem)]"
                data-motion
                style={{ ["--retardo" as string]: "80ms" }}
              >
                Hacemos la capacitación
                <br />
                que tu gente <em>sí hace</em>.
              </h1>

              {/* QUÉ + PARA QUIÉN, en una frase cada uno. */}
              <p
                className="mt-6 max-w-[58ch] text-[clamp(1.05rem,1.6vw,1.24rem)] leading-relaxed text-[var(--niebla)]"
                data-motion
                style={{ ["--retardo" as string]: "150ms" }}
              >
                Simuladores, juegos, guías interactivas, recorridos 360 y video.{" "}
                <span className="text-[var(--tiza)]">
                  Para mutuales, universidades e institutos, y empresas con equipos grandes en
                  terreno.
                </span>{" "}
                Te lo entregamos funcionando: en tu LMS, o en el nuestro, que va incluido.
              </p>

              {/* QUÉ GANAS. Cuatro, todos contrastables contra algo. */}
              <ul
                className="mt-8 grid max-w-[62ch] gap-3"
                data-motion
                style={{ ["--retardo" as string]: "220ms" }}
              >
                {beneficios.map((b) => (
                  <li key={b} className="flex gap-3 text-[15.5px] leading-snug text-[var(--tiza)]">
                    <span
                      aria-hidden="true"
                      className="mt-[3px] flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-full bg-[rgba(253,90,147,0.16)] text-[10px] font-bold text-[var(--rosa)]"
                    >
                      ✓
                    </span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              <div
                className="mt-9 flex flex-wrap gap-3"
                data-motion
                style={{ ["--retardo" as string]: "290ms" }}
              >
                <Link
                  href="/book-a-call"
                  className="inline-flex min-h-[52px] items-center justify-center rounded-full bg-[var(--rosa)] px-7 text-base font-semibold text-white shadow-[0_14px_40px_-14px_rgba(253,90,147,0.85)] transition-transform duration-200 hover:-translate-y-0.5"
                >
                  Agenda 45 minutos
                </Link>
                <a
                  href="#piezas"
                  className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-7 text-base font-semibold text-[var(--tiza)] transition-transform duration-200 hover:-translate-y-0.5 hover:border-white/40"
                >
                  Abre una pieza real
                  <span aria-hidden="true">↓</span>
                </a>
              </div>
            </div>

            {/* Pared de pantallas: capturas de construcciones reales. Una portada
                que promete experiencias y no muestra un pixel se lee como agencia. */}
            <div
              className="relative hidden h-[430px] min-w-0 lg:block"
              aria-hidden="true"
              data-motion
              style={{ ["--retardo" as string]: "200ms" }}
            >
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
                  <em className="mono ml-1.5 not-italic text-[9px] text-[var(--niebla)]">
                    corriendo en el navegador
                  </em>
                </span>
                <img src="/experiences/juegos.webp" alt="" className="block w-full" />
              </figure>
            </div>
          </div>
        </section>

        <Logos nota="Trabajamos con" />

        {/* ══ 01 · Qué hacemos ═══════════════════════════════════════════ */}
        <section id="que-hacemos" className="px-5 py-20 sm:px-10 lg:px-14 lg:py-28">
          <div className="mx-auto max-w-[1180px]">
            <p className="claqueta" data-motion>01 · Qué hacemos</p>
            <h2 className="rubro mt-5" data-motion style={{ ["--retardo" as string]: "80ms" }}>
              Diseñamos y construimos la experiencia completa.
            </h2>
            <p className="mt-5 max-w-[66ch] text-[var(--niebla)]" data-motion style={{ ["--retardo" as string]: "140ms" }}>
              No producimos el curso que ya viene decidido: averiguamos qué tiene que ser capaz de
              hacer tu gente y diseñamos la experiencia que la lleva ahí. El formato —simulador,
              juego, guía, 360, video, WhatsApp— sale de ese diagnóstico, no del encargo.
            </p>

            <div className="mt-11 grid gap-4 sm:grid-cols-2">
              {paraQuien.map((q, i) => (
                <article
                  key={q.t}
                  className="rounded-2xl border border-white/10 bg-[var(--sala-2)] p-6"
                  data-motion
                  style={{ ["--retardo" as string]: `${i * 70}ms` }}
                >
                  <h3 className="text-[1.2rem] font-bold tracking-[-0.024em] text-[var(--tiza)]">
                    {q.t}
                  </h3>
                  <p className="mt-2.5 text-[15px] leading-relaxed text-[var(--niebla)]">{q.d}</p>
                  <p className="mono mt-4 text-[10px] leading-relaxed text-[var(--haz)]">{q.ej}</p>
                </article>
              ))}
            </div>

            <div className="mt-14" data-motion>
              <p className="mono text-[10.5px] text-[var(--niebla)]">
                La diferencia, en el encargo
              </p>
              <div className="mt-4 overflow-hidden rounded-2xl border border-white/10">
                <div className="grid grid-cols-1 md:grid-cols-[190px_1fr_1fr]">
                  <div className="hidden md:block" />
                  <div className="border-b border-white/10 bg-white/[0.02] px-5 py-4 md:border-l">
                    <p className="mono text-[10.5px] text-[var(--niebla)]">Lo que suele pedirse</p>
                  </div>
                  <div className="border-b border-l border-white/10 bg-[rgba(255,177,72,0.06)] px-5 py-4">
                    <p className="mono text-[10.5px] text-[var(--haz)]">Lo que trabajamos</p>
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
                        <p className="text-[15px] font-medium leading-relaxed text-[var(--tiza)]">
                          {f.nuevo}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <p className="mt-6 max-w-[66ch] text-[var(--niebla)]">
                Y si el diagnóstico concluye que basta con cambiar una lista de chequeo, te lo vamos
                a decir — aunque sea la factura más chica de la sala.
              </p>
            </div>
          </div>
        </section>

        {/* ══ 02 · Cómo trabajamos ═══════════════════════════════════════ */}
        <section id="como" className="border-t border-white/10 bg-[rgba(20,17,43,0.42)] px-5 py-20 sm:px-10 lg:px-14 lg:py-28">
          <div className="mx-auto max-w-[1180px]">
            <p className="claqueta" data-motion>02 · Cómo trabajamos</p>
            <h2 className="rubro mt-5" data-motion style={{ ["--retardo" as string]: "80ms" }}>
              Cinco pasos, y ves algo funcionando en la semana 3.
            </h2>
            <p className="mt-5 max-w-[66ch] text-[var(--niebla)]" data-motion style={{ ["--retardo" as string]: "140ms" }}>
              Trabajamos como laboratorio y no como línea de producción: diagnosticamos, diseñamos,
              prototipamos y lo probamos con gente real antes de producir. El paso 3 es donde
              descubres si esto sirve, mientras cambiar de rumbo todavía es barato.
            </p>

            <div className="mt-10" data-motion style={{ ["--retardo" as string]: "180ms" }}>
              <LabSteps pasos={pasos} />
            </div>
          </div>
        </section>

        {/* ══ 03 · Míralo funcionando ════════════════════════════════════ */}
        <section id="piezas" className="border-t border-white/10 px-5 py-20 sm:px-10 lg:px-14 lg:py-28">
          <div className="mx-auto max-w-[1320px]">
            <p className="claqueta" data-motion>03 · Míralo funcionando</p>
            <h2 className="rubro mt-5" data-motion style={{ ["--retardo" as string]: "80ms" }}>
              Seis piezas reales, abriéndose acá mismo.
            </h2>
            <p className="mt-5 max-w-[68ch] text-[var(--niebla)]" data-motion style={{ ["--retardo" as string]: "140ms" }}>
              Son construcciones de clientes —los mismos archivos que recibió su gente— y funcionan
              sin salir de esta página. Sin formulario, sin cuenta y sin una llamada de por medio.
            </p>

            <div className="mt-10">
              <ExperienceLab piezas={piezas} />
            </div>
          </div>
        </section>

        {/* ══ 04 · Dónde llega ═══════════════════════════════════════════ */}
        <section id="entrega" className="border-t border-white/10 bg-[rgba(20,17,43,0.42)] px-5 py-20 sm:px-10 lg:px-14 lg:py-28">
          <div className="mx-auto max-w-[1180px]">
            <p className="claqueta" data-motion>04 · Dónde llega</p>
            <h2 className="rubro mt-5" data-motion style={{ ["--retardo" as string]: "80ms" }}>
              Y la plataforma va incluida.
            </h2>
            <p className="mt-5 max-w-[66ch] text-[var(--niebla)]" data-motion style={{ ["--retardo" as string]: "140ms" }}>
              Lo que te entregamos no es un archivo: es la experiencia funcionando donde ya está tu
              gente. Elegir el canal no es cuestión de gusto — es la respuesta a cómo le llega esto a
              alguien que trabaja en terreno y no tiene computador.
            </p>

            <div className="mt-9 rounded-2xl border border-[rgba(255,177,72,0.25)] bg-[rgba(255,177,72,0.07)] px-6 py-5" data-motion>
              <p className="mono text-[10.5px] text-[var(--haz)]">Lo que casi nadie incluye</p>
              <p className="mt-2 max-w-[70ch] text-[var(--tiza)]">
                <strong>No necesitas tener un LMS.</strong> La mayoría entrega un ZIP y deja el
                «¿dónde lo pongo?» de tu lado. El nuestro viene con la experiencia: con tu marca, sin
                licencia por usuario. Y si ya tienes plataforma, entregamos ahí.
              </p>
            </div>

            <div className="mt-4 overflow-hidden rounded-2xl border border-white/10 bg-[var(--sala-2)]" data-motion style={{ ["--retardo" as string]: "180ms" }}>
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
          </div>
        </section>

        {/* ══ 05 · Cuánto cuesta ═════════════════════════════════════════ */}
        <section id="precio" className="border-t border-white/10 px-5 py-20 sm:px-10 lg:px-14 lg:py-28">
          <div className="mx-auto max-w-[1180px]">
            <p className="claqueta" data-motion>05 · Cuánto cuesta</p>
            <h2 className="rubro mt-5" data-motion style={{ ["--retardo" as string]: "80ms" }}>
              Tres formas de entrar.
            </h2>
            <p className="mt-5 max-w-[66ch] text-[var(--niebla)]" data-motion style={{ ["--retardo" as string]: "140ms" }}>
              Se define por el problema que estás resolviendo, no por cuántos cursos salen al otro
              lado. Dónde cae exactamente lo dice el diagnóstico, y si el alcance resulta menor, el
              valor baja.
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
                  <h3 className="text-[1.3rem] font-bold tracking-[-0.024em] text-[var(--tiza)]">
                    {f.t}
                  </h3>
                  <p className="text-[1.35rem] font-extrabold tabular-nums tracking-[-0.03em] text-[var(--tiza)]">
                    {f.precio}
                  </p>
                  <p className="font-medium text-[var(--rosa)]">{f.p}</p>
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
                Agenda 45 minutos
              </Link>
              <Link
                href="/pricing"
                className="inline-flex min-h-[52px] items-center justify-center rounded-full border border-white/20 bg-white/5 px-7 text-base font-semibold text-[var(--tiza)] transition-transform duration-200 hover:-translate-y-0.5 hover:border-white/40"
              >
                Ver qué incluye cada una
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

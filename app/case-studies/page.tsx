import type { Metadata } from "next";
import Reveal from "@/components/studio/Reveal";
import PageHero from "@/components/studio/PageHero";
import Escena from "@/components/studio/Escena";
import CTASection from "@/components/CTASection";

/* ═══════════════════════════════════════════════════════════════════════════
   TRABAJOS
   ───────────────────────────────────────────────────────────────────────────
   Esta página tenía tres clientes inventados —TrainForward Inc., Apex Learning
   Solutions, NovaTech Training— con métricas inventadas: "completion rates from
   45% to 82%", "6x production increase". Estaba viva en e-waffle.com. Bajo una
   posición que se apoya en evidencia, un caso inventado es el flanco más caro
   que hay: basta que alguien busque el nombre y no encuentre la empresa.

   Reemplazo decidido por Álvaro el 27-ago-2026: clientes reales, sin métricas.
   Cada caso es problema → experiencia → qué quedó funcionando, y donde hay demo
   pública se abre la pieza misma. Los nombres son los que ewaffle.cl ya publica;
   los formatos y años salen del catálogo interno
   (VPM/Ewaffle/catalogo-whitelabel.tsv, "Estado contenido" = Producido).

   Regla al escribir acá: ninguna cifra de resultado que no podamos defender si
   nos la cuestionan. El "qué quedó" describe el diseño y la entrega —hechos
   verificables— y no un porcentaje que no medimos nosotros.
   ═══════════════════════════════════════════════════════════════════════════ */

export const metadata: Metadata = {
  title: "Trabajos",
  description:
    "Trabajo real para ACHS, AIEP, Caja Los Héroes, Buffalo Waffles, Duoc UC y la Universidad Gabriela Mistral: el problema, la experiencia y qué quedó funcionando. Sin métricas inventadas.",
};

const casos = [
  {
    n: "01",
    cliente: "Caja Los Héroes",
    sector: "Seguridad social · Chile",
    etiqueta: "Narrativa ramificada",
    titulo: "Un tema donde saberse el protocolo nunca fue el problema",
    problema:
      "El buen trato a las personas mayores es de esos temas con los que todos están de acuerdo en una sala, y a nadie se le evalúa ahí. La falla no ocurre porque alguien olvidó el protocolo: ocurre en un mesón, con cola detrás, cuando la opción paciente cuesta tres minutos que nadie siente que tiene.",
    experiencia:
      "Un curso ramificado construido sobre los dilemas que de verdad aparecen en el mesón, no sobre casos de manual. Cada opción tiene un costo defendible, así que no se puede ganar eligiendo la respuesta obviamente amable. Eligen, ven lo que costó esa elección, y reciben el razonamiento.",
    quedo:
      "Veinticuatro lecciones, abriéndose en el navegador. Y una segunda intervención sobre la Ley 20.393 —responsabilidad penal de la empresa— construida del mismo modo.",
    formato: "Video · Rise · Storyline · PDF",
    demo: { href: "https://ewaffle.cl/demos/los-heroes-decidir-mas-cerca", label: "Ábrelo · 24 lecciones" },
  },
  {
    n: "02",
    cliente: "ACHS",
    sector: "Seguridad laboral · Chile",
    etiqueta: "Mecánicas de juego · Video",
    titulo: "Contenido de prevención que ya nadie estaba leyendo",
    problema:
      "Una mutual produce el material normativo que miles de empresas adherentes tienen que dictar. El contenido estaba correcto y el formato era el problema: uso de EPP, Ley Karin, seguridad vehicular y almacenamiento de sustancias peligrosas se estaban leyendo en vez de practicarse — y leer no es lo que falla en un turno.",
    experiencia:
      "Un instrumento distinto por conducta, elegido tema a tema en vez de aplicado parejo. Las reglas de EPP se volvieron un Storyline gamificado donde el equipo se selecciona bajo condiciones. La seguridad vehicular se grabó en tres módulos con un actor real, porque las señales que importan son físicas. El almacenamiento pasó a ser un Genially que se recorre.",
    quedo:
      "Cuatro intervenciones producidas, entregables a las empresas adherentes como SCORM y re-marcables para cada una.",
    formato: "Storyline gamificado · Rise · Genially · Producción con actor real",
    demo: null,
  },
  {
    n: "03",
    cliente: "AIEP",
    sector: "Educación superior técnica · Chile",
    etiqueta: "Diseño instruccional · Producción",
    titulo: "Prevención de riesgos, para gente que va a enseñarla",
    problema:
      "Un instituto profesional necesitaba asignaturas de prevención y seguridad industrial que se sostuvieran académicamente y siguieran siendo usables en línea. La versión que suele llegar es una presentación con una prueba pegada al final, y no sobrevive el contacto con un estudiante que tiene que aplicarlo en una planta.",
    experiencia:
      "Diseño instruccional y producción completos para dos asignaturas: estrategias de capacitación en prevención de riesgos, y seguridad industrial en sistemas energéticos. Diseñadas como asignaturas online desde el principio, no como grabaciones de una clase que ya existía.",
    quedo: "Ambas producidas y validadas por la revisión académica del propio instituto.",
    formato: "Diseño instruccional + producción · TPR302 · TPR305",
    demo: null,
  },
  {
    n: "04",
    cliente: "Buffalo Waffles",
    sector: "Foodservice · Chile",
    etiqueta: "Guía interactiva · Video con IA",
    titulo: "Una inducción que tenía que sobrevivir al primer turno",
    problema:
      "Rotación alta, equipos de primer empleo, y una inducción que vivía en un manual y en quien estuviera de turno para explicarla. La persona que más la necesita es justo la que no tiene correo corporativo, ni computador, ni paciencia para crear una cuenta el día uno.",
    experiencia:
      "Una guía interactiva que se abre en el navegador sin instalar nada y sin clave, con video producido con IA para las partes que de verdad hay que explicar, y un cierre de verificación. Hecha para el teléfono, que es el aparato que está de verdad en la sala.",
    quedo:
      "Tres lecciones con video y un cierre, viva y abrible por cualquiera — que es justo por qué está acá como link y no como afirmación.",
    formato: "Guía interactiva · Video con IA · Genially",
    demo: { href: "https://ewaffle.cl/demos/buffalo-induccion", label: "Abre la inducción" },
  },
  {
    n: "05",
    cliente: "Duoc UC",
    sector: "Educación superior · Chile",
    etiqueta: "Video · Rise",
    titulo: "Inclusión, contada por la institución y no sobre ella",
    problema:
      "El material de enseñanza inclusiva tiende a estar escrito con la voz de un departamento de cumplimiento, que es exactamente la voz que hace que los docentes lo traten como una obligación en vez de como práctica.",
    experiencia:
      "Una pieza de bienvenida en la voz de la propia institución abriendo una ruta Rise producida sobre estrategias inclusivas para el aula y el trabajo — planteada como cosas para probar el lunes, no como una política que hay que acusar recibo.",
    quedo: "Producido y en uso en la institución.",
    formato: "Video de bienvenida · Producción Rise",
    demo: null,
  },
  {
    n: "06",
    cliente: "Universidad Gabriela Mistral",
    sector: "Educación superior · Chile",
    etiqueta: "Diseño de asignaturas online",
    titulo: "Seis asignaturas diseñadas online, no trasladadas online",
    problema:
      "Poner una asignatura universitaria en línea suele significar grabar las clases. Produce algo que técnicamente está disponible y pedagógicamente es peor que la sala de la que salió, y los estudiantes lo notan en una semana.",
    experiencia:
      "Diseño instruccional y producción completos para seis asignaturas —cuatro de sostenibilidad, dos de humanidades— construidas como asignaturas online desde el principio: su propia secuencia, su propia lógica de evaluación, sus propios materiales.",
    quedo: "Las seis producidas a nivel universitario, corriendo en los programas de la institución.",
    formato: "Diseño instruccional online completo · 6 asignaturas",
    demo: null,
  },
];

const otros = [
  { c: "Coanil", q: "Manuales de cuidados integrales para residencias, en Rise multimódulo" },
  { c: "Colegios SIP", q: "Protocolo de convivencia escolar en video animado y Rise" },
  { c: "CERP Dávila", q: "Auxilios psicológicos, humanización, liderazgo y manejo de conflictos" },
  { c: "Fundación Oportunidad", q: "Programa de cinco módulos sobre observación y retroalimentación en aula" },
  { c: "Manpower LATAM", q: "Academias de power skills y agilidad para equipos distribuidos" },
  { c: "UNIACC · U. Santo Tomás", q: "Diseño de programas online para educación superior" },
];

export default function CaseStudiesPage() {
  return (
    <div className="relative">
      <Reveal />

      <PageHero
        claqueta="Ewaffle · Trabajos"
        titulo={
          <>
            Clientes reales.
            <br />
            <em>Cero números inventados.</em>
          </>
        }
        bajada="Abajo hay trabajo que existe, para organizaciones que puedes buscar. Cada uno está escrito como escribimos un encargo: el problema en terreno, la experiencia que diseñamos para eso, y qué terminó funcionando. Donde la pieza es pública, el link abre la cosa misma."
        nota="No vas a encontrar un porcentaje de completitud en esta página. Los que valdría la pena citar se miden dentro de los sistemas de nuestros clientes, no de los nuestros — publicarlos como resultado propio sería usar evidencia prestada."
        cta={{ label: "Agenda 45 minutos", href: "/book-a-call" }}
      />

      <Escena n="01" rotulo="Trabajo seleccionado" titulo={<>Seis problemas, y qué construimos para cada uno.</>}>
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

                <p className="mono mt-6 text-[10px] text-[var(--niebla)]">Construido con</p>
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
                  { k: "El problema", v: c.problema, vivo: false },
                  { k: "La experiencia", v: c.experiencia, vivo: true },
                  { k: "Qué quedó", v: c.quedo, vivo: false },
                ].map((b) => (
                  <div key={b.k}>
                    <p className={`mono text-[10.5px] ${b.vivo ? "text-[var(--haz)]" : "text-[var(--niebla)]"}`}>
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
        rotulo="También construido"
        fondo
        titulo={<>Trabajo sin ficha propia.</>}
        bajada="Fundaciones, colegios, centros de formación clínica, universidades y grupos de personal. Con nombre, porque una lista de nombres verificables pesa más que un caso largo que nadie puede comprobar."
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
        rotulo="Construido por el estudio"
        titulo={<>Las piezas que hicimos para nosotros mismos.</>}
        bajada="No todo instrumento llega por un encargo. Algunos los construimos porque el problema se repetía y nada en el mercado lo resolvía — y hoy son el punto de partida del presupuesto de un cliente, en vez de algo que tenga que pagar para desarrollar."
      >
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {[
            {
              t: "Simulador de comercio exterior",
              d: "Cuatro roles —aduana, transportista, naviera, importador— y un contenedor que no se mueve hasta que los papeles cuadran. B/L y declaraciones de ingreso reales, motor propio en el navegador. El escenario es data, así que otro rubro es una configuración y no un desarrollo nuevo.",
            },
            {
              t: "Ocho mecánicas de juego",
              d: "Ruleta, memorice, quiz show, sopa de letras, anillo de conceptos, arrastrar y soltar, árbol de decisión y ubicar en plano. Ya construidas y probadas, así que el presupuesto del cliente se va en adaptar su contenido y no en desarrollar un motor.",
            },
            {
              t: "Un banco de pruebas SCORM",
              d: "El curso a un lado, la conversación SCORM en vivo al otro: cada llamada, en orden. Así comprobamos que el registro funciona antes de que un paquete llegue a tu plataforma, y así depuramos uno que tu LMS esté rechazando.",
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
        title="Tu problema no tiene que parecerse a estos."
        description="Tiene que ser una conducta que te esté costando algo. Trae eso a la llamada y te decimos honestamente si una experiencia es la respuesta correcta."
        primaryCTA="Agenda 45 minutos"
        secondaryCTA="Mira cómo trabajamos"
        secondaryHref="/services"
      />
    </div>
  );
}

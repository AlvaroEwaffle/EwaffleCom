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
  title: "Nosotros",
  description:
    "Un estudio de experiencias de aprendizaje en Chile. Diseñamos la intervención, construimos nuestros propios motores y te la entregamos funcionando: en tu LMS o en el nuestro.",
};

/* Hechos, no métricas. Cada uno se puede comprobar sin creernos nada: los
   clientes están publicados, los instrumentos se abren y corren. */
const hechos = [
  { v: "8", l: "instrumentos construidos y corriendo" },
  { v: "6", l: "canales de entrega, WhatsApp incluido" },
  { v: "LMS", l: "incluido, con tu marca" },
  { v: "3", l: "idiomas: ES · EN · PT-BR" },
];

const porque = [
  {
    n: "01",
    t: "Construimos nuestros propios motores",
    d: "El simulador, las ocho mecánicas de juego, el motor de WhatsApp, el banco de pruebas SCORM y el LMS son nuestros. Por eso el presupuesto de un cliente se va en adaptar su contenido y no en desarrollar lo que lo hace correr — y por eso podemos decir que sí a formatos que una agencia tendría que subcontratar.",
  },
  {
    n: "02",
    t: "Probamos antes de producir",
    d: "Un prototipo jugable en cinco pares de manos reales, en la semana 3, mientras cambiar de rumbo todavía es barato. Convierte la reunión de revisión de «me gusta / no me gusta» en «funcionó / no funcionó». Casi todo lo que sale mal en este rubro sale mal porque ese paso no existe.",
  },
  {
    n: "03",
    t: "Te lo entregamos funcionando",
    d: "No un ZIP y buena suerte. La experiencia aterriza donde ya está tu gente: tu LMS, un link sin cuenta, WhatsApp, o nuestra plataforma con tu marca. La logística de quién puede entrar de verdad es parte del diseño, no un cobro aparte.",
  },
  {
    n: "04",
    t: "Te decimos cuando no somos nosotros",
    d: "Hay conductas que no son un problema de aprendizaje: son de proceso, de herramienta o de incentivo, y ninguna experiencia que construyamos las va a mover. Decirlo en voz alta nos cuesta un proyecto de vez en cuando; decir lo contrario le costaría muchísimo más al cliente.",
  },
];

const noHacemos = [
  "Cobrar por minuto de contenido terminado.",
  "Tomar un formato como encargo sin preguntar qué está fallando.",
  "Publicar una tasa de completitud como si fuera evidencia de aprendizaje.",
  "Entregar un paquete SCORM que no hayamos visto conversar con un LMS.",
];

export default function AboutPage() {
  return (
    <div className="relative">
      <Reveal />

      <PageHero
        claqueta="Ewaffle · Nosotros"
        titulo={
          <>
            Un estudio chico,
            <br />
            <em>en Chile</em>.
          </>
        }
        bajada="Somos un estudio de experiencias de aprendizaje con base en Chile, trabajando en español, inglés y portugués de Brasil. Partimos produciendo cursos, que es exactamente cómo aprendimos que producir cursos casi nunca era lo que el problema necesitaba. Hoy diseñamos primero la intervención y dejamos que ella elija el formato."
        nota="Horario que se cruza con las dos costas de América y con buena parte de la tarde europea. Importa por la misma razón que importa un prototipo: el trabajo mejora cuando la respuesta llega el mismo día."
        cta={{ label: "Agenda 45 minutos", href: "/book-a-call" }}
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
        rotulo="Cómo llegamos acá"
        titulo={
          <>
            Produjimos cursos por años.
            <br />
            <em>Así aprendimos</em> qué tenía de malo.
          </>
        }
      >
        <div
          className="mt-10 grid max-w-[74ch] gap-6 leading-relaxed text-[var(--niebla)]"
          data-motion
          style={{ ["--retardo" as string]: "160ms" }}
        >
          <p>
            El trabajo llegaba siempre igual: una presentación, un manual, una normativa, y el
            encargo de convertirlo en un curso. Nos volvimos buenos en eso. Construimos para
            mutuales, universidades, institutos profesionales, fundaciones, colegios y cadenas de
            foodservice — cumplimiento, inducción, cuidados, liderazgo, inclusión.
          </p>
          <p>
            Y un patrón se repetía. Los cursos quedaban correctos y la conducta no se movía. No
            porque el contenido fuera malo, sino porque nadie había preguntado qué estaba fallando
            en terreno antes de decidir que un curso era la respuesta. Nos pagaban por producir el
            formato que el cliente ya había elegido, y elegirlo era la parte que importaba.
          </p>
          <p>
            Mientras tanto la mitad de producción empezó a commoditizarse. La IA generativa dejó un
            curso decente al alcance de cualquiera con las herramientas que ya tiene abiertas — así
            que competir por ser más rápido y más barato produciendo es competirle a algo que está
            en la otra pestaña del cliente. Esa carrera se pierde por definición.
          </p>
          <p className="border-l-2 border-[var(--haz)] pl-5 font-medium text-[var(--tiza)]">
            Lo que no se commoditiza es decidir qué experiencia hace que alguien trabaje distinto.
            Eso pide diagnóstico, criterio pedagógico y capacidad de construir cosas que no salen de
            una plantilla. Es lo que veníamos haciendo gratis dentro de cada proyecto, y es lo que
            hoy vende el estudio.
          </p>
        </div>
      </Escena>

      <Escena
        n="02"
        rotulo="Qué lo hace funcionar"
        fondo
        titulo={
          <>
            Cuatro cosas que a una agencia le cuesta copiar.
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
        rotulo="Quién lo lleva"
        titulo={
          <>
            Personas con nombre, no un ejecutivo de cuenta.
          </>
        }
        bajada="Quien corre el diagnóstico es quien le da forma a la experiencia, y sigue ahí hasta la entrega."
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
            <p className="mono mt-1 text-[10.5px] text-[var(--rosa)]">Fundador</p>
            <p className="mt-4 leading-relaxed text-[var(--niebla)]">
              Ocho años construyendo productos de aprendizaje, y antes de eso trabajo de producto
              con IA como project manager en Toptal. Toma él mismo las llamadas de diagnóstico —
              que es la razón por la que este sitio te pide describir una conducta en vez de
              llenar un formulario de proyecto.
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
        rotulo="Lo que no hacemos"
        fondo
        titulo={
          <>
            Cuatro cosas que no vamos a hacer.
          </>
        }
        bajada="Una posición vale algo solo si a veces te cuesta trabajo. Estas son las cuatro que nos lo cuestan."
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
        title="Cuéntanos qué no está cambiando."
        description="No qué quieres que construyamos. Qué está haciendo tu gente que no debería, y cuánto te está costando. Para esa conversación existe este estudio."
        primaryCTA="Agenda 45 minutos"
        secondaryCTA="Mira los trabajos"
        secondaryHref="/case-studies"
      />
    </div>
  );
}

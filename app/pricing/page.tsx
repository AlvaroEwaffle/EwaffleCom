import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/studio/Reveal";
import PageHero from "@/components/studio/PageHero";
import Escena from "@/components/studio/Escena";
import CTASection from "@/components/CTASection";

/* ═══════════════════════════════════════════════════════════════════════════
   PRECIOS
   ───────────────────────────────────────────────────────────────────────────
   Los tres rangos en dólares se mantienen —decisión de Álvaro, 27-ago-2026—
   pero cambia lo que compran. Antes la unidad era el curso: Starter era "1 curso
   SCORM de hasta 60 minutos", Professional "3 a 5 cursos", Enterprise "cursos
   ilimitados por trimestre". Se compraba volumen de producción y los escalones
   se diferenciaban por rondas de revisión y velocidad de entrega.

   Ahora la unidad es la experiencia. Salió también toda la sección "in-house vs
   outsourcing": ese argumento le concede al comprador que lo que compra es
   capacidad de producir horas, cuando lo que compra es criterio.
   ═══════════════════════════════════════════════════════════════════════════ */

export const metadata: Metadata = {
  title: "Precios",
  description:
    "Lab Sprint, Programa y Studio Partner: tres formas de trabajar con nosotros, con qué incluye cada una. Se cotiza por el problema que resuelve, no por cuántos cursos salen.",
};

const formas = [
  {
    n: "01",
    t: "Lab Sprint",
    precio: "USD 3.000 – 5.000",
    unidad: "Una intervención, una conducta.",
    d: "La puerta de entrada. Eliges el problema que de verdad te está costando algo y le corremos el Lab completo: diagnóstico, diseño, un prototipo probado con cinco personas reales, producción y despliegue. Chico como para probar el método, real como para importar por sí solo.",
    trae: [
      "La conducta escrita como algo observable, y la evidencia con la que nos vas a evaluar",
      "Un prototipo funcionando en manos reales en la semana 3 — no un storyboard",
      "La experiencia terminada, en el formato que eligió el diagnóstico",
      "Entregada funcionando: tu LMS, un link, WhatsApp, o la nuestra",
    ],
    cta: "Parte con un problema",
    destacado: false,
  },
  {
    n: "02",
    t: "Programa",
    precio: "USD 8.000 – 15.000",
    unidad: "Un trayecto como sistema de experiencias.",
    d: "Varias intervenciones que se encadenan, más el ecosistema que las sostiene: la plataforma, el seguimiento, las comunicaciones que hacen que la gente entre, y la medición que te dice si algo se movió. Acá es donde el LMS incluido más pesa.",
    trae: [
      "Varias intervenciones encadenadas, en el orden en que la conducta se desarrolla",
      "Plataforma incluida, con tu marca y sin licencia por usuario",
      "Comunicaciones y recordatorios, porque un despliegue al que nadie entra no es un despliegue",
      "Medido por conducta y evidencia, no por tasas de completitud",
    ],
    cta: "Arma un programa",
    destacado: true,
  },
  {
    n: "03",
    t: "Studio Partner",
    precio: "USD 20.000+",
    unidad: "Somos tu equipo de experiencias.",
    d: "Capacidad reservada por trimestre, con el diagnóstico corriendo de forma continua en vez de partir de cero con cada encargo. Para organizaciones donde la demanda no se detiene y cotizar cada proyecto desde cero ya es un problema en sí mismo.",
    trae: [
      "Capacidad reservada, trimestre a trimestre",
      "Diagnóstico permanente: vemos los problemas antes de que lleguen como encargo",
      "Tu hoja de ruta, nuestro estudio — incluidas las piezas que resulten no necesitarnos",
      "Prioridad sobre lo ya construido, así lo nuevo parte desde un motor que corre",
    ],
    cta: "Conversemos una alianza",
    destacado: false,
  },
];

const antesDespues = [
  { k: "La unidad", antes: "Un curso, cotizado por minuto de contenido terminado.", ahora: "Una intervención, cotizada por la conducta que tiene que mover." },
  { k: "Qué define el alcance", antes: "Cuántos módulos pediste.", ahora: "Lo que encontró el diagnóstico, incluso cuando es menos de lo que pediste." },
  { k: "El formato", antes: "Va nombrado en la orden de compra.", ahora: "Se concluye en el paso 3, cuando sabemos quién falla y por qué." },
  { k: "Las revisiones", antes: "Dos rondas. Tres en el plan grande.", ahora: "Un prototipo probado con cinco personas, mientras cambiar de rumbo aún es barato." },
  { k: "Terminado significa", antes: "El ZIP está entregado.", ahora: "La experiencia está corriendo donde está tu gente, y se está midiendo." },
];

const faqs = [
  {
    q: "¿Por qué un Lab Sprint vale lo mismo que valía un curso, si es más trabajo?",
    a: "Porque el diagnóstico y el prototipo reemplazan trabajo que antes se perdía, en vez de sumarse. Buena parte del costo de la producción tradicional se va en construir bien lo equivocado y después corregirlo. Probar con cinco personas reales en la semana 3 sale más barato que tres rondas de revisión con la jefatura en la semana 10.",
  },
  {
    q: "¿Y si el diagnóstico dice que no nos necesitan?",
    a: "Te lo decimos, y habrás pagado por el diagnóstico en vez de por un curso que no necesitabas. Pasa. Hay conductas que no son un problema de aprendizaje: son de proceso, de herramienta o de incentivo, y ninguna experiencia que construyamos las va a mover.",
  },
  {
    q: "¿Trabajan con el LMS que ya tenemos?",
    a: "Sí, y te mostramos exactamente qué va a recibir antes de que llegue. Entregamos SCORM 1.2, SCORM 2004 y xAPI, y verificamos el paquete contra un registro de llamadas en vivo en vez de mandar un ZIP y cruzar los dedos. Si no tienes plataforma, la nuestra viene incluida desde el plan Programa.",
  },
  {
    q: "¿Qué significa exactamente «plataforma incluida»?",
    a: "Un LMS con tu marca —tu logo, tu paleta, tu dominio— sin licencia por usuario, alojando las experiencias que construimos para ti. La mayoría entrega un archivo y dónde ponerlo pasa a ser tu problema. Si más adelante quieres moverte a tu propia plataforma, el contenido cumple estándares y se va contigo.",
  },
  {
    q: "¿Cuánto demora un Lab Sprint?",
    a: "El prototipo está en manos reales alrededor de la semana 3; la experiencia terminada suele caer entre la semana 6 y la 10, según cuánta producción pida el formato elegido. Una secuencia de WhatsApp y un simulador multijugador no son el mismo desarrollo, y el diagnóstico es lo que dice cuál te toca.",
  },
  {
    q: "¿Pueden trabajar con nuestra marca, para nuestros clientes?",
    a: "Sí. Si eres OTEC, consultora o empresa de capacitación, el trabajo sale con tu marca y tus clientes nunca ven la nuestra. Lo hacemos hace años — así se construyó buena parte de nuestro catálogo.",
  },
  {
    q: "¿En qué idiomas trabajan?",
    a: "Español, inglés y portugués de Brasil. Estamos en Chile, y la entrega bilingüe —incluida la locución— es rutina y no una línea con recargo.",
  },
  {
    q: "¿Cómo partimos?",
    a: "Una llamada de 45 minutos donde nos cuentas qué está saliendo mal en terreno. Si parece una intervención, recibes una propuesta escrita que abre con el problema, la experiencia y el resultado — en ese orden, y con el precio al final.",
  },
];

export default function PricingPage() {
  return (
    <div className="relative">
      <Reveal />

      <PageHero
        claqueta="Ewaffle · Precios"
        titulo={
          <>
            Tres formas de entrar,
            <br />
            y qué <em>incluye</em> cada una.
          </>
        }
        bajada="No son tamaños de lo mismo: se diferencian por cuánto de tu mundo está mirando el estudio — una conducta, un trayecto, o tu hoja de ruta completa. En las tres, lo que compras es la decisión sobre qué experiencia va a mover eso, y después la experiencia misma, funcionando."
        nota="Toda relación parte con el diagnóstico. Si concluye que lo más barato no es algo que nosotros construyamos, es un resultado legítimo y te lo dejamos por escrito."
        cta={{ label: "Agenda 45 minutos", href: "/book-a-call" }}
      />

      <Escena
        n="01"
        rotulo="Las tres formas"
        titulo={<>Una conducta, un trayecto, o toda la hoja de ruta.</>}
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
                    El más elegido
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
              <p className="mono mt-1 text-[10px] text-[var(--niebla)]">Por proyecto</p>

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
          Dónde cae exactamente dentro del rango lo dice el diagnóstico: cuántos roles hay
          involucrados, si hay que capturar el espacio, si la experiencia tiene que correr en dos
          idiomas. Y si el alcance resulta menor de lo previsto, el valor baja. Nada de esta página
          se cotiza por minutos de contenido.
        </p>
      </Escena>

      <Escena
        n="02"
        rotulo="Qué cambió"
        fondo
        titulo={<>Los mismos números, comprando otra cosa.</>}
        bajada="Estas cifras antes compraban volumen: un curso, tres a cinco cursos, cursos ilimitados por trimestre. Ahora compran intervenciones. Vale la pena decirlo explícito, porque es el argumento completo."
      >
        <div className="mt-10 overflow-hidden rounded-2xl border border-white/10" data-motion>
          <div className="grid grid-cols-1 md:grid-cols-[190px_1fr_1fr]">
            <div className="hidden md:block" />
            <div className="border-b border-white/10 bg-white/[0.02] px-5 py-4 md:border-l">
              <p className="mono text-[10.5px] text-[var(--niebla)]">Una productora vende</p>
            </div>
            <div className="border-b border-l border-white/10 bg-[rgba(255,177,72,0.06)] px-5 py-4">
              <p className="mono text-[10.5px] text-[var(--haz)]">Un estudio vende</p>
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
                  <p className="text-[15px] font-medium leading-relaxed text-[var(--tiza)]">
                    {f.ahora}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Escena>

      <Escena n="03" rotulo="Preguntas" titulo={<>Las que vale la pena hacernos.</>}>
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
        title="Esto parte con el diagnóstico."
        description="No con una cotización y no con un formato. Cuéntanos qué está haciendo tu gente que no debería, y te decimos si somos la respuesta correcta."
        primaryCTA="Agenda 45 minutos"
        secondaryCTA="Mira qué construimos"
        secondaryHref="/services"
      />
    </div>
  );
}

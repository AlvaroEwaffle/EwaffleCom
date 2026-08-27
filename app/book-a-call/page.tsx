import type { Metadata } from "next";
import Reveal from "@/components/studio/Reveal";
import PageHero from "@/components/studio/PageHero";
import Escena from "@/components/studio/Escena";
import { CONTACT_EMAIL } from "@/lib/contact";

/* ═══════════════════════════════════════════════════════════════════════════
   AGENDAR · la llamada de diagnóstico
   ───────────────────────────────────────────────────────────────────────────
   Antes decía "Book Your Free Discovery Call — 30 minutes. No pressure. We'll
   discuss your course production needs". Dos problemas: "course production
   needs" presupone que lo que se compra es producción, y "no pressure" es la
   frase de alguien que sabe que la llamada es un pitch.

   Esta llamada tiene un producto: sales con la conducta escrita como algo
   observable, o con un "esto no es un problema de aprendizaje" fundamentado.
   Decirlo de entrada filtra mejor que cualquier promesa de no presionar.
   ═══════════════════════════════════════════════════════════════════════════ */

export const metadata: Metadata = {
  title: "Agenda 45 minutos",
  description:
    "Cuarenta y cinco minutos sobre la conducta que no está cambiando. Sales con ella escrita como algo observable, o con una razón honesta de por qué esto no es un problema de aprendizaje.",
};

const pasos = [
  {
    n: "01",
    t: "Nos cuentas qué pasa en terreno",
    d: "No el curso que tenías en mente. Qué está haciendo la gente que no debería, quiénes son, y qué vuelve fácil la opción equivocada donde trabajan.",
  },
  {
    n: "02",
    t: "Lo escribimos como conducta",
    d: "Juntos y en voz alta, hasta que sea algo que podrías ver pasar o no pasar — y hasta tener nombrada la evidencia que nos diría que se movió.",
  },
  {
    n: "03",
    t: "Te damos una respuesta derecha",
    d: "O la forma de una intervención y qué tomaría hacerla, o nuestra lectura honesta de que esto es un problema de proceso, de herramienta o de incentivo, y ninguna experiencia lo va a arreglar.",
  },
];

const traer = [
  "La conducta, no el encargo — y un ejemplo real de cuando salió mal.",
  "Quién es de verdad la audiencia, incluidos los que no tienen computador.",
  "Qué mides hoy, aunque esté lejísimos de la conducta.",
  "Qué se intentó antes, y en qué terminó.",
];

export default function BookACallPage() {
  return (
    <div className="relative">
      <Reveal />

      <PageHero
        claqueta="Ewaffle · Llamada de diagnóstico"
        titulo={
          <>
            Cuarenta y cinco minutos
            <br />
            sobre <em>una conducta</em>.
          </>
        }
        bajada="No es una demo de capacidades y no es una cotización. Es el primer paso del Lab, corrido gratis: tomamos eso que no está cambiando en tu organización y lo trabajamos hasta que sea lo bastante específico como para diseñar contra ello."
        nota="Lo peor que te puede pasar es un no claro. Hay conductas que no son un problema de aprendizaje, y preferimos decirlo en esta llamada y no seis semanas dentro del proyecto."
      />

      <section className="border-t border-white/10 px-5 py-14 sm:px-10 lg:px-14">
        <div className="mx-auto max-w-[1180px]">
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-[var(--sala-2)]" data-motion>
            <iframe
              src="https://capu.villelab.com/schedule/book-a-call"
              className="w-full border-0"
              style={{ height: "700px", minHeight: "600px" }}
              title="Agenda la llamada de diagnóstico con Álvaro"
              allow="clipboard-write"
            />
          </div>
          <p className="mt-5 text-[15px] text-[var(--niebla)]" data-motion>
            ¿Prefieres correo?{" "}
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="font-semibold text-[var(--haz)] underline underline-offset-4"
            >
              {CONTACT_EMAIL}
            </a>{" "}
            — descríbenos la conducta en tres líneas y te respondemos si suena a intervención.
          </p>
        </div>
      </section>

      <Escena n="01" rotulo="Cómo va la llamada" fondo titulo={<>Tres movidas y una respuesta real.</>}>
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {pasos.map((p, i) => (
            <div
              key={p.n}
              className="rounded-2xl border border-white/10 bg-[var(--sala-2)] p-6"
              data-motion
              style={{ ["--retardo" as string]: `${i * 80}ms` }}
            >
              <span className="mono text-[11px] text-[var(--haz)]">{p.n}</span>
              <h3 className="mt-3 text-[1.2rem] font-bold tracking-[-0.024em] text-[var(--tiza)]">
                {p.t}
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-[var(--niebla)]">{p.d}</p>
            </div>
          ))}
        </div>
      </Escena>

      <Escena
        n="02"
        rotulo="Qué traer"
        titulo={<>Cuatro cosas que la hacen una buena llamada.</>}
        bajada="Ninguna pide preparación que no tengas ya. Si solo puedes traer la primera, trae la primera."
      >
        <ul className="mt-10 grid gap-3 md:grid-cols-2" data-motion>
          {traer.map((x) => (
            <li
              key={x}
              className="flex gap-4 rounded-2xl border border-white/10 bg-white/[0.02] px-6 py-5 leading-relaxed text-[var(--tiza)]"
            >
              <span aria-hidden="true" className="text-[var(--haz)]">
                →
              </span>
              <span>{x}</span>
            </li>
          ))}
        </ul>
      </Escena>
    </div>
  );
}

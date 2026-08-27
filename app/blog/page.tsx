import type { Metadata } from "next";
import Reveal from "@/components/studio/Reveal";
import PageHero from "@/components/studio/PageHero";
import Escena from "@/components/studio/Escena";
import CTASection from "@/components/CTASection";

/* ═══════════════════════════════════════════════════════════════════════════
   NOTES · lo que estamos escribiendo
   ───────────────────────────────────────────────────────────────────────────
   Cuatro cosas cambiaron acá.

   1. Los temas. Eran los de una fábrica de producción —"How to Outsource
      E-Learning Development", "The True Cost of Building In-House"— escritos
      para un comprador que evalúa proveedores de producción. Bajo esta posición
      el lector es alguien con una conducta que no cambia.
   2. "ROI Data from 200+ Courses" prometía un análisis sobre 200 cursos que no
      existe y una cifra que no medimos. Fuera.
   3. El formulario de newsletter no tenía `action` ni handler: se tragaba el
      correo en silencio. Un formulario roto es peor que no tenerlo, así que
      salió. Cuando haya con qué, va conectado o no va.
   4. Todo sigue marcado "coming" porque no hay ni un artículo publicado. Es
      honesto y también es un argumento para sacar /blog del nav hasta que lo
      haya — decisión pendiente de Álvaro.
   ═══════════════════════════════════════════════════════════════════════════ */

export const metadata: Metadata = {
  title: "Notas",
  description:
    "Notas del Lab: cómo diagnosticamos una conducta, por qué el formato nunca es lo que se encarga, y qué aprendimos construyendo simuladores, narrativa y juegos.",
};

const notas = [
  {
    n: "01",
    tema: "Diagnóstico",
    t: "El encargo que llega, y el que escribimos de vuelta",
    d: "Casi todo encargo nombra el formato antes de que nadie haya dicho qué está fallando. Estas son las preguntas con las que pasamos de «necesitamos un curso gamificado» a una conducta escrita como algo que podrías ver pasar — y qué hacer cuando la respuesta resulta no ser capacitación.",
  },
  {
    n: "02",
    tema: "Método",
    t: "Cinco personas reales en la semana 3",
    d: "El único paso que separa a un estudio de una agencia, y el que más resistencia genera porque parece una demora. Por qué un prototipo tosco en manos reales le gana a tres rondas de revisión con la jefatura, y cómo correr la sesión para que produzca decisiones y no opiniones.",
  },
  {
    n: "03",
    tema: "Entrega",
    t: "La gente que tu despliegue de LMS pierde en silencio",
    d: "Cuadrillas en terreno, turnos, contratistas, conductores: sin correo corporativo, sin computador y sin paciencia para crear una cuenta. Qué les llega de verdad, por qué WhatsApp sigue ganando esa discusión, y cómo decidir el canal durante el diseño y no después del lanzamiento.",
  },
  {
    n: "04",
    tema: "Medición",
    t: "La tasa de completitud no es evidencia",
    d: "Mide que un archivo se abrió y se cerró. Qué acordar en su lugar antes de partir: la conducta observable, la evidencia que ya existe dentro de tus sistemas, y quién la va a mirar noventa días después.",
  },
];

export default function BlogPage() {
  return (
    <div className="relative">
      <Reveal />

      <PageHero
        claqueta="Ewaffle · Notas"
        titulo={
          <>
            Notas
            <br />
            <em>del Lab</em>.
          </>
        }
        bajada="Lo que vamos aprendiendo mientras diseñamos intervenciones: las preguntas de diagnóstico que sirven, los pasos que los clientes resisten, los problemas de entrega que hunden un buen diseño. Escrito para quien tiene a cargo una conducta que no cambia."
        nota="Ninguna está publicada todavía. Están listadas porque escribirlas acá es cómo nos comprometemos con ellas — y porque es más útil que cuatro artículos de relleno sobre tercerización."
        cta={{ label: "Agenda 45 minutos", href: "/book-a-call" }}
      />

      <Escena
        n="01"
        rotulo="En la fila"
        titulo={
          <>
            Cuatro que estamos escribiendo.
          </>
        }
      >
        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {notas.map((p, i) => (
            <article
              key={p.n}
              className="flex flex-col rounded-2xl border border-white/10 bg-[var(--sala-2)] p-6 sm:p-7"
              data-motion
              style={{ ["--retardo" as string]: `${i * 70}ms` }}
            >
              <div className="flex items-center justify-between gap-3">
                <span className="mono text-[11px] text-[var(--haz)]">
                  {p.n} · {p.tema}
                </span>
                <span className="mono rounded-full border border-white/15 px-2.5 py-1 text-[9.5px] text-[var(--niebla)]">
                  Pronto
                </span>
              </div>
              <h2 className="mt-4 text-[1.28rem] font-bold leading-snug tracking-[-0.024em] text-[var(--tiza)]">
                {p.t}
              </h2>
              <p className="mt-3 text-[15px] leading-relaxed text-[var(--niebla)]">{p.d}</p>
            </article>
          ))}
        </div>

        <p className="mt-10 max-w-[66ch] text-[var(--niebla)]" data-motion>
          Si alguno de estos es el problema que tienes encima ahora mismo, la llamada es más rápida
          que esperar el artículo — y te llevas la versión con tu propio caso adentro.
        </p>
      </Escena>

      <CTASection
        title="Sáltate la lista de lectura."
        description="Trae la conducta que no está cambiando. Cuarenta y cinco minutos, y sales sabiendo si una experiencia es la respuesta correcta."
        primaryCTA="Agenda 45 minutos"
        secondaryCTA="Mira los trabajos"
        secondaryHref="/case-studies"
      />
    </div>
  );
}

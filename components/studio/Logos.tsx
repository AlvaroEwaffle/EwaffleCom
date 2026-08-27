/* Franja de clientes, apenas debajo del hero.
   Va acá y no en el pie porque es la única parte de la página que el visitante
   no tiene que creernos: son marcas que puede reconocer o buscar.

   Los logos van con sus colores reales, sobre una pastilla. El truco habitual
   —`brightness-0 invert` para dejarlos blancos sobre el fondo oscuro— solo
   funciona con line art monocromo: el de la ACHS es una forma recortada y el de
   Buffalo es un raster, y los dos salían como manchas grises.

   Y la pastilla no puede ser una sola: cinco de estos logos son oscuros (hechos
   para fondo claro) y dos —UST y UGM— vienen en blanco. Sobre la misma pastilla
   clara, esos dos desaparecían. Por eso cada uno declara sobre qué va. */
const logos = [
  { src: "/logos/achs.svg", alt: "ACHS", h: "h-9", claro: true },
  { src: "/logos/aiep.svg", alt: "AIEP", h: "h-7", claro: true },
  { src: "/logos/duoc.svg", alt: "Duoc UC", h: "h-7", claro: true },
  { src: "/logos/uniacc.svg", alt: "UNIACC", h: "h-6", claro: true },
  { src: "/logos/buffalo.webp", alt: "Buffalo Waffles", h: "h-8", claro: true },
  // Estos dos vienen en blanco —están hechos para fondo oscuro— y sobre la
  // pastilla clara desaparecían. Van sobre pastilla oscura, con la misma caja.
  { src: "/logos/ust.svg", alt: "Universidad Santo Tomás", h: "h-9", claro: false },
  { src: "/logos/ugm.svg", alt: "Universidad Gabriela Mistral", h: "h-9", claro: false },
];

export default function Logos({ nota }: { nota?: string }) {
  return (
    <section className="border-y border-white/10 bg-[rgba(20,17,43,0.55)] px-5 py-7 sm:px-10 lg:px-14">
      <div className="mx-auto flex max-w-[1180px] flex-col gap-5 lg:flex-row lg:items-center lg:gap-8">
        <p className="mono shrink-0 text-[10px] leading-relaxed text-[var(--niebla)] lg:max-w-[14ch]">
          {nota ?? "Trabajamos con"}
        </p>
        <div className="flex flex-wrap items-center gap-2.5">
          {logos.map((l) => (
            <span
              key={l.alt}
              className={`flex h-[54px] items-center justify-center rounded-xl px-4 transition-transform hover:-translate-y-0.5 ${
                l.claro ? "bg-white/[0.93]" : "border border-white/15 bg-white/[0.06]"
              }`}
            >
              <img src={l.src} alt={l.alt} className={`${l.h} w-auto`} />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

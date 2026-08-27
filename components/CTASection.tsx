import Link from "next/link";

/* El cierre de cada página. Antes era un degradado rosa/oro a todo el ancho con
   el texto centrado; acá pasa al mismo lenguaje que el resto —suelo oscuro,
   claqueta, ámbar solo en la acción— porque el gradiente competía con el
   contenido en vez de cerrarlo. */
export default function CTASection({
  title,
  description,
  primaryCTA = "Agenda 45 minutos",
  primaryHref = "/book-a-call",
  secondaryCTA,
  secondaryHref,
}: {
  title: string;
  description: string;
  primaryCTA?: string;
  primaryHref?: string;
  secondaryCTA?: string;
  secondaryHref?: string;
}) {
  return (
    <section className="relative isolate overflow-hidden border-t border-white/10 px-5 py-24 sm:px-10 lg:px-14">
      <div
        className="absolute inset-0 -z-10 bg-[radial-gradient(85%_120%_at_50%_100%,rgba(253,90,147,0.16),transparent_62%)]"
        aria-hidden="true"
      />
      <div className="mx-auto max-w-[1180px]">
        <p className="claqueta" data-motion>
          <span className="claqueta__punto" />
          El siguiente paso
        </p>
        <h2 className="rubro mt-5 max-w-[20ch]" data-motion style={{ ["--retardo" as string]: "80ms" }}>
          {title}
        </h2>
        <p
          className="mt-5 max-w-[62ch] text-[var(--niebla)]"
          data-motion
          style={{ ["--retardo" as string]: "140ms" }}
        >
          {description}
        </p>
        <div
          className="mt-9 flex flex-wrap gap-3"
          data-motion
          style={{ ["--retardo" as string]: "200ms" }}
        >
          <Link
            href={primaryHref}
            className="inline-flex items-center gap-2 rounded-full bg-[var(--rosa)] px-6 py-3.5 text-[15px] font-bold text-white transition-transform hover:-translate-y-0.5"
          >
            {primaryCTA}
            <span aria-hidden="true">→</span>
          </Link>
          {secondaryCTA && secondaryHref && (
            <Link
              href={secondaryHref}
              className="inline-flex items-center rounded-full border border-[var(--linea-viva)] px-6 py-3.5 text-[15px] font-semibold text-[var(--tiza)] transition-colors hover:border-[var(--haz)] hover:text-[var(--haz)]"
            >
              {secondaryCTA}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}

import Link from "next/link";

/**
 * Apertura de página interior.
 *
 * La home abre con una escena a pantalla completa; las interiores no pueden
 * repetir ese gesto sin que el sitio se vuelva una sucesión de portadas. Acá el
 * hero es más bajo y siempre trae una `nota` al costado: la frase que ordena la
 * página, en mono, funcionando como pie de foto de sí misma.
 */
export default function PageHero({
  claqueta,
  titulo,
  bajada,
  nota,
  cta,
}: {
  claqueta: string;
  titulo: React.ReactNode;
  bajada: string;
  nota?: string;
  cta?: { label: string; href: string };
}) {
  return (
    <section className="relative isolate overflow-hidden border-b border-white/10 px-5 pb-16 pt-20 sm:px-10 sm:pb-20 sm:pt-28 lg:px-14">
      <div
        className="absolute inset-0 -z-10 bg-[radial-gradient(110%_80%_at_18%_0%,rgba(253,90,147,0.13),transparent_58%),radial-gradient(90%_70%_at_88%_12%,rgba(255,177,72,0.10),transparent_60%)]"
        aria-hidden="true"
      />
      <div className="mx-auto grid w-full max-w-[1180px] gap-10 lg:grid-cols-[minmax(0,1.35fr)_minmax(0,0.65fr)] lg:items-end">
        <div className="min-w-0">
          <p className="claqueta" data-motion>
            <span className="claqueta__punto" />
            {claqueta}
          </p>
          <h1
            className="titular mt-5 lg:!text-[clamp(2.4rem,4.4vw,3.5rem)]"
            data-motion
            style={{ ["--retardo" as string]: "80ms" }}
          >
            {titulo}
          </h1>
          <p
            className="mt-6 max-w-[62ch] text-[clamp(1.02rem,1.5vw,1.2rem)] leading-relaxed text-[var(--niebla)]"
            data-motion
            style={{ ["--retardo" as string]: "160ms" }}
          >
            {bajada}
          </p>
          {cta && (
            <div className="mt-8" data-motion style={{ ["--retardo" as string]: "240ms" }}>
              <Link
                href={cta.href}
                className="inline-flex items-center gap-2 rounded-full bg-[var(--rosa)] px-6 py-3 text-[15px] font-bold text-white transition-transform hover:-translate-y-0.5"
              >
                {cta.label}
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          )}
        </div>

        {nota && (
          <p
            className="mono max-w-[34ch] border-l-2 border-[var(--haz)] pl-4 text-[11.5px] leading-[1.9] !tracking-[0.12em] !normal-case text-[var(--niebla)]"
            data-motion
            style={{ ["--retardo" as string]: "300ms" }}
          >
            {nota}
          </p>
        )}
      </div>
    </section>
  );
}

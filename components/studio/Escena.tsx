/**
 * Escena numerada — el ritmo que ordena la home y el catálogo de ewaffle.cl.
 *
 * La numeración no es decoración: dice cuántas quedan y en qué orden se leen.
 * Se extrajo acá porque las cuatro páginas interiores repetían el mismo bloque
 * (claqueta + rubro + bajada + separador superior) con variaciones accidentales
 * de espaciado.
 */
export default function Escena({
  id,
  n,
  rotulo,
  titulo,
  bajada,
  children,
  fondo,
}: {
  id?: string;
  n: string;
  rotulo: string;
  titulo: React.ReactNode;
  bajada?: string;
  children?: React.ReactNode;
  /** Tinte apenas más claro, para separar dos escenas seguidas sin una regla. */
  fondo?: boolean;
}) {
  return (
    <section
      id={id}
      className={`border-t border-white/10 px-5 py-20 sm:px-10 lg:px-14 lg:py-28 ${
        fondo ? "bg-[rgba(20,17,43,0.42)]" : ""
      }`}
    >
      <div className="mx-auto max-w-[1180px]">
        <p className="claqueta" data-motion>
          {n} · {rotulo}
        </p>
        <h2 className="rubro mt-5" data-motion style={{ ["--retardo" as string]: "80ms" }}>
          {titulo}
        </h2>
        {bajada && (
          <p
            className="mt-5 max-w-[66ch] text-[var(--niebla)]"
            data-motion
            style={{ ["--retardo" as string]: "140ms" }}
          >
            {bajada}
          </p>
        )}
        {children}
      </div>
    </section>
  );
}

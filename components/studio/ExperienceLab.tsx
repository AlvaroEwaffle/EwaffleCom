"use client";

import { useCallback, useEffect, useRef, useState } from "react";

export type Pieza = {
  id: string;
  etiqueta: string;
  titulo: string;
  beneficio: string;
  detalle: string[];
  img: string;
  alt: string;
  modo: "iframe" | "video";
  src: string;
  poster?: string;
  nota: string;
};

/**
 * La sala de experiencias.
 *
 * La regla que ordena todo esto: una página que vende experiencias de
 * aprendizaje no puede pedir que le crean. Cada pieza abre y CORRE acá dentro
 * —son las construcciones reales que recibieron clientes, servidas desde
 * ewaffle.cl— en vez de mandar al visitante a otra pestaña, que es como se
 * pierde a la mitad de la gente.
 */
export default function ExperienceLab({ piezas }: { piezas: Pieza[] }) {
  const [abierta, setAbierta] = useState<Pieza | null>(null);
  const [vistas, setVistas] = useState<string[]>([]);
  const focoPrevio = useRef<HTMLElement | null>(null);
  const cajaRef = useRef<HTMLDivElement | null>(null);

  const abrir = (p: Pieza, ev: React.MouseEvent) => {
    focoPrevio.current = ev.currentTarget as HTMLElement;
    setAbierta(p);
    setVistas((v) => (v.includes(p.id) ? v : [...v, p.id]));
  };

  const cerrar = useCallback(() => {
    setAbierta(null);
    focoPrevio.current?.focus();
  }, []);

  useEffect(() => {
    if (!abierta) {
      document.body.style.overflow = "";
      return;
    }
    document.body.style.overflow = "hidden";
    cajaRef.current?.querySelector<HTMLElement>("[data-cerrar]")?.focus();

    const alTeclear = (e: KeyboardEvent) => {
      if (e.key === "Escape") return cerrar();
      if (e.key !== "Tab" || !cajaRef.current) return;
      /* Trampa de foco: sin esto el tabulador se va a la página de atrás, que
         está tapada, y se navega a ciegas. */
      const focos = cajaRef.current.querySelectorAll<HTMLElement>(
        "a[href], button:not([disabled]), iframe, video, [tabindex]:not([tabindex='-1'])",
      );
      if (!focos.length) return;
      const primero = focos[0];
      const ultimo = focos[focos.length - 1];
      if (e.shiftKey && document.activeElement === primero) {
        e.preventDefault();
        ultimo.focus();
      } else if (!e.shiftKey && document.activeElement === ultimo) {
        e.preventDefault();
        primero.focus();
      }
    };

    document.addEventListener("keydown", alTeclear);
    return () => {
      document.removeEventListener("keydown", alTeclear);
      document.body.style.overflow = "";
    };
  }, [abierta, cerrar]);

  return (
    <>
      <p className="mono mb-6 text-[11px] text-[var(--niebla)]">
        <span className="text-[var(--haz)]">{vistas.length}</span> of {piezas.length} opened
      </p>

      <div className="grid gap-5 [grid-template-columns:repeat(auto-fill,minmax(330px,1fr))]">
        {piezas.map((p, i) => (
          <article
            key={p.id}
            data-motion
            style={{ ["--retardo" as string]: `${(i % 3) * 70}ms` }}
            className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-[var(--sala-2)] transition-transform duration-300 hover:-translate-y-1 hover:border-white/20"
          >
            <div className="relative aspect-[16/10] overflow-hidden bg-[#0f0d20]">
              <img
                src={p.img}
                alt={p.alt}
                width={1100}
                height={688}
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover object-top opacity-90 transition-transform duration-700 group-hover:scale-[1.045]"
              />
              <span className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[rgba(20,17,43,0.92)]" />
              {vistas.includes(p.id) && (
                <span className="mono absolute right-3 top-3 z-10 rounded-full bg-[rgba(15,122,82,0.92)] px-2.5 py-1 text-[9.5px] font-semibold text-[#eafaf3]">
                  Opened
                </span>
              )}
            </div>

            <div className="flex flex-1 flex-col gap-2.5 p-5">
              <span className="mono w-fit rounded bg-[rgba(253,90,147,0.14)] px-2 py-1 text-[9.5px] text-[#ff9dbf]">
                {p.etiqueta}
              </span>
              <h3 className="text-[1.24rem] font-bold leading-[1.24] tracking-[-0.024em] text-[var(--tiza)]">
                {p.titulo}
              </h3>
              <p className="text-[14.8px] leading-[1.58] text-[var(--niebla)]">{p.beneficio}</p>
              <ul className="lista-disco mt-1 grid gap-1 pl-[17px] text-[13.8px] leading-[1.5] text-[var(--niebla)] marker:text-[var(--haz)]">
                {p.detalle.map((d) => (
                  <li key={d}>{d}</li>
                ))}
              </ul>
              <button
                type="button"
                onClick={(ev) => abrir(p, ev)}
                className="mt-auto inline-flex min-h-[44px] w-fit cursor-pointer items-center gap-2 rounded-[10px] border border-[rgba(255,177,72,0.34)] bg-[rgba(255,177,72,0.09)] px-4 text-sm font-semibold text-[var(--haz)] transition-transform duration-200 hover:-translate-y-0.5 hover:border-[var(--haz)]"
              >
                <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 fill-current" aria-hidden="true">
                  <path d="M8 5v14l11-7z" />
                </svg>
                Run it here
              </button>
            </div>
          </article>
        ))}
      </div>

      {abierta && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={abierta.titulo}
          className="fixed inset-0 z-[10050] flex items-center justify-center p-2 sm:p-5"
        >
          <div className="absolute inset-0 bg-[rgba(5,4,10,0.9)] backdrop-blur-sm" onClick={cerrar} />
          <div
            ref={cajaRef}
            className="relative z-10 flex h-[min(88dvh,900px)] w-[min(1280px,100%)] flex-col overflow-hidden rounded-2xl border border-white/20 bg-[var(--sala-2)] shadow-[0_50px_130px_-30px_rgba(0,0,0,0.9)]"
          >
            <header className="flex items-center justify-between gap-4 border-b border-white/10 bg-[rgba(10,8,18,0.6)] px-4 py-2.5">
              <p className="flex min-w-0 flex-wrap items-center gap-x-2.5 gap-y-1">
                <span className="mono text-[10px] text-[var(--haz)]">Running</span>
                <b className="text-[14.5px] font-bold tracking-[-0.015em] text-[var(--tiza)]">{abierta.titulo}</b>
                <span className="text-[13px] text-[var(--niebla)]">{abierta.nota}</span>
              </p>
              <div className="flex shrink-0 items-center gap-2">
                <a
                  href={abierta.src}
                  target="_blank"
                  rel="noreferrer"
                  className="hidden min-h-[40px] items-center rounded-[9px] border border-white/20 px-3 text-[13px] font-semibold text-[var(--niebla)] hover:border-white/40 hover:text-[var(--tiza)] sm:inline-flex"
                >
                  Open in a tab
                </a>
                <button
                  type="button"
                  data-cerrar
                  onClick={cerrar}
                  aria-label="Close"
                  className="grid h-11 w-11 cursor-pointer place-items-center rounded-[10px] border border-white/20 bg-white/5 text-[var(--tiza)] hover:bg-white/15"
                >
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round">
                    <path d="M6 18 18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </header>

            <div className="relative min-h-0 flex-1 bg-[#08070f]">
              {abierta.modo === "video" ? (
                /* `preload="none"` no es un detalle: estos módulos pesan más de
                   100 MB y precargarlos le costaría los datos a cualquiera que
                   abra la página desde el celular sin pedir nada. */
                <video
                  key={abierta.src}
                  controls
                  playsInline
                  preload="none"
                  poster={abierta.poster}
                  src={abierta.src}
                  className="block h-full w-full bg-black object-contain"
                />
              ) : (
                <iframe
                  key={abierta.src}
                  title={abierta.titulo}
                  src={abierta.src}
                  className="block h-full w-full border-0 bg-white"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen; xr-spatial-tracking"
                  allowFullScreen
                />
              )}
            </div>

            <footer className="mono flex items-center justify-between gap-3 border-t border-white/10 px-4 py-2.5 text-[10.5px] text-[var(--niebla)]">
              <span>Real client build · runs in Spanish, the mechanics are the point</span>
              <span className="shrink-0 opacity-70">Esc to close</span>
            </footer>
          </div>
        </div>
      )}
    </>
  );
}

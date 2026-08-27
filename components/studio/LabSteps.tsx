"use client";

import { useState } from "react";

export type Paso = { n: string; k: string; t: string; d: string; sale: string };

/**
 * Los cinco pasos del Lab. Se despliegan de a uno en vez de listarse: el orden
 * es la información —el formato recién se decide en el paso 03— y una lista de
 * cinco viñetas pierde justamente eso.
 */
export default function LabSteps({ pasos }: { pasos: Paso[] }) {
  const [activo, setActivo] = useState(pasos[0].k);
  const paso = pasos.find((p) => p.k === activo) ?? pasos[0];

  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-[var(--sala-2)]">
      <div role="tablist" aria-label="The Lab process" className="grid grid-cols-2 md:grid-cols-5">
        {pasos.map((p, i) => {
          const suyo = p.k === activo;
          return (
            <button
              key={p.k}
              role="tab"
              id={`lab-tab-${p.k}`}
              aria-controls={`lab-panel-${p.k}`}
              aria-selected={suyo}
              tabIndex={suyo ? 0 : -1}
              onClick={() => setActivo(p.k)}
              onKeyDown={(e) => {
                const salto = e.key === "ArrowRight" ? 1 : e.key === "ArrowLeft" ? -1 : 0;
                if (!salto) return;
                e.preventDefault();
                const sig = pasos[(i + salto + pasos.length) % pasos.length];
                setActivo(sig.k);
                document.getElementById(`lab-tab-${sig.k}`)?.focus();
              }}
              className={`relative grid min-h-[88px] cursor-pointer content-start gap-1 border-b border-white/10 p-4 text-left transition-colors md:border-b-0 md:border-r md:last:border-r-0 ${
                suyo ? "bg-[rgba(255,177,72,0.07)] text-[var(--tiza)]" : "text-[var(--niebla)] hover:bg-white/5 hover:text-[var(--tiza)]"
              }`}
            >
              <span className="mono text-[11px] text-[var(--haz)]">{p.n}</span>
              <span className="text-[15px] font-semibold leading-tight tracking-[-0.015em]">{p.t}</span>
              {suyo && <span className="absolute inset-x-0 bottom-0 h-0.5 bg-[var(--haz)]" />}
            </button>
          );
        })}
      </div>

      <div
        role="tabpanel"
        id={`lab-panel-${paso.k}`}
        aria-labelledby={`lab-tab-${paso.k}`}
        className="border-t border-white/10 p-6 md:p-8"
      >
        <h3 className="text-xl font-bold tracking-[-0.022em] text-[var(--tiza)]">{paso.t}</h3>
        <p className="mt-2 max-w-[62ch] text-[var(--niebla)]">{paso.d}</p>
        <p className="mono mt-5 text-[10.5px] text-[var(--niebla)]">What you get</p>
        <p className="mt-1 max-w-[62ch] font-semibold text-[var(--tiza)]">{paso.sale}</p>
      </div>
    </div>
  );
}

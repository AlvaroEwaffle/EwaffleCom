"use client";

import { motion, useReducedMotion } from "framer-motion";

type Variant = "sip" | "buffalo" | "aiep";

interface CaseStudyVisualMockupProps {
  variant: Variant;
}

const mockups = {
  sip: {
    eyebrow: "LMS activo",
    title: "Ruta docente",
    metric: "84%",
    metricLabel: "avance cohorte",
    accent: "bg-accent",
    ring: "border-accent/30 border-t-accent",
    items: ["Modulo 1 listo", "Quiz aprobado", "Soporte activo"],
    feed: ["Nueva cohorte creada", "12 usuarios retomaron", "Reporte enviado"],
  },
  buffalo: {
    eyebrow: "Onboarding",
    title: "Primer turno",
    metric: "4 min",
    metricLabel: "capsula mobile",
    accent: "bg-gold",
    ring: "border-gold/30 border-t-gold",
    items: ["Bienvenida", "Checklist rol", "Validacion local"],
    feed: ["Mensaje WhatsApp", "Capsula iniciada", "Supervisor notificado"],
  },
  aiep: {
    eyebrow: "Trazabilidad",
    title: "Panel ejecutivo",
    metric: "3",
    metricLabel: "cohortes clave",
    accent: "bg-yellow-400",
    ring: "border-yellow-400/30 border-t-yellow-400",
    items: ["Avance por ruta", "Certificacion", "Reporte ejecutivo"],
    feed: ["Cohorte priorizada", "Brecha detectada", "Accion sugerida"],
  },
};

export default function CaseStudyVisualMockup({
  variant,
}: CaseStudyVisualMockupProps) {
  const reduceMotion = useReducedMotion();
  const data = mockups[variant];

  return (
    <div className="relative min-h-[360px] overflow-hidden rounded-2xl border border-white/10 bg-navy-950 p-5">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,89,145,0.18),transparent_34%),radial-gradient(circle_at_80%_70%,rgba(246,200,105,0.14),transparent_32%)]" />
      <div className="relative grid gap-4 sm:grid-cols-[0.82fr_1fr] sm:items-center">
        <motion.div
          className="mx-auto w-[190px] rounded-[2rem] border border-white/15 bg-slate-950 p-2 shadow-2xl shadow-black/30"
          initial={reduceMotion ? false : { opacity: 0, y: 16, scale: 0.96 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="overflow-hidden rounded-[1.55rem] bg-navy-900">
            <div className="px-4 pb-4 pt-8">
              <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-sky-300">
                {data.eyebrow}
              </p>
              <h3 className="mt-1 text-base font-bold text-white">
                {data.title}
              </h3>
              <div className="mt-4 rounded-2xl border border-white/10 bg-white/[0.05] p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-3xl font-extrabold text-white">
                      {data.metric}
                    </p>
                    <p className="mt-1 text-[10px] text-slate-400">
                      {data.metricLabel}
                    </p>
                  </div>
                  <motion.div
                    className={`h-11 w-11 rounded-full border-4 ${data.ring}`}
                    animate={reduceMotion ? undefined : { rotate: 360 }}
                    transition={
                      reduceMotion
                        ? undefined
                        : { duration: 5, repeat: Infinity, ease: "linear" }
                    }
                  />
                </div>
                <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/10">
                  <motion.div
                    className={`h-full rounded-full ${data.accent}`}
                    initial={{ width: "34%" }}
                    whileInView={reduceMotion ? undefined : { width: "78%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.9, delay: 0.2 }}
                  />
                </div>
              </div>
            </div>
            <div className="space-y-2 bg-navy-950 px-4 py-4">
              {data.items.map((item, index) => (
                <motion.div
                  key={item}
                  className="rounded-xl border border-white/10 bg-white/[0.04] px-3 py-2 text-[11px] font-semibold text-slate-200"
                  initial={reduceMotion ? false : { opacity: 0, x: -8 }}
                  whileInView={reduceMotion ? undefined : { opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.2 + index * 0.08 }}
                >
                  {item}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        <div className="space-y-3">
          <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
              Actividad
            </p>
            <div className="mt-4 space-y-3">
              {data.feed.map((item, index) => (
                <motion.div
                  key={item}
                  className="flex items-center gap-3 rounded-xl bg-navy-950/80 p-3"
                  initial={reduceMotion ? false : { opacity: 0, y: 8 }}
                  whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.25 + index * 0.1 }}
                >
                  <span className={`h-2.5 w-2.5 rounded-full ${data.accent}`} />
                  <span className="text-xs font-medium text-slate-300">
                    {item}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
          <motion.div
            className="rounded-2xl border border-white/10 bg-white/[0.04] p-4"
            animate={reduceMotion ? undefined : { y: [0, -6, 0] }}
            transition={
              reduceMotion
                ? undefined
                : { duration: 4.6, repeat: Infinity, ease: "easeInOut" }
            }
          >
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-sky-300">
              Vista ejecutiva
            </p>
            <p className="mt-2 text-sm leading-6 text-slate-300">
              Señales simples para decidir que reforzar, a quien activar y como
              reportar avance.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

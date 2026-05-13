"use client";

import { motion, useReducedMotion } from "framer-motion";

const dashboardItems = [
  ["Riesgo", "12%", "text-emerald-200"],
  ["XP", "840", "text-gold"],
  ["Racha", "3 dias", "text-sky-200"],
];

const quests = [
  {
    title: "Abrir estación",
    detail: "Checklist visual",
    status: "done",
    delay: 0.2,
  },
  {
    title: "Atender primer pedido",
    detail: "+40 XP al completar",
    status: "active",
    delay: 0.55,
  },
  {
    title: "Confirmar supervisor",
    detail: "Se desbloquea al final",
    status: "locked",
    delay: 0.9,
  },
];

export default function HeroDemoMockup() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="relative mx-auto flex w-full max-w-[760px] flex-col items-center gap-5 py-4 lg:flex-row lg:items-center lg:gap-6">
      <motion.div
        className="relative z-10 mx-auto w-[min(100%,19.5rem)] rounded-[2.2rem] border border-white/15 bg-slate-950 p-2.5 shadow-2xl shadow-black/40 md:w-[21rem] md:rounded-[2.5rem] md:p-3 lg:mx-0"
        initial={reduceMotion ? false : { opacity: 0, scale: 0.96, y: 18 }}
        animate={reduceMotion ? undefined : { opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="absolute left-1/2 top-2 z-20 h-7 w-28 -translate-x-1/2 rounded-full bg-black" />
        <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-navy-900">
          <div className="bg-gradient-to-br from-navy-800 via-navy-900 to-navy-950 px-5 pb-4 pt-12">
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-sky-300">
                  Mision del turno
                </p>
                <h2 className="mt-1 text-lg font-bold text-white">
                  Pasaporte Buffalo
                </h2>
              </div>
              <motion.div
                className="grid h-12 w-12 place-items-center rounded-2xl border border-gold/40 bg-gold/15 text-center text-[10px] font-extrabold leading-none text-gold"
                animate={reduceMotion ? undefined : { rotate: 360 }}
                transition={
                  reduceMotion
                    ? undefined
                    : { duration: 10, repeat: Infinity, ease: "linear" }
                }
              >
                LVL<br />2
              </motion.div>
            </div>
            <div className="mt-4 rounded-2xl border border-white/10 bg-white/[0.05] p-4">
              <div className="flex items-center justify-between text-xs text-slate-400">
                <span>Capsula 2/5</span>
                <span>840 XP</span>
              </div>
              <div className="mt-3 h-2 overflow-hidden rounded-full bg-white/10">
                <motion.div
                  className="h-full rounded-full bg-gradient-to-r from-accent to-gold"
                  initial={{ width: "42%" }}
                  animate={reduceMotion ? undefined : { width: ["42%", "78%"] }}
                  transition={
                    reduceMotion
                      ? undefined
                      : {
                          duration: 2.8,
                          repeat: Infinity,
                          repeatType: "reverse",
                          ease: "easeInOut",
                        }
                  }
                />
              </div>
            </div>
          </div>

          <div className="bg-[#0f1f1a] px-4 py-4">
            <div className="relative mx-auto mb-4 grid max-w-[230px] grid-cols-3 items-center">
              <div className="absolute left-8 right-8 top-5 h-1 rounded-full bg-white/10" />
              {[1, 2, 3].map((step, index) => (
                <div key={step} className="relative z-10 grid justify-items-center gap-1">
                  <div
                    className={`grid h-10 w-10 place-items-center rounded-full border text-xs font-extrabold ${
                      index === 0
                        ? "border-gold bg-gold text-navy-950"
                        : index === 1
                          ? "border-accent bg-accent text-white"
                          : "border-white/20 bg-navy-950 text-slate-500"
                    }`}
                  >
                    {step}
                  </div>
                  <span className="text-[9px] font-semibold uppercase tracking-[0.12em] text-slate-400">
                    {index === 0 ? "Listo" : index === 1 ? "Ahora" : "Boss"}
                  </span>
                </div>
              ))}
            </div>

            <div className="space-y-2.5">
              {quests.map((quest) => (
                <motion.div
                  key={quest.title}
                  className={`rounded-2xl border px-3 py-2.5 shadow-lg ${
                    quest.status === "active"
                      ? "border-accent/50 bg-white text-slate-950"
                      : quest.status === "done"
                        ? "border-emerald-300/40 bg-emerald-200 text-emerald-950"
                        : "border-white/10 bg-navy-950/80 text-slate-500"
                  }`}
                  initial={reduceMotion ? false : { opacity: 0, y: 10 }}
                  animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, delay: quest.delay }}
                >
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <p className="text-xs font-extrabold">{quest.title}</p>
                      <p className="mt-0.5 text-[10px] opacity-70">{quest.detail}</p>
                    </div>
                    <span
                      className={`grid h-7 w-7 shrink-0 place-items-center rounded-full text-[10px] font-extrabold ${
                        quest.status === "active"
                          ? "bg-accent text-white"
                          : quest.status === "done"
                            ? "bg-emerald-500 text-white"
                            : "bg-white/10 text-slate-500"
                      }`}
                    >
                      {quest.status === "done" ? "OK" : quest.status === "active" ? "+XP" : "--"}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="bg-navy-950 px-5 py-5">
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-3">
              <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-sky-300">
                Quiz rapido
              </p>
              <p className="mt-1 text-xs font-semibold leading-5 text-white">
                ¿Qué se revisa antes del primer pedido?
              </p>
            </div>
            <div className="mt-3 grid grid-cols-2 gap-3">
              {["Stock", "Checklist"].map((label) => (
                <button
                  key={label}
                  className="min-h-12 rounded-xl border border-white/10 bg-white/[0.04] text-xs font-bold text-white transition hover:border-accent/60 hover:bg-accent/10 focus:outline-none focus:ring-2 focus:ring-accent/50"
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      <div className="flex w-full flex-col gap-4 lg:w-[18rem] lg:pt-2">
        <motion.div
          className="w-full rounded-2xl border border-white/10 bg-white/[0.06] p-4 shadow-2xl shadow-black/30 backdrop-blur"
          initial={reduceMotion ? false : { opacity: 0, x: 18 }}
          animate={reduceMotion ? undefined : { opacity: 1, x: 0, y: [0, -8, 0] }}
          transition={
            reduceMotion
              ? undefined
              : {
                  opacity: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
                  x: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
                  y: { duration: 5, repeat: Infinity, ease: "easeInOut" },
                }
          }
        >
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-sky-300">
            Tablero
          </p>
          <div className="mt-3 grid grid-cols-3 gap-2">
            {dashboardItems.map(([label, value, color]) => (
              <div key={label} className="rounded-xl bg-navy-950/80 p-3">
                <div className={`text-lg font-extrabold ${color}`}>{value}</div>
                <div className="mt-1 text-[10px] text-slate-400">{label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="w-full rounded-2xl border border-accent/25 bg-accent/10 p-4 shadow-2xl shadow-accent/10 backdrop-blur"
          initial={reduceMotion ? false : { opacity: 0, x: 18 }}
          animate={reduceMotion ? undefined : { opacity: 1, x: 0, y: [0, 10, 0] }}
          transition={
            reduceMotion
              ? undefined
              : {
                  opacity: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
                  x: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
                  y: { duration: 5.4, repeat: Infinity, ease: "easeInOut" },
                }
          }
        >
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
            Alerta temprana
          </p>
          <p className="mt-2 text-sm leading-5 text-slate-200">
            8 usuarios sin avance necesitan intervención hoy.
          </p>
        </motion.div>
      </div>
    </div>
  );
}

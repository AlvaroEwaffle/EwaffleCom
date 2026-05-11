"use client";

import { motion, useReducedMotion } from "framer-motion";

const messages = [
  {
    side: "left",
    text: "Hola Sofia. Tu primer turno empieza en 20 min.",
    delay: 0.2,
  },
  {
    side: "right",
    text: "Estoy lista. ¿Que debo revisar primero?",
    delay: 0.55,
  },
  {
    side: "left",
    text: "Completa esta capsula de 4 min y confirma checklist.",
    delay: 0.9,
  },
];

const dashboardItems = [
  ["Riesgo", "12%", "text-emerald-200"],
  ["Avance", "78%", "text-sky-200"],
  ["Cohorte", "142", "text-gold"],
];

export default function HeroDemoMockup() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="relative mx-auto flex min-h-[350px] w-full max-w-[520px] items-start justify-center md:min-h-[520px] md:items-center lg:min-h-[560px]">
      <motion.div
        className="absolute left-0 top-12 hidden rounded-2xl border border-white/10 bg-white/[0.06] p-4 shadow-2xl shadow-black/30 backdrop-blur md:block"
        animate={reduceMotion ? undefined : { y: [0, -10, 0] }}
        transition={
          reduceMotion
            ? undefined
            : { duration: 5, repeat: Infinity, ease: "easeInOut" }
        }
      >
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-sky-300">
          Dashboard
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
        className="absolute bottom-16 right-0 hidden w-44 rounded-2xl border border-accent/30 bg-accent/10 p-4 shadow-2xl shadow-accent/10 backdrop-blur md:block"
        animate={reduceMotion ? undefined : { y: [0, 12, 0] }}
        transition={
          reduceMotion
            ? undefined
            : { duration: 5.4, repeat: Infinity, ease: "easeInOut" }
        }
      >
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
          Alerta temprana
        </p>
        <p className="mt-2 text-sm leading-5 text-slate-200">
          8 usuarios sin avance necesitan intervencion hoy.
        </p>
      </motion.div>

      <motion.div
        className="relative w-[232px] rounded-[2.2rem] border border-white/15 bg-slate-950 p-2.5 shadow-2xl shadow-black/40 md:w-[282px] md:rounded-[2.5rem] md:p-3"
        initial={reduceMotion ? false : { opacity: 0, scale: 0.96, y: 18 }}
        animate={reduceMotion ? undefined : { opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="absolute left-1/2 top-2 z-10 h-7 w-28 -translate-x-1/2 rounded-full bg-black" />
        <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-navy-900">
          <div className="bg-gradient-to-br from-navy-800 via-navy-900 to-navy-950 px-5 pb-5 pt-12">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-sky-300">
                  Demo vivo
                </p>
                <h2 className="mt-1 text-lg font-bold text-white">
                  Pasaporte Buffalo
                </h2>
              </div>
              <motion.div
                className="h-11 w-11 rounded-full border-4 border-accent/30 border-t-accent"
                animate={reduceMotion ? undefined : { rotate: 360 }}
                transition={
                  reduceMotion
                    ? undefined
                    : { duration: 4.5, repeat: Infinity, ease: "linear" }
                }
              />
            </div>
            <div className="mt-5 rounded-2xl border border-white/10 bg-white/[0.05] p-4">
              <div className="flex items-center justify-between text-xs text-slate-400">
                <span>Capsula 1/4</span>
                <span>4 min</span>
              </div>
              <div className="mt-3 h-2 overflow-hidden rounded-full bg-white/10">
                <motion.div
                  className="h-full rounded-full bg-accent"
                  initial={{ width: "28%" }}
                  animate={reduceMotion ? undefined : { width: ["28%", "76%"] }}
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

          <div className="space-y-3 bg-[#0f1f1a] px-4 py-5">
            {messages.map((message) => (
              <motion.div
                key={message.text}
                className={`max-w-[88%] rounded-2xl px-3 py-2 text-xs leading-5 shadow-lg ${
                  message.side === "right"
                    ? "ml-auto rounded-br-sm bg-[#d9fdd3] text-slate-950"
                    : "rounded-bl-sm bg-white text-slate-950"
                }`}
                initial={reduceMotion ? false : { opacity: 0, y: 10 }}
                animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: message.delay }}
              >
                {message.text}
              </motion.div>
            ))}
          </div>

          <div className="bg-navy-950 px-5 py-5">
            <div className="grid grid-cols-2 gap-3">
              {["Checklist", "Supervisor"].map((label) => (
                <button
                  key={label}
                  className="min-h-12 rounded-xl border border-white/10 bg-white/[0.04] text-xs font-bold text-white transition hover:border-accent/60 hover:bg-accent/10"
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

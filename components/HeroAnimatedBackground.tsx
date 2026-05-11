"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useMemo } from "react";

type GlyphKind = "square" | "triangle" | "circle" | "ring" | "plus" | "diamond";

interface Glyph {
  kind: GlyphKind;
  left: string;
  top: string;
  size: number;
  color: string;
  duration: number;
  delay: number;
  drift: number;
  rotate: number;
  opacity: number;
}

const palette = ["#ff5991", "#f6c869", "#90cbf2", "#7c5cff", "#4ade80"];

const glyphs: Glyph[] = [
  { kind: "square",   left: "8%",  top: "18%", size: 14, color: palette[0], duration: 9,  delay: 0.0, drift: 18, rotate: 35,  opacity: 0.55 },
  { kind: "triangle", left: "16%", top: "72%", size: 18, color: palette[1], duration: 11, delay: 1.2, drift: 22, rotate: -25, opacity: 0.50 },
  { kind: "ring",     left: "26%", top: "32%", size: 22, color: palette[2], duration: 13, delay: 0.6, drift: 14, rotate: 0,   opacity: 0.45 },
  { kind: "plus",     left: "38%", top: "82%", size: 16, color: palette[1], duration: 10, delay: 2.0, drift: 20, rotate: 45,  opacity: 0.45 },
  { kind: "diamond",  left: "46%", top: "12%", size: 12, color: palette[0], duration: 12, delay: 0.4, drift: 16, rotate: 30,  opacity: 0.55 },
  { kind: "circle",   left: "58%", top: "68%", size: 10, color: palette[3], duration: 8,  delay: 1.6, drift: 24, rotate: 0,   opacity: 0.55 },
  { kind: "square",   left: "70%", top: "22%", size: 16, color: palette[2], duration: 14, delay: 0.9, drift: 18, rotate: 20,  opacity: 0.45 },
  { kind: "triangle", left: "84%", top: "60%", size: 20, color: palette[4], duration: 11, delay: 2.4, drift: 22, rotate: -15, opacity: 0.45 },
  { kind: "ring",     left: "92%", top: "28%", size: 14, color: palette[0], duration: 10, delay: 1.8, drift: 16, rotate: 0,   opacity: 0.50 },
  { kind: "plus",     left: "78%", top: "88%", size: 14, color: palette[2], duration: 12, delay: 0.2, drift: 18, rotate: 0,   opacity: 0.45 },
];

function Shape({ kind, size, color }: { kind: GlyphKind; size: number; color: string }) {
  const stroke = 1.5;
  switch (kind) {
    case "square":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
          <rect x="3" y="3" width="18" height="18" rx="3" stroke={color} strokeWidth={stroke} />
        </svg>
      );
    case "triangle":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
          <path d="M12 3 L21 20 L3 20 Z" stroke={color} strokeWidth={stroke} strokeLinejoin="round" />
        </svg>
      );
    case "circle":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
          <circle cx="12" cy="12" r="5" />
        </svg>
      );
    case "ring":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="8" stroke={color} strokeWidth={stroke} />
        </svg>
      );
    case "plus":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
          <path d="M12 4 V20 M4 12 H20" stroke={color} strokeWidth={stroke} strokeLinecap="round" />
        </svg>
      );
    case "diamond":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
          <path d="M12 3 L21 12 L12 21 L3 12 Z" stroke={color} strokeWidth={stroke} strokeLinejoin="round" />
        </svg>
      );
  }
}

export default function HeroAnimatedBackground() {
  const reduceMotion = useReducedMotion();

  const items = useMemo(() => glyphs, []);

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 80% at 50% 0%, #131c36 0%, #0b1124 55%, #070a17 100%)",
        }}
      />

      <div
        className="absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage:
            "radial-gradient(rgba(144,203,242,0.35) 1px, transparent 1px)",
          backgroundSize: "26px 26px",
          maskImage:
            "radial-gradient(ellipse at center, rgba(0,0,0,0.9) 40%, rgba(0,0,0,0) 80%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at center, rgba(0,0,0,0.9) 40%, rgba(0,0,0,0) 80%)",
        }}
      />

      <motion.div
        className="absolute -left-32 top-[-10%] h-[520px] w-[520px] rounded-full blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(255,89,145,0.28), transparent 60%)" }}
        animate={
          reduceMotion
            ? undefined
            : { x: [0, 40, -20, 0], y: [0, 30, -10, 0], opacity: [0.6, 0.85, 0.6] }
        }
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute right-[-10%] top-[20%] h-[460px] w-[460px] rounded-full blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(124,92,255,0.25), transparent 60%)" }}
        animate={
          reduceMotion
            ? undefined
            : { x: [0, -30, 20, 0], y: [0, 20, -20, 0], opacity: [0.55, 0.8, 0.55] }
        }
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[-15%] left-[30%] h-[420px] w-[420px] rounded-full blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(246,200,105,0.18), transparent 60%)" }}
        animate={
          reduceMotion
            ? undefined
            : { x: [0, 25, -15, 0], y: [0, -20, 10, 0], opacity: [0.45, 0.7, 0.45] }
        }
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />

      {items.map((g, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{ left: g.left, top: g.top, opacity: g.opacity }}
          animate={
            reduceMotion
              ? undefined
              : {
                  y: [0, -g.drift, 0, g.drift, 0],
                  rotate: [0, g.rotate, 0],
                  opacity: [g.opacity, Math.min(1, g.opacity + 0.25), g.opacity],
                }
          }
          transition={{
            duration: g.duration,
            delay: g.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Shape kind={g.kind} size={g.size} color={g.color} />
        </motion.div>
      ))}

      <motion.div
        className="absolute left-[12%] top-[44%] h-[2px] w-[140px] rounded-full"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(144,203,242,0.6), transparent)",
        }}
        animate={
          reduceMotion ? undefined : { x: [0, 60, 0], opacity: [0.2, 0.6, 0.2] }
        }
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute right-[18%] top-[58%] h-[2px] w-[120px] rounded-full"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(255,89,145,0.55), transparent)",
        }}
        animate={
          reduceMotion ? undefined : { x: [0, -50, 0], opacity: [0.2, 0.55, 0.2] }
        }
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
      />

      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(10,14,26,0.55) 0%, rgba(10,14,26,0.65) 60%, rgba(10,14,26,0.92) 100%)",
        }}
      />
    </div>
  );
}

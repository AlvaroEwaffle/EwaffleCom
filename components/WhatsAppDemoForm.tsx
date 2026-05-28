"use client";

import { useEffect, useMemo, useState } from "react";
import {
  enrollDemo,
  fetchStatus,
  type EnrollResponse,
  type StatusResponse,
} from "@/lib/whatsappDemo";

type FormState = {
  name: string;
  role: string;
  company: string;
  phone: string;
  email: string;
};

const INITIAL_STATE: FormState = {
  name: "",
  role: "",
  company: "",
  phone: "",
  email: "",
};

const STATUS_LABEL: Record<StatusResponse["status"], string> = {
  "awaiting-keyword": "Esperando que envíes tu mensaje en WhatsApp",
  "in-progress": "Demo en curso — responde a cada pregunta",
  "awaiting-next-lesson":
    "Lección entregada. La siguiente llega automáticamente — revisa tu WhatsApp.",
  completed: "Demo completado 🎉",
  "abandoned-manual": "Demo cancelado",
  "abandoned-timeout": "Sin actividad reciente — pausamos el demo",
};

export default function WhatsAppDemoForm() {
  const [form, setForm] = useState<FormState>(INITIAL_STATE);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [enrollment, setEnrollment] = useState<EnrollResponse | null>(null);
  const [status, setStatus] = useState<StatusResponse | null>(null);
  const [showHowItWorks, setShowHowItWorks] = useState(false);

  useEffect(() => {
    if (!enrollment) return;
    let cancelled = false;

    const poll = async () => {
      try {
        const next = await fetchStatus(enrollment.shareKey);
        if (!cancelled) setStatus(next);
      } catch {
        // ignored — best-effort
      }
    };

    void poll();
    const id = setInterval(poll, 8_000);
    return () => {
      cancelled = true;
      clearInterval(id);
    };
  }, [enrollment]);

  const handleChange = (key: keyof FormState) =>
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setForm((prev) => ({ ...prev, [key]: event.target.value }));
    };

  const previewMessage = useMemo(() => {
    const intro: string[] = [];
    if (form.name.trim()) intro.push(`soy ${form.name.trim()}`);
    if (form.role.trim()) intro.push(form.role.trim());
    if (form.company.trim()) intro.push(`de ${form.company.trim()}`);
    const greeting = intro.length ? `Hola, ${intro.join(", ")}.` : "Hola.";
    return `${greeting} Quiero probar el demo de Ewaffle. Código: DEMOEW-…`;
  }, [form.name, form.role, form.company]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);
    setSubmitting(true);
    try {
      const sourceUrl =
        typeof window !== "undefined" ? window.location.href : undefined;
      const response = await enrollDemo({
        name: form.name.trim(),
        role: form.role.trim() || undefined,
        company: form.company.trim() || undefined,
        phone: form.phone.trim(),
        email: form.email.trim() || undefined,
        sourceUrl,
      });
      setEnrollment(response);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Algo salió mal — intenta de nuevo.",
      );
    } finally {
      setSubmitting(false);
    }
  };

  if (enrollment) {
    const progress = status
      ? `${Math.min(
          status.currentLesson + 1,
          status.totalLessons || status.currentLesson + 1,
        )}/${status.totalLessons || "—"}`
      : "—";
    return (
      <div className="rounded-2xl border border-emerald-400/40 bg-emerald-400/10 p-8">
        <h3 className="text-2xl font-bold text-white">Casi listo — abre WhatsApp</h3>
        <p className="mt-3 text-base leading-7 text-slate-200">
          Toca el botón. Te abre WhatsApp con el mensaje pre-cargado debajo. Solo dale enviar y empieza el demo.
        </p>

        <div className="mt-5 rounded-xl border border-emerald-300/30 bg-navy-950/40 p-5 text-sm">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-emerald-300">
            Este es el mensaje que vas a enviar
          </p>
          <p className="mt-3 whitespace-pre-line font-mono text-[13px] leading-6 text-slate-100">
            {enrollment.prefilledMessage ??
              `Hola, soy ${form.name}. Quiero probar el demo de Ewaffle. Código: ${enrollment.fullKeyword}`}
          </p>
          <p className="mt-3 text-xs text-slate-400">
            Tu nombre y empresa quedan registrados en la conversación. El código
            <span className="font-mono text-emerald-300"> {enrollment.fullKeyword} </span>
            identifica tu sesión.
          </p>
        </div>

        <a
          href={enrollment.waLink}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center justify-center rounded-xl bg-emerald-500 px-6 py-3 text-base font-bold text-navy-950 transition hover:bg-emerald-400 focus:outline-none focus:ring-4 focus:ring-emerald-300/40"
        >
          Abrir WhatsApp y enviar
        </a>
        <p className="mt-4 text-xs text-slate-400">
          Número del demo: <span className="font-mono">{enrollment.demoNumber}</span>
        </p>
        <div className="mt-8 rounded-xl border border-white/10 bg-navy-950/40 p-5 text-sm text-slate-200">
          <p className="font-semibold uppercase tracking-[0.16em] text-emerald-300">
            Estado del demo
          </p>
          <p className="mt-2 text-base">
            {status ? STATUS_LABEL[status.status] : "Conectando..."}
          </p>
          {status && status.status !== "awaiting-keyword" && (
            <p className="mt-1 text-xs text-slate-400">
              Progreso: lección {progress}
            </p>
          )}
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 md:grid-cols-2">
        <Field
          label="Nombre"
          required
          value={form.name}
          onChange={handleChange("name")}
        />
        <Field label="Cargo" value={form.role} onChange={handleChange("role")} />
        <Field
          label="Empresa"
          value={form.company}
          onChange={handleChange("company")}
        />
        <Field
          label="Email (opcional)"
          type="email"
          value={form.email}
          onChange={handleChange("email")}
        />
      </div>
      <Field
        label="WhatsApp con código país (ej. +56920115198)"
        required
        type="tel"
        placeholder="+56920115198"
        value={form.phone}
        onChange={handleChange("phone")}
      />

      {form.name.trim() && (
        <div className="rounded-xl border border-emerald-300/30 bg-emerald-300/5 p-4 text-sm">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-emerald-300">
            Vista previa del mensaje que vas a enviar
          </p>
          <p className="mt-2 whitespace-pre-line font-mono text-[13px] leading-6 text-slate-100">
            {previewMessage}
          </p>
        </div>
      )}

      <button
        type="button"
        onClick={() => setShowHowItWorks((v) => !v)}
        className="flex w-full items-center justify-between rounded-xl border border-white/10 bg-navy-950/40 px-4 py-3 text-sm font-semibold text-slate-200 transition hover:border-white/20"
      >
        <span>¿Qué hacemos con tus datos?</span>
        <span className="text-xs text-slate-400">
          {showHowItWorks ? "Ocultar ↑" : "Ver ↓"}
        </span>
      </button>
      {showHowItWorks && (
        <div className="space-y-3 rounded-xl border border-white/10 bg-navy-950/40 p-5 text-sm leading-6 text-slate-300">
          <p>
            <strong className="text-white">A dónde va tu información.</strong>{" "}
            Tu nombre, cargo, empresa y WhatsApp se guardan en el LMS de Ewaffle
            (mongo) como un enrollment del curso{" "}
            <span className="font-mono text-emerald-300">data-no-estructurada</span>
            . Quedan asociados a tu cuenta para que veas el avance en
            plataforma.ewaffle.cl.
          </p>
          <p>
            <strong className="text-white">Qué sucede al enviar el form.</strong>{" "}
            (1) Generamos un código único{" "}
            <span className="font-mono text-emerald-300">DEMOEW-xxxx</span>; (2)
            te abrimos WhatsApp con el mensaje preformado (lo ves arriba); (3) al
            enviar, el código activa el orchestrator y comienza la conversación
            del demo.
          </p>
          <p>
            <strong className="text-white">Para qué guardamos esto.</strong>{" "}
            Solo para entregar el demo + medir progreso (qué lecciones
            completaste, en qué te quedaste). No te enviamos marketing
            automático. Si quieres que borremos tu data, escríbenos a{" "}
            <a
              href="mailto:hola@ewaffle.cl"
              className="text-emerald-300 underline"
            >
              hola@ewaffle.cl
            </a>
            .
          </p>
        </div>
      )}

      {error && (
        <p className="rounded-lg border border-red-400/40 bg-red-400/10 px-4 py-3 text-sm text-red-200">
          {error}
        </p>
      )}
      <button
        type="submit"
        disabled={submitting}
        className="w-full rounded-xl bg-accent px-6 py-4 text-base font-bold text-white transition hover:bg-accent-hover focus:outline-none focus:ring-4 focus:ring-accent/30 disabled:opacity-50"
      >
        {submitting ? "Generando demo..." : "Recibir demo en mi WhatsApp"}
      </button>
      <p className="text-xs text-slate-400">
        3 lecciones reply-driven con spaced repetition (24h y 72h entre clases). Tomas
        ~10 minutos en total. Tu teléfono solo se usa para entregar el demo.
      </p>
    </form>
  );
}

type FieldProps = {
  label: string;
  required?: boolean;
  type?: string;
  placeholder?: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

function Field({
  label,
  required,
  type = "text",
  placeholder,
  value,
  onChange,
}: FieldProps) {
  return (
    <label className="block">
      <span className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">
        {label}
        {required && " *"}
      </span>
      <input
        type={type}
        required={required}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="mt-2 w-full rounded-lg border border-white/10 bg-navy-950/60 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30"
      />
    </label>
  );
}

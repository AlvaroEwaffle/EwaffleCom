"use client";

import { useEffect, useRef, useState } from "react";
import type { FormEvent } from "react";

const CAPU_SCHEDULE_URL =
  "https://capu.villelab.com/schedule/reunion-descubrimiento-con-alvaro/";

const FIDELIDAPP_LEAD_URL = "https://api.fidelidapp.cl/api/mcp/clients/add";
const FIDELIDAPP_API_KEY =
  "1000782937f7872abdc0e4fadc467bbcea6b353420aed09c29f036f3b0fa2056";

const services = [
  { value: "", label: "Selecciona un servicio (opcional)" },
  { value: "plataforma_lms", label: "Plataforma LMS customizada" },
  { value: "onboarding_journeys", label: "Journeys de onboarding" },
  { value: "bundle_plataforma_cursos", label: "Bundle Plataforma + Cursos Gamificados" },
  { value: "chatbots_ia", label: "Chatbots IA / Asistentes IA" },
  { value: "gamificacion", label: "Gamificación Avanzada" },
  { value: "produccion_multimedia", label: "Producción Multimedia" },
  { value: "videos_360_onboarding", label: "Videos 360 para onboarding e-learning" },
  { value: "certificaciones", label: "Certificaciones Digitales" },
  { value: "soluciones_empresariales", label: "Soluciones Empresariales" },
];

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
    emailjs?: {
      init: (publicKey: string) => void;
      send: (
        serviceId: string,
        templateId: string,
        params: Record<string, string>,
      ) => Promise<unknown>;
    };
    fbq?: (...args: unknown[]) => void;
  }
}

type Status = "idle" | "submitting" | "error";

export default function LeadCaptureForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");
  const emailJsReadyRef = useRef(false);

  useEffect(() => {
    if (window.emailjs) {
      window.emailjs.init("K-nZvIRLeVaUXubMu");
      emailJsReadyRef.current = true;
      return;
    }

    const script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js";
    script.async = true;
    script.onload = () => {
      window.emailjs?.init("K-nZvIRLeVaUXubMu");
      emailJsReadyRef.current = true;
    };
    document.body.appendChild(script);
  }, []);

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const honeypot = String(formData.get("companyWebsite") || "").trim();

    if (honeypot) {
      return;
    }

    const firstName = String(formData.get("firstName") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const phone = String(formData.get("phone") || "").trim();
    const company = String(formData.get("company") || "").trim();
    const service = String(formData.get("service") || "").trim();
    const message = String(formData.get("message") || "").trim();

    if (!firstName || !email || !company || !message) {
      setError("Completa nombre, email corporativo, empresa y necesidad para continuar.");
      return;
    }

    setStatus("submitting");

    try {
      await fetch(FIDELIDAPP_LEAD_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-MCP-API-Key": FIDELIDAPP_API_KEY,
        },
        body: JSON.stringify({
          slug: "ewaffle",
          clientData: {
            name: firstName,
            email,
            phoneNumber: phone,
          },
        }),
      }).catch(() => null);

      if (emailJsReadyRef.current && window.emailjs) {
        const companyLabel = company || "Sin Empresa";

        await window.emailjs.send("service_d08f3xv", "template_b6dnfrh", {
          firstName,
          lastName: "",
          email,
          phone,
          company,
          institution: company,
          role: "ewafflecom_landing",
          services: service,
          message,
          subject: `[${companyLabel}] Contacto Web - Ewaffle.com`,
          reply_to: email,
          to_email: "alvaro@ewaffle.cl",
          cc_email: "jose@ewaffle.cl",
          recaptchaToken: "",
        });
      }

      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: "generate_lead",
        form_name: "ewafflecom_contact_form",
        destination_url: CAPU_SCHEDULE_URL,
      });
      window.fbq?.("track", "Lead");

      window.location.href = CAPU_SCHEDULE_URL;
    } catch (submitError) {
      console.error("Lead capture submit error", submitError);
      setStatus("error");
      setError(
        "Hubo un problema al enviar tus datos. Puedes intentar de nuevo o agendar directo.",
      );
    }
  };

  const submitting = status === "submitting";

  return (
    <section id="contact" className="bg-navy-950 py-20 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-sky-300">
            Deja tus datos
          </p>
          <h2 className="mt-4 text-4xl font-extrabold tracking-tight md:text-5xl">
            Cuéntanos el caso y agenda con más contexto.
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-300">
            Primero capturamos la necesidad, empresa y servicio de interés.
            Después te llevamos directo a Capu para elegir horario.
          </p>
          <div className="mt-8 rounded-lg border border-white/10 bg-white/[0.04] p-5 text-sm leading-6 text-slate-300">
            Ideal si quieres que lleguemos a la discovery con foco: operación,
            audiencia, urgencia, plataforma actual y oportunidad concreta.
          </div>
        </div>

        <form
          onSubmit={onSubmit}
          className="rounded-2xl border border-white/10 bg-navy-900 p-6 shadow-2xl shadow-black/20 md:p-8"
        >
          <input
            type="text"
            name="companyWebsite"
            tabIndex={-1}
            autoComplete="off"
            className="hidden"
            aria-hidden="true"
          />

          <div>
            <label htmlFor="firstName" className="block text-sm font-semibold text-slate-200">
              Nombre *
            </label>
            <input
              id="firstName"
              name="firstName"
              type="text"
              required
              placeholder="Tu nombre"
              className="mt-2 w-full rounded-lg border border-white/10 bg-white px-4 py-3 text-base text-slate-950 outline-none transition focus:border-accent focus:ring-4 focus:ring-accent/20"
            />
          </div>

          <div className="mt-5 grid gap-5 md:grid-cols-2">
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-slate-200">
                Email corporativo *
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="tu@empresa.com"
                className="mt-2 w-full rounded-lg border border-white/10 bg-white px-4 py-3 text-base text-slate-950 outline-none transition focus:border-accent focus:ring-4 focus:ring-accent/20"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-semibold text-slate-200">
                Teléfono
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                placeholder="+56 9 1234 5678"
                className="mt-2 w-full rounded-lg border border-white/10 bg-white px-4 py-3 text-base text-slate-950 outline-none transition focus:border-accent focus:ring-4 focus:ring-accent/20"
              />
            </div>
          </div>

          <div className="mt-5">
            <label htmlFor="company" className="block text-sm font-semibold text-slate-200">
              Empresa u organización *
            </label>
            <input
              id="company"
              name="company"
              type="text"
              required
              placeholder="Nombre de tu empresa"
              className="mt-2 w-full rounded-lg border border-white/10 bg-white px-4 py-3 text-base text-slate-950 outline-none transition focus:border-accent focus:ring-4 focus:ring-accent/20"
            />
          </div>

          <div className="mt-5">
            <label htmlFor="service" className="block text-sm font-semibold text-slate-200">
              Servicio de interés
            </label>
            <select
              id="service"
              name="service"
              className="mt-2 w-full rounded-lg border border-white/10 bg-white px-4 py-3 text-base text-slate-950 outline-none transition focus:border-accent focus:ring-4 focus:ring-accent/20"
            >
              {services.map((service) => (
                <option key={service.value} value={service.value}>
                  {service.label}
                </option>
              ))}
            </select>
          </div>

          <div className="mt-5">
            <label htmlFor="message" className="block text-sm font-semibold text-slate-200">
              Cuéntanos qué necesitas *
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              placeholder="Describe brevemente el caso, audiencia, urgencia o plataforma actual..."
              className="mt-2 w-full resize-none rounded-lg border border-white/10 bg-white px-4 py-3 text-base text-slate-950 outline-none transition focus:border-accent focus:ring-4 focus:ring-accent/20"
            />
          </div>

          {error ? (
            <p className="mt-5 rounded-lg border border-red-400/30 bg-red-400/10 px-4 py-3 text-sm text-red-100">
              {error}
            </p>
          ) : null}

          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm leading-6 text-slate-400">
              Al enviar, guardamos el lead y abrimos la agenda de Capu.
            </p>
            <button
              type="submit"
              disabled={submitting}
              className="min-h-12 rounded-lg bg-accent px-7 py-3 text-sm font-bold text-white shadow-lg shadow-accent/20 transition hover:bg-accent-hover focus:outline-none focus:ring-4 focus:ring-accent/30 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {submitting ? "Enviando..." : "Enviar y agendar"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

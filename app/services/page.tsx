import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Servicios",
  description:
    "Servicios de Ewaffle.com para LMS a medida, onboarding masivo, WhatsApp learning, reportería ejecutiva y produccion de capsulas.",
};

const services = [
  {
    title: "LMS a medida",
    desc: "Plataformas branded para operaciones con usuarios, cohortes, avance y soporte.",
    details:
      "Diseñamos y configuramos una experiencia LMS que no se siente generica: marca, rutas, usuarios, roles, dashboard y reglas de seguimiento listas para operar con equipos reales.",
    features: [
      "Arquitectura de rutas y cohortes",
      "Marca y experiencia visual",
      "Usuarios, roles y permisos",
      "Dashboard ejecutivo",
      "Soporte de adopcion",
      "Go-live con criterios de salida",
    ],
    color: "border-accent",
    accent: "text-accent",
    bg: "bg-accent/10",
  },
  {
    title: "Onboarding de primera linea",
    desc: "Capsulas cortas para equipos de sala, cocina, tiendas, planta o terreno.",
    details:
      "Convertimos procedimientos, protocolos y tareas criticas en experiencias breves que una persona puede completar antes o durante su primer turno.",
    features: [
      "Pasaporte de onboarding",
      "Checklist por rol",
      "Microcapsulas mobile-first",
      "Simulaciones y escenarios",
      "Validacion del supervisor",
      "Reporte de avance por local o unidad",
    ],
    color: "border-gold",
    accent: "text-gold",
    bg: "bg-gold/10",
  },
  {
    title: "WhatsApp learning",
    desc: "Activacion directa cuando el usuario no entra solo al LMS.",
    details:
      "Usamos WhatsApp y email como canales de empuje para recordatorios, capsulas, confirmaciones y alertas. El objetivo es mover avance, no solo publicar contenido.",
    features: [
      "Flujos de activacion",
      "Mensajes por etapa",
      "Recordatorios y nudges",
      "Confirmaciones de completion",
      "Alertas a supervisores",
      "Integracion con reportería",
    ],
    color: "border-yellow-400",
    accent: "text-yellow-400",
    bg: "bg-yellow-400/10",
  },
  {
    title: "Reportería y alertas tempranas",
    desc: "Señales accionables antes de que la cohorte abandone.",
    details:
      "Transformamos datos de uso en una vista ejecutiva simple: avance, prioridades, usuarios bloqueados, cohortes lentas y acciones sugeridas para el equipo cliente.",
    features: [
      "Indicadores de avance",
      "Riesgo por cohorte",
      "Usuarios sin traccion",
      "Reporte semanal",
      "Playbooks de intervencion",
      "Vista ejecutiva para responsables",
    ],
    color: "border-purple-400",
    accent: "text-purple-400",
    bg: "bg-purple-400/10",
  },
  {
    title: "Produccion de capsulas",
    desc: "Ewaffle.cl produce contenido; Ewaffle.com lo convierte en tecnologia aplicable.",
    details:
      "Ewaffle.cl mantiene la capacidad de produccion de capsulas. Ewaffle.com toma esa base y la transforma en soluciones con plataforma, canales, soporte y modelo comercial claro.",
    features: [
      "Guion instruccional",
      "Diseño visual y animacion",
      "Capsulas SCORM/xAPI cuando aplica",
      "Video 360 para onboarding",
      "Gamificacion sobria",
      "QA pedagogico y tecnico",
    ],
    color: "border-cyan-400",
    accent: "text-cyan-300",
    bg: "bg-cyan-400/10",
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-navy-900 to-navy-950 py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h1 className="text-4xl font-extrabold text-white md:text-5xl">
            Servicios para convertir capacitacion en operacion
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-300">
            Ewaffle.com vende soluciones LMS a medida para empresas que necesitan
            activar, medir y sostener aprendizaje en equipos grandes.
          </p>
        </div>
      </section>

      <section className="bg-navy-950 pb-8">
        <div className="mx-auto max-w-6xl px-6">
          <div className="rounded-2xl border border-cyan-400/20 bg-gradient-to-br from-cyan-400/10 via-navy-900 to-navy-950 p-8 md:p-10">
            <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div>
                <span className="inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
                  Tecnologia aplicada a capacitacion
                </span>
                <h2 className="mt-5 text-3xl font-bold text-white">
                  Priorizamos oportunidades con potencial real de compra
                </h2>
                <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-300">
                  La web debe ayudar a vender: explicar el modelo, mostrar casos
                  vivos y llevar a una discovery con necesidad, responsable y presupuesto.
                </p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  "Colegios SIP",
                  "Buffalo Waffles",
                  "AIEP / empresas grandes",
                  "Google Ads listo para test",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/10 bg-navy-950/70 px-5 py-4 text-sm font-medium text-slate-200"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-navy-950 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading
            title="Servicios"
            subtitle="Cinco piezas para pasar de contenido suelto a sistema de aprendizaje operativo."
          />
          <div className="mt-16 space-y-12">
            {services.map((s) => (
              <div
                key={s.title}
                className={`rounded-2xl border-l-4 ${s.color} bg-navy-900 p-8 md:p-12`}
              >
                <div className="grid gap-8 md:grid-cols-2">
                  <div>
                    <h3 className="text-2xl font-bold text-white">
                      {s.title}
                    </h3>
                    <p className="mt-2 text-lg text-slate-300">{s.desc}</p>
                    <p className="mt-4 text-sm leading-relaxed text-slate-400">
                      {s.details}
                    </p>
                  </div>
                  <div>
                    <h4
                      className={`text-sm font-semibold uppercase tracking-wider ${s.accent}`}
                    >
                      Incluye
                    </h4>
                    <ul className="mt-4 space-y-3">
                      {s.features.map((f) => (
                        <li
                          key={f}
                          className="flex items-start gap-3 text-sm text-slate-300"
                        >
                          <svg
                            className={`mt-0.5 h-4 w-4 shrink-0 ${s.accent}`}
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="m4.5 12.75 6 6 9-13.5"
                            />
                          </svg>
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Definamos la demo que abre la propuesta"
        description="En discovery elegimos un caso de uso, un owner cliente y el paquete comercial correcto."
        primaryCTA="Agendar discovery"
      />
    </>
  );
}

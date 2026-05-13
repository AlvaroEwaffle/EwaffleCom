import type { Metadata } from "next";
import Image from "next/image";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Sobre Ewaffle",
  description:
    "Ewaffle.com es el frente tecnológico de Ewaffle para LMS a medida, onboarding mobile y capacitación trazable.",
};

const metrics = [
  { value: "50+", label: "organizaciones atendidas" },
  { value: "200+", label: "cápsulas y cursos producidos" },
  { value: "5+", label: "años en EdTech" },
  { value: "3", label: "frentes activos de venta" },
];

const team = [
  {
    name: "Alvaro Villena",
    role: "Producto, estrategia y discovery",
    bio: "Define el problema, el alcance comercial y la experiencia que debe vivir el cliente antes de construir.",
    image: "/team/Alvaro.png",
    initials: "AV",
  },
  {
    name: "Jose Antonio",
    role: "Comercial y relación con clientes",
    bio: "Acompaña oportunidades, propuestas y conversaciones para convertir necesidades reales en proyectos viables.",
    initials: "JA",
  },
  {
    name: "Bruno Santimaria",
    role: "Developer",
    bio: "Convierte los flujos, plataformas y dashboards en producto funcional, escalable y listo para operar.",
    initials: "BS",
  },
];

const values = [
  {
    title: "Tecnologia aplicada",
    desc: "No vendemos solo cursos: diseñamos sistemas para activar, medir y mejorar aprendizaje.",
  },
  {
    title: "Demo antes que promesa",
    desc: "Si hay buen match, mostramos una demo visual acotada antes de pedir un compromiso grande.",
  },
  {
    title: "Operacion medible",
    desc: "El foco no es publicar contenido; es activar usuarios, detectar señales de seguimiento y reportar avance.",
  },
  {
    title: "Alcance cerrado",
    desc: "Cada proyecto entra con responsable, timeline, criterios de salida y modelo comercial claro.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section
        className="relative overflow-hidden bg-navy-950 py-24"
        style={{
          backgroundImage:
            "linear-gradient(180deg, rgba(15,22,41,0.78), rgba(10,14,26,0.96)), url('/assets/HeroBackground.png')",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="relative mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-[1fr_0.85fr] lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-sky-300">
              Parte de Ewaffle
            </p>
            <h1 className="mt-5 text-4xl font-extrabold leading-tight text-white md:text-6xl">
              El equipo tecnológico que convierte capacitación en plataforma
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              Ewaffle.com es la línea tecnológica de Ewaffle: diseña LMS a
              medida, onboarding mobile, automatizaciones y reportería para que
              la capacitación no termine en un archivo, sino en una experiencia
              medible.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-5 backdrop-blur">
            <div className="rounded-2xl border border-white/10 bg-navy-950/80 p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
                Como trabajamos
              </p>
              <div className="mt-5 space-y-4">
                {[
                  "Discovery para entender la necesidad",
                  "Demo visual si hay match",
                  "Build con alcance, timeline y responsables",
                  "Soporte y mejora continua",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm font-semibold text-slate-200"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-navy-950 py-16">
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {metrics.map((m) => (
              <div key={m.label} className="text-center">
                <div className="text-4xl font-extrabold text-accent">
                  {m.value}
                </div>
                <div className="mt-2 text-sm text-slate-400">{m.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy-900 py-24">
        <div className="mx-auto max-w-3xl px-6">
          <SectionHeading title="Desde donde venimos" />
          <div className="mt-10 space-y-6 text-sm leading-relaxed text-slate-400 md:text-base">
            <p>
              Ewaffle ya tiene experiencia produciendo cápsulas, cursos y
              experiencias de aprendizaje para organizaciones. Ewaffle.com toma
              esa capacidad y la lleva al terreno tecnológico: plataformas,
              rutas, usuarios, canales, dashboards y seguimiento.
            </p>
            <p>
              La promesa es simple: que el cliente pueda ver su caso funcionando
              antes de comprometer un proyecto completo, y que cada build tenga
              un alcance claro desde el primer dia.
            </p>
            <p>
              Esta línea existe para empresas que necesitan activar usuarios en
              contextos reales: colegios, primera línea, operaciones
              distribuidas, compliance, onboarding y capacitación masiva.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-navy-950 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading
            title="Equipo"
            subtitle="Un equipo pequeño, senior y directo: discovery, venta consultiva y desarrollo trabajando sobre el mismo caso."
          />
          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {team.map((member) => (
              <article
                key={member.name}
                className="rounded-2xl border border-white/10 bg-navy-900 p-6"
              >
                {member.image ? (
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={320}
                    height={320}
                    className="aspect-square w-full rounded-2xl object-cover"
                    priority={member.name === "Alvaro Villena"}
                  />
                ) : (
                  <div className="flex aspect-square w-full items-center justify-center rounded-2xl border border-white/10 bg-gradient-to-br from-accent/25 via-navy-800 to-gold/20 text-5xl font-extrabold text-white">
                    {member.initials}
                  </div>
                )}
                <h3 className="mt-6 text-xl font-bold text-white">
                  {member.name}
                </h3>
                <p className="mt-1 text-sm font-semibold text-accent">
                  {member.role}
                </p>
                <p className="mt-4 text-sm leading-6 text-slate-400">
                  {member.bio}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        className="bg-navy-900 py-24"
        style={{
          backgroundImage:
            "linear-gradient(180deg, rgba(15,22,41,0.92), rgba(15,22,41,0.96)), url('/assets/CourseBg.png')",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="mx-auto max-w-5xl px-6">
          <SectionHeading title="Principios de trabajo" />
          <div className="mt-16 grid gap-8 md:grid-cols-2">
            {values.map((v) => (
              <div
                key={v.title}
                className="rounded-2xl border border-white/10 bg-navy-950/80 p-8 backdrop-blur"
              >
                <h3 className="text-lg font-bold text-white">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Hablemos de una oportunidad concreta"
        description="La mejor entrada es un caso vivo: un equipo, una ruta, un deadline y un responsable con una necesidad clara."
      />
    </>
  );
}

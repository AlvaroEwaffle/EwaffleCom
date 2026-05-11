import type { Metadata } from "next";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Ideas practicas sobre LMS a medida, onboarding, reportería y aprendizaje operativo.",
};

const posts = [
  {
    category: "Revenue",
    title: "Como convertir una conversacion activa en piloto comercial",
    readTime: "8 min lectura",
    date: "Mayo 2026",
    description:
      "Un piloto funciona cuando muestra el caso del cliente, reduce incertidumbre y deja claro el camino hacia una propuesta completa.",
    color: "bg-accent/10 text-accent",
  },
  {
    category: "LMS",
    title: "Por que un LMS a medida necesita canal activo, no solo login",
    readTime: "6 min lectura",
    date: "Mayo 2026",
    description:
      "En primera linea, el usuario no siempre entra al LMS. WhatsApp, email y alertas convierten repositorio en sistema de activacion.",
    color: "bg-gold/10 text-gold",
  },
  {
    category: "Operacion",
    title: "La reportería que un responsable ejecutivo realmente necesita",
    readTime: "7 min lectura",
    date: "Mayo 2026",
    description:
      "Completion importa, pero no basta. El responsable necesita saber avance, cohortes lentas, usuarios bloqueados y acciones recomendadas.",
    color: "bg-yellow-400/10 text-yellow-400",
  },
  {
    category: "Contenido",
    title: "Ewaffle.cl produce capsulas; Ewaffle.com vende sistemas",
    readTime: "5 min lectura",
    date: "Mayo 2026",
    description:
      "La diferencia entre una fabrica de contenido y una propuesta enterprise esta en alcance, soporte, canales y medicion.",
    color: "bg-purple-400/10 text-purple-400",
  },
];

export default function BlogPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-navy-900 to-navy-950 py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h1 className="text-4xl font-extrabold text-white md:text-5xl">
            Ideas para vender y operar aprendizaje
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-300">
            Notas breves para ordenar oportunidades, propuestas, demos y sistemas LMS
            con foco en resultados comerciales.
          </p>
        </div>
      </section>

      <section className="bg-navy-950 py-24">
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid gap-8 md:grid-cols-2">
            {posts.map((post) => (
              <article
                key={post.title}
                className="group rounded-2xl border border-white/10 bg-navy-900 p-8 transition-colors hover:border-white/20"
              >
                <div className="flex items-center gap-3">
                  <span
                    className={`rounded-full ${post.color} px-3 py-1 text-xs font-semibold`}
                  >
                    {post.category}
                  </span>
                  <span className="text-xs text-slate-500">
                    {post.readTime}
                  </span>
                </div>
                <h2 className="mt-5 text-xl font-bold text-white">
                  {post.title}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-slate-400">
                  {post.description}
                </p>
                <div className="mt-6 flex items-center justify-between">
                  <span className="text-xs text-slate-500">{post.date}</span>
                  <span className="text-xs font-semibold text-slate-500">
                    Proximamente
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy-900 py-24">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-3xl font-bold text-white">
            Newsletter comercial
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-slate-400">
            Recibe ideas sobre LMS, onboarding y venta consultiva de soluciones
            de aprendizaje.
          </p>
          <form className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row">
            <input
              type="email"
              placeholder="Tu email"
              className="flex-1 rounded-lg border border-white/10 bg-navy-950 px-4 py-3 text-sm text-white placeholder-slate-500 outline-none focus:border-accent"
            />
            <button
              type="submit"
              className="rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent-hover"
            >
              Suscribirme
            </button>
          </form>
          <p className="mt-3 text-xs text-slate-500">
            Sin spam. Puedes salir cuando quieras.
          </p>
        </div>
      </section>

      <CTASection
        title="Convirtamos una idea en propuesta"
        description="Partamos por un lead real, una demo acotada y un modelo comercial defendible."
      />
    </>
  );
}

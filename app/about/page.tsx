import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "About",
  description:
    "A nearshore EdTech studio helping US training companies produce better courses, faster, and at a fraction of the cost.",
};

const metrics = [
  { value: "50+", label: "Organizations Served" },
  { value: "200+", label: "Courses Delivered" },
  { value: "5+", label: "Years in EdTech" },
  { value: "40%+", label: "Avg. Engagement Lift" },
];

const advantages = [
  {
    title: "Same Time Zones",
    desc: "We overlap with Eastern, Central, Mountain, and Pacific time zones. Same-day responses, real-time collaboration.",
    icon: (
      <svg className="h-8 w-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
      </svg>
    ),
  },
  {
    title: "Cost Efficiency",
    desc: "Premium talent at competitive rates. Lower regional cost of living means you get more value per dollar without sacrificing quality.",
    icon: (
      <svg className="h-8 w-8 text-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
      </svg>
    ),
  },
  {
    title: "High-Caliber Talent",
    desc: "Deep pool of skilled instructional designers, developers, and visual artists. Bilingual, US-market experienced teams.",
    icon: (
      <svg className="h-8 w-8 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
      </svg>
    ),
  },
];

const values = [
  {
    title: "Quality",
    desc: "Rigorous standards for instructional design, visual polish, and technical compliance. Every course is reviewed by multiple team members before delivery.",
  },
  {
    title: "Speed",
    desc: "Fast delivery without compromising quality. Our AI workflows enable weeks, not months.",
  },
  {
    title: "Partnership",
    desc: "We are an extension of your team, not a vendor. Proactive communication, shared goals, shared success.",
  },
  {
    title: "Innovation",
    desc: "Proprietary AI tools and gamification frameworks that give you a competitive advantage.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-navy-900 to-navy-950 py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h1 className="text-4xl font-extrabold text-white md:text-5xl">
            We&apos;re Ewaffle. We Make Learning Fun.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-300">
            A nearshore EdTech studio helping US training companies produce
            better courses, faster, and at a fraction of the cost.
          </p>
        </div>
      </section>

      {/* Metrics */}
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

      {/* Our Story */}
      <section className="bg-navy-900 py-24">
        <div className="mx-auto max-w-3xl px-6">
          <SectionHeading title="Our Story" />
          <div className="mt-10 space-y-6 text-sm leading-relaxed text-slate-400 md:text-base">
            <p>
              Founded in 2020, Ewaffle was created to address a clear gap in the
              market: US training companies struggled to scale course
              production. Hiring in-house was costly and slow, freelancers were
              unreliable, and agencies charged enterprise-level prices with long
              timelines.
            </p>
            <p>
              We built Ewaffle to combine agency-level quality with nearshore
              cost efficiency. Based in Latin America and operating in US time
              zones, we deliver real-time collaboration without the premium
              price tag.
            </p>
            <p>
              Over the past five years, we have served 50+ organizations and
              delivered 200+ courses. We have invested heavily in proprietary AI
              tools and gamification frameworks that give our clients a
              competitive edge. Our client base includes corporate training
              companies, HR consultants, technology trainers, and e-learning
              resellers.
            </p>
          </div>
        </div>
      </section>

      {/* Nearshore Advantage */}
      <section className="bg-navy-950 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading
            title="The Nearshore Advantage"
            subtitle="Why Latin America is the smartest choice for US training companies."
          />
          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {advantages.map((a) => (
              <div
                key={a.title}
                className="rounded-2xl border border-white/10 bg-navy-900 p-8"
              >
                <div className="mb-4">{a.icon}</div>
                <h3 className="text-lg font-bold text-white">{a.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">
                  {a.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder */}
      <section className="bg-navy-900 py-24">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <SectionHeading title="Meet the Founder" />
          <div className="mt-10">
            <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-accent/20 text-3xl font-bold text-accent">
              AV
            </div>
            <h3 className="mt-6 text-xl font-bold text-white">
              Alvaro Villena
            </h3>
            <p className="text-sm text-accent">Founder & CEO</p>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-slate-400">
              8+ years of experience in EdTech. Former Toptal project manager
              specializing in AI-driven product development. On a mission to
              make high-quality, gamified learning accessible and scalable for
              organizations of all sizes.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-navy-950 py-24">
        <div className="mx-auto max-w-5xl px-6">
          <SectionHeading title="Our Values" />
          <div className="mt-16 grid gap-8 md:grid-cols-2">
            {values.map((v) => (
              <div
                key={v.title}
                className="rounded-2xl border border-white/10 bg-navy-900 p-8"
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

      {/* CTA */}
      <CTASection
        title="Ready to Work Together?"
        description="Book a free discovery call and let's discuss how Ewaffle can help your training company scale."
      />
    </>
  );
}

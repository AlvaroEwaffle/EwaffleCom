import type { Metadata } from "next";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Services",
  description:
    "From SCORM packages to full gamification systems — we handle the production so you can focus on growing your business.",
};

const services = [
  {
    title: "SCORM & xAPI Course Production",
    desc: "Publish-ready packages compatible with any LMS.",
    details:
      "We produce SCORM 1.2, SCORM 2004, and xAPI compliant courses that work seamlessly with 50+ LMS platforms including Cornerstone, Absorb, Docebo, TalentLMS, Moodle, Canvas, and more. Every course includes responsive design, quiz integration, and completion tracking.",
    features: [
      "SCORM 1.2 & 2004 compliance",
      "xAPI (Tin Can) support",
      "50+ LMS compatibility",
      "Responsive design (desktop + mobile)",
      "Quiz & assessment integration",
      "Completion tracking & reporting",
    ],
    color: "border-accent",
    accent: "text-accent",
    bg: "bg-accent/10",
  },
  {
    title: "Gamification Design",
    desc: "Points, badges, leaderboards, and narrative worlds.",
    details:
      "Our gamification frameworks are proven to increase completion rates by 40% on average. We design engagement systems that make learning addictive — from simple badge mechanics to fully immersive narrative worlds with branching storylines.",
    features: [
      "Points & scoring systems",
      "Badges & achievements",
      "Leaderboards & competition",
      "Narrative & storytelling",
      "Branching scenarios",
      "Progress visualization",
    ],
    color: "border-teal",
    accent: "text-teal",
    bg: "bg-teal/10",
  },
  {
    title: "AI-Powered Course Design",
    desc: "Cut instructional design time in half with AI.",
    details:
      "Our proprietary AI workflows accelerate every stage of course development — from content analysis and storyboarding to visual design and assessment generation. Human experts review every output to ensure quality and pedagogical integrity.",
    features: [
      "AI content analysis & structuring",
      "Automated storyboard generation",
      "Smart assessment creation",
      "Visual design acceleration",
      "Human expert review",
      "50% faster production cycles",
    ],
    color: "border-yellow-400",
    accent: "text-yellow-400",
    bg: "bg-yellow-400/10",
  },
  {
    title: "LMS Solutions",
    desc: "White-labeled learning platforms with your branding.",
    details:
      "Need an LMS? We deploy, configure, and customize learning platforms under your brand. From selecting the right platform to migrating existing content and training your team, we handle the full lifecycle.",
    features: [
      "Platform selection & setup",
      "White-label branding",
      "Content migration",
      "User management",
      "Custom integrations",
      "Ongoing support & maintenance",
    ],
    color: "border-purple-400",
    accent: "text-purple-400",
    bg: "bg-purple-400/10",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-navy-900 to-navy-950 py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h1 className="text-4xl font-extrabold text-white md:text-5xl">
            Everything You Need to Scale Course Production
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-300">
            From SCORM packages to full gamification systems — we handle the
            production so you can focus on growing your business.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="bg-navy-950 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading
            title="Our Services"
            subtitle="Four ways we help training companies produce better courses, faster."
          />
          <div className="mt-16 space-y-12">
            {services.map((s, i) => (
              <div
                key={s.title}
                className={`rounded-2xl border-l-4 ${s.color} bg-navy-900 p-8 md:p-12`}
              >
                <div className="grid gap-8 md:grid-cols-2">
                  <div>
                    <h3 className={`text-2xl font-bold text-white`}>
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
                      What&apos;s included
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

      {/* CTA */}
      <CTASection
        title="Not sure which service you need?"
        description="Book a call and we'll help you decide. We'll assess your needs and recommend the right approach for your business."
      />
    </>
  );
}

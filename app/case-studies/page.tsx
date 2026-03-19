import type { Metadata } from "next";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "See how training companies scale their course production with Ewaffle. Real results from real clients.",
};

const caseStudies = [
  {
    category: "Corporate Training",
    metric: "Scaled from 5 to 30 courses per quarter",
    company: "TrainForward Inc.",
    description:
      "TrainForward needed to 6x their course production to meet growing client demand. We embedded a dedicated production team and delivered consistent, high-quality courses on a rolling schedule.",
    highlights: [
      "6x production increase",
      "Zero additional hires needed",
      "Consistent quality across all courses",
      "Rolling delivery schedule",
    ],
    color: "border-accent",
    accent: "text-accent",
    bg: "bg-accent/10",
  },
  {
    category: "HR / Compliance",
    metric: "Launched gamified compliance training for Fortune 500 clients",
    company: "Apex Learning Solutions",
    description:
      "Apex won a major Fortune 500 contract but needed 12 gamified compliance courses in under 8 weeks. We delivered all 12 on time with full SCORM compliance and interactive scenarios.",
    highlights: [
      "12 courses in 8 weeks",
      "Fortune 500 quality standards met",
      "Full SCORM compliance",
      "Interactive scenarios & branching",
    ],
    color: "border-teal",
    accent: "text-teal",
    bg: "bg-teal/10",
  },
  {
    category: "Technology Training",
    metric: "Increased course completion rates from 45% to 82%",
    company: "NovaTech Training",
    description:
      "NovaTech's technology courses had a completion problem. We redesigned their top 10 courses with gamification, interactive scenarios, and modern visual design. Completion rates nearly doubled.",
    highlights: [
      "Completion rates: 45% to 82%",
      "10 courses redesigned",
      "Gamification framework implemented",
      "Modern visual redesign",
    ],
    color: "border-yellow-400",
    accent: "text-yellow-400",
    bg: "bg-yellow-400/10",
  },
];

export default function CaseStudiesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-navy-900 to-navy-950 py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h1 className="text-4xl font-extrabold text-white md:text-5xl">
            See How We Help Training Companies Scale
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-300">
            Real results from real partnerships. Here&apos;s what happens when
            training companies outsource production to Ewaffle.
          </p>
        </div>
      </section>

      {/* Case Studies */}
      <section className="bg-navy-950 py-24">
        <div className="mx-auto max-w-5xl px-6 space-y-12">
          {caseStudies.map((cs) => (
            <article
              key={cs.company}
              className={`rounded-2xl border-l-4 ${cs.color} bg-navy-900 p-8 md:p-12`}
            >
              <div className="flex flex-wrap items-center gap-4">
                <span
                  className={`rounded-full ${cs.bg} px-4 py-1.5 text-xs font-semibold ${cs.accent}`}
                >
                  {cs.category}
                </span>
                <span className="text-sm text-slate-500">{cs.company}</span>
              </div>
              <h2 className="mt-6 text-2xl font-bold text-white md:text-3xl">
                {cs.metric}
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-slate-400 md:text-base">
                {cs.description}
              </p>
              <div className="mt-8">
                <h4
                  className={`text-xs font-semibold uppercase tracking-wider ${cs.accent}`}
                >
                  Key results
                </h4>
                <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                  {cs.highlights.map((h) => (
                    <li
                      key={h}
                      className="flex items-start gap-3 text-sm text-slate-300"
                    >
                      <svg
                        className={`mt-0.5 h-4 w-4 shrink-0 ${cs.accent}`}
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
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Want Results Like These?"
        description="Book a discovery call and let's talk about how we can help your training company scale."
      />
    </>
  );
}

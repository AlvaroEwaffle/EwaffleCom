import type { Metadata } from "next";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Transparent pricing for SCORM course production. Choose from Starter, Professional, or Enterprise packages.",
};

const tiers = [
  {
    name: "Starter",
    price: "$3,000 - $5,000",
    desc: "Perfect for training companies testing outsourced course production or with a single project to deliver.",
    features: [
      "1 SCORM-compliant course (up to 60 min)",
      "Instructional design included",
      "Up to 2 revision rounds",
      "Responsive design (desktop + mobile)",
      "Standard turnaround (4-6 weeks)",
      "Basic quiz & assessment integration",
      "Delivery in SCORM 1.2 or 2004 format",
    ],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Professional",
    price: "$8,000 - $15,000",
    desc: "For training companies scaling their catalog with multiple courses per quarter.",
    features: [
      "3-5 SCORM or xAPI courses",
      "Advanced instructional design",
      "Gamification elements (badges, points)",
      "Up to 3 revision rounds per course",
      "Priority turnaround (3-4 weeks)",
      "Interactive scenarios & branching",
      "Custom branding & visual design",
      "Dedicated project manager",
      "WCAG 2.1 AA accessibility",
    ],
    cta: "Book a Call",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "$20,000+",
    desc: "Full-scale production partnerships for organizations with ongoing course development needs.",
    features: [
      "Unlimited courses per quarter",
      "White-label LMS deployment",
      "Full gamification systems (worlds, narratives)",
      "AI-powered course generation",
      "Unlimited revisions",
      "Dedicated production team",
      "Custom LMS integrations",
      "Priority support & SLA",
      "Quarterly strategy reviews",
      "Multi-language localization",
    ],
    cta: "Contact Us",
    popular: false,
  },
];

const inHouse = [
  "US-based instructional designer: $75K-$95K/year",
  "Benefits & overhead: $20K-$30K/year",
  "Authoring tools licenses: $5K-$15K/year",
  "Project management overhead",
  "Ramp-up time: 2-3 months",
  "Limited by one person's capacity",
  "Vacation, sick days, turnover risk",
];

const outsource = [
  "Fraction of annual cost",
  "Zero overhead, benefits, or tool costs",
  "Full team: ID + design + dev + QA",
  "Dedicated project manager included",
  "Start producing in 1 week",
  "Scale up or down as needed",
  "No HR risk, no turnover gaps",
];

const faqs = [
  {
    q: "What file formats do you deliver?",
    a: "We deliver SCORM 1.2, SCORM 2004, and xAPI packages. These are compatible with 50+ LMS platforms including Cornerstone, Absorb, Docebo, TalentLMS, Moodle, Canvas, Blackboard, and Brightspace.",
  },
  {
    q: "How does white-labeling work?",
    a: "Fully white-labeled with your company's branding — logos, color palette, typography, and visual style. Your clients will never see our name.",
  },
  {
    q: "What's the typical turnaround time?",
    a: "Standard courses are delivered in 4-6 weeks. Professional and Enterprise tiers get priority turnaround of 3-4 weeks.",
  },
  {
    q: "Do you handle instructional design or just development?",
    a: "We cover the full spectrum: instructional design, visual design, development, gamification, and QA. We have certified instructional designers on staff and can also work with your existing storyboards.",
  },
  {
    q: "What if we need revisions?",
    a: "Starter includes 2 revision rounds, Professional includes 3 rounds per course, and Enterprise comes with unlimited revisions.",
  },
  {
    q: "Can you work with our existing LMS?",
    a: "Yes. We support 50+ platforms including Cornerstone, SAP SuccessFactors, Absorb, Docebo, Moodle, Canvas, Blackboard, Brightspace, Thinkific, and Teachable.",
  },
  {
    q: "What about custom projects?",
    a: "We handle simulations, VR/AR experiences, and enterprise-scale rollouts. Book a discovery call and we will scope it together.",
  },
  {
    q: "How do we get started?",
    a: "Simple: 1) Book a discovery call. 2) We assess your needs. 3) You receive a proposal within 48 hours. 4) We kick off production, typically within one week of approval. 5) We deliver on schedule.",
  },
];

export default function PricingPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-navy-900 to-navy-950 py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h1 className="text-4xl font-extrabold text-white md:text-5xl">
            Transparent Pricing. No Surprises.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-300">
            Choose the package that fits your needs. Every tier includes
            instructional design, production, and quality assurance.
          </p>
        </div>
      </section>

      {/* Pricing tiers */}
      <section className="bg-navy-950 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-8 md:grid-cols-3">
            {tiers.map((tier) => (
              <div
                key={tier.name}
                className={`relative rounded-2xl ${
                  tier.popular
                    ? "border-2 border-accent"
                    : "border border-white/10"
                } bg-navy-900 p-8`}
              >
                {tier.popular && (
                  <span className="absolute -top-3 right-6 rounded-full bg-accent px-4 py-1 text-xs font-bold text-white">
                    Most Popular
                  </span>
                )}
                <h3 className="text-xl font-bold text-white">{tier.name}</h3>
                <div className="mt-3 text-3xl font-extrabold text-white">
                  {tier.price}
                </div>
                <p className="mt-3 text-sm text-slate-400">{tier.desc}</p>
                <ul className="mt-8 space-y-3">
                  {tier.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-3 text-sm text-slate-300"
                    >
                      <svg
                        className="mt-0.5 h-4 w-4 shrink-0 text-accent"
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
                <Link
                  href="/book-a-call"
                  className={`mt-8 block rounded-lg py-3 text-center text-sm font-semibold text-white transition-colors ${
                    tier.popular
                      ? "bg-accent hover:bg-accent-hover"
                      : "border border-white/20 hover:bg-white/5"
                  }`}
                >
                  {tier.cta}
                </Link>
              </div>
            ))}
          </div>

          <p className="mt-10 text-center text-sm text-slate-400">
            Need something custom?{" "}
            <Link
              href="/book-a-call"
              className="font-semibold text-accent hover:text-accent-hover"
            >
              Let&apos;s talk
            </Link>
            .
          </p>
        </div>
      </section>

      {/* Cost comparison */}
      <section className="bg-navy-900 py-24">
        <div className="mx-auto max-w-5xl px-6">
          <SectionHeading title="Build In-House vs. Outsource to Ewaffle" />
          <div className="mt-16 grid gap-8 md:grid-cols-2">
            {/* In-house */}
            <div className="rounded-2xl border border-red-400/30 bg-navy-950 p-8">
              <h3 className="text-lg font-bold text-red-400">
                Building In-House
              </h3>
              <div className="mt-2 text-2xl font-extrabold text-white">
                $100K - $140K+{" "}
                <span className="text-base font-normal text-slate-400">
                  per year, for one person
                </span>
              </div>
              <ul className="mt-6 space-y-3">
                {inHouse.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm text-slate-400"
                  >
                    <svg
                      className="mt-0.5 h-4 w-4 shrink-0 text-red-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18 18 6M6 6l12 12"
                      />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            {/* Outsource */}
            <div className="rounded-2xl border border-accent/30 bg-navy-950 p-8">
              <h3 className="text-lg font-bold text-accent">
                Outsourcing to Ewaffle
              </h3>
              <div className="mt-2 text-2xl font-extrabold text-white">
                From $3,000{" "}
                <span className="text-base font-normal text-slate-400">
                  per project, with a full team
                </span>
              </div>
              <ul className="mt-6 space-y-3">
                {outsource.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm text-slate-300"
                  >
                    <svg
                      className="mt-0.5 h-4 w-4 shrink-0 text-accent"
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
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-navy-950 py-24">
        <div className="mx-auto max-w-3xl px-6">
          <SectionHeading title="Frequently Asked Questions" />
          <div className="mt-12 space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.q}
                className="group rounded-xl border border-white/10 bg-navy-900 px-6 py-5"
              >
                <summary className="flex cursor-pointer items-center justify-between text-sm font-semibold text-white">
                  {faq.q}
                  <span className="ml-4 text-slate-500 transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-slate-400">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <CTASection
        title="Ready to Get Started?"
        description="Book a free discovery call and we'll create a custom proposal for your needs within 48 hours."
      />
    </>
  );
}

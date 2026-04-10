import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Services",
  description:
    "From SCORM packages to 360 onboarding experiences, we handle learning production so you can focus on growing your business.",
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
    color: "border-gold",
    accent: "text-gold",
    bg: "bg-gold/10",
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
  {
    title: "360 Video Generation for E-Learning Onboarding",
    desc: "Immersive onboarding and training experiences built from real environments and delivered with LMS readiness in mind.",
    details:
      "We design 360 video learning experiences that help teams understand spaces, procedures, and expectations before they step into the real environment. From onboarding journeys and compliance walkthroughs to operational simulations, we combine instructional design, immersive storytelling, and LMS-ready packaging so your training can scale without losing context.",
    features: [
      "360 scenario design for onboarding and training",
      "Interactive hotspots, prompts, and guided flows",
      "Voiceover, captions, and multilingual-ready structure",
      "Safety, operations, and facility walkthroughs",
      "SCORM/xAPI export strategy for LMS tracking",
      "Support for blended learning and facilitator-led rollouts",
    ],
    color: "border-cyan-400",
    accent: "text-cyan-300",
    bg: "bg-cyan-400/10",
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
            From SCORM packages to immersive 360 onboarding experiences, we
            handle production so you can focus on growing your business.
          </p>
        </div>
      </section>

      <section className="bg-navy-950 pb-8">
        <div className="mx-auto max-w-6xl px-6">
          <div className="rounded-[2rem] border border-cyan-400/20 bg-gradient-to-br from-cyan-400/10 via-navy-900 to-navy-950 p-8 md:p-10">
            <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div>
                <span className="inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
                  Featured for onboarding
                </span>
                <h2 className="mt-5 text-3xl font-bold text-white">
                  Add immersive 360 video to your onboarding stack
                </h2>
                <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-300">
                  When procedures, spaces, or equipment are hard to explain in a
                  slide deck, 360 learning creates the missing context. We help
                  L&amp;D teams and training providers launch immersive onboarding
                  experiences that are engaging for learners and practical for
                  enterprise LMS rollouts.
                </p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  "New hire ramp-up",
                  "Safety orientation",
                  "Site and facility walkthroughs",
                  "Customer or partner enablement",
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

      {/* Services */}
      <section className="bg-navy-950 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading
            title="Our Services"
            subtitle="Five ways we help training companies produce better courses, faster."
          />
          <div className="mt-16 space-y-12">
            {services.map((s) => (
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
        title="Planning an onboarding or immersive training initiative?"
        description="Book a call and we&apos;ll map the right mix of 360 video, course production, and LMS delivery for your learning goals."
        primaryCTA="Book a Call About Your Project"
      />
    </>
  );
}

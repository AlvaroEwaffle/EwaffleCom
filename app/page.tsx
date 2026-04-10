import Link from "next/link";
import CTASection from "@/components/CTASection";
import SectionHeading from "@/components/SectionHeading";

const clients = ["ACHS", "AIEP", "Duoc UC", "UNIACC", "UST", "UGM"];

const painPoints = [
  {
    icon: (
      <svg className="h-8 w-8 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
      </svg>
    ),
    title: "Overwhelmed Teams",
    desc: "Your capacity is maxed out. Quality drops, deadlines slip, and your team burns out trying to keep up with demand.",
  },
  {
    icon: (
      <svg className="h-8 w-8 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
      </svg>
    ),
    title: "Unreliable Freelancers",
    desc: "Inconsistent quality, missed deadlines, and constant onboarding. Every new freelancer is a gamble.",
  },
  {
    icon: (
      <svg className="h-8 w-8 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z" />
      </svg>
    ),
    title: "Expensive Agencies",
    desc: "$15K+ per project with 8-12 week timelines. Enterprise pricing for work that should be faster and more affordable.",
  },
];

const steps = [
  {
    num: "01",
    title: "Send Us Your Content",
    desc: "PDFs, slides, recordings, raw materials — whatever you have. We work with what you've got.",
  },
  {
    num: "02",
    title: "We Design, Gamify & Build",
    desc: "Our team uses AI-accelerated design with human review to create engaging, gamified courses.",
  },
  {
    num: "03",
    title: "Deliver Under Your Brand",
    desc: "White-label SCORM/xAPI packages ready to deploy on any LMS. Your brand, our production.",
  },
];

const services = [
  {
    title: "SCORM & xAPI Course Production",
    desc: "Publish-ready packages compatible with Cornerstone, Absorb, Docebo, TalentLMS, Moodle, and 50+ more.",
    color: "border-accent",
  },
  {
    title: "Gamification Design",
    desc: "Points, badges, leaderboards, and narrative worlds. Proven to increase completion rates by 40%.",
    color: "border-gold",
  },
  {
    title: "AI-Powered Course Design",
    desc: "Cut instructional design time in half with our proprietary AI workflows.",
    color: "border-yellow-400",
  },
  {
    title: "LMS Solutions",
    desc: "White-labeled learning platforms deployed and customized with your branding.",
    color: "border-navy-600",
  },
  {
    title: "360 Video Generation for Onboarding",
    desc: "Immersive training experiences designed for safety, operations, and role-based onboarding in LMS-ready formats.",
    color: "border-cyan-400",
  },
];

const metrics = [
  { value: "200+", label: "Courses Delivered" },
  { value: "50+", label: "Organizations Served" },
  { value: "40%", label: "Avg. Engagement Increase" },
  { value: "4 Weeks", label: "Average Delivery Time" },
];

const testimonials = [
  {
    quote:
      "Ewaffle transformed our training content into engaging, gamified courses that our clients love. Delivery was fast and the quality exceeded expectations.",
    name: "Sarah Mitchell",
    role: "VP of Content, TrainForward Inc.",
  },
  {
    quote:
      "We scaled from 5 to 30 courses per quarter without hiring a single new designer. Ewaffle is our secret weapon.",
    name: "James Park",
    role: "CEO, Apex Learning Solutions",
  },
  {
    quote:
      "The gamification elements increased our course completion rates from 45% to 82%. The ROI was immediate.",
    name: "Maria Chen",
    role: "Director of Learning, NovaTech Training",
  },
];

const comparison = [
  {
    feature: "Speed",
    ewaffle: "4-6 weeks",
    freelancers: "Unpredictable",
    agencies: "8-12 weeks",
  },
  {
    feature: "Cost",
    ewaffle: "$3K-$15K",
    freelancers: "$2K-$8K",
    agencies: "$15K-$50K+",
  },
  {
    feature: "Quality",
    ewaffle: "Gamification + White-Label",
    freelancers: "Inconsistent",
    agencies: "High (at premium)",
  },
  {
    feature: "Revisions",
    ewaffle: "2-3 included",
    freelancers: "Extra cost",
    agencies: "1 round",
  },
  {
    feature: "Dedicated Support",
    ewaffle: "Yes",
    freelancers: "No",
    agencies: "Limited",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-navy-900 to-navy-950 py-24 md:py-36">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--color-accent)_0%,_transparent_50%)] opacity-10" />
        <div className="relative mx-auto max-w-5xl px-6 text-center">
          <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-white md:text-6xl">
            We Build Gamified Courses{" "}
            <span className="text-accent">So You Don&apos;t Have To</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-300 md:text-xl">
            AI-powered SCORM course production for training companies.
            White-label ready. Delivered in 4 weeks.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/book-a-call"
              className="rounded-lg bg-accent px-8 py-4 text-sm font-semibold text-white transition-colors hover:bg-accent-hover"
            >
              Book a Discovery Call
            </Link>
            <Link
              href="/case-studies"
              className="rounded-lg border border-white/20 px-8 py-4 text-sm font-semibold text-white transition-colors hover:border-white/40 hover:bg-white/5"
            >
              See Our Work
            </Link>
          </div>
          {/* Trust badges */}
          <div className="mt-16">
            <p className="text-sm font-medium uppercase tracking-wider text-slate-500">
              Trusted by 50+ organizations worldwide
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-8">
              {clients.map((c) => (
                <span
                  key={c}
                  className="text-sm font-semibold text-slate-500"
                >
                  {c}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Problem section */}
      <section className="bg-navy-950 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading
            title="Your Clients Need Courses Yesterday. Your Team Is at Capacity."
          />
          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {painPoints.map((p) => (
              <div
                key={p.title}
                className="rounded-2xl border border-white/10 bg-navy-900 p-8"
              >
                <div className="mb-4">{p.icon}</div>
                <h3 className="text-xl font-bold text-white">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-navy-900 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading
            title="From Content to Course in 3 Simple Steps"
          />
          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {steps.map((s) => (
              <div key={s.num} className="text-center">
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-accent/20 text-2xl font-bold text-accent">
                  {s.num}
                </div>
                <h3 className="text-xl font-bold text-white">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-400">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services preview */}
      <section className="bg-navy-950 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading
            title="Everything You Need to Scale Course Production"
          />
          <div className="mt-16 grid gap-6 md:grid-cols-2">
            {services.map((s) => (
              <div
                key={s.title}
                className={`rounded-2xl border-l-4 ${s.color} bg-navy-900 p-8`}
              >
                <h3 className="text-lg font-bold text-white">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/services"
              className="text-sm font-semibold text-accent transition-colors hover:text-accent-hover"
            >
              View all services &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* 360 onboarding teaser */}
      <section className="bg-navy-900 py-24">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <span className="inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
              New Service
            </span>
            <h2 className="mt-6 text-3xl font-bold text-white md:text-4xl">
              360 Video Generation for Immersive Onboarding and Training
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-300">
              Bring new hires and frontline teams into real-world scenarios
              before day one. We turn your SOPs, site footage, and training
              goals into guided 360 learning experiences that are ready for LMS
              delivery and blended onboarding programs.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                "Scenario-based onboarding journeys",
                "Safety, operations, and facility walkthroughs",
                "Voiceover, hotspots, and guided decision points",
                "LMS-ready delivery with SCORM/xAPI tracking",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-navy-950 px-5 py-4 text-sm text-slate-300"
                >
                  {item}
                </div>
              ))}
            </div>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/book-a-call"
                className="rounded-lg bg-accent px-8 py-4 text-sm font-semibold text-white transition-colors hover:bg-accent-hover"
              >
                Discuss Your 360 Onboarding Project
              </Link>
              <Link
                href="/services"
                className="rounded-lg border border-white/20 px-8 py-4 text-sm font-semibold text-white transition-colors hover:border-white/40 hover:bg-white/5"
              >
                Explore the Service
              </Link>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-cyan-400/10 via-navy-950 to-navy-950 p-8 shadow-2xl shadow-cyan-950/30">
            <div className="rounded-[1.5rem] border border-white/10 bg-navy-950/80 p-6 backdrop-blur">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
                Ideal Use Cases
              </p>
              <div className="mt-6 space-y-4">
                {[
                  {
                    title: "Workplace onboarding",
                    desc: "Help employees understand spaces, equipment, and expectations before entering the floor.",
                  },
                  {
                    title: "Partner and contractor training",
                    desc: "Standardize site access, procedures, and compliance messaging across distributed teams.",
                  },
                  {
                    title: "Customer education",
                    desc: "Show complex environments and processes in a format that feels concrete, memorable, and scalable.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-white/10 bg-white/[0.03] p-5"
                  >
                    <h3 className="text-base font-semibold text-white">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-400">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="bg-navy-900 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading title="Results That Speak for Themselves" />
          <div className="mt-16 grid grid-cols-2 gap-8 md:grid-cols-4">
            {metrics.map((m) => (
              <div key={m.label} className="text-center">
                <div className="text-4xl font-extrabold text-accent">
                  {m.value}
                </div>
                <div className="mt-2 text-sm text-slate-400">{m.label}</div>
              </div>
            ))}
          </div>
          {/* Testimonials */}
          <div className="mt-20 grid gap-8 md:grid-cols-3">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="rounded-2xl border border-white/10 bg-navy-950 p-8"
              >
                <p className="text-sm leading-relaxed text-slate-300 italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="mt-6">
                  <div className="text-sm font-semibold text-white">
                    {t.name}
                  </div>
                  <div className="text-xs text-slate-500">{t.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison table */}
      <section className="bg-navy-950 py-24">
        <div className="mx-auto max-w-4xl px-6">
          <SectionHeading
            title="Ewaffle vs. Freelancers vs. Big Agencies"
          />
          <div className="mt-12 overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="py-4 pr-6 font-semibold text-slate-400">
                    Feature
                  </th>
                  <th className="py-4 pr-6 font-semibold text-accent">
                    Ewaffle
                  </th>
                  <th className="py-4 pr-6 font-semibold text-slate-400">
                    Freelancers
                  </th>
                  <th className="py-4 font-semibold text-slate-400">
                    Big Agencies
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row) => (
                  <tr key={row.feature} className="border-b border-white/5">
                    <td className="py-4 pr-6 font-medium text-white">
                      {row.feature}
                    </td>
                    <td className="py-4 pr-6 text-accent">{row.ewaffle}</td>
                    <td className="py-4 pr-6 text-slate-400">
                      {row.freelancers}
                    </td>
                    <td className="py-4 text-slate-400">{row.agencies}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Lead magnet */}
      <section className="bg-navy-900 py-24">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-3xl font-bold text-white">
            Free Guide: The Training Company&apos;s Playbook for Scaling Course
            Production
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-slate-400">
            Learn how leading training companies produce 10x more courses
            without 10x the team.
          </p>
          <form className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 rounded-lg border border-white/10 bg-navy-950 px-4 py-3 text-sm text-white placeholder-slate-500 outline-none focus:border-accent"
            />
            <button
              type="submit"
              className="rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent-hover"
            >
              Download Free Guide
            </button>
          </form>
          <p className="mt-3 text-xs text-slate-500">
            No spam. Unsubscribe anytime.
          </p>
        </div>
      </section>

      {/* Pricing preview */}
      <section className="bg-navy-950 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading
            title="Transparent Pricing. No Surprises."
          />
          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {/* Starter */}
            <div className="rounded-2xl border border-white/10 bg-navy-900 p-8">
              <h3 className="text-lg font-bold text-white">Starter</h3>
              <div className="mt-2 text-3xl font-extrabold text-white">
                $3,000<span className="text-base font-normal text-slate-400"> - $5,000</span>
              </div>
              <ul className="mt-6 space-y-3 text-sm text-slate-400">
                <li>1-2 SCORM courses</li>
                <li>Basic gamification</li>
                <li>3-4 week delivery</li>
                <li>2 revision rounds</li>
                <li>White-label ready</li>
              </ul>
              <Link
                href="/book-a-call"
                className="mt-8 block rounded-lg border border-white/20 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-white/5"
              >
                Get Started
              </Link>
            </div>
            {/* Professional */}
            <div className="relative rounded-2xl border-2 border-accent bg-navy-900 p-8">
              <span className="absolute -top-3 right-6 rounded-full bg-accent px-4 py-1 text-xs font-bold text-white">
                Most Popular
              </span>
              <h3 className="text-lg font-bold text-white">Professional</h3>
              <div className="mt-2 text-3xl font-extrabold text-white">
                $8,000<span className="text-base font-normal text-slate-400"> - $15,000</span>
              </div>
              <ul className="mt-6 space-y-3 text-sm text-slate-400">
                <li>3-5 gamified courses</li>
                <li>Advanced gamification</li>
                <li>Optional LMS setup</li>
                <li>AI chatbot</li>
                <li>4-6 week delivery</li>
                <li>3 revision rounds</li>
              </ul>
              <Link
                href="/book-a-call"
                className="mt-8 block rounded-lg bg-accent py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-accent-hover"
              >
                Book a Call
              </Link>
            </div>
            {/* Enterprise */}
            <div className="rounded-2xl border border-white/10 bg-navy-900 p-8">
              <h3 className="text-lg font-bold text-white">Enterprise</h3>
              <div className="mt-2 text-3xl font-extrabold text-white">
                $20,000<span className="text-base font-normal text-slate-400">+</span>
              </div>
              <ul className="mt-6 space-y-3 text-sm text-slate-400">
                <li>10+ courses</li>
                <li>Full gamification suite</li>
                <li>LMS deployment</li>
                <li>AI assistant</li>
                <li>8-12 week delivery</li>
                <li>Unlimited revisions</li>
                <li>12-month support</li>
              </ul>
              <Link
                href="/book-a-call"
                className="mt-8 block rounded-lg border border-white/20 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-white/5"
              >
                Contact Us
              </Link>
            </div>
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/pricing"
              className="text-sm font-semibold text-accent transition-colors hover:text-accent-hover"
            >
              See full pricing details &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-navy-900 py-24">
        <div className="mx-auto max-w-3xl px-6">
          <SectionHeading title="Frequently Asked Questions" />
          <div className="mt-12 space-y-6">
            {[
              {
                q: "What file formats do you deliver?",
                a: "We deliver SCORM 1.2, SCORM 2004, and xAPI packages compatible with 50+ LMS platforms including Cornerstone, Absorb, Docebo, TalentLMS, and Moodle.",
              },
              {
                q: "How does white-labeling work?",
                a: "Every course is fully white-labeled with your company's branding: logos, color palette, typography, and visual style. Your clients will never know we exist.",
              },
              {
                q: "What's the typical turnaround time?",
                a: "Standard courses are delivered in 4-6 weeks. Professional and Enterprise tiers get priority turnaround of 3-4 weeks.",
              },
              {
                q: "Do you handle instructional design or just development?",
                a: "We offer the full spectrum: instructional design, visual design, development, gamification, and QA. We also have certified IDs on staff and can work with your existing storyboards.",
              },
              {
                q: "What if we need revisions?",
                a: "Starter includes 2 revision rounds, Professional includes 3, and Enterprise gets unlimited revisions.",
              },
              {
                q: "Can you work with our existing LMS?",
                a: "Absolutely. We support 50+ platforms including Cornerstone, SAP, Absorb, Docebo, Moodle, Canvas, Blackboard, Brightspace, and many more.",
              },
            ].map((item) => (
              <details
                key={item.q}
                className="group rounded-xl border border-white/10 bg-navy-950 px-6 py-5"
              >
                <summary className="flex cursor-pointer items-center justify-between text-sm font-semibold text-white">
                  {item.q}
                  <span className="ml-4 text-slate-500 transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-slate-400">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <CTASection
        title="Ready to Scale Your Course Production?"
        description="Book a free 30-minute discovery call. We'll show you exactly how we can help you deliver more courses, faster."
        primaryCTA="Book a Discovery Call"
        secondaryCTA="Download Free Guide"
        secondaryHref="#"
      />
    </>
  );
}

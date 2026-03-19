import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book a Call",
  description:
    "Book a free 30-minute discovery call with Ewaffle. We'll discuss your course production needs and show you how we can help.",
};

const steps = [
  {
    num: "1",
    title: "We Listen",
    desc: "Tell us about your courses, your clients, and your production challenges.",
  },
  {
    num: "2",
    title: "We Advise",
    desc: "We share how we have helped similar companies and what approach we recommend.",
  },
  {
    num: "3",
    title: "We Propose",
    desc: "You receive a tailored proposal with scope, timeline, and pricing within 48 hours.",
  },
];

export default function BookACallPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-navy-900 to-navy-950 py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h1 className="text-4xl font-extrabold text-white md:text-5xl">
            Book Your Free Discovery Call
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-300">
            30 minutes. No pressure. We&apos;ll discuss your course production
            needs and show you how we can help.
          </p>
        </div>
      </section>

      {/* Scheduling iframe */}
      <section className="bg-navy-950 py-12">
        <div className="mx-auto max-w-4xl px-6">
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-navy-900">
            <iframe
              src="https://capu.villelab.com/schedule/book-a-call"
              className="w-full rounded-xl border-0"
              style={{ height: "700px", minHeight: "600px" }}
              title="Book a call with Alvaro"
              allow="clipboard-write"
            />
          </div>
        </div>
      </section>

      {/* Process steps */}
      <section className="bg-navy-950 py-24">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="text-center text-2xl font-bold text-white">
            What to Expect
          </h2>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {steps.map((step) => (
              <div key={step.num} className="text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-accent/20 text-lg font-bold text-accent">
                  {step.num}
                </div>
                <h3 className="text-lg font-bold text-white">{step.title}</h3>
                <p className="mt-2 text-sm text-slate-400">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Alternative contact */}
      <section className="bg-navy-900 py-16">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <p className="text-sm text-slate-400">
            Prefer email? Reach us at{" "}
            <a
              href="mailto:hello@ewaffle.com"
              className="font-semibold text-accent transition-colors hover:text-accent-hover"
            >
              hello@ewaffle.com
            </a>
          </p>
        </div>
      </section>
    </>
  );
}

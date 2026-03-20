import type { Metadata } from "next";
import Link from "next/link";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Practical guides, data-driven insights, and industry perspectives to help you grow your training business.",
};

const posts = [
  {
    category: "Outsourcing",
    title: "How to Outsource E-Learning Development Without Losing Quality",
    readTime: "8 min read",
    date: "March 2026",
    description:
      "Outsourcing course production can save you time and money — but only if you do it right. Here are the frameworks and red flags every training company should know before choosing a production partner.",
    color: "bg-accent/10 text-accent",
  },
  {
    category: "Technical",
    title: "SCORM vs. xAPI: Which Standard Does Your Training Company Need?",
    readTime: "6 min read",
    date: "February 2026",
    description:
      "Both standards have their place, but choosing the wrong one can limit your analytics, compatibility, and future flexibility. We break down the differences with practical recommendations.",
    color: "bg-gold/10 text-gold",
  },
  {
    category: "Business",
    title: "The True Cost of Building E-Learning Courses In-House",
    readTime: "10 min read",
    date: "January 2026",
    description:
      "When you factor in salaries, benefits, tools, management overhead, and opportunity cost, building courses in-house is more expensive than most training companies realize.",
    color: "bg-yellow-400/10 text-yellow-400",
  },
  {
    category: "Gamification",
    title: "Gamification in Corporate Training: ROI Data from 200+ Courses",
    readTime: "12 min read",
    date: "December 2025",
    description:
      "We analyzed completion rates, engagement metrics, and learner satisfaction across 200+ courses to quantify the real impact of gamification on training outcomes.",
    color: "bg-purple-400/10 text-purple-400",
  },
];

export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-navy-900 to-navy-950 py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h1 className="text-4xl font-extrabold text-white md:text-5xl">
            Insights for Training Companies
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-300">
            Practical guides, data-driven insights, and industry perspectives to
            help you grow your training business.
          </p>
        </div>
      </section>

      {/* Blog posts */}
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
                    Coming Soon
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-navy-900 py-24">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-3xl font-bold text-white">Stay in the Loop</h2>
          <p className="mx-auto mt-4 max-w-xl text-slate-400">
            Get our latest articles, guides, and industry insights delivered to
            your inbox.
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
              Subscribe
            </button>
          </form>
          <p className="mt-3 text-xs text-slate-500">
            No spam. Unsubscribe anytime.
          </p>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Ready to Start a Conversation?"
        description="Book a free discovery call and let's talk about how we can help your training company produce better courses."
      />
    </>
  );
}

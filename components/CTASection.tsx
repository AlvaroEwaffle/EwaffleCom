import Link from "next/link";

interface CTASectionProps {
  title: string;
  description: string;
  primaryCTA?: string;
  primaryHref?: string;
  secondaryCTA?: string;
  secondaryHref?: string;
}

export default function CTASection({
  title,
  description,
  primaryCTA = "Book a Discovery Call",
  primaryHref = "/book-a-call",
  secondaryCTA,
  secondaryHref,
}: CTASectionProps) {
  return (
    <section className="bg-gradient-to-br from-accent/20 to-teal/20 py-24">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <h2 className="text-3xl font-bold text-white md:text-4xl">{title}</h2>
        <p className="mx-auto mt-4 max-w-xl text-lg text-slate-300">
          {description}
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href={primaryHref}
            className="rounded-lg bg-accent px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-accent-hover"
          >
            {primaryCTA}
          </Link>
          {secondaryCTA && secondaryHref && (
            <Link
              href={secondaryHref}
              className="rounded-lg border border-white/20 px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:border-white/40 hover:bg-white/5"
            >
              {secondaryCTA}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}

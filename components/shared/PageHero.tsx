import Link from "next/link";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  primaryCta?: {
    label: string;
    href: string;
    external?: boolean;
  };
  secondaryCta?: {
    label: string;
    href: string;
  };
};

export default function PageHero({
  eyebrow,
  title,
  description,
  image,
  primaryCta,
  secondaryCta,
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden text-white">
      <img
        src={image}
        alt={title}
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="absolute inset-0 bg-[#0A2555]/75" />

      <div className="relative px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-[1320px]">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-white/70">
            {eyebrow}
          </p>

          <h1 className="mt-5 max-w-4xl text-5xl font-semibold tracking-[-0.05em] sm:text-6xl">
            {title}
          </h1>

          <p className="mt-6 max-w-2xl text-[16px] leading-8 text-white/80 sm:text-lg">
            {description}
          </p>

          {(primaryCta || secondaryCta) && (
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              {primaryCta &&
                (primaryCta.external ? (
                  <a
                    href={primaryCta.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#0A2555] transition hover:bg-white/90"
                  >
                    {primaryCta.label}
                  </a>
                ) : (
                  <Link
                    href={primaryCta.href}
                    className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#0A2555] transition hover:bg-white/90"
                  >
                    {primaryCta.label}
                  </Link>
                ))}

              {secondaryCta && (
                <Link
                  href={secondaryCta.href}
                  className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/15"
                >
                  {secondaryCta.label}
                </Link>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
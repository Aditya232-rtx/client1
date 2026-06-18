import { useFadeIn } from "@/hooks/useFadeIn";

export function SectionHeading({
  kicker,
  title,
  subtitle,
  center,
}: {
  kicker?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
}) {
  const ref = useFadeIn<HTMLDivElement>();
  return (
    <div ref={ref} className={center ? "text-center max-w-3xl mx-auto mb-12" : "mb-10"}>
      {kicker && <div className="kicker mb-3">{kicker}</div>}
      <h2 className={`section-heading text-3xl sm:text-4xl ${center ? "center inline-block" : ""}`}>
        {title}
      </h2>
      {subtitle && <p className="mt-5 text-muted-foreground text-base leading-relaxed">{subtitle}</p>}
    </div>
  );
}

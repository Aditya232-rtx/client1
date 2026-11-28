import { FileText } from "lucide-react";
import type { Certification } from "./certifications";

export function CertificationCard({
  certificate: c,
  compact = false,
}: {
  certificate: Certification;
  compact?: boolean;
}) {
  const className = compact
    ? "bg-white rounded-xl p-4 flex flex-col items-center justify-center min-h-28 gap-2"
    : "border border-border rounded-xl p-6 bg-white hover:border-accent transition flex flex-col";
  const content = compact ? (
    <>
      {c.logo ? (
        <img src={c.logo} alt={`${c.name} logo`} width={160} height={96} className="h-16 max-w-full object-contain" loading="lazy" />
      ) : (
        <FileText className="h-10 w-10 text-primary" aria-hidden="true" />
      )}
      <span className="text-sm font-semibold text-primary text-center">{c.name}</span>
      {c.document && <span className="text-xs text-primary underline">View PDF</span>}
    </>
  ) : (
    <>
      <div className="flex items-start gap-4">
        <div className="h-20 w-20 rounded-lg bg-white border border-border flex items-center justify-center shrink-0 overflow-hidden p-2">
          {c.logo ? (
            <img src={c.logo} alt={`${c.name} logo`} width={160} height={96} className="max-h-full max-w-full object-contain" loading="lazy" />
          ) : (
            <FileText className="h-10 w-10 text-primary" aria-hidden="true" />
          )}
        </div>
        <div className="flex-1">
          <div className="text-lg font-bold text-primary font-display">{c.name}</div>
          <div className="text-xs text-muted-foreground mt-0.5">{c.full}</div>
        </div>
      </div>
      <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{c.about}</p>
      {c.document && <span className="mt-4 text-sm font-semibold text-primary underline">View certificate (PDF)</span>}
    </>
  );

  return c.document ? (
    <a
      href={c.document}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`View ${c.name} certificate (PDF, opens in a new tab)`}
      className={`${className} focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary hover:border-accent`}
    >
      {content}
    </a>
  ) : (
    <div className={className}>{content}</div>
  );
}

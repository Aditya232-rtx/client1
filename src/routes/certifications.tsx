import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { CtaBanner } from "@/components/site/CtaBanner";
import apedaAsset from "@/assets/certs/apeda.png";
import mpedaAsset from "@/assets/certs/mpeda.jpg";
import msmeAsset from "@/assets/certs/msme.png";
import iecAsset from "@/assets/certs/iec.png";

export const Route = createFileRoute("/certifications")({
  head: () => ({
    meta: [
      { title: "Certifications — SunilWays Exports Pvt Ltd" },
      {
        name: "description",
        content:
          "SunilWays Exports is in the process of obtaining APEDA, MPEDA, MSME and IEC certifications. Updates coming soon.",
      },
      { property: "og:title", content: "Certifications & Memberships — SunilWays Exports" },
      { property: "og:description", content: "Certifications currently under process." },
      { property: "og:url", content: "/certifications" },
    ],
    links: [{ rel: "canonical", href: "/certifications" }],
  }),
  component: CertificationsPage,
});

const certs = [
  {
    name: "APEDA",
    full: "Agricultural & Processed Food Products Export Development Authority",
    logo: apedaAsset,
    about:
      "APEDA is the apex body under India's Ministry of Commerce that promotes the export of scheduled agricultural and processed food products, providing financial assistance, quality standards and market access for exporters.",
  },
  {
    name: "MPEDA",
    full: "The Marine Products Export Development Authority",
    logo: mpedaAsset,
    about:
      "MPEDA is the nodal Government of India agency responsible for the development and regulation of marine product exports, including quality control, training and infrastructure support for seafood exporters.",
  },
  {
    name: "MSME",
    full: "Micro, Small & Medium Enterprises Registration",
    logo: msmeAsset,
    about:
      "MSME registration under the Government of India provides recognition, credit support, subsidies and policy benefits to small and medium businesses driving manufacturing and exports.",
  },
  {
    name: "IEC",
    full: "Import Export Code",
    logo: iecAsset,
    about:
      "The Import Export Code, issued by the DGFT, is a mandatory 10-digit business identification number for any entity engaged in the import or export of goods and services from India.",
  },
];

function CertificationsPage() {
  return (
    <>
      <PageHero title="Certifications & Memberships" crumb="Certifications" />
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <p className="text-muted-foreground leading-relaxed">
            SunilWays Exports Pvt Ltd is in the process of obtaining the following industry
            certifications and memberships. We are committed to meeting all regulatory and quality
            benchmarks for domestic and international trade.
          </p>
        </div>
        <div className="mx-auto max-w-5xl px-4 mt-12 grid sm:grid-cols-2 gap-6">
          {certs.map((c) => (
            <div
              key={c.name}
              className="border border-border rounded-xl p-6 bg-cream/40 hover:border-accent transition flex flex-col"
            >
              <div className="flex items-start gap-4">
                <div className="h-20 w-20 rounded-lg bg-white border border-border flex items-center justify-center shrink-0 overflow-hidden p-2">
                  <img
                    src={c.logo}
                    alt={`${c.name} logo`}
                    className="max-h-full max-w-full object-contain"
                    loading="lazy"
                  />
                </div>
                <div className="flex-1">
                  <div className="text-lg font-bold text-primary font-display">{c.name}</div>
                  <div className="text-xs text-muted-foreground mt-0.5">{c.full}</div>
                </div>
              </div>
              <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{c.about}</p>
            </div>
          ))}
        </div>
      </section>
      <CtaBanner />
    </>
  );
}

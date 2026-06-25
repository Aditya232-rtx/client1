import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeading } from "@/components/site/SectionHeading";
import { CtaBanner } from "@/components/site/CtaBanner";
import { Target, Eye } from "lucide-react";
import apedaAsset from "@/assets/certs/apeda.png";
import mpedaAsset from "@/assets/certs/mpeda.jpg";
import msmeAsset from "@/assets/certs/msme.png";
import iecAsset from "@/assets/certs/iec.png";
import fssaiAsset from "@/assets/certs/fssai.jpg";
import phytosanitaryAsset from "@/assets/certs/phytosanitary.jpg";
import directorShubhamPhoto from "@/assets/director-shubham.jpg";
import directorSukanyaPhoto from "@/assets/director-sukanya.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — SunilWays Exports Pvt Ltd" },
      {
        name: "description",
        content:
          "SunilWays Exports is a Sindhudurga-based export house handling sourcing, processing, packaging and global export of Indian agricultural and Konkan food products. Meet our leadership and certifications.",
      },
      { property: "og:title", content: "About — SunilWays Exports Pvt Ltd" },
      { property: "og:description", content: "Our story, mission, vision, leadership and certifications." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const people = [
  {
    initials: "SST",
    photo: directorShubhamPhoto,
    name: "Mr. Shubham Sunil Talekar",
    role: "Director",
    bio: "Leads operations, business development and international trade partnerships for SunilWays Exports.",
  },
  {
    initials: "SKT",
    photo: directorSukanyaPhoto,
    name: "Smt. Sukanya Sunil Talekar",
    role: "Director",
    bio: "Co-leads strategic planning, procurement and supply chain coordination at SunilWays Exports.",
  },
];

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
  {
    name: "FSSAI",
    full: "Food Safety and Standards Authority of India",
    logo: fssaiAsset,
    about:
      "FSSAI is the statutory body under India's Ministry of Health that regulates and supervises food safety, setting standards for food products and ensuring compliance with hygiene and quality regulations.",
  },
  {
    name: "Phytosanitary",
    full: "Phytosanitary Certificate",
    logo: phytosanitaryAsset,
    about:
      "A Phytosanitary Certificate is an official document issued by the plant quarantine authority certifying that exported plants and plant products are free from pests and diseases, meeting international trade requirements.",
  },
];

function AboutPage() {
  return (
    <>
      <PageHero title="About SunilWays Exports" crumb="About" />

      {/* Company / Our Story */}
      <section id="company" className="py-20 bg-white scroll-mt-24">
        <div className="mx-auto max-w-4xl px-4">
          <SectionHeading kicker="OUR STORY" title="Who We Are" />
          <div className="space-y-5 text-muted-foreground leading-relaxed">
            <p>
              SunilWays Exports Pvt Ltd carries on the business of import, export, trading, buying,
              selling, distributing, supplying and dealing in all kinds of goods and services —
              including agricultural produce, food products, commodities and allied products,
              whether raw, semi-processed, processed, preserved, packaged or otherwise.
            </p>
            <p>
              We specialise in processing, manufacturing, branding, marketing and trading of
              agricultural produce and traditional, regional and ethnic products — including fruits,
              vegetables, spices, dry fruits, cashew nuts, kokum and its derivatives, dry fish,
              coconut and coconut-based products, rice, mango and jackfruit products, pickles,
              condiments, onion, grapes and other food preparations — with import and export
              capabilities.
            </p>
            <p>
              We handle sourcing, procurement, aggregation, grading, sorting, processing,
              packaging, labelling, storage, warehousing, transportation, logistics and supply
              chain management — serving domestic and international markets through wholesale,
              retail, e-commerce, B2B and B2C platforms.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-cream">
        <div className="mx-auto max-w-6xl px-4 grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl border border-border p-8 hover:border-accent transition">
            <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center">
              <Target className="h-6 w-6 text-accent" />
            </div>
            <h3 className="mt-5 text-xl font-semibold text-primary">Our Mission</h3>
            <div className="mt-2 h-[2px] w-10 bg-accent" />
            <p className="mt-4 text-muted-foreground leading-relaxed">
              To deliver premium quality Indian produce to global markets while empowering regional
              farmers and producers.
            </p>
          </div>
          <div className="bg-white rounded-xl border border-border p-8 hover:border-accent transition">
            <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center">
              <Eye className="h-6 w-6 text-accent" />
            </div>
            <h3 className="mt-5 text-xl font-semibold text-primary">Our Vision</h3>
            <div className="mt-2 h-[2px] w-10 bg-accent" />
            <p className="mt-4 text-muted-foreground leading-relaxed">
              To become a leading export house representing the authentic flavours and products of
              coastal Maharashtra to the world.
            </p>
          </div>
        </div>
      </section>

      {/* Key Persons / Leadership */}
      <section id="leadership" className="py-20 bg-white scroll-mt-24">
        <div className="mx-auto max-w-4xl px-4">
          <SectionHeading kicker="LEADERSHIP" title="Our Leadership Team" />
          <div className="flex flex-col gap-10">
            {people.map((p, i) => {
              const isEven = i % 2 === 0;
              return (
                <div
                  key={p.initials}
                  className={`flex items-center gap-6 md:gap-10 bg-[#f8f8f8] rounded-3xl border border-border px-6 py-6 hover:border-accent hover:shadow-[0_12px_36px_rgba(27,45,95,0.10)] transition-all duration-300 ${isEven ? "flex-row" : "flex-row-reverse"}`}
                >
                  {/* Circular photo */}
                  <div className="shrink-0">
                    <div className="h-36 w-36 md:h-44 md:w-44 rounded-full overflow-hidden border-4 border-accent shadow-lg">
                      <img
                        src={p.photo}
                        alt={p.name}
                        className="h-full w-full object-cover object-[center_10%]"
                      />
                    </div>
                  </div>
                  {/* Text */}
                  <div className={`flex-1 ${isEven ? "text-left" : "text-right"}`}>
                    <h3 className="text-xl font-bold text-primary font-display leading-snug">
                      {p.name}{" "}
                      <span className="text-accent font-semibold text-base">( {p.role.toUpperCase()} )</span>
                    </h3>
                    <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{p.bio}</p>
                    <div className={`mt-3 h-[2px] w-10 bg-accent ${isEven ? "" : "ml-auto"}`} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Certifications & Memberships */}
      <section id="certifications" className="py-20 bg-cream scroll-mt-24">
        <div className="mx-auto max-w-5xl px-4">
          <SectionHeading kicker="CERTIFICATIONS" title="Certifications & Memberships" />
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-muted-foreground leading-relaxed">
              SunilWays Exports Pvt Ltd is in the process of obtaining the following industry
              certifications and memberships. We are committed to meeting all regulatory and quality
              benchmarks for domestic and international trade.
            </p>
          </div>
          <div className="mt-12 grid sm:grid-cols-2 gap-6">
            {certs.map((c) => (
              <div
                key={c.name}
                className="border border-border rounded-xl p-6 bg-white hover:border-accent transition flex flex-col"
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
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
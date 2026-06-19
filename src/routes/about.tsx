import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeading } from "@/components/site/SectionHeading";
import { CtaBanner } from "@/components/site/CtaBanner";
import { Target, Eye } from "lucide-react";
import apedaAsset from "@/assets/certs/apeda.png";
import mpedaAsset from "@/assets/certs/mpeda.jpg";
import msmeAsset from "@/assets/certs/msme.png";
import iecAsset from "@/assets/certs/iec.png";

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
    name: "Mr. Shubham Sunil Talekar",
    role: "Director",
    bio: "Leads operations, business development and international trade partnerships for SunilWays Exports.",
  },
  {
    initials: "SKT",
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
        <div className="mx-auto max-w-5xl px-4">
          <SectionHeading kicker="LEADERSHIP" title="Our Leadership Team" />
          <div className="grid md:grid-cols-2 gap-6">
            {people.map((p) => (
              <div
                key={p.initials}
                className="bg-cream/40 rounded-xl border border-border p-8 text-center hover:border-accent transition"
              >
                <div className="mx-auto h-32 w-32 rounded-full bg-primary text-accent flex items-center justify-center text-3xl font-bold font-display">
                  {p.initials}
                </div>
                <h3 className="mt-5 text-xl font-semibold text-primary">{p.name}</h3>
                <div className="text-sm text-accent font-semibold uppercase tracking-wider mt-1">{p.role}</div>
                <div className="text-xs text-muted-foreground mt-0.5">SunilWays Exports Pvt Ltd</div>
                <div className="mx-auto mt-4 h-[2px] w-10 bg-accent" />
                <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{p.bio}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-xs text-muted-foreground italic">
            Director photos will replace the initials avatars once provided.
          </p>
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
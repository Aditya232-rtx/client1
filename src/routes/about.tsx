import { certifications } from "@/components/site/certifications";
import { CertificationCard } from "@/components/site/CertificationCard";
import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeading } from "@/components/site/SectionHeading";
import { CtaBanner } from "@/components/site/CtaBanner";
import { Target, Eye } from "lucide-react";
import directorShubhamPhoto from "@/assets/director-shubham.jpg";
import directorSukanyaPhoto from "@/assets/director-sukanya.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About SunilWays Exports | Indian Merchant Exporter" },
      {
        name: "description",
        content:
          "Meet SunilWays Exports, a merchant exporter based in Sindhudurga, Maharashtra. Learn about our sourcing role, team and publicly listed credentials.",
      },
      { property: "og:title", content: "About — SunilWays Exports Pvt Ltd" },
      { property: "og:description", content: "Our story, mission, vision, leadership and certifications." },
      { property: "og:url", content: "https://www.sunilwaysexports.com/about" },
    ],
    links: [{ rel: "canonical", href: "https://www.sunilwaysexports.com/about" }],
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
              Explore our certifications, registrations and memberships. Where a certificate is
              available, select its card to view the PDF. We are committed to meeting regulatory
              and quality benchmarks for domestic and international trade.
            </p>
          </div>
          <div className="mt-12 grid sm:grid-cols-2 gap-6">
            {certifications.map((certificate) => (
              <CertificationCard key={certificate.name} certificate={certificate} />
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
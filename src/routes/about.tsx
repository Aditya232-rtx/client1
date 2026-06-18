import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeading } from "@/components/site/SectionHeading";
import { CtaBanner } from "@/components/site/CtaBanner";
import { Target, Eye } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — SunilWays Exports Pvt Ltd" },
      {
        name: "description",
        content:
          "SunilWays Exports is a Sindhudurga-based export house handling sourcing, processing, packaging and global export of Indian agricultural and Konkan food products.",
      },
      { property: "og:title", content: "About — SunilWays Exports Pvt Ltd" },
      { property: "og:description", content: "Our story, mission and vision." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <PageHero title="About SunilWays Exports" crumb="About" />

      <section className="py-20 bg-white">
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

      <CtaBanner />
    </>
  );
}

import { createFileRoute, Link } from "@tanstack/react-router";
import { EngineeringSection } from "@/components/site/EngineeringSection";
import { PageHero } from "@/components/site/PageHero";

export const Route = createFileRoute("/engineering-goods")({
  head: () => ({
    meta: [
      { title: "Engineering Goods Sourcing from India | SunilWays Exports" },
      { name: "description", content: "Source engineering goods and industrial supplies from India through SunilWays Exports. Explore eight sourcing categories and prepare a product-specific enquiry." },
      { property: "og:title", content: "Engineering Goods Sourcing from India | SunilWays Exports" },
      { property: "og:description", content: "Engineering goods and industrial sourcing for international procurement teams." },
      { property: "og:url", content: "https://www.sunilwaysexports.com/engineering-goods" },
    ],
    links: [{ rel: "canonical", href: "https://www.sunilwaysexports.com/engineering-goods" }],
  }),
  component: EngineeringPage,
});

function EngineeringPage() {
  return <>
    <PageHero title="Engineering Goods Sourcing from India" crumb="Engineering Goods" />
    <EngineeringSection />
    <section className="mx-auto max-w-4xl px-4 py-16 space-y-8">
      <div>
        <h2 className="text-2xl font-semibold text-primary">Prepare your sourcing enquiry</h2>
        <p className="mt-4 text-muted-foreground">SunilWays acts as a merchant exporter. Share the requirements below so our team can discuss suitable sourcing options with you.</p>
        <ul className="mt-4 list-disc pl-6 space-y-2 text-muted-foreground">
          <li>Product name, intended application and required quantity.</li>
          <li>Technical drawing, dimensions, material and required tolerances, where relevant.</li>
          <li>Applicable standards, inspection requirements and supporting documents you need.</li>
          <li>For pumps and valves: media, operating pressure, temperature and connection requirements.</li>
          <li>For components: part number, compatibility requirements and sample or drawing availability.</li>
          <li>Destination country, packaging requirements and preferred purchasing timeframe.</li>
        </ul>
      </div>
      <div>
        <h2 className="text-2xl font-semibold text-primary">Confirm specifications before ordering</h2>
        <p className="mt-4 text-muted-foreground">Product availability, minimum order quantity, pricing, lead time and documentation depend on the sourcing requirement. Request written confirmation for your selected product before making purchasing arrangements.</p>
        <p className="mt-4 text-muted-foreground">The category images illustrate representative products. Ask for product-specific specifications and available documentation for your enquiry.</p>
      </div>
      <Link to="/contact" className="inline-flex rounded-md bg-primary px-6 py-3 font-semibold text-primary-foreground">Discuss an engineering sourcing requirement</Link>
      <p><Link to="/products" className="text-primary underline">View the full product catalog</Link></p>
    </section>
  </>;
}

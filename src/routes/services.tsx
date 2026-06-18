import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { CtaBanner } from "@/components/site/CtaBanner";
import { Ship, ArrowDownToLine, ArrowLeftRight, Link2 } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — SunilWays Exports Pvt Ltd" },
      {
        name: "description",
        content:
          "Export, import, trading, distribution and full supply chain management for Indian agricultural and food products.",
      },
      { property: "og:title", content: "Services — SunilWays Exports Pvt Ltd" },
      { property: "og:description", content: "Export, import, trading and supply chain services." },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

const services = [
  {
    icon: Ship,
    title: "Export Services",
    desc: "We export a wide range of agricultural and food products to international markets. We handle documentation, compliance, logistics and customs to ensure seamless cross-border trade.",
  },
  {
    icon: ArrowDownToLine,
    title: "Import Services",
    desc: "We assist international companies to source and distribute their products within India, connecting them to local distributors, retailers and B2B buyers.",
  },
  {
    icon: ArrowLeftRight,
    title: "Trading & Distribution",
    desc: "We buy, aggregate and sell products across domestic markets through wholesale, retail and e-commerce channels.",
  },
  {
    icon: Link2,
    title: "Supply Chain Management",
    desc: "Full-service supply chain: farm-level sourcing → grading → processing → packaging → labelling → storage → transport → delivery.",
  },
];

function ServicesPage() {
  return (
    <>
      <PageHero title="Our Services" crumb="Services" />
      <section className="py-20 bg-cream">
        <div className="mx-auto max-w-6xl px-4 grid md:grid-cols-2 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="group bg-white rounded-xl border border-border p-8 hover:border-accent hover:shadow-[0_10px_30px_rgba(27,45,95,0.08)] transition"
            >
              <div className="h-14 w-14 rounded-lg bg-accent/10 flex items-center justify-center">
                <s.icon className="h-7 w-7 text-accent" />
              </div>
              <h3 className="mt-5 text-xl font-semibold text-primary">{s.title}</h3>
              <div className="mt-2 h-[2px] w-10 bg-accent" />
              <p className="mt-4 text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>
      <CtaBanner />
    </>
  );
}

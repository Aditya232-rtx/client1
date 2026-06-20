import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { CtaBanner } from "@/components/site/CtaBanner";
import { SectionHeading } from "@/components/site/SectionHeading";
import { catalog } from "@/components/site/data";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Product Catalog — SunilWays Exports Pvt Ltd" },
      {
        name: "description",
        content:
          "Detailed catalog: fresh fruits & vegetables, rice & grains, cashew & dry fruits, spices, coconut products, jaggery, honey, kokum and more — for domestic trade and export.",
      },
      { property: "og:title", content: "Product Catalog — SunilWays Exports" },
      { property: "og:description", content: "Detailed B2B catalog of Indian agricultural produce and traditional Konkan food products." },
      { property: "og:url", content: "/products" },
    ],
    links: [{ rel: "canonical", href: "/products" }],
  }),
  component: ProductsPage,
});

function ProductsPage() {
  return (
    <>
      <PageHero title="Product Catalog" crumb="Products" />

      <section className="py-14 bg-white">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <p className="text-muted-foreground leading-relaxed">
            We deal in a wide range of agricultural produce and traditional food products, sourced
            directly from the Konkan coast and across India. All items below are available for
            domestic trading and international export, in custom packaging and bulk quantities.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-2">
            {catalog.map((c) => (
              <a
                key={c.slug}
                href={`#${c.slug}`}
                className="text-xs sm:text-sm px-3 py-1.5 rounded-full border border-border text-foreground/70 hover:border-accent hover:text-primary transition"
              >
                {c.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {catalog.map((cat, idx) => (
        <section
          key={cat.slug}
          id={cat.slug}
          className={`py-16 scroll-mt-24 ${idx % 2 === 0 ? "bg-cream" : "bg-white"}`}
        >
          <div className="mx-auto max-w-7xl px-4">
            <SectionHeading
              kicker={`0${idx + 1}`.slice(-2)}
              title={cat.title}
              subtitle={cat.blurb}
            />
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {cat.items.map((it) => (
                <div
                  key={it.name}
                  className="group flex flex-col bg-white rounded-xl border border-border overflow-hidden hover:border-accent hover:shadow-[0_8px_24px_rgba(27,45,95,0.08)] transition-all"
                >
                  <div className="aspect-[4/3] overflow-hidden bg-cream">
                    <img
                      src={it.image}
                      alt={it.name}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="flex flex-col flex-1 p-4">
                    <h3 className="text-sm sm:text-base font-semibold text-primary leading-tight">
                      {it.name}
                    </h3>
                    <dl className="mt-3 space-y-2 text-xs">
                      <Detail label="Origin" value={it.origin} />
                      <Detail label="Available Grades" value={it.grades} />
                      <Detail label="Packaging" value={it.packaging} />
                    </dl>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 text-center">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:gap-3 transition-all"
              >
                Enquire about {cat.title} <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
      ))}

      <CtaBanner />
    </>
  );
}
function Detail({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex gap-1.5">
      <dt className="font-semibold text-primary shrink-0">{label}:</dt>
      <dd className="text-muted-foreground">{value}</dd>
    </div>
  );
}

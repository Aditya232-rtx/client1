import { EngineeringSection } from "@/components/site/EngineeringSection";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { CtaBanner } from "@/components/site/CtaBanner";
import { SectionHeading } from "@/components/site/SectionHeading";
import { catalog } from "@/components/site/data";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Export Product Catalog | SunilWays Exports" },
      {
        name: "description",
        content:
          "Explore agricultural and food products, kokum, cashews, dry cow dung and engineering goods. View listed origins, grades and packaging before enquiring.",
      },
      { property: "og:title", content: "Product Catalog — SunilWays Exports" },
      { property: "og:description", content: "Agricultural products, engineering goods and industrial supplies for B2B sourcing and export." },
      { property: "og:url", content: "https://www.sunilwaysexports.com/products" },
    ],
    links: [{ rel: "canonical", href: "https://www.sunilwaysexports.com/products" }],
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
            We source agricultural produce, traditional food and personal care products, natural
            by-products, engineering goods and industrial supplies from across India. Contact
            our team for product specifications, packaging and export requirements.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-2">
            <a href="#engineering-goods" className="text-xs sm:text-sm px-3 py-1.5 rounded-full border border-primary text-primary hover:bg-cream transition">Engineering Goods &amp; Industrial Products</a>
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

      <div className="mx-auto max-w-7xl px-4 py-6">
        <Link to="/engineering-goods" className="font-semibold text-primary underline">Engineering goods sourcing and quotation requirements</Link>
      </div>
      <div className="mx-auto max-w-7xl px-4 pb-6"><Link to="/products/indian-spices" className="font-semibold text-primary underline">Indian spice origins, grades and wholesale sourcing</Link></div>
      <EngineeringSection />

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
            <div className={`mt-10 grid gap-5 ${cat.items.length === 1 ? "max-w-md mx-auto grid-cols-1" : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"}`}>
              {cat.items.map((it) => (
                <div
                  key={it.name}
                  id={`product-${it.name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/-$/, "")}`}
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
                    <Link to="/contact" search={{ product: it.name }} className="mt-4 inline-flex py-2 text-sm font-semibold text-primary underline">Enquire about {it.name}</Link>
                    {it.name === "Cashew Kernels" && <Link to="/products/cashew-kernels" className="mt-2 py-2 text-sm text-primary underline">Sindhudurga cashew grades and sourcing</Link>}
                    {it.name === "Kokum" && <Link to="/products/kokum" className="mt-2 py-2 text-sm text-primary underline">Konkan kokum supply details</Link>}
                    {it.name === "Fruit Pulp" && <Link to="/products/alphonso-mango-pulp" className="mt-2 py-2 text-sm text-primary underline">Alphonso mango pulp enquiries</Link>}
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

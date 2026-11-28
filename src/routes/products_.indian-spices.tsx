import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { catalog } from "@/components/site/data";
import corianderImage480 from "@/assets/optimized/catalog/coriander-480.webp";
import corianderImage960 from "@/assets/optimized/catalog/coriander-960.webp";
import { ArrowUpRight, Check } from "lucide-react";

const spices = catalog.find((category) => category.slug === "spices")!.items;

export const Route = createFileRoute("/products_/indian-spices")({
head: () => ({
  "meta": [
    {
      "title": "Indian Spices Wholesale Sourcing | SunilWays Exports"
    },
    {
      "name": "description",
      "content": "Source Indian spices with listed origins and bulk packs: Sangli turmeric, Guntur chilli, Malabar pepper, cumin and coriander. Request a wholesale quote."
    },
    {
      "property": "og:title",
      "content": "Indian Spices Wholesale Sourcing | SunilWays Exports"
    },
    {
      "property": "og:description",
      "content": "Indian spice origins, grades and bulk packaging for sourcing enquiries."
    },
    {
      "property": "og:url",
      "content": "https://www.sunilwaysexports.com/products/indian-spices"
    }
  ],
  "links": [
    {
      "rel": "canonical",
      "href": "https://www.sunilwaysexports.com/products/indian-spices"
    }
  ]
}),
component: SpicesPage,
});


function SpicesPage() {
  return (
    <>
      <PageHero title="Indian Spices for Wholesale Sourcing" crumb="Spices" />
      <article className="mx-auto max-w-7xl px-4 py-12 sm:py-16">
        <nav aria-label="Breadcrumb" className="text-sm text-muted-foreground">
          <Link to="/" className="hover:text-primary">Home</Link> / <Link to="/products" className="hover:text-primary">Products</Link> / Spices
        </nav>

        <div className="mt-8 mb-10 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="kicker text-accent mb-3">ORIGIN. GRADE. YOUR REQUIREMENT.</p>
            <h2 className="text-3xl sm:text-4xl font-semibold text-primary leading-tight">Find the right spice for your order</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">From Sangli turmeric to Guntur chilli and Malabar pepper, explore our listed sourcing regions, grades and bulk packs.</p>
          </div>
          <Link to="/contact" search={{ product: "Spices" }} className="inline-flex shrink-0 items-center justify-center gap-2 self-start rounded-md bg-primary px-6 py-3 font-semibold text-primary-foreground lg:self-auto">
            Discuss a mixed spice order <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-6">
          {spices.map((spice, index) => (
            <section key={spice.name} className={`overflow-hidden rounded-xl border border-border bg-white ${index < 2 ? "lg:col-span-3" : "lg:col-span-2"} ${index === 4 ? "sm:col-span-2" : ""}`}>
              <div className={index < 2 ? "aspect-[16/9] overflow-hidden bg-cream" : "aspect-[4/3] overflow-hidden bg-cream"}>
                <img
                  src={spice.name === "Coriander Seeds" ? corianderImage960 : typeof spice.image === "string" ? spice.image : spice.image.src}
                  srcSet={spice.name === "Coriander Seeds" ? `${corianderImage480} 480w, ${corianderImage960} 960w` : typeof spice.image === "string" ? undefined : spice.image.srcSet}
                  sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw"
                  alt={`${spice.name}, representative product image`}
                  width={1200}
                  height={900}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-5 sm:p-6">
                <h3 className="text-2xl font-semibold text-primary">{spice.name}</h3>
                <p className="mt-2 text-sm font-medium text-primary">{spice.origin}</p>
                <dl className="mt-5 space-y-3 text-sm leading-relaxed">
                  <div><dt className="font-semibold text-primary">Grades & forms</dt><dd className="text-muted-foreground">{spice.grades}</dd></div>
                  <div><dt className="font-semibold text-primary">Bulk packaging</dt><dd className="text-muted-foreground">{spice.packaging}</dd></div>
                </dl>
                <Link to="/contact" search={{ product: spice.name }} className="mt-6 inline-flex min-h-11 items-center gap-2 font-semibold text-primary underline underline-offset-4">
                  Enquire about {spice.name} <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </section>
          ))}
        </div>
        <p className="mt-4 text-xs leading-relaxed text-muted-foreground">Images illustrate the products. Confirm sourcing origin, lot specification and available packaging for your order.</p>

        <section className="mt-14 sm:mt-20 border-t border-border pt-10">
          <h2 className="text-2xl sm:text-3xl font-semibold text-primary">A few details make a better quotation</h2>
          <div className="mt-7 grid gap-7 md:grid-cols-3">
            <div><h3 className="font-semibold text-primary">Choose origin and grade</h3><p className="mt-2 text-sm leading-relaxed text-muted-foreground">Name your spice, preferred sourcing region and whole or ground form. We will discuss suitable availability.</p></div>
            <div><h3 className="font-semibold text-primary">Share your specification</h3><p className="mt-2 text-sm leading-relaxed text-muted-foreground">Specify curcumin requirements for turmeric, colour and pungency for chilli, or grade and bulk density for pepper where relevant.</p></div>
            <div><h3 className="font-semibold text-primary">Confirm the order details</h3><p className="mt-2 text-sm leading-relaxed text-muted-foreground">Ask about minimum quantity, lead time, samples and documents for your selected product and destination.</p></div>
          </div>
        </section>

        <section className="mt-12 rounded-xl bg-cream p-6 sm:p-9">
          <div className="grid items-center gap-8 lg:grid-cols-[1fr_auto]">
            <div>
              <h2 className="text-2xl font-semibold text-primary">Ready to discuss your spice requirement?</h2>
              <ul className="mt-5 grid gap-3 text-sm text-muted-foreground sm:grid-cols-2">
                {["Spice, origin and preferred grade", "Quantity and bag size", "Destination and intended use", "Sample and documentation needs"].map((item) => <li key={item} className="flex items-start gap-2"><Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />{item}</li>)}
              </ul>
            </div>
            <Link to="/contact" search={{ product: "Spices" }} className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 font-semibold text-primary-foreground">Request a spice quotation <ArrowUpRight className="h-4 w-4" aria-hidden="true" /></Link>
          </div>
        </section>
      </article>
    </>
  );
}

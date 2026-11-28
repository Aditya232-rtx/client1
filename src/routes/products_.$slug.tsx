import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { findCatalogProduct, productSlug } from "@/lib/product-routes";

const businessLocation = "Talere, Kankavli, Sindhudurg, Konkan, Maharashtra, India";

const categoryLeads: Record<string, string> = {
  "Fresh Fruits": "Fresh, export-grade",
  "Fresh Vegetables": "Farm-fresh, export-grade",
  "Rice & Grains": "Sorted Indian",
  "Nuts & Dry Fruits": "Bulk Indian",
  "Spices & Seasonings": "Aromatic Indian",
  "Coconut Products": "Konkan and South Indian",
  "Natural & Processed Foods": "Traditional Indian",
  "Beverage & Concentrate Products": "Konkan-origin",
  "Kokum Butter & Lip Balm": "Natural personal-care",
  "Natural & Agricultural By-products": "Bulk agricultural",
};

const productSummary = (product: NonNullable<ReturnType<typeof findCatalogProduct>>) => {
  const lead = categoryLeads[product.category] ?? "Indian";
  return `${lead} ${product.name.toLowerCase()} from ${product.origin}, available as ${product.grades.toLowerCase()} and packed in ${product.packaging.toLowerCase()}`;
};

export const Route = createFileRoute("/products_/$slug")({
  head: ({ params }) => {
    const product = findCatalogProduct(params.slug);
    if (!product) return { meta: [{ title: "Product not found | SunilWays Exports" }] };
    const origin = product.origin.split(";")[0];
    const title = `${product.name} Exporter & Importer from ${origin} | SunilWays Exports`;
    const rawDescription = `${productSummary(product)}. SunilWays Exports in Sindhudurg Konkan handles import and export enquiries.`;
    const description = rawDescription.length > 148
      ? `${rawDescription.slice(0, 145).replace(/\s+\S*$/, "")}…`
      : rawDescription;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:url", content: `https://www.sunilwaysexports.com/products/${productSlug(product.name)}` },
      ],
      links: [{ rel: "canonical", href: `https://www.sunilwaysexports.com/products/${productSlug(product.name)}` }],
    };
  },
  component: ProductPage,
});

function ProductPage() {
  const { slug } = Route.useParams();
  const product = findCatalogProduct(slug);
  if (!product) return <main className="mx-auto max-w-3xl px-4 py-24"><h1 className="text-3xl font-semibold text-primary">Product not found</h1><Link to="/products" className="mt-5 inline-block underline">Return to product catalog</Link></main>;
  const image = typeof product.image === "string" ? product.image : product.image;
  return (
    <main className="mx-auto max-w-6xl px-4 py-16">
      <nav aria-label="Breadcrumb" className="text-sm text-muted-foreground"><Link to="/" className="hover:text-primary">Home</Link> / <Link to="/products" className="hover:text-primary">Products</Link> / {product.name}</nav>
      <div className="mt-10 grid gap-10 lg:grid-cols-2 lg:items-start">
        <div className="overflow-hidden rounded-xl border border-border bg-cream">
          <img src={typeof image === "string" ? image : image.src} srcSet={typeof image === "string" ? undefined : image.srcSet} sizes={typeof image === "string" ? undefined : image.sizes} alt={`${product.name} from ${product.origin}`} width={960} height={720} className="aspect-[4/3] w-full object-cover" />
        </div>
        <div>
          <p className="kicker text-accent">{product.category}</p>
          <h1 className="mt-3 text-4xl font-semibold leading-tight text-primary">{product.name} exporter &amp; importer from {product.origin.split(";")[0]}</h1>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">{productSummary(product)}. SunilWays Exports coordinates buying, importing and exporting from the listed origin. Based in {businessLocation}, we match supplier specifications with destination requirements; availability and terms are confirmed for every quotation.</p>
          <dl className="mt-8 space-y-4 rounded-xl border border-border bg-white p-6"><div><dt className="font-semibold text-primary">Origin</dt><dd className="text-muted-foreground">{product.origin}</dd></div><div><dt className="font-semibold text-primary">Grades and forms</dt><dd className="text-muted-foreground">{product.grades}</dd></div><div><dt className="font-semibold text-primary">Packaging</dt><dd className="text-muted-foreground">{product.packaging}</dd></div></dl>
          <Link to="/contact" search={{ product: product.name }} className="mt-8 inline-flex min-h-11 items-center gap-2 rounded-md bg-primary px-6 py-3 font-semibold text-primary-foreground">Request a {product.name} quotation <ArrowUpRight className="h-4 w-4" /></Link>
        </div>
      </div>
    </main>
  );
}

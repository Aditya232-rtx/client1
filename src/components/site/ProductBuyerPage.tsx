import { Link } from "@tanstack/react-router";
import { PageHero } from "./PageHero";
export type BuyerBrief = { name: string; h1: string; intro: string; facts: string[][]; sections: string[][]; questions: string[] };
export function ProductBuyerPage({ brief }: { brief: BuyerBrief }) {
  return <>
    <PageHero title={brief.h1} crumb={brief.name} />
    <article className="mx-auto max-w-4xl px-4 py-14 space-y-8">
      <nav aria-label="Breadcrumb" className="text-sm text-muted-foreground"><Link to="/">Home</Link> / <Link to="/products">Products</Link> / {brief.name}</nav>
      <p className="text-lg text-muted-foreground leading-relaxed">{brief.intro}</p>
      <dl className="space-y-3 rounded-xl bg-cream p-6">{brief.facts.map(([label, value]) => <div key={label}><dt className="font-semibold text-primary">{label}</dt><dd className="text-muted-foreground">{value}</dd></div>)}</dl>
      {brief.sections.map(([heading, text]) => <section key={heading}><h2 className="text-2xl font-semibold text-primary">{heading}</h2><p className="mt-3 text-muted-foreground leading-relaxed">{text}</p></section>)}
      <section><h2 className="text-2xl font-semibold text-primary">Prepare your quotation enquiry</h2><ul className="mt-4 list-disc pl-6 space-y-2 text-muted-foreground">{brief.questions.map(q => <li key={q}>{q}</li>)}</ul></section>
      <Link to="/contact" search={{ product: brief.name }} className="inline-flex rounded-md bg-primary px-6 py-3 font-semibold text-primary-foreground">Enquire about {brief.name}</Link>
      <p><Link to="/products" className="underline text-primary">View all products and listed origins</Link></p>
    </article>
  </>;
}

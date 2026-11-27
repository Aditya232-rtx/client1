import accessoriesImage from "@/assets/catalog/generated/industrial-accessories.webp";
import toolsImage from "@/assets/catalog/generated/tools-hardware-fasteners.webp";
import mechanicalImage from "@/assets/catalog/generated/mechanical-components.webp";
import electricalImage from "@/assets/catalog/generated/electrical-electronic-components.webp";
import steelImage from "@/assets/catalog/generated/steel-metal-products.webp";
import pumpsImage from "@/assets/catalog/generated/pumps-valves-fittings.webp";
import automotiveImage from "@/assets/catalog/generated/automotive-components.webp";
import machineryImage from "@/assets/catalog/generated/industrial-machinery.webp";
import { Link } from "@tanstack/react-router";
import engineeringImage from "@/assets/catalog/generated/engineering-goods.webp";
import { SectionHeading } from "./SectionHeading";

const categories = [
  { title: "Industrial Machinery & Equipment", image: machineryImage },
  { title: "Automotive Components & Spare Parts", image: automotiveImage },
  { title: "Pumps, Valves & Fittings", image: pumpsImage },
  { title: "Steel & Metal Products", image: steelImage },
  { title: "Electrical & Electronic Components", image: electricalImage },
  { title: "Mechanical Engineering Components", image: mechanicalImage },
  { title: "Tools, Hardware & Fasteners", image: toolsImage },
  { title: "Industrial Equipment & Accessories", image: accessoriesImage },
];

export function EngineeringSection({ preview = false }: { preview?: boolean }) {
  return (
    <section id="engineering-goods" className="py-16 sm:py-20 bg-cream scroll-mt-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div>
            <SectionHeading kicker="SOURCED IN INDIA. SUPPLIED GLOBALLY." title="Engineering Goods & Industrial Products" />
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>SunilWays Exports Pvt. Ltd. is a merchant exporter specializing in the global sourcing and export of a wide range of engineering goods and industrial products.</p>
              <p>We collaborate with reliable Indian manufacturers and suppliers to source quality engineering products at competitive prices for international markets.</p>
              {!preview && <>
                <p>Our product portfolio includes industrial machinery, mechanical components, automotive parts, pumps, valves, pipes, fittings, steel products, fasteners, tools, hardware and other industrial supplies.</p>
                <p>We focus on supplier coordination, quality assurance, competitive sourcing and efficient export logistics to meet the diverse requirements of global buyers.</p>
              </>}
            </div>
            <Link to={preview ? "/engineering-goods" : "/contact"} className="mt-7 inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition">
              {preview ? "Explore Engineering Categories" : "Discuss Your Sourcing Requirements"}
            </Link>
          </div>
          <figure>
            <img src={engineeringImage} alt="Representative bulk engineering goods in an industrial warehouse, with palletized pumps and crates of components" width={1672} height={941} loading="lazy" className="w-full aspect-[16/9] object-cover rounded-xl" />
            <figcaption className="mt-3 text-sm text-muted-foreground">Representative products. Share your specifications for sourcing enquiries.</figcaption>
          </figure>
        </div>
        {!preview && (
          <div className="mt-12">
            <h3 className="text-xl font-semibold text-primary">Our sourcing categories</h3>
            <ul className="mt-5 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {categories.map(({ title, image }) => (
                <li key={title} className="overflow-hidden rounded-xl border border-border bg-white">
                  <img src={image} alt={`${title} prepared in bulk in an industrial warehouse`} width={1200} height={900} loading="lazy" className="w-full aspect-[4/3] object-cover" />
                  <h4 className="p-4 font-semibold text-primary leading-snug">{title}</h4>
                </li>
              ))}
            </ul>
            <p className="mt-6 max-w-3xl text-sm leading-relaxed text-muted-foreground">Tell us the product type, technical specifications, quantity and destination. Our team will discuss suitable sourcing options with you.</p>
          </div>
        )}
      </div>
    </section>
  );
}

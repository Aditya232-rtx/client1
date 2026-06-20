import { createFileRoute, Link } from "@tanstack/react-router";
import { HeroSlider } from "@/components/site/HeroSlider";
import { SectionHeading } from "@/components/site/SectionHeading";
import { ProductCard } from "@/components/site/ProductCard";
import { CtaBanner } from "@/components/site/CtaBanner";
import { products, featuredSlugs } from "@/components/site/data";
import { useFadeIn } from "@/hooks/useFadeIn";
import apedaAsset from "@/assets/certs/apeda.png";
import mpedaAsset from "@/assets/certs/mpeda.jpg";
import msmeAsset from "@/assets/certs/msme.png";
import iecAsset from "@/assets/certs/iec.png";
import fssaiAsset from "@/assets/certs/fssai.jpg";
import phytosanitaryAsset from "@/assets/certs/phytosanitary.jpg";
import {
  Leaf,
  Ship,
  Package,
  Wheat,
  Globe2,
  ArrowDownToLine,
  ArrowLeftRight,
  Link2,
  CheckCircle2,
  Handshake,
  Clock,
  DollarSign,
  Home as HomeIcon,
  ArrowRight,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SunilWays Exports Pvt Ltd — Premium Indian Agricultural Exports" },
      {
        name: "description",
        content:
          "Premium and reliable export house for Indian agricultural and Konkan food products. Trusted global partner for kokum, cashew, spices, dry fish, coconut, rice and mango with end-to-end sourcing, quality processing and timely worldwide delivery.",
      },
      { property: "og:title", content: "SunilWays Exports Pvt Ltd" },
      {
        property: "og:description",
        content:
          "Premium Indian agricultural and traditional Konkan food products — sourced, processed and exported worldwide.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

const stats = [
  { value: "10+", label: "Product Categories" },
  { value: "50+", label: "Verified Suppliers" },
  { value: "Direct", label: "Farm Sourcing" },
  { value: "Export", label: "Documentation Support" },
];

const services = [
  {
    icon: Ship,
    title: "Export",
    desc: "We export premium quality Indian agricultural and food products to international markets with timely delivery and quality assurance.",
  },
  {
    icon: ArrowDownToLine,
    title: "Import",
    desc: "We assist foreign companies in introducing quality products into India and connect them with reliable local distribution partners.",
  },
  {
    icon: ArrowLeftRight,
    title: "Trading & Distribution",
    desc: "We buy, sell and distribute food products, commodities and agricultural produce across domestic and international markets.",
  },
  {
    icon: Link2,
    title: "Supply Chain",
    desc: "We manage the complete supply chain — sourcing, grading, processing, packaging, warehousing, logistics and last-mile delivery.",
  },
];

const whyUs = [
  { icon: CheckCircle2, title: "Quality Assurance", desc: "Every product meets strict quality standards before export." },
  { icon: Handshake, title: "Trusted Partnerships", desc: "Long-term, honest relationships with buyers and suppliers." },
  { icon: Clock, title: "On-Time Delivery", desc: "Committed to timelines across every stage of the supply chain." },
  { icon: Globe2, title: "Global Reach", desc: "Connecting Indian produce to domestic and international markets." },
  { icon: DollarSign, title: "Competitive Pricing", desc: "Best value through direct sourcing and efficient supply chains." },
  { icon: HomeIcon, title: "Rooted in Konkan", desc: "Deep local sourcing knowledge from Sindhudurga's agricultural heartland." },
];

const directors = [
  { initials: "SST", name: "Mr. Shubham Sunil Talekar", role: "Director, SunilWays Exports Pvt Ltd" },
  { initials: "SKT", name: "Smt. Sukanya Sunil Talekar", role: "Director, SunilWays Exports Pvt Ltd" },
];

const certs = [
  { name: "APEDA", logo: apedaAsset },
  { name: "MPEDA", logo: mpedaAsset },
  { name: "MSME", logo: msmeAsset },
  { name: "IEC", logo: iecAsset },
  { name: "FSSAI", logo: fssaiAsset },
  { name: "Phytosanitary", logo: phytosanitaryAsset },
];

function HomePage() {
  const featured = featuredSlugs
    .map((s) => products.find((p) => p.slug === s)!)
    .filter(Boolean);

  return (
    <>
      <HeroSlider />

      {/* Stats */}
      <section className="bg-primary">
        <div className="mx-auto max-w-7xl px-4 py-10 grid grid-cols-2 lg:grid-cols-4 gap-y-6 gap-x-4 divide-y lg:divide-y-0 lg:divide-x divide-accent/30">
          {stats.map((s) => (
            <div key={s.label} className="text-center px-4 pt-6 lg:pt-0">
              <div className="text-3xl sm:text-4xl font-bold text-accent font-display">{s.value}</div>
              <div className="mt-1 text-xs sm:text-sm uppercase tracking-wider text-white/80">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-7">
            <SectionHeading
              kicker="WHO WE ARE"
              title="A Modern Export House Rooted in Konkan Traditions"
            />
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                SunilWays Exports Pvt Ltd is a Sindhudurga-based export house engaged in the import,
                export, trading and distribution of agricultural produce, food products and allied
                commodities. We specialise in traditional, regional and ethnic products of the Konkan
                coast — including Kokum and its derivatives, Cashew Nuts, Dry Fish, Spices,
                Coconut-based products, Mango and Jackfruit products, and more.
              </p>
              <p>
                We handle the full supply chain — from sourcing, procurement, grading, processing,
                packaging and labelling to storage, warehousing, transportation and delivery —
                serving both domestic and international markets through B2B, B2C, wholesale, retail
                and e-commerce channels.
              </p>
            </div>
            <Link
              to="/about"
              className="mt-7 inline-flex items-center gap-2 px-5 py-2.5 rounded-md border-2 border-primary text-primary text-sm font-semibold hover:bg-primary hover:text-primary-foreground transition"
            >
              Read More About Us <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            <FeatureTile icon={Leaf} label="Quality Agricultural Produce" />
            <FeatureTile icon={Ship} label="Global Export Network" />
            <FeatureTile icon={Package} label="End-to-End Supply Chain" />
            <FeatureTile icon={Wheat} label="Traditional Konkan Products" />
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-cream">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeading title="What We Do" center subtitle="From sourcing to delivery — a complete export and trading service." />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map((s) => (
              <ServiceCard key={s.title} icon={s.icon} title={s.title} desc={s.desc} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeading
            title="Our Featured Products"
            center
            subtitle="Premium quality produce from the Konkan coast and across India."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featured.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              to="/products"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition"
            >
              View All Products <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="py-20 bg-cream">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeading title="Why Choose SunilWays?" center />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {whyUs.map((w) => (
              <WhyCard key={w.title} {...w} />
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeading title="Our Leadership" center />
          <div className="flex flex-wrap gap-6 justify-center">
            {directors.map((d) => (
              <PersonMini key={d.initials} {...d} />
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-primary">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white" style={{ color: "white" }}>
            Memberships &amp; Certifications
          </h2>
          <div className="mx-auto mt-4 h-[2px] w-14 bg-accent" />
          <div className="mt-10 grid grid-cols-3 gap-6 max-w-4xl mx-auto">
            {certs.map((c) => (
              <div
                key={c.name}
                className="bg-white rounded-xl p-4 flex items-center justify-center h-28"
              >
                <img
                  src={c.logo}
                  alt={`${c.name} logo`}
                  className="max-h-full max-w-full object-contain"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}

function FeatureTile({ icon: Icon, label }: { icon: typeof Leaf; label: string }) {
  return (
    <div className="bg-white border border-border rounded-xl p-5 hover:border-accent transition group">
      <div className="h-11 w-11 rounded-lg bg-cream flex items-center justify-center group-hover:bg-accent/10 transition">
        <Icon className="h-5 w-5 text-accent" />
      </div>
      <div className="mt-3 text-sm font-semibold text-primary">{label}</div>
    </div>
  );
}

function ServiceCard({ icon: Icon, title, desc }: { icon: typeof Ship; title: string; desc: string }) {
  const ref = useFadeIn<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className="group relative bg-white rounded-xl border border-border p-6 hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(27,45,95,0.10)] transition-all overflow-hidden"
    >
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-accent scale-x-0 group-hover:scale-x-100 origin-left transition-transform" />
      <div className="h-12 w-12 rounded-lg bg-cream flex items-center justify-center">
        <Icon className="h-6 w-6 text-accent" />
      </div>
      <h3 className="mt-4 text-lg font-semibold text-primary">{title}</h3>
      <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{desc}</p>
    </div>
  );
}

function WhyCard({ icon: Icon, title, desc }: { icon: typeof CheckCircle2; title: string; desc: string }) {
  const ref = useFadeIn<HTMLDivElement>();
  return (
    <div ref={ref} className="bg-white rounded-xl border border-border p-6 hover:border-accent transition">
      <div className="flex items-start gap-4">
        <div className="h-11 w-11 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
          <Icon className="h-5 w-5 text-accent" />
        </div>
        <div>
          <h3 className="text-base font-semibold text-primary">{title}</h3>
          <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{desc}</p>
        </div>
      </div>
    </div>
  );
}

function PersonMini({ initials, name, role }: { initials: string; name: string; role: string }) {
  return (
    <div className="w-[260px] bg-white rounded-xl border border-border p-6 text-center hover:border-accent transition">
      <div className="mx-auto h-24 w-24 rounded-full bg-primary text-accent flex items-center justify-center text-2xl font-bold font-display">
        {initials}
      </div>
      <h3 className="mt-4 text-base font-semibold text-primary">{name}</h3>
      <p className="mt-1 text-xs text-muted-foreground">{role}</p>
    </div>
  );
}

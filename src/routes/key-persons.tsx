import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { CtaBanner } from "@/components/site/CtaBanner";

export const Route = createFileRoute("/key-persons")({
  head: () => ({
    meta: [
      { title: "Key Persons — SunilWays Exports Pvt Ltd" },
      {
        name: "description",
        content:
          "Meet the directors of SunilWays Exports — Mr. Shubham Sunil Talekar and Smt. Sukanya Sunil Talekar.",
      },
      { property: "og:title", content: "Leadership — SunilWays Exports Pvt Ltd" },
      { property: "og:description", content: "Our leadership team." },
      { property: "og:url", content: "/key-persons" },
    ],
    links: [{ rel: "canonical", href: "/key-persons" }],
  }),
  component: KeyPersonsPage,
});

const people = [
  {
    initials: "SST",
    name: "Mr. Shubham Sunil Talekar",
    role: "Director",
    bio: "Leads operations, business development and international trade partnerships for SunilWays Exports.",
  },
  {
    initials: "SKT",
    name: "Smt. Sukanya Sunil Talekar",
    role: "Director",
    bio: "Co-leads strategic planning, procurement and supply chain coordination at SunilWays Exports.",
  },
];

function KeyPersonsPage() {
  return (
    <>
      <PageHero title="Our Leadership Team" crumb="Key Persons" />
      <section className="py-20 bg-cream">
        <div className="mx-auto max-w-5xl px-4 grid md:grid-cols-2 gap-6">
          {people.map((p) => (
            <div
              key={p.initials}
              className="bg-white rounded-xl border border-border p-8 text-center hover:border-accent transition"
            >
              <div className="mx-auto h-32 w-32 rounded-full bg-primary text-accent flex items-center justify-center text-3xl font-bold font-display">
                {p.initials}
              </div>
              <h3 className="mt-5 text-xl font-semibold text-primary">{p.name}</h3>
              <div className="text-sm text-accent font-semibold uppercase tracking-wider mt-1">{p.role}</div>
              <div className="text-xs text-muted-foreground mt-0.5">SunilWays Exports Pvt Ltd</div>
              <div className="mx-auto mt-4 h-[2px] w-10 bg-accent" />
              <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{p.bio}</p>
            </div>
          ))}
        </div>
        <p className="mt-8 text-center text-xs text-muted-foreground italic">
          Director photos will replace the initials avatars once provided.
        </p>
      </section>
      <CtaBanner />
    </>
  );
}

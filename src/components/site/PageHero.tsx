import { Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";

export function PageHero({ title, crumb }: { title: string; crumb: string }) {
  return (
    <section className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:py-20">
        <h1 className="text-4xl sm:text-5xl text-white font-bold">{title}</h1>
        <div className="mt-3 flex items-center gap-2 text-sm text-white/70">
          <Link to="/" className="hover:text-accent">Home</Link>
          <ChevronRight className="h-3.5 w-3.5" />
          <span className="text-accent">{crumb}</span>
        </div>
        <div className="mt-5 h-[2px] w-14 bg-accent" />
      </div>
    </section>
  );
}

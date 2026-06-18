import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import type { Product } from "./data";

export function ProductCard({ product }: { product: Product }) {
  return (
    <div className="group bg-white rounded-xl border border-border overflow-hidden hover:border-accent hover:shadow-[0_8px_28px_rgba(27,45,95,0.10)] transition-all">
      <div className="aspect-[4/3] overflow-hidden bg-cream">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-5">
        <h3 className="text-base font-semibold text-primary">{product.name}</h3>
        <p className="mt-1.5 text-sm text-muted-foreground line-clamp-2">{product.short}</p>
        <Link
          to="/contact"
          className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:gap-2.5 transition-all"
        >
          Enquire Now <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </div>
    </div>
  );
}

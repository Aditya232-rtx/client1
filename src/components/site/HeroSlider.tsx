import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";

type Slide = {
  image: string;
  tag?: string;
  heading: string;
  subtext: string;
};

const slides: Slide[] = [
  {
    image:
      "https://images.unsplash.com/photo-1532336414038-cf19250c5757?auto=format&fit=crop&w=1920&q=80",
    tag: "INDIA'S COASTAL FLAVOURS, EXPORTED WORLDWIDE",
    heading: "Welcome to SunilWays Exports Pvt Ltd",
    subtext:
      "Your trusted partner for premium Indian agricultural produce and traditional food products.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=1920&q=80",
    tag: "TRUSTED SINCE INCEPTION",
    heading: "We Export the Best of Konkan",
    subtext:
      "Kokum, Cashew Nuts, Dry Fish, Spices & more — sourced from the heart of Sindhudurga.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1920&q=80",
    tag: "FARM TO GLOBAL MARKETS",
    heading: "From Farm to Global Markets",
    subtext:
      "End-to-end sourcing, processing, packaging and export services for domestic and international buyers.",
  },
];

export function HeroSlider() {
  const [active, setActive] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setActive((i) => (i + 1) % slides.length), 5000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative h-[88vh] min-h-[560px] max-h-[760px] overflow-hidden">
      {slides.map((s, i) => (
        <div
          key={i}
          className="absolute inset-0 transition-opacity duration-1000"
          style={{ opacity: i === active ? 1 : 0 }}
          aria-hidden={i !== active}
        >
          <img src={s.image} alt="" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-primary/60" />
        </div>
      ))}

      <div className="relative h-full mx-auto max-w-7xl px-4 flex flex-col items-center justify-center text-center text-white">
        {slides[active].tag && (
          <div className="kicker text-accent mb-5">{slides[active].tag}</div>
        )}
        <h1
          className="text-white text-4xl sm:text-5xl lg:text-[52px] font-bold max-w-4xl leading-tight"
          style={{ color: "white" }}
        >
          {slides[active].heading}
        </h1>
        <p className="mt-5 text-base sm:text-lg text-white/90 max-w-2xl">
          {slides[active].subtext}
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center gap-3">
          <Link
            to="/products"
            className="px-7 py-3 rounded-md bg-accent text-primary font-semibold hover:bg-accent/90 transition shadow-md"
          >
            Explore Products
          </Link>
          <Link
            to="/contact"
            className="px-7 py-3 rounded-md border-2 border-white text-white font-semibold hover:bg-white hover:text-primary transition"
          >
            Contact Us
          </Link>
        </div>
      </div>

      <div className="absolute bottom-6 left-0 right-0 flex items-center justify-center gap-2.5 z-10">
        {slides.map((_, i) => (
          <button
            key={i}
            aria-label={`Slide ${i + 1}`}
            onClick={() => setActive(i)}
            className={`h-2.5 rounded-full transition-all ${
              i === active ? "w-8 bg-accent" : "w-2.5 bg-white/60 hover:bg-white"
            }`}
          />
        ))}
      </div>
    </section>
  );
}

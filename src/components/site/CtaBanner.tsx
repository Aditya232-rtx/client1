import { Link } from "@tanstack/react-router";

export function CtaBanner() {
  return (
    <section className="bg-accent">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:py-14 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-white" style={{ color: "white" }}>
          Ready to Source Premium Indian Products?
        </h2>
        <p className="mt-3 text-white/90 max-w-2xl mx-auto">
          Get in touch with our team for inquiries, sourcing, or partnership opportunities.
        </p>
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            to="/contact"
            className="px-6 py-3 rounded-md bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition"
          >
            Contact Us
          </Link>
          <a
            href="mailto:office@sunilwaysexports.com"
            className="px-6 py-3 rounded-md border-2 border-white text-white font-medium hover:bg-white hover:text-primary transition"
          >
            Email Us
          </a>
        </div>
      </div>
    </section>
  );
}

import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import logo from "@/assets/sunilways-logo.png";

const productItems = [
  { label: "Fruits & Vegetables", to: "/products" },
  { label: "Spices", to: "/products" },
  { label: "Dry Fruits & Cashew Nuts", to: "/products" },
  { label: "Kokum & Derivatives", to: "/products" },
  { label: "Dry Fish", to: "/products" },
  { label: "Coconut Products", to: "/products" },
  { label: "Rice", to: "/products" },
  { label: "Mango & Jackfruit Products", to: "/products" },
  { label: "Pickles & Condiments", to: "/products" },
  { label: "Onion & Grapes", to: "/products" },
] as const;

const aboutItems = [
  { label: "Company", to: "/about" },
  { label: "Key Persons", to: "/key-persons" },
  { label: "Certifications", to: "/certifications" },
] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 bg-white border-b border-border transition-shadow ${
        scrolled ? "shadow-[0_2px_12px_rgba(27,45,95,0.08)]" : ""
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 h-16 sm:h-20 flex items-center justify-between overflow-visible">
        <Link to="/" className="flex items-center gap-3 relative" aria-label="SunilWays Exports — Home">
          <img src={logo} alt="SunilWays Exports Pvt Ltd" className="h-12 sm:h-16 w-auto" />
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          <NavLink to="/" exact>Home</NavLink>
          <Dropdown label="About" items={aboutItems} />
          <Dropdown label="Products" items={productItems} />
          <NavLink to="/services">Services</NavLink>
          <NavLink to="/contact">Contact Us</NavLink>
        </nav>

        <button
          className="lg:hidden p-2 text-primary"
          onClick={() => setOpen(true)}
          aria-label="Open menu"
        >
          <Menu className="h-6 w-6" />
        </button>
      </div>

      {open && (
        <div className="fixed inset-0 z-50 bg-white lg:hidden flex flex-col">
          <div className="flex items-center justify-between px-4 h-16 border-b border-border">
            <img src={logo} alt="SunilWays Exports" className="h-12 w-auto" />
            <button onClick={() => setOpen(false)} aria-label="Close menu" className="p-2 text-primary">
              <X className="h-6 w-6" />
            </button>
          </div>
          <div className="flex-1 overflow-y-auto px-6 py-6 flex flex-col gap-1">
            <MobileLink to="/" onClick={() => setOpen(false)}>Home</MobileLink>
            <MobileGroup label="About" items={aboutItems} onSelect={() => setOpen(false)} />
            <MobileGroup label="Products" items={productItems} onSelect={() => setOpen(false)} />
            <MobileLink to="/services" onClick={() => setOpen(false)}>Services</MobileLink>
            <MobileLink to="/contact" onClick={() => setOpen(false)}>Contact Us</MobileLink>
          </div>
        </div>
      )}
    </header>
  );
}

function NavLink({ to, children, exact }: { to: string; children: React.ReactNode; exact?: boolean }) {
  return (
    <Link
      to={to}
      activeOptions={{ exact: !!exact }}
      activeProps={{ className: "text-primary nav-active" }}
      inactiveProps={{ className: "text-foreground/80 hover:text-primary" }}
      className="relative px-4 py-2 text-sm font-medium transition-colors group"
    >
      {children}
      <span className="absolute left-4 right-4 -bottom-0.5 h-[2px] bg-accent scale-x-0 group-[.nav-active]:scale-x-100 group-hover:scale-x-100 origin-left transition-transform" />
    </Link>
  );
}

function Dropdown({ label, items }: { label: string; items: readonly { label: string; to: string }[] }) {
  return (
    <div className="relative group">
      <button className="px-4 py-2 text-sm font-medium text-foreground/80 hover:text-primary flex items-center gap-1 transition">
        {label}
        <ChevronDown className="h-3.5 w-3.5 transition group-hover:rotate-180" />
      </button>
      <div className="absolute left-0 top-full pt-2 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition">
        <div className="bg-white border border-border rounded-xl shadow-lg p-2 min-w-[240px]">
          {items.map((it) => (
            <Link
              key={it.label}
              to={it.to}
              className="block px-3 py-2 text-sm text-foreground/80 hover:bg-cream hover:text-primary rounded-md transition"
            >
              {it.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

function MobileLink({ to, children, onClick }: { to: string; children: React.ReactNode; onClick: () => void }) {
  return (
    <Link
      to={to}
      onClick={onClick}
      activeProps={{ className: "text-accent" }}
      className="py-3 text-lg font-medium text-primary border-b border-border"
    >
      {children}
    </Link>
  );
}

function MobileGroup({
  label,
  items,
  onSelect,
}: {
  label: string;
  items: readonly { label: string; to: string }[];
  onSelect: () => void;
}) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-border">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full py-3 flex items-center justify-between text-lg font-medium text-primary"
      >
        {label}
        <ChevronDown className={`h-4 w-4 transition ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="pb-3 pl-3 flex flex-col gap-1">
          {items.map((it) => (
            <Link
              key={it.label}
              to={it.to}
              onClick={onSelect}
              className="py-1.5 text-sm text-foreground/70 hover:text-accent"
            >
              {it.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

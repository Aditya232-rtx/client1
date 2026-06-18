import { Link } from "@tanstack/react-router";
import { MapPin, Phone, Mail, Linkedin, Instagram, Facebook } from "lucide-react";
import logo from "@/assets/sunilways-logo.png";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 py-14 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="bg-white/95 rounded-lg p-3 inline-block">
            <img src={logo} alt="SunilWays Exports" className="h-16 w-auto" />
          </div>
          <p className="mt-4 text-sm text-white/75 leading-relaxed max-w-xs">
            Connecting Indian Quality to Global Markets.
          </p>
          <div className="mt-5 flex items-center gap-3">
            <SocialIcon href="#" label="LinkedIn"><Linkedin className="h-4 w-4" /></SocialIcon>
            <SocialIcon href="#" label="Instagram"><Instagram className="h-4 w-4" /></SocialIcon>
            <SocialIcon href="#" label="Facebook"><Facebook className="h-4 w-4" /></SocialIcon>
          </div>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4 text-base">Quick Links</h4>
          <ul className="space-y-2 text-sm text-white/75">
            <FLink to="/">Home</FLink>
            <FLink to="/about">About Company</FLink>
            <FLink to="/key-persons">Key Persons</FLink>
            <FLink to="/certifications">Certifications</FLink>
            <FLink to="/services">Services</FLink>
            <FLink to="/contact">Contact Us</FLink>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4 text-base">Products</h4>
          <ul className="space-y-2 text-sm text-white/75">
            <FLink to="/products">Kokum &amp; Derivatives</FLink>
            <FLink to="/products">Cashew Nuts</FLink>
            <FLink to="/products">Spices</FLink>
            <FLink to="/products">Coconut Products</FLink>
            <FLink to="/products">Dry Fish</FLink>
            <FLink to="/products">Mango &amp; Jackfruit Products</FLink>
            <FLink to="/products">View All Products</FLink>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4 text-base">Contact</h4>
          <ul className="space-y-3 text-sm text-white/80">
            <li className="flex gap-2.5">
              <MapPin className="h-4 w-4 text-accent shrink-0 mt-0.5" />
              <span>H.N. 243, Talere, Tal - Kankavli, Dist - Sindhudurga, Maharashtra, India - 416801</span>
            </li>
            <li className="flex gap-2.5">
              <Phone className="h-4 w-4 text-accent shrink-0 mt-0.5" />
              <a href="tel:+918208802554" className="hover:text-accent transition">+91 82088 02554</a>
            </li>
            <li className="flex gap-2.5">
              <Mail className="h-4 w-4 text-accent shrink-0 mt-0.5" />
              <a href="mailto:office@sunilwaysexports.com" className="hover:text-accent transition break-all">
                office@sunilwaysexports.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-accent/40">
        <div className="mx-auto max-w-7xl px-4 py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-white/70">
          <p>© {new Date().getFullYear()} SunilWays Exports Pvt Ltd. All Rights Reserved.</p>
          <p>Designed with <span className="text-accent">♥</span> in India</p>
        </div>
      </div>
    </footer>
  );
}

function FLink({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <li>
      <Link to={to} className="hover:text-accent transition">
        {children}
      </Link>
    </li>
  );
}

function SocialIcon({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      aria-label={label}
      className="h-9 w-9 rounded-full border border-white/20 flex items-center justify-center text-white/80 hover:text-accent hover:border-accent transition"
    >
      {children}
    </a>
  );
}

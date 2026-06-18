import { MapPin, Phone, Mail } from "lucide-react";

export function TopBar() {
  return (
    <div className="bg-primary text-primary-foreground text-[12px]">
      <div className="mx-auto max-w-7xl flex flex-col sm:flex-row items-center justify-between gap-1 px-4 h-auto sm:h-9 py-1.5">
        <div className="flex items-center gap-2 opacity-90">
          <MapPin className="h-3.5 w-3.5 text-accent" />
          <span>Talere, Kankavli, Sindhudurga, Maharashtra, India</span>
        </div>
        <div className="flex items-center gap-5 opacity-90">
          <a href="tel:+918208802554" className="flex items-center gap-1.5 hover:text-accent transition">
            <Phone className="h-3.5 w-3.5 text-accent" />
            <span>+91 82088 02554</span>
          </a>
          <a href="mailto:office@sunilwaysexports.com" className="hidden sm:flex items-center gap-1.5 hover:text-accent transition">
            <Mail className="h-3.5 w-3.5 text-accent" />
            <span>office@sunilwaysexports.com</span>
          </a>
        </div>
      </div>
    </div>
  );
}

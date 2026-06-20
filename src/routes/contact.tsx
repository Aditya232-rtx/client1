import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";

// Client's WhatsApp number — country code + number, digits only (+91 77699 78772)
const WHATSAPP_NUMBER = "918208802554";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us — SunilWays Exports Pvt Ltd" },
      {
        name: "description",
        content:
          "Contact SunilWays Exports for inquiries, sourcing and partnerships. Talere, Kankavli, Sindhudurga, Maharashtra. +91 82088 02554 · office@sunilwaysexports.com",
      },
      { property: "og:title", content: "Contact — SunilWays Exports Pvt Ltd" },
      { property: "og:description", content: "Get in touch for inquiries, sourcing and partnerships." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

const productOptions = [
  "All Products",
  "Kokum",
  "Cashew Nuts",
  "Spices",
  "Dry Fish",
  "Coconut Products",
  "Rice",
  "Mango Products",
  "Pickles",
  "Others",
];

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your full name").max(100),
  company: z.string().trim().max(150).optional().or(z.literal("")),
  email: z.string().trim().email("Enter a valid email").max(255),
  phone: z
    .string()
    .trim()
    .min(6, "Enter a valid phone number")
    .max(20)
    .regex(/^[0-9 +\-()]+$/, "Use digits, +, -, () and spaces only"),
  country: z.string().trim().max(80).optional().or(z.literal("")),
  product: z.string(),
  message: z.string().trim().min(10, "Message must be at least 10 characters").max(2000),
});
type FormValues = z.infer<typeof schema>;

function ContactPage() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { product: "All Products" },
  });

  const onSubmit = (data: FormValues) => {
    const lines = [
      "*New Enquiry — SunilWays Exports*",
      `Name: ${data.name}`,
      data.company ? `Company: ${data.company}` : null,
      `Email: ${data.email}`,
      `Phone: ${data.phone}`,
      data.country ? `Country: ${data.country}` : null,
      `Product: ${data.product}`,
      `Message: ${data.message}`,
    ].filter(Boolean);

    const text = encodeURIComponent(lines.join("\n"));
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;

    window.open(url, "_blank");

    toast.success("Opening WhatsApp… tap Send to deliver your enquiry.");
    reset({ product: "All Products" });
  };

  return (
    <>
      <PageHero title="Get in Touch" crumb="Contact" />

      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 grid lg:grid-cols-12 gap-10">
          {/* Info */}
          <div className="lg:col-span-5 space-y-6">
            <h2 className="text-2xl font-semibold text-primary section-heading">Contact Information</h2>

            <InfoRow icon={MapPin} title="Address">
              H.N. 243, Talere, Tal - Kankavli,
              <br />
              Dist - Sindhudurga, Maharashtra, India - 416801
            </InfoRow>
            <InfoRow icon={Phone} title="Phone">
              <a href="tel:+918208802554" className="hover:text-accent">+91 82088 02554</a>
            </InfoRow>
            <InfoRow icon={Mail} title="Email">
              <a href="mailto:office@sunilwaysexports.com" className="hover:text-accent break-all">
                office@sunilwaysexports.com
              </a>
            </InfoRow>
            <InfoRow icon={Clock} title="Business Hours">
              Monday – Saturday, 9:00 AM – 6:00 PM IST
            </InfoRow>

            <div className="rounded-xl overflow-hidden border border-border">
              <iframe
                title="SunilWays Exports location"
                src="https://www.google.com/maps?q=16.4476654,73.6565122&z=16&output=embed"
                className="w-full h-72"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-7">
            <div className="bg-cream rounded-xl border border-border p-6 sm:p-8">
              <h2 className="text-2xl font-semibold text-primary section-heading">Send an Enquiry</h2>

              <form onSubmit={handleSubmit(onSubmit)} className="mt-6 grid sm:grid-cols-2 gap-4">
                <Field label="Full Name *" error={errors.name?.message}>
                  <input
                    type="text"
                    {...register("name")}
                    className="input"
                    placeholder="Your full name"
                  />
                </Field>
                <Field label="Company Name" error={errors.company?.message}>
                  <input type="text" {...register("company")} className="input" placeholder="Company (optional)" />
                </Field>
                <Field label="Email Address *" error={errors.email?.message}>
                  <input type="email" {...register("email")} className="input" placeholder="you@example.com" />
                </Field>
                <Field label="Phone Number *" error={errors.phone?.message}>
                  <input type="tel" {...register("phone")} className="input" placeholder="+91 ..." />
                </Field>
                <Field label="Country" error={errors.country?.message}>
                  <input type="text" {...register("country")} className="input" placeholder="Country" />
                </Field>
                <Field label="Product(s) of Interest" error={errors.product?.message}>
                  <select {...register("product")} className="input">
                    {productOptions.map((o) => (
                      <option key={o} value={o}>{o}</option>
                    ))}
                  </select>
                </Field>
                <div className="sm:col-span-2">
                  <Field label="Message / Inquiry Details *" error={errors.message?.message}>
                    <textarea {...register("message")} rows={5} className="input resize-y" placeholder="Tell us about your requirement..." />
                  </Field>
                </div>
                <div className="sm:col-span-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-accent text-primary font-semibold hover:bg-accent/90 transition disabled:opacity-60"
                  >
                    <WhatsAppIcon className="h-5 w-5" />
                    {isSubmitting ? "Sending..." : "Send Enquiry →"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .input {
          width: 100%;
          background: white;
          border: 1px solid var(--color-border);
          border-radius: 8px;
          padding: 10px 12px;
          font-size: 14px;
          color: var(--color-foreground);
          outline: none;
          transition: border-color .15s, box-shadow .15s;
        }
        .input:focus {
          border-color: var(--color-accent);
          box-shadow: 0 0 0 3px color-mix(in oklab, var(--color-accent) 25%, transparent);
        }
      `}</style>
    </>
  );
}

function InfoRow({
  icon: Icon,
  title,
  children,
}: {
  icon: typeof MapPin;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-4">
      <div className="h-11 w-11 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
        <Icon className="h-5 w-5 text-accent" />
      </div>
      <div>
        <div className="text-sm font-semibold text-primary">{title}</div>
        <div className="mt-1 text-sm text-muted-foreground leading-relaxed">{children}</div>
      </div>
    </div>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="text-xs font-semibold uppercase tracking-wider text-primary">{label}</span>
      <div className="mt-1.5">{children}</div>
      {error && <p className="mt-1 text-xs text-destructive">{error}</p>}
    </label>
  );
}
function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.71.306 1.263.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
    </svg>
  );
}
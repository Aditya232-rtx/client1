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
                title="SunilWays Exports location — Kankavli"
                src="https://www.google.com/maps?q=Kankavli,Sindhudurga,Maharashtra&output=embed"
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
export type EnquiryInput = {
  name: string;
  company?: string;
  email: string;
  phone: string;
  country?: string;
  product: string;
  message: string;
};

declare global {
  interface Navigator {
    modelContext?: {
      registerTool: (tool: {
        name: string;
        description: string;
        inputSchema: Record<string, unknown>;
        execute: (input: EnquiryInput) => Promise<{ content: Array<{ type: "text"; text: string }> }>;
      }) => void | (() => void);
    };
  }
}

export function registerSunilWaysTools() {
  if (typeof navigator === "undefined" || !navigator.modelContext?.registerTool) return;
  const unregister = navigator.modelContext.registerTool({
    name: "prepare_export_enquiry",
    description: "Validate and prepare a SunilWays Exports product enquiry. The buyer must still review and send it through the contact form.",
    inputSchema: {
      type: "object",
      required: ["name", "email", "phone", "product", "message"],
      properties: {
        name: { type: "string", minLength: 2 },
        company: { type: "string" },
        email: { type: "string", format: "email" },
        phone: { type: "string", minLength: 6 },
        country: { type: "string" },
        product: { type: "string", enum: ["All Products", ...productNames] },
        message: { type: "string", minLength: 10 },
      },
    },
    async execute(input) {
      if (!input.name || !input.email || !input.phone || !input.product || !input.message) {
        return { content: [{ type: "text", text: "Please provide name, email, phone, product and message." }] };
      }
      return { content: [{ type: "text", text: `Enquiry prepared for ${input.product}. Please review the contact form before sending.` }] };
    },
  });
  return typeof unregister === "function" ? unregister : undefined;
}

const productNames = ["Spices", "Cashew Kernels", "Kokum", "Alphonso Mango Pulp", "Engineering Goods & Industrial Products"];

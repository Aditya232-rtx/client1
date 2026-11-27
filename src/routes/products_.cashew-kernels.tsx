import { createFileRoute } from "@tanstack/react-router";
import { ProductBuyerPage } from "@/components/site/ProductBuyerPage";
const brief = {
  "name": "Cashew Kernels",
  "h1": "Cashew Kernels from Sindhudurga, Maharashtra",
  "intro": "SunilWays Exports sources cashew kernels for bulk supply and export enquiries. Share the grade, quantity, packing and destination you need so our team can discuss suitable supply options.",
  "facts": [
    [
      "Origin",
      "Sindhudurga, Maharashtra"
    ],
    [
      "Listed grades",
      "W180, W210, W240, W320, W450; LWP and SWP"
    ],
    [
      "Listed packaging",
      "Vacuum-packed 10 kg tins and pouches"
    ]
  ],
  "sections": [
    [
      "Choose kernels or raw in-shell nuts",
      "Cashew kernels are the shelled product. Raw cashew nuts in shell are a separate catalog item with different handling and procurement requirements. Specify kernels in your enquiry when you need the shelled product."
    ],
    [
      "Choose the grade for your requirement",
      "Request your preferred whole-kernel grade or specify LWP or SWP for a pieces requirement. Ask for a current specification and sample availability before agreeing a commercial order."
    ],
    [
      "Confirm the supply details",
      "Ask our team to confirm grade availability, minimum order quantity, origin documentation, packing, lead time and any inspection or test documentation required for your destination."
    ]
  ],
  "questions": [
    "Preferred grade and whole kernels or pieces",
    "Required quantity and tin or pouch packing",
    "Destination country and required delivery timeframe",
    "Specification, sample and inspection requirements"
  ]
};
export const Route = createFileRoute("/products_/cashew-kernels")({
 head: () => ({
  "meta": [
    {
      "title": "Sindhudurga Cashew Kernels W180\u2013W450 | SunilWays"
    },
    {
      "name": "description",
      "content": "Source cashew kernels from Sindhudurga, Maharashtra. Explore listed W180\u2013W450 grades, LWP and SWP, 10 kg packaging and bulk enquiry requirements."
    },
    {
      "property": "og:title",
      "content": "Sindhudurga Cashew Kernels W180\u2013W450 | SunilWays"
    },
    {
      "property": "og:description",
      "content": "Source cashew kernels from Sindhudurga, Maharashtra. Explore listed W180\u2013W450 grades, LWP and SWP, 10 kg packaging and bulk enquiry requirements."
    },
    {
      "property": "og:url",
      "content": "https://www.sunilwaysexports.com/products/cashew-kernels"
    }
  ],
  "links": [
    {
      "rel": "canonical",
      "href": "https://www.sunilwaysexports.com/products/cashew-kernels"
    }
  ]
}),
 component: () => <ProductBuyerPage brief={brief} />,
});

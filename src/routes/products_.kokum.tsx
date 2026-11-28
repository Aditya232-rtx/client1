import { createFileRoute } from "@tanstack/react-router";
import { ProductBuyerPage } from "@/components/site/ProductBuyerPage";
const brief = {
  "name": "Kokum",
  "h1": "Konkan Kokum from Sindhudurga, Maharashtra",
  "intro": "SunilWays Exports lists kokum sourced from Sindhudurga in the Konkan region of Maharashtra. This page covers kokum fruit forms; agal and sweetened syrup are separate catalog products.",
  "facts": [
    [
      "Origin",
      "Sindhudurga, Konkan, Maharashtra"
    ],
    [
      "Listed forms",
      "Sun-dried whole and wet rind"
    ],
    [
      "Listed packaging",
      "1 kg, 5 kg and 25 kg packs"
    ]
  ],
  "sections": [
    [
      "Choose the kokum form",
      "State whether you need the listed sun-dried form or wet rind. Ask for the product specification, preparation details and current availability for the form you intend to buy."
    ],
    [
      "Agal and syrup are separate products",
      "The catalog lists kokum agal as a natural concentrate and kokum syrup as ready-to-dilute and sweetened. Tell our team which product and formulation you need instead of treating those names as interchangeable."
    ],
    [
      "Confirm origin and packing for your order",
      "Request confirmation of sourcing origin, quantity, pack size, storage information, lead time and available supporting documents for the proposed order."
    ]
  ],
  "questions": [
    "Kokum form or liquid product required",
    "Quantity and preferred pack size",
    "Destination country and purchasing timeframe",
    "Required formulation, storage and documentation details"
  ]
};
export const Route = createFileRoute("/products_/kokum")({
 head: () => ({
  "meta": [
    {
      "title": "Konkan Kokum Supplier from Sindhudurga | SunilWays"
    },
    {
      "name": "description",
      "content": "Discuss bulk kokum sourcing from Sindhudurga, Konkan. View listed sun-dried and wet-rind forms, packaging and requirements for a product-specific quotation."
    },
    {
      "property": "og:title",
      "content": "Konkan Kokum Supplier from Sindhudurga | SunilWays"
    },
    {
      "property": "og:description",
      "content": "Discuss bulk kokum sourcing from Sindhudurga, Konkan. View listed sun-dried and wet-rind forms, packaging and requirements for a product-specific quotation."
    },
    {
      "property": "og:url",
      "content": "https://www.sunilwaysexports.com/products/kokum"
    }
  ],
  "links": [
    {
      "rel": "canonical",
      "href": "https://www.sunilwaysexports.com/products/kokum"
    }
  ]
}),
 component: () => <ProductBuyerPage brief={brief} />,
});

import { createFileRoute } from "@tanstack/react-router";
import { ProductBuyerPage } from "@/components/site/ProductBuyerPage";
const brief = {
  "name": "Fruit Pulp",
  "h1": "Alphonso Mango Pulp Sourcing from Konkan",
  "intro": "SunilWays Exports lists Alphonso, Totapuri and guava pulp in its fruit-pulp catalog. For an Alphonso requirement, specify the variety explicitly so the sourcing enquiry is matched to the intended product.",
  "facts": [
    [
      "Listed sourcing region",
      "Konkan, Maharashtra"
    ],
    [
      "Catalog varieties",
      "Alphonso, Totapuri and guava"
    ],
    [
      "Catalog packaging",
      "3.1 kg packs and 215 kg aseptic drums; confirm the format for your selected product"
    ]
  ],
  "sections": [
    [
      "Specify Alphonso pulp in your enquiry",
      "Fresh Alphonso mango and processed mango pulp are different products. Tell our team you need pulp, the intended use, quantity and required packaging."
    ],
    [
      "Confirm the specification before ordering",
      "Request the current product specification, formulation, processing and packing format, storage conditions, shelf life and available sample or test documentation. Exact parameters and availability must be confirmed for the proposed order."
    ],
    [
      "Choose a suitable packing format",
      "The catalog lists 3.1 kg and 215 kg formats. Ask which formats are available for Alphonso pulp and confirm whether the packing and handling requirements suit your intended application."
    ]
  ],
  "questions": [
    "Required pulp variety and intended application",
    "Quantity and preferred pack format",
    "Destination country and purchasing timeframe",
    "Required specification, sample and documentation"
  ]
};
export const Route = createFileRoute("/products_/alphonso-mango-pulp")({
 head: () => ({
  "meta": [
    {
      "title": "Konkan Alphonso Mango Pulp Sourcing | SunilWays"
    },
    {
      "name": "description",
      "content": "Enquire about Alphonso mango pulp from Konkan, Maharashtra. Discuss the listed aseptic packaging, product specification, quantity and destination."
    },
    {
      "property": "og:title",
      "content": "Konkan Alphonso Mango Pulp Sourcing | SunilWays"
    },
    {
      "property": "og:description",
      "content": "Enquire about Alphonso mango pulp from Konkan, Maharashtra. Discuss the listed aseptic packaging, product specification, quantity and destination."
    },
    {
      "property": "og:url",
      "content": "https://www.sunilwaysexports.com/products/alphonso-mango-pulp"
    }
  ],
  "links": [
    {
      "rel": "canonical",
      "href": "https://www.sunilwaysexports.com/products/alphonso-mango-pulp"
    }
  ]
}),
 component: () => <ProductBuyerPage brief={brief} />,
});

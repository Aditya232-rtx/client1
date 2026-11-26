import apedaAsset from "@/assets/certs/apeda.png";
import mpedaAsset from "@/assets/certs/mpeda.jpg";
import msmeAsset from "@/assets/certs/msme.png";
import iecAsset from "@/assets/certs/iec.png";
import fssaiAsset from "@/assets/certs/fssai.jpg";
import phytosanitaryAsset from "@/assets/certs/phytosanitary.jpg";

export type Certification = {
  name: string;
  full: string;
  logo?: string;
  about: string;
  document?: string;
};

export const certifications: Certification[] = [
  {
    name: "APEDA",
    document: "/certificates/apeda-rcmc.pdf",
    full: "Agricultural & Processed Food Products Export Development Authority",
    logo: apedaAsset,
    about:
      "APEDA is the apex body under India's Ministry of Commerce that promotes the export of scheduled agricultural and processed food products, providing financial assistance, quality standards and market access for exporters.",
  },
  {
    name: "MPEDA",
    full: "The Marine Products Export Development Authority",
    logo: mpedaAsset,
    about:
      "MPEDA is the nodal Government of India agency responsible for the development and regulation of marine product exports, including quality control, training and infrastructure support for seafood exporters.",
  },
  {
    name: "MSME",
    document: "/certificates/udyam.pdf",
    full: "Micro, Small & Medium Enterprises Registration",
    logo: msmeAsset,
    about:
      "MSME registration under the Government of India provides recognition, credit support, subsidies and policy benefits to small and medium businesses driving manufacturing and exports.",
  },
  {
    name: "IEC",
    document: "/certificates/iec.pdf",
    full: "Import Export Code",
    logo: iecAsset,
    about:
      "The Import Export Code, issued by the DGFT, is a mandatory 10-digit business identification number for any entity engaged in the import or export of goods and services from India.",
  },
  {
    name: "FSSAI",
    document: "/certificates/fssai.pdf",
    full: "Food Safety and Standards Authority of India",
    logo: fssaiAsset,
    about:
      "FSSAI is the statutory body under India's Ministry of Health that regulates and supervises food safety, setting standards for food products and ensuring compliance with hygiene and quality regulations.",
  },
  {
    name: "Phytosanitary",
    full: "Phytosanitary Certificate",
    logo: phytosanitaryAsset,
    about:
      "A Phytosanitary Certificate is an official document issued by the plant quarantine authority certifying that exported plants and plant products are free from pests and diseases, meeting international trade requirements.",
  },
  {
    name: "GST",
    full: "Goods and Services Tax Registration",
    about: "GST registration for SunilWays Exports Private Limited, issued by the Government of India.",
    document: "/certificates/gst.pdf",
  },
  {
    name: "Certificate of Incorporation",
    full: "Ministry of Corporate Affairs",
    about: "Certificate of Incorporation of SunilWays Exports Private Limited under the Companies Act, 2013.",
    document: "/certificates/incorporation.pdf",
  },
];

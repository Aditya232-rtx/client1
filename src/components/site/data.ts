import farmGrapes from "@/assets/catalog/generated/grapes.webp";
import farmAlphonsoMango from "@/assets/catalog/generated/alphonso-mango.webp";
import farmPomegranate from "@/assets/catalog/generated/pomegranate.webp";
import farmGuava from "@/assets/catalog/generated/guava.webp";
import farmSweetLime from "@/assets/catalog/generated/sweet-lime.webp";
import farmBanana from "@/assets/catalog/generated/banana.webp";
import farmJackfruit from "@/assets/catalog/generated/jackfruit.webp";
import farmPineapple from "@/assets/catalog/generated/pineapple.webp";
import farmOnion from "@/assets/catalog/generated/onion.webp";
import farmTomato from "@/assets/catalog/generated/tomato.webp";
import farmGarlic from "@/assets/catalog/generated/garlic.webp";
import farmGinger from "@/assets/catalog/generated/ginger.webp";
import farmGreenChilli from "@/assets/catalog/generated/green-chilli.webp";
import farmLemon from "@/assets/catalog/generated/lemon.webp";
import farmBasmatiRice from "@/assets/catalog/generated/basmati-rice.webp";
import farmNonBasmatiRice from "@/assets/catalog/generated/non-basmati-rice.webp";
import farmSonaMasooriRice from "@/assets/catalog/generated/sona-masoori-rice.webp";
import farmKolamRice from "@/assets/catalog/generated/kolam-rice.webp";
import farmIndrayaniRice from "@/assets/catalog/generated/indrayani-rice.webp";
import farmBajra from "@/assets/catalog/generated/bajra.webp";
import farmMaize from "@/assets/catalog/generated/maize.webp";
import farmCashewNuts from "@/assets/catalog/generated/cashew-nuts.webp";
import farmCashewKernels from "@/assets/catalog/generated/cashew-kernels.webp";
import farmGroundnuts from "@/assets/catalog/generated/groundnuts.webp";
import farmRaisins from "@/assets/catalog/generated/raisins.webp";
import farmTurmeric from "@/assets/catalog/generated/turmeric.webp";
import farmFreshCoconut from "@/assets/catalog/generated/fresh-coconut.webp";
import farmCoconutShellProducts from "@/assets/catalog/generated/coconut-shell-products.webp";
import farmHoney from "@/assets/catalog/generated/honey.webp";
import farmKokumSyrup from "@/assets/catalog/generated/kokum-syrup.webp";
import farmKokumButter from "@/assets/catalog/generated/kokum-butter.webp";
import farmLipBalm from "@/assets/catalog/generated/lip-balm.webp";
import fruitsVeg from "@/assets/product-fruits-veg.jpg";
import spices from "@/assets/product-spices.jpg";
import dryfruits from "@/assets/generated/category-dry-fruits-cashew.webp";
import kokum from "@/assets/generated/category-kokum.webp";
import dryfish from "@/assets/product-dryfish.jpg";
import coconut from "@/assets/product-coconut.jpg";
import rice from "@/assets/product-rice.jpg";
import mangoJack from "@/assets/generated/category-mango-jackfruit.webp";
import pickles from "@/assets/product-pickles.jpg";
import onionGrapes from "@/assets/product-onion-grapes.jpg";

export type Product = {
  name: string;
  slug: string;
  image: string;
  short: string;
  long: string;
};

export const products: Product[] = [
  {
    name: "Fruits & Vegetables",
    slug: "fruits-vegetables",
    image: fruitsVeg,
    short: "Fresh and seasonal produce for domestic and export markets.",
    long: "Fresh and seasonal produce including onion, grapes, mangoes and other fruits and vegetables for domestic and export markets.",
  },
  {
    name: "Spices",
    slug: "spices",
    image: spices,
    short: "Premium Indian spices — whole, ground and blended varieties.",
    long: "Premium Indian spices sourced directly from farms — whole, ground, and blended varieties for food industry and export.",
  },
  {
    name: "Dry Fruits & Cashew Nuts",
    slug: "dry-fruits-cashew",
    image: dryfruits,
    short: "High-grade cashew nuts and assorted dry fruits, packed for export.",
    long: "High-grade cashew nuts and assorted dry fruits, processed and packaged for domestic retail and bulk export.",
  },
  {
    name: "Kokum & Derivatives",
    slug: "kokum",
    image: kokum,
    short: "Pure kokum fruit, kokum agal, kokum butter — Sindhudurga specialty.",
    long: "Pure kokum fruit, kokum agal (concentrate), kokum butter, and value-added kokum products — a specialty of Sindhudurga.",
  },
  {
    name: "Dry Fish",
    slug: "dry-fish",
    image: dryfish,
    short: "Traditional coastal dry fish products from the Konkan region.",
    long: "Traditional coastal dry fish products from the Konkan region, processed and packaged for domestic and export supply.",
  },
  {
    name: "Coconut & Coconut Products",
    slug: "coconut",
    image: coconut,
    short: "Fresh coconuts, desiccated coconut, coconut oil and more.",
    long: "Fresh coconuts, desiccated coconut, coconut oil, and related products from the Konkan belt.",
  },
  {
    name: "Rice",
    slug: "rice",
    image: rice,
    short: "Premium Indian rice varieties, graded and packed for B2B & export.",
    long: "Premium Indian rice varieties sourced, graded, and packaged for B2B and export supply.",
  },
  {
    name: "Mango & Jackfruit Products",
    slug: "mango-jackfruit",
    image: mangoJack,
    short: "Alphonso pulp, pickles, dried mango, jackfruit chips and more.",
    long: "Alphonso and local mango pulp, pickles, dried mango, jackfruit chips, and processed products.",
  },
  {
    name: "Pickles & Condiments",
    slug: "pickles",
    image: pickles,
    short: "Traditional Konkan-style pickles, chutneys and condiments.",
    long: "Traditional Konkan-style pickles, chutneys, and condiments in retail and bulk packaging.",
  },
  {
    name: "Onion & Grapes",
    slug: "onion-grapes",
    image: onionGrapes,
    short: "Fresh and export-grade onions and table grapes from Maharashtra.",
    long: "Fresh and export-grade onions and table grapes sourced from Maharashtra farms.",
  },
];

export const featuredSlugs = ["kokum", "dry-fruits-cashew", "spices", "coconut", "mango-jackfruit", "dry-fish"];

// Detailed catalog grouped by category. Approved generated imagery is bundled locally.
export type CatalogItem = {
  name: string;
  image: string;
  origin: string;
  grades: string;
  packaging: string;
};
export type CatalogCategory = {
  title: string;
  slug: string;
  blurb: string;
  items: CatalogItem[];
};

const wm = (p: string) => `https://upload.wikimedia.org/wikipedia/commons/${p}`;

import blackpepperAsset from "@/assets/catalog/blackpepper.jpeg";
import cuminAsset from "@/assets/catalog/cuminseeds.jpeg";
import jaggeryAsset from "@/assets/catalog/jaggery.jpeg";
import jaggeryPowderAsset from "@/assets/catalog/jaggerypowder.jpeg";
import kokumAgarAsset from "@/assets/catalog/kokum-agar.jpg";
import kokumAsset from "@/assets/catalog/kokum.jpg";
import pickleAsset from "@/assets/catalog/pickle.jpeg";
import redchilliAsset from "@/assets/catalog/redchilli.png";

export const catalog: CatalogCategory[] = [
  {
    title: "Fresh Fruits",
    slug: "fresh-fruits",
    blurb: "Hand-picked seasonal fruits sourced from Maharashtra and across India, graded for export.",
    items: [
            {
        name: "Grapes",
        image: farmGrapes,
        origin: "Nashik & Sangli, Maharashtra",
        grades: "Thompson Seedless, Sonaka, Sharad Seedless",
        packaging: "4–5 kg punnets & export cartons, cold-chain",
      },
      {
        name: "Alphonso Mango",
        image: farmAlphonsoMango,
        origin: "Ratnagiri & Devgad, Konkan (GI-tagged)",
        grades: "A & B grade; 4, 5 & 6 dozen sizes",
        packaging: "Ventilated corrugated boxes, 4 dozen",
      },
      {
        name: "Pomegranate",
        image: farmPomegranate,
        origin: "Solapur & Nashik, Maharashtra",
        grades: "Bhagwa — Super, King & Queen sizes",
        packaging: "3.5–5 kg corrugated boxes",
      },
      {
        name: "Guava",
        image: farmGuava,
        origin: "Maharashtra",
        grades: "Allahabad Safeda, L-49 (Sardar)",
        packaging: "Bulk crates & export cartons",
      },
      {
        name: "Sweet Lime (Mosambi)",
        image: farmSweetLime,
        origin: "Marathwada, Maharashtra",
        grades: "Counts 80–150; A & B grade",
        packaging: "10–15 kg mesh bags / cartons",
      },
      {
        name: "Banana",
        image: farmBanana,
        origin: "Jalgaon, Maharashtra",
        grades: "Cavendish (G9), Robusta",
        packaging: "13–14.5 kg export cartons",
      },
      {
        name: "Jackfruit",
        image: farmJackfruit,
        origin: "Konkan region, Maharashtra",
        grades: "Whole & cut; raw and ripe",
        packaging: "Crates & vacuum packs",
      },
      {
        name: "Pineapple",
        image: farmPineapple,
        origin: "India",
        grades: "Queen & MD-2; A & B grade",
        packaging: "Export cartons, single layer",
      },
    ],
  },
  {
    title: "Fresh Vegetables",
    slug: "fresh-vegetables",
    blurb: "Farm-fresh vegetables in export-grade packaging, cold-chain ready.",
    items: [
            {
        name: "Onion",
        image: farmOnion,
        origin: "Nashik & Lasalgaon, Maharashtra",
        grades: "Red, white & rose; 35–55 mm & 55–70 mm",
        packaging: "5 / 10 / 20 / 25 kg mesh bags",
      },
      {
        name: "Tomato",
        image: farmTomato,
        origin: "Maharashtra & Karnataka",
        grades: "Hybrid round; A & B grade",
        packaging: "10 kg ventilated crates",
      },
      {
        name: "Garlic",
        image: farmGarlic,
        origin: "Madhya Pradesh & Maharashtra",
        grades: "Bulb counts 25–40; 40–50 mm",
        packaging: "5 / 10 kg mesh bags",
      },
      {
        name: "Ginger",
        image: farmGinger,
        origin: "Karnataka & Maharashtra",
        grades: "Fresh mature; 150 g+ hands",
        packaging: "Bulk 10–20 kg cartons",
      },
      {
        name: "Green Chilli",
        image: farmGreenChilli,
        origin: "Maharashtra & Andhra Pradesh",
        grades: "G4, Jwala varieties",
        packaging: "5–10 kg crates",
      },
      {
        name: "Lemon",
        image: farmLemon,
        origin: "Maharashtra & Andhra Pradesh",
        grades: "Kagzi; counts 100–200",
        packaging: "Mesh bags & cartons",
      },
    ],
  },
  {
    title: "Rice & Grains",
    slug: "rice-grains",
    blurb: "Premium Indian rice and millets — sorted, polished and bulk-packed for B2B & export.",
    items: [
            {
        name: "Basmati Rice",
        image: farmBasmatiRice,
        origin: "Punjab & Haryana, North India",
        grades: "1121, 1509, Pusa, Traditional; raw / steamed / sella",
        packaging: "5 / 10 / 25 / 50 kg bags & jute",
      },
      {
        name: "Non-Basmati Rice",
        image: farmNonBasmatiRice,
        origin: "India",
        grades: "IR64, Swarna, Parmal; 5% & 25% broken",
        packaging: "25 / 50 kg bags",
      },
      {
        name: "Sona Masoori Rice",
        image: farmSonaMasooriRice,
        origin: "Andhra Pradesh & Karnataka",
        grades: "Raw & steam polished",
        packaging: "25 / 26 / 50 kg bags",
      },
      {
        name: "Kolam Rice",
        image: farmKolamRice,
        origin: "Maharashtra",
        grades: "Zeera Kolam, Surti Kolam",
        packaging: "25 / 50 kg bags",
      },
      {
        name: "Indrayani Rice",
        image: farmIndrayaniRice,
        origin: "Maval, Pune, Maharashtra",
        grades: "Aromatic; polished & semi-polished",
        packaging: "5 / 10 / 25 kg bags",
      },
      {
        name: "Bajra (Pearl Millet)",
        image: farmBajra,
        origin: "Maharashtra & Rajasthan",
        grades: "Bold, machine-cleaned",
        packaging: "25 / 50 kg bags",
      },
      {
        name: "Maize (Corn)",
        image: farmMaize,
        origin: "Maharashtra & Karnataka",
        grades: "Yellow & white; feed and food grade",
        packaging: "50 kg bags & bulk",
      },
    ],
  },
  {
    title: "Nuts & Dry Fruits",
    slug: "nuts-dry-fruits",
    blurb: "High-grade cashew and dry fruits, hygienically processed and vacuum-packed.",
    items: [
            {
        name: "Cashew Nuts",
        image: farmCashewNuts,
        origin: "Konkan (Sindhudurga & Ratnagiri), Goa, Kerala",
        grades: "Raw cashew nuts (RCN), in-shell",
        packaging: "50 / 80 kg jute bags",
      },
      {
        name: "Cashew Kernels",
        image: farmCashewKernels,
        origin: "Sindhudurga, Maharashtra",
        grades: "W180, W210, W240, W320, W450; LWP & SWP",
        packaging: "Vacuum-packed 10 kg tins & pouches",
      },
      {
        name: "Groundnuts (Peanuts)",
        image: farmGroundnuts,
        origin: "Gujarat & Maharashtra",
        grades: "Java & Bold; 38/42, 40/50, 50/60 counts",
        packaging: "25 / 50 kg bags & vacuum",
      },
      {
        name: "Raisins",
        image: farmRaisins,
        origin: "Sangli & Nashik, Maharashtra",
        grades: "Green, golden & black; long and round",
        packaging: "10 / 15 kg cartons",
      },
    ],
  },
  {
    title: "Spices & Seasonings",
    slug: "spices",
    blurb: "Whole and ground spices sourced directly from farms — pungent, fresh and aromatic.",
    items: [
            {
        name: "Turmeric",
        image: farmTurmeric,
        origin: "Sangli, Maharashtra & Erode",
        grades: "Fingers & powder; Salem, Rajapuri; high curcumin",
        packaging: "25 / 50 kg bags",
      },
      {
        name: "Red Chilli",
        image: redchilliAsset,
        origin: "Guntur, AP & Maharashtra",
        grades: "Teja S17, Byadgi, 334; whole & powder",
        packaging: "10 / 25 / 50 kg bags",
      },
      {
        name: "Coriander Seeds",
        image: wm("thumb/8/86/Coriander_Seeds.jpg/960px-Coriander_Seeds.jpg"),
        origin: "Rajasthan, MP & Maharashtra",
        grades: "Eagle, Scooter; single & double parrot",
        packaging: "25 / 50 kg bags",
      },
      {
        name: "Cumin Seeds",
        image: cuminAsset,
        origin: "Gujarat & Rajasthan",
        grades: "Singapore 99%, Europe 99.5%; machine-cleaned",
        packaging: "25 / 50 kg bags",
      },
      {
        name: "Black Pepper",
        image: blackpepperAsset,
        origin: "Kerala & Karnataka",
        grades: "Malabar Garbled (MG1); 500–550 g/l",
        packaging: "25 / 50 kg bags",
      },
    ],
  },
  {
    title: "Coconut Products",
    slug: "coconut-products",
    blurb: "From the Konkan coast — fresh coconuts and value-added coconut derivatives.",
    items: [
            {
        name: "Fresh Coconut",
        image: farmFreshCoconut,
        origin: "Konkan coast & South India",
        grades: "Semi-husked & fully husked; 400–800 g",
        packaging: "Mesh bags & bulk",
      },
      {
        name: "Coconut Oil",
        image: wm("f/f3/Coconut_and_oil.jpg"),
        origin: "Konkan & Kerala",
        grades: "Edible & cold-pressed virgin",
        packaging: "Bottles, tins & drums",
      },
      {
        name: "Desiccated Coconut",
        image: wm("thumb/6/67/Desicated_coconut_soloA.jpg/960px-Desicated_coconut_soloA.jpg"),
        origin: "South India",
        grades: "Fine, medium & coarse; high/low fat",
        packaging: "10 / 25 kg bags",
      },
      {
        name: "Coconut Shell Products",
        image: farmCoconutShellProducts,
        origin: "Konkan region",
        grades: "Shell charcoal, coir & doormats",
        packaging: "Bulk & cartons",
      },
    ],
  },
  {
    title: "Natural & Processed Foods",
    slug: "natural-processed",
    blurb: "Traditional Indian pantry staples, made the old-fashioned way.",
    items: [
            {
        name: "Jaggery",
        image: jaggeryAsset,
        origin: "Kolhapur, Maharashtra (GI-tagged)",
        grades: "Yellow & golden; lumps and cubes",
        packaging: "1 / 5 / 30 kg boxes",
      },
      {
        name: "Jaggery Powder",
        image: jaggeryPowderAsset,
        origin: "Kolhapur, Maharashtra",
        grades: "Organic & regular; granular",
        packaging: "1 / 5 / 25 kg packs",
      },
      {
        name: "Honey",
        image: farmHoney,
        origin: "India (multifloral & forest)",
        grades: "Raw & filtered; multifloral, forest",
        packaging: "Jars & drums",
      },
      {
        name: "Fruit Pulp",
        image: wm("thumb/c/c3/Mango_pulp_juice.jpg/960px-Mango_pulp_juice.jpg"),
        origin: "Konkan, Maharashtra",
        grades: "Alphonso, Totapuri, Guava; aseptic",
        packaging: "3.1 kg & 215 kg aseptic drums",
      },
      {
        name: "Pickles",
        image: pickleAsset,
        origin: "Konkan, Maharashtra",
        grades: "Mango, mixed, lemon & chilli",
        packaging: "Jars & bulk tubs",
      },
    ],
  },
  {
    title: "Beverage & Concentrate Products",
    slug: "beverage-concentrate",
    blurb: "Konkan's signature kokum, in its natural and ready-to-use forms.",
    items: [
            {
        name: "Kokum",
        image: kokumAsset,
        origin: "Sindhudurga, Konkan, Maharashtra",
        grades: "Sun-dried whole & wet rind",
        packaging: "1 / 5 / 25 kg packs",
      },
      {
        name: "Kokum Agal",
        image: kokumAgarAsset,
        origin: "Sindhudurga, Konkan",
        grades: "Natural concentrate, no preservatives",
        packaging: "Bottles & bulk",
      },
      {
        name: "Kokum Syrup",
        image: farmKokumSyrup,
        origin: "Sindhudurga, Konkan",
        grades: "Ready-to-dilute; sweetened",
        packaging: "700 ml bottles & bulk",
      },
    ],
  },
  {
    title: "Kokum Butter & Lip Balm",
    slug: "kokum-butter-lip-balm",
    blurb: "Kokum butter and lip balm. Contact our team for product specifications and packaging options.",
    items: [
      {
        name: "Kokum Butter",
        image: farmKokumButter,
        origin: "On request",
        grades: "Specifications on request",
        packaging: "Packaging options on request",
      },
      {
        name: "Lip Balm",
        image: farmLipBalm,
        origin: "On request",
        grades: "Specifications on request",
        packaging: "Packaging options on request",
      },
    ],
  },
];





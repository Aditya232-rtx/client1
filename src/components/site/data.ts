import fruitsVeg from "@/assets/product-fruits-veg.jpg";
import spices from "@/assets/product-spices.jpg";
import dryfruits from "@/assets/product-dryfruits-cashew.jpg";
import kokum from "@/assets/product-kokum.jpg";
import dryfish from "@/assets/product-dryfish.jpg";
import coconut from "@/assets/product-coconut.jpg";
import rice from "@/assets/product-rice.jpg";
import mangoJack from "@/assets/product-mango-jackfruit.jpg";
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

// Detailed catalog grouped by category. Item images are real photos hosted on Wikimedia Commons.
export type CatalogItem = { name: string; image: string; note?: string };
export type CatalogCategory = {
  title: string;
  slug: string;
  blurb: string;
  items: CatalogItem[];
};

const wm = (p: string) => `https://upload.wikimedia.org/wikipedia/commons/${p}`;

import bajraAsset from "@/assets/catalog/bajra.jpeg";
import blackpepperAsset from "@/assets/catalog/blackpepper.jpeg";
import cornAsset from "@/assets/catalog/corn.jpeg";
import cuminAsset from "@/assets/catalog/cuminseeds.jpeg";
import indrayaniAsset from "@/assets/catalog/indrayanirice.jpeg";
import jaggeryAsset from "@/assets/catalog/jaggery.jpeg";
import jaggeryPowderAsset from "@/assets/catalog/jaggerypowder.jpeg";
import kernelsAsset from "@/assets/catalog/kernels.jpeg";
import kokumAgarAsset from "@/assets/catalog/kokum-agar.jpg";
import mangoAsset from "@/assets/catalog/mango.jpeg";
import kokumAsset from "@/assets/catalog/kokum.jpg";
import kokumSyrupAsset from "@/assets/catalog/kokumsyrup.jpeg";
import mosambiAsset from "@/assets/catalog/mosambi.jpeg";
import pickleAsset from "@/assets/catalog/pickle.jpeg";
import redchilliAsset from "@/assets/catalog/redchilli.png";

export const catalog: CatalogCategory[] = [
  {
    title: "Fresh Fruits",
    slug: "fresh-fruits",
    blurb: "Hand-picked seasonal fruits sourced from Maharashtra and across India, graded for export.",
    items: [
      { name: "Grapes", image: wm("thumb/5/53/Grapes%2C_Rostov-on-Don%2C_Russia.jpg/960px-Grapes%2C_Rostov-on-Don%2C_Russia.jpg"), note: "Thompson seedless, Sonaka, Sharad" },
      { name: "Alphonso Mango", image: mangoAsset, note: "Ratnagiri & Devgad GI" },
      { name: "Pomegranate", image: wm("thumb/6/6b/Pomegranate_fruit.jpg/960px-Pomegranate_fruit.jpg"), note: "Bhagwa variety" },
      { name: "Guava", image: wm("thumb/8/84/Goiaba_vermelha.jpg/960px-Goiaba_vermelha.jpg") },
      { name: "Sweet Lime (Mosambi)", image: mosambiAsset },
      { name: "Banana", image: wm("thumb/3/32/DFC_4184_Bunches_of_ripe_bananas_neatly_arranged_at_a_bustling_market_stall_ready_for_shoppers.jpg/960px-DFC_4184_Bunches_of_ripe_bananas_neatly_arranged_at_a_bustling_market_stall_ready_for_shoppers.jpg"), note: "Cavendish, Robusta" },
      { name: "Jackfruit", image: wm("3/3b/The_jackfruit_is_holding_on_to_the_tree.jpg") },
      { name: "Pineapple", image: wm("thumb/7/75/AnanasComosusOnPlant.jpg/960px-AnanasComosusOnPlant.jpg") },
    ],
  },
  {
    title: "Fresh Vegetables",
    slug: "fresh-vegetables",
    blurb: "Farm-fresh vegetables in export-grade packaging, cold-chain ready.",
    items: [
      { name: "Onion", image: wm("thumb/9/9f/Red_Onion_on_White.JPG/960px-Red_Onion_on_White.JPG"), note: "Nashik red, white & rose" },
      { name: "Tomato", image: wm("8/89/Tomato_je.jpg") },
      { name: "Garlic", image: wm("thumb/9/9a/Garlic_bulbs_and_cloves.jpg/960px-Garlic_bulbs_and_cloves.jpg") },
      { name: "Ginger", image: wm("thumb/f/fb/Fresh_ginger_rhizome_01.jpg/960px-Fresh_ginger_rhizome_01.jpg") },
      { name: "Green Chilli", image: wm("thumb/5/57/Green_Chili.jpg/960px-Green_Chili.jpg") },
      { name: "Lemon", image: wm("thumb/e/e4/Lemon.jpg/960px-Lemon.jpg") },
    ],
  },
  {
    title: "Rice & Grains",
    slug: "rice-grains",
    blurb: "Premium Indian rice and millets — sorted, polished and bulk-packed for B2B & export.",
    items: [
      { name: "Basmati Rice", image: wm("thumb/f/f8/Basmati_Rice_India%2C_raw.jpg/960px-Basmati_Rice_India%2C_raw.jpg") },
      { name: "Non-Basmati Rice", image: wm("0/0a/20201102.Hengnan.Hybrid_rice_Sanyou-1.6.jpg") },
      { name: "Sona Masoori Rice", image: wm("8/8a/Sona-masuri.jpg") },
      { name: "Kolam Rice", image: wm("d/d1/Reis_-_Sorte_C_voll.jpg") },
      { name: "Indrayani Rice", image: indrayaniAsset },
      { name: "Bajra (Pearl Millet)", image: bajraAsset },
      { name: "Maize (Corn)", image: cornAsset },
    ],
  },
  {
    title: "Nuts & Dry Fruits",
    slug: "nuts-dry-fruits",
    blurb: "High-grade cashew and dry fruits, hygienically processed and vacuum-packed.",
    items: [
      { name: "Cashew Nuts", image: wm("thumb/b/b9/CASHEW_NUTS.jpg/960px-CASHEW_NUTS.jpg") },
      { name: "Cashew Kernels", image: kernelsAsset, note: "W180, W210, W240, W320" },
      { name: "Groundnuts (Peanuts)", image: wm("thumb/f/fb/Peanuts_%28Arachis_hypogaea%29_-_in_shell%2C_shell_cracked_open%2C_shelled%2C_peeled.jpg/960px-Peanuts_%28Arachis_hypogaea%29_-_in_shell%2C_shell_cracked_open%2C_shelled%2C_peeled.jpg") },
      { name: "Raisins", image: wm("thumb/7/7d/Raisins_01.jpg/960px-Raisins_01.jpg") },
    ],
  },
  {
    title: "Spices & Seasonings",
    slug: "spices",
    blurb: "Whole and ground spices sourced directly from farms — pungent, fresh and aromatic.",
    items: [
      { name: "Turmeric", image: wm("thumb/f/f0/Turmeric_Powder_on_a_Spoon_-_Black_Background.jpg/960px-Turmeric_Powder_on_a_Spoon_-_Black_Background.jpg") },
      { name: "Red Chilli", image: redchilliAsset },
      { name: "Coriander Seeds", image: wm("thumb/8/86/Coriander_Seeds.jpg/960px-Coriander_Seeds.jpg") },
      { name: "Cumin Seeds", image: cuminAsset },
      { name: "Black Pepper", image: blackpepperAsset },
    ],
  },
  {
    title: "Coconut Products",
    slug: "coconut-products",
    blurb: "From the Konkan coast — fresh coconuts and value-added coconut derivatives.",
    items: [
      { name: "Fresh Coconut", image: wm("thumb/9/9c/Coconut_Fruit_%2899202%29.jpg/960px-Coconut_Fruit_%2899202%29.jpg") },
      { name: "Coconut Oil", image: wm("f/f3/Coconut_and_oil.jpg") },
      { name: "Desiccated Coconut", image: wm("thumb/6/67/Desicated_coconut_soloA.jpg/960px-Desicated_coconut_soloA.jpg") },
      { name: "Coconut Shell Products", image: wm("thumb/5/5c/Coir_doormat.jpg/960px-Coir_doormat.jpg") },
    ],
  },
  {
    title: "Natural & Processed Foods",
    slug: "natural-processed",
    blurb: "Traditional Indian pantry staples, made the old-fashioned way.",
    items: [
      { name: "Jaggery", image: jaggeryAsset },
      { name: "Jaggery Powder", image: jaggeryPowderAsset },
      { name: "Honey", image: wm("thumb/2/24/Three_French_monofloral_honey_jars.jpg/960px-Three_French_monofloral_honey_jars.jpg") },
      { name: "Fruit Pulp", image: wm("thumb/c/c3/Mango_pulp_juice.jpg/960px-Mango_pulp_juice.jpg") },
      { name: "Pickles", image: pickleAsset },
    ],
  },
  {
    title: "Beverage & Concentrate Products",
    slug: "beverage-concentrate",
    blurb: "Konkan's signature kokum, in its natural and ready-to-use forms.",
    items: [
      { name: "Kokum", image: kokumAsset },
      { name: "Kokum Agal", image: kokumAgarAsset },
      { name: "Kokum Syrup", image: kokumSyrupAsset },
    ],
  },
];





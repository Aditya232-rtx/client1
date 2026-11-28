import { catalog, type CatalogItem } from "@/components/site/data";

export const productSlug = (name: string) => {
  const aliases: Record<string, string> = {
    "Fruit Pulp": "alphonso-mango-pulp",
    "Cashew Kernels": "cashew-kernels",
    Kokum: "kokum",
  };
  return aliases[name] ?? name.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
};

export const productPath = (item: CatalogItem) => `/products/${productSlug(item.name)}`;

export const allCatalogProducts = catalog.flatMap((category) =>
  category.items.map((item) => ({ ...item, category: category.title, categorySlug: category.slug })),
);

export const findCatalogProduct = (slug: string) =>
  allCatalogProducts.find((item) => productSlug(item.name) === slug);

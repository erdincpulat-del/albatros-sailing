import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://albatrossailing.com";

  const routes = [
    "",
    "/programs",
    "/charter",
    "/contact",
    "/stories",
    "/verify",

    "/yelkenli-yat-egitim-ve-tatil",
    "/bodrum-yelken-egitimi",
    "/offshore-yelken-egitimi",
    "/konaklamali-yelken-egitimi",
    "/yat-kaptanligi-egitimi",
    "/yelkenli-yat-okulu",
    "/ege-denizi-yelken-rotalari",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.9,
  }));
}

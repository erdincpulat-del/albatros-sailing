import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://albatros-sailing.com.tr",
      lastModified: new Date(),
    },
    {
      url: "https://albatros-sailing.com.tr/programs",
      lastModified: new Date(),
    },
    {
      url: "https://albatros-sailing.com.tr/contact",
      lastModified: new Date(),
    },
    {
      url: "https://albatros-sailing.com.tr/verify",
      lastModified: new Date(),
    },
    {
      url: "https://albatros-sailing.com.tr/bodrum-yelken-egitimi",
      lastModified: new Date(),
    },
    {
      url: "https://albatros-sailing.com.tr/offshore-yelken-egitimi",
      lastModified: new Date(),
    },
    {
      url: "https://albatros-sailing.com.tr/konaklamali-yelken-egitimi",
      lastModified: new Date(),
    },
    {
      url: "https://albatros-sailing.com.tr/yat-kaptanligi-egitimi",
      lastModified: new Date(),
    },
    {
      url: "https://albatros-sailing.com.tr/yelkenli-yat-okulu",
      lastModified: new Date(),
    },
    {
      url: "https://albatros-sailing.com.tr/ege-denizi-yelken-rotalari",
      lastModified: new Date(),
    },
  ];
}
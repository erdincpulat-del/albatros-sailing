import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/admin/",
          "/api/",
          "/verify/",
        ],
      },
    ],

    sitemap: "https://albatros-sailing.com.tr/sitemap.xml",
  };
}

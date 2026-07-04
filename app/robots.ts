import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],

    sitemap: "https://vinodgowdag.com/sitemap.xml",

    host: "https://vinodgowdag.com",
  };
}
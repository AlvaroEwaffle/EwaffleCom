import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const routes = [
  "",
  "/about",
  "/services",
  "/case-studies",
  "/pricing",
  "/blog",
  "/book-a-call",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://e-waffle.com";

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}

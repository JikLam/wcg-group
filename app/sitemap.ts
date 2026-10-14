import type { MetadataRoute } from "next";
import { insights } from "./insights/insight-data";
import { services } from "./services/service-data";

const origin = "https://winchancegroup.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const updated = new Date("2026-10-14");
  const corePages = ["", "/about", "/services", "/direction", "/partners", "/insights"].map((path) => ({
    url: `${origin}${path}`,
    lastModified: updated,
    changeFrequency: path === "/insights" ? ("weekly" as const) : ("monthly" as const),
    priority: path === "" ? 1 : path === "/insights" ? 0.9 : 0.8,
  }));
  const servicePages = services.map((service) => ({
    url: `${origin}/services/${service.slug}`,
    lastModified: updated,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));
  const articlePages = insights.map((article) => ({
    url: `${origin}/insights/${article.slug}`,
    lastModified: new Date(article.published),
    changeFrequency: "monthly" as const,
    priority: 0.75,
  }));

  return [...corePages, ...servicePages, ...articlePages];
}

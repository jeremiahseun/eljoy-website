import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = "https://eljoy.tech";

    const routes = [
        "",
        "/about",
        "/contact",
        "/portfolio",
        "/services/web",
        "/services/mobile",
        "/services/ai",
    ];

    return routes.map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: route === "" ? 1 : 0.8,
    }));
}

import { MetadataRoute } from "next";
import { members } from "@/data/members";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://goofies-gang.vercel.app";
  
  const staticRoutes = [
    "",
    "/gallery",
    "/quotes",
    "/wall-of-shame",
    "/members",
    "/contact",
    "/privacy",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "daily" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  const memberRoutes = members.map((member) => ({
    url: `${baseUrl}/members/${member.id}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...memberRoutes];
}

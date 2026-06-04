import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://goofies-gang.vercel.app";
  
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/", "/admin/"], // Added /admin/ just in case
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}

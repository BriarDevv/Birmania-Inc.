import { siteUrl } from "../lib/seo";

export const prerender = true;

const pages = [
  { path: "/", priority: "1.0" },
  { path: "/productos/", priority: "0.8" },
];

export function GET() {
  const lastModified = new Date().toISOString();
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map(
    (page) => `  <url>
    <loc>${new URL(page.path, siteUrl).toString()}</loc>
    <lastmod>${lastModified}</lastmod>
    <priority>${page.priority}</priority>
  </url>`
  )
  .join("\n")}
</urlset>`;

  return new Response(body, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
}

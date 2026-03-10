export const siteUrl = "https://birmaniainc.com.ar";
export const siteName = "Birmania Inc";
export const siteLocale = "es_AR";
export const defaultSeoImage = "/images/Banner.webp";

export const businessContact = {
  email: "info@birmaniainc.com.ar",
  telephone: "+5491151084736",
  streetAddress: "Av. Rivadavia 4005",
  addressLocality: "CABA",
  addressRegion: "Buenos Aires",
  addressCountry: "AR",
};

export const toAbsoluteUrl = (path: string): string => {
  if (/^https?:\/\//i.test(path)) return path;
  return new URL(path, siteUrl).toString();
};

export const buildOrganizationSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteName,
  url: siteUrl,
  logo: toAbsoluteUrl("/images/Birmania-Logo.webp"),
  email: businessContact.email,
  telephone: businessContact.telephone,
  address: {
    "@type": "PostalAddress",
    streetAddress: businessContact.streetAddress,
    addressLocality: businessContact.addressLocality,
    addressRegion: businessContact.addressRegion,
    addressCountry: businessContact.addressCountry,
  },
});

export const buildWebPageSchema = ({
  name,
  description,
  path,
  image,
  pageType = "WebPage",
}: {
  name: string;
  description: string;
  path: string;
  image?: string;
  pageType?: string;
}) => ({
  "@context": "https://schema.org",
  "@type": pageType,
  name,
  description,
  url: toAbsoluteUrl(path),
  inLanguage: "es-AR",
  isPartOf: {
    "@type": "WebSite",
    name: siteName,
    url: siteUrl,
  },
  primaryImageOfPage: {
    "@type": "ImageObject",
    url: toAbsoluteUrl(image ?? defaultSeoImage),
  },
});

export const buildBreadcrumbSchema = (
  items: Array<{ name: string; path: string }>
) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: toAbsoluteUrl(item.path),
  })),
});

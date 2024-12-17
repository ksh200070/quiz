export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/private/",
    },
    sitemap: "https://quiz-steel-ten.vercel.app/sitemap.xml",
  };
}

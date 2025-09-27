/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://www.exonova.com.au",
  generateRobotsTxt: false,
  exclude: ["/admin/*", "/api/*"],
  generateIndexSitemap: false,
  outDir: "./public/sitemaps-au",
  additionalPaths: async (config) => [
    await config.transform(config, "/"),
    await config.transform(config, "/#problem"),
    await config.transform(config, "/#solution"),
    await config.transform(config, "/#impact"),
    await config.transform(config, "/#roadmap"),
    await config.transform(config, "/#contact"),
  ],
}

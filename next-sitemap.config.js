// next-sitemap.config.js
/** @type {import('next-sitemap').Config} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://omodajaecoovietnam.vn',
  // Tắt auto-generate vì sitemap.xml đã được handle bằng
  // pages/sitemap.xml.js (getServerSideProps - động từ DB)
  generateRobotsTxt: false,
  sitemapRootRoute: '/sitemap.xml',
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
      {
        userAgent: '*',
        disallow: [
          '/admin/',
          '/login',
          '/register',
          '/search/',
          '/api/',
        ],
      },
    ],
    sitemap: 'https://omodajaecoovietnam.vn/sitemap.xml',
  },
  exclude: [
    '/admin/**',
    '/login',
    '/register',
    '/search/**',
    '/api/**',
  ],
};

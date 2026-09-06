self.__BUILD_MANIFEST = {
  "/": [
    "static/chunks/pages/index.js"
  ],
  "/admin/dashboard": [
    "static/chunks/pages/admin/dashboard.js"
  ],
  "/admin/products": [
    "static/chunks/pages/admin/products.js"
  ],
  "/login": [
    "static/chunks/pages/login.js"
  ],
  "/news/[slug]": [
    "static/chunks/pages/news/[slug].js"
  ],
  "/price": [
    "static/chunks/pages/price.js"
  ],
  "/products/[slug]": [
    "static/chunks/pages/products/[slug].js"
  ],
  "/search/[slug]": [
    "static/chunks/pages/search/[slug].js"
  ],
  "__rewrites": {
    "afterFiles": [],
    "beforeFiles": [],
    "fallback": []
  },
  "sortedPages": [
    "/",
    "/_app",
    "/_error",
    "/admin/banner",
    "/admin/dashboard",
    "/admin/layout",
    "/admin/news",
    "/admin/products",
    "/login",
    "/news",
    "/news/[slug]",
    "/price",
    "/products/[slug]",
    "/register",
    "/search/[slug]",
    "/sitemap.xml"
  ]
};self.__BUILD_MANIFEST_CB && self.__BUILD_MANIFEST_CB()
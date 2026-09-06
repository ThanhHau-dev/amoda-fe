const DOMAIN = "https://omodajaecoovietnam.vn";
const BE_URL = process.env.NEXT_PUBLIC_BE_URL;

export async function getServerSideProps({ res }) {
  try {
    // 1. Fetch danh sách sản phẩm
    let products = [];
    try {
      const productRes = await fetch(`${BE_URL}/products?limit=1000`);
      const productData = await productRes.json();
      products = productData.products || [];
    } catch (e) {
      console.warn("Khong lay duoc danh sach products:", e.message);
    }

    // 2. Fetch danh sách tin tức
    let newsList = [];
    try {
      const newsRes = await fetch(`${BE_URL}/news?limit=1000`);
      const newsData = await newsRes.json();
      newsList = newsData.blogs || [];
    } catch (e) {
      console.warn("Khong lay duoc danh sach news:", e.message);
    }

    // 3. Các trang tĩnh
    const staticPages = [
      { path: "", priority: "1.0", changefreq: "daily" },
      { path: "news", priority: "0.8", changefreq: "daily" },
      { path: "price", priority: "0.9", changefreq: "weekly" },
    ];

    // 4. Tạo XML
    const staticUrls = staticPages
      .map(
        (page) => `
      <url>
        <loc>${DOMAIN}/${page.path}</loc>
        <changefreq>${page.changefreq}</changefreq>
        <priority>${page.priority}</priority>
      </url>`
      )
      .join("");

    const productUrls = products
      .map(
        (item) => `
      <url>
        <loc>${DOMAIN}/products/${item.slug}</loc>
        <lastmod>${item.updatedAt ? new Date(item.updatedAt).toISOString() : new Date().toISOString()}</lastmod>
        <changefreq>weekly</changefreq>
        <priority>0.7</priority>
      </url>`
      )
      .join("");

    const newsUrls = newsList
      .map(
        (item) => `
      <url>
        <loc>${DOMAIN}/news/${item.slug}</loc>
        <lastmod>${item.dateTime ? new Date(item.dateTime).toISOString() : new Date().toISOString()}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.6</priority>
      </url>`
      )
      .join("");

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  ${staticUrls}
  ${productUrls}
  ${newsUrls}
</urlset>`;

    // 5. Gửi XML về client
    res.setHeader("Content-Type", "text/xml");
    res.setHeader("Cache-Control", "s-maxage=3600, stale-while-revalidate");
    res.write(sitemap);
    res.end();

    return { props: {} };
  } catch (error) {
    console.error("Loi tao sitemap:", error);
    res.statusCode = 500;
    res.end();
    return { props: {} };
  }
}

export default function Sitemap() {
  // Khong render gì ca
  return null;
}

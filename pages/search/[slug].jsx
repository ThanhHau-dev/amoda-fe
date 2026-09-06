// SearchPage.js
import styles from "../../styles/search.module.css";
import ProductCard from "../../components/search/product_card";
import NewsCard from "../../components/search/new_card";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Head from "next/head";

const BE_URL = process.env.NEXT_PUBLIC_BE_URL;
const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

export default function SearchPage() {
  const router = useRouter();
  const { slug } = router.query;
  const [products, setProducts] = useState([]);
  const [newsList, setNews] = useState([]);

  useEffect(() => {
    try {
      fetch(`${BE_URL}/search `, {
        method: "POST",
        body: JSON.stringify({ q: slug }),
        headers: myHeaders,
      })
        .then((res) => {
          if (!res.ok) return;
          return res.json();
        })
        .then((res) => {
          if (res.products && res.news) {
            setProducts(res.products);
            setNews(res.news);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (err) {
      console.log(err);
    }
  }, [slug]);

  return (
    <>
      <Head>
        <title>Tìm kiếm "{slug}" | Omodajacoovietnam</title>
        <meta name="description" content={`Kết quả tìm kiếm cho "${slug}" - Tìm sản phẩm xe Omoda, Jaecoo và tin tức liên quan tại Omodajacoovietnam.`} />
        <meta property="og:title" content={`Tìm kiếm "${slug}" | Omodajacoovietnam`} />
        <meta property="og:description" content={`Kết quả tìm kiếm cho "${slug}" tại Omodajacoovietnam.`} />
        <meta property="og:url" content={`https://omodajaecoovietnam.vn/search/${slug}`} />
        <meta property="og:type" content="website" />
        <meta name="robots" content="noindex, nofollow" />
        <link rel="canonical" href={`https://omodajaecoovietnam.vn/search/${slug}`} />
      </Head>

    <div className={styles.search_container}>
      <nav className={styles.breadcrumb}>
        SẢN PHẨM / <strong>KẾT QUẢ TÌM KIẾM</strong>
      </nav>

      <section className={styles.section_wrapper}>
        <div className={styles.grid_layout}>
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>

      <section className={styles.section_wrapper}>
        <h2 className={styles.section_title}>BÀI VIẾT ĐÃ TÌM THẤY</h2>
        <div className={styles.grid_layout_news}>
          {newsList.map((n) => (
            <NewsCard key={n.id} news={n} />
          ))}
        </div>
      </section>
    </div>
    </>
  );
}

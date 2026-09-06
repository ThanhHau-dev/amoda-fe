import Image from "next/image";
import styles from "../../styles/news.module.css";
import { useRouter } from "next/navigation";
import AsideNews from "@/components/aside_news";
import Pagination from "@/components/pagination";
import PromotionBanner from "@/components/promotio_banner";
import { useEffect, useState } from "react";

const BE_URL = process.env.NEXT_PUBLIC_BE_URL;
const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

export default function ListNews() {
  const router = useRouter();
  const [listNews, setListNews] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const limit = 10; 

  const fetchNews = () => {
    fetch(`${BE_URL}/news?limit=${limit}`, {
      method: "GET",
      headers: myHeaders,
    })
      .then((res) => res.json())
      .then((res) => {
        setListNews(res.blogs);
        setTotalPages(res.totalPages || 1);
      });
  };

  useEffect(() => {
    fetchNews(currentPage);
  }, [currentPage]);

  return (
    <>
      <div className={styles.news_container}>
        <div className={styles.news_layout_grid}>
          <main className={styles.main_content_area}>
            {listNews.map((item) => (
              <article
                key={item._id}
                className={styles.news_card_item}
                onClick={() => router.push(`/news/${item.slug}`)}
              >
                <div className={styles.news_image_wrapper}>
                  <Image
                    width={1000}
                    height={1000}
                    src={item.imagesAvt}
                    alt={item.nameNews}
                    className="news_thumb"
                  />
                </div>
                <div className={styles.news_info_wrapper}>
                  <h2 className={styles.news_item_title}>{item.nameNews}</h2>
                  <div className={styles.news_divider}></div>
                  <p className={styles.news_item_excerpt}>{item.description}</p>
                </div>
              </article>
            ))}

            <Pagination
              current={currentPage}
              total={totalPages}
              onChange={(page) => setCurrentPage(page)}
            />
          </main>
          <AsideNews />
        </div>
      </div>
      <PromotionBanner />
    </>
  );
}

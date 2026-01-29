import { useRouter } from "next/router";
import styles from "../../styles/news.module.css";
import styles_image from "../../styles/ImageNext.module.css"
import styles_detail from "../../styles/news_deatail.module.css";
import AsideNews from "../../components/aside_news";
import Image from "next/image";
import { useEffect, useState } from "react";
import imageDefault from "../../public/image/default-placeholder.png";
const BE_URL = process.env.NEXT_PUBLIC_BE_URL;
const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

const mockdata = {
  dateTime: "",
  description: "",
  dtailDescription: "",
  imagesAvt: "",
  media: [],
  nameNews: "",
  slug: "",
  __v: 0,
  _id: "",
};

export default function NewsDetail() {
  const router = useRouter();
  const [currentNews, setCurrentNews] = useState(mockdata);
  const { slug } = router.query;

  const fecthNews = () => {
    fetch(`${BE_URL}/news/${slug} `, {
      method: "GET",
      headers: myHeaders,
    })
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setCurrentNews(res);
      });
  };

  useEffect(() => {
    if (slug != undefined) {
      fecthNews();
    }
  }, [slug]);

  return (
    <div className={styles.news_container}>
      <div className={styles.news_layout_grid}>
        <div className={styles_detail.container}>
          <article className={styles_detail.article_wrapper}>
            <header className={styles_detail.article_header}>
              <span className={styles_detail.category_tag}>TIN TỨC</span>
              <h1 className={styles_detail.article_title}>
                {currentNews.nameNews}
              </h1>
              <div className={styles_detail.divider}></div>
            </header>

            <section className={styles_detail.article_content}>
              <p>{currentNews.description}</p>
            </section>

            <div className={styles_image.image_container}>
              <Image
                src={currentNews.imagesAvt || imageDefault}
                alt="Tin tức"
                className={styles_image.custom_news_image}
                priority
                fill
              />
            </div>

            <div
              className={styles_detail.custom_description}
              dangerouslySetInnerHTML={{ __html: currentNews.dtailDescription }}
            ></div>
          </article>
        </div>
        <AsideNews />
      </div>
    </div>
  );
}

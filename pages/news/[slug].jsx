import { useRouter } from "next/router";
import styles from "../../styles/news.module.css";
import styles_detail from "../../styles/news_deatail.module.css"
import AsideNews from "../../components/aside_news";
import Image from "next/image";
export default function NewsDetail() {
  const router = useRouter();
  const { slug } = router.query;
  return (
    <div className={styles.news_container}>
      <div className={styles.news_layout_grid}>
        <div className={styles_detail.container}>
          <article className={styles_detail.article_wrapper}>
            <header className={styles_detail.article_header}>
              <span className={styles_detail.category_tag}>TIN TỨC</span>
              <h1 className={styles_detail.article_title}>
                Jaecoo J6 SUV điện off_road “hộp vuông” đầy công nghệ, giá dự
                kiến từ 899 triệu
              </h1>
              <div className={styles_detail.divider}></div>
            </header>

            <section className={styles_detail.article_content}>
              <p>
                Thị trường ô tô Việt Nam đang bước vào giai đoạn chuyển mình
                mạnh mẽ với sự xuất hiện của những mẫu{" "}
                <strong>SUV điện thông minh</strong>. Nổi bật trong số đó là{" "}
                <strong>Jaecoo J6</strong> – mẫu xe điện off_road mang thiết kế
                “hộp vuông” cá tính, kết hợp giữa phong cách retro và công nghệ
                hiện đại. Tin vui là
                <strong>
                  Jaecoo J6 đã chính thức có mặt tại Omoda & Jaecoo Bình Chánh
                </strong>
                , sẵn sàng cho khách hàng trải nghiệm trực tiếp.
              </p>
            </section>

            <div className={styles_detail.article_image_container}>
              <Image
                width={1000}
                height={1000}
                src="https://omodajaecoohcm.vn/wp-content/uploads/2025/08/z6949400997528_5c88d8a5d070922c1590c6f0210fc769-2048x2048.jpg"
                alt="Jaecoo J6 Event"
                className="main-image"
                loading="lazy"
              />
            </div>
          </article>
        </div>
        <AsideNews />
      </div>
    </div>
  );
}

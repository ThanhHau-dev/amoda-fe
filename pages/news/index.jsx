import Image from "next/image";
import styles from "../../styles/news.module.css";
import { useRouter } from "next/navigation";
import AsideNews from "@/components/aside_news";
import Pagination from "@/components/pagination";
import PromotionBanner from "@/components/promotio_banner";
const news_list = [
  {
    id: 1,
    title:
      "Lì Xì Đầu Xuân: Giá Lăn Bánh Omoda C5 & Jaecoo J7 Tháng 1/2026 – Ưu Đãi Lớn Nhất Năm",
    image: "https://omodajaecoohcm.vn/wp-content/uploads/2026/01/1.jpg",
    excerpt:
      "Chương trình ưu đãi đặc biệt dành cho khách hàng mua xe trong dịp đầu năm mới 2026...",
  },
  {
    id: 2,
    title:
      "Khám phá Jaecoo J5: Thiết kế, động cơ và lý do SUV B+ này đáng chờ nhất 2026",
    image: "https://omodajaecoohcm.vn/wp-content/uploads/2026/01/1.jpg",
    excerpt:
      "Jaecoo J5 hứa hẹn sẽ là đối thủ đáng gờm trong phân khúc SUV đô thị tại Việt Nam.",
  },
  {
    id: 3,
    title:
      "Giá lăn bánh Omoda C5 & Jaecoo J7 tháng 12/2025: Bảng giá mới nhất – Ưu đãi cực lớn cuối năm",
    image: "https://omodajaecoohcm.vn/wp-content/uploads/2026/01/1.jpg",
    excerpt:
      "Cập nhật chi tiết giá lăn bánh và các chương trình khuyến mãi cuối năm 2025.",
  },
];

export default function ListNews() {
  const router = useRouter();
  return (
    <>
      <div className={styles.news_container}>
        <div className={styles.news_layout_grid}>
          <main className={styles.main_content_area}>
            {news_list.map((item) => (
              <article
                key={item.id}
                className={styles.news_card_item}
                onClick={() => router.push(`/news/${item.id}`)}
              >
                <div className={styles.news_image_wrapper}>
                  <Image
                    width={1000}
                    height={1000}
                    src={item.image}
                    alt={item.title}
                    className="news_thumb"
                  />
                </div>
                <div className={styles.news_info_wrapper}>
                  <h2 className={styles.news_item_title}>{item.title}</h2>
                  <div className={styles.news_divider}></div>
                  <p className={styles.news_item_excerpt}>{item.excerpt}</p>
                </div>
              </article>
            ))}

            <Pagination />
          </main>

          <AsideNews />
        </div>
      </div>
      <PromotionBanner />
    </>
  );
}

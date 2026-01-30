import Link from "next/link";
import styles from "../styles/components/aside_news.module.css";
import { useEffect, useState } from "react";

const BE_URL = process.env.NEXT_PUBLIC_BE_URL;
const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

const sidebar_news = [
  "Lì Xì Đầu Xuân: Giá Lăn Bánh Omoda C5 & Jaecoo J7 Tháng 1/2026",
  "Khám phá Jaecoo J5: Thiết kế, động cơ và lý do SUV B+ này đáng chờ nhất 2026",
  "Giá lăn bánh Omoda C5 & Jaecoo J7 tháng 12/2025",
  "Omoda 4 Giá Bao Nhiêu? Lý Do Khi Xuất Hiện Tại Việt Nam Sẽ Gây Bão",
  "Omoda & Jaecoo Việt Nam Kỷ Niệm 1 Năm: Hành Trình Tri Ân",
];

export default function AsideNews() {
  const [listNews, setListNews] = useState([]);
  const fecthNews = () => {
    fetch(`${BE_URL}/news `, {
      method: "GET",
      headers: myHeaders,
    })
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setListNews(res.blogs);
      });
  };

  useEffect(() => {
    fecthNews();
  }, []);

  return (
    <aside className={styles.sidebar_area}>
      <h3 className={styles.sidebar_heading}>BÀI VIẾT MỚI</h3>
      <ul className={styles.sidebar_list}>
        {listNews.map((item, index) => (
          <li key={item._id} className={styles.sidebar_item}>
            <Link href={`/news/${item.slug}`} className={styles.sidebar_link}>
              {item.nameNews}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}

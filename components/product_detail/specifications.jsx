import Slider from "../../components/slider";
import styles from "../../styles/components/product_detail/specifications.module.css";

const mockData = {
  title: "OMODA C5",
  stat: [
    { num: "145", text: "Công suất, mã lực" },
    { num: "210", text: "Mô men xoắn, Nm" },
    { num: "9.9", text: "Tăng tốc lên 100 km/h, giây" },
    { num: "7.85", text: "Tiêu thụ nhiên liệu (l/100km)" },
  ],
  desc: "Lấy cảm hứng từ triết lý <strong>Art In Motion</strong>, OMODA C5 là sự hòa quyện táo bạo giữa ý tưởng, màu sắc và ngôn ngữ thiết kế độc đáo. Không chỉ dừng lại ở tính năng, mỗi đường nét của OMODA C5 đềumang giá trị thẩm mỹ vượt thời gian. Những chiếc xe được kiến tạo từ tư duy tiên phong này không chỉ quyến rũ về thị giác, mà còn khơi dậy cảm xúc khi chạm vào và mang đến những hành trình đầy cảm hứng.",
};

export default function Specifications({silder = [], data = mockData }) {
  return (
    <section>
      <Slider listString={silder} />
      <h4 className={styles.main_title}>{data.title}</h4>
      <div className={styles.stats_container}>
        {data.stat.map((item, index) => (
          <div key={index} className={styles.stat_box}>
            <span className={styles.stat_number}>{item.num}</span>
            <span className={styles.stat_label}>{item.text}</span>
          </div>
        ))}
      </div>

      <div className={styles.desc_section}>
        <p>
        {data.desc}
        </p>
      </div>
    </section>
  );
}

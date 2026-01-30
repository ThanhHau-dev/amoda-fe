import Slider from "../../components/slider";
import styles from "../../styles/components/product_detail/specifications.module.css";

const mockData = {
  title: "Tên sản phẩm",
  stat: [
    { num: "0", text: "Công suất, mã lực" },
    { num: "0", text: "Mô men xoắn, Nm" },
    { num: "0", text: "Tăng tốc lên 100 km/h, giây" },
    { num: "0", text: "Tiêu thụ nhiên liệu (l/100km)" },
  ],
  desc: "Mô tả ngắn về sản phẩm",
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

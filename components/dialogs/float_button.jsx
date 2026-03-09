import { FaFacebookF, FaPhone } from "react-icons/fa6";
import styles from "../../styles/components/dialogs/float_button.module.css";
import { SiZalo } from "react-icons/si";
export default function ContactFloats() {
  return (
    <div className={styles.wrapper}>
      <a
        href="https://www.facebook.com/people/%F0%9D%90%8E%F0%9D%90%A6%F0%9D%90%A8%F0%9D%90%9D%F0%9D%90%9A-%F0%9D%90%89%F0%9D%90%9A%F0%9D%90%9E%F0%9D%90%9C%F0%9D%90%A8%F0%9D%90%A8-%F0%9D%90%81%C3%AC%F0%9D%90%A7%F0%9D%90%A1-%F0%9D%90%83%C6%B0%C6%A1%F0%9D%90%A7%F0%9D%90%A0-%F0%9D%90%87%C3%A0%F0%9D%90%A8-%F0%9D%9F%8E%F0%9D%9F%97%F0%9D%9F%94%F0%9D%9F%92%F0%9D%9F%8E%F0%9D%9F%94%F0%9D%9F%8E%F0%9D%9F%8F%F0%9D%9F%93%F0%9D%9F%91/61574547544172/"
        target="_blank"
        className={`${styles.btn} ${styles.facebook}`}
      >
        <div className={styles.phoneRipple}> </div>
        <FaFacebookF />
      </a>

      <a
        href="https://zalo.me/+84908823626"
        target="_blank"
        className={`${styles.btn} ${styles.zalo}`}
      >
        <div className={styles.phoneRipple}></div>
        <SiZalo />
      </a>

      <a href="tel:+84908823626" className={`${styles.btn} ${styles.phone}`}>
        <div className={styles.phoneRipple}></div>
        <FaPhone />
      </a>
    </div>
  );
}

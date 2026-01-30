import { FaFacebookF, FaPhone } from "react-icons/fa6";
import styles from "../../styles/components/dialogs/float_button.module.css";
import { SiZalo } from "react-icons/si";
export default function ContactFloats() {
  return (
    <div className={styles.wrapper}>
      <a
        href="https://www.facebook.com/omodajaecoohcm"
        target="_blank"
        className={`${styles.btn} ${styles.facebook}`}
      >
        <div className={styles.phoneRipple}>  </div>
          <FaFacebookF />
      
      </a>

      <a
        href="https://zalo.me/0928788889"
        target="_blank"
        className={`${styles.btn} ${styles.zalo}`}
      >
         <div className={styles.phoneRipple}></div>
        <SiZalo />
      </a>

      <a href="tel:0928788889" className={`${styles.btn} ${styles.phone}`}>
        <div className={styles.phoneRipple}></div>
        <FaPhone />
      </a>
    </div>
  );
}

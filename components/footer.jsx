import styles from "../styles/components/footer.module.css";
import Link from "next/link"
import { FaFacebookF } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { FaPhone } from "react-icons/fa6";


const Footer = () => {
  return (
    <footer className={styles.footer_container}>
      <div className={styles.footer_content}>
        <div className={[styles.footer_column, styles.map_section]}>
          <h3 className={styles.column_title}>OMODA & JAECOO HỒ CHÍ MINH</h3>
          <div className={styles.map_wrapper}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3917.3509784474113!2d106.7098233!3d10.936838000000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3174d70041e4f2d7%3A0x9a4ffc79a430bbfc!2sOmoda%20%26%20Jaecoo%20Thu%E1%BA%ADn%20An!5e0!3m2!1svi!2s!4v1769964465821!5m2!1svi!2s"
              width="300"
              height="200"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        <div className={`${styles.footer_column}  ${styles.info_section}`}>
          <h3 className={styles.column_title}>HỖ TRỢ KHÁCH HÀNG</h3>
          <p>
            <strong>Hotline:</strong> <a href="tel:+84389122626">+84389122626</a>
          </p>
          <p>35/4B Đại lộ Bình Dương, Thuận Giao, Thuận An, Bình Dương</p>
          <p>
            <strong>Email:</strong>{" "}
            <a href="mailto:hoangsang24998@gmail.com">
              hoangsang24998@gmail.com 
            </a>
          </p>
        </div>

        <div className={[styles.footer_column, styles.follow_section]}>
          <h3 className={styles.column_title}>FOLLOW</h3>
          <div className={styles.social_icons}>
            <a href="https://www.facebook.com/people/%F0%9D%90%8E%F0%9D%90%A6%F0%9D%90%A8%F0%9D%90%9D%F0%9D%90%9A-%F0%9D%90%89%F0%9D%90%9A%F0%9D%90%9E%F0%9D%90%9C%F0%9D%90%A8%F0%9D%90%A8-%F0%9D%90%81%C3%AC%F0%9D%90%A7%F0%9D%90%A1-%F0%9D%90%83%C6%B0%C6%A1%F0%9D%90%A7%F0%9D%90%A0-%F0%9D%90%87%C3%A0%F0%9D%90%A8-%F0%9D%9F%8E%F0%9D%9F%97%F0%9D%9F%94%F0%9D%9F%92%F0%9D%9F%8E%F0%9D%9F%94%F0%9D%9F%8E%F0%9D%9F%8F%F0%9D%9F%93%F0%9D%9F%91/61574547544172/" className={styles.icon_circle}>
              <FaFacebookF/>
            </a>
            <a href="mailto:hoangsang24998@gmail.com" className={styles.icon_circle}>
              <CiMail/>
            </a>
            <a href="tel:+0389122626" className={styles.icon_circle}>
              <FaPhone/>
            </a>
          </div>
        </div>
      </div>

      <div className={styles.footer_bottom}>
        <div className={styles.bottom_left}>
          <div className={styles.footer_nav}>
            <Link href="/">TRANG CHỦ </Link>
            <a href="#">TRẢI NGHIỆM KHÁCH HÀNG</a>
            <a href="#">LIÊN HỆ</a>
          </div>
          <p className={styles.copyright}>Copyright 2026 © omodajaecoovietnam.vn</p>
        </div>
        <div className={styles.bottom_right}>
          <p>OMODA & JAECOO - TP HCM</p>
        </div>
      </div>
    </footer>
  )
};

export default Footer;

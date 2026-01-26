import styles from '../styles/components/promotion_banner.module.css';

const PromotionBanner = () => {
  return (
    <div className={styles.banner_container}>
      <div className={styles.banner_content}>
        <div className={styles.text_section}>
          <h1 className={styles.banner_title}>KHUYẾN MÃI & ƯU ĐÃI</h1>
          <p className={styles.banner_description}>
            Quà tặng dành cho khách hàng gửi yêu cầu báo giá Online.
          </p>
          <p className={styles.banner_note}>
            *Quý khách vui lòng liên hệ Hotline tư vấn để nhận thông tin khuyến mãi và ưu đãi chi tiết!
          </p>
        </div> 
        
        <div className={styles.action_section}>
          <a href="tel:0928788889" className={styles.hotline_button}>
            HOTLINE: 0928788889
          </a>
        </div>
      </div>
    </div>
  );
};

export default PromotionBanner;
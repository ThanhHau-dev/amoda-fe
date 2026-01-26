import { FaPhone } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import Image from "next/image";
import styles from "../styles/components/register_form.module.css";
export default function RegisterForm() {
  return (
    <>
      <div className={styles.test_drive_container}>
        <h1 className={styles.section_title}>LÁI THỬ XE & TRẢI NGHIỆM</h1>

        <div className={styles.hotline_wrapper}>
          <div className={styles.phone_icon}>
            <FaPhone />
          </div>
          <div className={styles.hotline_info}>
            <span className={styles.hotline_label}>Hotline</span>
            <a href="tel:0928788889" className={styles.otline_number}>
              0928788889
            </a>
          </div>
        </div>

        <ul className={styles.feature_list}>
          <li>
            Lái thử xe ô tô <strong>Omoda C5</strong> &
            <strong>Jaecoo J7</strong>
          </li>
          <li>Báo giá lăn bánh và ưu đãi mới nhất</li>
          <li>Hỗ trợ lái thử xe tận nhà</li>
        </ul>
      </div>
      <div className={styles.section_grid_container}>
        <div className={styles.promo_image_block}>
          <div className={styles.image_wrapper}>
            <Image
              width={1000}
              height={1000}
              src="https://omodajaecoohcm.vn/wp-content/uploads/2026/01/3.jpg"
              alt="Omoda C5"
              className={styles.main_img}
            />
            <div className={styles.promo_badge_overlay}>
              <div className={styles.badge_content}>
                <p className={styles.badge_title}>OMODA C5</p>
                <div className={styles.badge_details}>
                  <span>
                    Ưu đãi <strong>110%</strong> Lệ phí trước bạ
                  </span>
                  <span>
                    Lãi suất <strong>0 ĐỒNG</strong> trong 12 tháng
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.registration_form_block}>
          <h2 className={styles.form_heading}>LÁI THỬ XE & TRẢI NGHIỆM</h2>
          <form className={styles.booking_form_inner}>
            <div className={styles.input_field_group}>
              <span className={styles.field_icon}>
                <FaUser />
              </span>
              <input
                type="text"
                placeholder="Họ và tên" 
                className={styles.text_input}
              />
            </div>

            <div className={styles.input_field_group}>
              <span className={styles.field_icon}>
                <FaPhone />
              </span>
              <input
                type="tel"
                placeholder="Di động *"
                required
                className={styles.text_input}
              />
            </div>

            <div className={styles.input_field_group}>
              <span className={styles.field_icon}>
                <IoSearch />
              </span>
              <select className={styles.select_input}>
                <option value="">Chọn xe</option>
                <option value="omoda_c5">Omoda C5</option>
                <option value="jaecoo_j7">Jaecoo J7</option>
              </select>
            </div>

            <div className={styles.payment_options_group}>
              <label className={styles.radio_label}>
                <input
                  type="radio"
                  name="pay_method"
                  value="installment"
                  defaultChecked
                />
                <span className={styles.radio_text}>Trả góp</span>
              </label>
              <label className={styles.radio_label}>
                <input type="radio" name="pay_method" value="full" />
                <span className={styles.radio_text}>Trả thẳng</span>
              </label>
            </div>

            <button type="submit" className={styles.submit_btn_blue}>
              NHẬN THÔNG TIN
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

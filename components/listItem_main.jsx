import Image from 'next/image'
import styles from '@/styles/components/listItem_main.module.css'

const carData = [
  {
    id: 1,
    name: "OMODA C5",
    price: "479.100.000 VNĐ",
    promo: "(Giảm 50% - 110% LPTB trừ trực tiếp giá xe, lãi suất 0% trong 12 tháng, bảo dưỡng miễn phí 5 năm/50.000 KM).",
    note: "*Áp dụng có điều kiện",
    image: "https://omodajaecoohcm.vn/wp-content/uploads/2025/07/z6779652235349_134f539ebc8687f58ec90c6eafe415d6.jpg", 
    color: "red"
  },
  {
    id: 2,
    name: "JAECOO J7 PHEV FLAGSHIP",
    price: "879.000.000 VNĐ",
    promo: "(Giảm 50% - 110% LPTB trừ trực tiếp giá xe, lãi suất 0% trong 12 tháng, bảo dưỡng miễn phí 5 năm/50.000 KM).",
    note: "*Áp dụng có điều kiện",
    image: "https://omodajaecoohcm.vn/wp-content/uploads/2025/07/z6779652235349_134f539ebc8687f58ec90c6eafe415d6.jpg",
    color: "black"
  },
  {
    id: 3,
    name: "JAECOO J7 FLAGSHIP AWD",
    price: "819",
    promo: "(Giảm 50% - 110% LPTB trừ trực tiếp giá xe, lãi suất 0% trong 12 tháng, bảo dưỡng miễn phí 5 năm/50.000 KM).",
    note: "*Áp dụng có điều kiện",
    image: "https://omodajaecoohcm.vn/wp-content/uploads/2025/07/z6779652235349_134f539ebc8687f58ec90c6eafe415d6.jpg",
    color: "green"
  },
  {
    id: 4,
    name: "JAECOO J7 FLAGSHIP",
    price: "729",
    promo: "(Giảm 50% - 110% LPTB trừ trực tiếp giá xe, lãi suất 0% trong 12 tháng, bảo dưỡng miễn phí 5 năm/50.000 KM).",
    note: "*Áp dụng có điều kiện",
    image: "https://omodajaecoohcm.vn/wp-content/uploads/2025/07/z6779652235349_134f539ebc8687f58ec90c6eafe415d6.jpg",
    color: "white"
  }
];

function ListItem_Main() {
  return (
    <div className={styles.container_wrapper}>
      <h1 className={styles.main_title}>XE Ô TÔ OMODA & JAECOO</h1>
      <div className={styles.car_grid}>
        {carData.map((car) => (
          <div key={car.id} className={styles.car_card}>
            <div className={styles.card_header}>
              <h2 className={styles.car_name}>{car.name}</h2>
              <p className={styles.car_price}>
                GIÁ ƯU ĐÃI: <span>{car.price}</span>
              </p>
              <p className={styles.car_promo}>{car.promo}</p>
              {car.note && <p className={styles.car_note}>{car.note}</p>}
            </div>

            <div className={styles.card_image}>
              <Image src={car.image} alt={car.name} width={1000} height={1000}/>
            </div>

            <div className={styles.card_actions}>
              <a href="#" className={styles.btn_action}>ĐĂNG KÝ LÁI THỬ {'>'}</a>
              <a href="#" className={styles.btn_action}>MUA XE {'>'}</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ListItem_Main;
import Image from 'next/image'
import styles from '@/styles/components/listItem_main.module.css'
import { formatNumber } from "../utils/formartNumber";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

const mockData = [
   {
            "_id": "",
            "name": "Tên sản phẩm",
            "slug": "ten-san-pham",
            "price": null,
            "avatarImage": "",
            "galleryImages": [
            ],
            "detailBlocks": [
                {
                    "title": "Thông số kỹ thuật",
                    "title_2": "Chi tiết",
                    "description": "Mô tả chi tiết về sản phẩm.",
                    "images": [
                    ]
                }
            ],
            "createdAt": "2026-01-28T08:58:26.429Z",
            "updatedAt": "2026-01-28T08:58:26.429Z",
            "__v": 0
        }
];

function ListItem_Main({listData = mockData}) {
  const router = useRouter()
  const [list,setList] = useState(listData)
  
  useEffect(()=>{
    setList(listData)
  },[listData])
  return (
    <div className={styles.container_wrapper}>
      <h1 className={styles.main_title}>XE Ô TÔ OMODA & JAECOO</h1>
      <div className={styles.car_grid}>
        {list.map((car) => (
          <div key={car._id} className={styles.car_card}>
            <div className={styles.card_header}>
              <h2 className={styles.car_name} style={{cursor:"pointer"}} onClick={()=>router.push(`/products/${car.slug}`)}>{car.name}</h2>
              <p className={styles.car_price}>
                GIÁ ƯU ĐÃI: <span>{formatNumber(car.price) != "NaN" ? formatNumber(car.price) : car.price}</span>
              </p>
              
              {/* <p className={styles.car_promo}>{car.promo}</p>
              {car.note && <p className={styles.car_note}>{car.note}</p>} */}
            </div>

            <div className={styles.card_image}>
              <Image src={car.avatarImage} alt={car.name} width={1000} height={1000}/>
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
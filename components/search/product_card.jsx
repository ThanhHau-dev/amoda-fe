import styles from "../../styles/components/product_card.module.css";
import Image from "next/image";
import defaultImage from "../../public/image/default-placeholder.png";
import styles_image from "../../styles/ImageNext.module.css"
import { useRouter } from "next/navigation";
const mockData = {
  avatarImage: "",
  createdAt: "",
  detailBlocks: [],
  galleryImages: [],
  name: "",
  price: 0,
  slug: "",
  updatedAt: "",
  __v: 0,
  _id: "",
};
export default function ProductCard({ product = mockData }) {
  const router = useRouter()
  return (
    <div className={styles.product_card} onClick={()=>router.push(`/products/${product.slug}`)}>
      <div className={`${styles_image.image_container}`}>
        <Image
          src={product.avatarImage || defaultImage}
          alt={product.name || ""}
          className={`${styles_image.custom_news_image}`}
          priority
          fill
        />
      </div>
      <div className={styles.product_info}>
        <h3 className={styles.product_name}>{product.name}</h3>
        <div className={styles.price_wrapper}>
          <span className={styles.old_price}>{product.oldPrice || 0} VNĐ</span>
          <span className={styles.current_price}>{product.price} VNĐ</span>
        </div>
      </div>
    </div>
  );
}

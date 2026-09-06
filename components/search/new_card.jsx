import { useRouter } from 'next/navigation';
import styles from '../../styles/components/news_card.module.css';
import styles_image from "../../styles/ImageNext.module.css"
import Image from 'next/image';
import { decodeEntities } from "../../utils/decodeHtml";

const mockdata = {
  dateTime: "",
  description: "",
  dtailDescription: "",
  imagesAvt: "",
  media: [],
  nameNews: "",
  slug: "",
  __v: 0,
  _id: "",
};


export default function NewsCard({ news = mockdata }) {
   const router = useRouter()
  return (
   <div className={styles.news_card} onClick={()=>router.push(`/news/${news.slug}`)}>
     <div className={`${styles_image.image_container}`}>
            <Image
              src={news.imagesAvt || defaultImage}
              alt={news.nameNews || ""}
              className={`${styles_image.custom_news_image}`}
              priority
              fill
            />
          </div>
      
      <div className={styles.news_info}>
        <p className={styles.news_category}>{news.category || 'TIN TỨC'}</p>
        <h3 className={styles.news_title}>{decodeEntities(news.nameNews)}</h3>
      </div>
    </div>
  );
}
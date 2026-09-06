import PriceTable from "../../components/price/price_table";
import styles from "../../styles/price.module.css";
import PromotionBanner from "../../components/promotio_banner.jsx";
import Image from "next/image";
import Head from "next/head";
import bannerImgMain from "@/public/image/price-banner.jpg";
import bannerImgJ7 from "@/public/image/price-j7.jpg";
import bannerImgC5 from "@/public/image/price-c5.jpg";

const mockDataProgram = [
  {
    data: [
      {
        version: "Omoda C5 Luxury",
        price: "479.100.000",
        promo: "Hỗ trợ 110% LPTB",
        details: [
          "Miễn phí bảo dưỡng 5 năm / 50.000 Km",
          "LSƯĐ 0% trong 12 tháng",
        ],
      },
      {
        version: "Omoda C5 Premium",
        price: "558.558.000",
        promo: "Hỗ trợ 50% LPTB",
        details: ["Miễn phí bảo dưỡng 5 năm / 50.000 Km"],
      },
      {
        version: "Omoda C5 Flagship",
        price: "622.100.000",
        promo: "Hỗ trợ 100% LPTB",
        details: [],
      },
    ],
    title: "Chương trình ưu đãi Omoda C5",
    image: bannerImgC5,
  },
  {
    data: [
      {
        version: "Jaecoo J7 Flagship",
        price: "729.000.000",
        promo: "Hỗ trợ 90% LPTB",
        details: ["LSƯĐ 0% trong 12 tháng"],
      },
      {
        version: "Jaecoo J7 Flagship AWD",
        price: "819.000.000",
        promo: "Ưu đãi giảm 30 Triệu",
        details: [],
      },
      {
        version: "Jaecoo J7 PHEV Flagship",
        price: "879.000.000",
        promo: "Hỗ trợ 90% LPTB",
        details: ["LSƯĐ 0% trong 12 tháng", "BHTV 2 năm (*có điều kiện)"],
      },
    ],
    title: "Chương trình ưu đãi xe Jaecoo J7 ",
    image: bannerImgJ7,
  },
];

export default function Index() {
  return (
    <>
    <Head>
      <title>Bảng Giá Xe OMODA C5 & JAECOO J7 Mới Nhất 2026 | Omodajacoovietnam</title>
      <meta name="description" content="Bảng giá xe Omoda C5 và Jaecoo J7 mới nhất 2026. Giá lăn bánh, ưu đãi hấp dẫn, hỗ trợ lãi suất 0%. Liên hệ hotline 0389122626." />
      <meta property="og:title" content="Bảng Giá Xe OMODA C5 & JAECOO J7 Mới Nhất 2026" />
      <meta property="og:description" content="Cập nhật bảng giá xe Omoda C5 và Jaecoo J7 mới nhất. Hỗ trợ ưu đãi lên đến 110% LPTB, lãi suất 0% trong 12 tháng." />
      <meta property="og:url" content="https://omodajaecoovietnam.vn/price" />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="vi_VN" />
      <meta name="twitter:card" content="summary_large_image" />
      <link rel="canonical" href="https://omodajaecoovietnam.vn/price" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Bảng Giá Xe OMODA C5 & JAECOO J7 Mới Nhất 2026",
            description: "Bảng giá xe Omoda C5 và Jaecoo J7 mới nhất 2026 tại Omodajacoovietnam",
            url: "https://omodajaecoovietnam.vn/price",
            publisher: {
              "@type": "Organization",
              name: "Omodajacoovietnam",
              url: "https://omodajaecoovietnam.vn",
            },
          }),
        }}
      />
    </Head>

    <div className={styles.container}>
      <header className={styles.header}>
        <h1>BẢNG GIÁ XE THÁNG 1/2026</h1>
        <h2>OMODA C5 & JAECOO J7</h2>
      </header>

      <div className={styles.bannerContainer}>
        <Image
          src={bannerImgMain}
          alt="Promotion Banner"
          className={styles.banner}
          width="1200"
          height="1200"
        />
      </div>

      <main className={styles.mainContent}>
        {mockDataProgram.map((program, idx) => (
          <PriceTable key={idx} item={program} />
        ))}

        <div className={styles.noteSection}>
          <i>Lưu ý: Bảng giá có thể thay đổi theo từng thời điểm, Quý khách hàng vui lòng liên hệ Hotline: 0389122626 để nhận thông tin ưu đãi chi tiết và báo giá lăn bánh xe ô tô Omoda & Jaecoo mới nhất!</i>
        </div>
         
      </main>

    
    </div>
     <PromotionBanner/>
    </>
  );
}

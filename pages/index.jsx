"use client"
import Head from "next/head";
import ListItem_Main from "@/components/listItem_main";
import RegisterForm from "@/components/register_form";
import PromotionBanner from "@/components/promotio_banner";
import styles from "@/styles/index.module.css";
import { useEffect, useState } from "react";
import BannerSlider from "@/components/silder_banner";
import NewsSection from "@/components/news_section"

const BE_URL = process.env.NEXT_PUBLIC_BE_URL;
const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");


export default function Index() {
  const [listBanner, setListBanner] = useState([]); 
  const [listProduct, setListProduct] = useState([]);
  const fecthBanner = () => {
    fetch(`${BE_URL}/bannerHome `, {
      method: "GET",
      headers: myHeaders,
    })
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setListBanner(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const fecthProducts = () => {
    fetch(`${BE_URL}/products `, {
      method: "GET",
      headers: myHeaders,
    })
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setListProduct(res.products);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    try {
      Promise.all([fecthBanner(), fecthProducts()]).catch((err) => console.log(err))
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <>
      <Head>
        <title>Omodajacoovietnam - Phân Phối Ô Tô Omoda, Jaecoo Chính Hãng</title>
        <meta
          name="description"
          content="Omodajacoovietnam - Phân phối xe ô tô Omoda, Jaecoo chính hãng. Báo giá lăn bánh, ưu đãi hấp dẫn, giao xe nhanh chóng. Liên hệ ngay!"
        />
        <meta property="og:title" content="Omodajacoovietnam - Phân Phối Ô Tô Omoda, Jaecoo Chính Hãng" />
        <meta
          property="og:description"
          content="Omodajacoovietnam - Phân phối xe ô tô Omoda, Jaecoo chính hãng. Báo giá lăn bánh, ưu đãi hấp dẫn, giao xe nhanh chóng."
        />
        <meta property="og:url" content="https://omodajaecoovietnam.vn/" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="vi_VN" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://omodajaecoovietnam.vn/" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Omodajacoovietnam",
              url: "https://omodajaecoovietnam.vn",
              logo: "https://omodajaecoovietnam.vn/logo.png",
              description: "Phân phối xe ô tô Omoda, Jaecoo chính hãng",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+84-908-823-626",
                contactType: "sales",
              },
              sameAs: [
                "https://www.facebook.com/people/%F0%9D%90%8E%F0%9D%90%A6%F0%9D%90%A8%F0%9D%90%9D%F0%9D%90%9A-%F0%9D%90%89%F0%9D%90%9A%F0%9D%90%9E%F0%9D%90%9C%F0%9D%90%A8%F0%9D%90%A8/61574547544172/",
              ],
            }),
          }}
        />
      </Head>

      <BannerSlider data={listBanner} />
      <div className={styles.content_main}>
        <ListItem_Main listData={listProduct} />
        <RegisterForm />
      </div> 
      <NewsSection/>
      <PromotionBanner />
    </>
  );
}

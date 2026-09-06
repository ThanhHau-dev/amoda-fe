// pages/_document.js
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="vi" >
      <Head>
        <meta charSet="UTF-8" />
        <meta
          name="description"
          content="Mẫu xe ô tô Omoda  hoàn toàn mới, sự kết hợp tinh hoa giữa công nghệ tối tân và thiết kế sang trọng."
        />
        <meta name="keywords" content="omodajaecoo" />

        <meta name="author" content="omodajaecoo" />

        <link
          href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
          rel="stylesheet"
        />

        {/* Open Graph toàn cục - fallback cho các trang */}
        <meta property="og:site_name" content="Omodajacoovietnam" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="vi_VN" />

        {/* Twitter Card toàn cục */}
        <meta name="twitter:site" content="@omodajaecoo" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />


        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />

        <script
          src="https://unpkg.com/boxicons@2.1.4/dist/boxicons.js"
          defer
        ></script>
        <script src="https://unpkg.com/scrollreveal" defer></script>
      </Head>
      <body suppressHydrationWarning={true}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

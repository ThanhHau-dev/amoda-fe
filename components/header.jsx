"use client";
import styles from "../styles/components/header.module.css";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useEffect, useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import logoImg from "../public/image/logo-h.png";
import Image from "next/image";

const BE_URL = process.env.NEXT_PUBLIC_BE_URL;
const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

const STATIC_MENU = [
  { title: "BẢNG GIÁ", path: `/price` },
  { title: "ĐĂNG KÝ LÁI THỬ", path: `/register` },
  { title: "TIN TỨC", path: `/news` },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [brandGroups, setBrandGroups] = useState({ jaecoo: [], omoda: [] });
  const [openDropdown, setOpenDropdown] = useState(null);
  const [search_text, setSearch_text] = useState("");
  const pathname = usePathname();
  const router = useRouter();

  const fetchProducts = async () => {
    try {
      const response = await fetch(`${BE_URL}/products`, {
        method: "GET",
        headers: myHeaders,
      });
      const res = await response.json();
      if (res.products && res.products.length > 0) {
        const jaecoo = [];
        const omoda = [];
        res.products.forEach((item) => {
          if (!item.name || !item.slug) return;
          const name = String(item.name).toLowerCase();
          const link = { title: item.name, path: `/products/${item.slug}` };
          if (name.includes("jaecoo")) jaecoo.push(link);
          else if (name.includes("omoda")) omoda.push(link);
        });
        setBrandGroups({ jaecoo, omoda });
      }
    } catch (error) {
      console.error("Lỗi khi fetch sản phẩm:", error);
    }
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    fetchProducts();
  }, []);

  const renderDropdown = (brandKey, label) => {
    const items = brandGroups[brandKey];
    if (!items || items.length === 0) return null;
    const isOpen = openDropdown === brandKey;
    const hasActiveChild = items.some(
      (item) => pathname && item.path && pathname.includes(item.path),
    );

    return (
      <div
        key={brandKey}
        className={`${styles.dropdown} ${isOpen ? styles.dropdown_open : ""}`}
        onMouseEnter={() => setOpenDropdown(brandKey)}
        onMouseLeave={() => setOpenDropdown(null)}
      >
        <button
          type="button"
          className={`${styles.nav_item} ${styles.dropdown_trigger} ${
            hasActiveChild ? styles.active : ""
          }`}
          onClick={() => setOpenDropdown(isOpen ? null : brandKey)}
        >
          {label}
          <span className={styles.caret}>▾</span>
        </button>
        <div className={styles.dropdown_menu}>
          {items.map((item, index) => (
            <Link
              key={index}
              href={item.path}
              onClick={() => {
                setIsMenuOpen(false);
                setOpenDropdown(null);
              }}
              className={`${styles.dropdown_item} ${
                pathname && item.path && pathname.includes(item.path)
                  ? styles.active
                  : ""
              }`}
            >
              {item.title}
            </Link>
          ))}
        </div>
      </div>
    );
  };

  return (
    <header className={styles.custom_header}>
      <div className={styles.header_container}>
        <div
          className={styles.logo_section}
          onClick={() => router.replace("/")}
        >
          <Image
            src={logoImg.src}
            alt="Amoda Logo"
            className={styles.logo_image}
            width={250}
            height={20}
          />
        </div>

        <nav
          className={`${styles.nav_menu} ${isMenuOpen ? styles.nav_active : ""}`}
        >
          {renderDropdown("jaecoo", "JAECOO")}
          {renderDropdown("omoda", "OMODA")}
          {STATIC_MENU.map((value, index) => (
            <Link
              key={`static-${index}`}
              href={value.path}
              onClick={() => setIsMenuOpen(false)}
              className={`${styles.nav_item} ${pathname && value.path && pathname.includes(value.path) ? styles.active : ""}`}
            >
              {value.title.toUpperCase()}
            </Link>
          ))}

          <form
            onSubmit={(e) => {
              e.preventDefault();
              setIsMenuOpen(false);
              router.push(`/search/${search_text}`);
            }}
          >
            <search className={styles.search}>
              <input
                type="search"
                id="site-search"
                className={styles.inputSearch}
                name="q"
                placeholder="Tìm kiếm..."
                aria-label="Search through site content"
                value={search_text}
                onChange={(e) => setSearch_text(e.target.value)}
              />
              <button type="submit" className={styles.buttonSubmit}>Tìm kiếm</button>
            </search>
          </form>
        </nav>

        <div className={styles.section_header_left}>
          <div
            className={styles.mobile_toggle}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div
              className={`${styles.bar} ${isMenuOpen ? styles.bar_top_active : ""}`}
            ></div>
            <div
              className={`${styles.bar} ${isMenuOpen ? styles.bar_mid_active : ""}`}
            ></div>
            <div
              className={`${styles.bar} ${isMenuOpen ? styles.bar_bot_active : ""}`}
            ></div>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              router.push(`/search/${search_text}`);
            }}
          >
            <div className={styles.search_wrapper}>
              <div className={styles.search_container}>
                <input
                  type="text"
                  className={styles.search_input}
                  placeholder="Tìm kiếm..."
                  value={search_text}
                  onChange={(e) => setSearch_text(e.target.value)}
                />
                <button className={styles.icon_box} type="submit">
                  <IoSearchOutline size={22} className={styles.search_icon} />
                </button>

                <button type="submit" style={{ display: "none" }}></button>
              </div> 
            </div>
          </form>
        </div>
      </div>
    </header>
  );
};

export default Header;

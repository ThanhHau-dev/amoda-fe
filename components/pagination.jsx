
import styles from "../styles/components/pagination.module.css";
export default function Pagination({ current, total, onChange }) {
  const getPages = () => {
    const pages = [];
    for (let i = 1; i <= total; i++) {
      if (i === 1 || i === total || (i >= current - 1 && i <= current + 1)) {
        pages.push(i);
      } else if (pages[pages.length - 1] !== "...") {
        pages.push("...");
      }
    }
    return pages;
  };

  return (
    <div className={styles.pagination_wrapper}>
      <div className={styles.pagination_container}>
        {/* Nút Back */}
        <button
          className={styles.page_next}
          style={{ transform: "rotate(180deg)" }}
          disabled={current === 1}
          onClick={() => onChange(current - 1)}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>

        {getPages().map((page, index) =>
          page === "..." ? (
            <span key={index} className={styles.page_dots}>
              ...
            </span>
          ) : (
            <button
              key={index}
              onClick={() => onChange(page)}
              className={`${styles.page_number} ${current === page ? styles.active : ""}`}
            >
              {page}
            </button>
          ),
        )}
        <button
          className={styles.page_next}
          disabled={current === total}
          onClick={() => onChange(current + 1)}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      </div>
    </div>
  );
}

import styles from "../styles/components/pagination.module.css";

const data = { total: 30, limit: 10, current: 0 };
export default function Pagination() {
  return (
    <div className={styles.pagination_wrapper}>
      <div className={styles.pagination_container}>
        <button className={`${styles.page_number} ${styles.active}`}>1</button>

        <button className={styles.page_number}>2</button>

        <span className={styles.page_dots}>...</span> 

        <button className={styles.page_number}>7</button>

        <button className={styles.page_next}>
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

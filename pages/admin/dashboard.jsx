import AdminLayout from "./layout";
import styles from "../../styles/admin/dashboard.module.css";
export default function Dashboard() {
  return <div className={styles.container}>
    <h1>Comming soon</h1>
    
    </div>;
}

Dashboard.getLayout = function getLayout(page) {
  return <AdminLayout>{page}</AdminLayout>;
};

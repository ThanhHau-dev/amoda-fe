import RegisterForm from "@/components/register_form";
import styles from "@/styles/index.module.css";
import PromotionBanner from "@/components/promotio_banner";
export default function Index() {
  return (
    <>
      <div className={styles.content_main}>
        <RegisterForm />
      </div>
      <PromotionBanner />
    </>
  );
}

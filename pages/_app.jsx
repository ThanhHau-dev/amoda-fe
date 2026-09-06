// import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/globals.css";
// import 'boxicons/css/boxicons.min.css';
import MainLayout from "../layouts/mainLayout";
import { ToastContainer } from "react-toastify";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { recordAction, recordPageView } from "../utils/tracker";

export default function App({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    recordPageView(window.location.pathname + window.location.search);

    const onRouteChange = () => {
      recordPageView(window.location.pathname + window.location.search);
    };
    const onClick = () => {
      recordAction(window.location.pathname + window.location.search);
    };

    router.events.on("routeChangeComplete", onRouteChange);
    document.addEventListener("click", onClick);

    return () => {
      router.events.off("routeChangeComplete", onRouteChange);
      document.removeEventListener("click", onClick);
    };
  }, [router]);

  useEffect(() => {
    import("../utils/bootstrap");
  }, []);
  const getLayout = Component.getLayout || ((page) => page);
  return (
    <MainLayout suppressHydrationWarning={true}>
      {getLayout(<Component {...pageProps} />)}
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </MainLayout>
  );
}

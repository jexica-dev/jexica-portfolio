import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import { useEffect, useState } from "react";
// import LoadingScreen from "../components/LoadingScreen/LoadingScreen";

export default function MyApp({ Component, pageProps }) {
  // const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   setTimeout(() => setLoading(true), 1000);
  // }, []);

  return (
    <>
      <Component {...pageProps} />
      {/* {!loading ? <Component {...pageProps} /> : <LoadingScreen />} */}
    </>
  );
}

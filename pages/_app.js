import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import { useEffect, useState } from "react";

// import LoadingScreen from "../components/LoadingScreen/LoadingScreen";

export default function MyApp({ Component, pageProps }) {
  // const lgScreen = useMediaQuery({
  //   query: "(min-width: 1024px)",
  // });
  // const mdScreen = useMediaQuery({ query: "(min-width: 768px)" });
  // const smScreen = useMediaQuery({ query: "(min-width: 640px)" });

  return (
    <>
      <Component {...pageProps} />
    </>
  );
}

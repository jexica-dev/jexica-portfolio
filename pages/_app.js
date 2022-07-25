import "../styles/globals.css";
import "tailwindcss/tailwind.css";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} className="custom-cursor" />;
}

export default MyApp;

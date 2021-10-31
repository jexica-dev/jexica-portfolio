// ourdomain.com
import Layout from "../components/layout/Layout.js";
import Image from "next/image";
import Homebutton from "../components/homebutton/homebutton.js";
import ThreejsModel from "../components/ThreejsModel";
import styles from "../styles/Home.module.css";
import Marquee from "react-fast-marquee";
import About from "../components/About/About.js";

function HomePage() {
  return (
    <>
      <div className="bg-black w-full">
      <ThreejsModel id="root" />
      <div className={styles.flexcontainer}>
      <Marquee
          className={styles.marquee}
          pauseOnHover="true"
          direction="right"
          speed="50"
          gradientColor="[0,0,0]"
        >
          <p> jexica.ayran@gmail.com +&nbsp;</p>
          <p> designer +&nbsp;</p>
          <p> front web dev +&nbsp;</p>
          <p> creative coding +&nbsp;</p>
          <p> based in brooklyn, nyc. +&nbsp;</p>
        </Marquee>
        <div className={[styles.homelogo + ' mb-12']}>
          <Image
            className={styles.homelogo}
            src="/jexica-logo.png"
            width={700}
            height={250}
            alt="jexica"
          />
        </div>
        <div className={[styles.homebutton + ' -mb-6']}>
          <Homebutton />
        </div>
        <div className="my-20 z-10 w-full flex flex-col place-items-center">
          <About />
        </div>
        </div>
        </div>
    </>
  );
}

export default HomePage;

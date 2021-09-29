// ourdomain.com
import Layout from "../components/layout/Layout.js";
import Image from "next/image";
import Homebutton from "../components/homebutton/homebutton.js";
import ThreejsModel from "../components/ThreejsModel";
import styles from "../styles/Home.module.css";
import Marquee from "react-fast-marquee";

function HomePage() {
  return (
    <>
      <Layout>
        <div className={styles.flexcontainer}> 
        <ThreejsModel id="root" />
        <div
          className={styles.homelogo}
          style={{ position: "fixed", zindex: "100" }}
        >
          <Image className={styles.homelogo}
            src="/jexica-logo.png"
            width={750}
            height={350}
            alt="jexica"
            className="logo-img"
            />
            
          </div>
          <Homebutton className={styles.homelogo} />
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

        </div>
      </Layout>
    </>
  );
}

export default HomePage;

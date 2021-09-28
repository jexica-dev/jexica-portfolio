// ourdomain.com
import Layout from "../components/layout/Layout.js";
import Image from "next/image";
import ReactDOM from "react-dom";
import ThreejsModel from "../components/ThreejsModel";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import { useState } from "react";


function HomePage() {
  const [hover, setHover] = useState(false);

  return (
    <>
      <Layout>
        <ThreejsModel id="root" />
        <div className={styles.homelogo} style={{ position: "fixed", zindex: "100" }}>
          <Image
            src="/jexica-logo.png"
            width={750}
            height={350}
            alt="jexica"
            className="logo-img"
          />
          
          <Link href="/work" passHref>
          <div className={styles.workbutton}>
            work 
            </div>
            </Link>
          
        </div>
      </Layout>
    </>
  );
}

export default HomePage;

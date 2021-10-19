import { Component } from "react";
import Link from "next/dist/client/link";
import styles from "../navbar/Navbar.module.css";
import Media from "react-media";
import { useState } from "react";

function Navbar(props) {
  const [isOpen, setOpen] = useState(false);

  return (
    <Media queries={{ mobile: { maxWidth: 800 } }}>
      {(matches) => {
        return !matches.mobile ? (
          <>
            <div className="w-full align-center bg-white fixed top-0 z-30">
              <div
                className={[
                  "w-3/4 text-right mt-10 bg-white " +
                    styles.navcontainer,
                ]}
              >
                <div
                  className={["flex-1 mb-2 mt-8 text-right " + styles.navname]}
                >
                  <Link href="/"> jexica ayran </Link>
                </div>
                <div className={[styles.nav + " flex-1"]}>
                  <Link href="mailto:jexica.ayran@gmail.com"> Email</Link>
                </div>
                <div className={[styles.nav + " flex-1"]}>
                  <Link href="https://www.linkedin.com/in/jexica/">
                    Linkedin
                  </Link>
                </div>
                <div className={[styles.nav + " flex-1 mb-8"]}>
                  <Link href="https://github.com/xicaz"> Github</Link>
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
          <div className="w-full align-center">
            <div className="w-3/4 h-1/4 text-right mt-10 -mb-40">
              <div className={[styles.navname + " flex-1 mb-8 w-1/5"]}>
                <Link href="/"> jexica ayran </Link>
              </div>
              <div className={[styles.nav + " flex-1 text-xl"]}>
                <Link href="mailto:jexica.ayran@gmail.com"> Email</Link>
              </div>
              <div className={[styles.nav + " flex-1 text-xl"]}>
                <Link href="https://www.linkedin.com/in/jexica/">
                  Linkedin
                </Link>
              </div>
              <div className={[styles.nav + " flex-1 text-xl mb-8"]}>
                <Link href="https://github.com/xicaz"> Github</Link>
              </div>
            </div>
          </div>
        </>
        )
      }}
    </Media>
  );
}

export default Navbar;

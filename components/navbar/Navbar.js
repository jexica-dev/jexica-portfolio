// import { Component } from "react";
import Link from "next/dist/client/link";
import styles from "./Navbar.module.css";
// import Media from "react-media";
import { useState } from "react";

function SafeHydrate({ children }) {
  return (
    <div suppressHydrationWarning>
      {typeof window === "undefined" ? null : children}
    </div>
  );
}

function Navbar(props) {
  // const [isOpen, setOpen] = useState(false);

  const arrow = "→  ";
  const portfolio = "portfolio";
  const about = "about";

  return (
    <SafeHydrate>
      <div className="">
        <div className=" z-50 fixed nav-body flex justify-around grid-cols-5 tracking-wider bg-gradient-to-r from-white to-transparent whitespace-nowrap py-3 pr-14 text-black w-full">
          <div className="">
            <span>{arrow} &nbsp;</span>
            <Link className="" href="/">
              About
            </Link>
          </div>
          <div>
            <span>&nbsp;&nbsp; {arrow} &nbsp;</span>
            <Link className="" href="mailto:jexica.ayran@gmail.com">
              Email
            </Link>
          </div>
          <div className="">
            <span>{arrow} &nbsp;</span>
            <Link className="" href="/JexicaAyran-Resume.pdf">
              <a target="_blank">Resume</a>
            </Link>
          </div>
          <div className="">
            <span>{arrow} &nbsp;</span>
            <Link className="" href="https://www.linkedin.com/in/jexica/">
              Linkedin
            </Link>
          </div>
          <div className="">
            <span>{arrow} &nbsp;</span>

            <Link className="" href="https://github.com/xicaz">
              Github
            </Link>
          </div>
        </div>
      </div>
    </SafeHydrate>
  );
}

export default Navbar;

{
  /* <Media queries={{ mobile: { maxWidth: 800 } }}>
{(matches) => {
  return !matches.mobile ? (
    <>
      <div className="w-full align-center bg-white fixed top-0 z-30    ">
        <div
          className={[
            "w-3/4 text-right mt-10 bg-white " + styles.navcontainer,
          ]}
        >
          <div
            className={[
              "flex-1 mb-2 mt-8 text-right " + styles.navname,
            ]}
          >
            <Link href="/"> jexica ayran </Link>
          </div>
          <div className={[styles.nav + " flex-1"]}>
            <a href="mailto:jexica.ayran@gmail.com">
              Email
              </a>
          </div>
          <div className={[styles.nav + " flex-1"]}>
            <Link href="/JexicaAyran-Resume.pdf">
            <a target="_blank">Resume</a>
              </Link>
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
        <div className="w-3/4  h-1/4 text-right mt-10 -mb-40">
          <div className={[styles.navname + " flex-1 mb-8 w-1/5"]}>
            <Link href="/"> jexica ayran </Link>
            </div>
            <div className={[styles.nav + " flex-1"]}>
            <Link href="https://drive.google.com/file/d/19hRYugyFSHhpVsmK6bJHbsLm_WvLk1U1/view">
            <a target="_blank">Resume</a>
              </Link>
          </div>
          <div className={[styles.nav + " flex-1 text-lg"]}>
            <Link href="mailto:jexica.ayran@gmail.com"> Email</Link>
          </div>
          <div className={[styles.nav + " flex-1 text-lg"]}>
            <Link href="https://www.linkedin.com/in/jexica/">
              Linkedin
            </Link>
          </div>
          <div className={[styles.nav + " flex-1 text-lg mb-8"]}>
            <Link href="https://github.com/xicaz"> Github</Link>
          </div>
        </div>
      </div>
    </>
  );
}}
</Media> */
}

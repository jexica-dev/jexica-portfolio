// import { Component } from "react";
import Link from "next/dist/client/link";
// import styles from "./Navbar.module.css";
import Media from "react-media";
import { useState } from "react";
import { Squeeze as Hamburger } from "hamburger-react";

function SafeHydrate({ children }) {
  return (
    <div suppressHydrationWarning>
      {typeof window === "undefined" ? null : children}
    </div>
  );
}

function Navbar(props) {
  const [navOpen, setNavOpen] = useState(false);

  const arrow = "→  ";
  const arrowColor = "text-red-600 ";
  const navBgColor = "bg-yellow-300 font-whytemono ";

  const handleToggle = () => {
    setNavOpen(!navOpen);
  };
  return (
    <SafeHydrate>
      <Media queries={{ mobile: { maxWidth: 768 } }}>
        {(matches) => {
          return matches.mobile ? (
            <>
              <div
                style={navOpen ? { color: "black" } : { color: "green" }}
                className=" fixed z-50 top-0 flex flex-col w-full justify-around pt-3 "
              >
                <button
                  onClick={handleToggle}
                  className="bg-transparent relative flex justify-around"
                >
                  <Hamburger
                    color="black"
                    toggled={navOpen}
                    toggle={setNavOpen}
                  />
                </button>

                <ul
                  style={
                    !navOpen
                      ? { display: "none" }
                      : { display: "", fontSize: "10vw" }
                  }
                  className={
                    !navOpen
                      ? "hide"
                      : " flex flex-col text-left justify-center text-black  "
                  }
                >
                  <li>
                    <span className={arrowColor}>
                      &nbsp;&nbsp; {arrow} &nbsp;
                    </span>
                    <span className={navBgColor}>
                      <Link href="/">&nbsp;About&nbsp;</Link>
                    </span>
                    {/* <span>&nbsp;&nbsp; &nbsp;&nbsp;</span> */}
                  </li>
                  <li>
                    <span className={arrowColor}>
                      &nbsp;&nbsp; {arrow} &nbsp;
                    </span>
                    <span className={navBgColor}>
                      <Link href="/work">&nbsp;Portfolio&nbsp;</Link>
                    </span>
                    {/* <span>&nbsp;&nbsp; &nbsp;&nbsp;</span> */}
                  </li>
                  <li>
                    <span className={arrowColor}>
                      &nbsp;&nbsp; {arrow} &nbsp;
                    </span>
                    <span className={navBgColor}>
                      <Link className="" href="mailto:jexica.ayran@gmail.com">
                        &nbsp;Email&nbsp;
                      </Link>
                    </span>
                  </li>
                  <li>
                    <span className={arrowColor}>
                      &nbsp;&nbsp; {arrow} &nbsp;
                    </span>
                    <span className={navBgColor}>
                      <Link
                        className=""
                        href="https://www.linkedin.com/in/jexica/"
                      >
                        &nbsp;LinkedIn&nbsp;
                      </Link>
                    </span>
                  </li>
                  <li>
                    <span className={arrowColor}>
                      &nbsp;&nbsp; {arrow} &nbsp;
                    </span>
                    <span className={navBgColor}>
                      <Link
                        className=""
                        href="/JexicaAyran-Resume.pdf"
                        passHref
                      >
                        <a target="_blank">&nbsp;Resume&nbsp;</a>
                      </Link>
                    </span>
                    <span>&nbsp;&nbsp; &nbsp;&nbsp;</span>
                  </li>
                </ul>
              </div>
            </>
          ) : (
            <div className="z-40">
              <div className=" mix-blend-difference text-white  z-30 fixed nav-body flex justify-around grid-cols-5 whitespace-nowrap py-3 pr-14 w-full text-xs font-monument font-thin border-b">
                <div className=" ">
                  <span className="text-base">{arrow} &nbsp;</span>
                  <Link className="" href="/">
                    About
                  </Link>
                </div>
                <div>
                  <span className="text-base">&nbsp;&nbsp; {arrow} &nbsp;</span>
                  <Link href="/work">Portfolio</Link>
                </div>
                <div className="">
                  <span className="text-base">{arrow} &nbsp;</span>

                  <Link className="" href="mailto:jexica.ayran@gmail.com">
                    Email
                  </Link>
                </div>

                <div className="">
                  <span className="text-base">{arrow} &nbsp;</span>

                  {/*             
              <Link className="" href="https://github.com/xicaz">
                Github
              </Link> */}
                  <Link className="" href="https://www.linkedin.com/in/jexica/">
                    Linkedin
                  </Link>
                </div>
                <div className="">
                  <span className="text-base">{arrow} &nbsp;</span>
                  <Link className="" href="/JexicaAyran-Resume.pdf" passHref>
                    <a target="_blank">Resume</a>
                  </Link>
                  {/* <Link className="" href="https://www.linkedin.com/in/jexica/">
                Linkedin
              </Link> */}
                </div>
              </div>
            </div>
          );
        }}
      </Media>
    </SafeHydrate>
  );
}

export default Navbar;

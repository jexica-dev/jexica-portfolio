// import { Component } from "react";
import Link from "next/dist/client/link";
// import styles from "./Navbar.module.css";
import Media from "react-media";
import { useState } from "react";
import { Spiral as Hamburger } from "hamburger-react";

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
                style={navOpen ? { color: "red" } : { color: "green" }}
                className=" fixed z-50 top-0 flex  flex-col justify-around w-full bg-gradient06 bg-cover bg-left-bottom"
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
                  style={!navOpen ? { display: "none" } : { display: "" }}
                  className={!navOpen ? "hide" : ""}
                >
                  <li>
                    <Link href="/">test</Link>
                  </li>
                  <li>
                    <Link href="/">test</Link>
                  </li>
                  <li>
                    <Link href="/">test</Link>
                  </li>
                </ul>
              </div>
            </>
          ) : (
            <div className="z-40">
              <div className=" mix-blend-difference text-white  z-30 fixed nav-body flex justify-around grid-cols-5 whitespace-nowrap py-3 pr-14 w-full text-md font-[600] font-whytemono border-b">
                <div className=" ">
                  <span className="">{arrow} &nbsp;</span>
                  <Link className="" href="/">
                    About
                  </Link>
                </div>
                <div>
                  <span>&nbsp;&nbsp; {arrow} &nbsp;</span>
                  <Link href="/work" passHref>
                    Work
                  </Link>
                </div>
                <div className="">
                  <span>{arrow} &nbsp;</span>

                  <Link className="" href="mailto:jexica.ayran@gmail.com">
                    Contact
                  </Link>
                </div>
                <div className="">
                  <span>{arrow} &nbsp;</span>
                  <Link className="" href="/JexicaAyran-Resume.pdf">
                    <a target="_blank">Resume</a>
                  </Link>
                  {/* <Link className="" href="https://www.linkedin.com/in/jexica/">
                Linkedin
              </Link> */}
                </div>
                <div className="">
                  <span>{arrow} &nbsp;</span>

                  {/*             
              <Link className="" href="https://github.com/xicaz">
                Github
              </Link> */}
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

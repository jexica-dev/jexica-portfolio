// import { Component } from "react";
import Link from "next/dist/client/link";
// import styles from "./Navbar.module.css";
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

  return (
    <SafeHydrate>
      <div className="">
        <div className=" mix-blend-difference text-white  z-30 fixed nav-body flex justify-around grid-cols-5 whitespace-nowrap py-3 pr-14 w-full text-sm tracking-wide">
          <div className="">
            <span>{arrow} &nbsp;</span>
            <Link className="" href="/">
              About
            </Link>
          </div>
          <div>
            <span>&nbsp;&nbsp; {arrow} &nbsp;</span>
            <Link href="/work" passHref>
              <a>Work</a>
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
    </SafeHydrate>
  );
}

export default Navbar;

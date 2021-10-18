import { Component } from "react";
import Link from "next/dist/client/link";
import styles from '../navbar/Navbar.module.css'


function Navbar(props) {
  return (
    <div className="relative">
    <div>
    <div className="align-center text-right flex flex-col m-12 ml-44 w-1/5">
      <div className={styles.navname}>jexica ayran</div>


      <div className="flex-1"><Link href="mailto:jexica.ayran@gmail.com"> Email</Link>&nbsp;</div>
      <div className="flex-1"><Link href="https://www.linkedin.com/in/jexica/"> Linkedin</Link>&nbsp;</div>
      <div className="flex-1"><Link href="https://github.com/xicaz"> Github</Link>&nbsp;</div>
      </div>

      </div>
      </div>
  );
}

export default Navbar;

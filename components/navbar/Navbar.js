import { Component } from "react";
import Link from "next/dist/client/link";
import styles from '../navbar/Navbar.module.css';
import Media from "react-media";
import { useState } from "react";



function Navbar(props) {
  const [isOpen, setOpen] = useState(false)


  return (
    <Media queries={{ mobile: { maxWidth: 800 } }}>
      {(matches) => matches.mobile ? 

        <>
          <div className="w-3/4 align-center text-right mt-10">
              
              <div className={[styles.navname + ' flex-1 mb-8 w-1/5']}><Link href="/"> jexica ayran </Link></div>
              <div className={[styles.nav + " flex-1 text-xl"]}><Link href="mailto:jexica.ayran@gmail.com"> Email</Link></div>
              <div className={[styles.nav + " flex-1 text-xl"]}><Link href="https://www.linkedin.com/in/jexica/"> Linkedin</Link></div>
              <div className={[styles.nav + " flex-1 text-xl mb-8"]}><Link href="https://github.com/xicaz"> Github</Link></div>
  
          </div>
</>


        :

        <>
          <div className={["w-3/4 align-center text-right mt-10" + styles.navcontainer]}>
            
          <div className={[styles.navname + ' flex-1 mb-8 mt-8']}><Link href="/"> jexica ayran </Link></div>

  
  
        <div className={[styles.nav + " flex-1"]}><Link href="mailto:jexica.ayran@gmail.com"> Email</Link></div>
        <div className={[styles.nav + " flex-1"]}><Link href="https://www.linkedin.com/in/jexica/"> Linkedin</Link></div>
        <div className={[styles.nav + " flex-1 mb-8"]}><Link href="https://github.com/xicaz"> Github</Link></div>
        </div>
          </>
    }
    

      </Media>
  );
}

export default Navbar;

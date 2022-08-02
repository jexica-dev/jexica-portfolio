import React, { createRef } from "react";
import Navbar from "../navbar/Navbar";
import styles from "../../styles/Layout.module.css";
import dynamic from "next/dynamic";
// import AnimatedCursor from "react-animated-cursor";

export default function Layout(props) {
  const AnimatedCursor = dynamic(() => import("react-animated-cursor"), {
    ssr: false,
  });

  // const cursor = createRef();


  return (
    <>
      <Navbar />
      <AnimatedCursor
        // ref={cursor}
        innerSize={20}
        outerSize={25}
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={2}
      />
      <div className={[styles.container + " absolute "]}>
        <div className="relative">{props.children}</div>
      </div>
    </>
  );
}

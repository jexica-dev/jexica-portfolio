import React, { createRef } from "react";
import Navbar from "../navbar/Navbar";
import styles from "../../styles/Layout.module.css";
// import dynamic from "next/dynamic";
// import AnimatedCursor from "react-animated-cursor";

export default function Layout(props) {
  // const AnimatedCursor = dynamic(() => import("react-animated-cursor"), {
  //   ssr: false,
  // });

  return (
    <>
      <Navbar />
      {/* <AnimatedCursor
        innerSize={17}
        outerSize={17}
        outerAlpha={0.75}
        innerScale={0.7}
        outerScale={2}
        trailingSpeed={13}
        color="255,0,0"
      /> */}
      <div className={[styles.container + " absolute "]}>
        <div className="relative">{props.children}</div>
      </div>
    </>
  );
}

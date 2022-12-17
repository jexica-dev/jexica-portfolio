import React, { createRef } from "react";
import Navbar from "../navbar/Navbar";
import styles from "../../styles/Layout.module.css";
// import AnimatedCursor from "react-animated-cursor";

export default function Layout(props) {
  return (
    <>
      <Navbar />

      <div className={[styles.container + " absolute "]}>
        <div className="relative">{props.children}</div>
      </div>
    </>
  );
}

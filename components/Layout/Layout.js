import React from "react";
import Navbar from "../navbar/Navbar";
import styles from "../../styles/Layout.module.css";
import Cursor from "../Cursor/cursor";

export default function Layout(props) {
  return (
    <>
      <Navbar />
      <Cursor />
      <div className={[styles.container + " absolute "]}>
        <div className="relative">{props.children}</div>
      </div>
    </>
  );
}

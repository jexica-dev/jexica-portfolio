import React from "react";
import Navbar from "../navbar/Navbar";
import styles from "../../styles/Layout.module.css";

export default function Layout(props) {
  return (
    <div className=" cursor-star">
      <Navbar />
      <div className={[styles.container + " absolute "]}>
        <div className="relative">{props.children}</div>
      </div>
    </div>
  );
}

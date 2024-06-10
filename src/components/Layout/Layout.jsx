import React from "react";
import Navbar from "../Navbar/Navbar";
import styles from "./layout.module.css";

const Layout = ({ children }) => {
  return (
    <div className={styles["layout-container"]}>
      <div className={styles.layout}> {children}</div>
      <Navbar />
    </div>
  );
};

export default Layout;

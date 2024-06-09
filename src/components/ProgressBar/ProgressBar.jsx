import React from "react";
import styles from "./progressbar.module.css";

const ProgressBar = ({ value = "60%" }) => {
  return (
    <div className={styles["progress-bar__container"]}>
      <div className={styles["progress-bar"]}>
        <div
          className={styles["progress-indicator"]}
          style={{ width: value }}
        />
      </div>
      <span className={styles["progress-bar__value"]}>{value}</span>
    </div>
  );
};

export default ProgressBar;

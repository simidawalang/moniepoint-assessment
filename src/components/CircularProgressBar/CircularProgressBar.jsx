import React from "react";
import styles from "./circular-progressbar.module.css";

const CircularProgressBar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.progress}>
        {/* style="--i: 70;" */}
        <h3 className={styles.value}> 70%</h3>
      </div>
    </div>
  );
};

export default CircularProgressBar;

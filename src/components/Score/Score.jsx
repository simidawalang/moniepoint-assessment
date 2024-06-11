import React from "react";
import { GoArrowUp } from "react-icons/go";
import { FireIcon } from "../../assets";
import styles from "./score.module.css";

const Score = ({ className, value, hasArrow, isPill }) => {
  return (
    <div
      className={`${styles["score"]} ${className ? className : ""} ${
        isPill ? styles.pill : ""
      }`}
    >
      {hasArrow && (
        <GoArrowUp
          className={styles["arrow"]}
          size={16}
          color="#73a68f"
          strokeWidth={1}
        />
      )}
      <div className={styles["icon-container"]}>
        <img className={styles["fire-icon"]} src={FireIcon} alt="score" />
      </div>
      {value}
    </div>
  );
};

export default Score;

import React from "react";
import { BsThreeDots } from "react-icons/bs";
import { CiSquareChevLeft, CiSquareChevRight } from "react-icons/ci";
import { IoMdCheckmark } from "react-icons/io";
import styles from "./stats.module.css";
import { statsList, weekStatList } from "../../dummy-data";

const Stats = () => {
  return (
    <>
      <div className={styles["month-selector"]}>
        <CiSquareChevLeft color="#6473bb" size={24} strokeWidth={0.5} />
        <h2 className={styles.month}>September</h2>
        <CiSquareChevRight color="#6473bb" size={24} strokeWidth={0.5} />
      </div>
      <div className={styles["week-stats"]}>
        {weekStatList.map(({ dayOfWeek, noOfDay, isDone, isCurrent }, i) => (
          <div key={i} className={styles["stat-day"]}>
            <div
              className={`${styles["day-icon"]} ${
                isCurrent && styles["current-day"]
              } ${isDone && styles["complete-day"]}`}
            >
              {isDone ? <IoMdCheckmark color="#fff" /> : noOfDay}
            </div>
            <p className={isCurrent ? styles["text-orange"] : ""}>{dayOfWeek}</p>
          </div>
        ))}
      </div>
      <section className={styles["stats-section"]}>
        <div className={styles["section-header"]}>
          <h3 className={styles["section-title"]}>Skills</h3>{" "}
          <BsThreeDots color="#6473bb" size={20} />
        </div>
        <ul className={styles["stats-list"]}>
          {statsList.map(({ id, skill, progress, icon }) => (
            <div className={styles["stat-item"]} key={id}>
              <div className={styles["stat-icon"]}>{icon}</div>
              <h4 className={styles.name}>{skill}</h4>
              <p className={styles.progress}>{progress}</p>
              <div
                className={`${styles.status} ${
                  progress === "100%"
                    ? styles["status-complete"]
                    : styles["status-incomplete"]
                }`}
              >
                {progress === "100%" ? "Completed" : "Good work"}
              </div>
            </div>
          ))}
        </ul>
      </section>
    </>
  );
};

export default Stats;

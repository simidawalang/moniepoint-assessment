import React from "react";
import styles from "./home.module.css";
import { ProgressBar } from "../../components";
import { BritishFlagIcon, VocabIcon } from "../../assets";

const lessonsList = [
  {
    id: 1,
    title: "Speaking 101",
    icon: BritishFlagIcon,
    duration: "30 days daily",
    percentage: "60%",
  },
  {
    id: 2,
    title: "New words",
    icon: VocabIcon,
    duration: "90 days daily",
    percentage: "60%",
  },
  {
    id: 3,
    title: "Speaking 101",
    icon: BritishFlagIcon,
    duration: "30 days daily",
    percentage: "60%",
  },
  {
    id: 4,
    title: "New words",
    icon: VocabIcon,
    duration: "30 days daily",
    percentage: "60%",
  },
  {
    id: 5,
    title: "Speaking 101",
    icon: BritishFlagIcon,
    duration: "30 days daily",
    percentage: "60%",
  },
  {
    id: 6,
    title: "New words",
    icon: VocabIcon,
    duration: "30 days daily",
    percentage: "60%",
  },
];

const Home = () => {
  return (
    <>
      <div className={styles.intro}>
        <div>
          <p className={styles.name}>Hello Rachael</p>
          <p>
            Ready to{" "}
            <span className={styles["text-orange"]}>play English? </span>
          </p>
        </div>
        <div className={styles.score}></div>
      </div>

      <div className={styles.goal}>
        <div>Today&apos;s goal</div>
        <div>
          <h3 className={styles.title}>Excellent!</h3>
          <p>You&apos;re almost there. Finish the goal to achieve</p>
        </div>
      </div>

      <section className={styles["lessons-container"]}>
        <h3 className={styles.title}>Your lesson</h3>
        <div className={styles["lessons-list"]}>
          {lessonsList.map(({ id, title, icon, duration, percentage }) => (
            <div key={id} className={styles["lesson-item"]}>
              <div className={styles["lesson-icon"]}>
                <img src={icon} alt={title} />
              </div>
              <ProgressBar value={percentage} />
              <p className={styles["lesson-title"]}>{title}</p>
              <p className={styles["lesson-duration"]}>{duration}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Home;

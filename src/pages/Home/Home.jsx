import React from "react";
import { CiSquareChevRight } from "react-icons/ci";
import { CircularProgressBar, ProgressBar, Score } from "../../components";
import { leaderBoardList, lessonsList } from "../../dummy-data";
import styles from "./home.module.css";

const Home = () => {
  return (
    <>
      <section>
        <div className={styles.intro}>
          <div>
            <p className={styles.username}>Hello Rachael</p>
            <p className={styles.challenge}>
              Ready to{" "}
              <span className={styles["text-orange"]}>play English? </span>
            </p>
          </div>
          <Score value={65} isPill />
        </div>

        <div className={styles["goal-container"]}>
          <div>
            <p className={styles["todays-goal"]}>Today&apos;s goal</p>
            <CircularProgressBar value={70} />
          </div>
          <div>
            <h3 className={styles.title}>Excellent!</h3>
            <p className={styles.remark}>
              You&apos;re almost there. <br /> Finish the goal to achieve
            </p>
            <Score className={styles.score} value={10} />
          </div>
        </div>
      </section>
      <section className={styles["lessons-container"]}>
        <div className={styles["section-header"]}>
          <h3 className={styles["section-title"]}>Your lesson</h3>
          <CiSquareChevRight color="#6473bb" size={24} strokeWidth={0.5} />
        </div>
        <ul className={styles["lessons-list"]}>
          {lessonsList.map(({ id, title, icon, duration, percentage }) => (
            <li key={id} className={styles["lesson-item"]}>
              <div className={styles["lesson-icon__container"]}>
                <img src={icon} alt={title} />
              </div>
              <ProgressBar value={percentage} />
              <p className={styles["lesson-title"]}>{title}</p>
              <p className={styles["lesson-duration"]}>{duration}</p>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <div className={styles["section-header"]}>
          <h3 className={styles["section-title"]}>Leaderboard</h3>
          <CiSquareChevRight color="#6473bb" size={24} strokeWidth={0.5} />
        </div>
        <div className={styles["leaderboard-container"]}>
          <div className={styles["leaderboard-list"]}>
            {leaderBoardList.map(({ id, avatar, name, location, score }) => (
              <div key={id} className={styles["leaderboard-item"]}>
                <img className={styles.avatar} src={avatar} alt={name} />
                <div className={styles["leaderboard-details"]}>
                  <div>
                    <p className={styles["name"]}>{name}</p>
                    <p className={styles["location"]}>{location}</p>
                  </div>
                  <Score value={score} hasArrow />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;

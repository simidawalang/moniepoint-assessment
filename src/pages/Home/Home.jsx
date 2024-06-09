import React from "react";
import { ProgressBar } from "../../components";
import { leaderBoardList, lessonsList } from "../../dummy-data";
import { FireIcon } from "../../assets";
import { GoArrowUp } from "react-icons/go";
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
          <div className={styles.score}></div>
        </div>

        <div className={styles.goal}>
          <div>Today&apos;s goal</div>
          <div>
            <h3 className={styles.title}>Excellent!</h3>
            <p>You&apos;re almost there. Finish the goal to achieve</p>
          </div>
        </div>
      </section>
      <section className={styles["lessons-container"]}>
        <h3 className={styles.title}>Your lesson</h3>
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
        <h3 className={styles["section-title"]}>Leaderboard</h3>
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
                  <div className={styles["score"]}>
                    <GoArrowUp className={styles["arrow"]} size={16} color="#73a68f" strokeWidth={1} />
                    <img
                      className={styles["fire-icon"]}
                      src={FireIcon}
                      alt="score"
                    />
                    {score}
                  </div>
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

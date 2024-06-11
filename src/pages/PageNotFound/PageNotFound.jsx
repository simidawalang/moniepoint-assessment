import React from "react";
import { useNavigate } from "react-router-dom";
import { IoArrowBackSharp } from "react-icons/io5";
import styles from "./page-not-found.module.css";

const PageNotFound = () => {
  const navigate = useNavigate();
  return (
    <div className={styles["not-found"]}>
      <div>
        <h1>404</h1>
        <p>Page Not Found</p>
        <button className={styles["back-btn"]} onClick={() => navigate("/")}>
            <IoArrowBackSharp />
          Go to home
        </button>
      </div>
    </div>
  );
};

export default PageNotFound;

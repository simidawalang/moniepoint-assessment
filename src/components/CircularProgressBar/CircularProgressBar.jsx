import React from "react";
import styles from "./circular-progressbar.module.css";

const CircularProgressBar = () => {
  return (
    <div class="circular">
      <div class="inner"></div>
      <div class="outer"></div>
      <div class="numb">0%</div>
      <div class="circle">
        <div class="dot">
          <span></span>
        </div>
        <div class="bar left">
          <div class="progress"></div>
        </div>
        <div class="bar right">
          <div class="progress"></div>
        </div>
      </div>
    </div>
  );
};

export default CircularProgressBar;

import React from "react";
// import styles from "../../UserProfile/UserProfile.module.scss";
import styles from "./TitleComponent.module.scss";

const TitleComponent = () => {
  return (
    <div className={styles.title_wrapper}>
      <h2 className={styles.title}>Plan </h2>
      <span className={styles.sub_title}>your day</span>
      <button className={styles.onTask}>create your task</button>
    </div>
  );
};

export default TitleComponent;

import React from "react";
import image1 from "../../assets/images/5.jpg";
import image2 from "../../assets/images/4.jpg";
import dataList from "./dataList.json";
import styles from "./Main.module.scss";
const Main = () => {
  return (
    <div>
      <div className={styles.title}>
        <h2 className={styles.main_word}>Why</h2>
        <p className={styles.text}>do you need to plan a day?</p>
        <img src={image1} className={styles.main_1} alt="5" />
      </div>
      <ol className={styles.list}>
        {dataList.map(({ id, content }) => (
          <li key={id} className={styles.list_item}>
            {content}
          </li>
        ))}
      </ol>
      <img src={image2} className={styles.main_2} alt="1" />
    </div>
  );
};

export default Main;

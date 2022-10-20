import React from "react";
import gomer from "../../assets/images/homer_registr.jpg";
import { NavLink } from "react-router-dom";
import styles from "../forms/UserForm/UserForm.module.scss";

const FinishRegistration = () => {
  return (
    <div className={styles.finish_registr}>
      <img src={gomer} alt="gomer" className={styles.gomer} />
      <div className={styles.finish_text}>
        <h2 className={styles.heading_finish}>All good!</h2>
        <h3>Registration successful</h3>
        <NavLink to="/" className={styles.button_back}>
          back to main
        </NavLink>
      </div>
    </div>
  );
};

export default FinishRegistration;

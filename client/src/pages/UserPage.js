import React from "react";
import UserProfile from "../components/UserProfile";
import styles from "../components/UserProfile/UserProfile.module.scss";
const UserPage = () => {
  return (
    <div className={styles.user_page_container}>
      <UserProfile />
    </div>
  );
};

export default UserPage;

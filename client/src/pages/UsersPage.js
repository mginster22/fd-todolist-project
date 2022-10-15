import React from "react";
import UsersList from "../components/UsersList";
import styles from "../components/UsersList/UserList.module.scss";

const UsersPage = () => {
  return (
    <div className={styles.container}>
        <UsersList />
    </div>
  );
};

export default UsersPage;

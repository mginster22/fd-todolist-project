import React from "react";
import styles from "../UsersList/UserList.module.scss";

const SearchUsers = ({ onChangeSearchValue, search }) => {
  return (
    <label className={styles.search_inner}>
      <svg
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: "20px" }}
        className={styles.lupa}
      >
        <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z" />
      </svg>
      <input
        className={styles.search_user}
        value={search}
        onChange={onChangeSearchValue}
      />
    </label>
  );
};

export default SearchUsers;

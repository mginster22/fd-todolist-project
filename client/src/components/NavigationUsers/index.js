import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setOffset, setCurrentPage } from "../../actions/usersCreators";
import styles from "../UsersList/UserList.module.scss";
import CONSTANTS from "../../constants";
const { LIMIT } = CONSTANTS;

const NavigatonUsers = () => {
  const { users, offset, currentPage } = useSelector(({ users }) => users);
  const dispatch = useDispatch();
  const handlerNext = () => {
    dispatch(setOffset({ offset: offset + LIMIT }));
    dispatch(setCurrentPage(currentPage + 1));
  };

  const handlerBack = () => {
    dispatch(setOffset({ offset: offset - LIMIT }));
    dispatch(setCurrentPage(currentPage - 1));
  };
  return (
    <div className={styles.navigate}>
      <button
        className={styles.navigate_button}
        onClick={handlerBack}
        disabled={offset <= 0}
      >
        &#10094;
      </button>
      <p className={styles.currentPage}>{currentPage}</p>
      <button
        className={styles.navigate_button}
        onClick={handlerNext}
        disabled={offset >= users.length}
      >
        &#10095;
      </button>
    </div>
  );
};

export default NavigatonUsers;

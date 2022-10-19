import React, { useState } from "react";
import cx from "classnames";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import defaultImage from "../../../assets/images/default.jpg";
import UserFormEdit from "../../forms/UserFormEdit";

import styles from "./UserProfileCard.module.scss";
import CONSTANTS from "../../../constants";
import stringToColour from "../../../utils/stringToColour";
const { IMAGE_URL } = CONSTANTS;

const UserProfileCard = ({
  selectedUser,
  showTasks,
  setShowTasks,
  modalTask,
}) => {
  const [modalActive, setModalActive] = useState(false);

  const taskClasses = cx(styles.profile_card, {
    [styles.activeCreateTask]: isSecureContext === true,
  });
  const handlerErrorAvatar = ({ target }) => {
    target.remove();
  };

  return (
    <article className={taskClasses}>
      {selectedUser.avatar ? (
        <div className={styles.card_avatar_wrapper}>
          <div
            className={styles.default_image}
            style={{ backgroundColor: `${stringToColour(selectedUser.name)}` }}
          >
            {selectedUser.name[0]}
          </div>
          <img
            src={`${IMAGE_URL}/${selectedUser.avatar}`}
            className={styles.avatar}
            alt={selectedUser.id}
            onError={handlerErrorAvatar}
          />
        </div>
      ) : (
        <img
          src={defaultImage}
          className={styles.default_image_user}
          alt={selectedUser.name}
        />
      )}

      <div className={styles.info}>
        <p className={styles.fullname}>{selectedUser.name}</p>
        <p className={styles.login}>{selectedUser.login}</p>
      </div>
      <div className={styles.configure_button}>
        <button
          className={styles.update_button}
          style={{ transform: "translateX(22px)" }}
          onClick={() => setModalActive(true)}
          disabled={modalTask}
        >
          <ModeEditIcon />
        </button>
        {showTasks ? (
          <button
            className={styles.close_task_list_btn}
            style={{ fontSize: "0px" }}
            onClick={() => setShowTasks(false)}
          >
            <RemoveCircleOutlineIcon />
          </button>
        ) : (
          <button
            className={styles.close_task_list_btn}
            onClick={() => setShowTasks(true)}
          >
            +
          </button>
        )}
      </div>

      {modalActive && (
        <UserFormEdit
          setModalActive={setModalActive}
          user={selectedUser}
          modalActive={modalActive}
        />
      )}
    </article>
  );
};

export default UserProfileCard;

import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  deleteUserByIdRequest,
  getUsersRequest,
} from "../../actions/usersCreators";
import DeleteIcon from "@mui/icons-material/Delete";
import defaultImage from "../../assets/images/default.jpg";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import styles from "../UsersList/UserList.module.scss";
import stringToColour from "../../utils/stringToColour";
import CONSTANTS from "../../constants";
const { IMAGE_URL, LIMIT } = CONSTANTS;

const UserItem = (props) => {
  const { user, offset, users } = props;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handlerErrorAvatar = ({ target }) => {
    target.remove();
  };

  return (
    <article key={user.id} className={styles.card}>
      {user.avatar ? (
        <div className={styles.card_avatar_wrapper}>
          <div
            className={styles.default_image_word}
            style={{ backgroundColor: `${stringToColour(user.name)}` }}
          >
            {user.name[0]}
          </div>
          <img
            src={`${IMAGE_URL}/${user.avatar}`}
            className={styles.avatar}
            alt={user.id}
            onError={handlerErrorAvatar}
          />
        </div>
      ) : (
        <img
          src={defaultImage}
          className={styles.default_image}
          alt={user.name}
        />
      )}

      <div className={styles.info}>
        <p className={styles.fullname}>{user.name}</p>

        <p className={styles.name}>{user.login}</p>
      </div>
      <div className={styles.button_configuration}>
        <button
          className={styles.delete}
          onClick={() => {
            navigate(`/users/${user.id}`);
          }}
        >
          <ModeEditIcon />
        </button>
        <button
          className={styles.update}
          onClick={() => {
            dispatch(deleteUserByIdRequest(user.id));
            dispatch(getUsersRequest({ limit: LIMIT }));
          }}
        >
          <DeleteIcon />
        </button>
      </div>
    </article>
  );
};

export default UserItem;

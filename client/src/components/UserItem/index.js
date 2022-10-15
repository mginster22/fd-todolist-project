import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteUserByIdRequest } from "../../actions/usersCreators";
import DeleteIcon from "@mui/icons-material/Delete";
import defaultImage from "../../assets/images/default.jpg";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import styles from "../UsersList/UserList.module.scss";
import CONSTANTS from "../../constants";
const { IMAGE_URL } = CONSTANTS;

const UserItem = (props) => {
  const { user } = props;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <article key={user.id} className={styles.card}>
      {user.avatar ? (
        <img
          src={`${IMAGE_URL}/${user.avatar}`}
          className={styles.avatar}
          alt={user.id}
        />
      ) : (
        <img src={defaultImage} className={styles.avatar} alt={user.name} />
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
          onClick={() => dispatch(deleteUserByIdRequest(user.id), [])}
        >
          <DeleteIcon />
        </button>
      </div>
    </article>
  );
};

export default UserItem;

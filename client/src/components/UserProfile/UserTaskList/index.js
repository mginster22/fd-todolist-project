import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  deleteUserTaskRequest,
  getTaskUserRequest,
} from "../../../actions/taskCreators";
import DeleteIcon from "@mui/icons-material/Delete";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import { format } from "date-fns";
import styles from "./UserTaskList.module.scss";
// import styles from "../UserProfile.module.scss";

const UserTaskList = ({
  selectedTask,
  userId,
  setEditedTask,
  setModalTask,
}) => {
  const dispatch = useDispatch();
  console.log(selectedTask);
  return (
    <ul className={styles.tasks_list}>
      {selectedTask.map((task) => (
        <li key={task.id} className={styles.tasks_list_item}>
          <div>
            <p className={styles.content_text}>{task.content}</p>
            <p className={styles.date_info}>
              {format(new Date(`${task.deadline}`), "PPPP")}
            </p>
          </div>
          <div className={styles.configure_button_task}>
            <button
              className={styles.delete_task_button}
              onClick={() => {
                dispatch(deleteUserTaskRequest({ userId, taskId: task.id }));
                dispatch(getTaskUserRequest({ userId }));
              }}
            >
              <DeleteIcon />
            </button>

            <button
              className={styles.update_task_button}
              onClick={() => {
                setEditedTask(task);
                setModalTask(true);
              }}
            >
              <ModeEditIcon />
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default UserTaskList;

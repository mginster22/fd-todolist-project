import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getUserByIdRequest } from "../../actions/usersCreators";
import { getTaskUserRequest } from "../../actions/taskCreators";

import TitleComponent from "./TitleComponent";
import TaskForm from "../forms/TaskForm";
import UserProfileCard from "./UserProfileCard/index";
import UserTaskList from "./UserTaskList";
import TaskEditForm from "../forms/TaskEditForm/index";
import styles from "./UserProfile.module.scss";

const UserProfile = () => {
  const { selectedUser } = useSelector(({ users }) => users);
  const { selectedTask } = useSelector(({ tasks }) => tasks);

  const [showTasks, setShowTasks] = useState(true);
  const [editedTask, setEditedTask] = useState({});

  const [modalTask, setModalTask] = useState(false);
  const { userId } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserByIdRequest({ userId }));
    dispatch(getTaskUserRequest({ userId }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={styles.wrapper_profile}>
      <TitleComponent />

      <TaskForm userId={userId} />

      {selectedUser && (
        <UserProfileCard
          selectedUser={selectedUser}
          showTasks={showTasks}
          setShowTasks={setShowTasks}
          modalTask={modalTask}
        />
      )}
      <div className={styles.edit_form_task_list}>
        {showTasks && (
          <article className={styles.task_container}>
            {selectedTask && (
              <UserTaskList
                selectedTask={selectedTask}
                userId={userId}
                setEditedTask={setEditedTask}
                setModalTask={setModalTask}
              />
            )}
          </article>
        )}
        {modalTask && (
          <TaskEditForm
            userId={userId}
            task={editedTask}
            setModalTask={setModalTask}
          />
        )}
      </div>
    </div>
  );
};

export default UserProfile;

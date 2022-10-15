import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTasksRequest } from "../../actions/taskCreators";
import { format } from "date-fns";
import styles from "./TasksList.module.scss";

const TasksList = () => {
  const { selectedTask } = useSelector(({ tasks }) => tasks);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTasksRequest());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={styles.container_tasks}>
      <div className={styles.tasks_inner}>
        {selectedTask.map(({ id, content, deadline }) => (
          <article className={styles.tasks_item} key={id}>
            <p className={styles.task_text}>
              <span className={styles.task_id}>{id}</span>. {content}
            </p>
            <p className={styles.date}>
              {format(new Date(`${deadline}`), "PPPP")}
            </p>
          </article>
        ))}
      </div>
    </div>
  );
};
export default TasksList;

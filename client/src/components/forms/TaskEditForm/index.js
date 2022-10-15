import React, { useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { updateUserTaskRequest } from "../../../actions/taskCreators";
import { useDispatch } from "react-redux";
import {taskContentSchema} from '../../../utils/validate'
import styles from "./TaskEditForm.module.scss";



const TaskEditFormWrapper = ({ task, formikProps, setModalTask }) => {
  useEffect(() => {
    if (typeof task.content === "string") {
      formikProps.setFieldValue("content", task.content);
    }
  }, [task]);
  return (
    <Form className={styles.task_edit_form}>
      <label className={styles.content_inner}>
        <Field
          name="content"
          className={styles.content_text}
          component="textarea"
          placeholder="change your task..."
        />
        <ErrorMessage
          name="content"
          component="span"
          className={styles.task_form_err_message}
        />
      </label>

      <div className={styles.form_configure_button}>
        <input
          type="submit"
          value="save"
          className={styles.update_task_button}
        />
        <button
          className={styles.close_window}
          onClick={() => setModalTask(false)}
        >
          close
        </button>
      </div>
    </Form>
  );
};

const TaskEditForm = ({ userId, task, setModalTask }) => {
  const dispatch = useDispatch();
  const onSubmit = (values, formikBag) => {
    dispatch(updateUserTaskRequest({ values, userId, taskId: task.id }));
    setModalTask(false);
  };
  const initialValues = {
    content: task.content || "",
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={taskContentSchema}
    >
      {(formikProps) => (
        <TaskEditFormWrapper
          task={task}
          formikProps={formikProps}
          setModalTask={setModalTask}
        />
      )}
    </Formik>
  );
};

export default TaskEditForm;

import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import { createTaskRequest } from "../../../actions/taskCreators";
import {taskContentSchema} from '../../../utils/validate'
import styles from "./TaskForm.module.scss";



const TaskForm = ({ userId }) => {
  const dispatch = useDispatch();
  const onSubmit = (values, formikBag) => {
    dispatch(createTaskRequest({ values, userId }));
    formikBag.resetForm();
  };

  return (
    <Formik
      initialValues={{
        content: "",
      }}
      onSubmit={onSubmit}
      validationSchema={taskContentSchema}
    >
      <Form className={styles.form_task}>
        <div className={styles.content_input}>
          <Field
            name="content"
            className={styles.content}
            component="textarea"
            placeholder="write your task..."
          />
          <ErrorMessage
            name="content"
            component="span"
            className={styles.task_form_err_message}
          />
        </div>
        <input type="submit" value="send" className={styles.add_task_button} />
      </Form>
    </Formik>
  );
};

export default TaskForm;

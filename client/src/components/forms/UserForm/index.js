import React, { useRef } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { createUserRequest } from "../../../actions/usersCreators";
import AutoAwesomeMotionIcon from "@mui/icons-material/AutoAwesomeMotion";
import cx from "classnames";
import { NavLink } from "react-router-dom";
import { validationShemas } from "../../../utils/validate";
import gomer from "../../../assets/images/homer_registr.jpg";
import styles from "./UserForm.module.scss";

const UserForm = () => {
  const dispatch = useDispatch();

  const { isFetching } = useSelector(({ users }) => users);
  const filePicker = useRef(null);

  const onSubmit = (values, formikBag) => {
    dispatch(createUserRequest(values));
    formikBag.resetForm();
  };

  const handlerPick = () => filePicker.current.click();

  return (
    <>
      {!isFetching ? (
        <Formik
          initialValues={{
            login: "",
            name: "",
            password: "",
            avatar: "",
          }}
          validationSchema={validationShemas}
          onSubmit={onSubmit}
        >
          {(formikProps) => (
            <Form className={styles.form}>
              <label className={styles.login}>
                <Field name="name">
                  {({ field, form, meta }) => {
                    const inputClasses = cx(styles.registr_input, {
                      [styles.invalid]: meta.error && meta.touched,
                    });
                    return (
                      <input
                        {...field}
                        className={inputClasses}
                        placeholder="name"
                      />
                    );
                  }}
                </Field>
                <ErrorMessage
                  name="name"
                  component="div"
                  className={styles.error}
                />
              </label>
              <label className={styles.login}>
                <Field name="login">
                  {({ field, form, meta }) => {
                    const inputClasses = cx(styles.registr_input, {
                      [styles.invalid]: meta.error && meta.touched,
                    });
                    return (
                      <input
                        {...field}
                        className={inputClasses}
                        placeholder="login"
                      />
                    );
                  }}
                </Field>
                <ErrorMessage
                  name="login"
                  component="div"
                  className={styles.error}
                />
              </label>
              <label className={styles.password}>
                <Field name="password">
                  {({ field, form, meta }) => {
                    const inputClasses = cx(styles.registr_input, {
                      [styles.invalid]: meta.error && meta.touched,
                    });
                    return (
                      <input
                        {...field}
                        className={inputClasses}
                        placeholder="password"
                        type="password"
                      />
                    );
                  }}
                </Field>
                <ErrorMessage
                  name="password"
                  component="div"
                  className={styles.error}
                />
              </label>

              <button
                onClick={handlerPick}
                className={styles.file_picker}
                type="button"
              >
                <AutoAwesomeMotionIcon />
              </button>
              <input
                type="file"
                name="avatar"
                ref={filePicker}
                className={styles.hidden}
                onChange={(e) =>
                  formikProps.setFieldValue("avatar", e.target.files[0])
                }
              />
              <input type="submit" className={styles.submit} value="Next" />
            </Form>
          )}
        </Formik>
      ) : (
        <div className={styles.finish_registr}>
          <img src={gomer} alt="gomer" className={styles.gomer} />
          <div className={styles.finish_text}>
            <h2 className={styles.heading_finish}>All good!</h2>
            <h3>Registration successful</h3>
            <NavLink to="/" className={styles.button_back}>
              back to main
            </NavLink>
          </div>
        </div>
      )}
    </>
  );
};

export default UserForm;

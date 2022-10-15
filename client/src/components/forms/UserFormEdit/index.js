import React, { useRef, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import { updateUserRequset } from "../../../actions/usersCreators";
import AutoAwesomeMotionIcon from "@mui/icons-material/AutoAwesomeMotion";
import CloseIcon from "@mui/icons-material/Close";
import {validationShemas} from '../../../utils/validate'
import cx from "classnames";
import styles from "./UserFormEdit.module.scss";

const UserFormEditWrapper = ({
  setModalActive,
  formikProps,
  
  user,
}) => {
  const filePicker = useRef(null);
  const handlerPick = () => filePicker.current.click();

  useEffect(() => {
    if (
      typeof user.login === "string" &&
      typeof user.name === "string" &&
      typeof user.avatar === "string"
    ) {
      formikProps.setFieldValue("login", user.login);
      formikProps.setFieldValue("name", user.name);
      formikProps.setFieldValue("avatar", user.avatar);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);
  return (
    <Form className={styles.form}>
      <h2 className={styles.change_profile_info}>Change your profile</h2>
      <div className={styles.close_modal}>
        {
          <CloseIcon
            className={styles.modal_close_item}
            onClick={() => setModalActive(false)}
          />
        }
      </div>
      <label className={styles.login}>
        <Field name="name">
          {({ field, form, meta }) => {
            const inputClasses = cx(styles.registr_input, {
              [styles.invalid]: meta.error && meta.touched,
            });
            return (
              <input {...field} className={inputClasses} placeholder="name" />
            );
          }}
        </Field>
        <ErrorMessage name="name" component="div" className={styles.error} />
      </label>
      <label className={styles.login}>
        <Field name="login">
          {({ field, form, meta }) => {
            const inputClasses = cx(styles.registr_input, {
              [styles.invalid]: meta.error && meta.touched,
            });
            return (
              <input {...field} className={inputClasses} placeholder="login" />
            );
          }}
        </Field>
        <ErrorMessage name="login" component="div" className={styles.error} />
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
        onChange={(e) => formikProps.setFieldValue("avatar", e.target.files[0])}
      />
      <input type="submit" className={styles.submit} value="Save" />
    </Form>
  );
};

const UserFormEdit = ({ setModalActive, user, modalActive }) => {
  const dispatch = useDispatch();

  const onSubmit = (values, formikBag) => {
    dispatch(updateUserRequset({ values: values, userId: user.id }));
    setModalActive(false);
    formikBag.resetForm();
  };



  return (
    <>
      <div className={styles.modal_container}>
        <div className={styles.modal_wrapper}>
          {modalActive && (
            <Formik
              initialValues={{
                login: user.login || "",
                name: user.name || "",
                password: user.password,
                avatar: user.avatar || "",
              }}
              validationSchema={validationShemas}
              onSubmit={onSubmit}
            >
              {(formikProps) => (
                <UserFormEditWrapper
                  setModalActive={setModalActive}
                  formikProps={formikProps}
                  user={user}
                />
              )}
            </Formik>
          )}
        </div>
      </div>
    </>
  );
};

export default UserFormEdit;

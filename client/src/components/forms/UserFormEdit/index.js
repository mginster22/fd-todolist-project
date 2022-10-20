import React, { useEffect } from "react";
import { Formik, Form } from "formik";
import { useDispatch } from "react-redux";
import { updateUserRequset } from "../../../actions/usersCreators";
import CloseIcon from "@mui/icons-material/Close";
import { validationShemas } from "../../../utils/validate";
import InputForm from "../InputForm/index";
import InputTypeFile from "../InputTypeFile/index";
import styles from "../UserForm/UserForm.module.scss";

const UserFormEditWrapper = ({
  setModalActive,
  formikProps,

  user,
}) => {
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
    <Form className={styles.form_edit}>
      <h2 className={styles.change_profile_info}>Change your profile</h2>
      <div className={styles.close_modal}>
        {
          <CloseIcon
            className={styles.modal_close_item}
            onClick={() => setModalActive(false)}
          />
        }
      </div>
      <InputForm name="name" placeholder="name" />
      <InputForm name="login" placeholder="login" />
      <InputForm name="password" placeholder="password" />

      <InputTypeFile formikProps={formikProps} />

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

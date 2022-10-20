import React from "react";
import { Formik, Form } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { createUserRequest } from "../../../actions/usersCreators";
import { validationShemas } from "../../../utils/validate";
import InputForm from "../InputForm";
import InputTypeFile from "../InputTypeFile/index";
import FinishRegistration from "../../FinishRegistration/index";
import styles from "./UserForm.module.scss";

const UserForm = () => {
  const dispatch = useDispatch();

  const { isFetching } = useSelector(({ users }) => users);

  const onSubmit = (values, formikBag) => {
    dispatch(createUserRequest(values));
    formikBag.resetForm();
  };

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
              <InputForm name="name" placeholder="name" />
              <InputForm name="login" placeholder="login" />
              <InputForm name="password" placeholder="password" />
              <InputTypeFile formikProps={formikProps} />
              <input type="submit" className={styles.submit} value="Next" />
            </Form>
          )}
        </Formik>
      ) : (
        <FinishRegistration />
      )}
    </>
  );
};

export default UserForm;

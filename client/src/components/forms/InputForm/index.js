import React from "react";
import cx from "classnames";
import { Field, ErrorMessage } from "formik";
import styles from "../UserForm/UserForm.module.scss";
const InputForm = ({ name, placeholder }) => {
  return (
    <label className={styles.login}>
      <Field name={name}>
        {({ field, form, meta }) => {
          const inputClasses = cx(styles.registr_input, {
            [styles.invalid]: meta.error && meta.touched,
          });
          return (
            <input
              {...field}
              className={inputClasses}
              placeholder={placeholder}
            />
          );
        }}
      </Field>
      <ErrorMessage name={name} component="div" className={styles.error} />
    </label>
  );
};

export default InputForm;

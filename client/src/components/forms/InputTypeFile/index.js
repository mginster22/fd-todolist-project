import React, { useRef } from "react";
import AutoAwesomeMotionIcon from "@mui/icons-material/AutoAwesomeMotion";

import styles from "../UserForm/UserForm.module.scss";

const InputTypeFile = ({ formikProps }) => {
  const filePicker = useRef(null);

  const handlerPick = () => filePicker.current.click();

  return (
    <>
      <label htmlFor="file" className={styles.label_for_file}>
        <button
          onClick={handlerPick}
          className={styles.file_picker}
          type="button"
        >
          <AutoAwesomeMotionIcon />
        </button>

        <span className={styles.file_name}>
          {formikProps.values.avatar
            ? formikProps.values.avatar.name
            : "choose  file"}
        </span>
      </label>

      <input
        id="file"
        type="file"
        name="avatar"
        ref={filePicker}
        className={styles.hidden}
        onChange={(e) => {
          console.log(formikProps.values.avatar.name);
          formikProps.setFieldValue("avatar", e.target.files[0]);
        }}
      />
    </>
  );
};

export default InputTypeFile;

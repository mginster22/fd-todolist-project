import * as Yup from "yup";

export const validationShemas = Yup.object({
  login: Yup.string().required("Must be required"),
  password: Yup.string().required("Must be required"),
  name: Yup.string().required("Must be required"),
});
export const taskContentSchema = Yup.object({
  content: Yup.string("must be string")
    .min(2, "min 2 symbols")
    .max(60, "max 60 symbols")
    .required("must be required"),
});
import * as yup from "yup";

export const loginYupSchema = yup.object({
  username: yup.string().email().required("ID를 입력해주세요"),
  password: yup.string().required("Password를 입력해주세요"),
});

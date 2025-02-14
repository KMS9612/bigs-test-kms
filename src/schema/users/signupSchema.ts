import * as yup from "yup";

export const signUpSchema = yup.object({
  username: yup.string().email().required("아이디를 입력해주세요"),
  name: yup.string().required("이름을 입력해주세요"),
  password: yup.string().required("비밀번호를 입력해주세요"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "비밀번호가 일치하지 않습니다.")
    .required("비밀번호를 다시 입력해주세요"),
});

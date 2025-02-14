"use client";
import { signUpSchema } from "@/src/schema/users/signupSchema";
import createUser from "@/src/service/users/createUser";
import { ISignUpFormValues } from "@/src/types/signup/signUpFormTypes";
import styles from "@/styles/signup/signuppage.module.scss";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

export default function SignUpPage() {
  const inputObj = [
    {
      labelName: "Email",

      type: "email",
      id: "username",
    },
    {
      labelName: "name",
      type: "text",
      id: "name",
    },
    {
      labelName: "Password",
      type: "password",
      id: "password",
    },
    {
      labelName: "Confirm Password",
      type: "password",
      id: "confirmPassword",
    },
  ];

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ISignUpFormValues>({ resolver: yupResolver(signUpSchema) });

  const onSubmit = handleSubmit(async (data) => {
    const responseData = await createUser(
      data.username,
      data.name,
      data.password,
      data.confirmPassword
    );

    console.log(responseData);
  });
  return (
    <div className={styles.main_box}>
      <form onSubmit={onSubmit} className={styles.input_wrap}>
        <div>signUp Page</div>
        {/* Input Box Roop 추후 컴포넌트 화 시킬것 */}
        {inputObj.map((el) => {
          if (
            el.id === "username" ||
            el.id === "password" ||
            el.id === "name" ||
            el.id === "confirmPassword"
          )
            return (
              <div key={el.id + el.labelName}>
                <label htmlFor={el.id}>{el.labelName}</label>
                <input {...register(el.id)} type={el.type} name={el.id} />
              </div>
            );
        })}
        <button type="submit" className={styles.signup_button}>
          Login
        </button>
      </form>
    </div>
  );
}

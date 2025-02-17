"use client";
import styles from "@/styles/login/loginpage.module.scss";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginYupSchema } from "@/src/schema/users/loginSchema";
import {
  IInputObjElements,
  ILoginFormValues,
} from "@/src/types/login/loginFormTypes";
import { useForm } from "react-hook-form";
import loginUser from "@/src/service/users/loginUser";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const inputObj: IInputObjElements[] = [
    {
      labelName: "Email",
      type: "email",
      id: "username",
    },
    {
      labelName: "Password",
      type: "password",
      id: "password",
    },
  ];

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginFormValues>({ resolver: yupResolver(loginYupSchema) });

  const onSubmit = handleSubmit(async (data) => {
    const responseData = await loginUser(data.username, data.password);
    if (responseData) {
      router.push("/board");
      sessionStorage.setItem("email", data.username);
    } else {
      alert("로그인에 실패했습니다.");
    }
  });
  return (
    <div className={styles.main_box}>
      <form onSubmit={onSubmit} className={styles.input_wrap}>
        <div>LoginPage</div>
        {/* Input Box Roop 추후 컴포넌트 화 시킬것 */}
        {inputObj.map((el: IInputObjElements) => {
          if (el.id === "username" || el.id === "password") {
            return (
              <div key={el.id + el.labelName}>
                <label htmlFor={el.id}>{el.labelName}</label>
                <input
                  {...register(el.id)}
                  id={el.id}
                  type={el.type}
                  name={el.id}
                  autoComplete="off"
                />
                <p>{errors[el.id]?.message}</p>
              </div>
            );
          }
        })}
        <button type="submit" className={styles.login_button}>
          Login
        </button>
      </form>
    </div>
  );
}

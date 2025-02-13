import styles from "@/styles/signup/signuppage.module.scss";

export default function SignUpPage() {
  const inputObj = [
    {
      labelName: "Email",
      htmlFor: "signUpEmailInput",
      type: "email",
      name: "signUpEmailInput",
    },
    {
      labelName: "name",
      htmlFor: "signUpNameInput",
      type: "text",
      name: "signUpNameInput",
    },
    {
      labelName: "password",
      htmlFor: "signUpPasswordInput",
      type: "password",
      name: "signUpPasswordInput",
    },
    {
      labelName: "PasswordCheck",
      htmlFor: "signUpPasswordCheckInput",
      type: "password",
      name: "signUpPasswordCheckInput",
    },
  ];
  return (
    <div className={styles.main_box}>
      <div className={styles.input_wrap}>
        <div>signUp Page</div>
        {/* Input Box Roop */}
        {inputObj.map((el) => (
          <div key={el.htmlFor + el.name}>
            <label htmlFor={el.htmlFor}>{el.labelName}</label>
            <input type={el.type} name={el.name} />
          </div>
        ))}
        <button className={styles.signup_button}>Login</button>
      </div>
    </div>
  );
}

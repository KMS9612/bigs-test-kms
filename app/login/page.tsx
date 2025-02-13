import styles from "@/styles/login/loginpage.module.scss";

export default function LoginPage() {
  return (
    <div className={styles.main_box}>
      <div className={styles.input_wrap}>
        <div>LoginPage</div>
        <div>
          <label htmlFor="emailInput">Email</label>
          <input type="email" name="emailInput" />
        </div>
        <div>
          <label htmlFor="passwordInput">Password</label>
          <input type="password" name="passwordInput" />
        </div>
        <button className={styles.login_button}>Login</button>
      </div>
    </div>
  );
}

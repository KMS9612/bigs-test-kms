"use client";
import { useRouter } from "next/navigation";
import styles from "./page.module.scss";

export default function Home() {
  const router = useRouter();

  return (
    <div className={`${styles.main_box}`}>
      <p className={styles.title_text}>Bigs-Community</p>
      <div className={styles.title_button_wrap}>
        <button
          className={styles.title_route_button}
          onClick={() => router.push("/login")}
        >
          Login
        </button>
        <button
          className={styles.title_route_button}
          onClick={() => router.push("/signup")}
        >
          Sign Up
        </button>
      </div>
    </div>
  );
}

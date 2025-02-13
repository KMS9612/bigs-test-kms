"use client";
import { useRouter } from "next/navigation";
import styles from "./page.module.scss";

export default function Home() {
  const router = useRouter();
  return (
    <div className={styles.wrap}>
      Hello World
      <button onClick={() => router.push("/counter")}>Route to Counter</button>
    </div>
  );
}

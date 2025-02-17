"use client";
import styles from "@/styles/layouts/topNavi.module.scss";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import TopNaviItem from "../components/layouts/topNaviItem";
export default function TopNavigation() {
  const [isHidden, setIsHidden] = useState<boolean>(true);
  const path = usePathname();
  const router = useRouter();

  const naviItemObj = [
    { route: "/board", naviText: "Board" },
    { route: "/board/posting", naviText: "Posting" },
  ];

  const hideUIBeforeLogin = (path: string) => {
    const hiddenPath = ["/", "/login", "/signup"];
    return hiddenPath.includes(path);
  };

  useEffect(() => {
    setIsHidden(hideUIBeforeLogin(path));
  }, [path]);

  const handleRoute = (route: string) => {
    router.push(route);
  };
  return (
    <div className={styles.top_navi_wrap}>
      <h2>Bigs</h2>
      {isHidden ? (
        ""
      ) : (
        // 컴포넌트로 빼기
        <TopNaviItem naviItemObj={naviItemObj} handleRoute={handleRoute} />
      )}
      {isHidden ? (
        ""
      ) : (
        <div className={styles.top_navi_userinfo_wrap}>
          <div>{sessionStorage.getItem("email")}</div>
          <button className={styles.logout_button}>Logout</button>
        </div>
      )}
    </div>
  );
}
